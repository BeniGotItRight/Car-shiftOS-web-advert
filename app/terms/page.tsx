"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
  const terms = [
    {
      title: "Service Deployment",
      content: "ShiftOS provides the digital infrastructure for dealership management. Deployment is contingent upon the execution of physical legal papers and signed agreements by all parties involved. By using our systems, you agree to follow these operational protocols."
    },
    {
      title: "Intellectual Property",
      content: "The ShiftOS platform, including its core architecture, design system, and proprietary algorithms, is the exclusive intellectual property of ShiftOS. Unauthorized replication or distribution is strictly prohibited."
    },
    {
      title: "Operational Responsibility",
      content: "While ShiftOS provides the tools for inventory and pipeline management, the accuracy of dealership data, tax calculations, and legal agreements remains the responsibility of the individual tenant."
    },
    {
      title: "Termination of Service",
      content: "ShiftOS reserves the right to suspend or terminate services if a tenant violates our security protocols or engages in fraudulent activities that compromise the integrity of our ecosystem."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32 pb-16 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-purple-600/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
            Terms of <span className="text-blue-500">Service.</span>
          </h1>
          <p className="text-xl text-slate-400 font-light leading-relaxed">
            Understand the operational protocols and architectural sovereignty of the ShiftOS ecosystem.
          </p>
        </motion.div>

        <div className="space-y-12">
          {terms.map((term, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-xl"
            >
              <h2 className="text-2xl font-bold mb-4 text-white">{term.title}</h2>
              <p className="text-lg text-slate-400 font-light leading-relaxed">
                {term.content}
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
