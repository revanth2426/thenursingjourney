import { createFileRoute } from "@tanstack/react-router";

import { SectionPage, sectionHead } from "@/lib/section-route";

export const Route = createFileRoute("/contact")({
  head: sectionHead,
  component: ContactPage,
});

function ContactPage() {
  return <SectionPage section="contact" />;
}
