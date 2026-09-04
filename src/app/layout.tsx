import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SEO_CONFIG, generateMetadata, getOrganizationJSONLD, getWebsiteJSONLD, getStoreJSONLD } from "@/lib/seo";

const hindSiliguri = Hind_Siliguri({
  variable: "--font-bengali",
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = generateMetadata({
  title: undefined, // Use default
  description: SEO_CONFIG.defaultDescription,
  keywords: SEO_CONFIG.keywords,
  path: "",
  image: SEO_CONFIG.ogImage,
});

export const viewport = {
  themeColor: "#3CB44C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <head>
        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getOrganizationJSONLD()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getWebsiteJSONLD()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getStoreJSONLD()),
          }}
        />
      </head>
      <body
        className={`${hindSiliguri.variable} font-bengali antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
