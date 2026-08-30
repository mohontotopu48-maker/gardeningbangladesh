import { Flame, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "./product-card";
import { products } from "@/lib/data";

export function PopularProducts() {
  const popular = products.filter((p) => p.popular);

  return (
    <section className="bg-gradient-to-b from-brand-green-tint to-white">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="mb-5 flex items-end justify-between gap-4 border-b-2 border-brand-green-light pb-3">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
              <Flame className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-xl font-extrabold text-brand-green-deep sm:text-2xl">
                জনপ্রিয় পণ্য
              </h2>
              <p className="mt-0.5 text-sm text-muted-foreground">
                কাস্টমারদের সবচেয়ে বেশি পছন্দের
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            asChild
            className="shrink-0 text-sm font-semibold text-brand-green hover:text-brand-green-dark hover:bg-brand-green-light rounded-full"
          >
            <a href="#products">
              সব দেখুন
              <ArrowLeft className="h-4 w-4 ml-1" />
            </a>
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6">
          {popular.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
