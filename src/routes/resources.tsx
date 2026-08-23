import { createFileRoute } from "@tanstack/react-router";

import { SectionPage, sectionHead } from "@/lib/section-route";

export const Route = createFileRoute("/resources")({
  head: () =>
    sectionHead({
      title: "Free Nursing Study Resources & Notes - The Nursing Journey",
      description:
        "Access free nursing study materials, notes, MCQs, and exam preparation resources for GNM, B.Sc. Nursing, and M.Sc. Nursing students. Updated regularly for Indian nursing students.",
      path: "/resources",
    }),
  component: ResourcesPage,
});

function ResourcesPage() {
  return <SectionPage section="resources" />;
}
