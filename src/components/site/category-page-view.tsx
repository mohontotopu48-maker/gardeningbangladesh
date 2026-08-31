"use client";

import { motion } from "framer-motion";
import {
  Leaf, FlaskConical, Layers, Flower2, Sprout, Scissors, Bug, Package, Home, TreePine, Apple,
  TrendingUp, ShoppingCart, Star, Zap, Clock, Droplets, Wind, Sun, Heart,
  Wrench, Hand, Coins, Truck, Ruler, CheckCircle2, Recycle, ShieldCheck,
  ArrowLeft, Phone,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { FloatingBar } from "@/components/site/floating-bar";
import { CartDrawer } from "@/components/site/cart-drawer";
import { ProductCard } from "@/components/site/product-card";
import { AnimatedBackground } from "@/components/site/animated-background";
import { CategoryFaq, CategoryYouTube } from "@/components/site/category-interactive";
import { PageHeaderImage, categoryHeaderImages } from "@/components/site/page-header-image";
import { PlantingGuideSection } from "@/components/site/planting-guide";
import { categories, products, categoryContent, shopInfo, type Category, type CategoryPageContent } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Leaf, FlaskConical, Layers, Flower2, Sprout, Scissors, Bug, Package, Home, TreePine, Apple,
  TrendingUp, ShoppingCart, Star, Zap, Clock, Droplets, Wind, Sun, Heart,
  Wrench, Hand, Coins, Truck, Ruler, CheckCircle2, Recycle, ShieldCheck, Apple,
};

export function CategoryPageView({ catId }: { catId: number }) {
  const category = categories.find((c) => c.id === catId);
  const content = categoryContent[catId];
  const catProducts = products.filter((p) => p.categoryId === catId);

  if (!category || !content) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center p-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground">ক্যাটাগরি পাওয়া যায়নি</h1>
            <Button asChild className="mt-4 bg-brand-green hover:bg-brand-green-dark rounded-full">
              <a href="/">হোমে ফিরুন</a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <PageHeaderImage
          src={categoryHeaderImages[catId] || "/gallery/gardening-bangladesh-garden-view-01.jpg"}
          alt={category.name}
          title={category.name}
          subtitle={category.nameEn}
        />
        <CategoryHero category={category} content={content} />
        <InfographicStrip content={content} />
        <BenefitsSection content={content} />
        <ProductsSection products={catProducts} category={category} />
        {content.plantingGuide && <PlantingGuideSection guide={content.plantingGuide} />}
        <CategoryYouTube content={content} />
        <UsageGuide content={content} />
        <CategoryFaq content={content} />
        <CTASection category={category} />
      </main>
      <Footer />
      <FloatingBar />
      <CartDrawer />
    </div>
  );
}

function CategoryHero({ category, content }: { category: Category; content: CategoryPageContent }) {
  const Icon = iconMap[category.icon] ?? Package;
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <AnimatedBackground variant="hero" />
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)", backgroundSize: "32px 32px" }} />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
          <a href="/" className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white mb-5 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            হোম
          </a>
          <motion.span initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-semibold text-white ring-1 ring-white/25 backdrop-blur-sm">
            <Icon className="h-4 w-4" />
            {content.heroSubtitle}
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            {content.heroTitle}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-4 text-base sm:text-lg text-white/85 leading-relaxed max-w-2xl">
            {content.heroDescription}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-7 flex flex-wrap items-center gap-3">
            <a href="#products" className="inline-flex items-center gap-1.5 rounded-full bg-white px-6 py-3 text-sm font-bold text-brand-green-deep shadow-brand-lg transition-transform hover:scale-105">
              পণ্য দেখুন
              <ArrowLeft className="h-4 w-4" />
            </a>
            <a href={`tel:${shopInfo.phone}`} className="inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20">
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

function InfographicStrip({ content }: { content: CategoryPageContent }) {
  return (
    <section className="border-b border-brand-green-light/50 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {content.infographics.map((stat, i) => {
            const Icon = iconMap[stat.icon] ?? Package;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-brand-green-tint to-white p-5 text-center shadow-premium transition-all hover:shadow-brand hover:-translate-y-1">
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

function BenefitsSection({ content }: { content: CategoryPageContent }) {
  return (
    <section className="bg-brand-cream">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-8 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-green-light px-3 py-1 text-xs font-semibold text-brand-green-dark">
            <CheckCircle2 className="h-3.5 w-3.5" />
            কেন বেছে নেবেন?
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-brand-green-deep">সুবিধা ও ফলাফল</h2>
          <p className="mt-1 text-sm text-muted-foreground">আমাদের পণ্য যা যা উপকারে আসে</p>
        </motion.div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.benefits.map((b, i) => {
            const Icon = iconMap[b.icon] ?? Package;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} whileHover={{ y: -6 }} className="group flex flex-col gap-3 rounded-2xl border border-border bg-white p-5 shadow-premium transition-all hover:shadow-brand">
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

function ProductsSection({ products: items, category }: { products: typeof products; category: Category }) {
  return (
    <section id="products" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-6 flex items-end justify-between gap-4 border-b-2 border-brand-green-light pb-3">
          <div className="flex items-center gap-3">
            <span className="h-8 w-1.5 rounded-full bg-gradient-brand" />
            <div>
              <h2 className="text-xl font-extrabold text-brand-green-deep sm:text-2xl">{category.name} — সকল পণ্য</h2>
              <p className="mt-0.5 text-sm text-muted-foreground">{items.length}টি পণ্য পাওয়া যাচ্ছে</p>
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

function UsageGuide({ content }: { content: CategoryPageContent }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-6 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-green-light px-3 py-1 text-xs font-semibold text-brand-green-dark">
            <CheckCircle2 className="h-3.5 w-3.5" />
            ব্যবহার গাইড
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-brand-green-deep">সঠিক ব্যবহারের নিয়ম</h2>
          <p className="mt-1 text-sm text-muted-foreground">সেরা ফল পেতে এই নিয়মগুলো মেনে চলুন</p>
        </motion.div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {content.usage.map((tip, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="flex items-start gap-3 rounded-2xl border border-border bg-brand-green-tint/50 p-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-green text-white font-bold text-sm">{i + 1}</span>
              <p className="text-sm text-foreground leading-relaxed pt-0.5">{tip}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection({ category }: { category: Category }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative overflow-hidden rounded-3xl bg-gradient-brand p-8 sm:p-12 text-center shadow-brand">
          <AnimatedBackground variant="hero" />
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">এখনই অর্ডার করুন 🌱</h2>
            <p className="mt-2 text-sm text-white/85 max-w-lg mx-auto">{category.name} এর সেরা পণ্য — ক্যাশ অন ডেলিভারিতে সারা বাংলাদেশে। ফোন করুন অথবা অনলাইনে অর্ডার করুন।</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a href={`tel:${shopInfo.phone}`} className="inline-flex items-center gap-1.5 rounded-full bg-white px-6 py-3 text-sm font-bold text-brand-green-deep shadow-lg transition-transform hover:scale-105">
                <Phone className="h-4 w-4" />
                {shopInfo.phone}
              </a>
              <a href="#products" className="inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20">
                পণ্য দেখুন
                <ArrowLeft className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
