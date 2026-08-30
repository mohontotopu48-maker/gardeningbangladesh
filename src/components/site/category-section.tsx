import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "./product-card";
import type { Category, Product } from "@/lib/data";

type CategorySectionProps = {
  category: Category;
  products: Product[];
};

export function CategorySection({ category, products }: CategorySectionProps) {
  if (products.length === 0) return null;

  return (
    <section id={`category-${category.id}`} className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Section header */}
        <div className="mb-5 flex items-end justify-between gap-4 border-b-2 border-brand-green-light pb-3">
          <div className="flex items-center gap-3">
            <span className="h-8 w-1.5 rounded-full bg-gradient-brand" />
            <div>
              <h2 className="text-xl font-extrabold text-brand-green-deep sm:text-2xl">
                {category.name}
              </h2>
              <p className="mt-0.5 text-sm text-muted-foreground">
                {category.description} ·{" "}
                <span className="text-brand-green font-medium">
                  {products.length} পণ্য
                </span>
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

        {/* Product grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6">
          {products.slice(0, 6).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
