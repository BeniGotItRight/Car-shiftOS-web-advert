"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { variants } from "@/lib/animations";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1760413453636-94dbb6128e89?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8bWVyY2VkZXMlMjBnbGUlMjBzaWRlJTIwcHJvZmlsZXxlbnwwfHx8fDE3NzIyNzk3ODd8MA&ixlib=rb-4.1.0&w=2400&q=80&fit=crop", // mercedes gle
  "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=2400&q=80", // Fallback for mercedes gls suv running
  "https://images.unsplash.com/photo-1742742339988-cd6375b5cf3f?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8YXVkaSUyMHEzJTIwYmxhY2slMjBzcG9ydHxlbnwwfHx8fDE3NzIyNzk3ODl8MA&ixlib=rb-4.1.0&w=2400&q=80&fit=crop", // audi q3
  "https://images.unsplash.com/photo-1644004482249-cdad1f0da74c?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8dm9sdm8lMjB4YzkwJTIwY2xlYW58ZW58MHx8fHwxNzcyMjc5NzkxfDA&ixlib=rb-4.1.0&w=2400&q=80&fit=crop", // volvo xc90
  "https://images.unsplash.com/photo-1768699718727-65e2dca678f8?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8dm9sa3N3YWdlbiUyMHRpZ3VhbiUyMHIlMjBsaW5lJTIwbW9kZXJufGVufDB8fHx8MTc3MjI3OTc5Mnww&ixlib=rb-4.1.0&w=2400&q=80&fit=crop", // volkswagen tiguan
  "https://images.unsplash.com/photo-1684245091942-5f90424f6c3c?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8cG9yc2NoZSUyMGNheWVubmUlMjB0dXJibyUyMHRyYWNrfGVufDB8fHx8MTc3MjI3OTc5M3ww&ixlib=rb-4.1.0&w=2400&q=80&fit=crop", // porsche cayenne
  "https://images.unsplash.com/photo-1648197323414-4255ea82d86b?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8dG95b3RhJTIwbGFuZCUyMGNydWlzZXIlMjAzMDAlMjAyMDI0fGVufDB8fHx8MTc3MjI3OTc5NHww&ixlib=rb-4.1.0&w=2400&q=80&fit=crop", // toyota land
  "https://images.unsplash.com/photo-1709417907424-92fb975020b2?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8bWVyY2VkZXMlMjBzJTIwY2xhc3MlMjAyMDIzJTIwbHV4dXJ5fGVufDB8fHx8MTc3MjI3OTc5NHww&ixlib=rb-4.1.0&w=2400&q=80&fit=crop", // mercedes s
  "https://images.unsplash.com/photo-1635104238710-c065503938bd?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8bGV4dXMlMjBseCUyMGJhY2t8ZW58MHx8fHwxNzcyMjc5Nzk1fDA&ixlib=rb-4.1.0&w=2400&q=80&fit=crop", // lexus lx
  "https://images.unsplash.com/photo-1740307952247-9965fe193da1?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8Zm9yZCUyMHJhcHRvciUyMDIwMjQlMjBhY3Rpb258ZW58MHx8fHwxNzcyMjc5Nzk2fDA&ixlib=rb-4.1.0&w=2400&q=80&fit=crop", // ford raptor
];

const HERO_VIDEO: string | null = null; // Use images to show off transition

export function Hero() {
  const router = useRouter();
  const [heroIndex, setHeroIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax calculations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    if (HERO_VIDEO) return;
    const t = setInterval(() => {
      setHeroIndex((i) => (i + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  const title = "Find your next move";
  const subtitle = "Industrial-grade ecosystem for vehicle dealerships.";

  return (
    <section 
      ref={containerRef}
      className="relative flex h-[100vh] items-center justify-center overflow-hidden bg-black"
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 z-0 origin-top"
        style={{ y: backgroundY, opacity }}
      >
        <AnimatePresence mode="popLayout">
          <motion.div
            key={heroIndex}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {HERO_VIDEO ? (
              <video
                src={HERO_VIDEO}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />
            ) : (
              <Image
                src={HERO_IMAGES[heroIndex]}
                alt="Luxury car"
                fill
                className="object-cover"
                priority
              />
            )}
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </motion.div>

      {/* Hero Content */}
      <motion.div 
        className="relative z-10 mx-auto max-w-5xl px-4 text-center"
        style={{ y: textY, opacity }}
      >
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.05 } }
          }}
          className="mb-6 flex flex-wrap justify-center overflow-hidden"
        >
          {title.split(" ").map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block overflow-hidden mr-3 md:mr-4 last:mr-0">
              <motion.span
                className="inline-block text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white drop-shadow-lg"
                variants={variants.revealText}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.02, delayChildren: 0.4 } }
          }}
          className="mb-10 flex flex-wrap justify-center overflow-hidden"
        >
          {subtitle.split(" ").map((word: string, wordIndex: number) => (
             <span key={wordIndex} className="inline-block overflow-hidden mr-1.5 last:mr-0">
               <motion.span
                 className="inline-block text-lg md:text-2xl text-white/80 font-light"
                 variants={variants.revealText}
               >
                 {word}
               </motion.span>
             </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Link
            href="/services"
            className="px-10 py-5 bg-blue-600 rounded-2xl font-bold text-lg hover:bg-blue-500 transition-all active:scale-95 text-white shadow-2xl shadow-blue-600/20"
          >
            Explore Services
          </Link>
          <Link
            href="/contact"
            className="px-10 py-5 border border-white/20 bg-white/5 backdrop-blur-md rounded-2xl font-bold text-lg hover:bg-white/10 transition-all active:scale-95 text-white"
          >
            Request Demo
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{ opacity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-white/60">Scroll</span>
          <div className="flex h-12 w-6 justify-center rounded-full border border-white/30 p-1">
            <motion.div
              className="h-2 w-1.5 rounded-full bg-white/60"
              animate={{ y: [0, 24, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
