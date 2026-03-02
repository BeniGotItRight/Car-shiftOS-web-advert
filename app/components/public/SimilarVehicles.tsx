"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchPublicVehicles, VehiclePublic } from "@/lib/api";
import { VehicleCard } from "./VehicleCard";
import { MoveRight, Sparkles } from "lucide-react";
import Link from "next/link";

interface SimilarVehiclesProps {
  currentVehicle: VehiclePublic;
}

export function SimilarVehicles({ currentVehicle }: SimilarVehiclesProps) {
  const { data, isLoading } = useQuery({
    queryKey: ["vehicles", "similar", currentVehicle.id],
    queryFn: () => 
      fetchPublicVehicles({
        per_page: 4,
        "filter[body_type]": currentVehicle.body_type || undefined,
        // Optional: exclude current vehicle if API supported it, 
        // but we'll just filter in render for now.
      }),
  });

  const vehicles = (data?.success && data.data)
    ? (data.data.data as VehiclePublic[]).filter(v => v.id !== currentVehicle.id)
    : [];

  if (isLoading) {
    return (
      <div className="mt-20">
        <div className="h-8 w-48 bg-slate-100 animate-pulse rounded-lg mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-80 bg-slate-50 animate-pulse rounded-2xl border border-slate-100" />
          ))}
        </div>
      </div>
    );
  }

  if (vehicles.length === 0) return null;

  return (
    <div className="mt-24">
      <div className="flex items-end justify-between mb-8">
        <div>
           <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-indigo-500 fill-indigo-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500">Curated For You</span>
           </div>
           <h2 className="text-3xl font-black text-slate-900 tracking-tight">Similar Moves</h2>
        </div>
        <Link 
          href={`/vehicles?body_type=${currentVehicle.body_type || ""}`}
          className="group flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-indigo-600 transition-colors"
        >
          View More {currentVehicle.body_type ? `${currentVehicle.body_type}s` : "Vehicles"}
          <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {vehicles.map((v, i) => (
          <VehicleCard 
            key={v.id} 
            vehicle={v} 
            index={i} 
            onInquire={() => window.location.href = `/vehicles/${v.id}?inquiry=1`} 
          />
        ))}
      </div>
    </div>
  );
}
