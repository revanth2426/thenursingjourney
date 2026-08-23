import { createFileRoute } from "@tanstack/react-router";

import { SectionPage, sectionHead } from "@/lib/section-route";

export const Route = createFileRoute("/why-us")({
  head: () =>
    sectionHead({
      title: "Why Choose The Nursing Journey - Expert Nursing Guidance",
      description:
        "Work with a practising ICU nurse instead of a faceless agency. Get transparent, confidential, step-by-step support for nursing students and professionals across India.",
      path: "/why-us",
    }),
  component: WhyUsPage,
});

function WhyUsPage() {
  return <SectionPage section="why-us" />;
}
