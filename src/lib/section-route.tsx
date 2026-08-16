import { useEffect } from "react";

import { HomePage } from "@/components/HomePage";
import { scrollToSection, type Section } from "@/lib/section-nav";
import { description, title, url } from "@/routes/index";

/**
 * Shared head + component for the section routes (/about, /services, …).
 * Each of those URLs renders the home page scrolled to its section; canonical
 * stays on "/" because the document is the same.
 */
export function sectionHead() {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: `${url}og-image.jpg` },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export function SectionPage({ section }: { section: Section }) {
  useEffect(() => {
    // rAF so the scroll lands after all mount effects (and any router scroll
    // handling) but before the next paint.
    const raf = requestAnimationFrame(() => scrollToSection(section));
    return () => cancelAnimationFrame(raf);
  }, [section]);
  return <HomePage />;
}
