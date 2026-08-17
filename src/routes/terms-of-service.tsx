import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/terms-of-service")({
  component: TermsOfService,
  head: () => ({
    meta: [
      { title: "Terms of Service - The Nursing Journey – Siva Naik" },
      {
        name: "description",
        content:
          "Read our Terms of Service to understand the rules and responsibilities governing your use of our website and services.",
      },
      { property: "og:title", content: "Terms of Service - The Nursing Journey – Siva Naik" },
      {
        property: "og:description",
        content:
          "Read our Terms of Service to understand the rules and responsibilities governing your use of our website and services.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://thenursingjourney.in/terms-of-service" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://thenursingjourney.in/terms-of-service" }],
  }),
});

function TermsOfService() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-12 pt-32 sm:px-6 lg:px-8">
        <h1 className="mb-6 text-3xl font-bold text-slate-900">Terms of Service</h1>
        <p className="mb-4 text-slate-600">Effective Date: August 16, 2026</p>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">1. Introduction</h2>
          <p className="mb-4">
            Welcome to The Nursing Journey – Siva Naik ("we," "our," or "us"). By accessing or using
            our website https://thenursingjourney.in (the "Website") and our services, you agree to
            be bound by these Terms of Service ("Terms"). If you do not agree with these Terms,
            please do not use the Website or our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">2. Nature of Services</h2>
          <p className="mb-4">The Nursing Journey provides the following services:</p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>
              <strong>Studies & Education:</strong> Nursing notes, study materials, MCQs, exam
              preparation guidance, and career counseling for nursing students.
            </li>
            <li>
              <strong>Nursing Council Services:</strong> Assistance with registration, renewals,
              NUID card, Good Standing Certificate, NOC, reciprocal registration, migration
              certificate, and foreign verification with APNMC/TSNC and other nursing councils.
            </li>
            <li>
              <strong>Career Support:</strong> Nursing career guidance, professional development,
              documentation guidance, higher education opportunities, job opportunities, interview
              preparation, resume support, and overseas nursing guidance.
            </li>
          </ul>
          <p className="mb-4">
            We act as a facilitator and consultant. We are not a government body, nursing council,
            or licensing authority. We do not guarantee government approvals, employment, visas, or
            overseas licensing outcomes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">3. Your Responsibilities</h2>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>Provide accurate, complete, and truthful information and documents.</li>
            <li>Ensure all documents submitted are authentic and legally obtained.</li>
            <li>Respond promptly to our requests for additional information or clarification.</li>
            <li>Comply with all applicable laws and regulations.</li>
            <li>Use our services only for lawful purposes.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">4. Fees and Payment</h2>
          <p className="mb-4">
            Service fees will be communicated to you before engagement. Payment terms will be agreed
            upon in writing (via WhatsApp, email, or formal quote). Fees are non-refundable once
            work has commenced, except as specified in the Refund Policy below.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">
            5. Refund and Cancellation Policy
          </h2>
          <p className="mb-4">
            <strong>Cancellation:</strong> You may cancel a service request by notifying us via
            WhatsApp or email.
          </p>
          <p className="mb-4">
            <strong>Refund Eligibility:</strong>
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>
              Full refund: If cancelled within 7 days of payment AND no work has been performed (no
              document review, no council submission, no draft preparation).
            </li>
            <li>
              Partial refund (50%): If work has commenced but no government/council submission has
              been made.
            </li>
            <li>
              No refund: Once any document has been submitted to a nursing council, government
              authority, or third party on your behalf.
            </li>
          </ul>
          <p className="mb-4">
            Refund requests must be made in writing within 30 days of cancellation. Approved refunds
            will be processed within 15 business days to the original payment method.
          </p>
          <p className="mb-4">
            For more details, please refer to our{" "}
            <a href="/refund-policy" className="underline">
              Refund Policy
            </a>
            .
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">6. Document Handling</h2>
          <p className="mb-4">
            Documents you provide (degree certificates, registration cards, Aadhaar details,
            marksheets, etc.) are used solely for the requested service. We implement reasonable
            security safeguards. Documents are retained only for the duration of the service and
            purged within 30 days of service completion, as detailed in our
            <a href="/privacy-policy" className="underline">
              Privacy Policy
            </a>
            .
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">
            7. Timelines and Third-Party Delays
          </h2>
          <p className="mb-4">
            We provide estimated timelines based on typical processing times. Actual timelines
            depend on nursing councils, government authorities, universities, and other third
            parties over which we have no control. We are not liable for delays caused by third
            parties.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">8. Limitation of Liability</h2>
          <p className="mb-4">
            To the maximum extent permitted by law, The Nursing Journey shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages, including loss of
            profits, data, or business opportunities. Our total liability for any claim arising out
            of or related to these Terms shall not exceed the fees paid by you for the specific
            service giving rise to the claim.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">9. Intellectual Property</h2>
          <p className="mb-4">
            All content on the Website (text, graphics, logos, study materials, resources) is the
            property of The Nursing Journey or its licensors and is protected by Indian and
            international copyright laws. You may not reproduce, distribute, or create derivative
            works without our written permission.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">10. Disclaimer</h2>
          <p className="mb-4">
            Our services are provided "as is" and "as available." We make no warranties, express or
            implied, regarding the accuracy, completeness, or reliability of information provided.
            We do not guarantee any specific outcome, including but not limited to: council
            registration approval, job placement, visa issuance, or licensing approval in any
            jurisdiction.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">
            11. Governing Law and Dispute Resolution
          </h2>
          <p className="mb-4">
            These Terms are governed by the laws of India. Any disputes arising out of or relating
            to these Terms shall be subject to the exclusive jurisdiction of the courts of Andhra
            Pradesh, India.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">12. Changes to Terms</h2>
          <p className="mb-4">
            We may update these Terms from time to time. Material changes will be posted on this
            page with an updated "Effective Date." Your continued use of the Website after changes
            constitutes acceptance of the new Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">13. Contact Us</h2>
          <p className="mb-4">If you have any questions about these Terms, please contact us:</p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>
              WhatsApp:{" "}
              <a href="https://wa.me/919494959401" className="underline">
                +91 94949 59401
              </a>
            </li>
            <li>Email: contact@thenursingjourney.in</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
