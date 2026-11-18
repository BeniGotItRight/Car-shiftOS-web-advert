import type { Metadata } from "next";
import InsightsPageClient from "./InsightsPageClient";

const title = "Insights";
const description =
  "Practical guidance for running a car dealership in Kenya: inventory, sales, workshop operations and growing your car yard.";
const url = "https://carshiftos.co.ke/insights";

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
  return <InsightsPageClient />;
}
