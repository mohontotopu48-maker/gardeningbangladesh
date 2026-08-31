"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";
import { shopInfo } from "@/lib/data";

export function FloatingBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2.5 print:hidden">
      {/* Scroll to top */}
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-green-dark shadow-lg ring-1 ring-border transition-all hover:bg-brand-green hover:text-white hover:scale-110"
          aria-label="উপরে যান"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
      {/* WhatsApp / Call */}
      <a
        href={`tel:${shopInfo.phone}`}
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-brand-green text-white shadow-brand-lg animate-pulse-ring transition-transform hover:scale-110"
        aria-label="অর্ডার করতে কল করুন"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
