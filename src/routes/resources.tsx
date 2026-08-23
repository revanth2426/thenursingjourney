import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/resources")({
  head: () => ({
    title: "Free Nursing Study Resources & Notes - The Nursing Journey",
    meta: [
      {
        name: "description",
        content:
          "Access free nursing study materials, notes, MCQs, and exam preparation resources for GNM, B.Sc. Nursing, and M.Sc. Nursing students. Updated regularly for Indian nursing students.",
      },
      { property: "og:title", content: "Free Nursing Study Resources & Notes" },
      {
        property: "og:description",
        content:
          "Access free nursing study materials, notes, and MCQs for nursing students.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://thenursingjourney.in/resources" },
      { property: "og:image", content: "https://thenursingjourney.in/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://thenursingjourney.in/resources" }],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar forceSolidBackground />
      <main className="mx-auto max-w-4xl px-4 py-12 pt-32 sm:px-6 lg:px-8">
        <h1 className="mb-6 text-3xl font-bold text-slate-900">Free Nursing Study Resources</h1>
        
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">Study Notes & Materials</h2>
          <p className="mb-4 text-slate-600">
            Download free nursing study notes and materials covering all major subjects for GNM, 
            B.Sc. Nursing, and M.Sc. Nursing courses. Our resources are curated by experienced 
            nursing professionals and educators.
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 text-slate-600">
            <li>Anatomy and Physiology notes</li>
            <li>Pharmacology study guides</li>
            <li>Medical-Surgical Nursing materials</li>
            <li>Pediatric Nursing resources</li>
            <li>Obstetric and Gynecological Nursing notes</li>
            <li>Community Health Nursing materials</li>
            <li>Nursing Foundation and Fundamentals</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">MCQ Practice Questions</h2>
          <p className="mb-4 text-slate-600">
            Practice with our extensive collection of multiple-choice questions (MCQs) designed 
            to help you prepare for nursing exams:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 text-slate-600">
            <li>Subject-wise MCQ banks</li>
            <li>Previous year exam questions</li>
            <li>Mock tests and practice papers</li>
            <li>Answer explanations and rationales</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">Exam Preparation Guides</h2>
          <p className="mb-4 text-slate-600">
            Comprehensive exam preparation resources to help you succeed:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 text-slate-600">
            <li>Time management strategies</li>
            <li>Study schedules and planners</li>
            <li>Important topics and high-yield areas</li>
            <li>Exam day tips and techniques</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">Stay Updated</h2>
          <p className="mb-4 text-slate-600">
            Follow us on social media for regular updates on new study materials, notes, and resources. 
            Join our community of 19,000+ nursing students!
          </p>
          <p className="text-slate-600">
            <strong>Instagram:</strong> @nursing_sivanaik<br />
            <strong>YouTube:</strong> The Nursing Journey<br />
            <strong>Telegram:</strong> The Nursing Journey Community
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
