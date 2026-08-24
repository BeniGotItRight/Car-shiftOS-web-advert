import type { Metadata } from "next";
import CentralLanding from "./HomeClient";

export const metadata: Metadata = {
  title: "Car ShiftOS | Best Car Yard Management System Kenya",
  description:
    "ShiftOS is Kenya's leading dealership automation platform — inventory, CRM, import tracking, workshop management, and payments in one place. Built for independent car yards in Nairobi and across Kenya.",
  alternates: {
    canonical: "https://carshiftos.co.ke",
  },
};

export default function Page() {
  return <CentralLanding />;
}
