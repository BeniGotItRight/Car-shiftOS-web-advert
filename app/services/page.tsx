import type { Metadata } from "next";
import ServicesPage from "./ServicesPageClient";

const title = "Car Yard & Dealer Management System";
const description =
  "One connected system for inventory, customers, sales, payments, documents, and workshop, built for Kenyan car dealerships.";
const url = "https://carshiftos.co.ke/services";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: `Car ShiftOS | ${title}`,
    description,
    url,
    siteName: "Car ShiftOS",
    images: [
      {
        url: "/assets/carshiftos-logo.png",
        width: 1024,
        height: 559,
        alt: "Car ShiftOS logo",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Car ShiftOS | ${title}`,
    description,
    images: ["/assets/carshiftos-logo.png"],
  },
};

export default function Page() {
  return <ServicesPage />;
}
