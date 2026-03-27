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

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40 leading-[0.9] px-2 sm:px-0">
            THE BEST CAR YARD <span className="text-blue-500 italic">SYSTEM</span> IN KENYA
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl md:text-3xl text-slate-400 font-light mb-12 tracking-tight leading-relaxed px-4">
            ShiftOS is the <span className="text-white font-medium">elite dealership automation platform</span> for luxury vehicle yards in Nairobi and across East Africa.
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
        <div className="absolute inset-0 z-[-1] opacity-60">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="/assets/shiftos-hero.png"
            alt="ShiftOS - The Best Car Yard Management System in Kenya Hero Image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/80" />
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-12 w-px bg-gradient-to-b from-blue-500 to-transparent" 
          />
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-500">
            Explore Architecture
          </span>
        </div>
      </section>

      {/* Product Showcase - Dashboard Preview */}
      <section className="relative py-32 px-6 z-10 bg-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[2.5rem] md:rounded-[4rem] border border-white/10 bg-slate-900/40 backdrop-blur-3xl overflow-hidden shadow-[0_0_100px_rgba(59,130,246,0.1)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
              <div className="p-8 sm:p-12 lg:p-16 space-y-8">
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
              <div className="relative h-full min-h-[500px] border-l border-white/10 overflow-hidden group">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  src="/assets/dealership-modern.png"
                  alt="ShiftOS Modern Showroom"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section - The Vision */}
      <section className="relative py-32 px-6 z-10 bg-slate-950/50 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <span className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4 block">Our Origin & Vision</span>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8">
                  Engineering <br/><span className="text-blue-500">Trust</span>.
                </h2>
                <p className="text-xl text-slate-400 font-light leading-relaxed mb-6">
                  ShiftOS isn't just software; it's the digital backbone of Kenya's premier automotive dealerships. Born from the need for absolute data sovereignty and operational excellence, we've built an ecosystem that empowers car yards to scale with high-fidelity security architecture.
                </p>
                <p className="text-lg text-slate-500 font-light leading-relaxed mb-12">
                  We believe that every dealership deserves the same technical power as global automotive giants. Our mission is to bridge the gap between traditional car yard operations and the future of digital commerce in Nairobi and across East Africa.
                </p>
              </motion.div>
            </div>
            
            <div className="relative">
              <div className="aspect-video lg:aspect-square rounded-[2.5rem] md:rounded-[4rem] border border-white/10 bg-slate-900/40 relative overflow-hidden group">
                 <img 
                   src="/assets/shiftos-hero.png" 
                   alt="ShiftOS Architecture" 
                   className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                 <div className="absolute bottom-12 left-12 right-12">
                    <div className="flex justify-between items-end">
                      <div>
                        <span className="text-4xl font-black italic text-blue-500">2026</span>
                        <p className="text-sm font-bold uppercase tracking-widest text-white/60">Operational Sovereignty</p>
                      </div>
                      <div className="size-16 rounded-3xl bg-blue-500/10 border border-blue-500/20 backdrop-blur-xl flex items-center justify-center">
                        <Shield className="size-8 text-blue-500" />
                      </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Spectrum - Deep Dive into "What we do" */}
      <section className="relative py-32 px-6 z-10 border-t border-white/5 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-none">
              Elite <span className="text-blue-500">Operational Power</span>
            </h2>
            <p className="max-w-3xl mx-auto text-slate-400 font-light text-xl">
              Engineered specifically for the Kenyan luxury car market. We turn manual car yards into high-performance digital nodes.
            </p>
          </div>

          <div className="space-y-40">
            {[
              {
                title: "Live Digital Showroom",
                services: [
                  "Instant Inventory Sync",
                  "Automated Marketing SEO",
                  "Real-Time 'Sold' Status",
                  "Mobile-First Luxury UI",
                ],
                description:
                  "Your showroom, online 24/7. When a car is sold at your yard, your website updates instantly. No more manual uploads or outdated listings—just a seamless reflection of your actual inventory.",
                icon: Globe,
                color: "blue",
                image: "/assets/website-mockup.png"
              },
              {
                title: "Smart Comparison Engine",
                services: [
                  "3-Car Side-by-Side View",
                  "Technical Spec Auditing",
                  "High-Fidelity Galleries",
                  "Buyer Confidence Tools",
                ],
                description:
                  "Help your clients decide faster. Let them compare up to 3 cars side-by-side with full technical specs and high-resolution galleries, making the buying decision easier and more professional than ever.",
                icon: Layout,
                color: "purple",
              },
              {
                title: "Industrial Command Portal",
                services: [
                  "Lead Tracking & Scoring",
                  "Deal Management Suite",
                  "User Activity Auditing",
                  "Global Yard Visibility",
                ],
                description:
                  "Total control at your fingertips. Manage your entire inventory, track every lead from query to keys, and handle every deal from one central, industrial-grade dashboard built for speed.",
                icon: Monitor,
                color: "emerald",
              },
              {
                title: "Financial Pulse & Legal",
                services: [
                  "M-Pesa STK Push Sync",
                  "Automated Sale Contracts",
                  "Commission Ledger Tracking",
                  "Digital Invoice Vault",
                ],
                description:
                  "Track every shilling. From instant M-Pesa payments to automated legal agreements and sales commissions, keep your finger on the pulse of your dealership's finances with zero manual paperwork.",
                icon: BarChart3,
                color: "blue",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-16 md:gap-32`}
              >
                <div className="flex-1 space-y-8">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
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
                  </motion.div>
                  <h3 className="text-5xl md:text-6xl font-black tracking-tight text-white leading-none">
                    {service.title}
                  </h3>
                  <p className="text-xl text-slate-400 font-light leading-relaxed">
                    {service.description}
                  </p>
                  <motion.ul 
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0 },
                      show: {
                        opacity: 1,
                        transition: { staggerChildren: 0.1 }
                      }
                    }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  >
                    {service.services.map((sub, j) => (
                      <motion.li
                        key={j}
                        variants={{
                          hidden: { opacity: 0, x: -10 },
                          show: { opacity: 1, x: 0 }
                        }}
                        className="flex items-center gap-3 text-slate-300 font-medium bg-white/5 p-3 rounded-xl border border-white/5"
                      >
                        <div
                          className={`size-2 rounded-full bg-${service.color}-500`}
                        />
                        {sub}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
                <div className="flex-1 relative aspect-video md:aspect-[4/5] w-full max-w-lg group">
                  <div
                    className={`absolute inset-0 bg-${service.color}-500/10 blur-[120px] rounded-full animate-pulse group-hover:bg-${service.color}-500/20 transition-colors`}
                  />
                  <div className="relative h-full w-full rounded-[2.5rem] md:rounded-[4rem] border border-white/10 bg-slate-900/40 backdrop-blur-xl flex items-center justify-center overflow-hidden">
                    {service.image ? (
                      <motion.img 
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1.5 }}
                        src={service.image}
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover p-4 rounded-[4.5rem]"
                      />
                    ) : (
                      <>
                        <div
                          className={`absolute inset-0 bg-gradient-to-br from-${service.color}-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}
                        />
                        <service.icon
                          className={`size-48 text-${service.color}-500/20 relative z-10 group-hover:scale-110 group-hover:text-${service.color}-500 transition-all duration-700`}
                        />
                      </>
                    )}

                    {/* Decorative elements */}
                    <div className="absolute top-10 left-10 size-3 rounded-full bg-white/10 animate-ping" />
                    <div className="absolute top-10 right-10 size-3 rounded-full bg-white/10" />
                    <div className="absolute bottom-10 left-10 size-3 rounded-full bg-white/10" />
                    <div className="absolute bottom-10 right-10 size-3 rounded-full bg-white/10" />
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
                title: "Showroom Sync",
                desc: "Live reflection of your actual yard inventory.",
              },
              {
                icon: Layout,
                title: "High-Fidelity UI",
                desc: "Premium side-by-side vehicle comparison engine.",
              },
              {
                icon: Shield,
                title: "Data Sovereignty",
                desc: "Industrial-grade architecture for total privacy.",
              },
              {
                icon: BarChart3,
                title: "Financial Pulse",
                desc: "M-Pesa integration and real-time ledgers.",
              },
              {
                icon: Monitor,
                title: "Command Portal",
                desc: "Mission control for your entire operation.",
              },
              {
                icon: Globe,
                title: "SEO Mastery",
                desc: "Engineered for search engine dominance.",
              },
              {
                icon: Layers,
                title: "Legal Automation",
                desc: "Instant generation of professional documents.",
              },
              {
                icon: Database,
                title: "Lifecycle Tracking",
                desc: "End-to-end tracking from import to sale.",
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

      {/* Premium Experience Section - Expanded Gallery */}
      <section className="relative py-32 px-6 z-10 bg-slate-950 overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.9] text-white">
                  The Luxury <br />
                  <span className="text-blue-500 italic">Digital Cockpit.</span>
                </h2>
                <p className="text-2xl text-slate-400 font-light leading-relaxed">
                  We provide the elite system and the high-performance website your car yard deserves. ShiftOS fusion handles your entire operation from the internal cockpit to the public showroom.
                </p>
              </motion.div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Precision Inventory", img: "/assets/console-tech.png" },
                  { label: "Premium Experience", img: "/assets/seat-ambient.png" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    viewport={{ once: true }}
                    className="group relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10"
                  >
                    <img src={item.img} alt={item.label} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <span className="text-sm font-bold tracking-widest uppercase text-blue-400">{item.label}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative space-y-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="relative rounded-[4rem] border border-white/10 bg-slate-900/40 backdrop-blur-3xl overflow-hidden aspect-[16/10] shadow-[0_0_100px_rgba(59,130,246,0.1)] group"
                >
                  <img src="/assets/interior-digital.png" alt="Full System View" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
                    <div className="space-y-2">
                      <span className="text-blue-500 font-black tracking-tighter text-2xl">CORE</span>
                      <h3 className="text-3xl font-bold">Unified Command</h3>
                    </div>
                    <div className="px-6 py-2 bg-blue-500/10 border border-blue-500/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest text-blue-400">
                      System + Website
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="relative ml-12 lg:-ml-24 rounded-[3rem] border border-white/10 bg-slate-900/50 backdrop-blur-3xl overflow-hidden aspect-[16/9] shadow-2xl group"
                >
                  <img src="/assets/steering-detail.png" alt="Operational Detail" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950 to-transparent" />
                  <div className="absolute inset-y-0 left-12 flex flex-col justify-center max-w-xs space-y-4">
                    <div className="size-12 rounded-2xl bg-blue-600 flex items-center justify-center">
                      <Layout className="size-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold leading-tight">Elite Yard <br />Management</h3>
                    <p className="text-sm text-slate-400 font-light">Total control over your inventory, leads, and web presence. Engineered specifically for luxury dealerships.</p>
                  </div>
                </motion.div>
              </div>
            </div>
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

      {/* Footer Contact Info */}
      <footer className="relative py-12 px-6 border-t border-white/5 z-10 bg-slate-950/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-2xl font-black tracking-tighter">
              SHIFT<span className="text-blue-500 italic">OS</span>
            </span>
            <p className="text-slate-500 text-sm font-light">The Industrial Automotive Ecosystem</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 items-center">
            <a 
              href="mailto:carshiftos@gmail.com" 
              className="group flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
            >
              <div className="size-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <Globe className="size-5" />
              </div>
              <span className="font-bold tracking-tight text-lg">carshiftos@gmail.com</span>
            </a>
            <a 
              href="tel:0732009268" 
              className="group flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
            >
              <div className="size-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <Monitor className="size-5" />
              </div>
              <span className="font-bold tracking-tight text-lg">0732009268</span>
            </a>
          </div>
          <p className="text-slate-600 text-[10px] uppercase tracking-[0.2em] font-black">
            © {new Date().getFullYear()} ShiftOS Technology
          </p>
        </div>
      </footer>

      {/* Ambient Footer Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[600px] bg-gradient-to-t from-blue-600/10 to-transparent pointer-events-none -z-10" />
    </div>
  );
}
