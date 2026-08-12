# DESIGN_SETUP — Claude-As-A-Web-Designer Setup + Security Hardening Audit

This file records two things for **The Nursing Journey – Siva Naik** project:
**(1)** the five-piece design setup ("Claude as a Web Designer") installed here,
and **(2)** the security hardening audit and every change made.

---

## Part 1 — Design setup (installed)

### Skills — installed to `.claude/skills/` (project-scoped, committed)

| Skill | What it gives Claude | Location |
| ----- | -------------------- | -------- |
| `emil-design-eng` | Craft judgement: easing, shadows, durations, animation auditing | `.claude/skills/emil-design-eng` |
| `impeccable` | Vocabulary layer: 23 slash commands + 59 detector rules | `.claude/skills/impeccable` |
| `design-taste-frontend` | References/taste: layout, typography, motion, spacing | `.claude/skills/design-taste-frontend` |

Installed with the skills CLI (non-interactive agent target = `claude-code`):

```sh
npx --yes skills add https://github.com/emilkowalski/skills --skill emil-design-eng --agent claude-code -y
npx --yes skills add https://github.com/pbakaus/impeccable --skill impeccable --agent claude-code -y
npx --yes skills add https://github.com/Leonxlnx/taste-skill --skill design-taste-frontend --agent claude-code -y
```

Security notes from the CLI's own scan at install time: `emil-design-eng` and
`design-taste-frontend` rated **Low Risk / 0 alerts**; `impeccable` rated
**Med Risk**. Skills run with full agent permissions — review
`.claude/skills/impeccable/SKILL.md` before enabling it, per the CLI's warning.

### MCP servers — the "eyes"

- **Playwright MCP** (`npx @playwright/mcp@latest`) — added, project/local scope
  (stored in `~/.claude.json` under this project). Lets Claude open the built
  page in a real browser, read the accessibility tree, click through and fix
  breakage. Command: `claude mcp add playwright npx @playwright/mcp@latest`
- **Figma MCP** (`https://mcp.figma.com/mcp`) — added at **user scope** (global).
  Needs one-time OAuth: open a Claude Code session, run `/mcp`, select `figma`,
  Authenticate → Allow Access. Look for "Authentication successful. Connected
  to figma". Command: `claude mcp add --scope user --transport http figma https://mcp.figma.com/mcp`

Verify: `claude mcp list`.

### Impeccable init artifacts

`PRODUCT.md` and `DESIGN.md` were hand-written with this brand's context so the
Impeccable commands read them. In an interactive Claude Code session you can
also run `/impeccable init` to (re)generate them.

### Required manual steps (must be done in Claude Code)

1. **Restart Claude Code.** Skills are read at startup; they look inert until
   you restart.
2. Run **`/impeccable init`** once (or keep the committed `PRODUCT.md` /
   `DESIGN.md`).
3. Authenticate **Figma MCP** via `/mcp` (one-time OAuth).
4. Add `--scope user` to the Playwright command too if you want it available in
   every project, not just this one.

### Suggested example prompt (uses all five)

> Landing page for the nursing consultancy, dark navy/gold editorial style.
> Build it, open it in Playwright, and fix anything that breaks at 390px. Then
> run `/impeccable critique` and act on what comes back.

---

## Part 2 — Security hardening audit

### Summary

This is a **static, client-rendered one-page marketing site** (TanStack Start +
React 19 + Tailwind v4). It has **no backend API, no authentication, no server
functions, and no file uploads**; the only user input is a contact form that
composes a `wa.me` WhatsApp link entirely in the browser. As a result, several
categories are **not applicable**, and the attack surface is small. `npm audit`
reports **0 vulnerabilities** across all 476 dependencies.

### 1. Rate limiting — NOT APPLICABLE (documented)

- There are **no auth endpoints** (no login, signup, password reset) and **no
  server functions or API routes** in this codebase, so there is nothing to
  rate-limit server-side today.
- CSRF protection is already enabled for any future server functions
  (`src/start.ts` → `createCsrfMiddleware`, filtered to `serverFn`).
- **Recommendation (if a backend/API is added later):** apply per-IP and
  per-account limits with exponential backoff and configurable thresholds at
  the platform/CDN layer (Cloudflare/Wrangler) or in `src/server.ts`, and keep
  the CSRF middleware.

### 2. Input validation — FIXED (client-side defense-in-depth)

The only input surface is the contact form (`src/components/Contact.tsx`).
Values were already safe (trimmed + `encodeURIComponent`-escaped into a `wa.me`
URL, never rendered back or stored), but there was no length/character
validation. Added:

- Required + trimmed fields; `maxLength` and JS-side checks:
  - Name: max **100** chars, no control characters.
  - Contact: max **150** chars, must match a phone/email-safe character
    whitelist, no control characters.
  - Message: max **1000** chars, no control characters.
- Inline, accessible error messages (`role="alert"`, `aria-invalid`,
  `aria-describedby`, red `destructive` styling). Submit is blocked on errors.
- `maxLength` attributes stop oversized input at the browser before it even
  reaches the handler.
- **Note:** validation here is browser-side only (there is no server). When a
  real contact backend/email endpoint is added, mirror these rules server-side
  with a strict schema (type, length, format, allowed values) — reject invalid
  input, don't just sanitize.

### 3. File upload security — NOT APPLICABLE

- No upload functionality exists. The `public/` folder serves only a favicon
  and `robots.txt`. The `downloads.*` slots in `src/data/links.ts` are disabled
  placeholders.
- **If downloads/uploads are enabled later:** never trust client filenames or
  MIME types; validate MIME + extension + file signature + size, generate safe
  server-side filenames, store outside the web root, and prevent path
  traversal.

### 4. Error handling — REVIEWED (already solid)

- `src/server.ts` normalizes h3-swallowed SSR errors into a **generic 500 HTML
  page** (`renderErrorPage()`); details are logged server-side only.
- `src/lib/error-capture.ts` expands Error args for logs and records the last
  error without ever exposing internals to clients.
- `src/lib/error-page.ts` renders a neutral page with no stack traces, paths,
  or secrets.
- `src/routes/__root.tsx` `ErrorComponent` shows a generic message and reports
  only to Lovable telemetry (client-side).
- **No client-visible leaks found** (no stack traces, DB errors, internal
  paths, or secrets reach the browser). Production config does not expose debug
  info.

### 5. Dependencies — AUDITED (clean)

- `npm audit --json`: **0 vulnerabilities** (0 low / moderate / high / critical)
  across 476 dependencies (260 prod, 163 dev, 75 optional, 1 peer).
- **No upgrades needed.** No breaking/risky packages were force-upgraded.
- Supply-chain guard already in place: `bunfig.toml` enforces a 24h minimum
  release age for installs.

### Additional hardening applied

- **Security response headers** added in `src/server.ts` on every response:
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: SAMEORIGIN`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
  - `Strict-Transport-Security` (HSTS) added automatically when the request is
    over HTTPS (skipped on plain HTTP so localhost/dev still work).

### Items still requiring manual review

1. **Content-Security-Policy** — intentionally NOT set in code. TanStack Start
   SSR emits inline scripts/styles and the page loads Google Fonts, so a strict
   CSP must be tuned against a real render and tested per environment. Deploy
   it at the platform/CDN layer after verifying it doesn't break hydration.
2. **Figma MCP OAuth** — complete the `/mcp` → figma → Authenticate flow.
3. **`impeccable` skill (Med Risk)** — review `.claude/skills/impeccable/SKILL.md`
   before enabling; skills run with full agent permissions.
4. **HSTS preload** — only meaningful once served over HTTPS in production;
   submit the domain for HSTS preload after confirming.
5. **Contact form** — validation is client-side only because there is no
   backend. When a real contact/email backend is added, replicate the
   validation server-side and add rate limiting to that endpoint.
6. **`src/components/ui/chart.tsx`** uses `dangerouslySetInnerHTML` for a static,
   developer-controlled `<style>` block — safe as-is (no user input), but worth
   remembering if it ever becomes dynamic.

