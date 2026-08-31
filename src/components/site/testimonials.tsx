"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { testimonials, shopInfo } from "@/lib/data";

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 bg-brand-cream relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #0d4f1c 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
            <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
            {shopInfo.stats.rating} রেটিং · {shopInfo.stats.customers} কাস্টমার
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-brand-green-deep">
            কাস্টমাররা যা বলছেন
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            আমাদের গ্রাহকদের অভিজ্ঞতা ও বিশ্বাসই আমাদের শক্তি
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col gap-3 rounded-2xl border border-border bg-white p-5 shadow-premium transition-all duration-300 hover:shadow-brand"
            >
              <Quote className="h-8 w-8 text-brand-green/15 absolute top-4 right-4" />
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className={`h-4 w-4 ${
                      idx < t.rating
                        ? "fill-amber-400 text-amber-400"
                        : "fill-muted text-muted"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-foreground/90 flex-1">
                “{t.text}”
              </p>
              <div className="mt-2 flex items-center gap-3 border-t border-border pt-3">
                <Avatar className="h-10 w-10 border-2 border-brand-green/30">
                  <AvatarFallback className="bg-brand-green-light text-brand-green-dark font-bold">
                    {t.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
