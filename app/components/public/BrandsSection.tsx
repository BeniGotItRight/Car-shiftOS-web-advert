"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BrandLogo } from "./BrandLogo";

// Kenya market: dominant (Toyota, Isuzu), common (Subaru, Nissan, Honda, Mazda, Mitsubishi),
// plus semi-rare / premium (Lexus, Land Rover, Mercedes Benz, BMW, Volkswagen, Audi, etc.)
const COMMON_BRANDS = [
  "Toyota", "Isuzu", "Subaru", "Nissan", "Honda", "Mazda", "Mitsubishi", "Mahindra",
];
const SEMI_RARE_BRANDS = [
  "Land Rover", "Ford", "Mercedes Benz", "BMW", "Volkswagen", "Lexus",
  "Audi", "Peugeot", "Jeep", "Volvo", "Porsche", "Suzuki", "Hyundai", "Kia",
];
const BRANDS = [...COMMON_BRANDS, ...SEMI_RARE_BRANDS];

export function BrandsSection() {
  return (
    <section className="bg-slate-950 py-24 md:py-32 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
            Elite <span className="hero-text italic">Partnerships</span>
          </h2>
          <p className="mt-2 text-slate-500 font-medium text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Curating high-performance assets from the world's most distinguished automotive engineers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.03 }}
          className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        >
          {BRANDS.map((brand, i) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.02 }}
            >
              <Link
                href={`/brands/${brand.toLowerCase().replace(/\s+/g, '-')}`}
                className="group flex flex-col items-center gap-4 rounded-3xl border border-slate-900 bg-slate-900/20 p-8 transition-all duration-500 hover:border-white/20 hover:bg-slate-900/40 hover:shadow-2xl active:scale-95"
              >
                <div className="flex h-16 w-16 items-center justify-center p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-all duration-500 group-hover:border-white/20">
                  <BrandLogo brand={brand} className="h-full w-full object-contain transition-all duration-500" />
                </div>
                <span className="text-center text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                  {brand}
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <Link
            href="/brands"
            className="inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 text-xs font-bold text-slate-950 transition-all hover:bg-slate-200 uppercase tracking-[0.3em] shadow-xl shadow-blue-500/10"
          >
            Show All Brands
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
