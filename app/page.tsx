import type { Metadata } from "next";
import CentralLanding from "./HomeClient";

export const metadata: Metadata = {
  title: "Car ShiftOS | Best Car Yard & Dealer Management System Kenya",
  description:
    "Kenya's leading dealer management system for car yards: inventory, CRM, import tracking, workshop and payments in one place.",
  alternates: {
    canonical: "https://carshiftos.co.ke",
  },
};

export default function Page() {
  return <CentralLanding />;
}
