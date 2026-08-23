import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/why-us")({
  head: () => ({
    title: "Why Choose The Nursing Journey - Expert Nursing Guidance",
    meta: [
      {
        name: "description",
        content:
          "Work with a practising ICU nurse instead of a faceless agency. Get transparent, confidential, step-by-step support for nursing students and professionals across India.",
      },
      { property: "og:title", content: "Why Choose The Nursing Journey" },
      {
        property: "og:description",
        content:
          "Work with a practising ICU nurse for transparent, confidential support.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://thenursingjourney.in/why-us" },
      { property: "og:image", content: "https://thenursingjourney.in/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://thenursingjourney.in/why-us" }],
  }),
  component: WhyUsPage,
});

function WhyUsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar forceSolidBackground />
      <main className="mx-auto max-w-4xl px-4 py-12 pt-32 sm:px-6 lg:px-8">
        <h1 className="mb-6 text-3xl font-bold text-slate-900">Why Choose The Nursing Journey</h1>
        
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">Not a Faceless Agency</h2>
          <p className="mb-4 text-slate-600">
            Unlike other agencies, you work directly with Siva Naik, a practising ICU nurse 
            with real-world experience. This means:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 text-slate-600">
            <li>Personalized attention for every student</li>
            <li>Honest, reliable guidance based on actual experience</li>
            <li>Direct communication, no middlemen</li>
            <li>Transparent pricing with no hidden costs</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">Confidential & Trustworthy</h2>
          <p className="mb-4 text-slate-600">
            We understand that your documents and personal information are sensitive. That's why 
            we maintain complete confidentiality and follow strict data protection practices:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 text-slate-600">
            <li>Your data is never shared with third parties without consent</li>
            <li>Documents are handled with utmost care and deleted after 30 days</li>
            <li>All communications are private and secure</li>
            <li>We comply with India's DPDP Act 2023</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">Step-by-Step Support</h2>
          <p className="mb-4 text-slate-600">
            From your first consultation to successful completion, we guide you through every step:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 text-slate-600">
            <li>Initial consultation and requirement analysis</li>
            <li>Document preparation and verification</li>
            <li>Submission to nursing councils/government offices</li>
            <li>Follow-up and status tracking</li>
            <li>Delivery of final documents</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">19,000+ Success Stories</h2>
          <p className="mb-4 text-slate-600">
            Join our growing community of nursing students and professionals who have achieved 
            their goals with our guidance. Our 19,000+ followers across social media platforms 
            trust us for reliable, accurate, and timely support.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">Get Started Today</h2>
          <p className="mb-4 text-slate-600">
            Ready to take the next step in your nursing career? Contact us now for a free consultation.
          </p>
          <p className="text-slate-600">
            <strong>WhatsApp:</strong> +91 94949 59401<br />
            <strong>Email:</strong> contact@thenursingjourney.in
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
