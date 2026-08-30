import { Flame } from "lucide-react";
import { ProductCard } from "./product-card";
import { products } from "@/lib/data";

export function PopularProducts() {
  const popular = products.filter((p) => p.popular);

  return (
    <section className="bg-brand-cream">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="mb-5 flex items-center gap-2 border-b border-border pb-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
            <Flame className="h-5 w-5" />
          </span>
          <h2 className="text-xl font-bold text-brand-green-dark sm:text-2xl">
            জনপ্রিয় পণ্য
          </h2>
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
