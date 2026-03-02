"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Search, GitCompare, MessageSquare } from "lucide-react";
import { variants } from "@/lib/animations";

const propsList = [
  {
    icon: Search,
    title: "Browse",
    description: "Explore our curated selection of quality used vehicles.",
    href: "/vehicles",
  },
  {
    icon: GitCompare,
    title: "Compare",
    description: "Compare specs, prices, and features side by side.",
    href: "/compare",
  },
  {
    icon: MessageSquare,
    title: "Inquire",
    description: "Get in touch with zero obligation. We respond fast.",
    href: "/contact",
  },
];

export function ValueProps() {
  return (
    <section className="bg-slate-950 py-24 sm:py-40 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={{
            visible: { transition: { staggerChildren: 0.1 } }
           }}
           className="mb-24 text-center flex flex-col items-center"
        >
          <div className="overflow-hidden mb-6">
            <motion.h2
              variants={variants.revealText}
              className="text-5xl md:text-8xl font-bold tracking-tighter text-white leading-[0.9]"
            >
              Engineered <span className="hero-text italic">Performance</span>
            </motion.h2>
          </div>
          <div className="overflow-hidden">
             <motion.p
               variants={variants.revealText}
               className="text-lg md:text-2xl text-slate-500 max-w-2xl font-medium leading-relaxed"
             >
               A streamlined acquisition experience designed around technical transparency and absolute peace of mind.
             </motion.p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
          }}
          className="grid gap-10 md:grid-cols-3"
        >
          {propsList.map((item) => (
            <motion.div
              key={item.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
            >
              <Link
                href={item.href}
                className="group flex flex-col h-full rounded-[2.5rem] border border-slate-900 bg-slate-900/20 p-10 transition-all duration-700 hover:border-white/20 hover:bg-slate-900/40 hover:shadow-3xl hover:-translate-y-2 backdrop-blur-xl"
              >
                <div className="mb-10 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 text-white border border-white/10 transition-all duration-500 group-hover:bg-white group-hover:text-slate-900 group-hover:scale-110 shadow-xl shadow-blue-500/10">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="mb-4 text-2xl font-bold tracking-tight text-white uppercase tracking-tighter">{item.title}</h3>
                <p className="text-slate-500 flex-1 text-lg font-medium mb-10 leading-relaxed">{item.description}</p>
                <div className="mt-auto flex items-center font-bold text-white transition-colors group-hover:text-slate-400">
                  <span className="relative overflow-hidden text-xs uppercase tracking-[0.3em]">
                    <span className="inline-block transition-transform duration-500 group-hover:-translate-y-full">Protocol Details</span>
                    <span className="absolute inset-0 inline-block translate-y-full transition-transform duration-500 group-hover:translate-y-0">Access Now</span>
                  </span>
                  <motion.span 
                    className="ml-3 inline-block"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >
                    →
                  </motion.span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
