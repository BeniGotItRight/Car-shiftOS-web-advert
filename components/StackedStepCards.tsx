"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export type StepItem = {
  num: string;
  icon: LucideIcon;
  title: string;
  desc: string;
};

/**
 * Mobile-only tapered card stack for a short ordered list (onboarding
 * steps, etc.), modeled on components/StackedTeamCards.tsx's tap-to-front
 * interaction. Unlike that component, PEEK here is tall enough to show a
 * full title row on every non-front card (not just a sliver) — the point
 * is "stacked but every title stays readable," not "mostly hidden."
 */
const PEEK = 60;
const FRONT_HEIGHT = 260;
const HOVER_INTENT_MS = 120;

export function StackedStepCards({ items }: { items: StepItem[] }) {
  const [active, setActive] = useState(0);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleActive = (i: number) => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setActive(i), HOVER_INTENT_MS);
  };
  const cancelSchedule = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
  };

  const stackPosition = (originalIndex: number) =>
    (originalIndex - active + items.length) % items.length;

  const totalHeight = FRONT_HEIGHT + (items.length - 1) * PEEK;

  return (
    <div className="relative" style={{ height: totalHeight }}>
      {items.map((item, i) => {
        const pos = stackPosition(i);
        const isFront = pos === 0;

        return (
          <motion.div
            key={item.num}
            className="absolute inset-x-0"
            style={{ zIndex: 40 - pos }}
            animate={{ top: (items.length - 1 - pos) * PEEK }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onMouseEnter={() => !isFront && scheduleActive(i)}
            onMouseLeave={cancelSchedule}
            onClick={() => !isFront && setActive(i)}
          >
            <div
              role={isFront ? undefined : "button"}
              tabIndex={isFront ? -1 : 0}
              className="relative cursor-pointer overflow-hidden rounded-3xl border border-blue-900/60 bg-[#0a0f1e] p-6 shadow-[0_-8px_20px_rgba(0,0,0,0.3)]"
              style={{ minHeight: isFront ? FRONT_HEIGHT : PEEK + 20 }}
            >
              <div className="flex items-center gap-4">
                <span className="shrink-0 text-xs font-black uppercase tracking-[0.3em] text-blue-500">
                  {item.num}
                </span>
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10">
                  <item.icon className="size-5 text-blue-500" />
                </div>
                <h3 className="flex-1 text-lg font-bold leading-tight">{item.title}</h3>
              </div>
              {isFront && (
                <p className="mt-4 text-sm font-light leading-relaxed text-slate-400">{item.desc}</p>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
