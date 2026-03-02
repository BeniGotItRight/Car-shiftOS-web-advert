"use client";

import { useCompareStore } from "@/lib/compareStore";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { X, GitCompare } from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

function fullImageUrl(url: string | undefined): string {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  const base = API_URL.replace(/\/$/, "");
  return url.startsWith("/") ? `${base}${url}` : `${base}/${url}`;
}

export function CompareDrawer() {
  const { vehicles, isDrawerOpen, setDrawerOpen, removeVehicle, clearVehicles } = useCompareStore();

  if (vehicles.length === 0) return null;

  return (
    <>
      <AnimatePresence>
        {!isDrawerOpen && vehicles.length > 0 && (
          <motion.button
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            onClick={() => setDrawerOpen(true)}
            className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-xl hover:bg-slate-800 transition-colors"
          >
            <GitCompare className="h-4 w-4" />
            Compare ({vehicles.length})
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 z-50 flex flex-col border-t border-slate-200 bg-white shadow-[0_-8px_30px_rgb(0,0,0,0.12)] sm:px-6 px-4 py-4 md:py-6"
          >
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-1 items-center justify-between md:justify-start gap-4">
                <div className="flex items-center gap-2">
                  <GitCompare className="h-5 w-5 text-indigo-600" />
                  <h3 className="font-semibold text-slate-900 text-lg">Compare Vehicles</h3>
                </div>
                
                <button
                  type="button"
                  onClick={() => setDrawerOpen(false)}
                  className="rounded-full bg-slate-100 p-2 text-slate-500 hover:bg-slate-200 md:hidden"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="flex flex-1 items-center gap-4 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
                {vehicles.map((v) => {
                  const vehicleRecord = v as unknown as Record<string, unknown>;
                  const photos = Array.isArray(vehicleRecord.photos) ? vehicleRecord.photos : [];
                  const primaryPhoto = (photos as Record<string, unknown>[]).find((p) => p?.url) ?? photos[0];
                  const imageUrl = fullImageUrl(primaryPhoto?.url || (vehicleRecord.primary_photo_url as string));

                  return (
                    <motion.div 
                      key={v.id}
                      layoutId={`compare-thumb-${v.id}`}
                      className="relative flex shrink-0 items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-2 pl-3"
                    >
                      <button
                        onClick={() => removeVehicle(v.id)}
                        className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-white text-slate-400 shadow-sm border border-slate-200 hover:text-red-500 z-10"
                      >
                        <X className="h-3 w-3" />
                      </button>
                      
                      <div className="relative h-12 w-16 shrink-0 overflow-hidden rounded bg-slate-200">
                        {imageUrl ? (
                          <Image src={imageUrl} alt={v.model} fill className="object-cover" />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-xs">🚗</div>
                        )}
                      </div>
                      
                      <div className="flex flex-col pr-4 min-w-[120px]">
                        <span className="truncate text-xs font-semibold text-slate-900">{v.year} {v.make}</span>
                        <span className="truncate text-xs text-slate-500">{v.model}</span>
                      </div>
                    </motion.div>
                  );
                })}

                {vehicles.length < 3 && (
                  <div className="flex h-16 w-48 shrink-0 items-center justify-center rounded-lg border-2 border-dashed border-slate-200 bg-slate-50 text-xs font-medium text-slate-400">
                    Add up to {3 - vehicles.length} more
                  </div>
                )}
              </div>

              <div className="flex flex-col shrink-0 gap-3 md:flex-row md:items-center">
                <button
                  onClick={clearVehicles}
                  className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
                >
                  Clear All
                </button>
                <Link
                  href="/compare"
                  onClick={() => setDrawerOpen(false)}
                  className={`flex items-center justify-center rounded-lg px-6 py-2.5 text-sm font-medium text-white transition-colors ${
                    vehicles.length > 1 ? "bg-indigo-600 hover:bg-indigo-700" : "bg-indigo-300 pointer-events-none"
                  }`}
                >
                  Compare {vehicles.length > 1 ? `(${vehicles.length})` : ""}
                </Link>
                <button
                  type="button"
                  onClick={() => setDrawerOpen(false)}
                  className="hidden rounded-full bg-slate-100 p-2 text-slate-500 hover:bg-slate-200 md:block ml-2"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
