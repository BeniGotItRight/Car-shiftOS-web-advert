import type { Metadata } from "next";
import MarianProfile from "./MarianProfileClient";

const title = "Marian Bosibori";
const description =
  "Business Development and Cybersecurity Partner at Car ShiftOS, Kenya's first dealer management system built for independent car yards.";
const url = "https://carshiftos.co.ke/about/marian";

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
  return <MarianProfile />;
}
