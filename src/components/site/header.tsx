"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  Search,
  ShoppingBag,
  MapPin,
  Phone,
  Truck,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "./logo";
import { MegaMenu } from "./mega-menu";
import { TrackDialog } from "./track-dialog";
import { useCart } from "@/lib/cart-store";
import { categories, shopInfo } from "@/lib/data";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [trackOpen, setTrackOpen] = useState(false);
  const { open: openCart, totalCount } = useCart();
  const [count, setCount] = useState(0);

  // Subscribe to cart count for the badge (avoids hydration mismatch)
  useEffect(() => {
    return useCart.subscribe((s) => {
      setCount(s.totalCount());
    });
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Announcement bar */}
      <div className="bg-gradient-brand-deep text-white">
        <div className="mx-auto max-w-7xl px-4 flex items-center justify-between h-9 text-xs">
          <div className="flex items-center gap-4">
            <span className="hidden sm:flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5" />
              {shopInfo.phone}
            </span>
            <span className="flex items-center gap-1.5 opacity-95">
              <Truck className="h-3.5 w-3.5" />
              ক্যাশ অন ডেলিভারি — সারা বাংলাদেশে
            </span>
          </div>
          <span className="hidden md:block opacity-90 font-medium">
            🌱 {shopInfo.subtitle}
          </span>
        </div>
      </div>

      {/* Main header */}
      <div
        className={`w-full border-b transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-soft border-brand-green-light"
            : "bg-white border-border"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-18 items-center justify-between gap-4 py-3">
            <Logo />

            {/* Search (desktop) */}
            <div className="hidden md:flex flex-1 max-w-md mx-4">
              <div className="relative w-full group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-brand-green transition-colors" />
                <Input
                  placeholder="সার, বীজ, টব খুঁজুন..."
                  className="pl-9 pr-4 h-11 bg-brand-green-tint border-brand-green-light/50 focus-visible:ring-brand-green rounded-full"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                onClick={() => setTrackOpen(true)}
                className="hidden sm:flex h-10 text-sm font-medium rounded-full"
              >
                <MapPin className="h-4 w-4 mr-1.5" />
                ট্র্যাক
              </Button>
              <Button
                onClick={openCart}
                className="relative h-10 bg-brand-green hover:bg-brand-green-dark text-white shadow-brand rounded-full"
              >
                <ShoppingBag className="h-4 w-4 mr-1.5" />
                <span className="hidden sm:inline">কার্ট</span>
                <AnimatePresence>
                  {count > 0 && (
                    <motion.span
                      key={count}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="ml-1.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-white text-brand-green-dark px-1.5 text-xs font-bold"
                    >
                      {count}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Button>

              {/* Mobile menu */}
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden h-10 w-10"
                    aria-label="মেনু"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] p-0">
                  <div className="flex items-center justify-between p-4 border-b bg-brand-green-tint">
                    <Logo variant="icon" />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setOpen(false)}
                      className="rounded-full"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                  {/* Mobile search */}
                  <div className="p-4 border-b">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="পণ্য খুঁজুন..."
                        className="pl-9 bg-brand-green-tint border-brand-green-light/50 focus-visible:ring-brand-green rounded-full"
                      />
                    </div>
                  </div>
                  <nav className="flex flex-col gap-1 p-3 overflow-y-auto max-h-[60vh]">
                    <Button
                      variant="ghost"
                      asChild
                      className="justify-start h-11 font-medium"
                      onClick={() => setOpen(false)}
                    >
                      <a href="#products">সব পণ্য</a>
                    </Button>
                    {categories.map((cat) => (
                      <Button
                        key={cat.id}
                        variant="ghost"
                        asChild
                        className="justify-start h-11 font-medium"
                        onClick={() => setOpen(false)}
                      >
                        <a href={`/category/${cat.id}`}>{cat.name}</a>
                      </Button>
                    ))}
                    <div className="my-2 h-px bg-border" />
                    <Button
                      variant="outline"
                      onClick={() => {
                        setOpen(false);
                        setTrackOpen(true);
                      }}
                      className="justify-start h-11"
                    >
                      <MapPin className="h-4 w-4 mr-2" />
                      অর্ডার ট্র্যাক করুন
                    </Button>
                    <Button
                      variant="outline"
                      asChild
                      className="justify-start h-11"
                      onClick={() => setOpen(false)}
                    >
                      <a href="#videos">
                        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23.5 6.2c-.3-1-1-1.8-2-2.1C19.7 3.5 12 3.5 12 3.5s-7.7 0-9.5.6c-1 .3-1.8 1.1-2 2.1C0 8 0 12 0 12s0 4 .5 5.8c.3 1 1 1.8 2 2.1 1.8.6 9.5.6 9.5.6s7.7 0 9.5-.6c1-.3 1.8-1.1 2-2.1.5-1.8.5-5.8.5-5.8s0-4-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
                        </svg>
                        ভিডিও গাইড
                      </a>
                    </Button>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        {/* Category nav (desktop) — with Mega Menu */}
        <div className="hidden lg:block border-t border-brand-green-light/40 bg-brand-green-tint/50">
          <div className="mx-auto max-w-7xl px-4">
            <nav className="flex items-center gap-1 h-11 overflow-visible">
              <MegaMenu />
              <span className="h-4 w-px bg-border mx-1" />
              <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide flex-1">
                {categories.map((cat) => (
                  <a
                    key={cat.id}
                    href={`/category/${cat.id}`}
                    className="px-3 py-1.5 text-sm font-medium text-foreground/70 hover:text-brand-green-dark hover:bg-white rounded-md transition-colors whitespace-nowrap"
                  >
                    {cat.name}
                  </a>
                ))}
              </div>
              <a
                href="#videos"
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold text-red-600 hover:bg-red-50 rounded-md transition-colors whitespace-nowrap"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.5 6.2c-.3-1-1-1.8-2-2.1C19.7 3.5 12 3.5 12 3.5s-7.7 0-9.5.6c-1 .3-1.8 1.1-2 2.1C0 8 0 12 0 12s0 4 .5 5.8c.3 1 1 1.8 2 2.1 1.8.6 9.5.6 9.5.6s7.7 0 9.5-.6c1-.3 1.8-1.1 2-2.1.5-1.8.5-5.8.5-5.8s0-4-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
                </svg>
                ভিডিও
              </a>
            </nav>
          </div>
        </div>
      </div>

      <TrackDialog open={trackOpen} onOpenChange={setTrackOpen} />
    </header>
  );
}
