import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const hindSiliguri = Hind_Siliguri({
  variable: "--font-bengali",
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gardening Bangladesh — সবুজে বাঁচি প্রতিদিন | সার, বীজ ও কৃষি উপকরণ",
  description:
    "বাংলাদেশের #১ অনলাইন গার্ডেনিং শপ। জৈব সার, রাসায়নিক সার, বীজ, টব, গার্ডেন টুলস ও কীটনাশক — ক্যাশ অন ডেলিভারিতে সারা দেশে। Gardening Bangladesh.",
  keywords: [
    "Gardening Bangladesh",
    "gardeningbangladesh",
    "ছাদ বাগান",
    "জৈব সার",
    "বীজ",
    "কৃষি উপকরণ",
    "রাসায়নিক সার",
    "ক্যাশ অন ডেলিভারি",
    "বাংলাদেশ",
    "rooftop gardening Bangladesh",
  ],
  authors: [{ name: "Gardening Bangladesh" }],
  icons: {
    icon: "/gb-logo-new-128.jpg",
    appleIcon: "/gb-logo-new-256.jpg",
  },
  openGraph: {
    title: "Gardening Bangladesh — সবুজে বাঁচি প্রতিদিন",
    description:
      "বাংলাদেশের #১ অনলাইন গার্ডেনিং শপ। সার, বীজ ও কৃষি উপকরণ — ক্যাশ অন ডেলিভারিতে সারা দেশে।",
    siteName: "Gardening Bangladesh",
    type: "website",
    locale: "bn_BD",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gardening Bangladesh",
    description: "বাংলাদেশের #১ অনলাইন গার্ডেনিং শপ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <body
        className={`${hindSiliguri.variable} font-bengali antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
