import { createFileRoute } from "@tanstack/react-router";

import { SectionPage, sectionHead } from "@/lib/section-route";

export const Route = createFileRoute("/contact")({
  head: () =>
    sectionHead({
      title: "Contact Us - The Nursing Journey",
      description:
        "Get in touch with Siva Naik for nursing study guidance, council registration assistance, and career support. WhatsApp: +91 94949 59401 | Email: contact@thenursingjourney.in",
      path: "/contact",
    }),
  component: ContactPage,
});

function ContactPage() {
  return <SectionPage section="contact" />;
}
