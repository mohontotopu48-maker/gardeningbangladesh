"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ZoomIn, X, Expand, ArrowLeft } from "lucide-react";

type Slide = {
  src: string;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  href: string;
};

const slides: Slide[] = [
  {
    src: "/gallery/gardening-bangladesh-dhaka-rooftop-night.png",
    title: "ঢাকার ছাদে সবুজ বিপ্লব",
    subtitle: "Rooftop Gardening in Dhaka",
    description:
      "শহরের কংক্রিটের জগতে ছাদ বাগান তৈরি করে সবুজ প্রকৃতির সংস্পর্শে আসুন। আমরা পৌঁছে দিচ্ছি সেরা সার, বীজ ও কৃষি উপকরণ।",
    cta: "ছাদ বাগান শুরু করুন",
    href: "/collection/plants-seeds",
  },
  {
    src: "/gallery/gardening-bangladesh-dhaka-rooftop-aerial.png",
    title: "সবুজে ভরা আপনার বাগান",
    subtitle: "Beautiful Garden Views",
    description:
      "ফুল, শাকসবজি আর ফলের বাগানে প্রাকৃতিক সৌন্দর্য। আমাদের ২২০+ পণ্য দিয়ে গড়ে তুলুন আপনার স্বপ্নের বাগান।",
    cta: "বাগানের পণ্য দেখুন",
    href: "#products",
  },
  {
    src: "/gallery/gardening-bangladesh-dhaka-rooftop-lounge.png",
    title: "ছাদের সবুজ বিশ্রাম কোণ",
    subtitle: "Rooftop Lounge Garden",
    description:
      "ছাদের এক কোণে সবুজ গাছপালা দিয়ে তৈরি করুন আপনার বিশ্রামের জায়গা। ইনডোর ও আউটডোর প্লান্টের সেরা সংগ্রহ।",
    cta: "প্লান্ট সংগ্রহ দেখুন",
    href: "/category/9",
  },
];

export function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [zoomed, setZoomed] = useState<number | null>(null);

  const paginate = useCallback((dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + slides.length) % slides.length);
  }, []);

  // Auto-advance
  useEffect(() => {
    const t = setInterval(() => paginate(1), 6000);
    return () => clearInterval(t);
  }, [paginate]);

  // Keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (zoomed !== null) {
        if (e.key === "Escape") setZoomed(null);
        if (e.key === "ArrowRight") setZoomed((z) => (z! + 1) % slides.length);
        if (e.key === "ArrowLeft")
          setZoomed((z) => (z! - 1 + slides.length) % slides.length);
        return;
      }
      if (e.key === "ArrowRight") paginate(1);
      if (e.key === "ArrowLeft") paginate(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [paginate, zoomed]);

  return (
    <section className="relative w-full overflow-hidden bg-brand-green-deep">
      <div className="relative h-[420px] sm:h-[500px] lg:h-[560px] w-full">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={current}
            custom={direction}
            initial={{ opacity: 0, scale: 1.05, x: direction * 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95, x: direction * -60 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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
            <div className="absolute inset-0 bg-gradient-to-r from-brand-green-deep/90 via-brand-green-dark/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-green-deep/70 via-transparent to-transparent" />
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
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-xl"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-1.5 rounded-full bg-brand-green-bright/20 px-3 py-1 text-xs font-semibold text-brand-green-bright ring-1 ring-brand-green-bright/40 backdrop-blur-sm"
              >
                {slides[current].subtitle}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight"
              >
                {slides[current].title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-3 text-sm sm:text-base text-white/85 leading-relaxed max-w-lg"
              >
                {slides[current].description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-5 flex items-center gap-3"
              >
                <a
                  href={slides[current].href}
                  className="group inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-brand-green-deep shadow-lg transition-all hover:scale-105 hover:shadow-brand-lg"
                >
                  {slides[current].cta}
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                </a>
                <button
                  onClick={() => setZoomed(current)}
                  className="group inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-white/10 px-4 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-105"
                >
                  <ZoomIn className="h-4 w-4 transition-transform group-hover:scale-125" />
                  জুম করে দেখুন
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Arrows */}
        <button
          onClick={() => paginate(-1)}
          className="group absolute left-3 top-1/2 z-20 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white ring-1 ring-white/40 transition-all hover:bg-white hover:text-brand-green-deep hover:scale-110 hover:shadow-brand-lg"
          aria-label="পূর্ববর্তী"
        >
          <ChevronLeft className="h-6 w-6 transition-transform group-hover:-translate-x-0.5" />
        </button>
        <button
          onClick={() => paginate(1)}
          className="group absolute right-3 top-1/2 z-20 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white ring-1 ring-white/40 transition-all hover:bg-white hover:text-brand-green-deep hover:scale-110 hover:shadow-brand-lg"
          aria-label="পরবর্তী"
        >
          <ChevronRight className="h-6 w-6 transition-transform group-hover:translate-x-0.5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 flex items-center gap-2 rounded-full bg-black/20 px-3 py-1.5 backdrop-blur-sm">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "h-2.5 w-8 bg-white shadow-md"
                  : "h-2.5 w-2.5 bg-white/40 hover:bg-white/70 hover:scale-110"
              }`}
              aria-label={`স্লাইড ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail strip with zoom hint */}
      <div className="bg-brand-green-deep border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <div className="flex items-center gap-3">
            <span className="hidden sm:flex items-center gap-1.5 text-xs text-white/60 shrink-0">
              <Expand className="h-3.5 w-3.5" />
              ক্লিক করে জুম করুন
            </span>
            <div className="flex flex-1 gap-2 overflow-x-auto scrollbar-hide">
              {slides.map((slide, i) => (
                <button
                  key={i}
                  onClick={() => setZoomed(i)}
                  className={`group relative h-16 w-24 shrink-0 overflow-hidden rounded-lg ring-2 transition-all ${
                    i === current
                      ? "ring-brand-green-bright opacity-100"
                      : "ring-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={slide.src}
                    alt={slide.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                    sizes="96px"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-colors">
                    <ZoomIn className="h-4 w-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Zoom modal */}
      <AnimatePresence>
        {zoomed !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            onClick={() => setZoomed(null)}
          >
            <button
              onClick={() => setZoomed(null)}
              className="absolute top-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/30 transition-colors hover:bg-white/20"
              aria-label="বন্ধ করুন"
            >
              <X className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setZoomed((z) => ((z! - 1 + slides.length) % slides.length));
              }}
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/30 transition-colors hover:bg-white/20"
              aria-label="পূর্ববর্তী"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setZoomed((z) => ((z! + 1) % slides.length));
              }}
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/30 transition-colors hover:bg-white/20"
              aria-label="পরবর্তী"
            >
              <ChevronRight className="h-7 w-7" />
            </button>
            <motion.div
              key={zoomed}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative h-full w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={slides[zoomed].src}
                alt={slides[zoomed].title}
                fill
                className="object-contain"
                sizes="100vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-brand-green-bright text-xs font-semibold">
                  {slides[zoomed].subtitle}
                </p>
                <h3 className="text-white text-xl font-bold mt-1">
                  {slides[zoomed].title}
                </h3>
                <p className="text-white/70 text-sm mt-1 max-w-2xl">
                  {slides[zoomed].description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
