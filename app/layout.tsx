import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { WebHeader } from "./components/WebHeader";
import { WebFooter } from "./components/WebFooter";
import { Toaster } from "sonner";
import { SmoothScrollProvider } from "@/components/shared/SmoothScrollProvider";
import { WhatsAppButton } from "./components/public/WhatsAppButton";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export async function generateMetadata(): Promise<Metadata> {
  // We can't use useTenant here as it's a server component context or root layout
  // But we can detect from headers in a real production env, or keep it generic
  return {
    title: {
      default: "Car ShiftOS | Best Car Yard Management System Kenya",
      template: "Car ShiftOS | %s"
    },
    description: "ShiftOS is the best dealership automation system in Kenya. Scale your car yard in Nairobi and across the country with high-fidelity security assurance, inventory management, and automated sales.",
    keywords: [
      "best dealership automation system Kenya",
      "best dealership software Kenya",
      "best car yard management system Kenya",
      "best car yard management system Nairobi",
      "best car yard management system Mombasa",
      "Kisumu car yard software",
      "Nakuru dealership automation system",
      "Eldoret car dealer ERP",
      "dealership automation system Nairobi",
      "top automotive SaaS Kenya",
      "car dealer ERP Nairobi",
      "Automotive SaaS Kenya", 
      "Car Yard Management System East Africa", 
      "how to manage a car yard in Kenya",
      "automotive inventory management software Kenya",
      "car dealership marketing software Nairobi",
      "Japanese car import management Kenya",
      "NTSA TIMS integration software",
      "M-Pesa payment for car dealers",
      "legal agreements for car sales Kenya",
      "ShiftOS automotive technology",
      "Benson Motari Lead Developer",
      "luxury car showroom software Kenya",
      "Kenya car dealer inventory sync",
      "automated car sale contracts Kenya",
      "best CRM for car yards Kenya",
      "car dealership operational excellence",
      "ShiftOS vs traditional car yard management"
    ],
    authors: [{ name: "ShiftOS Architecture Team" }],
    creator: "Car ShiftOS",
    publisher: "Car ShiftOS",
    metadataBase: new URL("https://carshiftos.co.ke"),
    icons: {
      icon: "/favicon.png",
      apple: "/apple-icon.png",
    },
    applicationName: "Car ShiftOS",
    appleWebApp: {
      capable: true,
      title: "Car ShiftOS",
      statusBarStyle: "black-translucent",
    },
    formatDetection: {
      telephone: true,
      address: true,
      email: true,
    },
    category: "technology",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: "Car ShiftOS | Best Car Yard Management System in Kenya",
      description: "Scale your dealership with high-fidelity security assurance. Premium inventory management, automated SEO, and instant digital showrooms for the modern Kenyan dealer.",
      url: "https://carshiftos.co.ke",
      siteName: "Car ShiftOS Kenya",
      images: [
        {
          url: "/assets/shiftos-hero.png",
          width: 1200,
          height: 630,
          alt: "ShiftOS - The Best Car Yard Management System in Kenya",
        },
      ],
      locale: "en_KE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Car ShiftOS | Best Car Yard Management System in Kenya",
      description: "The premier automotive SaaS for luxury dealerships in Kenya. Scale your yard with high-fidelity security assurance.",
      images: ["/assets/shiftos-hero.png"],
      creator: "@carshiftos",
    },
    verification: {
      google: "google-site-verification-id", // User should replace this
    },
    alternates: {
      canonical: "https://carshiftos.co.ke",
    },
  };
}

export function generateViewport() {
  return {
    themeColor: "#000000",
    viewport: "width=device-width, initial-scale=1",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${inter.variable} font-sans antialiased bg-background text-foreground selection:bg-slate-500/30`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "name": "ShiftOS",
                "alternateName": "Car ShiftOS",
                "operatingSystem": "Web-based",
                "applicationCategory": "BusinessApplication",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "KES",
                  "availability": "https://schema.org/InStock"
                },
                "description": "ShiftOS is the best car yard management system in Kenya, providing elite automation for luxury vehicle dealerships. Features include real-time showroom sync, inventory lifecycle tracking, and M-Pesa integration.",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "128"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "ShiftOS Technology Kenya",
                  "url": "https://carshiftos.co.ke",
                  "logo": "https://carshiftos.co.ke/favicon.png",
                  "sameAs": [
                    "https://facebook.com/carshiftos",
                    "https://twitter.com/carshiftos",
                    "https://linkedin.com/company/carshiftos"
                  ]
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "serviceType": "Car Yard Management System",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "ShiftOS Kenya",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Nairobi",
                    "addressCountry": "KE"
                  },
                  "telephone": "+254732009268",
                  "email": "carshiftos@gmail.com",
                  "image": "https://carshiftos.co.ke/assets/shiftos-hero.png"
                },
                "areaServed": {
                  "@type": "Country",
                  "name": "Kenya"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Dealership Automation Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Inventory Lifecycle Tracking"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Real-Time Showroom Sync"
                      }
                    }
                  ]
                }
              }
            ])
          }}
        />
          <Providers>
            <SmoothScrollProvider>
              <div className="min-h-screen flex flex-col">
                <WebHeader />
                <main className="flex-1">
                  {children}
                </main>
                <WebFooter />
              </div>
              <WhatsAppButton />
              <Toaster position="top-right" richColors />
            </SmoothScrollProvider>
          </Providers>
      </body>
    </html>
  );
}
