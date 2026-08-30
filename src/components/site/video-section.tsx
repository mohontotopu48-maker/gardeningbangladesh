"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Youtube, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { youtubeVideos, shopInfo } from "@/lib/data";
import { cn } from "@/lib/utils";

export function VideoSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const featured = youtubeVideos[0];
  const rest = youtubeVideos.slice(1);

  return (
    <section id="videos" className="scroll-mt-24 bg-brand-green-deep relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-[0.07]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-14">
        {/* Header */}
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/20 px-3 py-1 text-xs font-semibold text-red-300 ring-1 ring-red-400/30">
              <Youtube className="h-3.5 w-3.5" />
              YouTube গাইড
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              ভিডিও দেখে শিখুন{" "}
              <span className="text-brand-green-bright">গার্ডেনিং</span>
            </h2>
            <p className="mt-2 text-sm text-white/70">
              আমাদের YouTube চ্যানেলে ছাদ বাগান, সার ব্যবহার, বীজ বপন ও গাছের
              যত্ন নিয়ে বাংলায় সহজ গাইড। শিখুন, তারপর কিনুন।
            </p>
          </div>
          <Button
            asChild
            className="bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold shadow-lg"
          >
            <a
              href={shopInfo.youtubeChannel}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="h-4 w-4 mr-1.5" />
              চ্যানেল সাবস্ক্রাইব করুন
            </a>
          </Button>
        </div>

        {/* Featured video + grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Featured */}
          <button
            onClick={() => setActiveVideo(featured.id)}
            className="group relative aspect-video w-full overflow-hidden rounded-2xl ring-1 ring-white/15 shadow-brand-lg text-left"
          >
            <Image
              src={`https://img.youtube.com/vi/${featured.id}/maxresdefault.jpg`}
              alt={featured.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-red-600 shadow-2xl ring-4 ring-white/20 transition-transform duration-300 group-hover:scale-110">
                <Play className="h-8 w-8 fill-white text-white ml-1" />
              </span>
            </div>
            {/* Badge */}
            <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white shadow-lg">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              ফিচার্ড
            </span>
            {/* Title */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="text-lg sm:text-xl font-bold text-white line-clamp-2">
                {featured.title}
              </h3>
              <p className="mt-1 text-sm text-white/70 line-clamp-1">
                {featured.description}
              </p>
            </div>
          </button>

          {/* Side videos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {rest.map((video) => (
              <button
                key={video.id}
                onClick={() => setActiveVideo(video.id)}
                className="group flex flex-col overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10 p-3 text-left transition-all duration-300 hover:bg-white/10 hover:ring-white/25"
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                  <Image
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, 280px"
                  />
                  <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:bg-black/40" />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-red-600/90 ring-2 ring-white/30 transition-transform duration-300 group-hover:scale-110">
                      <Play className="h-5 w-5 fill-white text-white ml-0.5" />
                    </span>
                  </span>
                </div>
                <h4 className="mt-2.5 text-sm font-semibold text-white leading-snug line-clamp-2">
                  {video.title}
                </h4>
                <p className="mt-0.5 text-xs text-white/60 line-clamp-1">
                  {video.description}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Learning points */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            "ছাদ বাগান সেটআপ এ থেকে জি",
            "সঠিক সার ও পানির পরিমাণ",
            "রোগ-বালাই থেকে গাছ রক্ষা",
          ].map((point, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-green-bright" />
              <span className="text-sm text-white/85 font-medium">{point}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Video modal */}
      <Dialog
        open={!!activeVideo}
        onOpenChange={(open) => !open && setActiveVideo(null)}
      >
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-white/10">
          <DialogTitle className="sr-only">গার্ডেনিং ভিডিও</DialogTitle>
          <DialogDescription className="sr-only">
            Gardening Bangladesh YouTube ভিডিও
          </DialogDescription>
          {activeVideo && (
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
                title="Gardening Bangladesh Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
