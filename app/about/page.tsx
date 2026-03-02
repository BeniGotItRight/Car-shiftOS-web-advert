"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
              Built for <br/><span className="text-blue-500">Sovereignty.</span>
            </h1>
            <p className="text-2xl text-slate-400 font-light leading-relaxed mb-8">
              ShiftOS was born from a simple observation: high-end vehicle dealerships were being underserved by generic CRM tools.
            </p>
            <div className="space-y-6 text-lg text-slate-500 font-light leading-relaxed">
              <p>
                We built a platform that doesn't just manage data—it commands it. By combining industrial-grade security with a strictly premium user interface, we've created a digital ecosystem that speaks the language of luxury.
              </p>
              <p>
                Our mission is to empower every dealership with the same technical prowess as the world's largest automotive groups, providing complete data sovereignty and a world-class customer experience.
              </p>
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
