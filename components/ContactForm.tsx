"use client";

import { useState } from "react";
import { Mail, Link2, Code2, Phone, Send, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { personal } from "@/data/profile";

const links = [
  { icon: Mail, label: personal.email, href: `mailto:${personal.email}` },
  { icon: Phone, label: personal.phone, href: `tel:${personal.phone}` },
  { icon: Link2, label: "LinkedIn", href: personal.linkedin },
  { icon: Code2, label: "GitHub", href: personal.github },
];

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function validate(): Errors {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "That email doesn't look right.";
    if (!form.message.trim()) e.message = "Add a short message.";
    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length === 0) {
      // Wire this up to your form backend of choice (Formspree, Resend, etc.)
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        index="10"
        title="Contact"
        description="Open to Data Analyst and Business Analyst roles — reach out directly or send a message below."
      />

      <div className="grid lg:grid-cols-2 gap-10">
        <div className="space-y-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="flex items-center gap-3 panel rounded-xl px-5 py-4 hover:border-accent/40 transition-colors"
            >
              <link.icon size={17} className="text-accent" />
              <span className="text-sm text-text-primary">{link.label}</span>
            </a>
          ))}
        </div>

        <form onSubmit={handleSubmit} noValidate className="panel rounded-2xl p-6 space-y-4">
          {sent && (
            <div className="flex items-center gap-2 text-sm text-data-positive bg-data-positive/10 border border-data-positive/30 rounded-lg px-3.5 py-2.5">
              <CheckCircle2 size={16} />
              Message ready to send — connect a form backend to deliver it.
            </div>
          )}

          <div>
            <label htmlFor="name" className="text-xs text-text-muted block mb-1.5">Name</label>
            <input
              id="name"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="w-full bg-bg-elevated border border-border rounded-lg px-3.5 py-2.5 text-sm text-text-primary outline-none focus:border-accent/50"
            />
            {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="text-xs text-text-muted block mb-1.5">Email</label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              className="w-full bg-bg-elevated border border-border rounded-lg px-3.5 py-2.5 text-sm text-text-primary outline-none focus:border-accent/50"
            />
            {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message" className="text-xs text-text-muted block mb-1.5">Message</label>
            <textarea
              id="message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              className="w-full bg-bg-elevated border border-border rounded-lg px-3.5 py-2.5 text-sm text-text-primary outline-none focus:border-accent/50 resize-none"
            />
            {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-accent text-bg text-sm font-medium rounded-lg py-2.5 hover:bg-accent-strong transition-colors"
          >
            <Send size={15} />
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
