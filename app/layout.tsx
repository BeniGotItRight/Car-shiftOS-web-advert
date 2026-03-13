import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";
import { WebHeader } from "./components/WebHeader";
import { WebFooter } from "./components/WebFooter";
import { Toaster } from "sonner";
import { SmoothScrollProvider } from "@/components/shared/SmoothScrollProvider";
import { WhatsAppButton } from "./components/public/WhatsAppButton";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export async function generateMetadata(): Promise<Metadata> {
  // We can't use useTenant here as it's a server component context or root layout
  // But we can detect from headers in a real production env, or keep it generic
  return {
    title: {
      default: "Car ShiftOS | Industrial Automotive Ecosystem",
      template: "%s | Car ShiftOS"
    },
    description: "Scale your dealership with ShiftOS. The world's most advanced automotive SaaS for car yards. Experience high-performance inventory management and instant digital showrooms.",
    keywords: [
      "Automotive SaaS Kenya", 
      "Car Yard Management System East Africa", 
      "Dealership Marketing Software", 
      "Inventory Management for Car Yards", 
      "Kenya Automotive Software", 
      "Digital Showroom for Dealers", 
      "Automotive Sales Automation", 
      "Car Dealer CRM Kenya", 
      "Automotive ERP Kenya", 
      "Dealer Website Builder", 
      "ShiftOS Car Management",
      "Used Car Yard Software",
      "Japanese Import Management System",
      "Automotive Asset Tracking",
      "Car ShiftOS logo",
      "Vehicle Management Software Kenya"
    ],
    authors: [{ name: "ShiftOS Architecture Team" }],
    creator: "Car ShiftOS",
    publisher: "Car ShiftOS",
    metadataBase: new URL("https://carshiftos.co.ke"),
    alternates: {
      canonical: "/",
    },
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/favicon.ico", sizes: "any" },
      ],
      apple: "/assets/carshiftos-logo.png",
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
    viewport: "width=device-width, initial-scale=1",
    themeColor: "#000000",
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
      title: "Car ShiftOS | Industrial Automotive Ecosystem",
      description: "Scale your dealership with military-precision technology. Premium inventory management and instant digital showrooms.",
      url: "https://carshiftos.co.ke",
      siteName: "Car ShiftOS",
      images: [
        {
          url: "/assets/social-preview.png",
          width: 1200,
          height: 630,
          alt: "Car ShiftOS - Industrial Automotive Ecosystem",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Car ShiftOS | Industrial Automotive Ecosystem",
      description: "Next-gen automotive SaaS for luxury dealerships.",
      images: ["/assets/social-preview.png"],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground selection:bg-slate-500/30`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "ShiftOS",
              "operatingSystem": "Web-based",
              "applicationCategory": "BusinessApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "description": "Next-gen automotive SaaS for luxury vehicle dealerships.",
              "publisher": {
                "@type": "Organization",
                "name": "ShiftOS",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://carshiftos.co.ke/assets/carshiftos-logo.png"
                }
              }
            })
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
