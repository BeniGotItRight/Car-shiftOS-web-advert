"use client";

import Link from "next/link";
import {
  PackageSearch,
  Users,
  Ship,
  Wrench,
  Monitor,
  CreditCard,
  Calculator,
  MessageSquare,
  UserCog,
  Globe,
  ArrowRight,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TypewriterHeading } from "@/components/TypewriterHeading";

const MODULES = [
  {
    num: "01",
    icon: PackageSearch,
    title: "Inventory Command Centre",
    tagline: "Know exactly what's on your lot, right now.",
    description:
      "Your entire stock, organised and visible in one place. Every vehicle has its own profile with photos, purchase cost, selling price, and full history from the day it arrived to the day it left. You always know what you have, what it cost you, and how long it's been sitting.",
  },
  {
    num: "02",
    icon: Users,
    title: "CRM & Lead Management",
    tagline: "Never lose a buyer again.",
    description:
      "Every enquiry, every call, every walk-in: captured and tracked. Your sales team knows exactly where each lead stands, who's following up, and what the next step is. No more relying on memory or WhatsApp chats to manage your pipeline.",
  },
  {
    num: "03",
    icon: Ship,
    title: "Import Pipeline Tracker",
    tagline: "From auction to your yard: every step accounted for.",
    description:
      "Importing is complicated. ShiftOS makes it manageable. Track every vehicle through the full import journey: from purchase abroad, through shipping and clearance, to final delivery at your yard. Know your real cost before the car even arrives.",
  },
  {
    num: "04",
    icon: Wrench,
    title: "Workshop & Service Management",
    tagline: "Your workshop is a revenue stream. Run it like one.",
    description:
      "Everything your workshop does is logged, tracked, and billed properly. Job cards, parts, technician assignments, and service invoices, all in one place. At the end of the month, you know exactly what your workshop made.",
  },
  {
    num: "05",
    icon: Monitor,
    title: "Live Customer Showroom",
    tagline: "Your yard, online and open 24/7.",
    description:
      "Every yard on ShiftOS gets its own professional online showroom. Your inventory is always up to date. No manual uploads, no stale listings. Customers can browse, enquire, and share listings directly from their phones without you lifting a finger.",
  },
  {
    num: "06",
    icon: CreditCard,
    title: "Payment Records & Receipts",
    tagline: "Every deal closes with a paper trail.",
    description:
      "Every buyer leaves with a receipt. Every shilling your yard receives is logged against the right vehicle, the right sale, the right date, without your finance officer touching a spreadsheet. When money moves, the system knows.",
  },
  {
    num: "07",
    icon: Calculator,
    title: "HP & Financing Calculator",
    tagline: "Most buyers don't pay cash. Now you're ready for them.",
    description:
      "Give every customer a clear picture of what a hire purchase deal looks like before negotiations even begin. Monthly repayments, deposit options, and loan terms, calculated instantly on any vehicle listing.",
  },
  {
    num: "08",
    icon: MessageSquare,
    title: "SMS Notifications",
    tagline: "Everyone who needs to know knows, automatically.",
    description:
      "From new leads to closed deals to payment confirmations, the right people get the right message at the right time. No manual follow-up, no missed updates.",
  },
  {
    num: "09",
    icon: UserCog,
    title: "Mechanic Portal",
    tagline: "A dedicated space for your workshop team.",
    description:
      "Your mechanics get their own login, their own view, and access to only what they need. Job cards, task updates, parts logging, all without touching any sales or financial information.",
  },
  {
    num: "10",
    icon: Globe,
    title: "Public Vehicle Marketplace",
    tagline: "cars.carshiftos.co.ke: coming soon.",
    comingSoon: true,
    cta: {
      label: "List your cars first",
      href: "/contact?subject=List%20my%20cars%20on%20the%20marketplace",
    },
    description:
      "A single destination where Kenyan buyers can search for vehicles across every ShiftOS-powered yard in the country. Your inventory gets in front of buyers who were never going to find your yard on their own.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24 md:pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16 md:mb-24 px-2 sm:px-0">
          <span className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4 block">
            Our Platform
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 md:mb-8 tracking-tighter">
            <TypewriterHeading
              segments={[
                { text: "Everything your yard needs. " },
                { text: "Built for Kenya.", accent: true },
              ]}
            />
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 font-light leading-relaxed">
            One platform. Ten modules. Zero spreadsheets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {MODULES.map((m, i) => (
            <ScrollReveal key={m.num} direction="up" delay={(i % 2) * 100}>
              <div className="relative h-full p-6 sm:p-8 rounded-[2rem] bg-slate-900/40 border border-white/5 backdrop-blur-xl group hover:border-blue-500/20 transition-all">
                <div className="flex items-start justify-between mb-6">
                  <div className="size-14 rounded-2xl bg-blue-950 border border-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <m.icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <div className="flex items-center gap-3">
                    {m.comingSoon && (
                      <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/20 rounded-full px-3 py-1">
                        Coming Soon
                      </span>
                    )}
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-600">
                      {m.num}
                    </span>
                  </div>
                </div>
                <h2 className="text-xl sm:text-2xl font-black mb-2">{m.title}</h2>
                <p className="text-blue-400 font-medium mb-4">{m.tagline}</p>
                <p className="text-slate-400 font-light text-sm leading-relaxed">
                  {m.description}
                </p>
                {m.cta && (
                  <Link
                    href={m.cta.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    {m.cta.label} <ArrowRight className="size-4" />
                  </Link>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Page CTA */}
        <div className="relative text-center rounded-[2rem] md:rounded-[3rem] border border-white/5 bg-slate-900/20 p-10 sm:p-16 overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight">
              Ready to see it live?
            </h2>
            <p className="text-lg text-slate-400 font-light mb-8">
              Book a free 30-minute demo. We&apos;ll walk through the system on your own inventory.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 bg-blue-600 rounded-2xl font-bold text-lg hover:bg-blue-500 transition-all active:scale-95 shadow-2xl shadow-blue-600/20"
            >
              Book a Free Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
