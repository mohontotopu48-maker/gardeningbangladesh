"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingBag, Star, Plus, Check, Heart, Eye } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCart } from "@/lib/cart-store";
import type { Product } from "@/lib/data";

type ProductCardProps = {
  product: Product;
  className?: string;
  index?: number;
};

const careLabels: Record<string, string> = {
  easy: "সহজ যত্ন",
  medium: "মাঝারি",
  hard: "বিশেষ যত্ন",
};

const lightLabels: Record<string, string> = {
  low: "ছায়ায়",
  medium: "আলো-ছায়া",
  bright: "পূর্ণ আলো",
};

export function ProductCard({ product, className, index = 0 }: ProductCardProps) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [wished, setWished] = useState(false);

  const discount =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) * 100,
        )
      : 0;

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    add(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const showImage = product.image && !imgError;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.4) }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-premium transition-all duration-300 hover:shadow-lg hover:border-brand-green/40 hover:-translate-y-1",
        className,
      )}
    >
      {/* Image area */}
      <div
        className={cn(
          "relative aspect-square w-full bg-gradient-to-br flex items-center justify-center overflow-hidden",
          product.gradient,
        )}
      >
        {showImage ? (
          <Image
            src={product.image!}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
            onError={() => setImgError(true)}
          />
        ) : (
          <motion.span
            className="text-5xl sm:text-6xl select-none drop-shadow-sm"
            whileHover={{ scale: 1.15, rotate: -3 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {product.emoji}
          </motion.span>
        )}

        {/* Badges */}
        <div className="absolute left-2 top-2 flex flex-col gap-1.5 z-10">
          {product.popular && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="inline-flex items-center rounded-full bg-brand-green px-2 py-0.5 text-[10px] font-bold text-white shadow-sm"
            >
              🔥 জনপ্রিয়
            </motion.span>
          )}
          {product.isNew && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.1 }}
              className="inline-flex items-center rounded-full bg-amber-500 px-2 py-0.5 text-[10px] font-bold text-white shadow-sm"
            >
              ✨ নতুন
            </motion.span>
          )}
          {discount > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.2 }}
              className="inline-flex items-center rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-bold text-white shadow-sm"
            >
              -{discount}%
            </motion.span>
          )}
        </div>

        {/* Wishlist heart button */}
        <motion.button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setWished(!wished);
          }}
          whileTap={{ scale: 0.8 }}
          className={cn(
            "absolute top-2 right-2 z-10 flex h-8 w-8 items-center justify-center rounded-full backdrop-blur-sm transition-all",
            wished
              ? "bg-red-500 text-white"
              : "bg-white/80 text-foreground/60 hover:bg-white hover:text-red-500",
          )}
          aria-label="পছন্দে যোগ করুন"
        >
          <Heart className={cn("h-4 w-4", wished && "fill-white")} />
        </motion.button>

        {/* Quick add button (appears on hover) */}
        <motion.button
          onClick={handleAdd}
          whileTap={{ scale: 0.9 }}
          className={cn(
            "absolute bottom-2 right-2 z-10 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full shadow-lg ring-1 transition-all duration-300 opacity-0 group-hover:translate-y-0 group-hover:opacity-100",
            added
              ? "bg-brand-green text-white ring-brand-green"
              : "bg-white text-brand-green-dark ring-brand-green/20 hover:bg-brand-green hover:text-white",
          )}
          aria-label="কার্টে যোগ করুন"
        >
          {added ? <Check className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
        </motion.button>

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors pointer-events-none" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-1.5 p-3">
        {/* Rating + sold */}
        <div className="flex items-center justify-between gap-1 text-[11px] text-muted-foreground">
          <span className="flex items-center gap-0.5">
            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
            <span className="font-semibold text-foreground">{product.rating}</span>
            <span>({product.reviews})</span>
          </span>
          <span className="text-[10px]">{product.sold}+ বিক্রি</span>
        </div>

        <h3 className="text-sm font-medium leading-snug text-foreground line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>

        {/* Care info for indoor plants */}
        {product.care && (
          <div className="flex flex-wrap gap-1">
            <span className="inline-flex items-center rounded-md bg-brand-green-tint px-1.5 py-0.5 text-[10px] font-medium text-brand-green-dark">
              🌿 {careLabels[product.care]}
            </span>
            <span className="inline-flex items-center rounded-md bg-amber-50 px-1.5 py-0.5 text-[10px] font-medium text-amber-700">
              ☀️ {lightLabels[product.light || "medium"]}
            </span>
          </div>
        )}

        <div className="mt-auto flex items-end justify-between gap-2 pt-1">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1.5">
              <span className="text-base font-extrabold text-brand-green-dark">
                {product.price}
                <span className="text-xs font-bold">৳</span>
              </span>
              {discount > 0 && (
                <span className="text-xs text-muted-foreground line-through">
                  {product.originalPrice}৳
                </span>
              )}
            </div>
            <span className="text-[10px] text-muted-foreground">{product.unit}</span>
          </div>
          <Button
            size="sm"
            onClick={handleAdd}
            className={cn(
              "h-8 gap-1 px-2.5 text-xs font-semibold text-white shadow-sm rounded-lg transition-colors",
              added
                ? "bg-brand-green-dark"
                : "bg-brand-green hover:bg-brand-green-dark",
            )}
          >
            {added ? (
              <>
                <Check className="h-3.5 w-3.5" />
                যোগ হয়েছে
              </>
            ) : (
              <>
                <ShoppingBag className="h-3.5 w-3.5" />
                কিনুন
              </>
            )}
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
