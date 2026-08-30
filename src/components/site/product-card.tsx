import { ShoppingBag, Star, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/data";

type ProductCardProps = {
  product: Product;
  className?: string;
};

export function ProductCard({ product, className }: ProductCardProps) {
  const discount =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : 0;

  return (
    <div
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
        <span className="text-5xl sm:text-6xl transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 select-none drop-shadow-sm">
          {product.emoji}
        </span>

        {/* Badges */}
        <div className="absolute left-2 top-2 flex flex-col gap-1.5">
          {product.popular && (
            <span className="inline-flex items-center rounded-full bg-brand-green px-2 py-0.5 text-[10px] font-bold text-white shadow-sm">
              🔥 জনপ্রিয়
            </span>
          )}
          {product.isNew && (
            <span className="inline-flex items-center rounded-full bg-amber-500 px-2 py-0.5 text-[10px] font-bold text-white shadow-sm">
              ✨ নতুন
            </span>
          )}
          {discount > 0 && (
            <span className="inline-flex items-center rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-bold text-white shadow-sm">
              -{discount}%
            </span>
          )}
        </div>

        {/* Quick add button (appears on hover) */}
        <button
          className="absolute bottom-2 right-2 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white text-brand-green-dark opacity-0 shadow-lg ring-1 ring-brand-green/20 transition-all duration-300 hover:bg-brand-green hover:text-white group-hover:translate-y-0 group-hover:opacity-100"
          aria-label="কার্টে যোগ করুন"
        >
          <Plus className="h-5 w-5" />
        </button>

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
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
            className="h-8 gap-1 bg-brand-green px-2.5 text-xs font-semibold text-white hover:bg-brand-green-dark shadow-sm rounded-lg"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            কিনুন
          </Button>
        </div>
      </div>
    </div>
  );
}
