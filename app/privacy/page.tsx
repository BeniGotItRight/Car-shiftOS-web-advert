import type { Metadata } from "next";
import PrivacyPage from "./PrivacyPageClient";

const title = "Privacy Policy";
const description = "How ShiftOS collects, uses, and protects your data.";
const url = "https://carshiftos.co.ke/privacy";

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
  return <PrivacyPage />;
}
