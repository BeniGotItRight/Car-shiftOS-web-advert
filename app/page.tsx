"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Shield,
  Zap,
  BarChart3,
  Globe,
  Monitor,
  ChevronRight,
  ArrowRight,
  Layers,
  Database,
  Cpu,
  Layout,
} from "lucide-react";

export default function CentralLanding() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div
      ref={containerRef}
      className="relative bg-slate-950 text-white selection:bg-blue-500/30 overflow-x-hidden"
    >
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(30,41,59,0.5)_0%,_transparent_100%)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 text-center z-10">
        <motion.div
          style={{ opacity, scale }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1.5 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-base font-bold uppercase tracking-[0.2em] text-blue-400">
              Premium Automotive Software as a Service
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40 leading-[0.9]">
            SHIFT<span className="text-blue-500 italic">OS</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl md:text-3xl text-slate-400 font-light mb-12 tracking-tight leading-relaxed">
            The premier <span className="text-white font-medium">Software as a Service</span> ecosystem for luxury vehicle dealerships.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="group relative flex items-center gap-2 px-10 py-5 bg-blue-600 rounded-2xl font-bold text-lg hover:bg-blue-500 transition-all overflow-hidden shadow-2xl shadow-blue-600/20 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              Get Started{" "}
              <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/contact"
              className="px-10 py-5 border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl font-bold text-lg hover:bg-white/10 transition-all active:scale-95 flex items-center justify-center"
            >
              Request Demo
            </Link>
          </div>
        </motion.div>

        {/* Ambient Graphics & Hero Image */}
        <div className="absolute inset-0 z-[-1] opacity-20">
          <img
            src="/assets/shiftos-hero.png"
            alt="ShiftOS Core Architecture"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
          <div className="h-12 w-px bg-gradient-to-b from-blue-500 to-transparent" />
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-500">
            Explore Architecture
          </span>
        </div>
      </section>

      {/* Product Showcase - Dashboard Preview */}
      <section className="relative py-32 px-6 z-10 bg-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[4rem] border border-white/10 bg-slate-900/40 backdrop-blur-3xl overflow-hidden shadow-[0_0_100px_rgba(59,130,246,0.1)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
              <div className="p-16 space-y-8">
                <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none">
                  Total Control, <br />
                  <span className="text-blue-500">Zero Friction.</span>
                </h2>
                <p className="text-xl text-slate-400 font-light leading-relaxed">
                  The Command Portal is your window into every facet of the
                  dealership. From real-time sales velocity to VIN-level cost
                  audits, experience the power of industrial-grade management.
                </p>
                <div className="flex flex-wrap gap-6">
                  <div className="flex flex-col">
                    <span className="text-2xl md:text-3xl font-black text-white">
                      100ms
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                      Data Latency
                    </span>
                  </div>
                  <div className="w-px h-12 bg-white/10 hidden sm:block" />
                  <div className="flex flex-col">
                    <span className="text-2xl md:text-3xl font-black text-white">
                      256-bit
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                      AES Isolation
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative h-full min-h-[500px] border-l border-white/10">
                <img
                  src="/assets/shiftos-dashboard.png"
                  alt="ShiftOS Dashboard Interface"
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Spectrum - Deep Dive into "What we do" */}
      <section className="relative py-32 px-6 z-10 border-t border-white/5 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
              Our <span className="text-blue-500">Service Spectrum</span>
            </h2>
            <p className="max-w-3xl mx-auto text-slate-400 font-light text-lg">
              We provide more than just software. We provide the digital
              infrastructure for the next generation of automotive commerce.
            </p>
          </div>

          <div className="space-y-32">
            {[
              {
                title: "Dynamic Modern Showrooms",
                services: [
                  "Up-to-Scale Showroom Deployment",
                  "Full SEO Enhancement Engine",
                  "High-End Visual Architecture",
                  "Mobile-First Experience",
                ],
                description:
                  "We transform your inventory into a high-end digital experience. Every dealer receives a modern, up-to-scale public website that is fully search-optimized for maximal discoverability.",
                icon: Globe,
                color: "blue",
              },
              {
                title: "Accelerated Comparison Engine",
                services: [
                  "3-Car Side-by-Side Analysis",
                  "Distinct Decision Hub",
                  "Speed-to-Decision Workflows",
                  "Visual Specification Auditing",
                ],
                description:
                  "ShiftOS empowers your customers with better and faster decision-making. Our distinct component allows for comparison of up to 3 cars, encouraging immediate buyer confidence and conversion.",
                icon: Layout,
                color: "purple",
              },
              {
                title: "Asset Lifecycle Management",
                services: [
                  "VIN-Level Tracking",
                  "KRA Duty Calculation",
                  "Automated Cost Ledgers",
                  "Maintenance History Audits",
                ],
                description:
                  "From bond to keys-in-hand. Our platform tracks every cent spent on a vehicle. Auto-calculate taxes, track repair costs, and maintain a bulletproof audit trail for every asset in your yard.",
                icon: Database,
                color: "emerald",
              },
              {
                title: "Pipeline Transactional Intelligence",
                services: [
                  "Dynamic Lead Scoring",
                  "Deal Protocol Automation",
                  "Payment Installment Tracking",
                  "Instant Agreement Generation",
                ],
                description:
                  "Close deals faster with intelligent workflows. Manage leads from enquiry to sold. Generate legal agreements instantly and track complex payment installments with military precision.",
                icon: BarChart3,
                color: "purple",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-16`}
              >
                <div className="flex-1 space-y-8">
                  <div
                    className={`inline-flex items-center gap-2 rounded-full border border-${service.color}-500/20 bg-${service.color}-500/5 px-4 py-1.5`}
                  >
                    <service.icon
                      className={`size-4 text-${service.color}-400`}
                    />
                    <span
                      className={`text-[10px] font-bold uppercase tracking-[0.2em] text-${service.color}-400`}
                    >
                      Strategic Service
                    </span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black tracking-tight text-white">
                    {service.title}
                  </h3>
                  <p className="text-xl text-slate-400 font-light leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.services.map((sub, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-3 text-slate-300 font-medium"
                      >
                        <div
                          className={`size-1.5 rounded-full bg-${service.color}-500`}
                        />
                        {sub}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Link
                      href="/services"
                      className={`inline-block px-8 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-sm font-bold transition-all`}
                    >
                      Learn More about {service.title.split(" ")[0]}
                    </Link>
                  </div>
                </div>
                <div className="flex-1 relative aspect-square w-full max-w-md">
                  <div
                    className={`absolute inset-0 bg-${service.color}-500/10 blur-[100px] rounded-full animate-pulse`}
                  />
                  <div className="relative h-full w-full rounded-[3rem] border border-white/5 bg-slate-900/40 backdrop-blur-xl flex items-center justify-center p-12 group overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-${service.color}-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}
                    />
                    <service.icon
                      className={`size-32 text-${service.color}-500 relative z-10 group-hover:scale-110 transition-transform duration-500`}
                    />

                    {/* Decorative elements */}
                    <div className="absolute top-8 left-8 size-2 rounded-full bg-white/10" />
                    <div className="absolute top-8 right-8 size-2 rounded-full bg-white/10" />
                    <div className="absolute bottom-8 left-8 size-2 rounded-full bg-white/10" />
                    <div className="absolute bottom-8 right-8 size-2 rounded-full bg-white/10" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="relative py-32 px-6 z-10 bg-slate-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
                Built for the{" "}
                <span className="text-blue-500">Modern Dealer.</span>
              </h2>
              <p className="text-xl text-slate-400 font-light">
                Comprehensive modules engineered for every aspect of your
                operation.
              </p>
            </div>
            <Link
              href="#"
              className="flex items-center gap-2 group text-sm font-bold uppercase tracking-widest text-blue-500"
            >
              View All Features{" "}
              <ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: "Pulse Analytics",
                desc: "Real-time yard performance metrics.",
              },
              {
                icon: Shield,
                title: "Hardened Security",
                desc: "Enterprise data isolation protocols.",
              },
              {
                icon: BarChart3,
                title: "Financial Hub",
                desc: "Deals, payments, and commission ledgers.",
              },
              {
                icon: Globe,
                title: "Global Showroom",
                desc: "Instantly deploy branded public websites.",
              },
              {
                icon: Monitor,
                title: "Command Portal",
                desc: "Central control for your entire ecosystem.",
              },
              {
                icon: Cpu,
                title: "API-First",
                desc: "Seamless integration with external systems.",
              },
              {
                icon: Layers,
                title: "Custom Workflow",
                desc: "Stage management for leads and deals.",
              },
              {
                icon: Database,
                title: "Asset Audit",
                desc: "Full history tracking for every vehicle.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-slate-900/30 border border-white/5 hover:bg-slate-900/50 transition-all"
              >
                <f.icon className="size-10 text-slate-500 mb-6" />
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-slate-500 font-light">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-48 px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            Ready to shift your operation into{" "}
            <span className="italic text-blue-500">high gear?</span>
          </h2>
          <p className="text-xl text-slate-400 mb-12 font-light">
            Join the elite dealerships scaling with ShiftOS technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-12 py-5 bg-white text-slate-950 rounded-2xl font-black tracking-tight hover:bg-slate-200 transition-all active:scale-95"
            >
              DEPLOY PLATFORM
            </Link>
            <Link 
              href="/contact"
              className="px-12 py-5 border border-white/10 rounded-2xl font-black tracking-tight hover:bg-white/5 transition-all active:scale-95 uppercase flex items-center justify-center"
            >
              Speak with Architecture
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Ambient Footer Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[600px] bg-gradient-to-t from-blue-600/10 to-transparent pointer-events-none -z-10" />
    </div>
  );
}
