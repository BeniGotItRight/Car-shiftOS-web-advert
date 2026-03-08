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
    description: "The next-generation automotive SaaS for luxury vehicle dealerships. Automate pipelines, manage inventory with military precision, and deploy branded showrooms instantly.",
    keywords: ["Automotive SaaS", "Dealership Management System", "Car Yard Software", "Luxury Vehicle Inventory", "ShiftOS", "Automotive CRM", "Kenya Auto Tech"],
    authors: [{ name: "ShiftOS Architecture Team" }],
    creator: "ShiftOS",
    publisher: "ShiftOS",
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
      url: "https://carshiftos.com",
      siteName: "Car ShiftOS",
      images: [
        {
          url: "/assets/shiftos-hero.png",
          width: 1200,
          height: 630,
          alt: "ShiftOS Core Architecture Preview",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Car ShiftOS | Industrial Automotive Ecosystem",
      description: "Next-gen automotive SaaS for luxury dealerships.",
      images: ["/assets/shiftos-hero.png"],
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
                  "url": "https://carshiftos.com/assets/shiftos-hero.png"
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
              <Toaster position="top-right" richColors />
            </SmoothScrollProvider>
          </Providers>
      </body>
    </html>
  );
}
