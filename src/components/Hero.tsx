import { Stethoscope, HeartPulse, Target, Handshake, Award, PillBottle, Syringe, ArrowRight, MessageCircle } from "lucide-react";

import { images } from "@/data/site-images";
import { wa } from "@/data/site";
import { Reveal } from "@/components/Reveal";

const trustItems = [
  { icon: Stethoscope, label: "Trusted Guidance", color: "bg-studies/20 text-studies" },
  { icon: HeartPulse, label: "Reliable Support", color: "bg-neon/20 text-neon-soft" },
  { icon: Target, label: "Faster Process", color: "bg-gold/20 text-gold" },
  { icon: Handshake, label: "Client Satisfaction", color: "bg-career/25 text-neon-soft" },
  { icon: Award, label: "Transparent & Professional", color: "bg-cross/20 text-cross" },
];

/**
 * Floating decorative orbs — CSS-only ambient particles that continuously
 * drift around the hero background, giving the "space" feel more depth.
 */
function FloatingOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Large neon orb – top left */}
      <div
        className="floating-orb"
        style={{
          width: "260px",
          height: "260px",
          top: "8%",
          left: "-4%",
          background: "radial-gradient(circle, color-mix(in oklab, var(--neon) 18%, transparent), transparent 70%)",
          animation: "float-slow 12s ease-in-out infinite",
        }}
      />
      {/* Medium gold orb – right side */}
      <div
        className="floating-orb"
        style={{
          width: "180px",
          height: "180px",
          top: "30%",
          right: "2%",
          background: "radial-gradient(circle, color-mix(in oklab, var(--gold) 15%, transparent), transparent 70%)",
          animation: "float-medium 10s ease-in-out infinite 1s",
        }}
      />
      {/* Small ember orb – bottom center */}
      <div
        className="floating-orb"
        style={{
          width: "120px",
          height: "120px",
          bottom: "12%",
          left: "35%",
          background: "radial-gradient(circle, color-mix(in oklab, var(--ember) 14%, transparent), transparent 70%)",
          animation: "float-slow 14s ease-in-out infinite 3s",
        }}
      />
      {/* Tiny neon dot – top right */}
      <div
        className="floating-orb"
        style={{
          width: "80px",
          height: "80px",
          top: "15%",
          right: "18%",
          background: "radial-gradient(circle, color-mix(in oklab, var(--neon-soft) 20%, transparent), transparent 65%)",
          animation: "float-medium 8s ease-in-out infinite 2s",
        }}
      />
      {/* Subtle gold accent – left middle */}
      <div
        className="floating-orb"
        style={{
          width: "150px",
          height: "150px",
          top: "55%",
          left: "5%",
          background: "radial-gradient(circle, color-mix(in oklab, var(--gold) 10%, transparent), transparent 70%)",
          animation: "float-slow 16s ease-in-out infinite 4s",
        }}
      />
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="surface-space starfield relative min-h-svh overflow-hidden pb-12 pt-20 sm:pb-16 sm:pt-24 lg:pb-20 lg:pt-28"
    >
      {/* Animated floating orbs in the background */}
      <FloatingOrbs />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8">
        {/* ── Left column: text content ── */}
        <div className="order-1 text-center lg:text-left">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-neon/40 bg-neon/10 px-4 py-1.5 text-xs font-semibold tracking-[0.28em] text-neon-soft uppercase backdrop-blur-sm">
              ★ Siva Naik ★
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1
              className="mt-4 font-display leading-[1.02] font-extrabold text-primary-foreground"
              style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
            >
              THE NURSING <span className="text-gradient-gold">JOURNEY</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-3 text-sm font-semibold tracking-[0.2em] text-neon-soft uppercase sm:text-base">
              Study • Register • Grow • Serve
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg lg:mx-0">
              Your Trusted Partner in Every Step of Your Nursing Journey — study support, nursing council
              services and career guidance from a practising ICU staff nurse.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#services")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                  // Reflect the anchor in the URL so the section can be
                  // deep-linked/bookmarked without triggering a page reload.
                  history.replaceState(null, "", "#services");
                }}
                className="btn-shimmer inline-flex w-full min-h-12 items-center justify-center gap-2 rounded-full px-6 font-semibold text-navy-deep transition-transform hover:scale-[1.03] sm:w-auto focus-visible:ring-2 focus-visible:ring-neon focus-visible:outline-none"
                style={{ backgroundImage: "var(--gradient-gold)" }}
              >
                Explore Our Services
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <a
                href={wa.general}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full min-h-12 items-center justify-center gap-2 rounded-full border border-neon/50 bg-neon/10 px-6 font-semibold text-primary-foreground backdrop-blur-sm transition-colors sm:w-auto hover:bg-neon/20 focus-visible:ring-2 focus-visible:ring-neon focus-visible:outline-none"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>

        {/* ── Right column: portrait + trust badges ── */}
        <div className="order-2 flex flex-col items-center gap-6 lg:items-start lg:gap-8">
          <Reveal delay={120}>
            <div className="portrait-glow animated-ring relative mx-auto max-w-[18rem] sm:max-w-[22rem] lg:max-w-[26rem]">
              {/* Soft ambient glow behind portrait */}
              <div
                className="absolute -inset-4 rounded-[2.5rem] opacity-60 blur-3xl"
                style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--neon) 40%, transparent), transparent)" }}
                aria-hidden
              />
              <img
                src={images.heroPortrait.src}
                alt={images.heroPortrait.alt}
                width={images.heroPortrait.width}
                height={images.heroPortrait.height}
                className="relative block w-full rounded-[2rem] border border-neon/30 object-cover object-top shadow-2xl max-h-[50vh] sm:max-h-[55vh] lg:max-h-[60vh]"
              />

              {/* Floating nursing badges around the portrait */}
              <div aria-hidden className="badge-bob absolute -right-4 top-8 grid h-11 w-11 place-items-center rounded-full border border-neon/40 bg-navy/90 text-neon-soft shadow-lg backdrop-blur-sm">
                <Stethoscope className="h-5 w-5" />
              </div>
              <div
                aria-hidden
                className="badge-bob absolute -left-5 bottom-20 grid h-10 w-10 place-items-center rounded-full border border-gold/40 bg-navy/90 text-gold shadow-lg backdrop-blur-sm"
                style={{ animationDelay: "0.6s" }}
              >
                <Syringe className="h-5 w-5" />
              </div>
              <div
                aria-hidden
                className="badge-bob absolute -top-4 right-16 grid h-9 w-9 place-items-center rounded-full border border-neon/40 bg-navy/90 text-neon-soft shadow-lg backdrop-blur-sm"
                style={{ animationDelay: "1.2s" }}
              >
                <PillBottle className="h-4 w-4" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <ul className="flex flex-wrap justify-center gap-2 sm:justify-start">
              {trustItems.map(({ icon: Icon, label, color }, i) => (
                <li
                  key={label}
                  className="badge-bob flex min-w-0 items-center gap-2 rounded-full border border-primary-foreground/10 bg-primary-foreground/5 px-3 py-2 backdrop-blur-sm transition-colors hover:bg-primary-foreground/10"
                  style={{ animationDelay: `${i * 0.4}s` }}
                >
                  <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ${color}`}>
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="min-w-0 whitespace-nowrap text-xs font-medium text-primary-foreground/90 sm:text-sm">{label}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
