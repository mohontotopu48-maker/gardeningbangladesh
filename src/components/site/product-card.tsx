import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/data";

type ProductCardProps = {
  product: Product;
  className?: string;
};

export function ProductCard({ product, className }: ProductCardProps) {
  const hasPrice = product.price !== null;

  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:border-brand-green/40 hover:-translate-y-0.5",
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
        <span className="text-5xl sm:text-6xl transition-transform duration-500 group-hover:scale-110 select-none">
          {product.emoji}
        </span>
        {product.popular && (
          <span className="absolute left-2 top-2 inline-flex items-center rounded-full bg-brand-green px-2 py-0.5 text-[10px] font-semibold text-white shadow-sm">
            জনপ্রিয়
          </span>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 p-3">
        <h3 className="text-sm font-medium leading-snug text-foreground line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>
        <div className="mt-auto flex items-center justify-between gap-2">
          {hasPrice ? (
            <span className="text-base font-bold text-brand-green-dark">
              {product.price} <span className="text-sm">৳</span>
            </span>
          ) : (
            <span className="text-xs text-muted-foreground">দাম যোগাযোগে</span>
          )}
          <Button
            size="sm"
            className="h-8 gap-1 bg-brand-green px-3 text-xs font-medium text-white hover:bg-brand-green-dark shadow-sm"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            কিনুন
          </Button>
        </div>
      </div>
    </div>
  );
}
