"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

type TeamItem = {
  index: string;
  name: string;
  title: string;
  summary: string;
  bullets: string[];
  badge: string;
  color: string;
  href: string;
};

const TEAM_ITEMS: TeamItem[] = [
  {
    index: "01",
    name: "Benson Motari",
    title: "Founder & Lead Developer",
    summary:
      "Leads the vision and technical development of CarShiftOS, building practical digital solutions around the needs of automotive businesses.",
    bullets: [
      "Product vision and roadmap",
      "Full-stack software engineering",
      "Technical architecture and delivery",
    ],
    badge: "Product • Engineering • Vision",
    color: "#1E3A8A",
    href: "/about/benson",
  },
  {
    index: "02",
    name: "Marian Bosibori",
    title: "Business Development & Cybersecurity Partner",
    summary:
      "Supports business development and cybersecurity, helping strengthen CarShiftOS's business relationships, growth strategy, and approach to digital security.",
    bullets: [
      "Strategic partnerships and growth",
      "Dealer and business relationships",
      "Digital security and data protection",
    ],
    badge: "Partnerships • Growth • Security",
    color: "#0369A1",
    href: "/about/marian",
  },
];

const PEEK = 24;
const WIDTHS = ["100%", "94%"];
const BASE_HEIGHT = 300;
const HOVER_INTENT_MS = 120;

export function StackedTeamCards() {
  const [active, setActive] = useState(0);
  const [frontHovered, setFrontHovered] = useState(false);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleActive = (i: number) => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setActive(i), HOVER_INTENT_MS);
  };

  const cancelSchedule = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
  };

  const stackPosition = (originalIndex: number) =>
    (originalIndex - active + TEAM_ITEMS.length) % TEAM_ITEMS.length;

  return (
    <div className="relative mx-auto max-w-2xl">
      {/* Soft organic glow backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-[100px]"
      />

      <div
        className="relative"
        style={{ height: BASE_HEIGHT + (TEAM_ITEMS.length - 1) * PEEK }}
      >
        {TEAM_ITEMS.map((item, i) => {
          const pos = stackPosition(i);
          const isFront = pos === 0;

          return (
            <motion.div
              key={item.index}
              className="absolute left-1/2"
              style={{ zIndex: 40 - pos }}
              animate={{
                top: (TEAM_ITEMS.length - 1 - pos) * PEEK,
                width: WIDTHS[pos],
                x: "-50%",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onMouseEnter={() => {
                if (!isFront) scheduleActive(i);
              }}
              onMouseLeave={() => {
                cancelSchedule();
                if (isFront) setFrontHovered(false);
              }}
              onClick={() => !isFront && setActive(i)}
            >
              <div
                role={isFront ? undefined : "button"}
                tabIndex={isFront ? -1 : 0}
                onMouseEnter={() => isFront && setFrontHovered(true)}
                className="relative cursor-pointer overflow-hidden rounded-2xl p-8 shadow-[0_-6px_16px_rgba(0,0,0,0.18)] shadow-black/30 md:p-10"
                style={{ backgroundColor: item.color }}
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-4xl font-black text-white/25">
                    {item.index}
                  </span>
                  {!isFront && (
                    <span className="text-xs font-bold uppercase tracking-widest text-white/70">
                      {item.index} — {item.name}
                    </span>
                  )}
                </div>

                {isFront && (
                  <>
                    <span className="mb-1 block text-xs font-black uppercase tracking-widest text-white/60">
                      {item.title}
                    </span>
                    <h3 className="mb-2 text-2xl font-bold text-white sm:text-3xl">
                      {item.name}
                    </h3>
                    <p className="mb-6 line-clamp-2 text-base font-light leading-relaxed text-white/80 sm:text-lg">
                      {item.summary}
                    </p>
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-white/10"
                    >
                      View Profile
                      <ArrowRight className="size-4" />
                    </Link>

                    <AnimatePresence>
                      {frontHovered && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <ul className="mb-4 mt-6 space-y-2 border-t border-white/15 pt-6">
                            {item.bullets.map((bullet) => (
                              <li
                                key={bullet}
                                className="flex items-start gap-3 text-sm font-light text-white/85"
                              >
                                <Check className="mt-0.5 size-4 shrink-0 text-white/70" />
                                {bullet}
                              </li>
                            ))}
                          </ul>
                          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white/70">
                            {item.badge}
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
