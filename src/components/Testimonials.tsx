import { Star, Quote } from "lucide-react";

import { Reveal } from "@/components/Reveal";

// TODO: Replace placeholder testimonials with real client feedback.
const testimonials = [
  {
    name: "Anusha R.",
    service: "B.Sc. Nursing · Study Materials",
    rating: 5,
    quote:
      "The unit-wise notes and important questions made my exam prep so much easier. Clear, updated and genuinely helpful.",
  },
  {
    name: "Kiran K.",
    service: "Nursing Council · Good Standing Certificate",
    rating: 5,
    quote:
      "Every document step was explained patiently. My certificate process finished far faster than I expected.",
  },
  {
    name: "Divya M.",
    service: "Career Support · Overseas Guidance",
    rating: 5,
    quote:
      "Honest advice about opportunities abroad, plus resume and interview help. I felt supported the whole way.",
  },
];

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-heading" className="bg-card py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 id="testimonials-heading" className="text-center font-display text-3xl sm:text-4xl">
            What Nurses <span className="text-gradient-gold">Say</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
            Students and working nurses we've supported through studies, registration and career moves.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} as="li" delay={i * 90} className="h-full">
              <figure className="card-soft hover-lift flex h-full flex-col p-7">
                <Quote className="h-8 w-8 text-accent" aria-hidden />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85">
                  “{t.quote}”
                </blockquote>
                <div
                  className="mt-5 flex items-center gap-1"
                  aria-label={`${t.rating} out of 5 stars`}
                >
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-accent text-accent" aria-hidden />
                  ))}
                </div>
                <figcaption className="mt-3">
                  <span className="block font-display text-base font-bold">{t.name}</span>
                  <span className="block text-xs text-muted-foreground">{t.service}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
