import type { Metadata } from "next";
import FaqPageClient from "./FaqPageClient";
import { faqs } from "./faqs";

const faqTitle = "FAQ";
const faqDescription =
  "Answers to common questions about Car ShiftOS: pricing, payments, the workshop module, the marketplace, and how to get started.";

export const metadata: Metadata = {
  title: faqTitle,
  description: faqDescription,
  alternates: {
    canonical: "https://carshiftos.co.ke/faq",
  },
  openGraph: {
    title: "Car ShiftOS | FAQ",
    description: faqDescription,
    url: "https://carshiftos.co.ke/faq",
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
    title: "Car ShiftOS | FAQ",
    description: faqDescription,
    images: ["/assets/carshiftos-logo.png"],
  },
};

function fullAnswerText(faq: (typeof faqs)[number]): string {
  if (!("comparison" in faq) || !faq.comparison) return faq.answer;
  const rows = faq.comparison.rows
    .map((row) => `Instead of: ${row.left} Car ShiftOS: ${row.right}`)
    .join(" ");
  return `${faq.answer} ${rows}`;
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: fullAnswerText(faq),
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
