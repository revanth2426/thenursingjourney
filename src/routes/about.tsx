import { createFileRoute } from "@tanstack/react-router";

import { SectionPage, sectionHead } from "@/lib/section-route";

export const Route = createFileRoute("/about")({
  head: () =>
    sectionHead({
      title: "About Siva Naik - The Nursing Journey",
      description:
        "Learn about Siva Naik, ICU Staff Nurse and founder of The Nursing Journey. Discover how 19K+ nursing students trust our guidance for studies, council registration, and career support.",
      path: "/about",
    }),
  component: AboutPage,
});

function AboutPage() {
  return <SectionPage section="about" />;
}
