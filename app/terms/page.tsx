import type { Metadata } from "next";
import TermsPage from "./TermsPageClient";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using the ShiftOS car yard management platform.",
  alternates: {
    canonical: "https://carshiftos.co.ke/terms",
  },
};

export default function Page() {
  return <TermsPage />;
}
