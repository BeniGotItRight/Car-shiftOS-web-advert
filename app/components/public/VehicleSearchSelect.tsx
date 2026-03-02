"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { fetchPublicVehicles, VehiclePublic } from "@/lib/api";
import { Search, Loader2 } from "lucide-react";

export function VehicleSearchSelect({ 
  onSelect, 
  placeholder = "Search to add a car..." 
}: { 
  onSelect: (vehicle: VehiclePublic) => void, 
  placeholder?: string 
}) {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);
    return () => clearTimeout(handler);
  }, [query]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const { data, isLoading } = useQuery({
    queryKey: ["vehicleSearch", debouncedQuery],
    queryFn: () => fetchPublicVehicles({ search: debouncedQuery }),
    enabled: debouncedQuery.length > 1,
  });

  const handleSelect = (vehicle: VehiclePublic) => {
    onSelect(vehicle);
    setQuery("");
    setIsOpen(false);
  };

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
  const fullImageUrl = (url: string | null | undefined) => {
    if (!url) return "";
    if (url.startsWith("http")) return url;
    return `${API_URL.replace(/\/?$/, "")}/${url.replace(/^\/?/, "")}`;
  };

  return (
    <div className="relative w-full" ref={containerRef}>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <Search className="h-5 w-5 text-slate-400" />
        </div>
        <input
          type="text"
          className="block w-full rounded-lg border-slate-200 pl-10 pr-4 py-3 text-sm focus:border-indigo-500 focus:ring-indigo-500 bg-slate-50 border transition-colors shadow-sm placeholder:text-slate-400"
          placeholder={placeholder}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
        />
        {isLoading && query.length > 1 && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <Loader2 className="h-4 w-4 animate-spin text-slate-400" />
          </div>
        )}
      </div>

      {isOpen && query.length > 1 && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 max-h-80 overflow-y-auto rounded-xl border border-slate-200 bg-white shadow-xl hide-scrollbar">
          {data?.success && data.data?.data.length === 0 ? (
            <div className="p-4 text-center text-sm text-slate-500">No vehicles found matching &quot;{debouncedQuery}&quot;.</div>
          ) : (
            <div className="p-2 flex flex-col gap-1">
              {data?.data?.data.map((vehicle) => (
                <button
                  key={vehicle.id}
                  onClick={() => handleSelect(vehicle)}
                  className="flex w-full items-center gap-3 rounded-lg p-2 hover:bg-slate-50 transition-colors text-left"
                >
                  <div className="relative h-12 w-16 shrink-0 overflow-hidden rounded-md bg-slate-100 border border-slate-200/60">
                    {vehicle.primary_photo_url ? (
                      <Image
                        src={fullImageUrl(vehicle.primary_photo_url)}
                        alt={vehicle.model}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-xs opacity-50">🚗</div>
                    )}
                  </div>
                  <div className="flex flex-col flex-1 min-w-0">
                    <span className="truncate text-sm font-semibold text-slate-900">{vehicle.year} {vehicle.make} {vehicle.model}</span>
                    <span className="truncate text-xs text-slate-500 mt-0.5">
                      {vehicle.asking_price ? `KES ${Number(vehicle.asking_price).toLocaleString()}` : "Price On Request"}
                      <span className="mx-2 text-slate-300">•</span>
                      {vehicle.mileage_km ? `${vehicle.mileage_km.toLocaleString()} km` : "New"}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
