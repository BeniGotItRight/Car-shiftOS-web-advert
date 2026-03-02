"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { ApiResponse } from "@/lib/api";

interface Tenant {
  id: number;
  name: string;
  subdomain: string;
  logo?: string | null;
  settings?: any;
  is_admin_context?: boolean;
}

interface TenantContextValue {
  tenant: Tenant | null;
  isLoading: boolean;
  error: string | null;
}

const TenantContext = createContext<TenantContextValue | null>(null);

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export function TenantProvider({ children }: { children: ReactNode }) {
  // Static platform identity for the standalone advert site
  const [tenant] = useState<Tenant>({
    id: 0,
    name: "Car ShiftOS",
    subdomain: "platform",
    is_admin_context: true,
    settings: {
      tagline: "Industrial-grade ecosystem for vehicle dealerships.",
      whatsapp: "254700000000"
    }
  });

  return (
    <TenantContext.Provider value={{ tenant, isLoading: false, error: null }}>
      {children}
    </TenantContext.Provider>
  );
}

export function useTenant() {
  const context = useContext(TenantContext);
  if (!context) {
    throw new Error("useTenant must be used within a TenantProvider");
  }
  return context;
}
