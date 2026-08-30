"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowLeft, Leaf, Sprout } from "lucide-react";

type BannerSlide = {
  src: string;
  badge: string;
  title: string;
  highlight: string;
  description: string;
  cta: string;
  href: string;
};

const slides: BannerSlide[] = [
  {
    src: "/header-slide-1.jpg",
    badge: "বাগানের দৃশ্য",
    title: "সবুজে ঘেরা",
    highlight: "আপনার বাগান",
    description:
      "ফুল, শাকসবজি আর ফলের বাগানে প্রাকৃতিক সৌন্দর্য। আমাদের ২২০+ পণ্য দিয়ে গড়ে তুলুন আপনার স্বপ্নের বাগান।",
    cta: "বাগানের পণ্য দেখুন",
    href: "#products",
  },
  {
    src: "/header-slide-2.jpg",
    badge: "ইনডোর প্লান্ট",
    title: "ঘরে সবুজের",
    highlight: "ছোঁয়া দিন",
    description:
      "স্নেক প্লান্ট, মানি প্লান্ট, পিস লিলি সহ ১২+ জাতের এয়ার-পিউরিফাইং ইনডোর প্লান্ট। ঘরের বাতাস পরিষ্কার করুন।",
    cta: "ইনডোর প্লান্ট কিনুন",
    href: "/category/9",
  },
];

export function HeaderBanner() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback((dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const t = setInterval(() => paginate(1), 5500);
    return () => clearInterval(t);
  }, [paginate]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") paginate(1);
      if (e.key === "ArrowLeft") paginate(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [paginate]);

  return (
    <section className="relative w-full overflow-hidden bg-brand-green-deep">
      <div className="relative h-[380px] sm:h-[440px] lg:h-[500px] w-full">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={current}
            custom={direction}
            initial={{ opacity: 0, scale: 1.08, x: direction * 80 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95, x: direction * -80 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={slides[current].src}
              alt={slides[current].title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-green-deep/90 via-brand-green-dark/55 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-green-deep/60 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Content overlay */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="max-w-lg"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-1.5 rounded-full bg-brand-green-bright/25 px-3 py-1.5 text-xs font-bold text-brand-green-bright ring-1 ring-brand-green-bright/40 backdrop-blur-sm"
              >
                <Leaf className="h-3.5 w-3.5" />
                {slides[current].badge}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight"
              >
                {slides[current].title}{" "}
                <span className="text-brand-green-bright">
                  {slides[current].highlight}
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-3 text-sm sm:text-base text-white/85 leading-relaxed max-w-md"
              >
                {slides[current].description}
              </motion.p>
              <motion.a
                href={slides[current].href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="group mt-5 inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-brand-green-deep shadow-brand-lg"
              >
                {slides[current].cta}
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              </motion.a>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Arrows */}
        <button
          onClick={() => paginate(-1)}
          className="group absolute left-3 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white ring-1 ring-white/40 transition-all hover:bg-white hover:text-brand-green-deep hover:scale-110 hover:shadow-brand-lg"
          aria-label="পূর্ববর্তী"
        >
          <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-0.5" />
        </button>
        <button
          onClick={() => paginate(1)}
          className="group absolute right-3 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white ring-1 ring-white/40 transition-all hover:bg-white hover:text-brand-green-deep hover:scale-110 hover:shadow-brand-lg"
          aria-label="পরবর্তী"
        >
          <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 flex items-center gap-2 rounded-full bg-black/25 px-3 py-1.5 backdrop-blur-sm">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "h-2.5 w-7 bg-white shadow-md"
                  : "h-2.5 w-2.5 bg-white/40 hover:bg-white/70 hover:scale-110"
              }`}
              aria-label={`স্লাইড ${i + 1}`}
            />
          ))}
        </div>

        {/* Slide counter */}
        <div className="absolute top-4 right-4 z-20 hidden sm:flex items-center gap-1.5 rounded-full bg-black/25 px-3 py-1.5 backdrop-blur-sm text-xs font-semibold text-white">
          <Sprout className="h-3.5 w-3.5 text-brand-green-bright" />
          {current + 1} / {slides.length}
        </div>
      </div>

      {/* Thumbnail strip */}
      <div className="bg-brand-green-deep border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-2.5">
          <div className="flex items-center justify-center gap-3">
            {slides.map((slide, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className={`group relative h-12 w-20 sm:h-14 sm:w-24 shrink-0 overflow-hidden rounded-lg ring-2 transition-all ${
                  i === current
                    ? "ring-brand-green-bright opacity-100 scale-105"
                    : "ring-transparent opacity-50 hover:opacity-90"
                }`}
              >
                <Image
                  src={slide.src}
                  alt={slide.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                  sizes="96px"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
