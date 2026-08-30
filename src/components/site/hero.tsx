import Image from "next/image";
import { ArrowLeft, Truck, ShieldCheck, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { shopInfo } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-brand-green-dark">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-banner.png"
          alt="ড্রিম এগ্রো ছাদ বাগান"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green-dark/85 via-brand-green-dark/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="flex min-h-[460px] sm:min-h-[520px] flex-col justify-center py-16 sm:py-20 max-w-2xl">
          <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm ring-1 ring-white/20">
            <Sprout className="h-3.5 w-3.5" />
            সারা বাংলাদেশে ক্যাশ অন ডেলিভারি
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {shopInfo.tagline}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/90 leading-relaxed">
            {shopInfo.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              asChild
              size="lg"
              className="bg-white text-brand-green-dark hover:bg-white/90 font-semibold shadow-lg"
            >
              <a href="#products">
                সব পণ্য দেখুন
                <ArrowLeft className="h-4 w-4 ml-1.5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm"
            >
              <a href={`tel:${shopInfo.phone}`}>অর্ডার করতে কল করুন</a>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                <Truck className="h-4 w-4" />
              </span>
              সারা দেশে ডেলিভারি
            </div>
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                <ShieldCheck className="h-4 w-4" />
              </span>
              ১০০% আসল পণ্য
            </div>
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                <Sprout className="h-4 w-4" />
              </span>
              ছাদ বাগানীদের পছন্দ
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          className="w-full h-[30px] sm:h-[40px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,32L48,32C96,32,192,32,288,34.7C384,37,480,43,576,42.7C672,43,768,37,864,34.7C960,32,1056,32,1152,32C1248,32,1344,32,1392,32L1440,32L1440,60L0,60Z"
          />
        </svg>
      </div>
    </section>
  );
}
