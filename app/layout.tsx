import type { Metadata } from "next";
import Script from "next/script";
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
import { CookieConsentBanner } from "@/components/CookieConsentBanner";

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
      default: "Car ShiftOS | Car Yard & Dealer Management System Kenya",
      template: "Car ShiftOS | %s"
    },
    description: "Kenya's leading dealer management system for car yards: inventory, CRM, import tracking, workshop and payments in one place.",
    keywords: [
      "best car yard management software Kenya",
      "car dealership software Kenya",
      "car dealership software Kenya pricing",
      "car yard management system Kenya",
      "dealer management system Kenya",
      "car yard software Kenya",
    ],
    authors: [{ name: "Car ShiftOS Team" }],
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
      title: "Car ShiftOS | Best Car Yard & Dealer Management System in Kenya",
      description: "The leading dealer management system for car yards in Kenya.",
      images: ["/assets/carshiftos-logo.png"],
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
        {/* Consent Mode default — must run before the GTM script below.
            Denies analytics/ad storage until CookieConsentBanner records a
            real choice and pushes a 'consent' 'update' overriding this. */}
        <Script
          id="consent-default"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push(['consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'wait_for_update': 500
              }]);
            `,
          }}
        />
        {/* Google Tag Manager — site-wide, every page. Google's official
            snippet: pushes the gtm.start event the container needs to
            initialize, then creates and inserts the gtm.js script tag
            itself. A plain gtag()-style push here does nothing for GTM
            (that command format is for gtag.js installed directly,
            without GTM) and left data collection never actually starting. */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.start'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-P8TCS2LZ');
            `,
          }}
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P8TCS2LZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "name": "Car ShiftOS",
                "alternateName": ["ShiftOS", "ShiftOS Kenya", "ShiftOS Dealer Management System"],
                "operatingSystem": "Web-based",
                "applicationCategory": "BusinessApplication",
                "description": "Car ShiftOS is the best car yard and dealer management system in Kenya, built for independent vehicle dealerships. Features include real-time showroom sync, inventory lifecycle tracking, and organised payment records.",
                "publisher": {
                  "@type": "Organization",
                  "name": "Car ShiftOS",
                  "alternateName": ["ShiftOS", "ShiftOS Kenya"],
                  "url": "https://carshiftos.co.ke",
                  "logo": "https://carshiftos.co.ke/favicon.png",
                  "sameAs": [
                    "https://www.facebook.com/profile.php?id=61578542036938",
                    "https://www.instagram.com/carshiftos",
                    "https://www.linkedin.com/company/carshiftos",
                    "https://www.tiktok.com/@carshiftos"
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
                  "name": "Car ShiftOS",
                  "alternateName": ["ShiftOS", "ShiftOS Kenya"],
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Nairobi",
                    "addressCountry": "KE"
                  },
                  "telephone": "+254732009268",
                  "email": "carshiftos@gmail.com",
                  "image": "https://carshiftos.co.ke/assets/shiftos-hero.png",
                  "sameAs": [
                    "https://www.facebook.com/profile.php?id=61578542036938",
                    "https://www.instagram.com/carshiftos",
                    "https://www.linkedin.com/company/carshiftos",
                    "https://www.tiktok.com/@carshiftos"
                  ]
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
              <CookieConsentBanner />
            </SmoothScrollProvider>
          </Providers>
      </body>
    </html>
  );
}
