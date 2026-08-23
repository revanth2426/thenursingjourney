import { createFileRoute } from "@tanstack/react-router";

import { SectionPage, sectionHead } from "@/lib/section-route";

export const Route = createFileRoute("/services")({
  head: () =>
    sectionHead({
      title: "Nursing Study, Council & Career Services - The Nursing Journey",
      description:
        "Expert nursing council registration, renewals, NOC, Good Standing Certificate assistance. Plus study materials, career guidance, and documentation support for nursing students and professionals.",
      path: "/services",
    }),
  component: ServicesPage,
});

function ServicesPage() {
  return <SectionPage section="services" />;
}
