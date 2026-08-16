import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicy,
  head: () => ({
    meta: [
      { title: "Privacy Policy - The Nursing Journey – Siva Naik" },
      {
        name: "description",
        content:
          "Learn how we protect your personal information and comply with India's Digital Personal Data Protection (DPDP) Act 2023.",
      },
      { property: "og:title", content: "Privacy Policy - The Nursing Journey – Siva Naik" },
      {
        property: "og:description",
        content:
          "Learn how we protect your personal information and comply with India's Digital Personal Data Protection (DPDP) Act 2023.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://thenursingjourney.in/privacy-policy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://thenursingjourney.in/privacy-policy" }],
  }),
});

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-12 pt-32 sm:px-6 lg:px-8">
        <h1 className="mb-6 text-3xl font-bold text-slate-900">Privacy Policy</h1>
        <p className="mb-4 text-slate-600">Effective Date: August 13, 2026</p>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">1. Introduction</h2>
          <p className="mb-4 text-slate-800">
            The Nursing Journey (“we,” “our,” or “us”) is committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, disclose, and safeguard your information
            when you visit our website
            <a href="/" className="underline ml-1 text-blue-600">
              https://thenursingjourney.in
            </a>{" "}
            (the “Website”), use our services, or communicate with us via WhatsApp or other
            channels.
          </p>
          <p className="mb-4 text-slate-800">
            By accessing or using the Website, you acknowledge that you have read, understood, and
            agree to be bound by this Privacy Policy. If you do not agree with this Privacy Policy,
            please do not use the Website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">
            2. Information We Collect
          </h2>
          <p className="mb-4">
            We may collect or receive certain information about you, including:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>
              <strong>Personal Information:</strong> Name, phone number, email address, and other
              contact details you provide when filling out forms or contacting us via WhatsApp.
            </li>
            <li>
              <strong>Document Information:</strong> When you submit documents for verification or
              consultation (e.g., degree certificates, registration cards, Aadhaar details,
              marksheets), we collect the information contained in those documents solely for the
              purpose of providing the requested service.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you use the Website, such as pages
              visited, time spent on the site, and clickstream data.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">
            3. How We Use Your Information
          </h2>
          <p className="mb-4 text-slate-800">We use the information we collect for the following purposes:</p>
          <ul className="list-disc list-inside mb-4 space-y-2 text-slate-800">
            <li>
              To provide and maintain our services, including assisting with APNMC/TSNC
              registrations, renewals, verifications, and career guidance.
            </li>
            <li>To process and verify the documents you submit for council-related services.</li>
            <li>
              To communicate with you about your inquiries, provide updates, and share relevant
              nursing educational resources.
            </li>
            <li>
              To improve the Website and our services based on user feedback and usage patterns.
            </li>
            <li>
              To comply with legal obligations, respond to legal requests, and protect our rights
              and safety.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">
            4. Legal Basis for Processing (DPDP Act 2023)
          </h2>
          <p className="mb-4">
            Under India's Digital Personal Data Protection (DPDP) Act 2023, we process your personal
            data based on:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>
              <strong>Consent:</strong> For processing your data for specific services you request
              (e.g., document verification, career counseling).
            </li>
            <li>
              <strong>Legitimate Interests:</strong> To operate, improve, and secure our services
              and Website.
            </li>
            <li>
              <strong>Legal Obligations:</strong> When required by law or to protect vital
              interests.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900 ">
            5. Sharing Your Information
          </h2>
          <p className="mb-4">
            We do not sell, trade, or otherwise transfer your personal information to third parties
            except in the following circumstances:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>
              <strong>Service Providers:</strong> We may share information with trusted third-party
              service providers who assist us in operating our Website and delivering services,
              provided they agree to keep this information confidential.
            </li>
            <li>
              <strong>Legal Compliance:</strong> We may disclose information when required by law,
              such as to comply with a subpoena or similar legal process.
            </li>
            <li>
              <strong>Protection of Rights:</strong> To protect the safety or property of The
              Nursing Journey, our users, or others.
            </li>
          </ul>
          <p className="mb-4">
            <strong>Important:</strong> We do not share your documents or personal information with
            APNMC, TSNC, or any government council. We act solely as a facilitator and consultant to
            help you navigate their processes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900 ">6. Data Retention</h2>
          <p className="mb-4">
            We retain your personal information and documents only for as long as necessary to
            fulfill the purposes outlined in this Privacy Policy, unless a longer retention period
            is required or permitted by law (such as for tax, legal, or regulatory requirements).
          </p>
          <p className="mb-4">
            Specifically, documents submitted for verification or consultation are retained solely
            for the duration of the requested service and are permanently purged within 30 days of
            service completion.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900 ">
            7. Your Rights Under DPDP Act 2023
          </h2>
          <p className="mb-4">You have the following rights regarding your personal data:</p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>
              <strong>Right to Access Information:</strong> You can request a copy of the personal data we hold about you.
            </li>
            <li>
              <strong>Right to Correction:</strong> You can request that we correct any inaccurate or incomplete data.
            </li>
            <li>
              <strong>Right to Erasure:</strong> You can request the deletion of your personal data, subject to certain exemptions under the Act.
            </li>
            <li>
              <strong>Right to Grievance Redressal:</strong> You can file a grievance if you believe your data rights have been violated.
            </li>
            <li>
              <strong>Right to Nominate:</strong> You can nominate a person to exercise your rights in case of death or incapacity.
            </li>
          </ul>
          <p className="mb-4">
            To exercise any of these rights, please contact our Data Protection Officer via WhatsApp at{" "}
            <a href="https://wa.me/919494959401" className="underline">
              +91 94949 59401
            </a>{" "}
            or email contact@thenursingjourney.in. We will respond within the timelines prescribed under the DPDP Act.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900 ">
            8. Security of Your Information
          </h2>
          <p className="mb-4">
            We implement reasonable administrative, technical, and physical safeguards designed to
            protect your information from unauthorized access, disclosure, alteration, or
            destruction. However, no method of transmission over the internet or electronic storage
            is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900 ">
            9. International Data Transfers
          </h2>
          <p className="mb-4">
            The Website is hosted on servers located in India. We do not intentionally transfer your
            personal data outside of India. If such a transfer becomes necessary, we will ensure
            adequate protections are in place as required by the DPDP Act 2023.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900 ">
            10. Changes to This Privacy Policy
          </h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time to reflect changes in our practices
            or for other operational, legal, or regulatory reasons. We will notify you of any
            material changes by posting the updated Privacy Policy on this page and updating the
            “Effective Date” at the top.
          </p>
          <p className="mb-4">
            Your continued use of the Website after such changes constitutes your acceptance of the
            updated Privacy Policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900 ">11. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy or our practices, please contact us:
          </p>
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

