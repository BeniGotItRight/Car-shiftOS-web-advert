import type { Metadata } from "next";
import ContactPage from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact & Book a Demo",
  description:
    "Talk to the ShiftOS team — book a free 30-minute demo, ask a question, or see the platform on your own inventory. Based in Nairobi, Kenya.",
  alternates: {
    canonical: "https://carshiftos.co.ke/contact",
  },
};

export default function Page() {
  return <ContactPage />;
}
