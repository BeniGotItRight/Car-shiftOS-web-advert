"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import {
  fetchPublicVehicles,
  type VehiclePublic,
  type PaginatedResponse,
} from "@/lib/api";
import { VehicleCard } from "./VehicleCard";
import { InquiryDrawer } from "./InquiryDrawer";
import { motion, useScroll, useTransform } from "framer-motion";

function Skeleton() {
  return (
    <div className="flex gap-6 overflow-hidden">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="min-w-[300px] flex-shrink-0 animate-pulse rounded-2xl border border-slate-200 bg-white md:min-w-[400px]">
          <div className="aspect-[4/3] rounded-t-2xl bg-slate-200" />
          <div className="space-y-3 p-5">
            <div className="h-5 w-3/4 rounded bg-slate-200" />
            <div className="h-4 w-1/2 rounded bg-slate-100" />
            <div className="h-3 w-full rounded bg-slate-100" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function FeaturedVehicles() {
  const [inquiryDrawerOpen, setInquiryDrawerOpen] = useState(false);
  const [inquiryVehicle, setInquiryVehicle] = useState<VehiclePublic | null>(null);
  
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-60%"]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["vehicles", "public", "featured"],
    queryFn: () =>
      fetchPublicVehicles({
        page: 1,
        per_page: 6,
        sort: "newest",
      }),
  });

  const paginated = data?.success ? (data.data as PaginatedResponse<VehiclePublic>) : null;
  const vehicles = paginated?.data ?? [];

  const handleInquire = (vehicle: VehiclePublic) => {
    setInquiryVehicle(vehicle);
    setInquiryDrawerOpen(true);
  };

  return (
    <section ref={targetRef} className="relative h-[250vh] bg-slate-950">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
          >
            <div className="max-w-xl">
              <h2 className="text-5xl font-bold tracking-tighter text-white md:text-7xl lg:text-8xl hero-text">
                Featured
              </h2>
              <p className="mt-6 text-xl text-slate-400 font-light tracking-tight text-balance">
                A hand-picked selection of automotive excellence, rigorously inspected and ready for your next move.
              </p>
            </div>
            <Link
              href="/vehicles"
              className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-10 py-5 font-bold text-white transition-all hover:bg-white hover:text-slate-950 hover:border-white shadow-xl"
            >
              Inventory
              <span className="transition-transform group-hover:translate-x-1 font-light italic">→</span>
            </Link>
          </motion.div>

          <div className="relative w-full">
            {isLoading && <Skeleton />}
            {isError && (
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-8 text-center text-amber-800">
                Unable to load vehicles. The API may be offline.
              </div>
            )}
            {!isLoading && !isError && vehicles.length === 0 && (
              <div className="rounded-xl border border-slate-200 bg-white p-12 text-center text-slate-600">
                No vehicles available yet. Check back soon.
              </div>
            )}
            
            {!isLoading && !isError && vehicles.length > 0 && (
              <motion.div style={{ x }} className="flex gap-8">
                {vehicles.map((v, i) => (
                  <div key={v.id} className="min-w-[85vw] flex-shrink-0 md:min-w-[500px]">
                    <VehicleCard
                      vehicle={v}
                      index={i}
                      onInquire={handleInquire}
                    />
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </div>

        <InquiryDrawer
          open={inquiryDrawerOpen}
          onOpenChange={setInquiryDrawerOpen}
          vehicleId={inquiryVehicle?.id}
          vehicleName={
            inquiryVehicle
              ? `${inquiryVehicle.year} ${inquiryVehicle.make} ${inquiryVehicle.model}`
              : undefined
          }
        />
      </div>
    </section>
  );
}
