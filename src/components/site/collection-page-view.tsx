"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Leaf, FlaskConical, Layers, Flower2, Sprout, Scissors, Bug, Package, Home,
  TrendingUp, ShoppingCart, Star, Zap, Clock, Droplets, Wind, Sun, Heart,
  Wrench, Hand, Coins, Truck, Ruler, CheckCircle2, Recycle, ShieldCheck,
  ArrowLeft, Phone, Play, Youtube as YoutubeIcon, ArrowRight, Sparkles,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { FloatingBar } from "@/components/site/floating-bar";
import { CartDrawer } from "@/components/site/cart-drawer";
import { ProductCard } from "@/components/site/product-card";
import { AnimatedBackground } from "@/components/site/animated-background";
import { CategoryYouTube } from "@/components/site/category-interactive";
import { collections, categories, products, shopInfo } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Leaf, FlaskConical, Layers, Flower2, Sprout, Scissors, Bug, Package, Home,
  TrendingUp, ShoppingCart, Star, Zap, Clock, Droplets, Wind, Sun, Heart,
  Wrench, Hand, Coins, Truck, Ruler, CheckCircle2, Recycle, ShieldCheck,
};

export function CollectionPageView({ slug }: { slug: string }) {
  const collection = collections.find((c) => c.slug === slug);

  if (!collection) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center p-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground">কালেকশন পাওয়া যায়নি</h1>
            <Button asChild className="mt-4 bg-brand-green hover:bg-brand-green-dark rounded-full">
              <a href="/">হোমে ফিরুন</a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const subCategories = collection.categoryIds
    .map((id) => categories.find((c) => c.id === id))
    .filter(Boolean);
  const collectionProducts = products.filter((p) =>
    collection.categoryIds.includes(p.categoryId),
  );

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <CollectionHero collection={collection} />
        <InfographicStrip collection={collection} />
        <SubCategoriesSection subCategories={subCategories} />
        <BenefitsSection collection={collection} />
        <ProductsSection products={collectionProducts} collection={collection} />
        <HighlightsSection collection={collection} />
        <CategoryYouTube content={collectionToContent(collection)} />
        <CTASection collection={collection} />
      </main>
      <Footer />
      <FloatingBar />
      <CartDrawer />
    </div>
  );
}

function collectionToContent(collection: typeof collections[0]) {
  return {
    categoryId: 0,
    heroTitle: collection.title,
    heroSubtitle: collection.titleEn,
    heroDescription: collection.description,
    youtubeId: collection.youtubeId,
    youtubeTitle: collection.youtubeTitle,
    benefits: collection.benefits,
    infographics: collection.infographics,
    usage: collection.highlights,
    faq: [],
  };
}

function CollectionHero({ collection }: { collection: typeof collections[0] }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={collection.heroImage}
          alt={collection.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green-deep/95 via-brand-green-dark/80 to-brand-green/40" />
      </div>
      <AnimatedBackground variant="hero" />
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <a href="/" className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white mb-5 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            হোম
          </a>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-semibold text-white ring-1 ring-white/25 backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4" />
            {collection.titleEn}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
          >
            {collection.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-2 text-lg font-semibold text-brand-green-bright"
          >
            {collection.subtitle}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-base sm:text-lg text-white/85 leading-relaxed max-w-2xl"
          >
            {collection.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <a
              href="#products"
              className="group inline-flex items-center gap-1.5 rounded-full bg-white px-6 py-3 text-sm font-bold text-brand-green-deep shadow-brand-lg transition-transform hover:scale-105"
            >
              পণ্য দেখুন
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            </a>
            <a
              href={`tel:${shopInfo.phone}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <Phone className="h-4 w-4" />
              অর্ডার করুন
            </a>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full h-[30px] sm:h-[40px]" preserveAspectRatio="none">
          <path fill="#ffffff" d="M0,32L48,32C96,32,192,32,288,34.7C384,37,480,43,576,42.7C672,43,768,37,864,34.7C960,32,1056,32,1152,32C1248,32,1344,32,1392,32L1440,32L1440,60L0,60Z" />
        </svg>
      </div>
    </section>
  );
}

function InfographicStrip({ collection }: { collection: typeof collections[0] }) {
  return (
    <section className="border-b border-brand-green-light/50 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {collection.infographics.map((stat, i) => {
            const Icon = iconMap[stat.icon] ?? Package;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-brand-green-tint to-white p-5 text-center shadow-premium transition-all hover:shadow-brand hover:-translate-y-1"
              >
                <span className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-green-light text-brand-green-dark transition-all group-hover:bg-brand-green group-hover:text-white group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </span>
                <p className="text-2xl sm:text-3xl font-extrabold text-brand-green-dark">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SubCategoriesSection({ subCategories }: { subCategories: (typeof categories[0])[] }) {
  return (
    <section className="bg-brand-cream">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-green-light px-3 py-1 text-xs font-semibold text-brand-green-dark">
            <Layers className="h-3.5 w-3.5" />
            সাব-ক্যাটাগরি
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-brand-green-deep">
            এই কালেকশনের ক্যাটাগরিসমূহ
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            প্রতিটি ক্যাটাগরির আলাদা পেজে বিস্তারিত দেখুন
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {subCategories.map((cat, i) => {
            if (!cat) return null;
            const Icon = iconMap[cat.icon] ?? Package;
            const count = products.filter((p) => p.categoryId === cat.id).length;
            return (
              <motion.a
                key={cat.id}
                href={`/category/${cat.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-premium transition-all hover:shadow-brand"
              >
                <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-brand-green-light/50 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-start gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-green-light text-brand-green-dark transition-all group-hover:bg-brand-green group-hover:text-white group-hover:scale-110">
                    <Icon className="h-7 w-7" />
                  </span>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground text-lg">{cat.name}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{cat.nameEn}</p>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{cat.description}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-xs font-semibold text-brand-green-dark bg-brand-green-tint px-2 py-0.5 rounded-full">
                        {count} পণ্য
                      </span>
                      <span className="flex items-center gap-1 text-sm font-semibold text-brand-green group-hover:text-brand-green-dark transition-colors">
                        দেখুন
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BenefitsSection({ collection }: { collection: typeof collections[0] }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-green-light px-3 py-1 text-xs font-semibold text-brand-green-dark">
            <CheckCircle2 className="h-3.5 w-3.5" />
            কেন বেছে নেবেন?
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-brand-green-deep">
            সুবিধা ও ফলাফল
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {collection.benefits.map((b, i) => {
            const Icon = iconMap[b.icon] ?? Package;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group flex flex-col gap-3 rounded-2xl border border-border bg-brand-green-tint/30 p-5 shadow-premium transition-all hover:shadow-brand"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-green-light text-brand-green-dark transition-all group-hover:bg-brand-green group-hover:text-white group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-bold text-foreground">{b.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProductsSection({ products: items, collection }: { products: typeof products; collection: typeof collections[0] }) {
  return (
    <section id="products" className="scroll-mt-20 bg-brand-cream">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-end justify-between gap-4 border-b-2 border-brand-green-light pb-3"
        >
          <div className="flex items-center gap-3">
            <span className="h-8 w-1.5 rounded-full bg-gradient-brand" />
            <div>
              <h2 className="text-xl font-extrabold text-brand-green-deep sm:text-2xl">
                {collection.title} — সকল পণ্য
              </h2>
              <p className="mt-0.5 text-sm text-muted-foreground">
                {items.length}টি পণ্য পাওয়া যাচ্ছে
              </p>
            </div>
          </div>
        </motion.div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5">
          {items.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HighlightsSection({ collection }: { collection: typeof collections[0] }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-center"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-green-light px-3 py-1 text-xs font-semibold text-brand-green-dark">
            <Sparkles className="h-3.5 w-3.5" />
            হাইলাইটস
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-brand-green-deep">
            কী কী পাচ্ছেন
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {collection.highlights.map((tip, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-start gap-3 rounded-2xl border border-border bg-brand-green-tint/50 p-4"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-green text-white">
                <CheckCircle2 className="h-5 w-5" />
              </span>
              <p className="text-sm text-foreground leading-relaxed pt-1">{tip}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection({ collection }: { collection: typeof collections[0] }) {
  return (
    <section className="bg-brand-cream">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-brand p-8 sm:p-12 text-center shadow-brand"
        >
          <AnimatedBackground variant="hero" />
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              এখনই অর্ডার করুন 🌱
            </h2>
            <p className="mt-2 text-sm text-white/85 max-w-lg mx-auto">
              {collection.title} — ক্যাশ অন ডেলিভারিতে সারা বাংলাদেশে। ফোন করুন অথবা অনলাইনে অর্ডার করুন।
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`tel:${shopInfo.phone}`}
                className="group inline-flex items-center gap-1.5 rounded-full bg-white px-6 py-3 text-sm font-bold text-brand-green-deep shadow-lg transition-transform hover:scale-105"
              >
                <Phone className="h-4 w-4 transition-transform group-hover:rotate-12" />
                {shopInfo.phone}
              </a>
              <a
                href="#products"
                className="group inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                পণ্য দেখুন
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
