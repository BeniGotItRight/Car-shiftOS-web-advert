"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface LoadingSplashProps {
  duration?: number; // Duration in seconds
}

interface SpeedLine {
  top: string;
  width: string;
  duration: number;
  delay: number;
}

export function LoadingSplash({ duration = 8 }: LoadingSplashProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [speedLines, setSpeedLines] = useState<SpeedLine[]>([]);

  useEffect(() => {
    // Generate speed lines only on mount (client-side) to ensure purity
    if (speedLines.length === 0) {
      setSpeedLines(
        Array.from({ length: 20 }).map(() => ({
          top: `${Math.random() * 100}%`,
          width: `${Math.random() * 40 + 10}%`,
          duration: Math.random() * 0.5 + 0.3,
          delay: Math.random() * 2,
        }))
      );
    }
  }, [speedLines.length]);

  useEffect(() => {
    // Hide the loader after the specified duration
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration * 1000);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950 overflow-hidden pointer-events-none"
        >
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.15 }}
            transition={{ 
               opacity: { duration: 2, ease: "easeOut" },
               scale: { duration: duration + 2, ease: "easeOut" }
            }}
            className="absolute inset-0 z-0 pointer-events-none"
          >
            <Image 
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2400" 
              alt="Professional Luxury Showroom" 
              fill
              className="object-cover blur-[2px]"
              priority
            />
            {/* Dark Professional Overlay */}
            <div className="absolute inset-0 bg-slate-950/40"></div>
          </motion.div>

          {/* Refined Speed Lines - More subtle, high-performance feel */}
          <div className="absolute inset-0 opacity-5 w-full h-full z-10">
            {speedLines.map((line, i) => (
              <motion.div
                key={i}
                className="absolute h-[1px] bg-blue-500 rounded-full"
                style={{
                  top: line.top,
                  left: "-10%",
                  width: line.width,
                }}
                animate={{
                  x: ["0vw", "120vw"],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: line.duration * 1.5, // Slightly slower for luxury feel
                  repeat: Infinity,
                  ease: "linear",
                  delay: line.delay,
                }}
              />
            ))}
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-transparent to-slate-950/40 z-10" />

          {/* Logo Container - Clean & Authoritative */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="absolute top-16 md:top-24 flex items-center justify-center z-20"
          >
             <span className="text-4xl md:text-6xl font-bold text-white tracking-tighter drop-shadow-2xl hero-text">
                CAR SHIFT<span className="italic text-blue-500 opacity-90">OS</span>
             </span>
             <div className="absolute inset-0 bg-blue-500/5 blur-[100px] rounded-full scale-150" />
          </motion.div>

          {/* Car Animation Container */}
          <motion.div
            initial={{ x: "-100vw", skewX: -10 }}
            animate={{ x: ["-100vw", "0vw", "0vw", "150vw"], skewX: [-20, 0, 0, 20] }}
            transition={{
              duration: duration - 0.5,
              times: [0, 0.1, 0.9, 1],
              ease: "easeInOut",
            }}
            className="relative z-20 w-[300px] sm:w-[500px] h-48 flex items-center justify-center drop-shadow-[0_0_50px_rgba(255,255,255,0.15)]"
          >
            {/* Sleek SVG Sports Car */}
            <svg
              viewBox="0 0 512 250"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full text-white/90"
            >
              <motion.path
                d="M 30 220 L 20 160 C 20 140, 40 130, 80 120 L 140 90 C 170 80, 220 90, 260 110 C 300 130, 380 140, 440 145 C 470 148, 500 160, 490 200 L 480 220 L 440 220 C 440 165, 360 165, 360 220 L 140 220 C 140 165, 60 165, 60 220 Z"
                fill="currentColor"
                stroke="white"
                strokeWidth="0.75"
                initial={{ pathLength: 0, fillOpacity: 0 }}
                animate={{ pathLength: 1, fillOpacity: 0.05 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              />
              
              <motion.path
                d="M 145 92 C 175 82, 215 92, 255 112 C 290 130, 320 135, 340 138 L 150 138 C 120 138, 95 125, 85 120 Z"
                fill="#020617"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: 1, duration: 0.5 }}
              />

              <motion.path
                d="M 30 150 L 5 110 L 40 110 L 45 145 Z"
                fill="currentColor"
                stroke="white"
                strokeWidth="0.75"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 1.1, duration: 0.5 }}
              />

              <motion.path
                d="M 440 215 L 485 215 Z"
                stroke="white"
                strokeWidth="0.75"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 1.1, duration: 0.5 }}
              />

              <motion.path
                d="M 30 215 L 60 215 Z"
                stroke="white"
                strokeWidth="0.75"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 1.1, duration: 0.5 }}
              />

              <circle cx="100" cy="220" r="28" fill="#020617" stroke="white" strokeWidth="0.75" />
              <circle cx="400" cy="220" r="28" fill="#020617" stroke="white" strokeWidth="0.75" />
              
              <motion.g
                animate={{ rotate: 360 }}
                transition={{ duration: 0.4, ease: "linear", repeat: Infinity }}
                style={{ originX: "100px", originY: "220px" }}
              >
                  <line x1="100" y1="192" x2="100" y2="248" stroke="white" strokeWidth="0.5" strokeOpacity="0.5" />
                  <line x1="72" y1="220" x2="128" y2="220" stroke="white" strokeWidth="0.5" strokeOpacity="0.5" />
              </motion.g>
              
               <motion.g
                animate={{ rotate: 360 }}
                transition={{ duration: 0.4, ease: "linear", repeat: Infinity }}
                style={{ originX: "400px", originY: "220px" }}
              >
                  <line x1="400" y1="192" x2="400" y2="248" stroke="white" strokeWidth="0.5" strokeOpacity="0.5" />
                  <line x1="372" y1="220" x2="428" y2="220" stroke="white" strokeWidth="0.5" strokeOpacity="0.5" />
              </motion.g>
            </svg>

            {/* Motion Blur Trail */}
            <div className="absolute top-1/2 -left-32 w-48 h-12 bg-white/10 rounded-full blur-2xl -translate-y-1/2" />
          </motion.div>

          {/* Loading Typography Sequence */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="absolute bottom-20 flex flex-col items-center z-20"
          >
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
              className="text-white text-xs md:text-sm font-bold tracking-[0.5em] uppercase"
            >
              Initializing Core...
            </motion.div>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
