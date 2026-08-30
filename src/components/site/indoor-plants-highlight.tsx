"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Sun, Wind, Droplets, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "./product-card";
import { products } from "@/lib/data";

const benefits = [
  {
    icon: Wind,
    title: "বাতাস পরিষ্কার করে",
    desc: "ঘরের ভেতরের বিষাক্ত গ্যাস শোষণ করে",
  },
  {
    icon: Sun,
    title: "কম আলোতে চলে",
    desc: "ছায়ায়ও সুন্দরভাবে বেড়ে ওঠে",
  },
  {
    icon: Droplets,
    title: "সহজ যত্ন",
    desc: "অল্প পানিতেই টিকে থাকে",
  },
];

export function IndoorPlantsHighlight() {
  const indoor = products.filter((p) => p.categoryId === 9).slice(0, 6);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-green-deep via-brand-green-dark to-brand-green-deep">
      {/* Decorative pattern */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-green-bright/20 px-3 py-1 text-xs font-semibold text-brand-green-bright ring-1 ring-brand-green-bright/30">
              <Sparkles className="h-3.5 w-3.5" />
              নতুন সংগ্রহ
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              ইনডোর প্লান্ট{" "}
              <span className="text-brand-green-bright">সংগ্রহ</span> 🪴
            </h2>
            <p className="mt-2 text-sm text-white/75">
              বাংলাদেশের আবহাওয়ার উপযোগী, ঘরের ভেতরে রাখার মতো সেরা
              এয়ার-পিউরিফাইং গাছ। ঢাকার অ্যাপার্টমেন্টের জন্য আদর্শ।
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white rounded-full"
          >
            <a href="#category-9">
              সব ইনডোর প্লান্ট
              <ArrowLeft className="h-4 w-4 ml-1.5" />
            </a>
          </Button>
        </motion.div>

        {/* Benefits */}
        <div className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="flex items-center gap-3 rounded-2xl bg-white/5 ring-1 ring-white/10 px-4 py-3 backdrop-blur-sm"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-green-bright/20 text-brand-green-bright">
                <b.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">{b.title}</p>
                <p className="text-xs text-white/65">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6">
          {indoor.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
