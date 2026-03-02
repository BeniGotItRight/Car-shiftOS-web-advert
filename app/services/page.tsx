"use client";

import { motion } from "framer-motion";
import { 
  LineChart, 
  ShieldCheck, 
  Settings2, 
  Layout, 
  CloudLightning, 
  Lock,
  Smartphone,
  BarChart4
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Inventory Intelligence",
      description: "Complete lifecycle tracking from acquisition to final sale. Includes duty calculation and cost auditing.",
      icon: LineChart,
      color: "blue"
    },
    {
      title: "Multi-Tenant Portals",
      description: "Secure, isolated environments for every dealership in your network with custom subdomains.",
      icon: ShieldCheck,
      color: "emerald"
    },
    {
      title: "Dynamic Modern Showrooms",
      description: "Deploy high-conversion, up-to-scale public websites. Every pixel is engineered for luxury, with full SEO enhancement and ultra-fast performance.",
      icon: CloudLightning,
      color: "purple"
    },
    {
      title: "Decision-First Comparison",
      description: "Enable customers to compare up to 3 vehicles side-by-side. Our distinct comparison engine accelerates decision-making and boosts conversion rates.",
      icon: Layout,
      color: "blue"
    },
    {
      title: "Hardened Security",
      description: "Super admin data isolation ensures your company secrets stay yours. 256-bit encryption standard.",
      icon: Lock,
      color: "rose"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-24">
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
            Platform <span className="text-blue-500">Solutions.</span>
          </h1>
          <p className="text-xl text-slate-400 font-light leading-relaxed">
            ShiftOS provides a comprehensive suite of tools designed to handle the complexity of modern automotive commerce at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-slate-900/40 border border-white/5 backdrop-blur-xl group hover:border-blue-500/20 transition-all"
            >
              <div className={`size-16 rounded-2xl bg-${s.color}-600/10 border border-${s.color}-500/20 flex items-center justify-center mb-6`}>
                <s.icon className={`size-8 text-${s.color}-500`} />
              </div>
              <h2 className="text-2xl font-black mb-4">{s.title}</h2>
              <p className="text-slate-400 font-light text-lg">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Technical Capabilities */}
        <div className="relative rounded-[3rem] border border-white/5 bg-slate-900/20 p-12 overflow-hidden">
          <div className="absolute top-0 right-0 size-[400px] bg-blue-600/10 blur-[100px] rounded-full" />
          <h2 className="text-3xl font-black mb-8 relative z-10">Technical Capabilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            <div className="space-y-2">
              <span className="text-blue-500 font-bold block">01</span>
              <h3 className="font-bold text-lg">Next.js Turbine</h3>
              <p className="text-sm text-slate-500 font-light">Ultra-fast page loads and SEO mastery.</p>
            </div>
            <div className="space-y-2">
              <span className="text-blue-500 font-bold block">02</span>
              <h3 className="font-bold text-lg">Laravel Core</h3>
              <p className="text-sm text-slate-500 font-light">Rock-solid PHP backend with multi-tenant architecture.</p>
            </div>
            <div className="space-y-2">
              <span className="text-blue-500 font-bold block">03</span>
              <h3 className="font-bold text-lg">Sanctum Auth</h3>
              <p className="text-sm text-slate-500 font-light">State-of-the-art tokenized security for dealer portals.</p>
            </div>
            <div className="space-y-2">
              <span className="text-blue-500 font-bold block">04</span>
              <h3 className="font-bold text-lg">Framer Motion</h3>
              <p className="text-sm text-slate-500 font-light">Cinematic animations for a strictly premium experience.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
