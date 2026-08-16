import { createFileRoute } from "@tanstack/react-router";

import { SectionPage, sectionHead } from "@/lib/section-route";

export const Route = createFileRoute("/about")({
  head: sectionHead,
  component: AboutPage,
});

function AboutPage() {
  return <SectionPage section="about" />;
}
