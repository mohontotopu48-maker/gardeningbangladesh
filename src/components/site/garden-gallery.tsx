"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn, Camera } from "lucide-react";
import { galleryImages } from "@/lib/gallery-data";

export function GardenGallery() {
  const [zoomed, setZoomed] = useState<number | null>(null);

  return (
    <section className="bg-brand-cream relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #0d4f1c 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-green-light px-3 py-1 text-xs font-semibold text-brand-green-dark">
            <Camera className="h-3.5 w-3.5" />
            গ্যালারি
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-brand-green-deep">
            আমাদের বাগানের <span className="text-brand-green">দৃশ্যাবলী</span>
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            বাংলাদেশের ছাদ, বাড়ি ও নার্সারি থেকে সবুজ মুহূর্ত — ক্লিক করে বড় করে দেখুন
          </p>
        </motion.div>

        {/* Masonry grid */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 [&>*]:mb-3">
          {galleryImages.map((img, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.5) }}
              whileHover={{ y: -4 }}
              onClick={() => setZoomed(i)}
              className="group relative block w-full overflow-hidden rounded-2xl shadow-premium break-inside-avoid"
            >
              <div className="relative aspect-square">
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                {/* Zoom icon */}
                <span className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100">
                  <ZoomIn className="h-4 w-4" />
                </span>
                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-3 text-left opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-xs font-semibold text-white drop-shadow">{img.title}</p>
                </div>
              </div>
            </motion.button>
          ))}
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
              className="absolute top-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/30 hover:bg-white/20"
              aria-label="বন্ধ করুন"
            >
              <X className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setZoomed((z) => ((z! - 1 + galleryImages.length) % galleryImages.length));
              }}
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/30 hover:bg-white/20"
              aria-label="পূর্ববর্তী"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setZoomed((z) => ((z! + 1) % galleryImages.length));
              }}
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/30 hover:bg-white/20"
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
              className="relative h-full w-full max-w-3xl max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[zoomed].src}
                alt={galleryImages[zoomed].title}
                fill
                className="object-contain"
                sizes="100vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-center">
                <h3 className="text-white text-lg font-bold">
                  {galleryImages[zoomed].title}
                </h3>
                <p className="text-white/60 text-xs mt-1">
                  {zoomed + 1} / {galleryImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
