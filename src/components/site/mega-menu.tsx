"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Leaf,
  FlaskConical,
  Layers,
  Flower2,
  Sprout,
  Scissors,
  Bug,
  Package,
  Home,
  ArrowRight,
  Sparkles,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";
import { categories, products } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Leaf,
  FlaskConical,
  Layers,
  Flower2,
  Sprout,
  Scissors,
  Bug,
  Package,
  Home,
};

// Group categories into mega menu columns
const menuGroups = [
  {
    title: "সার ও পুষ্টি",
    titleEn: "Fertilizers",
    cats: [1, 7, 8],
  },
  {
    title: "গাছ ও বীজ",
    titleEn: "Plants & Seeds",
    cats: [9, 3, 2],
  },
  {
    title: "টুলস ও সুরক্ষা",
    titleEn: "Tools & Care",
    cats: [4, 5, 6],
  },
];

export function MegaMenu() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button className="group flex h-full items-center gap-1.5 px-3 text-sm font-bold text-white bg-gradient-brand rounded-lg mx-1 my-0.5 transition-all hover:shadow-brand hover:scale-[1.03] whitespace-nowrap">
        <Home className="h-4 w-4 transition-transform group-hover:scale-110 group-hover:rotate-12" />
        সব ক্যাটাগরি
        <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
      </button>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-full z-50 w-[760px] -translate-x-1/2 pt-2"
            style={{ marginLeft: "380px" }}
          >
            <div className="overflow-hidden rounded-2xl border border-brand-green-light bg-white shadow-2xl">
              <div className="grid grid-cols-3 gap-0">
                {/* Category columns */}
                {menuGroups.map((group, gi) => (
                  <div
                    key={gi}
                    className={`p-5 ${
                      gi < menuGroups.length - 1
                        ? "border-r border-brand-green-light/50"
                        : ""
                    }`}
                  >
                    <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-brand-green">
                      {group.titleEn}
                    </h3>
                    <p className="mb-3 text-sm font-semibold text-foreground">
                      {group.title}
                    </p>
                    <ul className="space-y-1">
                      {group.cats.map((catId) => {
                        const cat = categories.find((c) => c.id === catId);
                        if (!cat) return null;
                        const Icon = iconMap[cat.icon] ?? Package;
                        const count = products.filter(
                          (p) => p.categoryId === cat.id,
                        ).length;
                        return (
                          <li key={cat.id}>
                            <a
                              href={`/category/${cat.id}`}
                              onClick={() => setHovered(false)}
                              className="group flex items-center gap-2.5 rounded-lg px-2.5 py-2 transition-colors hover:bg-brand-green-tint"
                            >
                              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-green-light text-brand-green-dark transition-colors group-hover:bg-brand-green group-hover:text-white">
                                <Icon className="h-4 w-4" />
                              </span>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-foreground leading-tight">
                                  {cat.name}
                                </p>
                                <p className="text-[10px] text-muted-foreground">
                                  {count} পণ্য
                                </p>
                              </div>
                              <ArrowRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-brand-green" />
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Featured strip */}
              <div className="flex items-center justify-between gap-4 border-t border-brand-green-light/50 bg-gradient-to-r from-brand-green-tint to-brand-green-light px-5 py-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-brand-green" />
                  <span className="text-sm font-semibold text-brand-green-deep">
                    জনপ্রিয় ইনডোর প্লান্ট:
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  {products
                    .filter(
                      (p) =>
                        p.categoryId === 9 && p.popular,
                    )
                    .slice(0, 3)
                    .map((p) => (
                      <a
                        key={p.id}
                        href="/category/9"
                        onClick={() => setHovered(false)}
                        className="flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-xs font-medium text-foreground shadow-sm transition-all hover:shadow-brand hover:-translate-y-0.5"
                      >
                        <span className="text-base">{p.emoji}</span>
                        {p.nameEn}
                      </a>
                    ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
