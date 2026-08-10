import { Info, Target, Eye, MapPin, GraduationCap, BookOpen, Stethoscope, HeartPulse } from "lucide-react";

import { Reveal } from "@/components/Reveal";

const cards = [
  {
    icon: Info,
    title: "About Us",
    accent: "bg-council/12 text-council",
    body: "The Nursing Journey – Siva Naik is a dedicated platform supporting nursing students and professionals throughout their academic and professional journey — offering study support, educational guidance, nursing council services, documentation assistance and career guidance.",
  },
  {
    icon: Target,
    title: "Our Mission",
    accent: "bg-studies/12 text-studies",
    body: "To empower nursing students and professionals with quality education, practical knowledge, professional guidance and reliable support — helping them progress confidently from nursing studies to a successful career.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    accent: "bg-career/12 text-career",
    body: "To become a trusted nursing platform that connects education, professional registration, documentation, higher studies and career opportunities — supporting nurses at every stage of their journey.",
  },
];

const bio = [
  { icon: MapPin, text: "Andhra Pradesh & Telangana" },
  { icon: Stethoscope, text: "ICU Staff Nurse" },
  { icon: GraduationCap, text: "BSc Nursing Graduate" },
  { icon: BookOpen, text: "Nursing Education | MCQs | Notes" },
  { icon: Target, text: "AIIMS NORCET" },
  { icon: HeartPulse, text: "Helping nursing students succeed" },
];

export function AboutMissionVision() {
  return (
    <section id="about" className="bg-card py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-center font-display text-3xl sm:text-4xl">
            About, Mission & <span className="text-gradient-gold">Vision</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cards.map(({ icon: Icon, title, body, accent }, i) => (
            <Reveal key={title} delay={i * 90}>
              <article className="card-soft hover-lift flex h-full flex-col p-7">
                <span className={`grid h-12 w-12 place-items-center rounded-full ${accent}`}>
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-5 text-xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="surface-space starfield mt-8 rounded-3xl p-7 sm:p-9">
            <h3 className="text-lg text-primary-foreground sm:text-xl">
              Meet the nurse behind the <span className="text-gradient-gold">journey</span>
            </h3>
            <p className="mt-2 max-w-2xl text-sm text-primary-foreground/75">
              Siva Naik is an ICU staff nurse and BSc Nursing graduate who creates daily nursing education
              content and AIIMS NORCET exam prep — a real practising nurse, not a faceless agency.
            </p>
            <ul className="mt-6 flex flex-wrap justify-center gap-2.5 sm:justify-start">
              {bio.map(({ icon: Icon, text }) => (
                <li
                  key={text}
                  className="inline-flex items-center gap-2 rounded-full border border-neon/30 bg-neon/10 px-3.5 py-2 text-xs font-medium text-primary-foreground/90 sm:text-sm"
                >
                  <Icon className="h-4 w-4 shrink-0 text-neon-soft" aria-hidden />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
