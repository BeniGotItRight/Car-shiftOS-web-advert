"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Cpu, Code2, Rocket, Globe, ArrowLeft, X } from "lucide-react";
import Link from "next/link";

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
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Cpu className="size-24 text-blue-500/20 group-hover:text-blue-500/40 transition-colors duration-700" />
              </div>
              {/* Note: In a real scenario, Benson would place his photo here */}
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
                Architecture Lead
              </span>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-2">
                Benson <span className="text-blue-500">Motari</span>
              </h1>
              <p className="text-xl text-slate-400 font-light max-w-lg italic">
                "Building the industrial-grade future of automotive commerce in Kenya."
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="p-8 rounded-[2.5rem] bg-slate-900/30 border border-white/5 space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="size-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                <Rocket className="size-5" />
              </div>
              <h2 className="text-2xl font-bold">The Mission</h2>
            </div>
            <p className="text-slate-400 font-light leading-relaxed">
              As the Lead Developer at ShiftOS, I focus on building high-performance, multi-tenant architectures that solve real-world problems for Kenyan dealerships. My goal is to combine world-class user experience with high-fidelity security assurance backend stability.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="p-8 rounded-[2.5rem] bg-slate-900/30 border border-white/5 space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="size-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                <Globe className="size-5" />
              </div>
              <h2 className="text-2xl font-bold">Technical Stack</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "TypeScript", "TailwindCSS", "Node.js", "PostgreSQL", "Framer Motion"].map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-white/5 rounded-lg border border-white/10 text-xs text-slate-300 font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer Credit */}
        <div className="mt-24 text-center">
          <p className="text-slate-600 text-xs uppercase tracking-[0.3em] font-black italic">
            ShiftOS Architecture & Design — EST 2026
          </p>
        </div>
      </div>
    </div>
  );
}
