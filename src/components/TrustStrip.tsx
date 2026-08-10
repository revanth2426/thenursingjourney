import {
  Stethoscope,
  HeartPulse,
  Syringe,
  PillBottle,
  Microscope,
  Ambulance,
  TestTubes,
  Bandage,
  Thermometer,
  Hospital,
  Dna,
  Cross,
} from "lucide-react";

import { Reveal } from "@/components/Reveal";

const specialties = [
  { icon: Stethoscope, label: "Patient Care" },
  { icon: HeartPulse, label: "Vital Signs" },
  { icon: Syringe, label: "Injections" },
  { icon: PillBottle, label: "Medication" },
  { icon: Microscope, label: "Microbiology" },
  { icon: Ambulance, label: "Emergency" },
  { icon: TestTubes, label: "Lab Work" },
  { icon: Bandage, label: "Wound Care" },
  { icon: Thermometer, label: "Temp Checks" },
  { icon: Hospital, label: "Hospital Nursing" },
  { icon: Dna, label: "Genetics" },
  { icon: Cross, label: "Clinical Care" },
];

export function TrustStrip() {
  return (
    <section
      aria-label="Nursing specialties we cover"
      className="surface-space starfield overflow-hidden py-12 sm:py-14"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-center font-display text-2xl text-primary-foreground sm:text-3xl">
            Built by an <span className="text-gradient-gold">ICU staff nurse</span> — for every
            part of your nursing journey
          </h2>
        </Reveal>

        <div className="marquee-mask mt-8 overflow-hidden">
          {/* Track duplicated twice for a seamless infinite loop */}
          <div className="medical-marquee-track">
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                aria-hidden={copy === 1}
                className="flex shrink-0 items-center gap-4 pr-4"
              >
                {specialties.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="inline-flex items-center gap-2.5 rounded-full border border-neon/30 bg-primary-foreground/5 px-4 py-2.5 backdrop-blur-sm"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-neon/15 text-neon-soft">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="whitespace-nowrap text-sm font-semibold text-primary-foreground/90">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
