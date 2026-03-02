"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Landmark, Wrench, Bike } from "lucide-react";
import { variants } from "@/lib/animations";

const features = [
  {
    title: "Trusted Car Dealership",
    description: "We have an expert insurance partner (Intaru Insurance Agency) in order to get a seamless purchase experience.",
    icon: ShieldCheck,
  },
  {
    title: "Transparent Pricing",
    description: "Our stress-free finance department that can find financial solutions to save you money.",
    icon: Landmark,
  },
  {
    title: "Expert Car Service",
    description: "Through our in house shop (The Bicycle Garage – Nairobi) we can now offer to our clients brand new mountain as well as road bikes.",
    icon: Wrench,
  },
  {
    title: "Premium Auto & Bike Solutions",
    description: "At The Bicycle Garage – Nairobi, our in-house shop, we go beyond expert car service to offer a range of brand-new mountain and road bikes.",
    icon: Bike,
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-slate-950 py-24 sm:py-40 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_0%,transparent_70%)]" />
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[600px] h-[600px] bg-white/[0.01] rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
           className="mb-20 md:mb-24 text-center flex flex-col items-center"
        >
          <div className="overflow-hidden mb-6">
            <motion.h2
              variants={variants.revealText}
              className="text-5xl md:text-8xl font-bold tracking-tighter text-white leading-[0.9]"
            >
              Operational <span className="hero-text italic">Excellence</span>
            </motion.h2>
          </div>
          <div className="overflow-hidden">
             <motion.p
               variants={variants.revealText}
               className="text-lg md:text-2xl text-slate-500 max-w-2xl font-medium leading-relaxed"
             >
               Extending beyond the showroom floor. Discover our premium in-house partnerships and comprehensive automotive engineering solutions.
             </motion.p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
          }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="group relative flex flex-col rounded-[2.5rem] border border-slate-900 bg-slate-900/20 p-10 transition-all duration-700 hover:-translate-y-2 hover:bg-slate-900/40 hover:border-white/20 hover:shadow-3xl backdrop-blur-3xl"
            >
              <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 text-white border border-white/10 transition-all duration-500 group-hover:bg-white group-hover:text-slate-950 group-hover:scale-110 shadow-xl shadow-blue-500/10">
                <feature.icon className="h-7 w-7" strokeWidth={2} />
              </div>
              <h3 className="mb-4 text-xl font-bold text-white uppercase tracking-tighter group-hover:text-white transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-500 text-base leading-relaxed font-medium transition-colors group-hover:text-slate-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
