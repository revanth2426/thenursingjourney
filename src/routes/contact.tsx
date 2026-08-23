import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { wa } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    title: "Contact Us - The Nursing Journey",
    meta: [
      {
        name: "description",
        content:
          "Get in touch with Siva Naik for nursing study guidance, council registration assistance, and career support. WhatsApp: +91 94949 59401 | Email: contact@thenursingjourney.in",
      },
      { property: "og:title", content: "Contact Us - The Nursing Journey" },
      {
        property: "og:description",
        content:
          "Get in touch with Siva Naik for nursing study guidance and career support.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://thenursingjourney.in/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://thenursingjourney.in/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    website: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.website) return;
    const message = `New Contact Form Submission:\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nMessage: ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    window.location.href = `${wa.contact}?text=${encodedMessage}`;
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar forceSolidBackground />
      <main className="mx-auto max-w-4xl px-4 py-12 pt-32 sm:px-6 lg:px-8">
        <h1 className="mb-6 text-3xl font-bold text-slate-900">Contact Us</h1>
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">Get In Touch</h2>
          <p className="mb-4 text-slate-600">
            Have questions? Reach out to us via WhatsApp for quick response.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input type="text" id="website" name="website" value={formData.website} onChange={(e) => setFormData({ ...formData, website: e.target.value })} tabIndex={-1} autoComplete="off" />
            </div>
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-900">Your Name *</label>
              <input type="text" id="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full rounded-md border border-slate-300 px-4 py-2 text-slate-900" />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-900">Email *</label>
              <input type="email" id="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full rounded-md border border-slate-300 px-4 py-2 text-slate-900" />
            </div>
            <div>
              <label htmlFor="phone" className="mb-1 block text-sm font-medium text-slate-900">Phone *</label>
              <input type="tel" id="phone" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full rounded-md border border-slate-300 px-4 py-2 text-slate-900" />
            </div>
            <div>
              <label htmlFor="service" className="mb-1 block text-sm font-medium text-slate-900">Service Interested In *</label>
              <select id="service" required value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="w-full rounded-md border border-slate-300 px-4 py-2 text-slate-900">
                <option value="">Select a service</option>
                <option value="studies">Studies & Education</option>
                <option value="council">Nursing Council Services</option>
                <option value="career">Career Support</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-900">Your Message *</label>
              <textarea id="message" required rows={6} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full rounded-md border border-slate-300 px-4 py-2 text-slate-900" />
            </div>
            <button type="submit" className="w-full rounded-md bg-whatsapp px-6 py-3 font-semibold text-navy-deep">Send via WhatsApp</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}
