import { Reveal } from "@/components/Reveal";

const stats = [
  { value: "19K+", label: "Instagram Followers" },
  { value: "119+", label: "Educational Posts" },
  { value: "3", label: "Channels: YouTube, Instagram & Threads" },
  { value: "AP & TS", label: "Based in Andhra Pradesh & Telangana" },
];

export function SocialProof() {
  return (
    <section aria-label="Community stats" className="bg-background py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} as="li" delay={i * 80}>
              <div className="text-center">
                <p className="font-display text-3xl font-extrabold text-navy-ink sm:text-4xl lg:text-5xl">
                  {s.value}
                </p>
                <p className="mt-2 text-xs text-muted-foreground sm:text-sm">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
