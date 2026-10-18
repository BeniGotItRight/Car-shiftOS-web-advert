"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, X, Check, ArrowRight } from "lucide-react";
import { faqs } from "./faqs";

export default function FaqPageClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24 md:pt-32 pb-16 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 md:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 md:mb-8 tracking-tighter">
            Frequently asked <span className="text-blue-500">questions.</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 font-light leading-relaxed">
            Everything dealers usually ask before booking a demo.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 sm:p-8 text-left"
                  aria-expanded={isOpen}
                >
                  <h2 className="text-lg sm:text-xl font-bold text-white">
                    {faq.question}
                  </h2>
                  <ChevronDown
                    className={`size-5 shrink-0 text-blue-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {/* Always rendered in the HTML (even when collapsed) so the
                    answer text is crawlable; visibility is purely CSS-driven
                    via the grid-rows collapse trick, not conditional mounting. */}
                <div
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                      <p className="text-base sm:text-lg text-slate-400 font-light leading-relaxed">
                        {faq.answer}
                      </p>
                      {"comparison" in faq && faq.comparison && (
                        <div className="mt-6 rounded-2xl border border-white/5 overflow-hidden">
                          <div className="grid grid-cols-2">
                            <div className="px-4 sm:px-6 py-3 bg-white/5 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-400 border-r border-white/5">
                              {faq.comparison.leftLabel}
                            </div>
                            <div className="px-4 sm:px-6 py-3 bg-blue-600/10 text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-400">
                              {faq.comparison.rightLabel}
                            </div>
                          </div>
                          {faq.comparison.rows.map((row, ri) => (
                            <div
                              key={ri}
                              className="grid grid-cols-2 border-t border-white/5"
                            >
                              <div className="px-4 sm:px-6 py-4 border-r border-white/5 flex gap-2 sm:gap-3">
                                <X className="size-4 shrink-0 text-slate-600 mt-0.5" />
                                <span className="text-sm sm:text-base text-slate-400 font-light leading-snug">
                                  {row.left}
                                </span>
                              </div>
                              <div className="px-4 sm:px-6 py-4 bg-blue-600/5 flex gap-2 sm:gap-3">
                                <Check className="size-4 shrink-0 text-blue-500 mt-0.5" />
                                <span className="text-sm sm:text-base text-white font-light leading-snug">
                                  {row.right}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      {"relatedLink" in faq && faq.relatedLink && (
                        <Link
                          href={faq.relatedLink.href}
                          target={faq.relatedLink.href.startsWith("http") ? "_blank" : undefined}
                          rel={faq.relatedLink.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          tabIndex={isOpen ? 0 : -1}
                          className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          {faq.relatedLink.label}
                          <ArrowRight className="size-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center rounded-[2rem] border border-white/5 bg-slate-900/20 p-10 sm:p-16"
        >
          <h2 className="text-2xl sm:text-3xl font-black mb-4 tracking-tight">
            Still have questions?
          </h2>
          <p className="text-slate-400 font-light mb-8">
            Book a free 30-minute demo and we'll answer them on your own inventory.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 rounded-xl font-bold hover:bg-blue-500 transition-colors"
          >
            Book a Free Demo
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
