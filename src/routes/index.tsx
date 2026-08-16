import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

import { HomePage } from "@/components/HomePage";
import { markSessionActive } from "@/lib/section-nav";

export const title = "The Nursing Journey | Nursing Study, Council & Career Support";
export const description =
  "Nursing study materials, MCQs, nursing council registration & renewals, documentation and career guidance for nursing students and professionals in India.";
export const url = "https://thenursingjourney.in/";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: `${url}og-image.jpg` },
      { property: "og:image:width", content: "1024" },
      { property: "og:image:height", content: "1024" },
      { property: "og:image:alt", content: "The Nursing Journey – Siva Naik logo" },
      { property: "twitter:card", content: "summary_large_image" },
      { property: "twitter:title", content: title },
      { property: "twitter:description", content: description },
      { property: "twitter:image", content: `${url}og-image.jpg` },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "The Nursing Journey – Siva Naik",
          description,
          url,
          logo: `${url}og-image.jpg`,
          areaServed: ["Andhra Pradesh", "Telangana", "India"],
          founder: { "@type": "Person", name: "Siva Naik", jobTitle: "ICU Staff Nurse" },
          telephone: "+918499920742",
          sameAs: [
            "https://www.instagram.com/nursing_sivanaik",
            "https://www.youtube.com/@Nursing.sivanaik",
          ],
        }),
      },
    ],
  }),
});

function Index() {
  // Marks the SPA as active so section scrolls from here on go smooth.
  useEffect(markSessionActive, []);
  return <HomePage />;
}
