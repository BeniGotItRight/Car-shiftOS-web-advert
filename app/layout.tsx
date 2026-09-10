import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { WebHeader } from "./components/WebHeader";
import { WebFooter } from "./components/WebFooter";
import { Toaster } from "sonner";
import { SmoothScrollProvider } from "@/components/shared/SmoothScrollProvider";
import { WhatsAppButton } from "./components/public/WhatsAppButton";
import { StickyBar } from "@/components/StickyBar";
import { CursorGlow } from "@/components/CursorGlow";

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
      default: "Car ShiftOS | Best Car Yard & Dealer Management System Kenya",
      template: "Car ShiftOS | %s"
    },
    description: "ShiftOS is Kenya's leading dealer management system. Inventory, CRM, import tracking, workshop management, and payments, all in one place for car yards and dealerships in Nairobi and across Kenya.",
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
      title: "Car ShiftOS | Best Car Yard & Dealer Management System in Kenya",
      description: "Inventory, CRM, import tracking, workshop management, and payments, the dealer management system for Kenyan car yards.",
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
      title: "Car ShiftOS | Best Car Yard & Dealer Management System in Kenya",
      description: "The leading dealer management system for car yards in Kenya.",
      images: ["/assets/shiftos-hero.png"],
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
                "alternateName": ["Car ShiftOS", "ShiftOS Dealer Management System"],
                "operatingSystem": "Web-based",
                "applicationCategory": "BusinessApplication",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "KES",
                  "availability": "https://schema.org/InStock"
                },
                "description": "ShiftOS is the best car yard and dealer management system in Kenya, built for independent vehicle dealerships. Features include real-time showroom sync, inventory lifecycle tracking, and trusted payment integration.",
                "publisher": {
                  "@type": "Organization",
                  "name": "ShiftOS Technology Kenya",
                  "url": "https://carshiftos.co.ke",
                  "logo": "https://carshiftos.co.ke/favicon.png",
                  "sameAs": [
                    "https://www.instagram.com/carshiftos"
                  ]
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "serviceType": "Car Yard Management System",
                "description": "A dealer management system (DMS) built for Kenyan car yards: inventory, CRM, workshop, and payment tracking in one platform.",
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
              <CursorGlow />
              <StickyBar />
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
