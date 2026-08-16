import { createFileRoute } from "@tanstack/react-router";

import { SectionPage, sectionHead } from "@/lib/section-route";

export const Route = createFileRoute("/resources")({
  head: sectionHead,
  component: ResourcesPage,
});

function ResourcesPage() {
  return <SectionPage section="resources" />;
}
