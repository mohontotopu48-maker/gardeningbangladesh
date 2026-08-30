"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowLeft, Truck, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-store";
import { shopInfo } from "@/lib/data";

const FREE_SHIPPING_THRESHOLD = 1000;

export function CartDrawer() {
  const { items, isOpen, close, remove, updateQuantity, totalPrice, totalCount, clear } =
    useCart();

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const total = totalPrice();
  const count = totalCount();
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - total);
  const shippingProgress = Math.min(100, (total / FREE_SHIPPING_THRESHOLD) * 100);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
          />
          {/* Drawer */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 280 }}
            className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border bg-brand-green-tint px-5 py-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-green text-white">
                  <ShoppingBag className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="font-bold text-brand-green-deep">আপনার কার্ট</h2>
                  <p className="text-xs text-muted-foreground">{count} টি পণ্য</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={close}
                className="rounded-full hover:bg-brand-green-light"
                aria-label="বন্ধ করুন"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Free shipping progress */}
            {items.length > 0 && (
              <div className="border-b border-border bg-brand-green-light/40 px-5 py-3">
                {remaining > 0 ? (
                  <p className="text-xs text-foreground mb-1.5">
                    ফ্রি ডেলিভারি পেতে আর{" "}
                    <span className="font-bold text-brand-green-dark">
                      {remaining}৳
                    </span>{" "}
                    কেনাকাটা করুন 🚚
                  </p>
                ) : (
                  <p className="text-xs font-semibold text-brand-green-dark mb-1.5">
                    🎉 অভিনন্দন! আপনি ফ্রি ডেলিভারি পেয়েছেন!
                  </p>
                )}
                <div className="h-2 w-full overflow-hidden rounded-full bg-white">
                  <motion.div
                    className="h-full bg-gradient-brand rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${shippingProgress}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
            )}

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-5 py-4 scrollbar-thin">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-green-light text-brand-green">
                    <ShoppingBag className="h-10 w-10" />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">কার্ট খালি</p>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      আপনার পছন্দের পণ্য যোগ করুন
                    </p>
                  </div>
                  <Button
                    onClick={close}
                    className="mt-2 bg-brand-green hover:bg-brand-green-dark rounded-full"
                  >
                    কেনাকাটা শুরু করুন
                  </Button>
                </div>
              ) : (
                <ul className="space-y-3">
                  <AnimatePresence initial={false}>
                    {items.map((item) => (
                      <motion.li
                        key={item.product.id}
                        layout
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, x: 50, height: 0 }}
                        className="flex gap-3 rounded-2xl border border-border bg-card p-3 shadow-sm"
                      >
                        {/* Image */}
                        <CartItemImage product={item.product} />
                        {/* Info */}
                        <div className="flex flex-1 flex-col gap-1 min-w-0">
                          <h3 className="text-sm font-medium leading-snug text-foreground line-clamp-2">
                            {item.product.name}
                          </h3>
                          <p className="text-sm font-bold text-brand-green-dark">
                            {item.product.price}৳
                            <span className="text-xs text-muted-foreground font-normal">
                              {" "}
                              × {item.quantity}
                            </span>
                          </p>
                          {/* Quantity controls */}
                          <div className="mt-1 flex items-center justify-between">
                            <div className="flex items-center gap-1 rounded-lg border border-border bg-brand-green-tint">
                              <button
                                onClick={() =>
                                  updateQuantity(
                                    item.product.id,
                                    item.quantity - 1,
                                  )
                                }
                                className="flex h-7 w-7 items-center justify-center rounded-l-lg text-foreground hover:bg-brand-green hover:text-white transition-colors"
                                aria-label="কমান"
                              >
                                <Minus className="h-3.5 w-3.5" />
                              </button>
                              <span className="w-7 text-center text-sm font-semibold">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(
                                    item.product.id,
                                    item.quantity + 1,
                                  )
                                }
                                className="flex h-7 w-7 items-center justify-center rounded-r-lg text-foreground hover:bg-brand-green hover:text-white transition-colors"
                                aria-label="বাড়ান"
                              >
                                <Plus className="h-3.5 w-3.5" />
                              </button>
                            </div>
                            <button
                              onClick={() => remove(item.product.id)}
                              className="flex h-7 w-7 items-center justify-center rounded-lg text-red-500 hover:bg-red-50 transition-colors"
                              aria-label="মুছুন"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                        {/* Subtotal */}
                        <div className="flex flex-col items-end justify-between">
                          <span className="text-sm font-extrabold text-foreground">
                            {item.product.price * item.quantity}৳
                          </span>
                        </div>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              )}
            </div>

            {/* Footer / Checkout */}
            {items.length > 0 && (
              <div className="border-t border-border bg-brand-green-tint/50 px-5 py-4 space-y-3">
                {/* Trust badges */}
                <div className="flex items-center justify-center gap-4 text-[11px] text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Truck className="h-3.5 w-3.5 text-brand-green" />
                    সারা দেশে ডেলিভারি
                  </span>
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="h-3.5 w-3.5 text-brand-green" />
                    ক্যাশ অন ডেলিভারি
                  </span>
                </div>
                {/* Totals */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">সাবটোটাল</span>
                    <span className="font-semibold">{total}৳</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">ডেলিভারি চার্জ</span>
                    <span className="font-semibold text-brand-green-dark">
                      {total >= FREE_SHIPPING_THRESHOLD ? "ফ্রি" : "60৳"}
                    </span>
                  </div>
                  <div className="flex justify-between border-t border-border pt-1.5">
                    <span className="font-bold">সর্বমোট</span>
                    <span className="text-lg font-extrabold text-brand-green-dark">
                      {total + (total >= FREE_SHIPPING_THRESHOLD ? 0 : 60)}৳
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={clear}
                    className="rounded-full border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  <Button
                    asChild
                    className="flex-1 bg-brand-green hover:bg-brand-green-dark rounded-full font-bold shadow-brand"
                  >
                    <a href={`tel:${shopInfo.phone}`}>
                      চেকআউট করুন
                      <ArrowLeft className="h-4 w-4 ml-1.5" />
                    </a>
                  </Button>
                </div>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

function CartItemImage({ product }: { product: import("@/lib/data").Product }) {
  const [error, setError] = useState(false);
  return (
    <div
      className={`relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${product.gradient}`}
    >
      {product.image && !error ? (
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="64px"
          onError={() => setError(true)}
        />
      ) : (
        <span className="text-3xl">{product.emoji}</span>
      )}
    </div>
  );
}
