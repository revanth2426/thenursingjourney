import { MessageCircle, Phone, Instagram, Youtube, Send, AtSign } from "lucide-react";

import { images } from "@/data/site-images";
import { navLinks, phone, socials, wa } from "@/data/site";

export function Footer() {
  return (
    <footer className="surface-space starfield border-t border-primary-foreground/10">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="text-center sm:text-left">
          <div className="flex min-w-0 items-center justify-center gap-3 sm:justify-start">
            <img
              src={images.logo.src}
              alt={images.logo.alt}
              width={images.logo.width}
              height={images.logo.height}
              loading="lazy"
              className="h-14 w-14 shrink-0 rounded-full object-cover ring-glow"
            />
            <span className="min-w-0">
              <span className="block font-display text-base font-extrabold text-primary-foreground">
                The Nursing <span className="text-gradient-gold">Journey</span>
              </span>
              <span className="block text-[0.65rem] tracking-[0.22em] text-neon-soft uppercase">Siva Naik</span>
            </span>
          </div>
          <p className="mx-auto mt-4 max-w-sm text-sm text-primary-foreground/75 sm:mx-0">
            Your Trusted Partner in Every Step of Your Nursing Journey. Study • Register • Grow • Serve
          </p>
          <p className="mt-4 text-sm font-semibold text-neon-soft">
            19K+ nursing students following our journey
          </p>
        </div>

        <nav aria-label="Footer navigation" className="text-center sm:text-left">
          <h2 className="text-sm tracking-[0.2em] text-primary-foreground uppercase">Quick Links</h2>
          <ul className="mt-4 grid grid-cols-2 gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="inline-flex min-h-11 items-center justify-center text-sm text-primary-foreground/80 transition-colors hover:text-neon-soft sm:justify-start"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-center sm:text-left">
          <h2 className="text-sm tracking-[0.2em] text-primary-foreground uppercase">Get in Touch</h2>
          <ul className="mt-4 grid gap-1">
            {[
              { icon: MessageCircle, label: `WhatsApp ${phone.whatsappDisplay}`, href: wa.contact },
              { icon: Phone, label: `Call ${phone.callDisplay}`, href: phone.callHref },
              { icon: Instagram, label: "@nursing_sivanaik", href: socials.instagram },
              { icon: Youtube, label: "YouTube", href: socials.youtube },
              { icon: AtSign, label: "Threads", href: socials.threads },
              { icon: Send, label: "Telegram — The Nursing Journey", href: socials.telegram },
            ].map(({ icon: Icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("tel:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 min-w-0 items-center justify-center gap-2.5 text-sm text-primary-foreground/80 transition-colors hover:text-neon-soft sm:justify-start"
                >
                  <Icon className="h-4 w-4 shrink-0 text-neon-soft" aria-hidden />
                  <span className="min-w-0 truncate">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 px-4 py-5 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} The Nursing Journey – Siva Naik. All rights reserved.
      </div>
    </footer>
  );
}
