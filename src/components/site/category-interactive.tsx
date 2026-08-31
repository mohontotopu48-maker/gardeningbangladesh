"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ChevronDown,
  Play,
  Youtube as YoutubeIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "./animated-background";
import { shopInfo, type CategoryPageContent } from "@/lib/data";

export function CategoryYouTube({ content }: { content: CategoryPageContent }) {
  const [playing, setPlaying] = useState(false);
  return (
    <section className="relative overflow-hidden bg-brand-green-deep">
      <AnimatedBackground variant="dots" />
      <div className="relative mx-auto max-w-5xl px-4 py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-center"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/20 px-3 py-1 text-xs font-semibold text-red-300 ring-1 ring-red-400/30">
            <YoutubeIcon className="h-3.5 w-3.5" />
            ভিডিও গাইড
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-white">
            শিখুন <span className="text-brand-green-bright">ভিডিও দেখে</span>
          </h2>
          <p className="mt-1 text-sm text-white/70">{content.youtubeTitle}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-brand-lg ring-1 ring-white/15"
        >
          {playing ? (
            <iframe
              src={`https://www.youtube.com/embed/${content.youtubeId}?autoplay=1&rel=0`}
              title={content.youtubeTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          ) : (
            <button
              onClick={() => setPlaying(true)}
              className="group relative h-full w-full"
              aria-label="ভিডিও চালান"
            >
              <Image
                src={`https://img.youtube.com/vi/${content.youtubeId}/maxresdefault.jpg`}
                alt={content.youtubeTitle}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-red-600 shadow-2xl ring-4 ring-white/20 transition-transform group-hover:scale-110">
                  <Play className="h-8 w-8 fill-white text-white ml-1" />
                </span>
              </span>
              <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
                <h3 className="text-lg font-bold text-white">{content.youtubeTitle}</h3>
                <p className="text-sm text-white/70 mt-0.5">গার্ডেনিং বাংলাদেশ ইউটিউব চ্যানেল</p>
              </div>
            </button>
          )}
        </motion.div>
        <div className="mt-6 text-center">
          <Button asChild className="bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold">
            <a href={shopInfo.youtubeChannel} target="_blank" rel="noopener noreferrer">
              <YoutubeIcon className="h-4 w-4 mr-1.5" />
              চ্যানেল সাবস্ক্রাইব করুন
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function CategoryFaq({ content }: { content: CategoryPageContent }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-brand-cream">
      <div className="mx-auto max-w-3xl px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-center"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-green-light px-3 py-1 text-xs font-semibold text-brand-green-dark">
            <ChevronDown className="h-3.5 w-3.5" />
            প্রশ্নোত্তর
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-brand-green-deep">
            সাধারণ জিজ্ঞাসা
          </h2>
        </motion.div>
        <div className="space-y-3">
          {content.faq.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="overflow-hidden rounded-2xl border border-border bg-white shadow-premium"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-3 p-4 text-left"
              >
                <span className="font-semibold text-foreground">{item.q}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-brand-green transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              <motion.div
                initial={false}
                animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
