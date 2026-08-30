"use client";

import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, MapPin, Leaf, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { categories, shopInfo } from "@/lib/data";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-shadow duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-brand-green-light"
          : "bg-white border-border"
      }`}
    >
      {/* Top bar */}
      <div className="hidden md:block bg-brand-green-dark text-white">
        <div className="mx-auto max-w-7xl px-4 flex items-center justify-between h-9 text-xs">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5" />
              {shopInfo.phone}
            </span>
            <span className="flex items-center gap-1.5 opacity-90">
              <MapPin className="h-3.5 w-3.5" />
              {shopInfo.address}
            </span>
          </div>
          <span className="opacity-90">ক্যাশ অন ডেলিভারি সারা বাংলাদেশে</span>
        </div>
      </div>

      {/* Main header */}
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 shrink-0">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-green text-white shadow-md shadow-brand-green/30">
              <Leaf className="h-5 w-5" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-brand-green-dark">
                {shopInfo.name}
              </span>
              <span className="text-[10px] text-muted-foreground -mt-0.5">
                {shopInfo.tagline}
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Button variant="ghost" asChild className="text-sm font-medium">
              <a href="#products">সব পণ্য</a>
            </Button>
            {categories.slice(0, 6).map((cat) => (
              <Button
                key={cat.id}
                variant="ghost"
                asChild
                className="text-sm font-medium"
              >
                <a href={`#category-${cat.id}`}>{cat.name}</a>
              </Button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              asChild
              className="hidden sm:flex text-sm font-medium"
            >
              <a href="#track">
                <MapPin className="h-4 w-4 mr-1.5" />
                ট্র্যাক
              </a>
            </Button>
            <Button
              asChild
              className="bg-brand-green hover:bg-brand-green-dark text-white shadow-sm"
            >
              <a href="#cart">
                <ShoppingBag className="h-4 w-4 mr-1.5" />
                <span className="hidden sm:inline">কার্ট</span>
                <span className="ml-1.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-white/25 px-1.5 text-xs font-bold">
                  0
                </span>
              </a>
            </Button>

            {/* Mobile menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden"
                  aria-label="মেনু"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] p-0">
                <div className="flex items-center justify-between p-4 border-b">
                  <span className="flex items-center gap-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-green text-white">
                      <Leaf className="h-5 w-5" />
                    </span>
                    <span className="font-bold text-brand-green-dark">
                      {shopInfo.name}
                    </span>
                  </span>
                </div>
                <nav className="flex flex-col gap-1 p-3 overflow-y-auto">
                  <Button
                    variant="ghost"
                    asChild
                    className="justify-start"
                    onClick={() => setOpen(false)}
                  >
                    <a href="#products">সব পণ্য</a>
                  </Button>
                  {categories.map((cat) => (
                    <Button
                      key={cat.id}
                      variant="ghost"
                      asChild
                      className="justify-start"
                      onClick={() => setOpen(false)}
                    >
                      <a href={`#category-${cat.id}`}>{cat.name}</a>
                    </Button>
                  ))}
                  <div className="my-2 h-px bg-border" />
                  <Button
                    variant="outline"
                    asChild
                    className="justify-start"
                    onClick={() => setOpen(false)}
                  >
                    <a href="#track">
                      <MapPin className="h-4 w-4 mr-2" />
                      ট্র্যাক
                    </a>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
