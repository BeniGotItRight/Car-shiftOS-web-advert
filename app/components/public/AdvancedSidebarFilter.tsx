"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronDown, ChevronUp, RotateCcw, Check } from "lucide-react";

export function AdvancedSidebarFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Local state for sliders/inputs to debounce
  const [filters, setFilters] = useState({
    price_min: searchParams.get("price_min") || "",
    price_max: searchParams.get("price_max") || "",
    year_min: searchParams.get("year_min") || "",
    year_max: searchParams.get("year_max") || "",
    mileage_max: searchParams.get("mileage_max") || "",
    engine_min: searchParams.get("engine_min") || "",
    engine_max: searchParams.get("engine_max") || "",
  });

  const [activeFeatures, setActiveFeatures] = useState<string[]>(
    searchParams.getAll("features[]") || []
  );

  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    make: true,
    price: true,
    year: false,
    mileage: false,
    specs: true,
    features: true,
  });

  const toggleSection = (section: string) => {
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const currentParams = new URLSearchParams(searchParams.toString());

  const applyFilter = (key: string, value: string | undefined) => {
    if (!value) {
      currentParams.delete(key);
    } else {
      currentParams.set(key, value);
    }
    currentParams.delete("page"); // Reset page on filter
    router.push(`/vehicles?${currentParams.toString()}`);
  };

  const handleApplySliders = () => {
    if (filters.price_min) currentParams.set("price_min", filters.price_min);
    else currentParams.delete("price_min");
    if (filters.price_max) currentParams.set("price_max", filters.price_max);
    else currentParams.delete("price_max");
    
    if (filters.year_min) currentParams.set("year_min", filters.year_min);
    else currentParams.delete("year_min");
    if (filters.year_max) currentParams.set("year_max", filters.year_max);
    else currentParams.delete("year_max");

    if (filters.mileage_max) currentParams.set("mileage_max", filters.mileage_max);
    else currentParams.delete("mileage_max");

    currentParams.delete("page");
    router.push(`/vehicles?${currentParams.toString()}`);
  };

  const toggleFeature = (feature: string) => {
    const newFeatures = activeFeatures.includes(feature)
      ? activeFeatures.filter((f) => f !== feature)
      : [...activeFeatures, feature];
    
    setActiveFeatures(newFeatures);

    currentParams.delete("features[]");
    newFeatures.forEach((f) => currentParams.append("features[]", f));
    currentParams.delete("page");
    router.push(`/vehicles?${currentParams.toString()}`);
  };

  const resetFilters = () => {
    setFilters({ 
      price_min: "", 
      price_max: "", 
      year_min: "", 
      year_max: "", 
      mileage_max: "",
      engine_min: "",
      engine_max: "",
    });
    setActiveFeatures([]);
    router.push("/vehicles");
  };

  // Pre-defined options (simplified for demo)
  const makes = ["Toyota", "Mercedes Benz", "BMW", "Audi", "Land Rover", "Lexus", "Subaru", "Nissan", "Volkswagen", "Ford", "Porsche"];
  const bodyTypes = ["SUV", "Sedan", "Hatchback", "Pick-Up", "Crossover", "Van"];
  const fuelTypes = ["Petrol", "Diesel", "Hybrid", "Electric"];
  const transmissions = ["Automatic", "Manual"];
  const featureList = ["Leather Seats", "Sunroof", "Bluetooth", "Reverse Camera", "Parking Sensors", "Alloy Wheels", "Traction Control", "Keyless Entry", "Power Seats"];

  return (
    <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-900 tracking-tight">Search Filters</h2>
        <button 
          onClick={resetFilters}
          className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-indigo-600 transition-colors"
        >
          <RotateCcw className="h-3 w-3" /> Reset
        </button>
      </div>

      <div className="space-y-6">
        {/* Make Filter */}
        <div className="border-b border-slate-200 pb-5">
          <button onClick={() => toggleSection("make")} className="flex items-center justify-between w-full text-left">
            <span className="font-bold text-slate-800 uppercase tracking-wide text-sm">Make</span>
            {expanded.make ? <ChevronUp className="h-4 w-4 text-slate-400" /> : <ChevronDown className="h-4 w-4 text-slate-400" />}
          </button>
          {expanded.make && (
            <div className="mt-4">
              <select 
                value={searchParams.get("make") || ""} 
                onChange={(e) => applyFilter("make", e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm font-medium text-slate-700 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              >
                <option value="">All Makes</option>
                {makes.map((m) => <option key={m} value={m}>{m}</option>)}
              </select>
            </div>
          )}
        </div>

        {/* Price Range */}
        <div className="border-b border-slate-200 pb-5">
          <button onClick={() => toggleSection("price")} className="flex items-center justify-between w-full text-left">
            <span className="font-bold text-slate-800 uppercase tracking-wide text-sm">Price Range (KES)</span>
            {expanded.price ? <ChevronUp className="h-4 w-4 text-slate-400" /> : <ChevronDown className="h-4 w-4 text-slate-400" />}
          </button>
          {expanded.price && (
            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-3">
                <input 
                  type="number" 
                  placeholder="Min" 
                  value={filters.price_min}
                  onChange={(e) => setFilters(prev => ({ ...prev, price_min: e.target.value }))}
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm font-medium outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-400"
                />
                <span className="text-slate-400 font-bold">-</span>
                <input 
                  type="number" 
                  placeholder="Max" 
                  value={filters.price_max}
                  onChange={(e) => setFilters(prev => ({ ...prev, price_max: e.target.value }))}
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm font-medium outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-400"
                />
              </div>
              <button 
                onClick={handleApplySliders}
                className="w-full rounded-xl bg-slate-900 py-2.5 text-xs font-bold text-white uppercase tracking-wider hover:bg-indigo-600 transition-colors"
              >
                Apply Price
              </button>
            </div>
          )}
        </div>

        {/* Year Range */}
        <div className="border-b border-slate-200 pb-5">
          <button onClick={() => toggleSection("year")} className="flex items-center justify-between w-full text-left">
            <span className="font-bold text-slate-800 uppercase tracking-wide text-sm">Year Range</span>
            {expanded.year ? <ChevronUp className="h-4 w-4 text-slate-400" /> : <ChevronDown className="h-4 w-4 text-slate-400" />}
          </button>
          {expanded.year && (
            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-3">
                <input 
                  type="number" 
                  placeholder="Min Year" 
                  value={filters.year_min}
                  onChange={(e) => setFilters(prev => ({ ...prev, year_min: e.target.value }))}
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm font-medium outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-400"
                />
                <span className="text-slate-400 font-bold">-</span>
                <input 
                  type="number" 
                  placeholder="Max Year" 
                  value={filters.year_max}
                  onChange={(e) => setFilters(prev => ({ ...prev, year_max: e.target.value }))}
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm font-medium outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-400"
                />
              </div>
              <button 
                onClick={handleApplySliders}
                className="w-full rounded-xl bg-slate-100 py-2.5 text-xs font-bold text-slate-700 uppercase tracking-wider hover:bg-slate-200 transition-colors"
              >
                Apply Year
              </button>
            </div>
          )}
        </div>

        {/* Specs & Configuration */}
        <div className="border-b border-slate-200 pb-5">
          <button onClick={() => toggleSection("specs")} className="flex items-center justify-between w-full text-left">
            <span className="font-bold text-slate-800 uppercase tracking-wide text-sm">Configuration</span>
            {expanded.specs ? <ChevronUp className="h-4 w-4 text-slate-400" /> : <ChevronDown className="h-4 w-4 text-slate-400" />}
          </button>
          {expanded.specs && (
            <div className="mt-4 space-y-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Body Type</label>
                <select 
                  value={searchParams.get("body_type") || ""} 
                  onChange={(e) => applyFilter("body_type", e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 outline-none focus:border-indigo-500 transition-all"
                >
                  <option value="">Any</option>
                  {bodyTypes.map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>
              
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Fuel Type</label>
                <select 
                  value={searchParams.get("fuel_type") || ""} 
                  onChange={(e) => applyFilter("fuel_type", e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 outline-none focus:border-indigo-500 transition-all"
                >
                  <option value="">Any</option>
                  {fuelTypes.map((f) => <option key={f} value={f}>{f}</option>)}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Transmission</label>
                <div className="flex gap-2">
                  {transmissions.map((t) => (
                     <button 
                       key={t}
                       onClick={() => applyFilter("transmission", searchParams.get("transmission") === t ? "" : t)}
                       className={`flex-1 rounded-lg py-2 text-xs font-bold transition-all border ${
                         searchParams.get("transmission") === t 
                           ? "bg-indigo-600 text-white border-indigo-600" 
                           : "bg-white text-slate-600 border-slate-300 hover:border-indigo-300 hover:bg-indigo-50"
                       }`}
                     >
                       {t}
                     </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Performance & Mechanics */}
        <div className="border-b border-slate-200 pb-5">
          <button onClick={() => toggleSection("performance")} className="flex items-center justify-between w-full text-left">
            <span className="font-bold text-slate-800 uppercase tracking-wide text-sm">Performance</span>
            {expanded.performance ? <ChevronUp className="h-4 w-4 text-slate-400" /> : <ChevronDown className="h-4 w-4 text-slate-400" />}
          </button>
          {expanded.performance && (
            <div className="mt-4 space-y-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Drive Type</label>
                <div className="flex flex-wrap gap-2">
                  {["AWD", "RWD", "FWD", "4WD"].map((d) => (
                    <button 
                      key={d}
                      onClick={() => applyFilter("drive_type", searchParams.get("drive_type") === d ? "" : d)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                        searchParams.get("drive_type") === d 
                          ? "bg-indigo-600 text-white border-indigo-600" 
                          : "bg-white text-slate-600 border-slate-300 hover:border-indigo-300"
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Engine Size (CC)</label>
                <div className="flex items-center gap-2">
                  <input 
                    type="number" 
                    placeholder="Min" 
                    value={filters.engine_min}
                    onChange={(e) => setFilters(prev => ({ ...prev, engine_min: e.target.value }))}
                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm font-medium outline-none focus:border-indigo-500 transition-all"
                  />
                  <input 
                    type="number" 
                    placeholder="Max" 
                    value={filters.engine_max}
                    onChange={(e) => setFilters(prev => ({ ...prev, engine_max: e.target.value }))}
                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm font-medium outline-none focus:border-indigo-500 transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Cylinders</label>
                <select 
                  value={searchParams.get("cylinder_count") || ""} 
                  onChange={(e) => applyFilter("cylinder_count", e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 outline-none focus:border-indigo-500 transition-all"
                >
                  <option value="">Any</option>
                  {[3, 4, 5, 6, 8, 10, 12].map((c) => <option key={c} value={c}>{c} Cylinders</option>)}
                </select>
              </div>

              <button 
                onClick={() => {
                  if (filters.engine_min) currentParams.set("engine_min", filters.engine_min);
                  else currentParams.delete("engine_min");
                  if (filters.engine_max) currentParams.set("engine_max", filters.engine_max);
                  else currentParams.delete("engine_max");
                  router.push(`/vehicles?${currentParams.toString()}`);
                }}
                className="w-full rounded-xl bg-slate-900 py-2 text-xs font-bold text-white uppercase tracking-wider hover:bg-indigo-600 transition-colors"
              >
                Apply Specs
              </button>
            </div>
          )}
        </div>

        {/* Features Checklist */}
        <div>
          <button onClick={() => toggleSection("features")} className="flex items-center justify-between w-full text-left">
            <span className="font-bold text-slate-800 uppercase tracking-wide text-sm">Key Features</span>
            {expanded.features ? <ChevronUp className="h-4 w-4 text-slate-400" /> : <ChevronDown className="h-4 w-4 text-slate-400" />}
          </button>
          {expanded.features && (
            <div className="mt-4 space-y-2.5 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
              {featureList.map((feature) => (
                <label key={feature} className="flex items-center gap-3 cursor-pointer group" onClick={() => toggleFeature(feature)}>
                  <div className={`flex w-5 h-5 rounded-md border text-white items-center justify-center transition-all ${
                    activeFeatures.includes(feature) 
                      ? "bg-indigo-600 border-indigo-600" 
                      : "bg-white border-slate-300 group-hover:border-indigo-400"
                  }`}>
                    {activeFeatures.includes(feature) && <Check className="w-3.5 h-3.5" strokeWidth={3} />}
                  </div>
                  <span className={`text-sm font-semibold transition-colors ${
                    activeFeatures.includes(feature) ? "text-slate-900" : "text-slate-600 hover:text-slate-900"
                  }`}>
                    {feature}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
