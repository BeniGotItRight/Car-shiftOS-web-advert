"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Shield,
  RefreshCw,
  BarChart3,
  Globe,
  Monitor,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  Layers,
  Database,
  Layout,
  Rocket,
  Link2,
  TrendingUp,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TypewriterHeading } from "@/components/TypewriterHeading";
import { TiltCard } from "@/components/TiltCard";
import { DemoVideo } from "@/components/DemoVideo";

const HERO_SLIDES = [
  { src: "/assets/hero-dealership-lot.jpg", caption: "Premium Digital Showrooms", kb: "kenburns-1" },
  { src: "/assets/hero-new-1.png", caption: "Live Yard Inventory", kb: "kenburns-2" },
  { src: "/assets/console-tech.png", caption: "Command Portal", kb: "kenburns-3" },
  { src: "/assets/hero-nairobi.jpg", caption: "Built for Kenya", kb: "kenburns-4" },
];

const FEATURE_TILES = [
  { icon: RefreshCw, title: "Showroom Sync", desc: "Live reflection of your actual yard inventory." },
  { icon: Layout, title: "Side-by-Side Compare", desc: "Buyers compare up to 3 vehicles at once." },
  { icon: Shield, title: "Your Data Stays Yours", desc: "Customer records stay with your dealership, not a departing salesperson." },
  { icon: BarChart3, title: "Financial Control", desc: "Track every deal from deposit to final payment." },
  { icon: Monitor, title: "Command Portal", desc: "See your whole operation from one dashboard." },
  { icon: Globe, title: "Found Online", desc: "Your cars show up when customers search for them." },
  { icon: Layers, title: "Legal Automation", desc: "Instant generation of professional documents." },
  { icon: Database, title: "Lifecycle Tracking", desc: "End-to-end tracking from import to sale." },
];

export default function CentralLanding() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const [slide, setSlide] = useState(0);
  const [sliderPaused, setSliderPaused] = useState(false);

  useEffect(() => {
    if (sliderPaused) return;
    const t = setInterval(() => {
      setSlide((s) => (s + 1) % HERO_SLIDES.length);
    }, 3000);
    return () => clearInterval(t);
  }, [sliderPaused]);

  const trackRef = useRef<HTMLDivElement>(null);
  const [trackPaused, setTrackPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(pointer: coarse)").matches) return; // no auto-scroll on touch

    let raf = 0;
    const step = () => {
      if (!trackPaused) {
        const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 1;
        track.scrollLeft = atEnd ? 0 : track.scrollLeft + 0.6;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [trackPaused]);

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
      <section
        className="relative h-screen flex flex-col items-center justify-center px-6 text-center z-10"
        onMouseEnter={() => setSliderPaused(true)}
        onMouseLeave={() => setSliderPaused(false)}
      >
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
              Dealer Management System for Kenya
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 text-white leading-[0.95] px-2 sm:px-0">
            Run your car dealership{" "}
            <span className="text-blue-500 italic">from one place.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl md:text-3xl text-slate-400 font-light mb-12 tracking-tight leading-relaxed px-4">
            Car ShiftOS brings your vehicles, customers, sales, documents and online showroom together, built for Kenyan car dealerships.
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

        {/* Hero Slider — Ken Burns crossfade */}
        <div className="absolute inset-0 z-[-1] overflow-hidden">
          {HERO_SLIDES.map((s, i) => (
            <div
              key={s.src}
              className="absolute inset-0 transition-opacity ease-in-out"
              style={{
                opacity: i === slide ? 0.6 : 0,
                transitionDuration: "800ms",
              }}
            >
              <Image
                src={s.src}
                alt={s.caption}
                fill
                priority={i === 0}
                sizes="100vw"
                className={`object-cover ${i === slide ? `animate-${s.kb}` : ""}`}
              />
            </div>
          ))}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,5,0.55) 0%, rgba(0,0,20,0.7) 100%)",
            }}
          />
        </div>

        {/* Slide dot indicators */}
        <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex items-center z-10">
          {HERO_SLIDES.map((s, i) => (
            <button
              key={s.src}
              onClick={() => setSlide(i)}
              aria-label={`Show ${s.caption} slide`}
              className="p-2.5 flex items-center justify-center"
            >
              <span
                className={`block h-2 rounded-full transition-all duration-300 ${
                  i === slide ? "w-6 bg-blue-500" : "w-2 bg-white/30 hover:bg-white/50"
                }`}
              />
            </button>
          ))}
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-12 w-px bg-gradient-to-b from-blue-500 to-transparent"
          />
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-500">
            Scroll to Explore
          </span>
        </div>
      </section>

      {/* Product Showcase - Dashboard Preview */}
      <section className="relative py-32 px-6 z-10 bg-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[2.5rem] md:rounded-[4rem] border border-white/10 bg-slate-900/40 backdrop-blur-3xl overflow-hidden shadow-xl shadow-black/40">
            <div className="flex flex-col items-center gap-10 p-6 sm:p-12 lg:p-16">
              <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none text-center">
                Total Control, <span className="text-blue-500">Zero Friction.</span>
              </h2>
              <div className="w-full max-w-5xl">
                <DemoVideo
                  src="https://res.cloudinary.com/dru0aee47/video/upload/q_auto/brag.mp4"
                  poster="https://res.cloudinary.com/dru0aee47/video/upload/so_8,w_1280/brag.jpg"
                  title="Car ShiftOS demo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-32 px-6 z-10 bg-[#0a0f1e] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="fade">
            <div className="max-w-2xl mb-24">
              <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none mb-6">
                <TypewriterHeading
                  segments={[
                    { text: "From Sign-Up to " },
                    { break: true },
                    { text: "Full Operation.", accent: true },
                  ]}
                />
              </h2>
              <p className="text-xl text-slate-400 font-light">
                Three steps. No fluff. No long onboarding. Just your car yard, automated.
              </p>
            </div>
          </ScrollReveal>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            <div className="hidden md:block absolute top-[52px] left-[16.5%] right-[16.5%] h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0" />

            {[
              {
                num: "01",
                icon: Rocket,
                title: "Deploy Your Portal",
                desc: "We spin up your private portal in under 24 hours. Custom subdomain, brand colours, and your inventory structure, configured to your yard.",
              },
              {
                num: "02",
                icon: Link2,
                title: "Connect Your Inventory",
                desc: "Upload your stock manually or sync from your existing records. Every vehicle gets a full profile: specs, photos, pricing, duty status, and a trusted payment flow.",
              },
              {
                num: "03",
                icon: TrendingUp,
                title: "Go Live & Scale",
                desc: "Your public showroom goes live instantly. Customers compare, enquire, and transact. You track every lead and close every deal from the Command Portal.",
              },
            ].map((step, i) => (
              <ScrollReveal key={step.num} direction="up" delay={i * 150}>
                <div className="relative p-8 rounded-3xl bg-[#0a0f1e] border border-blue-900/60 h-full">
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-blue-500 block mb-6">
                    {step.num}
                  </span>
                  <div className="size-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                    <step.icon className="size-7 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
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
                  <TypewriterHeading
                    segments={[
                      { text: "Engineering " },
                      { break: true },
                      { text: "Trust", accent: true },
                      { text: "." },
                    ]}
                  />
                </h2>
                <p className="text-xl text-slate-400 font-light leading-relaxed mb-6">
                  Everything your dealership does, in one place. ShiftOS is the first system built specifically for the Kenyan car yard: inventory, customer records, payments, and your online showroom, together.
                </p>
                <p className="text-lg text-slate-500 font-light leading-relaxed mb-12">
                  Most car yards in Kenya still run on WhatsApp and a notebook. ShiftOS gives independent dealers the same tools the biggest dealerships use, built for how Kenyan yards actually work.
                </p>
              </motion.div>
            </div>
            
            <div className="relative">
              <div className="aspect-video lg:aspect-square rounded-[2.5rem] md:rounded-[4rem] border border-white/10 bg-slate-900/40 relative overflow-hidden group">
                 <Image
                   src="/assets/trust-photo.jpg"
                   alt="A Kenyan car yard packed with stock"
                   fill
                   sizes="(max-width: 1024px) 100vw, 50vw"
                   className="object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                 <div className="absolute bottom-12 left-12 right-12">
                    <div className="flex justify-between items-end">
                      <div>
                        <span className="text-4xl font-black italic text-blue-500">2026</span>
                        <p className="text-sm font-bold uppercase tracking-widest text-white/60">Built in Nairobi, Kenya</p>
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
              <TypewriterHeading
                segments={[
                  { text: "Everything Your Dealership " },
                  { text: "Needs", accent: true },
                ]}
              />
            </h2>
            <p className="max-w-3xl mx-auto text-slate-400 font-light text-xl">
              Turn your physical car yard into a dealership customers can discover, browse and enquire from online.
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
                  "Mobile-First Design",
                ],
                description:
                  "Your showroom, online 24/7. When a car is sold at your yard, your website updates instantly. No more manual uploads or outdated listings. Just a seamless reflection of your actual inventory.",
                icon: Globe,
                color: "blue",
                image: "/assets/website-mockup.png"
              },
              {
                title: "Smart Comparison Engine",
                services: [
                  "3-Car Side-by-Side View",
                  "Technical Spec Auditing",
                  "Full Vehicle Photo Galleries",
                  "Buyer Confidence Tools",
                ],
                description:
                  "Help your clients decide faster. Let them compare up to 3 cars side-by-side with full technical specs and high-resolution galleries, making the buying decision easier and more professional than ever.",
                icon: Layout,
                color: "blue",
                image: "/assets/compare-dashboard.png"
              },
              {
                title: "Sales & Deal Command Center",
                services: [
                  "Lead Tracking & Scoring",
                  "Deal Management Suite",
                  "User Activity Auditing",
                  "Global Yard Visibility",
                ],
                description:
                  "Manage your entire inventory, track every lead from query to keys, and handle every deal from one central dashboard built for speed.",
                icon: Monitor,
                color: "blue",
                image: "/assets/interior-digital.png"
              },
              {
                title: "Every deal. Every shilling. Every document. Automated.",
                services: [
                  "Trusted Payment Sync",
                  "Automated Sale Contracts",
                  "Commission Ledger Tracking",
                  "Digital Invoice Vault",
                ],
                description:
                  "Track every deal from deposit to final payment. Keep payment records, invoices, sale agreements, commissions and outstanding balances organized in one place.",
                icon: BarChart3,
                color: "blue",
                image: "/assets/contract-signing.png"
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
                <div className="flex-1 relative aspect-video md:aspect-[4/5] w-full max-w-lg">
                  <div className="group relative h-full w-full rounded-[2.5rem] md:rounded-[4rem] border border-white/10 bg-slate-900/40 backdrop-blur-xl flex items-center justify-center overflow-hidden">
                    {service.image ? (
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 512px"
                        className="object-cover p-4 rounded-[4.5rem] transition-transform duration-600 group-hover:scale-105"
                      />
                    ) : (
                      <service.icon
                        className={`size-48 text-${service.color}-500/20 relative z-10 group-hover:text-${service.color}-500 transition-colors duration-500`}
                      />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Horizontal Feature Showcase */}
      <section className="relative py-32 z-10 bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
                <TypewriterHeading
                  segments={[
                    { text: "Built for the " },
                    { text: "Modern Dealer.", accent: true },
                  ]}
                />
              </h2>
              <p className="text-xl text-slate-400 font-light">
                Comprehensive modules engineered for every aspect of your
                operation.
              </p>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() =>
                  trackRef.current?.scrollBy({ left: -316, behavior: "smooth" })
                }
                aria-label="Scroll features left"
                className="size-11 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/40 transition-all"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                onClick={() =>
                  trackRef.current?.scrollBy({ left: 316, behavior: "smooth" })
                }
                aria-label="Scroll features right"
                className="size-11 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/40 transition-all"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={trackRef}
          onMouseEnter={() => setTrackPaused(true)}
          onMouseLeave={() => setTrackPaused(false)}
          onTouchStart={() => setTrackPaused(true)}
          className="flex gap-6 overflow-x-auto px-6 pb-4 [scrollbar-width:thin] [scrollbar-color:rgba(59,130,246,0.4)_transparent]"
        >
          {FEATURE_TILES.map((f, i) => (
            <ScrollReveal key={i} direction="up" delay={(i % 4) * 100} className="shrink-0">
              <TiltCard className="group w-[280px] sm:w-[300px] p-8 rounded-3xl bg-slate-900/30 border border-white/5 hover:bg-slate-900/50 hover:border-blue-500/20 transition-colors">
                <f.icon className="size-10 text-slate-500 mb-6 group-hover:text-blue-500 transition-colors" />
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-slate-500 font-light mb-4">{f.desc}</p>
                <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </TiltCard>
            </ScrollReveal>
          ))}
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
                  <TypewriterHeading
                    accentClassName="text-blue-500 italic"
                    segments={[
                      { text: "One System. " },
                      { break: true },
                      { text: "One Website.", accent: true },
                    ]}
                  />
                </h2>
                <p className="text-2xl text-slate-400 font-light leading-relaxed">
                  ShiftOS runs your back-office system and your public website from the same platform, so your inventory, leads, and online showroom always match.
                </p>
              </motion.div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Precision Inventory", img: "/assets/precision-inventory.png" },
                  { label: "Customer Experience", img: "/assets/premium-experience.png" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    viewport={{ once: true }}
                    className="group relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10"
                  >
                    <Image
                      src={item.img}
                      alt={item.label}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    />
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
                  className="relative rounded-[4rem] border border-white/10 bg-slate-900/40 backdrop-blur-3xl overflow-hidden aspect-[16/10] shadow-xl shadow-black/40 group"
                >
                  <Image
                    src="/assets/unified-command.png"
                    alt="Full System View"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-1000"
                  />
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
                  <Image
                    src="/assets/elite-yard.png"
                    alt="Yard Management"
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover opacity-50 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950 to-transparent" />
                  <div className="absolute inset-y-0 left-12 flex flex-col justify-center max-w-xs space-y-4">
                    <div className="size-12 rounded-2xl bg-blue-600 flex items-center justify-center">
                      <Layout className="size-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold leading-tight">Yard <br />Management</h3>
                    <p className="text-sm text-slate-400 font-light">Your inventory, leads, and web presence, managed from one place.</p>
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
            <TypewriterHeading
              accentClassName="text-blue-500 italic"
              segments={[
                { text: "Ready to shift your operation into " },
                { text: "high gear?", accent: true },
              ]}
            />
          </h2>
          <p className="text-xl text-slate-400 mb-12 font-light">
            Book a demo and see how ShiftOS runs a car yard, start to finish.
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
              See How It Works
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
            <p className="text-slate-400 text-sm font-light">The operating system for Kenyan car yards.</p>
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
