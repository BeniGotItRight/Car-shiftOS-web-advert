"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface ActivityRow {
  icon: LucideIcon;
  text: string;
  tag?: string;
}

interface ActivityFeedProps {
  rows: ActivityRow[];
  staggerMs?: number;
}

/**
 * A "live" command-portal feed. Rows slide into place one after another when
 * scrolled into view, in an unhurried slow-mo — like new entries landing in
 * a live log — then the LIVE pulse keeps running.
 */
export function ActivityFeed({ rows, staggerMs = 450 }: ActivityFeedProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started || visibleCount >= rows.length) return;
    const t = setTimeout(() => setVisibleCount((c) => c + 1), staggerMs);
    return () => clearTimeout(t);
  }, [started, visibleCount, rows.length, staggerMs]);

  return (
    <div
      ref={ref}
      className="rounded-3xl border border-white/10 bg-slate-950/60 backdrop-blur-xl overflow-hidden"
    >
      <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10 bg-white/[0.02]">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">
          Command Portal: Live
        </span>
      </div>
      <div className="p-3">
        {rows.map((row, i) => {
          const visible = i < visibleCount;
          return (
            <motion.div
              key={i}
              initial={false}
              animate={
                visible
                  ? { opacity: 1, x: 0, filter: "blur(0px)" }
                  : { opacity: 0, x: -28, filter: "blur(2px)" }
              }
              transition={{ type: "spring", stiffness: 90, damping: 16, mass: 1 }}
              className="flex items-center gap-3 px-3 py-3 rounded-xl"
            >
              <motion.div
                animate={visible ? { scale: 1, rotate: 0 } : { scale: 0.5, rotate: -20 }}
                transition={{ type: "spring", stiffness: 110, damping: 12, delay: visible ? 0.2 : 0 }}
                className="size-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0"
              >
                <row.icon className="size-4 text-blue-400" />
              </motion.div>
              <span className="text-sm text-slate-300 font-medium flex-1">{row.text}</span>
              {row.tag && (
                <motion.span
                  animate={visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: visible ? 0.4 : 0, duration: 0.5 }}
                  className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-400/10 rounded-full px-2.5 py-1 shrink-0"
                >
                  {row.tag}
                </motion.span>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
