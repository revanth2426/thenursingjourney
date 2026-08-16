import { createFileRoute } from "@tanstack/react-router";

import { SectionPage, sectionHead } from "@/lib/section-route";

export const Route = createFileRoute("/services")({
  head: sectionHead,
  component: ServicesPage,
});

function ServicesPage() {
  return <SectionPage section="services" />;
}
