import type { Metadata } from "next";
import ServicesPage from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Car Yard & Dealer Management System Modules",
  description:
    "Ten modules in one dealer management system for Kenyan car yards: inventory, CRM, imports, workshop, showroom, payments and more.",
  alternates: {
    canonical: "https://carshiftos.co.ke/services",
  },
};

export default function Page() {
  return <ServicesPage />;
}
