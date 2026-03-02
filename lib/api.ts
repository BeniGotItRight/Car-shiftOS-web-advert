/**
 * Public API client for CYMS (no auth).
 * Base URL from NEXT_PUBLIC_API_URL.
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export interface PublicVehiclesParams {
  page?: number;
  per_page?: number;
  sort?: "newest" | "price_asc" | "price_desc" | "year_desc" | "year_asc";
  search?: string;
  "filter[make]"?: string;
  "filter[model]"?: string;
  "filter[year]"?: number | string;
  "filter[year_min]"?: number | string;
  "filter[year_max]"?: number | string;
  "filter[fuel_type]"?: string;
  "filter[transmission]"?: string;
  "filter[body_type]"?: string;
  "filter[drive_type]"?: string;
  "filter[colour_exterior]"?: string;
  "filter[doors]"?: number | string;
  "filter[cylinder_count]"?: number | string;
  "filter[engine_capacity_min]"?: number | string;
  "filter[engine_capacity_max]"?: number | string;
  "filter[price_min]"?: number | string;
  "filter[price_max]"?: number | string;
  "filter[mileage_min]"?: number | string;
  "filter[mileage_max]"?: number | string;
  "filter[features]"?: string[];
  "filter[condition]"?: "new" | "used";
}

export interface VehiclePublic {
  id: number;
  make: string;
  model: string;
  year: number;
  variant_trim?: string | null;
  asking_price?: string | null;
  mileage_km?: number | null;
  fuel_type?: string | null;
  transmission?: string | null;
  body_type?: string | null;
  colour_exterior?: string | null;
  drive_type?: string | null;
  doors?: number | null;
  cylinder_count?: number | null;
  engine_capacity_cc?: number | null;
  key_features?: string | string[] | null;
  primary_photo_url?: string | null;
  status: string;
  condition?: "new" | "used";
}

export interface PaginatedResponse<T> {
  data: T[];
  current_page: number;
  per_page: number;
  total: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: Record<string, string[]>;
}

function buildQueryString(params: PublicVehiclesParams): string {
  const search = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== "" && value !== null) {
      if (Array.isArray(value)) {
        value.forEach((v) => search.append(`${key}[]`, String(v)));
      } else {
        search.set(key, String(value));
      }
    }
  });
  const qs = search.toString();
  return qs ? `?${qs}` : "";
}

function getTenantHeader(): Record<string, string> {
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;
    const parts = hostname.split('.');
    if (parts.length > 1) {
      const subdomain = parts[0];
      const reserved = ['www', 'localhost', '127', 'api'];
      if (!reserved.includes(subdomain.toLowerCase())) {
        return { 'X-Tenant-Domain': subdomain };
      }
    }
  }
  return {};
}

export async function fetchPublicVehicles(
  params: PublicVehiclesParams = {}
): Promise<ApiResponse<PaginatedResponse<VehiclePublic>>> {
  const qs = buildQueryString({ per_page: 12, ...params });
  const res = await fetch(`${API_URL}/api/public/vehicles${qs}`, {
    headers: { 
      Accept: "application/json",
      ...getTenantHeader()
    },
  });
  return res.json();
}

export async function fetchPublicVehicle(
  id: number
): Promise<ApiResponse<VehiclePublic & { photos?: { url: string; category: string }[]; key_features?: string[] }>> {
  const res = await fetch(`${API_URL}/api/public/vehicles/${id}`, {
    headers: { 
      Accept: "application/json",
      ...getTenantHeader()
    },
  });
  return res.json();
}

export interface InquiryPayload {
  name: string;
  phone: string;
  email?: string;
  message?: string;
  vehicle_id?: number;
}

export async function submitInquiry(
  payload: InquiryPayload
): Promise<ApiResponse<{ message: string }>> {
  const res = await fetch(`${API_URL}/api/public/inquiries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...getTenantHeader()
    },
    body: JSON.stringify(payload),
  });
  return res.json();
}
