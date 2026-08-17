# Nursing Compass

# Website Build Prompt — "The Nursing Journey – Siva Naik"

Paste everything below into **Ideavo.ai** as a single prompt, and attach/upload the logo image file when Ideavo prompts for assets (or reference it as "the uploaded logo" if Ideavo supports image attachments in the chat).

---

## PROMPT START

You are a senior full-stack web designer and front-end developer. Build a complete, production-ready, fully responsive **one-page marketing website (with anchor-linked sections)** for a nursing consultancy brand called **"The Nursing Journey – Siva Naik."**

### 1. BRAND IDENTITY

- **Brand name:** The Nursing Journey – Siva Naik
- **Tagline:** "Your Trusted Partner in Every Step of Your Nursing Journey"
- **Sub-tagline / process line:** STUDY • REGISTER • GROW • SERVE
- **Quote/hero line:** "From Nursing Studies to Professional Success — We Support Your Journey."
- **Founder:** Siva Naik, ICU Staff Nurse, BSc Nursing Graduate — based in Andhra Pradesh & Telangana. Also runs AIIMS NORCET exam prep content. Use as a credibility/trust signal — a real practicing nurse and educator behind the brand, not a faceless agency.
- **Verified social proof (real numbers — display prominently as trust stats):**
  - Instagram: **19K followers**, 119 posts, active daily content creator (`@nursing_sivanaik`)
  - YouTube channel: `youtube.com/@Nursing.sivanaik`
  - Also present on Threads (`nursing_sivanaik`)
  - Community proof badges seen on profile: "15K followers," "10K" milestone story highlights, active WhatsApp study group
- **Instagram bio (use as source text for an "About/Follow" micro-section):**
  - 🚩 Andhra Pradesh & Telangana
  - 💉 BSc Nursing Graduate
  - 📚 Nursing Education | MCQs | Notes
  - 🎯 AIIMS NORCET
  - 🚀 Helping nursing students succeed
- **Logo:** Use the provided logo file as-is (circular badge: deep space-navy background with starfield, glowing neon-blue ring border, realistic Earth with a nurse cap + red cross on top, a gold-to-orange gradient orbital ring with a rocket streaking across it, small Saturn icon, "The Nursing" in white script/bold + "Journey" in gold-orange gradient, "SIVA NAIK" in white below a thin divider line). Do not redraw or simplify it — treat it as the final logo asset, place it in the navbar (compact circular crop) and footer, and use it as the browser favicon.
- **Color palette — extracted directly from the actual logo file (use these as the site's true palette, replacing any earlier guesses):**
  - Deep Space Navy (primary background/dark sections): `#050B1F` → `#0A1330` gradient
  - Neon Ring Blue (glow accents, borders, hover states): `#3FA9F5` / `#63C7FF` with soft outer-glow/box-shadow effect
  - Gold-Orange Gradient (headings, CTAs, "Journey"-style text accents): linear-gradient from `#F5C542` → `#E8622C`
  - Pure White (primary text on dark backgrounds): `#FFFFFF`
  - Red Cross Accent (sparingly, for medical/urgent accents only): `#E63946`
  - Light backgrounds (content sections on white): `#F7F9FC` with navy `#0B1F4D` text
  - Keep the existing green/blue/purple accent colors from the poster for the 3 service-card categories (Studies=green `#2E9E4F`, Council=blue `#1E63C4`, Career=purple `#6B3FA0`) since those are established visual identifiers for those sections — but tie the overall site chrome (navbar, hero, footer, buttons) to the navy/gold/neon-blue palette above to match the logo.
  - Add a subtle recurring visual motif from the logo across the site: a soft radial starfield texture or glow-ring border detail on the hero background and footer, echoing the logo's "space" theme without overdoing it.
- **Typography:** Bold, confident sans-serif for headings (e.g., Poppins / Montserrat, weight 700–800), clean readable sans-serif for body (e.g., Inter / Open Sans). Section headlines should echo the logo's split-color treatment (white/navy + gold-orange gradient) where it fits.
- **Visual style:** Clean healthcare/professional aesthetic — rounded cards, soft shadows, iconography with circular badge backgrounds, generous white space, trust-badge icons (shield, handshake, target, ribbon). Dark hero/footer sections should echo the logo's "space" feel (deep navy, subtle glow, starfield texture); light content sections stay clean and airy.

### 2. SITE STRUCTURE (single page, sticky nav with smooth-scroll anchors)

`Home (Hero) → Why Choose Us → About/Mission/Vision → Services (3 core pillars) → Free Study Resources / Content Library → Social Proof strip → Process/Trust strip → Testimonials → Contact/CTA → Footer`

### 3. SECTION-BY-SECTION CONTENT

**A. Sticky Navbar**

- Logo + brand name (left)
- Nav links: Home, About, Services, Resources, Why Us, Contact
- WhatsApp CTA button (top right): "Chat on WhatsApp" — use the pre-filled General CTA link below
- Hamburger menu on mobile with slide-in drawer

**Pre-filled WhatsApp links** — every WhatsApp CTA on the site should use a contextual pre-filled `wa.me` message rather than a blank chat. Use these exact links per section:

- General/Hero/Navbar CTA: `https://wa.me/919494959401?text=Hi%20Siva%20Naik%2C%20I%20would%20like%20to%20know%20more%20about%20your%20nursing%20services`
- Studies & Education CTA: `https://wa.me/919494959401?text=Hi%2C%20I%20need%20help%20with%20Nursing%20Study%20Materials%2FNotes`
- Nursing Council Services CTA: `https://wa.me/919494959401?text=Hi%2C%20I%20need%20help%20with%20Nursing%20Council%20Registration%2FRenewal`
- Career Support CTA: `https://wa.me/919494959401?text=Hi%2C%20I%20need%20guidance%20on%20Nursing%20Career%2FJob%20Opportunities`
- Final Contact section CTA: `https://wa.me/919494959401?text=Hi%20Siva%20Naik%2C%20I%20filled%20out%20your%20website%20form%20and%20would%20like%20to%20connect`

**B. Hero Section**

- Large headline: "THE NURSING JOURNEY" with "JOURNEY" in orange/gold
- Sub-label: "★ SIVA NAIK ★" in a pill/badge
- Process line: STUDY • REGISTER • GROW • SERVE
- Tagline: "Your Trusted Partner in Every Step of Your Nursing Journey"
- Hero image: professional nurse portrait (arms crossed, stethoscope, scrubs) — placeholder image with alt text "Siva Naik, ICU Staff Nurse"
- Two CTA buttons: "Explore Our Services" (scroll to services) and "Chat on WhatsApp" (external link)
- Right-side trust icon strip (5 items, icon + label): Trusted Guidance, Reliable Support, Faster Process, Client Satisfaction, Transparent & Professional — each with a circular colored icon badge (shield, person, target, handshake, ribbon)

**C. "Why Choose Us" Panel**
Dark navy rounded card with checklist (green checkmarks):

- Expert Guidance
- Updated Information
- Hassle-Free Process
- Personalized Support
- 100% Confidentiality

Paired beside it, a navy quote card:

> "From Nursing Studies to Professional Success — We Support Your Journey."

**D. About / Mission / Vision** (new section, not on the poster but should be added for a full website)

- **About Us:** The Nursing Journey – Siva Naik is a dedicated platform supporting nursing students and professionals throughout their academic and professional journey — offering study support, educational guidance, nursing council services, documentation assistance, and career guidance.
- **Mission:** To empower nursing students and professionals with quality education, practical knowledge, professional guidance, and reliable support — helping them progress confidently from nursing studies to a successful career.
- **Vision:** To become a trusted nursing platform that connects education, professional registration, documentation, higher studies, and career opportunities — supporting nurses at every stage of their journey.
- Display as 3 side-by-side cards (stack vertically on mobile) with icons (info, target, eye).

**E. "Our 3 Core Services" — Section Heading**

Three cards, each in its own accent color, each with an icon, sub-tag line, and checklist:

1. **Studies & Education** (green, book icon)
   - Tagline: LEARN • PREPARE • EXCEL
   - Nursing Notes & Study Materials
   - Exam Preparation & Important Questions
   - GNM Nursing
   - B.Sc. Nursing
   - Post Basic B.Sc. Nursing
   - M.Sc. Nursing
   - Clinical & Practical Knowledge
   - Entrance & Competitive Exam Guidance
   - Nursing Career & Higher Study Guidance
   - Opportunities in India & Abroad

2. **Nursing Council Services** (blue, clipboard icon)
   - Tagline: REGISTER • RENEW • PROGRESS
   - Registration & Renewals
   - NUID Card & Renewals
   - Good Standing Certificate
   - No Objection Certificate (NOC)
   - Reciprocal Registration
   - Migration Certificate
   - Foreign Verification
   - Document Guidance & Support

3. **Career Support** (purple, growth-chart icon)
   - Tagline: GUIDE • GROW • ACHIEVE
   - Nursing Career Guidance
   - Professional Development
   - Documentation Guidance
   - Higher Education Opportunities
   - Job Opportunities in India & Abroad
   - Interview Preparation & Resume Support
   - Overseas Nursing Guidance

Each card: icon badge header, colored tag pill, bulleted checklist with small icons, subtle illustration/photo at card bottom (books+graduation cap for education, building for council, silhouettes+globe for career), hover-lift animation.

**F. Free Study Resources / Content Library** (new section — this is the core of the real Instagram content and should be a major feature of the site, not an afterthought)

Siva Naik's Instagram is primarily a high-volume educational content channel: subject-wise and unit-wise B.Sc. Nursing study carousels, MCQs, and important-questions posts, each designed as a branded infographic card (navy header with logo, subject title in bold serif/display font, unit breakdown icons, consistent color-coded category badges). Build a section that mirrors this as a browsable resource library:

- Section heading: "Free Nursing Study Resources" with sub-line "Unit-wise notes, MCQs & important questions — straight from our Instagram classroom"
- A **search input bar** above the filter pills — client-side keyword search across subject name, unit name, and tags (e.g., typing "Anatomy" or "Unit 3" instantly filters the grid, combinable with the filter pills above). Each card: subject title, semester/unit tag (e.g., "3rd Semester," "Unit 1–7"), a small "Important Questions" or "Notes" badge, and a "View on Instagram" link/icon.
- Example real subjects to seed placeholder cards with (from actual content published):
  - Mental Health Nursing I & II (Units I–VIII: Mood Disorders, Neurotic & Stress-Related Disorders, Schizophrenia, Substance Use Disorders, Personality & Sexual Disorders, Organic Brain Disorders, Behavioral & Emotional Disorders in Children, Psychiatric Emergencies & Crisis Intervention)
  - Human Anatomy (All Major Organs) — full study notes series
  - B.Sc. Nursing 2nd Semester – Nursing Foundation 1 & 2 (units-wise Q&A)
  - B.Sc. Nursing 3rd Semester – Adult Health Nursing 1
  - B.Sc. Nursing 4th Semester – Pathology & Genetics, Pharmacology 1 & 2
  - B.Sc. Nursing 5th Semester – Community Health Nursing 1, Educational Technology & Nursing Education
- Below the grid, a callout banner: "New notes and MCQs posted regularly — follow along on Instagram & YouTube" with buttons linking to Instagram (`https://www.instagram.com/nursing_sivanaik`) and YouTube (`https://www.youtube.com/@Nursing.sivanaik`).
- Note in code comments: this grid should be built so new resource cards can be added easily (array/data-driven list, not hardcoded repeated markup) since new content is posted frequently.

**G. Social Proof Strip** (new — thin horizontal stat band, right after the resource library, navy or white background with bold navy numbers)

- 19K+ Instagram Followers
- 119+ Educational Posts
- Active on YouTube, Instagram & Threads
- Based in Andhra Pradesh & Telangana
  Display as 4 large stat numbers with small labels underneath, responsive to a 2x2 grid on mobile.

**H. Trust/Process Strip** (dark navy horizontal band, 5 icons in a row, stacks to 2 columns on mobile)

- Save Time & Effort
- Accurate & Updated Information
- Step by Step Guidance
- Support Until Success
- Your Success is Our Priority

**I. Testimonials Section** (new — add for full website credibility, even as placeholder structure)

- 3-card carousel/grid with placeholder quotes, nurse name, course/service used, star rating. Include a note in code comments: "Replace placeholder testimonials with real client feedback."

**J. Contact / CTA Section**

- Heading: "Let's Build Your Nursing Future Together!"
- WhatsApp: 94949 59401 (click-to-chat button, green, WhatsApp icon) — use the Final Contact section pre-filled link above
- Phone/Call: 84999 20742 (click-to-call button) → `tel:+918499920742`
- Simple contact form: Name, Phone/Email, Service Interested In (dropdown: Studies & Education / Council Services / Career Support), Message → on submit, show success state (form can post to a placeholder endpoint or mailto — note this clearly in code comments as needing backend wiring)
- Social links: Instagram (@nursing_sivanaik → https://www.instagram.com/nursing_sivanaik), YouTube (youtube.com/@Nursing.sivanaik), Threads (@nursing_sivanaik), Telegram ("THE NURSING JOURNEY – SIVA NAIK")

**K. Footer**

- Logo + short tagline
- Quick links (nav anchors)
- Contact info repeated (WhatsApp, phone, Instagram, YouTube, Threads, Telegram)
- Small line: "19K+ nursing students following our journey" as a soft credibility close
- Copyright line: "© [current year] The Nursing Journey – Siva Naik. All rights reserved."

### 4. TECH STACK (target platform: Ideavo.ai — a full-stack React/Next.js + Tailwind AI app builder)

- Build using **Next.js (App Router) + React + TypeScript + Tailwind CSS**, component-based structure (e.g., `Navbar`, `Hero`, `WhyChooseUs`, `AboutMissionVision`, `Services`, `ResourceLibrary`, `SocialProof`, `TrustStrip`, `Testimonials`, `Contact`, `Footer` as separate components).
- Use **`lucide-react`** for all icons (shield, target, handshake, book, clipboard, trending-up, search, message-circle, phone, instagram, youtube, send, etc.) — no external icon image files.
- Use **Framer Motion** for scroll-reveal/fade-in animations on section entry and subtle hover/tap micro-interactions on cards and buttons — keep it smooth and performant, not excessive.
- Resource Library data should live in a typed array/JSON data file (e.g., `data/resources.ts`) with fields `{ id, subject, semester, units, category, tag, instagramUrl }`, rendered via `.map()` — not hardcoded repeated JSX blocks — so new entries can be appended easily as new content is posted.
- Deliver clean, typed, production-ready component code with sensible file/folder structure — not a single monolithic file.

### 5. DESIGN & RESPONSIVE REQUIREMENTS

- **Fully responsive** across all breakpoints: mobile (320–480px), tablet (481–1024px), desktop (1025px+), and large desktop (1440px+). Test layout logic at each breakpoint — no horizontal scroll, no overlapping text/icons, no cut-off cards at any width.
- Navbar collapses into a mobile hamburger menu below 768px.
- Service cards: 3-column grid on desktop → 1-column stacked on mobile, consistent card heights (equal height / flex alignment), no orphaned whitespace.
- Hero section: image and text side-by-side on desktop, text first then image stacked below on mobile.
- Use `rem`/relative units, fluid typography (`clamp()`), and flexible Tailwind grid/flexbox — avoid fixed pixel widths that break on small screens.
- All buttons/links must have visible hover, focus, and active states, and be touch-friendly (min 44px tap targets) on mobile.
- Optimize images with `next/image` and proper `alt` text for accessibility and SEO.
- Add proper semantic HTML (`

`, ``, ``, `

`, `

`) and ARIA labels where relevant for accessibility.

- Add Next.js metadata for SEO: title ("The Nursing Journey – Siva Naik | Nursing Study, Council & Career Support"), meta description summarizing the mission, Open Graph tags for social sharing, and the provided logo as favicon.
- Ensure fast load: no unnecessary large dependencies, lazy-load images below the fold.
- Cross-browser consistency (Chrome, Safari, Firefox, Edge) — avoid CSS features with poor support without fallbacks.

### 6. TONE OF VOICE

Professional, warm, trustworthy, encouraging — speaking to nursing students and working nurses who need guidance through studies, government/council registration paperwork, and career growth (including overseas opportunities). Avoid overly salesy language; emphasize reliability, confidentiality, and step-by-step support.

### 7. DELIVERABLE

Output the complete, ready-to-deploy Next.js + Tailwind + TypeScript project code, fully responsive, with clear code comments marking where the site owner should plug in: real testimonials, final contact-form backend/email endpoint, and the uploaded logo file (already provided — use it directly, do not regenerate).

## PROMPT END

attachjed image is logo

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://study-serve-grow.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/de361bd3-4d33-46e9-8a5a-8e7d8d940703).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Changing Images (all images live in ONE file)

Every image on the site (logo, hero photo, favicon) is controlled from a single file:

```
src/data/site-images.ts
```

Edit that one file to swap any picture — the Navbar, Footer, Hero and favicon all read from it, so you never touch component code again.

### Where to put the files

| Type of image                      | Folder        |
| ---------------------------------- | ------------- |
| Photos / graphics used on the page | `src/assets/` |
| Favicon / browser icons            | `public/`     |

### Filling in the file

1. Drop your file in the right folder (see table above).
2. In `site-images.ts`, add an import at the top for files in `src/assets/`:
   ```ts
   import myImage from "@/assets/my-image.jpg";
   ```
   Files in `public/` are referenced by plain path string (e.g. `"/favicon.png"`), no import needed.
3. Set the fields for that image:
   - `src` → how the browser loads it (the import, or the `/public` path)
   - `alt` → text shown if the image fails + read by screen readers (describe what it shows)
   - `width` / `height` → the file's **real** pixel dimensions (stops layout jumping while loading)
   - `fileName` / `location` / `note` → just for your reference

### Recommended dimensions

| Image                       | Where it appears                              | Recommended size                                          |
| --------------------------- | --------------------------------------------- | --------------------------------------------------------- |
| Logo                        | Navbar (~44px circle) + Footer (~56px circle) | Square, ≥512×512 (ideal 1024×1024), PNG/JPG/SVG           |
| Hero photo                  | Top section, right side                       | Portrait ~4:5 (e.g. 912×1104), max ~1000px wide, < 250 KB |
| Favicon                     | Browser tab                                   | Square PNG 32×32 or 48×48, keep tiny                      |
| OG/share image _(optional)_ | WhatsApp/Instagram/FB/Twitter link preview    | Exactly 1200×630, < 1 MB                                  |

Keep photos compressed (use a tool like [tinypng.com](https://tinypng.com)) so the page loads fast — a 250 KB limit per photo is a good target.

## Changing Links, Redirects & Downloads (all in ONE file)

Every URL on the site — WhatsApp links, phone numbers, social profiles,
navigation, downloads and redirects — is controlled from a single file:

```
src/data/links.ts
```

Open that file and follow the comments at the top. A quick summary:

- **WhatsApp / phone** → change `WHATSAPP_NUMBER` and the `wa.*` / `phone.*` entries.
- **Social profiles** → change the `socials.*` URLs.
- **Navigation** → edit `navLinks` (anchor like `#services`, or a full URL).
- **Downloads** → fill in the placeholder slots in `downloads.*` (drop the file in `public/`, set `url` to `"/filename.pdf"`, set `enabled: true`).
- **Redirects / any other link** → add entries under `redirects.*`.

> `src/data/site.ts` is now just a compatibility shim that re-exports `links.ts`.
> Always edit `links.ts`, never `site.ts`.
