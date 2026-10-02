"use client";

import Link from "next/link";
import Image from "next/image";
import {
  PackageSearch,
  Users,
  CreditCard,
  Wrench,
  UserCog,
  Globe,
  ArrowRight,
  ArrowDown,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TypewriterHeading } from "@/components/TypewriterHeading";

const AREAS = [
  {
    num: "01",
    icon: PackageSearch,
    title: "Dealership Operations",
    description:
      "Keep the operational side of your dealership organised, from the vehicles you acquire to the information and documents surrounding them.",
    capabilities: [
      "Your vehicle stock",
      "Cars you're importing",
      "What each car really costs you",
      "Your paperwork, organised",
      "Day-to-day admin",
    ],
  },
  {
    num: "02",
    icon: Users,
    title: "Sales & Customers",
    description:
      "Keep customers, enquiries, sales opportunities, and deals connected, so your team knows what needs attention.",
    capabilities: [
      "Your customer list",
      "Who's enquired about what",
      "Deals in progress",
      "Staying in touch with buyers",
      "What each salesperson earns",
    ],
  },
  {
    num: "03",
    icon: CreditCard,
    title: "Finance & Control",
    description:
      "Keep the financial information around your dealership organised and connected to the vehicles, customers, and deals that created it. ShiftOS records this information; it doesn't hold or process vehicle-sale funds.",
    capabilities: [
      "Payments and receipts",
      "Invoices, kept on file",
      "What you're actually making",
      "Commission records",
      "A clear financial picture",
    ],
  },
  {
    num: "04",
    icon: Wrench,
    title: "Workshop & Service",
    description:
      "Run workshop and service activity alongside the rest of your dealership, instead of treating it as a separate operation.",
    capabilities: [
      "Running the workshop",
      "Booking in service jobs",
      "A car's full service history",
      "A login just for mechanics",
    ],
  },
  {
    num: "05",
    icon: UserCog,
    title: "People & Management",
    description:
      "Give your team the access they need, while giving management a clearer view of what's happening across the dealership.",
    capabilities: [
      "Your staff list",
      "Who can see what",
      "Reports on how business is going",
      "Simple business numbers",
      "Who did what, and when",
    ],
  },
  {
    num: "06",
    icon: Globe,
    title: "Digital Presence & Marketplace",
    description:
      "Take your dealership beyond the physical yard with a professional digital showroom and a public marketplace designed around dealership inventory.",
    capabilities: [
      "Your own online showroom",
      "Cars listed online",
      "A shared marketplace (coming soon)",
      "Your dealership's public profile",
      "Buyers finding your cars",
      "Reviews from real buyers",
    ],
  },
];

const CONNECTS = ["Vehicles", "Customers", "Sales", "Financials", "Documents", "Workshop", "Digital Presence"];

const SHOWROOM_FLOW = ["Your Dealership", "Digital Showroom", "Vehicle", "Buyer", "WhatsApp / Call / Enquiry", "Dealership Team"];

function FlowRow({ steps, dense }: { steps: string[]; dense?: boolean }) {
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-2.5">
      {steps.map((step, i) => (
        <div key={step} className="flex flex-col md:flex-row items-center gap-2.5">
          <span
            className={`rounded-lg bg-white/[0.04] border border-white/10 text-slate-300 font-semibold uppercase tracking-wide text-center ${
              dense ? "px-3 py-2 text-xs" : "px-4 py-2.5 text-sm"
            }`}
          >
            {step}
          </span>
          {i < steps.length - 1 && (
            <ArrowRight className="size-4 text-blue-500 shrink-0 hidden md:block" />
          )}
          {i < steps.length - 1 && (
            <ArrowDown className="size-4 text-blue-500 shrink-0 md:hidden" />
          )}
        </div>
      ))}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24 md:pt-32 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <div className="max-w-3xl mb-10 px-2 sm:px-0">
          <span className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4 block">
            Our Platform
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tighter">
            <TypewriterHeading
              segments={[
                { text: "Everything your dealership needs. " },
                { text: "In one system.", accent: true },
              ]}
            />
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 font-light leading-relaxed mb-8">
            Car ShiftOS connects the everyday work of a dealership, from vehicles and customers to sales, financial records, documents, workshop operations, and your digital presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 rounded-xl font-bold hover:bg-blue-500 transition-colors"
            >
              Book a Demo
            </Link>
            <a
              href="#areas"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/15 rounded-xl font-bold hover:bg-white/5 transition-colors"
            >
              See How It Works
            </a>
          </div>
        </div>

        {/* Six connected areas */}
        <div id="areas" className="grid grid-cols-1 md:grid-cols-2 items-start gap-5 mb-20 scroll-mt-28">
          {AREAS.map((a, i) => (
            <ScrollReveal key={a.num} direction="up" delay={(i % 2) * 100}>
              <div className="p-7 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-4 mb-5">
                  <div className="size-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                    <a.icon className="w-5 h-5 text-blue-500" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-600">
                    {a.num}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold mb-3">{a.title}</h2>
                <p className="text-slate-400 font-light text-sm leading-relaxed mb-6">
                  {a.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
                  {a.capabilities.map((c) => (
                    <li key={c} className="flex items-center gap-2.5 text-sm text-slate-300">
                      <span className="size-1 rounded-full bg-blue-500 shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* One dealership. One system. — the visual high point of the page */}
        <ScrollReveal direction="up">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 mb-14 text-center">
            <Image
              src="/assets/hero-nairobi.jpg"
              alt=""
              fill
              sizes="(max-width: 1152px) 100vw, 1152px"
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/85 to-slate-950" />
            <div className="relative p-10 sm:p-20">
              <h2 className="text-3xl sm:text-5xl font-black mb-5 tracking-tight">
                One dealership. One system.
              </h2>
              <p className="max-w-xl mx-auto text-slate-300 font-light leading-relaxed mb-10">
                Your dealership already has a way of working. Car ShiftOS brings the important parts together in one connected system.
              </p>
              <div className="flex flex-wrap justify-center gap-2.5 mb-8">
                {CONNECTS.map((c) => (
                  <span
                    key={c}
                    className="px-4 py-2 rounded-lg bg-white/[0.06] border border-white/10 text-sm font-medium text-slate-200"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <ArrowDown className="size-5 text-blue-500 mx-auto mb-8" />
              <span className="inline-block px-6 py-3 mb-10 rounded-lg bg-blue-600 text-white font-black tracking-tight">
                Car ShiftOS
              </span>
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-950 rounded-xl font-bold hover:bg-slate-200 transition-colors"
                >
                  Book a Demo
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Digital presence, expanded */}
        <ScrollReveal direction="up">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 sm:p-14 mb-14">
            <div className="max-w-2xl mb-10">
              <h2 className="text-2xl sm:text-3xl font-black mb-3 tracking-tight">
                Put your dealership online.
              </h2>
              <p className="text-slate-400 font-light leading-relaxed">
                Give your dealership a professional digital showroom connected to the vehicles you actually have in stock.
              </p>
            </div>
            <div className="mb-14">
              <FlowRow steps={SHOWROOM_FLOW} dense />
            </div>

            <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="max-w-xl">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight">
                    Take your vehicles beyond the yard.
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/20 rounded-full px-3 py-1 shrink-0">
                    Coming Soon
                  </span>
                </div>
                <p className="text-slate-400 font-light leading-relaxed">
                  Car ShiftOS is building a public marketplace where buyers can discover vehicles from ShiftOS-powered dealerships.
                </p>
              </div>
              <div className="flex flex-col items-start gap-2 shrink-0">
                <Link
                  href="/contact?subject=List%20my%20cars%20on%20the%20marketplace"
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  List your cars first <ArrowRight className="size-4" />
                </Link>
                <a
                  href="https://cars.carshiftos.co.ke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-300 transition-colors"
                >
                  See what buyers will find <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Final CTA */}
        <div className="relative text-center rounded-2xl border border-white/10 bg-white/[0.02] p-10 sm:p-16">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight leading-tight">
              Your dealership already has a way of working.
              <br />
              Car ShiftOS gives it one system.
            </h2>
            <p className="text-lg text-slate-400 font-light mb-8">
              Built for Kenyan car dealerships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-blue-600 rounded-xl font-bold text-lg hover:bg-blue-500 transition-colors"
              >
                Book a Demo
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 border border-white/15 rounded-xl font-bold text-lg hover:bg-white/5 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
