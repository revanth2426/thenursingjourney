import { useState } from "react";
import { MessageCircle, Phone, Instagram, Youtube, Send, AtSign, CheckCircle2 } from "lucide-react";

import { phone, socials, wa, WHATSAPP_NUMBER } from "@/data/site";
import { Reveal } from "@/components/Reveal";

type FormErrors = Partial<Record<"name" | "contact" | "message" | "privacyConsent", string>>;

const NAME_MAX = 100;
const CONTACT_MAX = 150;
const MESSAGE_MAX = 1000;

// Allowed characters for a phone number / email: alphanumerics plus the common
// phone/email punctuation. Anything else (angle brackets, quotes, backticks,
// etc.) is rejected so no markup can ever reach the WhatsApp link.
const CONTACT_PATTERN = /^[A-Za-z0-9@.+_()\-\s]+$/;

// eslint-disable-next-line no-control-regex
const CONTROL_CHARS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/;

function hasControlChars(value: string): boolean {
  return CONTROL_CHARS.test(value);
}

// Clears a single field error on change. Uses delete (not `= undefined`)
// because tsconfig's exactOptionalPropertyTypes rejects assigning undefined.
function clearFieldError(
  setter: React.Dispatch<React.SetStateAction<FormErrors>>,
  field: keyof FormErrors,
) {
  setter((prev) => {
    const next = { ...prev };
    delete next[field];
    return next;
  });
}

export function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  // Validates the submitted fields before composing the WhatsApp message.
  // This is defense-in-depth: the values are only ever URL-encoded into a
  // wa.me link (no server, no storage, no rendering of raw input), but strict
  // limits stop the message being abused or the link being malformed.
  const validate = (data: FormData): FormErrors => {
    const name = String(data.get("name") ?? "").trim();
    const contact = String(data.get("contact") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const privacyConsent = data.get("privacy-consent");
    const next: FormErrors = {};

    if (!name) {
      next.name = "Please enter your name.";
    } else if (name.length > NAME_MAX) {
      next.name = `Name must be ${NAME_MAX} characters or fewer.`;
    } else if (hasControlChars(name)) {
      next.name = "Name contains unsupported characters.";
    }

    if (!contact) {
      next.contact = "Please enter a phone number or email.";
    } else if (contact.length > CONTACT_MAX) {
      next.contact = `Too long (max ${CONTACT_MAX} characters).`;
    } else if (hasControlChars(contact) || !CONTACT_PATTERN.test(contact)) {
      next.contact = "Enter a valid phone number or email address.";
    }

    if (message.length > MESSAGE_MAX) {
      next.message = `Message must be ${MESSAGE_MAX} characters or fewer.`;
    } else if (hasControlChars(message)) {
      next.message = "Message contains unsupported characters.";
    }

    if (!privacyConsent) {
      next.privacyConsent = "You must agree to the privacy policy.";
    }

    return next;
  };

  // Composes the form details into a WhatsApp message and opens WhatsApp in a
  // new tab so the owner receives an enquiry with every field filled in.
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const nextErrors = validate(data);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const name = String(data.get("name") ?? "").trim();
    const contact = String(data.get("contact") ?? "").trim();
    const service = String(data.get("service") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const lines = [
      "📩 *New Enquiry — The Nursing Journey*",
      "",
      `👤 *Name:* ${name}`,
      `📞 *Phone / Email:* ${contact}`,
      `🏥 *Service:* ${service}`,
    ];
    if (message) lines.push(`💬 *Message:* ${message}`);
    lines.push("", "— Sent via the website form");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <section id="contact" className="surface-space starfield py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-center font-display text-3xl text-primary-foreground sm:text-4xl">
            Let's Build Your Nursing <span className="text-gradient-gold">Future</span> Together!
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-primary-foreground/75">
            Message us on WhatsApp for a quick reply, or send your details and we'll get back to
            you.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal delay={80}>
            <div className="flex h-full flex-col gap-4 rounded-3xl border border-primary-foreground/10 bg-primary-foreground/5 p-7 sm:p-9">
              <a
                href={wa.contact}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-6 font-semibold text-navy-deep transition-transform hover:scale-[1.02] sm:w-auto"
              >
                <MessageCircle className="h-5 w-5" aria-hidden />
                WhatsApp {phone.whatsappDisplay}
              </a>
              <a
                href={phone.callHref}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-neon/50 bg-neon/10 px-6 font-semibold text-primary-foreground transition-colors hover:bg-neon/20 sm:w-auto"
              >
                <Phone className="h-5 w-5" aria-hidden />
                Call {phone.callDisplay}
              </a>

              <div className="mt-2 h-px bg-primary-foreground/10" />

              <h3 className="text-base text-primary-foreground">Follow the journey</h3>
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {[
                  { icon: Instagram, label: "@nursing_sivanaik", href: socials.instagram },
                  { icon: Youtube, label: "YouTube channel", href: socials.youtube },
                  { icon: AtSign, label: "Threads", href: socials.threads },
                  { icon: Send, label: "Telegram group", href: socials.telegram },
                ].map(({ icon: Icon, label, href }) => (
                  <li key={label} className="flex justify-center sm:justify-start">
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-12 w-full min-w-0 items-center gap-3 rounded-2xl border border-primary-foreground/10 px-4 text-sm font-medium text-primary-foreground/90 transition-colors hover:border-neon/50 hover:bg-neon/10 sm:w-auto"
                    >
                      <Icon className="h-5 w-5 shrink-0 text-neon-soft" aria-hidden />
                      <span className="min-w-0 truncate">{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="card-soft h-full p-7 sm:p-9 text-card-foreground">
              {sent ? (
                <div className="flex h-full flex-col items-center justify-center gap-3 py-10 text-center">
                  <CheckCircle2 className="h-12 w-12 text-studies" aria-hidden />
                  <h3 className="text-xl">Thank you!</h3>
                  <p className="max-w-sm text-sm text-muted-foreground">
                    Your details have been received. For the fastest reply, message us on WhatsApp.
                  </p>
                  <a
                    href={wa.contact}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-6 font-semibold text-navy-deep sm:w-auto"
                  >
                    <MessageCircle className="h-5 w-5" aria-hidden />
                    Continue on WhatsApp
                  </a>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-primary-foreground/20 px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10 sm:w-auto"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="grid gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-semibold">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      maxLength={NAME_MAX}
                      autoComplete="name"
                      aria-invalid={errors.name ? true : undefined}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      onChange={() => clearFieldError(setErrors, "name")}
                      className={`min-h-12 w-full rounded-xl border bg-background px-4 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/40 ${errors.name ? "border-destructive focus-visible:border-destructive" : "border-input focus-visible:border-ring"}`}
                    />
                    {errors.name ? (
                      <p
                        id="name-error"
                        role="alert"
                        className="text-xs font-medium text-destructive"
                      >
                        {errors.name}
                      </p>
                    ) : null}
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="contact-detail" className="text-sm font-semibold">
                      Phone or Email
                    </label>
                    <input
                      id="contact-detail"
                      name="contact"
                      required
                      maxLength={CONTACT_MAX}
                      autoComplete="tel"
                      aria-invalid={errors.contact ? true : undefined}
                      aria-describedby={errors.contact ? "contact-error" : undefined}
                      onChange={() => clearFieldError(setErrors, "contact")}
                      className={`min-h-12 w-full rounded-xl border bg-background px-4 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/40 ${errors.contact ? "border-destructive focus-visible:border-destructive" : "border-input focus-visible:border-ring"}`}
                    />
                    {errors.contact ? (
                      <p
                        id="contact-error"
                        role="alert"
                        className="text-xs font-medium text-destructive"
                      >
                        {errors.contact}
                      </p>
                    ) : null}
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="service" className="text-sm font-semibold">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      defaultValue="Studies & Education"
                      className="min-h-12 w-full rounded-xl border border-input bg-background px-4 text-sm outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40"
                    >
                      <option>Studies &amp; Education</option>
                      <option>Council Services</option>
                      <option>Career Support</option>
                    </select>
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-semibold">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      maxLength={MESSAGE_MAX}
                      aria-invalid={errors.message ? true : undefined}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      onChange={() => clearFieldError(setErrors, "message")}
                      className={`w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/40 ${errors.message ? "border-destructive focus-visible:border-destructive" : "border-input focus-visible:border-ring"}`}
                    />
                    {errors.message ? (
                      <p
                        id="message-error"
                        role="alert"
                        className="text-xs font-medium text-destructive"
                      >
                        {errors.message}
                      </p>
                    ) : null}
                  </div>
                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="privacy-consent"
                      name="privacy-consent"
                      required
                      className="mt-1 h-4 w-4 rounded border-slate-300 text-neon-soft focus:ring-neon-soft"
                      onChange={() => clearFieldError(setErrors, "privacyConsent")}
                    />
                    <label htmlFor="privacy-consent" className="text-sm text-slate-600">
                      I agree to the processing of my information for the purpose of responding to my enquiry. See <a href="/privacy-policy" className="underline">Privacy Policy</a>.
                    </label>
                  </div>
                  {errors.privacyConsent ? (
                    <p
                      id="privacy-consent-error"
                      role="alert"
                      className="text-xs font-medium text-destructive"
                    >
                      {errors.privacyConsent}
                    </p>
                  ) : null}
                  <button
                    type="submit"
                    className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-6 font-semibold text-navy-deep transition-transform hover:scale-[1.02] sm:w-auto focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                    style={{ backgroundImage: "var(--gradient-gold)" }}
                  >
                    Send Message
                    <Send className="h-4 w-4" aria-hidden />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
