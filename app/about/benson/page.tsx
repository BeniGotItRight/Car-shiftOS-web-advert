import type { Metadata } from "next";
import BensonProfile from "./BensonProfileClient";

export const metadata: Metadata = {
  title: "Benson Motari",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://carshiftos.co.ke/about/benson",
  },
};

export default function Page() {
  return <BensonProfile />;
}
