"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Briefcase, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { TypewriterHeading } from "@/components/TypewriterHeading";
import { ScrollReveal } from "@/components/ScrollReveal";

const GRADIENT_TEXT =
  "bg-gradient-to-r from-sky-400 via-sky-400 to-cyan-500 bg-clip-text text-transparent";

export default function MarianProfile() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#070c15] text-white pt-24 pb-16 px-6 font-sans">
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
      </div>

      <div className="relative max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
          Back to ShiftOS
        </Link>

        {/* Header Profile Section */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="size-48 md:size-64 rounded-[3rem] border border-sky-400/20 bg-slate-900/50 backdrop-blur-xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.18)_0%,transparent_60%)]" />
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <ShieldCheck className="size-24 text-sky-400/30 group-hover:text-sky-400/50 group-hover:scale-105 transition-all duration-700" />
              </div>
              {/* Placeholder mark until a real photo is provided */}
            </div>
            <div className="absolute -bottom-4 -right-4 size-12 rounded-2xl bg-sky-500 flex items-center justify-center border-4 border-slate-950 shadow-xl">
              <Briefcase className="size-6 text-white" />
            </div>
          </motion.div>

          <div className="flex-1 text-center md:text-left space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-sky-400/10 border border-sky-400/20 text-sky-400 text-xs font-black uppercase tracking-widest mb-4">
                Business Development &amp; Cybersecurity Partner
              </span>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-2">
                <TypewriterHeading
                  duration={2000}
                  accentClassName={GRADIENT_TEXT}
                  segments={[
                    { text: "Marian " },
                    { text: "Bosibori", accent: true },
                  ]}
                />
              </h1>
              <p className="text-xl text-slate-400 font-light max-w-lg italic">
                "Growing ShiftOS the right way: trusted partnerships, and a
                platform dealerships can rely on."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center md:justify-start gap-4 pt-4"
            >
              <Link
                href="/contact"
                className="flex items-center gap-3 px-6 py-3 bg-white text-slate-950 rounded-xl font-bold hover:bg-slate-200 transition-all active:scale-95"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Content Modules */}
        <div className="grid grid-cols-1">
          <ScrollReveal direction="left">
            <div className="h-full p-8 rounded-[2.5rem] bg-slate-900/30 border border-white/5 space-y-6">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-xl bg-sky-400/10 flex items-center justify-center text-sky-400">
                  <Briefcase className="size-5" />
                </div>
                <h2 className="text-2xl font-bold">The Role</h2>
              </div>
              <p className="text-slate-400 font-light leading-relaxed">
                Marian leads business development for Car ShiftOS, building
                the dealer and partner relationships that help the platform
                grow across Kenya.
              </p>
              <p className="text-slate-400 font-light leading-relaxed">
                She also oversees cybersecurity, making sure dealership data,
                customer records and payment information stay protected as
                ShiftOS scales.
              </p>
              <p className="text-slate-400 font-light leading-relaxed">
                Her focus: a platform dealerships can trust with their
                business, and partnerships built to last.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Footer Credit */}
        <div className="mt-24 text-center">
          <p className="text-slate-600 text-xs uppercase tracking-[0.3em] font-black italic">
            Car ShiftOS · Founded 2026
          </p>
        </div>
      </div>
    </div>
  );
}
