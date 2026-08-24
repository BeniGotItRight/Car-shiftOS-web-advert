import type { Metadata } from "next";
import ServicesPage from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Car Yard Management Software Modules",
  description:
    "Ten modules for running a Kenyan car yard: inventory, CRM, import tracking, workshop management, live customer showroom, payments, financing calculator, SMS notifications, and more.",
  alternates: {
    canonical: "https://carshiftos.co.ke/services",
  },
};

export default function Page() {
  return <ServicesPage />;
}
