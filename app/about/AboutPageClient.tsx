"use client";

import Link from "next/link";
import Image from "next/image";
import { Cpu, ChevronRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TypewriterHeading } from "@/components/TypewriterHeading";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24 md:pt-32 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal direction="fade">
          <div className="relative aspect-[21/9] rounded-[2.5rem] md:rounded-[3rem] border border-white/10 bg-slate-900/40 overflow-hidden group mb-12 md:mb-16">
            <Image
              src="/assets/about-team.webp"
              alt="Meet our team"
              fill
              sizes="(max-width: 1024px) 100vw, 80vw"
              className="object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
              <span className="text-3xl font-black italic text-blue-500">2026</span>
              <p className="text-sm font-bold uppercase tracking-widest text-white/60">Launch Generation</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up">
          <div className="max-w-3xl">
            <span className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4 block">Our Origin</span>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-6 md:mb-8 tracking-tighter leading-[0.9]">
              <TypewriterHeading
                segments={[
                  { text: "Kenya's First " },
                  { break: true },
                  { text: "Car Yard OS.", accent: true },
                ]}
              />
            </h1>
            <p className="text-xl sm:text-2xl text-slate-400 font-light leading-relaxed mb-6 md:mb-8">
              I kept seeing the same thing — car yards moving KES 5–10 million in stock, run entirely on WhatsApp threads and a notebook.
            </p>
            <div className="space-y-4 md:space-y-6 text-base sm:text-lg text-slate-500 font-light leading-relaxed mb-12">
              <p>
                No one knew what was actually in stock. No one knew the real profit per car. Imports were tracked by phoning the clearing agent. So we built ShiftOS — as far as we know, the first dedicated SaaS platform built specifically for car yards in Kenya. The gap was real, it was Kenya-specific, and no one else was solving it properly for the independent yard.
              </p>
              <p>
                ShiftOS is built by a small, focused team — not a faceless enterprise vendor. Every feature exists because a real yard needed it, not because it looked good on a features page.
              </p>
            </div>

            {/* Founder Profile Link */}
            <Link
              href="/about/benson"
              className="group relative inline-flex items-center gap-4 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all active:scale-95"
            >
              <div className="size-12 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                <Cpu className="size-6" />
              </div>
              <div className="flex flex-col items-start text-left">
                <span className="text-xs uppercase tracking-widest text-slate-500 font-black">Founder & Lead Developer</span>
                <span className="text-lg text-white">Benson Motari</span>
              </div>
              <ChevronRight className="size-5 text-slate-500 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
