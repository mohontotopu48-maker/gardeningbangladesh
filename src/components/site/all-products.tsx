"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, PackageSearch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "./product-card";
import { products, categories } from "@/lib/data";

const PAGE_SIZE = 12;

export function AllProducts() {
  const [page, setPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState<number | "all">("all");

  const filtered = useMemo(() => {
    if (activeCategory === "all") return products;
    return products.filter((p) => p.categoryId === activeCategory);
  }, [activeCategory]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  const pageItems = filtered.slice(start, start + PAGE_SIZE);

  const goTo = (p: number) => {
    setPage(p);
    const el = document.getElementById("products");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="products" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10">
        {/* Header */}
        <div className="mb-5 flex flex-col gap-3 border-b border-border pb-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-bold text-brand-green-dark sm:text-2xl">
              সকল পণ্য
            </h2>
            <p className="mt-0.5 text-sm text-muted-foreground">
              {filtered.length}টি পণ্যের মধ্যে {start + 1}–
              {Math.min(start + PAGE_SIZE, filtered.length)}
            </p>
          </div>

          {/* Category filter chips */}
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => {
                setActiveCategory("all");
                setPage(1);
              }}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                activeCategory === "all"
                  ? "bg-brand-green text-white"
                  : "bg-brand-green-light text-brand-green-dark hover:bg-brand-green/20"
              }`}
            >
              সব পণ্য
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setPage(1);
                }}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  activeCategory === cat.id
                    ? "bg-brand-green text-white"
                    : "bg-brand-green-light text-brand-green-dark hover:bg-brand-green/20"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {pageItems.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6">
            {pageItems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-2 py-16 text-muted-foreground">
            <PackageSearch className="h-10 w-10" />
            <p>এই ক্যাটাগরিতে কোনো পণ্য নেই</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-1.5">
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage === 1}
              onClick={() => goTo(currentPage - 1)}
              className="gap-1"
            >
              <ChevronLeft className="h-4 w-4" />
              আগের
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <Button
                key={p}
                variant={p === currentPage ? "default" : "outline"}
                size="sm"
                onClick={() => goTo(p)}
                className={`min-w-9 ${
                  p === currentPage
                    ? "bg-brand-green text-white hover:bg-brand-green-dark"
                    : ""
                }`}
              >
                {p}
              </Button>
            ))}
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage === totalPages}
              onClick={() => goTo(currentPage + 1)}
              className="gap-1"
            >
              পরের
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
