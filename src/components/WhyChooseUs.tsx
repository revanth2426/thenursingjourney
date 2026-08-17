import { Check, Quote } from "lucide-react";

import { Reveal } from "@/components/Reveal";

const reasons = [
  "Expert Guidance",
  "Updated Information",
  "Hassle-Free Process",
  "Personalized Support",
  "Confidential & Responsible Data Handling",
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-center font-display text-3xl sm:text-4xl">
            Why <span className="text-gradient-gold">Choose Us</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
            Reliable, confidential and step-by-step support built around real nursing experience.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal delay={80}>
            <div className="surface-space starfield h-full rounded-3xl p-7 sm:p-9">
              <ul className="grid gap-4">
                {reasons.map((r) => (
                  <li key={r} className="flex min-w-0 items-center gap-3">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-studies/25 text-studies">
                      <Check className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="min-w-0 text-base font-semibold text-primary-foreground sm:text-lg">
                      {r}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <figure className="surface-space starfield flex h-full flex-col justify-center rounded-3xl p-7 text-center sm:p-9">
              <Quote className="mx-auto h-10 w-10 text-gold" aria-hidden />
              <blockquote className="mt-5 font-display text-xl leading-snug text-primary-foreground sm:text-2xl">
                “From Nursing Studies to Professional Success — We Support Your{" "}
                <span className="text-gradient-gold">Journey</span>.”
              </blockquote>
              <figcaption className="mt-5 text-xs tracking-[0.22em] text-neon-soft uppercase">
                Siva Naik · ICU Staff Nurse
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
