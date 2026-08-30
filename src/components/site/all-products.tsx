"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, PackageSearch, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "./product-card";
import { products, categories } from "@/lib/data";

const PAGE_SIZE = 12;

export function AllProducts() {
  const [page, setPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState<number | "all">("all");
  const [sort, setSort] = useState<"popular" | "low" | "high" | "rating">("popular");

  const filtered = useMemo(() => {
    let list = activeCategory === "all" ? [...products] : products.filter((p) => p.categoryId === activeCategory);
    if (sort === "low") list.sort((a, b) => a.price - b.price);
    else if (sort === "high") list.sort((a, b) => b.price - a.price);
    else if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
    else list.sort((a, b) => b.sold - a.sold);
    return list;
  }, [activeCategory, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  const pageItems = filtered.slice(start, start + PAGE_SIZE);

  const goTo = (p: number) => {
    setPage(p);
    const el = document.getElementById("products");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="products" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10">
        {/* Header */}
        <div className="mb-5 flex flex-col gap-4 border-b-2 border-brand-green-light pb-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex items-center gap-3">
            <span className="h-8 w-1.5 rounded-full bg-gradient-brand" />
            <div>
              <h2 className="text-xl font-extrabold text-brand-green-deep sm:text-2xl">
                সকল পণ্য
              </h2>
              <p className="mt-0.5 text-sm text-muted-foreground">
                {filtered.length}টি পণ্যের মধ্যে {start + 1}–
                {Math.min(start + PAGE_SIZE, filtered.length)} দেখানো হচ্ছে
              </p>
            </div>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
            <div className="flex flex-wrap gap-1">
              {([
                ["popular", "জনপ্রিয়"],
                ["low", "কম দাম"],
                ["high", "বেশি দাম"],
                ["rating", "রেটিং"],
              ] as const).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setSort(key)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                    sort === key
                      ? "bg-brand-green-dark text-white"
                      : "bg-brand-green-light text-brand-green-dark hover:bg-brand-green/20"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Category filter chips */}
        <div className="mb-6 flex flex-wrap gap-1.5">
          <button
            onClick={() => {
              setActiveCategory("all");
              setPage(1);
            }}
            className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
              activeCategory === "all"
                ? "bg-brand-green text-white shadow-brand"
                : "bg-brand-green-light text-brand-green-dark hover:bg-brand-green/20"
            }`}
          >
            সব পণ্য ({products.length})
          </button>
          {categories.map((cat) => {
            const count = products.filter((p) => p.categoryId === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setPage(1);
                }}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                  activeCategory === cat.id
                    ? "bg-brand-green text-white shadow-brand"
                    : "bg-brand-green-light text-brand-green-dark hover:bg-brand-green/20"
                }`}
              >
                {cat.name} ({count})
              </button>
            );
          })}
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
              className="gap-1 rounded-full h-9"
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
                className={`min-w-9 rounded-full h-9 ${
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
              className="gap-1 rounded-full h-9"
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
