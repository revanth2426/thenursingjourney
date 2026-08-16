import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/refund-policy")({
  component: RefundPolicy,
  head: () => ({
    meta: [
      { title: "Refund Policy - The Nursing Journey – Siva Naik" },
      {
        name: "description",
        content: "Read our Refund Policy to understand the terms and conditions for refunds and cancellations.",
      },
      { property: "og:title", content: "Refund Policy - The Nursing Journey – Siva Naik" },
      {
        property: "og:description",
        content: "Read our Refund Policy to understand the terms and conditions for refunds and cancellations.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://thenursingjourney.in/refund-policy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://thenursingjourney.in/refund-policy" }],
  }),
});

function RefundPolicy() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-12 pt-32 sm:px-6 lg:px-8">
        <h1 className="mb-6 text-3xl font-bold text-slate-900">Refund Policy</h1>
        <p className="mb-4 text-slate-600">Effective Date: August 16, 2026</p>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">1. Introduction</h2>
          <p className="mb-4">
            At The Nursing Journey – Siva Naik, we strive to provide high-quality services to our clients. If you are not
            satisfied with our services, we offer a refund policy as described below.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">2. Cancellation Policy</h2>
          <p className="mb-4">
            You may cancel a service request by notifying us via WhatsApp or email. Cancellation requests must be made in
            writing and include your name, contact details, and the service you wish to cancel.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">3. Refund Eligibility</h2>
          <p className="mb-4">
            Refund eligibility depends on the stage of service completion at the time of cancellation:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>
              <strong>Full Refund:</strong> If you cancel within 7 days of payment AND no work has been performed (no document
              review, no council submission, no draft preparation), you are eligible for a full refund.
            </li>
            <li>
              <strong>Partial Refund (50%)</strong>: If work has commenced but no government/council submission has been made,
              you are eligible for a 50% refund.
            </li>
            <li>
              <strong>No Refund:</strong> Once any document has been submitted to a nursing council, government authority, or third
              party on your behalf, no refund will be provided.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">4. Refund Process</h2>
          <p className="mb-4">
            To request a refund, please follow these steps:
          </p>
          <ol className="list-decimal list-inside mb-4 space-y-2">
            <li>Notify us via WhatsApp or email within 30 days of cancellation.</li>
            <li>Provide your name, contact details, and the service you wish to cancel.</li>
            <li>Include any relevant documentation or proof of payment.</li>
          </ol>
          <p className="mb-4">
            Approved refunds will be processed within 15 business days to the original payment method.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">5. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about our Refund Policy, please contact us:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>WhatsApp: <a href="https://wa.me/919494959401" className="underline">+91 94949 59401</a></li>
            <li>Email: contact@thenursingjourney.in</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}