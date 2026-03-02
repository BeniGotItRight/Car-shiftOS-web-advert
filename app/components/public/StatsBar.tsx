"use client";

import { motion } from "framer-motion";
import { Car, Shield, MapPin } from "lucide-react";
import { AnimatedNumber } from "./AnimatedNumber";

const stats = [
  { icon: Car, num: 250, suffix: "+", label: "Premium Vehicles" },
  { icon: Shield, num: 100, suffix: "%", label: "Verified History" },
  { icon: MapPin, num: 47, suffix: "", label: "Counties Delivered To" },
];

export function StatsBar() {
  return (
    <section className="border-y border-slate-900 bg-slate-950 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 gap-12 md:grid-cols-3"
        >
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-6 text-center group"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-white border border-white/10 group-hover:scale-110 transition-transform">
                <item.icon className="h-6 w-6" />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-bold tracking-tighter text-white md:text-6xl">
                  <AnimatedNumber value={item.num} suffix={item.suffix} />
                </span>
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-slate-500">{item.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
