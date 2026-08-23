import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    title: "About Siva Naik - The Nursing Journey",
    meta: [
      {
        name: "description",
        content:
          "Learn about Siva Naik, ICU Staff Nurse and founder of The Nursing Journey. Discover how 19K+ nursing students trust our guidance for studies, council registration, and career support.",
      },
      { property: "og:title", content: "About Siva Naik - The Nursing Journey" },
      {
        property: "og:description",
        content:
          "Learn about Siva Naik, ICU Staff Nurse and founder of The Nursing Journey.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://thenursingjourney.in/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://thenursingjourney.in/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar forceSolidBackground />
      <main className="mx-auto max-w-4xl px-4 py-12 pt-32 sm:px-6 lg:px-8">
        <h1 className="mb-6 text-3xl font-bold text-slate-900">About Siva Naik</h1>
        
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">Your Trusted Nursing Guide</h2>
          <p className="mb-4 text-slate-600">
            Hi, I'm Siva Naik, an ICU Staff Nurse with extensive experience in nursing education, 
            council registration, and career guidance. Through The Nursing Journey, I've helped 
            over 19,000 nursing students and professionals achieve their career goals.
          </p>
          <p className="mb-4 text-slate-600">
            My mission is to provide transparent, confidential, and step-by-step support to every 
            nursing student and professional who seeks guidance. Unlike faceless agencies, I work 
            directly with you to understand your needs and provide personalized solutions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">My Expertise</h2>
          <ul className="list-disc list-inside mb-4 space-y-2 text-slate-600">
            <li>Nursing council registration and renewals (APNMC, TSNC, and other state councils)</li>
            <li>NOC, Good Standing Certificate, and migration certificate assistance</li>
            <li>Study materials and exam preparation for GNM, B.Sc., and M.Sc. Nursing</li>
            <li>Career guidance for nursing professionals in India and abroad</li>
            <li>Documentation support for council submissions</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">Why Trust Me?</h2>
          <p className="mb-4 text-slate-600">
            As a practising ICU nurse, I understand the real challenges nursing students and 
            professionals face. I provide honest, reliable guidance based on actual experience, 
            not just theoretical knowledge. Every student who reaches out to me gets personalized 
            attention and genuine support.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">Connect With Me</h2>
          <p className="mb-4 text-slate-600">
            Follow me on social media for daily nursing tips, study materials, and career guidance:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 text-slate-600">
            <li>Instagram: @nursing_sivanaik</li>
            <li>YouTube: The Nursing Journey</li>
            <li>Telegram: The Nursing Journey Community</li>
            <li>WhatsApp: +91 94949 59401</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
