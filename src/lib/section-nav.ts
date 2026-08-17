// Shared helpers for path-based section URLs (/about, /services, …) that
// render the home page and scroll to the matching section.

export const SECTIONS = ["home", "about", "services", "resources", "why-us", "contact"] as const;

export type Section = (typeof SECTIONS)[number];

export function isSection(value: string): value is Section {
  return (SECTIONS as readonly string[]).includes(value);
}

// Offset so sections land just below the fixed header. Matches the
// `scroll-padding-top: 5.5rem` (88px) on <html> in styles.css.
const HEADER_OFFSET = 88;

// Direct loads should jump to the section instantly; navigations that happen
// within the running SPA scroll smoothly. Any page mount marks the session.
let hasNavigatedInSession = false;

export function markSessionActive() {
  hasNavigatedInSession = true;
}

export function scrollToSection(section: Section) {
  const behavior: ScrollBehavior = hasNavigatedInSession ? "smooth" : "instant";
  markSessionActive();
  if (section === "home") {
    window.scrollTo({ top: 0, behavior });
    return;
  }
  const target = document.getElementById(section);
  if (!target) return;
  const top = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top: Math.max(top, 0), behavior });
}
