import {
  Leaf,
  FlaskConical,
  Layers,
  Flower2,
  Sprout,
  Scissors,
  Bug,
  Package,
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
    <section className="border-b border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-bold text-brand-green-dark">ক্যাটাগরি</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon] ?? Package;
            return (
              <a
                key={cat.id}
                href={`#category-${cat.id}`}
                className="group flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-4 text-center transition-all duration-300 hover:border-brand-green hover:shadow-md hover:-translate-y-0.5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-green-light text-brand-green transition-colors group-hover:bg-brand-green group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="text-xs font-medium leading-tight text-foreground">
                  {cat.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
