import { createFileRoute } from "@tanstack/react-router";

import { SectionPage, sectionHead } from "@/lib/section-route";

export const Route = createFileRoute("/why-us")({
  head: sectionHead,
  component: WhyUsPage,
});

function WhyUsPage() {
  return <SectionPage section="why-us" />;
}
