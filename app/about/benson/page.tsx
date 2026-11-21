import type { Metadata } from "next";
import BensonProfile from "./BensonProfileClient";

const title = "Benson Motari";
const description =
  "Founder and lead developer of Car ShiftOS, Kenya's first dealer management system built for independent car yards.";
const url = "https://carshiftos.co.ke/about/benson";

export const metadata: Metadata = {
  title,
  description,
  robots: {
    index: true,
    follow: true,
  },
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
  return <BensonProfile />;
}
