import type { Metadata } from "next";
import AboutPage from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Us — Kenya's First Car Yard OS",
  description:
    "ShiftOS was built after watching car yards manage KES 5–10 million in stock on WhatsApp and a notebook. Meet the team building Kenya's first dedicated car yard management platform.",
  alternates: {
    canonical: "https://carshiftos.co.ke/about",
  },
};

export default function Page() {
  return <AboutPage />;
}
