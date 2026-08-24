import type { Metadata } from "next";
import PrivacyPage from "./PrivacyPageClient";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How ShiftOS collects, uses, and protects your data.",
  alternates: {
    canonical: "https://carshiftos.co.ke/privacy",
  },
};

export default function Page() {
  return <PrivacyPage />;
}
