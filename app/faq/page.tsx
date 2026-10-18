import type { Metadata } from "next";
import FaqPageClient from "./FaqPageClient";
import { faqs } from "./faqs";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about Car ShiftOS: pricing, payments, the workshop module, the marketplace, and how to get started.",
  alternates: {
    canonical: "https://carshiftos.co.ke/faq",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FaqPageClient />
    </>
  );
}
