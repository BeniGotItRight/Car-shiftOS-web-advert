"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Cpu, Code2, Rocket, ArrowLeft, X } from "lucide-react";
import Link from "next/link";
import { TypewriterHeading } from "@/components/TypewriterHeading";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function BensonProfile() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24 pb-16 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
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
            <div className="size-48 md:size-64 rounded-[3rem] border border-blue-500/20 bg-slate-900/50 backdrop-blur-xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.18)_0%,transparent_60%)]" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Cpu className="size-24 text-blue-500/30 group-hover:text-blue-500/50 group-hover:scale-105 transition-all duration-700" />
              </div>
              {/* Placeholder mark until a real photo is provided */}
            </div>
            <div className="absolute -bottom-4 -right-4 size-12 rounded-2xl bg-blue-600 flex items-center justify-center border-4 border-slate-950 shadow-xl">
              <Code2 className="size-6 text-white" />
            </div>
          </motion.div>

          <div className="flex-1 text-center md:text-left space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-widest mb-4">
                Founder & Lead Developer
              </span>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-2">
                <TypewriterHeading
                  duration={2000}
                  segments={[
                    { text: "Benson " },
                    { text: "Motari", accent: true },
                  ]}
                />
              </h1>
              <p className="text-xl text-slate-400 font-light max-w-lg italic">
                "Building the tools Kenyan car dealerships actually need."
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center md:justify-start gap-4 pt-4"
            >
              <a 
                href="mailto:bensonmotari4@gmail.com"
                className="flex items-center gap-3 px-6 py-3 bg-white text-slate-950 rounded-xl font-bold hover:bg-slate-200 transition-all active:scale-95"
              >
                <Mail className="size-5" />
                Email Me
              </a>
              <div className="flex gap-2">
                {[
                  { icon: Github, href: "https://github.com/BensonMotari" },
                  { icon: Linkedin, href: "https://linkedin.com/in/bensonmotari" },
                  { icon: X, href: "https://x.com/bensonmotari" },
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.href}
                    className="size-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    <social.icon className="size-5 text-slate-400" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Content Modules */}
        <div className="grid grid-cols-1">
          <ScrollReveal direction="left">
            <div className="h-full p-8 rounded-[2.5rem] bg-slate-900/30 border border-white/5 space-y-6">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <Rocket className="size-5" />
                </div>
                <h2 className="text-2xl font-bold">The Mission</h2>
              </div>
              <p className="text-slate-400 font-light leading-relaxed">
                We're building Car ShiftOS to give Kenyan car dealerships a better way to manage their day-to-day operations.
              </p>
              <p className="text-slate-400 font-light leading-relaxed">
                From vehicle inventory and customer enquiries to sales, financial records, documents and online showrooms, ShiftOS brings the key parts of a dealership together in one platform.
              </p>
              <p className="text-slate-400 font-light leading-relaxed">
                Our focus is simple: build software that is reliable, easy to use and designed around how car dealerships in Kenya actually work.
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
