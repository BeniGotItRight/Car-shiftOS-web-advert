import type { Metadata } from "next";
import CentralLanding from "./HomeClient";

export const metadata: Metadata = {
  title: "Car ShiftOS | Best Car Yard & Dealer Management System Kenya",
  description:
    "ShiftOS is Kenya's leading dealer management system — inventory, CRM, import tracking, workshop management, and payments in one place. Built for independent car yards and dealerships in Nairobi and across Kenya.",
  alternates: {
    canonical: "https://carshiftos.co.ke",
  },
};

export default function Page() {
  return <CentralLanding />;
}
