import type { Metadata } from "next";
import AboutPage from "./AboutPageClient";

const title = "About Us: Kenya's First Car Yard OS";
const description =
  "Car yards were running KES 5-10 million in stock on WhatsApp and a notebook. ShiftOS was built to fix that, for Kenyan dealers.";
const url = "https://carshiftos.co.ke/about";

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
  return <AboutPage />;
}
