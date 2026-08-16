import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

import { images } from "@/data/site-images";
import { navLinks, wa } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll + iOS rubber-band prevention when drawer is open
  useEffect(() => {
    if (!open) return;
    const scrollY = window.scrollY;
    const body = document.body;
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.inset = `-${scrollY}px 0 0 0`;
    return () => {
      body.style.overflow = "";
      body.style.position = "";
      body.style.inset = "";
      // Restore scroll position instantly (not smooth) so closing the drawer
      // doesn't animate a "jump down and back up". CSS `scroll-behavior: smooth`
      // on <html> would otherwise make window.scrollTo animate.
      const root = document.documentElement;
      const prev = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      window.scrollTo(0, scrollY);
      root.style.scrollBehavior = prev;
    };
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  // Offset so sections land just below the fixed header. Matches the
  // `scroll-padding-top: 5.5rem` (88px) already set on <html> in styles.css.
  const HEADER_OFFSET = 88;

  // Scroll to a section. Uses an explicit pixel position with window.scrollTo
  // (not scrollIntoView) so the direction is always the shortest/expected one.
  // When `waitForUnlock` is true (drawer was open), we wait for the body
  // scroll-lock to be released by React's effect cleanup before scrolling.
  const scrollToSection = useCallback((href: string, waitForUnlock: boolean) => {
    const doScroll = () => {
      if (href === "#home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const target = document.querySelector(href);
      if (!target) return;
      const top = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
    };
    if (waitForUnlock) {
      window.setTimeout(doScroll, 120);
    } else {
      doScroll();
    }
  }, []);

  // Nav click (desktop quicklinks, mobile drawer links, logo): use native navigation
  // for page links, but handle anchor links within the same page (like #home, #about, etc.)
  const handleNavClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>, href: string) => {
      // For external links or full page routes (not starting with #), let browser handle navigation
      if (!href.startsWith("#")) {
        return; // Let browser navigate naturally
      }
      // For anchor links within the same page, prevent default and scroll to section
      e.preventDefault();
      const wasOpen = open;
      close();
      scrollToSection(href, wasOpen);
    },
    [open, close, scrollToSection]
  );

  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  return (
    <>
      <header
        className={`nav-starfield fixed inset-x-0 top-0 z-50 overflow-hidden transition-colors duration-300 ${
          scrolled ? "bg-navy-deep/95 backdrop-blur-md shadow-lg" : "bg-navy-deep/70 backdrop-blur"
        }`}
      >
        <nav
          aria-label="Main navigation"
          className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8"
        >
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex min-w-0 items-center gap-3"
          >
            <img
              src={images.logo.src}
              alt={images.logo.alt}
              width={images.logo.width}
              height={images.logo.height}
              className="h-11 w-11 shrink-0 rounded-full object-cover ring-glow"
            />
            <span className="min-w-0">
              <span className="block truncate font-display text-sm leading-tight font-extrabold tracking-tight text-primary-foreground sm:text-base">
                The Nursing <span className="text-gradient-gold">Journey</span>
              </span>
              <span className="block truncate text-[0.65rem] tracking-[0.22em] text-neon-soft uppercase">
                Siva Naik
              </span>
            </span>
          </a>

          <div className="flex items-center gap-1">
            <ul className="hidden items-center gap-1 md:flex">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => handleNavClick(e, l.href)}
                    className="inline-flex min-h-11 items-center rounded-full px-3.5 text-sm font-medium text-primary-foreground/85 transition-colors hover:bg-neon/15 hover:text-neon-soft focus-visible:ring-2 focus-visible:ring-neon focus-visible:outline-none"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={wa.general}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden min-h-11 items-center gap-2 rounded-full bg-whatsapp px-4 text-sm font-semibold text-navy-deep transition-transform hover:scale-[1.03] focus-visible:ring-2 focus-visible:ring-neon focus-visible:outline-none sm:inline-flex"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              Chat on WhatsApp
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-primary-foreground transition-colors hover:bg-neon/15 md:hidden"
            >
              {open ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile drawer (sibling of header — avoids z-index stacking-context conflict) ── */}
      <div
        ref={drawerRef}
        className={`fixed inset-0 z-50 md:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={close}
        />

        {/* Drawer panel */}
        <aside
          className={`absolute z-0 inset-y-0 right-0 flex w-[min(84vw,22rem)] flex-col transition-transform duration-300 ease-in-out starfield ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ backgroundColor: "#0e1225", position: "absolute" }}
        >
          <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-6 py-4">
            <span className="font-display text-lg font-extrabold text-white">Menu</span>
            <button
              type="button"
              onClick={close}
              aria-label="Close menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-2 py-3" aria-label="Mobile navigation links">
            <ul className="flex flex-col gap-0.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => handleNavClick(e, l.href)}
                    className="flex min-h-12 items-center rounded-xl px-4 text-base font-medium text-white transition-colors hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-neon focus-visible:outline-none"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="shrink-0 border-t border-white/10 px-4 py-4">
            <a
              href={wa.general}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-whatsapp px-5 text-base font-semibold text-navy-deep transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              Chat on WhatsApp
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}
