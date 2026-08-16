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

/**
 * The single-page home experience. Rendered by both the index route ("/") and
 * the section routes ("/about", "/services", …) so those clean URLs can serve
 * the same page scrolled to their section.
 */
export function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <AboutMissionVision />

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
