import { useEffect } from 'react';

import { HomePage } from '@/components/HomePage';
import { scrollToSection, type Section } from '@/lib/section-nav';

/**
 * Shared head + component for the section routes (/about, /services, ...).
 * Each route provides its own metadata for proper SEO.
 */

export function sectionHead(options: {
  title: string;
  description: string;
  path: string;
}) {
  const { title, description, path } = options;
  const fullUrl = `https://thenursingjourney.in${path}`;

  return {
    meta: [
      { title },
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: fullUrl },
      { property: 'og:image', content: `${fullUrl}og-image.jpg` },
    ],
    links: [{ rel: 'canonical', href: fullUrl }],
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
