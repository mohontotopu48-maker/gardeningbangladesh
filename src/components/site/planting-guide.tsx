"use client";

import { motion } from "framer-motion";
import {
  Sprout, FlaskConical, Layers, Leaf, Sun, Droplets, CheckCircle2,
  BookOpen, Lightbulb, type LucideIcon,
} from "lucide-react";
import type { PlantingGuide } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Sprout, FlaskConical, Layers, Leaf, Sun, Droplets,
};

export function PlantingGuideSection({ guide }: { guide: PlantingGuide }) {
  const Icon = iconMap[guide.icon] ?? Sprout;

  return (
    <section className="bg-brand-cream">
      <div className="mx-auto max-w-5xl px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-green-light px-3 py-1 text-xs font-semibold text-brand-green-dark">
            <BookOpen className="h-3.5 w-3.5" />
            গাইড
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-brand-green-deep">
            {guide.title}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            ধাপে ধাপে গাছ লাগানো, যত্ন নেওয়া ও সঠিক ব্যবহারের নিয়ম
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mb-10">
          <h3 className="mb-5 flex items-center gap-2 text-lg font-bold text-brand-green-deep">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-green text-white">
              <Icon className="h-4 w-4" />
            </span>
            গাছ লাগানোর ধাপসমূহ
          </h3>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-brand-green-light" />
            {guide.steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative flex gap-4 pb-6 last:pb-0"
              >
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-green text-white font-bold text-sm shadow-md">
                  {i + 1}
                </span>
                <div className="flex-1 pt-1.5">
                  <h4 className="font-bold text-foreground">{step.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Care Tips */}
        <div className="mb-10">
          <h3 className="mb-5 flex items-center gap-2 text-lg font-bold text-brand-green-deep">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
              <Lightbulb className="h-4 w-4" />
            </span>
            যত্নের টিপস
          </h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {guide.careTips.map((tip, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="flex items-start gap-2.5 rounded-xl border border-border bg-white p-3 shadow-sm"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-green mt-0.5" />
                <p className="text-sm text-foreground leading-relaxed">{tip}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Usage Instructions */}
        <div>
          <h3 className="mb-5 flex items-center gap-2 text-lg font-bold text-brand-green-deep">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-green-light text-brand-green-dark">
              <BookOpen className="h-4 w-4" />
            </span>
            কীভাবে ব্যবহার করবেন
          </h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {guide.usageInstructions.map((inst, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                className="rounded-2xl border border-border bg-white p-4 shadow-premium"
              >
                <h4 className="font-bold text-brand-green-deep text-sm mb-1">{inst.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{inst.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
