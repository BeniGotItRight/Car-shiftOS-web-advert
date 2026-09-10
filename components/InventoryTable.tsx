"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface InventoryRow {
  vehicle: string;
  cost: string;
  asking: string;
  status: string;
  tone: "success" | "neutral" | "pending";
}

const STATUS_TONE_CLASSES: Record<InventoryRow["tone"], string> = {
  success: "text-emerald-400 bg-emerald-400/10",
  neutral: "text-blue-400 bg-blue-400/10",
  pending: "text-amber-400 bg-amber-400/10",
};

interface InventoryTableProps {
  rows: InventoryRow[];
  staggerMs?: number;
}

/**
 * A "live" command-portal inventory table. Rows slide into place one after
 * another when scrolled into view, then the LIVE pulse keeps running.
 */
export function InventoryTable({ rows, staggerMs = 350 }: InventoryTableProps) {
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
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-[10px] uppercase tracking-widest text-slate-500">
              <th className="text-left font-bold px-5 pt-4 pb-2">Vehicle</th>
              <th className="text-right font-bold px-3 pt-4 pb-2">Cost</th>
              <th className="text-right font-bold px-3 pt-4 pb-2">Asking</th>
              <th className="text-right font-bold px-5 pt-4 pb-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => {
              const visible = i < visibleCount;
              return (
                <motion.tr
                  key={row.vehicle}
                  initial={false}
                  animate={
                    visible
                      ? { opacity: 1, x: 0, filter: "blur(0px)" }
                      : { opacity: 0, x: -28, filter: "blur(2px)" }
                  }
                  transition={{ type: "spring", stiffness: 90, damping: 16, mass: 1 }}
                  className="border-t border-white/5"
                >
                  <td className="px-5 py-3 font-medium text-slate-200 whitespace-nowrap">{row.vehicle}</td>
                  <td className="px-3 py-3 text-right text-slate-400 whitespace-nowrap">{row.cost}</td>
                  <td className="px-3 py-3 text-right text-slate-200 whitespace-nowrap">{row.asking}</td>
                  <td className="px-5 py-3 text-right whitespace-nowrap">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-widest rounded-full px-2.5 py-1 ${STATUS_TONE_CLASSES[row.tone]}`}
                    >
                      {row.status}
                    </span>
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
