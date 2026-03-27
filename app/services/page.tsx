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
    <div className="min-h-screen bg-slate-950 text-white pt-24 md:pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16 md:mb-24 px-2 sm:px-0">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 md:mb-8 tracking-tighter">
            Elite <span className="text-blue-500">Car Yard Management</span> Solutions.
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 font-light leading-relaxed">
            ShiftOS provides the best car yard management system in Kenya, engineered to handle the complexity of luxury automotive commerce at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-[2rem] md:rounded-[2.5rem] bg-slate-900/40 border border-white/5 backdrop-blur-xl group hover:border-blue-500/20 transition-all"
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

        {/* Platform Performance */}
        <div className="relative rounded-[2rem] md:rounded-[3rem] border border-white/5 bg-slate-900/20 p-8 sm:p-12 overflow-hidden">
          <div className="absolute top-0 right-0 size-[400px] bg-blue-600/10 blur-[100px] rounded-full" />
          <h2 className="text-3xl font-black mb-8 relative z-10">Platform Performance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            <div className="space-y-2">
              <span className="text-blue-500 font-bold block">01</span>
              <h3 className="font-bold text-lg">High-Speed Delivery</h3>
              <p className="text-sm text-slate-500 font-light">Ultra-fast page loads and maximum search visibility.</p>
            </div>
            <div className="space-y-2">
              <span className="text-blue-500 font-bold block">02</span>
              <h3 className="font-bold text-lg">Enterprise Operations</h3>
              <p className="text-sm text-slate-500 font-light">Bank-grade infrastructure for secure, multi-tenant yard management.</p>
            </div>
            <div className="space-y-2">
              <span className="text-blue-500 font-bold block">03</span>
              <h3 className="font-bold text-lg">Elite Access Control</h3>
              <p className="text-sm text-slate-500 font-light">Advanced, multi-layered security for private dealer portals.</p>
            </div>
            <div className="space-y-2">
              <span className="text-blue-500 font-bold block">04</span>
              <h3 className="font-bold text-lg">Premium User Interface</h3>
              <p className="text-sm text-slate-500 font-light">Fluid, cinematic interactions for a strictly high-end digital experience.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
