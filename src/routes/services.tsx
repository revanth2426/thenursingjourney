import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/services")({
  head: () => ({
    title: "Nursing Study, Council & Career Services - The Nursing Journey",
    meta: [
      {
        name: "description",
        content:
          "Expert nursing council registration, renewals, NOC, Good Standing Certificate assistance. Plus study materials, career guidance, and documentation support for nursing students and professionals.",
      },
      { property: "og:title", content: "Nursing Study, Council & Career Services" },
      {
        property: "og:description",
        content:
          "Expert nursing council registration, renewals, NOC, and career guidance.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://thenursingjourney.in/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://thenursingjourney.in/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar forceSolidBackground />
      <main className="mx-auto max-w-4xl px-4 py-12 pt-32 sm:px-6 lg:px-8">
        <h1 className="mb-6 text-3xl font-bold text-slate-900">Our Services</h1>
        
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">Studies & Education</h2>
          <p className="mb-4 text-slate-600">
            Comprehensive nursing study materials and exam preparation guidance for nursing students:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 text-slate-600">
            <li>Nursing notes and study materials for GNM, B.Sc., and M.Sc. Nursing</li>
            <li>MCQ practice questions and answer explanations</li>
            <li>Exam preparation strategies and time management tips</li>
            <li>Career counseling for nursing students</li>
            <li>Subject-wise guidance for nursing subjects</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">Nursing Council Services</h2>
          <p className="mb-4 text-slate-600">
            Complete assistance with nursing council registration and related services:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 text-slate-600">
            <li>New registration with APNMC, TSNC, and other state nursing councils</li>
            <li>Registration renewals and NUID card applications</li>
            <li>Good Standing Certificate procurement</li>
            <li>No Objection Certificate (NOC) for various purposes</li>
            <li>Reciprocal registration and migration certificate</li>
            <li>Foreign verification for overseas nursing opportunities</li>
            <li>Documentation and submission support</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">Career Support</h2>
          <p className="mb-4 text-slate-600">
            End-to-end career guidance for nursing professionals:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 text-slate-600">
            <li>Job opportunities in India and abroad</li>
            <li>Resume writing and interview preparation</li>
            <li>Overseas nursing guidance and placement support</li>
            <li>Professional development planning</li>
            <li>Higher education opportunities in nursing</li>
            <li>Documentation guidance for career advancement</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">Get Started</h2>
          <p className="mb-4 text-slate-600">
            Contact us today to discuss your requirements. We offer personalized guidance 
            tailored to your specific needs and goals.
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
