import type { Metadata } from "next";
import CentralLanding from "./HomeClient";

export const metadata: Metadata = {
  title: "Car ShiftOS | Best Car Yard & Dealer Management System Kenya",
  description:
    "Kenya's leading dealer management system for car yards: inventory, CRM, import tracking, workshop and payments in one place.",
  alternates: {
    canonical: "https://carshiftos.co.ke",
  },
};

const videoJsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Car ShiftOS Demo - Car Yard & Dealer Management System",
  description:
    "A walkthrough of Car ShiftOS: real-time showroom sync, inventory lifecycle tracking, and organised payment records for Kenyan car yards.",
  thumbnailUrl: [
    "https://res.cloudinary.com/dru0aee47/video/upload/so_8,w_1280/brag.jpg",
  ],
  uploadDate: "2026-09-18T23:26:55Z",
  duration: "PT21S",
  contentUrl:
    "https://res.cloudinary.com/dru0aee47/video/upload/q_auto/brag.mp4",
  embedUrl: "https://carshiftos.co.ke",
  publisher: {
    "@type": "Organization",
    name: "ShiftOS Technology Kenya",
    logo: {
      "@type": "ImageObject",
      url: "https://carshiftos.co.ke/favicon.png",
    },
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
      />
      <CentralLanding />
    </>
  );
}
