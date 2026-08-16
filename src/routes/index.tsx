import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { AboutMissionVision } from "@/components/AboutMissionVision";
import { Services } from "@/components/Services";
import { ResourceLibrary } from "@/components/ResourceLibrary";
import { SocialProof } from "@/components/SocialProof";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

const title = "The Nursing Journey – Siva Naik | Nursing Study, Council & Career Support";
const description =
  "Nursing study materials, MCQs, nursing council registration & renewals, documentation and career guidance for nursing students and professionals in India and abroad.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "The Nursing Journey – Siva Naik",
          description,
          areaServed: ["Andhra Pradesh", "Telangana", "India"],
          founder: { "@type": "Person", name: "Siva Naik", jobTitle: "ICU Staff Nurse" },
          telephone: "+918499920742",
          sameAs: [
            "https://www.instagram.com/nursing_sivanaik",
            "https://www.youtube.com/@Nursing.sivanaik",
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <AboutMissionVision />
        <WhyChooseUs />

        <Services />
        <ResourceLibrary />
        <SocialProof />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
