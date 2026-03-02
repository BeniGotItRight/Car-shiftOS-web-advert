"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import type { VehiclePublic } from "@/lib/api";
import { useCompareStore } from "@/lib/compareStore";
import { GitCompare, Check, Gauge, Fuel, Settings2, ArrowRight, Image as ImageIcon } from "lucide-react";
import { AnimatedNumber } from "./AnimatedNumber";

const BLUR_DATA =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkOsAQAALhAagxI2hMAAAAAElFTkSuQmCC";

interface VehicleCardProps {
  vehicle: VehiclePublic;
  index: number;
  onInquire?: (v: VehiclePublic) => void;
}

export function VehicleCard({ vehicle, index }: VehicleCardProps) {
  const router = useRouter();
  const { vehicles: compareVehicles, addVehicle } = useCompareStore();
  const isComparing = compareVehicles.some((v) => v.id === vehicle.id);
  const isCompareFull = compareVehicles.length >= 3;

  const handleCompareClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isComparing && !isCompareFull) {
      addVehicle(vehicle);
    }
    router.push("/compare");
  };

  const isSold = vehicle.status === "sold";
  const statusLabel = vehicle.status.toUpperCase();

  const price = vehicle.asking_price ? (
    <AnimatedNumber value={Number(vehicle.asking_price)} prefix="KES " />
  ) : (
    "Price on request"
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
      className="group relative flex flex-col h-full rounded-3xl bg-slate-900/40 backdrop-blur-sm border border-slate-800/60 transition-all duration-500 hover:bg-slate-900/60 hover:border-slate-700/80 hover:-translate-y-2 overflow-hidden shadow-2xl"
    >
      <Link href={`/vehicles/${vehicle.id}`} className="block relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
        {vehicle.primary_photo_url ? (
          <Image
            src={vehicle.primary_photo_url}
            alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
            fill
            className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110 group-hover:rotate-1"
            placeholder="blur"
            blurDataURL={BLUR_DATA}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-slate-900 border-b border-slate-800">
            <div className="h-16 w-16 rounded-full bg-slate-950 flex items-center justify-center mb-4 border border-slate-800/50">
               <ImageIcon className="h-8 w-8 text-slate-700" />
            </div>
            <span className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em]">Asset Not Pictured</span>
          </div>
        )}

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
           <div className="flex flex-col gap-2">
             <span className={`inline-flex px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-lg backdrop-blur-xl border border-white/10 ${
               isSold ? "bg-red-500/80 text-white" : "bg-emerald-500/20 text-emerald-400 border-emerald-500/20"
             }`}>
               {statusLabel}
             </span>
             {(vehicle as unknown as Record<string, unknown>).condition === 'new' && (
               <span className="inline-flex px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-lg bg-white/10 text-white backdrop-blur-xl border border-white/10">
                 Factory New
               </span>
             )}
           </div>

           {/* Compare Button */}
           <button
             onClick={handleCompareClick}
             disabled={!isComparing && isCompareFull}
             title={isComparing ? "Remove from comparison" : isCompareFull ? "Compare limit reached" : "Compare vehicle"}
             className={`flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-xl transition-all border ${
               isComparing 
                 ? "bg-white text-slate-950 border-white" 
                 : "bg-black/40 text-white border-white/20 hover:bg-white hover:text-slate-950 hover:border-white"
             } ${!isComparing && isCompareFull ? "opacity-30 cursor-not-allowed" : "hover:scale-110 active:scale-95"}`}
           >
             {isComparing ? <Check className="h-5 w-5" /> : <GitCompare className="h-5 w-5" />}
           </button>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
      </Link>

      <div className="flex flex-col flex-1 p-6">
        {/* Title Block - Professional & Authoritative */}
        <div className="flex justify-between items-start gap-4 mb-5">
          <Link href={`/vehicles/${vehicle.id}`} className="min-w-0">
            <h3 className="font-bold text-white text-xl md:text-2xl tracking-tight truncate group-hover:text-blue-400 transition-colors uppercase">
              {vehicle.make}
            </h3>
            <p className="text-sm font-semibold text-slate-400 truncate mt-1 tracking-wide">
              {vehicle.model}
            </p>
          </Link>
          <div className="shrink-0 bg-blue-500/10 border border-blue-500/20 rounded-md px-3 py-1">
             <span className="font-bold text-blue-400 text-xs tracking-wider">{vehicle.year}</span>
          </div>
        </div>

        {/* Specs Row - Inspired by Al's Pride (Minimalist Icons) */}
        <div className="flex items-center gap-6 border-y border-slate-800/40 py-5 my-2">
          <div className="flex items-center gap-2">
            <Gauge className="h-4 w-4 text-slate-500" />
            <span className="text-[11px] font-bold text-slate-300 tracking-tight">
              {vehicle.mileage_km ? <AnimatedNumber value={vehicle.mileage_km} suffix=" Km" /> : 'N/A'}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Fuel className="h-4 w-4 text-slate-500" />
            <span className="text-[11px] font-bold text-slate-300 tracking-tight">
              {vehicle.fuel_type || 'N/A'}
            </span>
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <Settings2 className="h-4 w-4 text-slate-500" />
            <span className="text-[11px] font-bold text-slate-300 tracking-tight">
              {vehicle.transmission || 'N/A'}
            </span>
          </div>
        </div>

        {/* Pricing & CTA - High Contrast */}
        <div className="mt-auto pt-6 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.2em] mb-1">Mkt Value</span>
            <span className="text-2xl font-black text-white tracking-tighter">
              {price}
            </span>
          </div>
          <Link 
            href={`/vehicles/${vehicle.id}`}
            className="flex items-center justify-center px-6 py-3 rounded-xl bg-slate-800 text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-slate-950 transition-all duration-300 border border-white/5 hover:border-white shadow-xl"
          >
            Details <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
