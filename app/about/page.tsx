import type { Metadata } from "next";
import AboutPage from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Us: Kenya's First Car Yard OS",
  description:
    "Car yards were running KES 5-10 million in stock on WhatsApp and a notebook. ShiftOS was built to fix that, for Kenyan dealers.",
  alternates: {
    canonical: "https://carshiftos.co.ke/about",
  },
};

export default function Page() {
  return <AboutPage />;
}
