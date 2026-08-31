"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Play,
  Truck,
  ShieldCheck,
  Sprout,
  Star,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "./animated-background";
import { shopInfo } from "@/lib/data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-brand-green-deep">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/gallery/home-last-bg.jpg"
          alt="Gardening Bangladesh ছাদ বাগান"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green-deep/95 via-brand-green-dark/75 to-brand-green/30" />
      </div>
      <AnimatedBackground variant="hero" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex min-h-[500px] sm:min-h-[560px] flex-col justify-center py-16 sm:py-20 max-w-2xl"
        >
          <motion.span
            variants={item}
            className="mb-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-sm ring-1 ring-white/25"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-brand-green-bright animate-pulse" />
            বাংলাদেশের #১ অনলাইন গার্ডেনিং শপ
          </motion.span>
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight text-shadow-lg"
          >
            সবুজে বাঁচি
            <br />
            <span className="text-brand-green-bright">প্রতিদিন</span>
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-2 text-lg sm:text-xl font-semibold text-white/95 text-shadow-md"
          >
            Grow Green, Live Better 🌱
          </motion.p>
          <motion.p
            variants={item}
            className="mt-4 text-base sm:text-lg text-white/90 leading-relaxed max-w-xl text-shadow-sm"
          >
            {shopInfo.description}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
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
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
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
            </motion.div>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3"
          >
            {[
              { icon: Truck, text: "সারা দেশে ডেলিভারি" },
              { icon: ShieldCheck, text: "১০০% আসল পণ্য" },
              { icon: Sprout, text: "ছাদ বাগানীদের পছন্দ" },
            ].map((b, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -2 }}
                className="flex items-center gap-2 text-white/90 text-sm"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20">
                  <b.icon className="h-4 w-4" />
                </span>
                {b.text}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Stats card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="hidden lg:block absolute right-4 bottom-16 w-72"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-2xl bg-white/95 backdrop-blur-md p-5 shadow-brand-lg"
          >
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
                  {shopInfo.stats.rating} রেটিং · {shopInfo.stats.customers}{" "}
                  কাস্টমার
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
          </motion.div>
        </motion.div>
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
