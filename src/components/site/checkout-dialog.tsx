"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Loader2, CheckCircle2, Phone, MapPin, User, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { track } from "@/lib/tracking";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useCart } from "@/lib/cart-store";
import { shopInfo } from "@/lib/data";

type CheckoutState = "form" | "loading" | "success";

export function CheckoutDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const { items, totalPrice, totalCount, clear } = useCart();
  const [state, setState] = useState<CheckoutState>("form");
  const [orderNumber, setOrderNumber] = useState("");
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    note: "",
  });

  const total = totalPrice();
  const count = totalCount();
  const delivery = total >= 1000 ? 0 : 60;
  const grandTotal = total + delivery;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      setError("নাম ও ফোন নম্বর আবশ্যক");
      return;
    }

    setState("loading");
    setError("");
    track.beginCheckout(items.map((i) => ({ id: i.product.id, name: i.product.name, price: i.product.price, quantity: i.quantity })), grandTotal);

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer: {
            name: form.name,
            phone: form.phone,
            email: form.email || undefined,
            address: form.address || undefined,
            city: form.city || undefined,
          },
          items: items.map((item) => ({
            productId: item.product.id,
            name: item.product.name,
            price: item.product.price,
            quantity: item.quantity,
            image: item.product.image,
          })),
          subtotal: total,
          deliveryCharge: delivery,
          total: grandTotal,
          note: form.note || undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "অর্ডার করতে সমস্যা");
      }

      setOrderNumber(data.order.orderNumber);
      setState("success");
      track.purchase(data.order.orderNumber, items.map((item) => ({ id: item.product.id, name: item.product.name, price: item.product.price, quantity: item.quantity })), grandTotal);
      clear();
    } catch (err: any) {
      setError(err.message || "অর্ডার করতে সমস্যা হয়েছে");
      setState("form");
    }
  };

  const reset = () => {
    setState("form");
    setOrderNumber("");
    setError("");
    setForm({ name: "", phone: "", email: "", address: "", city: "", note: "" });
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        onOpenChange(v);
        if (!v) setTimeout(reset, 300);
      }}
    >
      <DialogContent className="max-w-lg p-0 overflow-hidden gap-0 max-h-[90vh] overflow-y-auto">
        <DialogTitle className="sr-only">চেকআউট</DialogTitle>
        <DialogDescription className="sr-only">
          আপনার অর্ডার সম্পূর্ণ করুন
        </DialogDescription>

        <AnimatePresence mode="wait">
          {state === "form" && (
            <motion.div
              key="form"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              {/* Header */}
              <div className="bg-gradient-brand p-5 text-white">
                <h2 className="text-lg font-bold flex items-center gap-2">
                  <ShoppingBag className="h-5 w-5" />
                  চেকআউট
                </h2>
                <p className="text-xs text-white/80 mt-1">
                  {count} টি পণ্য · সর্বমোট {grandTotal}৳
                </p>
              </div>

              <form onSubmit={handleSubmit} className="p-5 space-y-4">
                {/* Customer info */}
                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-brand-green-deep flex items-center gap-1.5">
                    <User className="h-4 w-4" />
                    আপনার তথ্য
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <Label className="text-xs">নাম *</Label>
                      <Input
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="আপনার নাম"
                        required
                        className="mt-1 bg-brand-green-tint rounded-lg"
                      />
                    </div>
                    <div>
                      <Label className="text-xs">ফোন নম্বর *</Label>
                      <Input
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="01XXXXXXXXX"
                        required
                        className="mt-1 bg-brand-green-tint rounded-lg"
                      />
                    </div>
                  </div>
                  <Input
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="ইমেইল (ঐচ্ছিক)"
                    className="bg-brand-green-tint rounded-lg"
                  />
                </div>

                {/* Delivery info */}
                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-brand-green-deep flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" />
                    ডেলিভারি ঠিকানা
                  </h3>
                  <Input
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    placeholder="সম্পূর্ণ ঠিকানা"
                    className="bg-brand-green-tint rounded-lg"
                  />
                  <Input
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    placeholder="জেলা/শহর"
                    className="bg-brand-green-tint rounded-lg"
                  />
                </div>

                {/* Order summary */}
                <div className="rounded-xl bg-brand-green-tint p-4 space-y-1.5">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">সাবটোটাল ({count} পণ্য)</span>
                    <span className="font-semibold">{total}৳</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">ডেলিভারি চার্জ</span>
                    <span className="font-semibold text-brand-green-dark">
                      {delivery === 0 ? "ফ্রি" : `${delivery}৳`}
                    </span>
                  </div>
                  <div className="flex justify-between border-t border-brand-green-light pt-1.5">
                    <span className="font-bold">সর্বমোট</span>
                    <span className="text-lg font-extrabold text-brand-green-dark">{grandTotal}৳</span>
                  </div>
                </div>

                {/* COD notice */}
                <div className="flex items-center gap-2 rounded-lg bg-amber-50 p-3 text-xs text-amber-800">
                  <Truck className="h-4 w-4 shrink-0" />
                  ক্যাশ অন ডেলিভারি — পণ্য হাতে পেয়ে টাকা দিন
                </div>

                {error && (
                  <p className="text-sm text-red-500 text-center">{error}</p>
                )}

                <Button
                  type="submit"
                  className="w-full bg-brand-green hover:bg-brand-green-dark rounded-xl font-bold h-12 shadow-brand"
                >
                  অর্ডার নিশ্চিত করুন
                </Button>
              </form>
            </motion.div>
          )}

          {state === "loading" && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-20 gap-4"
            >
              <Loader2 className="h-12 w-12 animate-spin text-brand-green" />
              <p className="text-sm font-medium text-muted-foreground">
                আপনার অর্ডার প্রসেস হচ্ছে...
              </p>
            </motion.div>
          )}

          {state === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col items-center justify-center py-10 px-6 text-center gap-4"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-green-light"
              >
                <CheckCircle2 className="h-12 w-12 text-brand-green" />
              </motion.div>
              <div>
                <h2 className="text-xl font-bold text-brand-green-deep">অর্ডার সফল! 🎉</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  আপনার অর্ডার নম্বর:
                </p>
                <p className="text-2xl font-extrabold text-brand-green mt-1">{orderNumber}</p>
              </div>
              <div className="w-full rounded-xl bg-brand-green-tint p-4 text-left text-sm space-y-1">
                <p>📞 আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।</p>
                <p>🚚 ক্যাশ অন ডেলিভারিতে পণ্য পাঠানো হবে।</p>
                <p>📍 এই অর্ডার নম্বর দিয়ে ট্র্যাক করুন।</p>
              </div>
              <div className="flex gap-2 w-full">
                <Button
                  variant="outline"
                  onClick={() => onOpenChange(false)}
                  className="flex-1 rounded-xl"
                >
                  বন্ধ করুন
                </Button>
                <Button
                  asChild
                  className="flex-1 bg-brand-green hover:bg-brand-green-dark rounded-xl"
                >
                  <a href={`tel:${shopInfo.phone}`}>
                    <Phone className="h-4 w-4 mr-1.5" />
                    কল করুন
                  </a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
