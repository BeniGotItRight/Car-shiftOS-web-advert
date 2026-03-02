"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
  const sections = [
    {
      title: "Data Sovereignty",
      content: "At ShiftOS, we believe your data is your most valuable asset. We implement 256-bit encryption and strict multi-tenant isolation to ensure that your dealership's information remains yours and yours alone."
    },
    {
      title: "Information Collection",
      content: "We collect only the essential data required to provide our automotive SaaS ecosystem. This includes vehicle inventory details, lead information, and platform usage metrics to improve your operational efficiency."
    },
    {
      title: "Data Protection",
      content: "Our infrastructure is hardened against unauthorized access. We employ military-grade security protocols and regular audits to protect the integrity of the ShiftOS platform."
    },
    {
      title: "Third-Party Disclosure",
      content: "We do not sell, trade, or otherwise transfer your data to outside parties. Your information is used exclusively within the ShiftOS ecosystem to power your digital showroom and inventory pipelines."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32 pb-16 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-blue-600/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
            Privacy <span className="text-blue-500">Policy.</span>
          </h1>
          <p className="text-xl text-slate-400 font-light leading-relaxed">
            Review how ShiftOS protects your dealership's data sovereignty and digital assets.
          </p>
        </motion.div>

        <div className="space-y-12">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-xl"
            >
              <h2 className="text-2xl font-bold mb-4 text-white">{section.title}</h2>
              <p className="text-lg text-slate-400 font-light leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 pt-8 border-t border-white/10 text-slate-500 text-sm"
        >
          Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </motion.div>
      </div>
    </div>
  );
}
