import type { Metadata } from "next";
import ContactPage from "./ContactPageClient";

const title = "Contact & Book a Demo";
const description =
  "Talk to the ShiftOS team: book a free 30-minute demo, ask a question, or see the platform on your own inventory. Based in Nairobi, Kenya.";
const url = "https://carshiftos.co.ke/contact";

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
  return <ContactPage />;
}
