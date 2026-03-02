"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { variants } from "@/lib/animations";

export function CTABanner() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-black py-24 sm:py-32 lg:py-48">
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2400)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="flex flex-col items-center"
        >
          <div className="overflow-hidden mb-8">
            <motion.h2
              variants={variants.revealText}
              className="text-5xl md:text-8xl font-bold tracking-tighter text-white leading-[0.9]"
            >
              Secure Your <span className="hero-text italic">Succession</span>
            </motion.h2>
          </div>
          
          <div className="overflow-hidden mb-16">
            <motion.p
              variants={variants.revealText}
              className="text-lg md:text-2xl text-slate-500 font-medium max-w-3xl leading-relaxed"
            >
              Inquiry and acquisition protocols are live. Access our hand-picked inventory of high-performance assets today.
            </motion.p>
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="flex flex-wrap justify-center gap-6"
          >
            <Link
              href="/vehicles"
              className="group relative overflow-hidden rounded-full bg-white px-12 py-6 text-xs font-bold text-slate-950 transition-all hover:bg-slate-200 uppercase tracking-[0.3em] shadow-xl shadow-blue-500/10"
            >
              Explore Stock
            </Link>
            <Link
              href="/contact"
              className="group rounded-full border border-white/20 bg-white/5 px-12 py-6 text-xs font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10 uppercase tracking-[0.3em]"
            >
              Initiate Contact
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
