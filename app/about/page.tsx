"use client";

import { motion } from "framer-motion";

import Link from "next/link";
import { Cpu, ChevronRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24 md:pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-6 md:mb-8 tracking-tighter leading-[0.9]">
              Built for <br/><span className="text-blue-500">Sovereignty.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-400 font-light leading-relaxed mb-6 md:mb-8">
              ShiftOS was born from a simple observation: high-end vehicle dealerships were being underserved by generic CRM tools.
            </p>
            <div className="space-y-4 md:space-y-6 text-base sm:text-lg text-slate-500 font-light leading-relaxed mb-12">
              <p>
                We built a platform that doesn't just manage data—it commands it. By combining industrial-grade security with a strictly premium user interface, we've created a digital ecosystem that speaks the language of luxury.
              </p>
              <p>
                Our mission is to empower every dealership with the same technical prowess as the world's largest automotive groups, providing complete data sovereignty and a world-class customer experience.
              </p>
            </div>

            {/* Lead Dev Profile Link */}
            <div className="space-y-4">
              <Link
                href="/about/benson"
                className="group relative inline-flex items-center gap-4 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all active:scale-95"
              >
                <div className="size-12 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                  <Cpu className="size-6" />
                </div>
                <div className="flex flex-col items-start text-left">
                  <span className="text-xs uppercase tracking-widest text-slate-500 font-black">Lead Developer</span>
                  <span className="text-lg text-white">Benson Motari</span>
                </div>
                <ChevronRight className="size-5 text-slate-500 group-hover:translate-x-1 transition-transform" />
              </Link>
              <motion.p 
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-sm font-medium text-blue-400/80 px-2"
              >
                ⚡ Press the button above to view my profile and contact me.
              </motion.p>
            </div>
          </div>
          
          <div className="relative">
             <div className="aspect-[4/5] rounded-[4rem] border border-white/10 bg-slate-900/40 relative overflow-hidden group">
                <img 
                  src="/assets/shiftos-hero.png" 
                  alt="ShiftOS Vision" 
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-12 left-12">
                   <span className="text-3xl font-black italic text-blue-500">2026</span>
                   <p className="text-sm font-bold uppercase tracking-widest text-white/60">Launch Generation</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
