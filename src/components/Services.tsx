import { BookOpen, Microscope, Stethoscope, HeartPulse, Check, MessageCircle } from "lucide-react";

import { wa } from "@/data/site";
import { Reveal } from "@/components/Reveal";

type Service = {
  icon: typeof BookOpen;
  title: string;
  tagline: string;
  items: string[];
  cta: string;
  ctaLabel: string;
  /** semantic accent token name */
  accent: "studies" | "council" | "career";
};

const services: Service[] = [
  {
    icon: Microscope,
    title: "Studies & Education",
    tagline: "Learn • Prepare • Excel",
    accent: "studies",
    cta: wa.studies,
    ctaLabel: "Ask about study materials",
    items: [
      "Nursing Notes & Study Materials",
      "Exam Preparation & Important Questions",
      "GNM Nursing",
      "B.Sc. Nursing",
      "Post Basic B.Sc. Nursing",
      "M.Sc. Nursing",
      "Clinical & Practical Knowledge",
      "Entrance & Competitive Exam Guidance",
      "Nursing Career & Higher Study Guidance",
      "Opportunities in India & Abroad",
    ],
  },
  {
    icon: Stethoscope,
    title: "Nursing Council Services",
    tagline: "Register • Renew • Progress",
    accent: "council",
    cta: wa.council,
    ctaLabel: "Ask about council services",
    items: [
      "Registration & Renewals",
      "NUID Card & Renewals",
      "Good Standing Certificate",
      "No Objection Certificate (NOC)",
      "Reciprocal Registration",
      "Migration Certificate",
      "Foreign Verification",
      "Document Guidance & Support",
    ],
  },
  {
    icon: HeartPulse,
    title: "Career Support",
    tagline: "Guide • Grow • Achieve",
    accent: "career",
    cta: wa.career,
    ctaLabel: "Ask about career guidance",
    items: [
      "Nursing Career Guidance",
      "Professional Development",
      "Documentation Guidance",
      "Higher Education Opportunities",
      "Job Opportunities in India & Abroad",
      "Interview Preparation & Resume Support",
      "Overseas Nursing Guidance",
    ],
  },
];

const accentClasses: Record<Service["accent"], { badge: string; pill: string; bar: string; check: string }> = {
  studies: {
    badge: "bg-studies/15 text-studies",
    pill: "bg-studies/12 text-studies",
    bar: "bg-studies",
    check: "text-studies",
  },
  council: {
    badge: "bg-council/15 text-council",
    pill: "bg-council/12 text-council",
    bar: "bg-council",
    check: "text-council",
  },
  career: {
    badge: "bg-career/15 text-career",
    pill: "bg-career/12 text-career",
    bar: "bg-career",
    check: "text-career",
  },
};

export function Services() {
  return (
    <section id="services" className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-center font-display text-3xl sm:text-4xl">
            Our 3 Core <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
            Everything a nursing student or working nurse needs — from notes to registration to your next role.
          </p>
        </Reveal>

        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-3">
          {services.map((s, i) => {
            const a = accentClasses[s.accent];
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 100} className="h-full">
                <article className="card-soft hover-lift flex h-full flex-col overflow-hidden">
                  <span className={`block h-1.5 w-full ${a.bar}`} aria-hidden />
                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex min-w-0 items-center gap-3">
                      <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-full ${a.badge}`}>
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <h3 className="min-w-0 text-xl leading-tight">{s.title}</h3>
                    </div>

                    <span
                      className={`mt-4 inline-flex w-fit rounded-full px-3 py-1 text-[0.7rem] font-bold tracking-[0.16em] uppercase ${a.pill}`}
                    >
                      {s.tagline}
                    </span>

                    <ul className="mt-5 grid flex-1 gap-2.5">
                      {s.items.map((item) => (
                        <li key={item} className="flex min-w-0 items-start gap-2.5 text-sm">
                          <Check className={`mt-0.5 h-4 w-4 shrink-0 ${a.check}`} aria-hidden />
                          <span className="min-w-0 text-foreground/85">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={s.cta}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-5 text-sm font-semibold text-navy-deep transition-transform hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden />
                      {s.ctaLabel}
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
