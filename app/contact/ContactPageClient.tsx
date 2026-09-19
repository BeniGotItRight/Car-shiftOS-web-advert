"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Phone, Send, Globe, Check } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TypewriterHeading } from "@/components/TypewriterHeading";

const inputClass =
  "w-full bg-slate-950/50 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500/50 transition-all text-white placeholder:text-slate-600 font-medium";

function Field({ id, label, optional, children }: { id: string; label: string; optional?: boolean; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
        <span>{label}</span>
        {optional && <span className="font-medium normal-case tracking-normal text-slate-500 mr-1">Optional</span>}
      </label>
      {children}
    </div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    subject: "",
    message: "",
    website: ""
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const sentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === "sent") sentRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong.");
      }
      setStatus("sent");
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24 md:pt-32 pb-16 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 md:mb-8 tracking-tighter">
            <TypewriterHeading
              segments={[
                { text: "Deploy the " },
                { text: "Best Car Yard System", accent: true },
                { text: " in Kenya." },
              ]}
            />
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 font-light leading-relaxed">
            Talk to the ShiftOS team: book a demo, ask a question, or see what it looks like on your own inventory.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <ScrollReveal direction="left">
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-xl flex flex-col sm:flex-row items-start gap-6 group hover:border-blue-500/20 transition-all">
                <div className="size-12 sm:size-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="size-6 text-blue-500" />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-1">Direct Communication</h2>
                  <p className="text-slate-500 font-light mb-4 text-sm uppercase tracking-widest">Email Enquiries</p>
                  <a href="mailto:carshiftos@gmail.com" className="text-xl font-medium text-white hover:text-blue-400 transition-colors">
                    carshiftos@gmail.com
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={100}>
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-xl flex flex-col sm:flex-row items-start gap-6 group hover:border-blue-500/20 transition-all">
                <div className="size-12 sm:size-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Globe className="size-6 text-blue-500" />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-1">Our Location</h2>
                  <p className="text-slate-500 font-light mb-4 text-sm uppercase tracking-widest">Headquarters</p>
                  <p className="text-xl font-medium text-white">
                    Based in Nairobi
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={200}>
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-xl flex flex-col sm:flex-row items-start gap-6 group hover:border-blue-500/20 transition-all">
                <div className="size-12 sm:size-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="size-6 text-blue-500" />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-1">Phone Line</h2>
                  <p className="text-slate-500 font-light mb-4 text-sm uppercase tracking-widest">Call or WhatsApp</p>
                  <p className="text-xl font-medium text-white">
                    0732009268
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Form */}
          <ScrollReveal direction="right">
            <div className="p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] bg-slate-900/20 border border-white/5 backdrop-blur-3xl relative overflow-hidden">
            {status === "sent" ? (
              <div ref={sentRef} className="relative z-10 py-10 text-center space-y-4" role="status">
                <div className="mx-auto size-14 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                  <Check className="size-7 text-green-500" />
                </div>
                <h2 className="text-2xl font-bold">Message sent</h2>
                <p className="text-slate-400 font-light">
                  Thanks, {formData.name.split(" ")[0]}. We'll get back to you soon. If it's urgent, call or WhatsApp 0732 009 268.
                </p>
              </div>
            ) : (
            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
              <div className="hidden" aria-hidden="true">
                <label>
                  Website
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website}
                    onChange={(e) => setFormData({...formData, website: e.target.value})}
                  />
                </label>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Field id="name" label="Full name">
                  <input
                    id="name"
                    name="name"
                    required
                    type="text"
                    autoComplete="name"
                    placeholder="John Mwangi"
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className={inputClass}
                  />
                </Field>
                <Field id="email" label="Email">
                  <input
                    id="email"
                    name="email"
                    required
                    type="email"
                    autoComplete="email"
                    placeholder="john@example.com"
                    maxLength={200}
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className={inputClass}
                  />
                </Field>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Field id="phone" label="Phone / WhatsApp" optional>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="0712 345 678"
                    maxLength={20}
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className={inputClass}
                  />
                </Field>
                <Field id="business" label="Dealership name" optional>
                  <input
                    id="business"
                    name="business"
                    type="text"
                    autoComplete="organization"
                    placeholder="Your car yard"
                    maxLength={100}
                    value={formData.business}
                    onChange={(e) => setFormData({...formData, business: e.target.value})}
                    className={inputClass}
                  />
                </Field>
              </div>

              <Field id="subject" label="Subject" optional>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="e.g. Demo for my yard"
                  maxLength={120}
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className={inputClass}
                />
              </Field>

              <Field id="message" label="Message">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your yard: how many cars you stock, how you track them today, and what you'd like to fix."
                  maxLength={3000}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className={inputClass + " resize-none"}
                />
              </Field>

              {status === "error" && (
                <p className="text-sm text-red-400 text-center" role="alert">
                  {errorMessage} You can also email carshiftos@gmail.com or WhatsApp 0732 009 268.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full group relative flex items-center justify-center gap-2 px-10 py-5 bg-white text-slate-950 rounded-2xl font-black text-lg hover:bg-slate-200 transition-all overflow-hidden active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center gap-2 uppercase tracking-tight">
                  {status === "sending" ? "Sending..." : <>Send Message <Send className="size-5" /></>}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>

              <p className="text-sm text-center text-slate-500 mt-2">
                We reply by email or phone. Prefer to chat? WhatsApp us on 0732 009 268.
              </p>
            </form>
            )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
