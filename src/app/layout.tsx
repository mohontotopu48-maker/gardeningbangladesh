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
  title: "ড্রিম এগ্রো — সবুজে বাঁচি প্রতিদিন",
  description:
    "ড্রিম এগ্রো সারা বাংলাদেশে ছাদ বাগানীদের হাতে সেরা মানের সার, বীজ ও কৃষি উপকরণ পৌঁছে দিতে কাজ করছে।",
  keywords: [
    "ড্রিম এগ্রো",
    "ছাদ বাগান",
    "জৈব সার",
    "বীজ",
    "কৃষি উপকরণ",
    "ক্যাশ অন ডেলিভারি",
    "বাংলাদেশ",
  ],
  authors: [{ name: "ড্রিম এগ্রো" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "ড্রিম এগ্রো — সবুজে বাঁচি প্রতিদিন",
    description:
      "ড্রিম এগ্রো সারা বাংলাদেশে ছাদ বাগানীদের হাতে সেরা মানের সার, বীজ ও কৃষি উপকরণ পৌঁছে দিতে কাজ করছে।",
    siteName: "ড্রিম এগ্রো",
    type: "website",
    locale: "bn_BD",
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
