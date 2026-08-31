"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Leaf } from "lucide-react";
import { headerGalleryImages } from "@/lib/gallery-data";

export function HeaderGallery() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback((dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + headerGalleryImages.length) % headerGalleryImages.length);
  }, []);

  useEffect(() => {
    const t = setInterval(() => paginate(1), 4500);
    return () => clearInterval(t);
  }, [paginate]);

  return (
    <section className="relative w-full overflow-hidden bg-brand-green-deep">
      <div className="relative h-[200px] sm:h-[240px] lg:h-[280px] w-full">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={current}
            custom={direction}
            initial={{ opacity: 0, scale: 1.05, x: direction * 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.98, x: direction * -50 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={headerGalleryImages[current]}
              alt="Gardening Bangladesh gallery"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-green-deep/80 via-brand-green-deep/30 to-brand-green-deep/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-green-deep/50 via-transparent to-brand-green-deep/30" />
          </motion.div>
        </AnimatePresence>

        {/* Center overlay text */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-center px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-center"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold text-white ring-1 ring-white/25 backdrop-blur-sm"
              >
                <Leaf className="h-3 w-3" />
                Gardening Bangladesh
              </motion.span>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-2 text-base sm:text-lg font-bold text-white drop-shadow-lg"
              >
                সবুজে বাঁচি প্রতিদিন 🌱
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Arrows */}
        <button
          onClick={() => paginate(-1)}
          className="group absolute left-2 top-1/2 z-20 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white ring-1 ring-white/40 transition-all hover:bg-white hover:text-brand-green-deep hover:scale-110"
          aria-label="পূর্ববর্তী"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          onClick={() => paginate(1)}
          className="group absolute right-2 top-1/2 z-20 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white ring-1 ring-white/40 transition-all hover:bg-white hover:text-brand-green-deep hover:scale-110"
          aria-label="পরবর্তী"
        >
          <ChevronRight className="h-4 w-4" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-2 left-1/2 z-20 -translate-x-1/2 flex items-center gap-1.5">
          {headerGalleryImages.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-5 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`ছবি ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
