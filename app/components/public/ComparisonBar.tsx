"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCompareStore } from "@/lib/compareStore";
import Image from "next/image";
import Link from "next/link";
import { X, GitCompare, Trash2, ArrowRight } from "lucide-react";

/**
 * ComparisonBar
 * A sleek, persistent bar at the bottom of the screen that shows
 * vehicles currently selected for comparison.
 */
export function ComparisonBar() {
  const { vehicles, removeVehicle, clearVehicles } = useCompareStore();

  if (vehicles.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 w-full max-w-2xl px-4"
      >
        <div className="relative overflow-hidden rounded-2xl bg-slate-900 shadow-2xl shadow-indigo-500/20 border border-white/10 backdrop-blur-xl">
          <div className="flex items-center justify-between p-3 gap-4">
            {/* Vehicle Thumbnails */}
            <div className="flex items-center gap-2 overflow-x-auto hide-scrollbars">
               {vehicles.map((v) => {
                  const imageUrl = v.primary_photo_url;

                  return (
                    <div key={v.id} className="relative group shrink-0">
                      <div className="relative w-16 h-12 rounded-lg overflow-hidden bg-slate-800 border border-white/5">
                        {imageUrl ? (
                          <Image
                            src={imageUrl}
                            alt={v.model}
                            fill
                            className="object-cover transition-transform group-hover:scale-110"
                            sizes="64px"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-slate-600">
                             <GitCompare className="size-4" />
                          </div>
                        )}
                      </div>
                      <button
                        onClick={() => removeVehicle(v.id)}
                        className="absolute -top-1.5 -right-1.5 size-5 rounded-full bg-rose-500 text-white flex items-center justify-center shadow-lg border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Remove"
                      >
                        <X className="size-3" strokeWidth={3} />
                      </button>
                    </div>
                  );
               })}

               {/* Add More Slot */}
               {vehicles.length < 3 && (
                 <div className="w-16 h-12 rounded-lg border-2 border-dashed border-white/10 flex items-center justify-center text-white/20 shrink-0">
                    <span className="text-[10px] font-bold uppercase tracking-widest">Slot</span>
                 </div>
               )}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 shrink-0 border-l border-white/10 pl-4">
               <button 
                 onClick={clearVehicles}
                 className="flex flex-col items-center gap-0.5 text-slate-400 hover:text-rose-400 transition-colors"
                 title="Clear All"
               >
                  <Trash2 className="size-4" />
                  <span className="text-[9px] font-bold uppercase tracking-tighter">Clear</span>
               </button>

               <Link
                 href="/compare"
                 className="flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-white hover:text-slate-900 px-4 py-2.5 text-xs font-black text-white transition-all group"
               >
                  <span>Compare ({vehicles.length}/3)</span>
                  <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
               </Link>
            </div>
          </div>

          {/* Background Glow Effect */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-32 h-20 bg-indigo-500/20 blur-[60px]" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
