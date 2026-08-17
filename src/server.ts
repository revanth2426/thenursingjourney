import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

// ---------------------------------------------------------------------------
// Security hardening: add safe, site-wide response headers on every response
// this worker emits (HTML, assets, JSON). These reduce clickjacking, MIME
// sniffing and referrer leakage without altering application behaviour.
//
// The CSP still needs 'unsafe-inline' for scripts/styles because TanStack
// Start's SSR emits inline serialized state and inline critical styles; a
// nonce/hash-based policy would require framework-level support. Everything
// else is locked to 'self' plus the Google Fonts origins.
// ---------------------------------------------------------------------------
const SECURITY_HEADERS: Record<string, string> = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "SAMEORIGIN",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
};

// Applied to HTML documents only. 'unsafe-inline' for script-src/style-src is
// required by TanStack Start's SSR (inline serialized router state and inline
// styles). Google Fonts is the only third-party origin the site loads.
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: blob:",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "upgrade-insecure-requests",
].join("; ");

const PRODUCTION_HOSTS = new Set(["thenursingjourney.in", "www.thenursingjourney.in"]);

// Cloudflare forwards plain-HTTP requests to the worker as-is unless "Always
// Use HTTPS" is enabled in the dashboard. Redirect them here so the first
// visit over http:// lands on HTTPS even without that setting. Local dev
// (localhost, *.localhost, IP literals) is never redirected.
function httpsRedirect(request: Request): Response | undefined {
  let url: URL;
  try {
    url = new URL(request.url);
  } catch {
    return undefined;
  }
  if (url.protocol !== "http:" || !PRODUCTION_HOSTS.has(url.hostname)) return undefined;
  url.protocol = "https:";
  url.hostname = "thenursingjourney.in";
  return Response.redirect(url.toString(), 301);
}

function withSecurityHeaders(request: Request, response: Response): Response {
  const headers = new Headers(response.headers);
  for (const [name, value] of Object.entries(SECURITY_HEADERS)) {
    if (!headers.has(name)) headers.set(name, value);
  }
  // HSTS only when the request arrived over HTTPS (browsers ignore it on plain
  // HTTP, and it keeps localhost/dev servers working over http://).
  try {
    if (new URL(request.url).protocol === "https:") {
      headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
    }
  } catch {
    // Malformed request URL — leave headers as-is.
  }
  // CSP on HTML documents only, and only in production. In dev, Vite serves
  // plain HTTP (often over a LAN IP from other machines); the policy's
  // upgrade-insecure-requests directive would rewrite every asset request to
  // https:// and break the page (no JS/CSS at all) on anything but localhost.
  let requestUrl: URL | undefined;
  try {
    requestUrl = new URL(request.url);
  } catch {
    // Malformed — treat as non-production.
  }
  const isProduction =
    requestUrl?.protocol === "https:" && !!requestUrl && PRODUCTION_HOSTS.has(requestUrl.hostname);
  const contentType = headers.get("content-type") ?? "";
  if (
    isProduction &&
    contentType.includes("text/html") &&
    !headers.has("Content-Security-Policy")
  ) {
    headers.set("Content-Security-Policy", CSP);
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const redirect = httpsRedirect(request);
      if (redirect) return redirect;

      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return withSecurityHeaders(request, await normalizeCatastrophicSsrResponse(response));
    } catch (error) {
      console.error(error);
      return withSecurityHeaders(
        request,
        new Response(renderErrorPage(), {
          status: 500,
          headers: { "content-type": "text/html; charset=utf-8" },
        }),
      );
    }
  },
};
