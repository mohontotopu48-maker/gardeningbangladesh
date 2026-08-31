"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart, Phone, MapPin, Crown, Youtube, Home, X,
  ChevronRight, Truck, ShieldCheck, Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { categories, shopInfo } from "@/lib/data";
import { useCart } from "@/lib/cart-store";

export function QuickSidebar() {
  const [open, setOpen] = useState(false);
  const { totalCount, open: openCart } = useCart();
  const [count, setCount] = useState(0);

  useEffect(() => {
    return useCart.subscribe((s) => setCount(s.totalCount()));
  }, []);

  return (
    <>
      {/* Floating toggle button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed left-3 top-1/2 z-40 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-r-2xl bg-gradient-brand text-white shadow-brand-lg hover:scale-110 transition-transform group print:hidden"
        aria-label="কুইক মেনু"
      >
        <ChevronRight className="h-6 w-6 transition-transform group-hover:translate-x-0.5" />
        {count > 0 && (
          <span className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 text-white text-xs font-bold px-1 ring-2 ring-white">
            {count}
          </span>
        )}
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
            />

            {/* Sidebar */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed left-0 top-0 z-[70] flex h-full w-[300px] flex-col bg-white shadow-2xl overflow-y-auto scrollbar-thin"
            >
              {/* Header */}
              <div className="bg-gradient-brand p-5 text-white relative">
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                  aria-label="বন্ধ করুন"
                >
                  <X className="h-5 w-5" />
                </button>
                <h2 className="text-lg font-bold">কুইক অ্যাক্সেস</h2>
                <p className="text-xs text-white/80 mt-0.5">দ্রুত কেনাকাটা ও নেভিগেশন</p>
              </div>

              {/* Quick actions */}
              <div className="p-4 space-y-2">
                {/* Cart */}
                <button
                  onClick={() => { openCart(); setOpen(false); }}
                  className="group flex w-full items-center justify-between rounded-xl border border-border bg-brand-green-tint p-3 hover:border-brand-green hover:bg-brand-green-light transition-all"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-green text-white">
                      <ShoppingCart className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-semibold">কার্ট</span>
                  </span>
                  {count > 0 ? (
                    <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-brand-green text-white text-xs font-bold px-2">
                      {count}
                    </span>
                  ) : (
                    <span className="text-xs text-muted-foreground">খালি</span>
                  )}
                </button>

                {/* Track order */}
                <button
                  onClick={() => { window.location.hash = "track"; setOpen(false); }}
                  className="group flex w-full items-center gap-2.5 rounded-xl border border-border p-3 hover:border-brand-green hover:bg-brand-green-tint transition-all"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold">অর্ডার ট্র্যাক করুন</span>
                </button>

                {/* Call to order */}
                <a
                  href={`tel:${shopInfo.phone}`}
                  className="group flex w-full items-center justify-between rounded-xl border border-border p-3 hover:border-brand-green hover:bg-brand-green-tint transition-all"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-green text-white">
                      <Phone className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-semibold">অর্ডার করতে কল</span>
                  </span>
                  <span className="text-xs font-medium text-brand-green-dark">{shopInfo.phone}</span>
                </a>

                {/* Membership */}
                <a
                  href="/membership"
                  onClick={() => setOpen(false)}
                  className="group flex w-full items-center gap-2.5 rounded-xl border border-amber-300 bg-amber-50 p-3 hover:bg-amber-100 transition-all"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 text-white">
                    <Crown className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-amber-800">সদস্যপদ</p>
                    <p className="text-[10px] text-amber-600">মাত্র ১৫০৳ এককালীন</p>
                  </div>
                </a>
              </div>

              {/* Search */}
              <div className="px-4 pb-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="পণ্য খুঁজুন..."
                    className="pl-9 bg-brand-green-tint rounded-full"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="px-4 pb-3">
                <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  ক্যাটাগরি
                </h3>
                <div className="space-y-1">
                  {categories.map((cat) => (
                    <a
                      key={cat.id}
                      href={`/category/${cat.id}`}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between rounded-lg px-3 py-2 hover:bg-brand-green-tint transition-colors"
                    >
                      <span className="text-sm font-medium text-foreground">{cat.name}</span>
                      <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Collections */}
              <div className="px-4 pb-3">
                <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  কালেকশন
                </h3>
                <div className="space-y-1">
                  <a href="/collection/fertilizers" onClick={() => setOpen(false)} className="group flex items-center justify-between rounded-lg px-3 py-2 hover:bg-brand-green-tint transition-colors">
                    <span className="text-sm font-medium">সার ও পুষ্টি</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all" />
                  </a>
                  <a href="/collection/plants-seeds" onClick={() => setOpen(false)} className="group flex items-center justify-between rounded-lg px-3 py-2 hover:bg-brand-green-tint transition-colors">
                    <span className="text-sm font-medium">প্লান্ট ও বীজ</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all" />
                  </a>
                  <a href="/collection/tools-care" onClick={() => setOpen(false)} className="group flex items-center justify-between rounded-lg px-3 py-2 hover:bg-brand-green-tint transition-colors">
                    <span className="text-sm font-medium">টুলস ও সুরক্ষা</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all" />
                  </a>
                </div>
              </div>

              {/* Trust badges */}
              <div className="mx-4 mb-4 rounded-xl bg-brand-green-tint p-3 space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <Truck className="h-4 w-4 text-brand-green" />
                  <span className="font-medium">সারা দেশে ডেলিভারি</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <ShieldCheck className="h-4 w-4 text-brand-green" />
                  <span className="font-medium">ক্যাশ অন ডেলিভারি</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Phone className="h-4 w-4 text-brand-green" />
                  <span className="font-medium">{shopInfo.phone}</span>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
