"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { variants } from "@/lib/animations";
import { Zap } from "lucide-react";

export function WebFooter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <footer ref={containerRef} className="bg-black text-white overflow-hidden relative pt-16 pb-8 sm:pt-24 sm:pb-12 flex flex-col justify-end min-h-[50vh]">
      <motion.div 
        style={{ y, opacity }}
        className="mx-auto w-full max-w-7xl px-6 sm:px-8 relative z-10 flex-1 flex flex-col justify-between"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="max-w-md">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="flex items-center justify-center size-8 rounded-lg bg-blue-600 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                <Zap className="size-5 text-white fill-white/10" />
              </div>
              <span className="font-black tracking-tighter text-3xl uppercase italic">
                Shift<span className="text-blue-500">OS</span>
              </span>
            </Link>
            <p className="text-slate-400 text-lg leading-relaxed">
              The industrial-grade ecosystem for modern vehicle dealerships. Scale your brand with military-precision technology.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-12">
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-medium uppercase tracking-wider text-sm mb-2">
                Platform
              </h3>
              <Link href="/services" className="text-slate-400 hover:text-white transition-colors">Our Services</Link>
              <Link href="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link>
            </div>
            
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-medium uppercase tracking-wider text-sm mb-2">Company</h3>
              <Link href="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link>
              <Link href="/services" className="text-slate-400 hover:text-white transition-colors">Our Services</Link>
              <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link>
            </div>
            
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-medium uppercase tracking-wider text-sm mb-2">Legal</h3>
              <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="text-slate-400 hover:text-white transition-colors">Terms</Link>
            </div>
          </div>
        </div>

        {/* Massive Statement Typography */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={{
            visible: { transition: { staggerChildren: 0.05 } }
          }}
          className="border-t border-white/10 pt-16 mt-auto overflow-hidden"
        >
          <div className="flex flex-wrap justify-center sm:justify-between items-center overflow-hidden mb-8">
            {"SHIFT YOUR EXPECTATIONS".split(" ").map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-4 last:mr-0 mb-2">
                <motion.span 
                  variants={variants.revealText}
                  className="inline-block text-[12vw] sm:text-[8vw] md:text-[6.5vw] font-bold tracking-tighter leading-none text-white/90"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8 mt-8">
            <span className="text-sm text-slate-500 max-w-sm text-center sm:text-left">
              &copy; {new Date().getFullYear()} Car ShiftOS Platform. All rights reserved.
            </span>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition-colors cursor-pointer">
                In
              </div>
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition-colors cursor-pointer">
                Fb
              </div>
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition-colors cursor-pointer">
                X
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-blue-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
    </footer>
  );
}
