import {
  Leaf,
  FlaskConical,
  Layers,
  Flower2,
  Sprout,
  Scissors,
  Bug,
  Package,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { categories } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Leaf,
  FlaskConical,
  Layers,
  Flower2,
  Sprout,
  Scissors,
  Bug,
  Package,
};

export function CategoryStrip() {
  return (
    <section className="bg-white border-b border-brand-green-light/50">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-5 flex items-end justify-between">
          <div>
            <h2 className="text-xl font-extrabold text-brand-green-deep sm:text-2xl">
              কেনাকাটা করুন ক্যাটাগরি অনুযায়ী
            </h2>
            <p className="mt-0.5 text-sm text-muted-foreground">
              আপনার বাগানের সব প্রয়োজন এক ছাদে
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon] ?? Package;
            return (
              <a
                key={cat.id}
                href={`#category-${cat.id}`}
                className="group relative flex flex-col items-center gap-2.5 rounded-2xl border border-border bg-white p-4 text-center shadow-premium transition-all duration-300 hover:border-brand-green hover:shadow-brand hover:-translate-y-1 overflow-hidden"
              >
                {/* Hover gradient bg */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-green-light to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green-light text-brand-green-dark transition-all duration-300 group-hover:bg-brand-green group-hover:text-white group-hover:scale-110">
                  <Icon className="h-7 w-7" />
                </span>
                <span className="relative text-xs font-semibold leading-tight text-foreground">
                  {cat.name}
                </span>
                <span className="relative text-[10px] text-muted-foreground hidden sm:block">
                  {cat.nameEn}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
