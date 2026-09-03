"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";

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
    src: "/gallery/slide-rooftop-mango.jpg",
    title: "Rooftop Gardening Revolution",
    subtitle: "Urban Green Spaces in Dhaka",
    description:
      "Create your own rooftop garden in the city. We deliver the best fertilizers, seeds & gardening tools across Bangladesh.",
    cta: "Start Your Garden",
    href: "/collection/plants-seeds",
  },
  {
    src: "/gallery/slide-rooftop-food.jpg",
    title: "Grow Your Own Food",
    subtitle: "Fresh & Organic",
    description:
      "From rooftop to table — grow fresh vegetables & fruits at home. Premium organic fertilizers ensure abundant harvest.",
    cta: "Browse Fertilizers",
    href: "/collection/fertilizers",
  },
  {
    src: "/gallery/slide-rooftop-view.jpg",
    title: "Your Green Sanctuary",
    subtitle: "Beautiful Garden Views",
    description:
      "Transform your rooftop into a lush green paradise. 240+ gardening products to build your dream garden.",
    cta: "Shop All Products",
    href: "#products",
  },
];

export function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback((dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const t = setInterval(() => paginate(1), 6000);
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
            initial={{ opacity: 0, x: direction * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -60 }}
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
                className="inline-flex items-center gap-1.5 rounded-full bg-brand-green-bright/20 px-3 py-1 text-xs font-semibold text-brand-green-bright ring-1 ring-brand-green-bright/30"
              >
                {slides[current].subtitle}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight text-shadow-lg"
              >
                {slides[current].title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-3 text-sm sm:text-base text-white/90 leading-relaxed max-w-md text-shadow-sm"
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
                  className="group inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-brand-green-deep shadow-lg transition-transform hover:scale-105"
                >
                  {slides[current].cta}
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                </a>
              </motion.div>
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
        <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 flex items-center gap-2 rounded-full bg-black/20 px-3 py-1.5 backdrop-blur-sm">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 bg-white shadow-md"
                  : "w-2.5 bg-white/40 hover:bg-white/70 hover:scale-110"
              }`}
              aria-label={`স্লাইড ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail strip */}
      <div className="bg-brand-green-deep border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <div className="flex items-center gap-3">
            <span className="hidden sm:flex items-center gap-1.5 text-xs text-white/60 shrink-0">
              ছবি নির্বাচন করুন
            </span>
            <div className="flex flex-1 gap-2 overflow-x-auto scrollbar-hide">
              {slides.map((slide, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`group relative h-14 w-20 sm:h-16 sm:w-24 shrink-0 overflow-hidden rounded-lg ring-2 transition-all ${
                    i === current
                      ? "ring-brand-green-bright opacity-100"
                      : "ring-transparent opacity-50 hover:opacity-90"
                  }`}
                >
                  <Image
                    src={slide.src}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
