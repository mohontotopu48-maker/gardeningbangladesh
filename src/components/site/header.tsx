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
  ShieldCheck,
  Sprout,
  Gift,
  Crown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "./logo";
import { MegaMenu } from "./mega-menu";
import { TrackDialog } from "./track-dialog";
import { LanguageSwitcher } from "./language-switcher";
import { useCart } from "@/lib/cart-store";
import { categories, shopInfo } from "@/lib/data";

const announceMessages = [
  { icon: <Truck className="h-3.5 w-3.5" />, text: "ক্যাশ অন ডেলিভারি — সারা বাংলাদেশে" },
  { icon: <ShieldCheck className="h-3.5 w-3.5" />, text: "১০০% আসল পণ্য — মান নিশ্চিত" },
  { icon: <Sprout className="h-3.5 w-3.5" />, text: "২২০+ গার্ডেনিং পণ্য — এক ছাদে" },
  { icon: <Gift className="h-3.5 w-3.5" />, text: "১০০০৳+ অর্ডারে ফ্রি ডেলিভারি" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [trackOpen, setTrackOpen] = useState(false);
  const [announceIdx, setAnnounceIdx] = useState(0);
  const { open: openCart, totalCount } = useCart();
  const [count, setCount] = useState(0);

  // Smooth scroll to element
  const scrollToSection = (href: string) => {
    if (href.startsWith("#") && href.length > 1) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return true;
      }
    }
    return false;
  };

  // Rotate announcement messages
  useEffect(() => {
    const t = setInterval(() => {
      setAnnounceIdx((prev) => (prev + 1) % announceMessages.length);
    }, 3500);
    return () => clearInterval(t);
  }, []);

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
      {/* Announcement bar with rotating messages */}
      <div className="bg-gradient-brand-deep text-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 flex items-center justify-between h-9 text-xs">
          <div className="flex items-center gap-4">
            <span className="hidden sm:flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5" />
              {shopInfo.phone}
            </span>
            <AnimatePresence mode="wait">
              <motion.span
                key={announceIdx}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-1.5 opacity-95"
              >
                {announceMessages[announceIdx].icon}
                {announceMessages[announceIdx].text}
              </motion.span>
            </AnimatePresence>
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
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-brand-green group-focus-within:scale-110 transition-all" />
                <Input
                  placeholder="সার, বীজ, টব খুঁজুন..."
                  className="pl-9 pr-4 h-11 bg-brand-green-tint border-brand-green-light/50 focus-visible:ring-brand-green focus-visible:ring-2 focus-visible:bg-white focus-visible:border-brand-green rounded-full transition-all"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <LanguageSwitcher />
              <Button
                variant="outline"
                onClick={() => setTrackOpen(true)}
                className="group hidden sm:flex h-10 text-sm font-semibold rounded-full border-brand-green/30 bg-brand-green-tint/50 hover:bg-brand-green hover:text-white hover:border-brand-green transition-all hover:shadow-brand"
              >
                <MapPin className="h-4 w-4 mr-1.5 transition-transform group-hover:scale-110 group-hover:rotate-12" />
                ট্র্যাক
              </Button>
              <Button
                onClick={openCart}
                className="group relative h-10 overflow-hidden bg-gradient-brand hover:shadow-brand-lg text-white rounded-full transition-all hover:scale-105"
              >
                <ShoppingBag className="h-4 w-4 mr-1.5 transition-transform group-hover:scale-110 group-hover:-rotate-6" />
                <span className="hidden sm:inline font-semibold">কার্ট</span>
                <AnimatePresence>
                  {count > 0 && (
                    <motion.span
                      key={count}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 180 }}
                      transition={{ type: "spring", stiffness: 500, damping: 15 }}
                      className="ml-1.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-white text-brand-green-dark px-1.5 text-xs font-bold shadow-md ring-2 ring-white/30"
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
                    <Button
                      variant="outline"
                      asChild
                      className="justify-start h-11 border-amber-300 bg-amber-50 text-amber-700 hover:bg-amber-100"
                      onClick={() => setOpen(false)}
                    >
                      <a href="/membership">
                        <Crown className="h-4 w-4 mr-2" />
                        সদস্যপদ (১৫০৳)
                      </a>
                    </Button>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        {/* Category nav (desktop) — with Mega Menu */}
        <div className="hidden lg:block border-t border-brand-green-light/40 bg-gradient-to-r from-brand-green-tint/60 via-brand-green-tint/40 to-brand-green-tint/60">
          <div className="mx-auto max-w-7xl px-4">
            <nav className="flex items-center gap-1 h-12 overflow-visible">
              <MegaMenu />
              <span className="h-5 w-px bg-brand-green-light mx-1" />
              <div className="flex items-center gap-0.5 overflow-x-auto scrollbar-hide flex-1">
                {categories.map((cat) => (
                  <a
                    key={cat.id}
                    href={`/category/${cat.id}`}
                    className="group relative px-3.5 py-1.5 text-sm font-semibold text-foreground/70 hover:text-brand-green-dark rounded-lg transition-all whitespace-nowrap hover:bg-white/60"
                  >
                    {cat.name}
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-gradient-brand rounded-full transition-all duration-300 group-hover:w-4/5" />
                  </a>
                ))}
              </div>
              <a
                href="#videos"
                onClick={(e) => { e.preventDefault(); scrollToSection("#videos"); }}
                className="group flex items-center gap-1.5 px-3.5 py-1.5 text-sm font-bold text-red-600 hover:bg-red-50 rounded-lg transition-all whitespace-nowrap hover:shadow-sm"
              >
                <svg className="h-4 w-4 transition-transform group-hover:scale-125 group-hover:rotate-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.5 6.2c-.3-1-1-1.8-2-2.1C19.7 3.5 12 3.5 12 3.5s-7.7 0-9.5.6c-1 .3-1.8 1.1-2 2.1C0 8 0 12 0 12s0 4 .5 5.8c.3 1 1 1.8 2 2.1 1.8.6 9.5.6 9.5.6s7.7 0 9.5-.6c1-.3 1.8-1.1 2-2.1.5-1.8.5-5.8.5-5.8s0-4-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
                </svg>
                ভিডিও
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-red-500 rounded-full transition-all duration-300 group-hover:w-4/5" />
              </a>
              <a
                href="/membership"
                className="group flex items-center gap-1.5 px-4 py-1.5 text-sm font-bold text-white bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 hover:shadow-brand rounded-lg transition-all whitespace-nowrap hover:scale-105"
              >
                <Crown className="h-4 w-4 transition-transform group-hover:scale-125 group-hover:-rotate-6" />
                সদস্যপদ
              </a>
            </nav>
          </div>
        </div>
      </div>

      <TrackDialog open={trackOpen} onOpenChange={setTrackOpen} />
    </header>
  );
}
