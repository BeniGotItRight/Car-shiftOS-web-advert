"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Eye,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TypewriterHeading } from "@/components/TypewriterHeading";
import { StackedTeamCards } from "@/components/StackedTeamCards";

const PILLARS = [
  {
    icon: MapPin,
    title: "Local First",
    desc: "Priced in KES, built for how Kenyan yards actually work.",
    image: "/assets/hero-nairobi.jpg",
  },
  {
    icon: Eye,
    title: "Full Visibility",
    desc: "See every car, every lead, every shilling in real time.",
    image: "/assets/features/feature-reports.png",
  },
  {
    icon: ShieldCheck,
    title: "Verified Trust",
    desc: "Your records stay with your dealership, not a departing salesperson.",
    image: "/assets/trust-photo.jpg",
  },
  {
    icon: TrendingUp,
    title: "Built to Scale",
    desc: "From one yard on day one to a multi-branch operation.",
    image: "/assets/elite-yard.png",
  },
];

const GRADIENT_TEXT =
  "bg-gradient-to-r from-sky-400 via-sky-400 to-cyan-500 bg-clip-text text-transparent";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#070c15] pb-16 pt-24 text-white md:pt-32">
      {/* Subtle digital grid-line overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1E293B 1px, transparent 1px), linear-gradient(to bottom, #1E293B 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {/* Decorative line-art watermark circles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 size-[420px] rounded-full border border-sky-500/[0.08]" />
        <div className="absolute -right-56 top-96 size-[560px] rounded-full border border-sky-500/[0.08]" />
        <div className="absolute -left-20 bottom-0 size-[320px] rounded-full border border-sky-500/[0.08]" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6">
        {/* ---------- Hero ---------- */}
        <section className="relative grid grid-cols-1 items-center gap-16 pb-24 md:pb-32 lg:grid-cols-2">
          <div className="relative">
            <span
              aria-hidden
              className="pointer-events-none absolute -left-6 top-1/2 hidden -translate-y-1/2 -rotate-90 select-none text-[11rem] font-black uppercase tracking-tighter text-white/[0.03] lg:block"
            >
              About
            </span>
            <ScrollReveal direction="up">
              <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-sky-400">
                About CarShiftOS
              </span>
              <h1 className="mb-6 text-5xl font-black leading-[0.95] tracking-tighter sm:text-6xl md:mb-8 md:text-7xl">
                <TypewriterHeading
                  accentClassName={GRADIENT_TEXT}
                  segments={[
                    { text: "Kenya's First " },
                    { break: true },
                    { text: "Car Yard…", accent: true },
                  ]}
                />
              </h1>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="fade">
            <div className="relative mx-auto aspect-square w-full max-w-md">
              <svg viewBox="0 0 400 400" className="h-full w-full drop-shadow-[0_0_60px_rgba(56,189,248,0.25)]">
                <defs>
                  <mask id="about-hero-mask" maskUnits="userSpaceOnUse">
                    <rect width="400" height="400" fill="black" />
                    <text
                      x="200"
                      y="255"
                      textAnchor="middle"
                      fontSize="220"
                      fontWeight="900"
                      letterSpacing="-10"
                      fill="white"
                    >
                      OS
                    </text>
                  </mask>
                </defs>
                <image
                  href="/assets/elite-yard.png"
                  width="400"
                  height="400"
                  preserveAspectRatio="xMidYMid slice"
                  mask="url(#about-hero-mask)"
                />
              </svg>
            </div>
          </ScrollReveal>
        </section>

        {/* ---------- Editorial Mission & Vision ---------- */}
        <section className="relative border-t border-white/5 py-24 md:py-32">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-12">
            <ScrollReveal direction="left">
              <div className="relative mx-auto h-[420px] w-full max-w-md lg:mx-0">
                <div className="absolute left-0 top-0 h-64 w-[72%] overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40">
                  <Image
                    src="/assets/elite-yard.png"
                    alt="A premium Kenyan car yard, fully stocked"
                    fill
                    sizes="400px"
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 h-52 w-[62%] overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40">
                  <Image
                    src="/assets/precision-inventory.png"
                    alt="Precision inventory tracking on CarShiftOS"
                    fill
                    sizes="320px"
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-16 left-8 h-40 w-40 overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/50">
                  <Image
                    src="/assets/premium-experience.png"
                    alt="A premium CarShiftOS dealer experience"
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100}>
              <div className="mb-10">
                <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-sky-400">
                  Our Mission
                </span>
                <p className="text-xl font-light leading-relaxed text-slate-400">
                  To empower car vendors with smart digital tools to manage,
                  market, and sell their vehicles more efficiently, while
                  making it easier for customers to discover and connect with
                  the right vehicles.
                </p>
              </div>

              <div className="mb-10">
                <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-sky-400">
                  Our Vision
                </span>
                <p className="text-xl font-light leading-relaxed text-slate-400">
                  To build Africa&apos;s most connected automotive ecosystem,
                  transforming how vehicles are managed, marketed, discovered,
                  and sold.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ---------- Philosophy ---------- */}
        <section className="relative border-t border-white/5 py-24 md:py-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal direction="up">
              <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-sky-400">
                Our Philosophy
              </span>
              <h2 className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
                Technology should make business{" "}
                <span className={GRADIENT_TEXT}>simpler, smarter,</span> and
                more connected.
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100}>
              <div className="space-y-6 text-lg font-light leading-relaxed text-slate-300">
                <p>
                  I kept seeing the same thing: car yards moving KES 5-10
                  million in stock, run entirely on WhatsApp threads and a
                  notebook.
                </p>
                <p>
                  No one knew what was actually in stock. No one knew the real
                  profit per car. Imports were tracked by phoning the clearing
                  agent. So we built ShiftOS, as far as we know the first
                  dedicated SaaS platform built specifically for car yards in
                  Kenya.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ---------- Vision banner ---------- */}
        <section className="relative border-t border-white/5 py-24 text-center md:py-32">
          <ScrollReveal direction="fade">
            <h2 className="mx-auto mb-6 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
              <TypewriterHeading
                accentClassName={GRADIENT_TEXT}
                segments={[
                  { text: "Built to " },
                  { text: "Grow With You.", accent: true },
                ]}
              />
            </h2>
            <div className="mx-auto max-w-2xl space-y-4 text-lg font-light leading-relaxed text-slate-300">
              <p>
                ShiftOS is built by a small, focused team, not a faceless
                enterprise vendor. Every feature exists because a real yard
                needed it, not because it looked good on a features page.
              </p>
              <p>
                See{" "}
                <Link
                  href="/services"
                  className="text-sky-400 underline underline-offset-4 hover:text-sky-300"
                >
                  everything ShiftOS does
                </Link>
                , or{" "}
                <Link
                  href="/contact"
                  className="text-sky-400 underline underline-offset-4 hover:text-sky-300"
                >
                  book a demo
                </Link>{" "}
                to see it on your own inventory.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150}>
            <div className="relative mx-auto mt-16 aspect-[21/8] w-full overflow-hidden rounded-[2.5rem] border border-white/10 md:rounded-[3rem]">
              <Image
                src="/assets/hero-nairobi.jpg"
                alt="Nairobi skyline, built for Kenya"
                fill
                sizes="(max-width: 1024px) 100vw, 1400px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            </div>
          </ScrollReveal>
        </section>

        {/* ---------- Pillars ---------- */}
        <section className="relative border-t border-white/5 py-24 md:py-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <ScrollReveal direction="up">
              <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-sky-400">
                What Makes Us Different
              </span>
              <h2 className="mb-4 text-4xl font-black tracking-tight sm:text-5xl">
                4 Core Pillars.
              </h2>
              <p className="max-w-sm text-lg font-light leading-relaxed text-slate-400">
                Everything we build comes back to these four principles.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {PILLARS.map((pillar, i) => (
                <ScrollReveal key={pillar.title} direction="up" delay={i * 80}>
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 p-8 transition-colors hover:border-sky-400/30">
                    <Image
                      src={pillar.image}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, 360px"
                      className="object-cover opacity-40 transition-all duration-700 group-hover:scale-105 group-hover:opacity-55"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40" />
                    <div className="relative z-10">
                      <div className="mb-5 inline-flex size-12 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/10 backdrop-blur-sm">
                        <pillar.icon className="size-6 text-sky-400" />
                      </div>
                      <h3 className="mb-2 text-xl font-bold tracking-tight text-white">
                        {pillar.title}
                      </h3>
                      <p className="text-sm font-light leading-relaxed text-slate-300">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Team ---------- */}
        <section className="relative border-t border-white/5 py-20 md:py-24">
          <ScrollReveal direction="up">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-sky-400">
                The People
              </span>
              <h2 className="mb-6 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
                Meet the <span className={GRADIENT_TEXT}>People</span> Behind
                CarShiftOS.
              </h2>
              <p className="text-xl font-light leading-relaxed text-slate-400">
                Building better automotive technology takes more than great
                software. It takes people with different skills,
                perspectives, and a shared ambition.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <StackedTeamCards />
          </ScrollReveal>
        </section>
      </div>
    </div>
  );
}
