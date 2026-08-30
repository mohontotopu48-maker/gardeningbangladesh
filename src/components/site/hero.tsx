import Image from "next/image";
import { ArrowLeft, Play, Truck, ShieldCheck, Sprout, Star, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { shopInfo } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-brand-green-deep">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-banner.png"
          alt="Gardening Bangladesh ছাদ বাগান"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green-deep/95 via-brand-green-dark/75 to-brand-green/30" />
        {/* Decorative gradient orbs */}
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-brand-green/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-brand-green-bright/20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="flex min-h-[500px] sm:min-h-[560px] flex-col justify-center py-16 sm:py-20 max-w-2xl">
          <span className="mb-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-sm ring-1 ring-white/25">
            <span className="flex h-1.5 w-1.5 rounded-full bg-brand-green-bright animate-pulse" />
            বাংলাদেশের #১ অনলাইন গার্ডেনিং শপ
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
            সবুজে বাঁচি
            <br />
            <span className="text-brand-green-bright">প্রতিদিন</span>
          </h1>
          <p className="mt-2 text-lg sm:text-xl font-semibold text-white/95">
            Grow Green, Live Better 🌱
          </p>
          <p className="mt-4 text-base sm:text-lg text-white/85 leading-relaxed max-w-xl">
            {shopInfo.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              asChild
              size="lg"
              className="bg-white text-brand-green-deep hover:bg-white/90 font-bold shadow-brand-lg rounded-full h-12 px-7"
            >
              <a href="#products">
                এখনই কেনাকাটা করুন
                <ArrowLeft className="h-4 w-4 ml-1.5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm rounded-full h-12 px-7 font-semibold"
            >
              <a href="#videos">
                <Play className="h-4 w-4 mr-1.5 fill-white" />
                ভিডিও দেখুন
              </a>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20">
                <Truck className="h-4 w-4" />
              </span>
              সারা দেশে ডেলিভারি
            </div>
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20">
                <ShieldCheck className="h-4 w-4" />
              </span>
              ১০০% আসল পণ্য
            </div>
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20">
                <Sprout className="h-4 w-4" />
              </span>
              ছাদ বাগানীদের পছন্দ
            </div>
          </div>
        </div>

        {/* Stats card */}
        <div className="hidden lg:block absolute right-4 bottom-16 w-72">
          <div className="rounded-2xl bg-white/95 backdrop-blur-md p-5 shadow-brand-lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex -space-x-1">
                {["🌱", "🌿", "🪴", "🍃"].map((e, i) => (
                  <span
                    key={i}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-green-light ring-2 ring-white text-lg"
                  >
                    {e}
                  </span>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">
                  {shopInfo.stats.rating} রেটিং · {shopInfo.stats.customers} কাস্টমার
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-brand-green-tint p-3">
                <p className="text-2xl font-extrabold text-brand-green-dark">
                  {shopInfo.stats.products}
                </p>
                <p className="text-xs text-muted-foreground">পণ্য</p>
              </div>
              <div className="rounded-xl bg-brand-green-tint p-3">
                <p className="text-2xl font-extrabold text-brand-green-dark">
                  {shopInfo.stats.districts}
                </p>
                <p className="text-xs text-muted-foreground">জেলায় ডেলিভারি</p>
              </div>
            </div>
            <Button
              asChild
              className="mt-4 w-full bg-brand-green hover:bg-brand-green-dark rounded-full font-semibold"
            >
              <a href={`tel:${shopInfo.phone}`}>
                <Phone className="h-4 w-4 mr-1.5" />
                অর্ডার করতে কল করুন
              </a>
            </Button>
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
