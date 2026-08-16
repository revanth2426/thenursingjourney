// ============================================================================
//  SITE LINKS & REDIRECTS — control every link from THIS ONE FILE
// ============================================================================
//  This is the single source of truth for every URL on the site: WhatsApp
//  links, phone numbers, social profiles, navigation, downloads and any
//  redirects. Change a link here and it updates everywhere automatically.
//
//  HOW TO EDIT
//  -----------
//  1. WHATSAPP / PHONE
//     - Change `WHATSAPP_NUMBER` to your WhatsApp number (digits only, with
//       country code, e.g. "919494959401" = +91 94949 59401).
//     - Change the `text=` part of each `wa.*` link if you want a different
//       auto-filled first message.
//     - Change `phone.*` to your call number.
//
//  2. SOCIAL PROFILES  ->  edit the `socials.*` URLs.
//
//  3. NAVIGATION  ->  add/remove entries in `navLinks`. `href` can be a page
//     anchor ("/#services") or a full URL ("https://...").
//
//  4. DOWNLOADS  ->  the `downloads.*` entries below are ready-to-use
//     placeholders. To make a download link active:
//       - put the file in `public/` (e.g. public/syllabus.pdf)
//       - set `url` to "/syllabus.pdf" and `enabled: true`
//     Then render it anywhere with:  <a href={downloads.syllabus.url}>...
//
//  5. REDIRECTS  ->  the `redirects` section maps a short key to a target URL.
//     Use it for "outgoing" links or future routing.
//
//  TIP: relative paths (starting with "/") stay on your own site; full URLs
//  (https://...) open other sites. Use `enabled` to switch a link on/off
//  without deleting it.
// ============================================================================

// ---------------------------------------------------------------------------
//  WHATSAPP
// ---------------------------------------------------------------------------
/** WhatsApp number in international format, digits only (no +, spaces, or -). */
export const WHATSAPP_NUMBER = "919494959401";

/** Pre-built WhatsApp deep links. Edit the `text=` to change the first message. */
export const wa = {
  general: `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Siva%20Naik%2C%20I%20would%20like%20to%20know%20more%20about%20your%20nursing%20services`,
  studies: `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20need%20help%20with%20Nursing%20Study%20Materials%2FNotes`,
  council: `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20need%20help%20with%20Nursing%20Council%20Registration%2FRenewal`,
  career: `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20need%20guidance%20on%20Nursing%20Career%2FJob%20Opportunities`,
  contact: `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Siva%20Naik%2C%20I%20filled%20out%20your%20website%20form%20and%20would%20like%20to%20connect`,
} as const;

// ---------------------------------------------------------------------------
//  SOCIAL PROFILES
// ---------------------------------------------------------------------------
export const socials = {
  instagram: "https://www.instagram.com/nursing_sivanaik?igsh=dTVwaXpid2xyZm95&utm_source=qr",
  youtube: "https://youtube.com/@nursing_sivanaik?si=ylExht0aPHoX_XkU",
  threads: "https://www.threads.net/@nursing_sivanaik",
  telegram: "https://t.me/thenursingjouneryWithSIVANAIK",
} as const;

// ---------------------------------------------------------------------------
//  PHONE NUMBERS
// ---------------------------------------------------------------------------
export const phone = {
  /** WhatsApp number as it should appear to visitors. */
  whatsappDisplay: "94949 59401",
  /** Call number as it should appear to visitors. */
  callDisplay: "84999 20742",
  /** Call link (tap-to-call on mobile). Keep the +countrycode format. */
  callHref: "tel:+918499920742",
} as const;

// ---------------------------------------------------------------------------
//  NAVIGATION (navbar + footer quick links)
// ---------------------------------------------------------------------------
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Resources", href: "/resources" },
  { label: "Why Us", href: "/why-us" },
  { label: "Contact", href: "/contact" },
] as const;

// ---------------------------------------------------------------------------
//  DOWNLOADS — placeholder slots for any file you want visitors to download
// ---------------------------------------------------------------------------
//  To activate one:
//    1. Put the file in the public/ folder (e.g. public/syllabus.pdf).
//    2. Set its `url` to "/syllabus.pdf" (starts with a slash).
//    3. Set `enabled` to true.
//  Then render it with:  <a href={downloads.syllabus.url} download>...</a>
export const downloads = {
  syllabus: {
    label: "B.Sc. Nursing Syllabus (PDF)",
    url: "/syllabus.pdf", // <- set the real file path
    enabled: false, // set to true when the file is ready
  },
  mcqBank: {
    label: "MCQ Question Bank (PDF)",
    url: "/mcq-bank.pdf",
    enabled: false,
  },
  applicationForm: {
    label: "Application / Enquiry Form (PDF)",
    url: "/application-form.pdf",
    enabled: false,
  },
} as const;

// ---------------------------------------------------------------------------
//  RESOURCE LIBRARY — default links for resource tiles
// ---------------------------------------------------------------------------
//  These are fallback URLs used when a resource tile doesn't specify its own.
//  Change these once and every tile that uses the default picks up the new URL.
export const resourceLinks = {
  /** Default Telegram channel/group link for "View in Telegram" buttons. */
  defaultTelegramUrl: "https://t.me/thenursingjouneryWithSIVANAIK",
  /** Default download base URL - redirect to Telegram for notes access until files are ready */
  defaultDownloadUrl: "https://t.me/thenursingjouneryWithSIVANAIK",
} as const;

// ---------------------------------------------------------------------------
//  REDIRECTS — short key -> target URL
// ---------------------------------------------------------------------------
//  Use these for any outgoing link or future redirect. Replace the empty
//  strings with real URLs. Example: redirects.overseas = "https://...".
export const redirects = {
  /** External resource / partner link */
  partner: "https://example.com",
  /** Overseas nursing opportunities page (if you create one) */
  overseas: "https://example.com/overseas",
  /** Events / webinars / live sessions */
  events: "https://example.com/events",
} as const;

// ============================================================================
//  DO NOT EDIT BELOW THIS LINE (re-export compatibility for older imports)
// ============================================================================
//  site.ts simply re-exports everything from this file, so existing components
//  keep working. Always edit THIS file, never site.ts.
