import type { Metadata } from "next";
import ServicesPage from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Car Yard & Dealer Management System Modules",
  description:
    "Ten modules that make up ShiftOS's dealer management system for Kenyan car yards: inventory, CRM, import tracking, workshop management, live customer showroom, payments, financing calculator, SMS notifications, and more.",
  alternates: {
    canonical: "https://carshiftos.co.ke/services",
  },
};

export default function Page() {
  return <ServicesPage />;
}
