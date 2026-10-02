import type { Metadata } from "next";
import ServicesPage from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Car Yard & Dealer Management System",
  description:
    "One connected system for inventory, customers, sales, payments, documents, and workshop, built for Kenyan car dealerships.",
  alternates: {
    canonical: "https://carshiftos.co.ke/services",
  },
};

export default function Page() {
  return <ServicesPage />;
}
