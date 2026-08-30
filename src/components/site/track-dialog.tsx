"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  MapPin,
  Package,
  Truck,
  CheckCircle2,
  Search,
  Clock,
  PackageCheck,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type TrackStep = {
  icon: typeof Package;
  label: string;
  desc: string;
};

const steps: TrackStep[] = [
  { icon: Package, label: "অর্ডার গৃহীত", desc: "আপনার অর্ডারটি নিশ্চিত হয়েছে" },
  { icon: PackageCheck, label: "প্যাকেজিং", desc: "পণ্য প্যাক করা হচ্ছে" },
  { icon: Truck, label: "পথে আছে", desc: "কুরিয়ারে হস্তান্তর সম্পন্ন" },
  { icon: Home, label: "ডেলিভারি সম্পন্ন", desc: "আপনার ঠিকানায় পৌঁছে গেছে" },
];

export function TrackDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const [orderId, setOrderId] = useState("");
  const [phone, setPhone] = useState("");
  const [result, setResult] = useState<{
    status: number;
    name: string;
    date: string;
    items: number;
    total: number;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderId.trim() || !phone.trim()) return;
    setLoading(true);
    setResult(null);
    // Simulate API lookup — deterministic status based on order id length
    setTimeout(() => {
      const statusNum = Math.min(
        4,
        Math.max(1, (orderId.replace(/\D/g, "").length % 4) + 1),
      );
      setResult({
        status: statusNum,
        name: `GB${orderId.slice(-6).padStart(6, "0")}`,
        date: new Date().toLocaleDateString("bn-BD", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
        items: 3,
        total: 540,
      });
      setLoading(false);
    }, 1200);
  };

  const reset = () => {
    setResult(null);
    setOrderId("");
    setPhone("");
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        onOpenChange(v);
        if (!v) setTimeout(reset, 300);
      }}
    >
      <DialogContent className="max-w-lg p-0 overflow-hidden gap-0">
        <DialogTitle className="sr-only">অর্ডার ট্র্যাক করুন</DialogTitle>
        <DialogDescription className="sr-only">
          আপনার অর্ডারের বর্তমান অবস্থা দেখুন
        </DialogDescription>

        {/* Header */}
        <div className="bg-gradient-brand p-6 text-white">
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/30">
              <MapPin className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-lg font-bold">অর্ডার ট্র্যাক করুন</h2>
              <p className="text-xs text-white/80">
                আপনার অর্ডার এখন কোথায়? জানতে নিচের তথ্য দিন
              </p>
            </div>
          </div>
        </div>

        <div className="p-6">
          {!result ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">
                  অর্ডার আইডি <span className="text-red-500">*</span>
                </label>
                <Input
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  placeholder="যেমন: GB123456"
                  className="bg-brand-green-tint border-brand-green-light/50 focus-visible:ring-brand-green rounded-xl"
                  required
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">
                  মোবাইল নম্বর <span className="text-red-500">*</span>
                </label>
                <Input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="01XXXXXXXXX"
                  className="bg-brand-green-tint border-brand-green-light/50 focus-visible:ring-brand-green rounded-xl"
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-brand-green hover:bg-brand-green-dark rounded-xl font-semibold shadow-brand h-11"
              >
                {loading ? (
                  <>
                    <Clock className="h-4 w-4 mr-1.5 animate-spin" />
                    খোঁজা হচ্ছে...
                  </>
                ) : (
                  <>
                    <Search className="h-4 w-4 mr-1.5" />
                    অর্ডার খুঁজুন
                  </>
                )}
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                💡 টেস্টের জন্য যেকোনো আইডি ও নম্বর দিন
              </p>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-5"
            >
              {/* Order summary */}
              <div className="rounded-2xl bg-brand-green-tint p-4 ring-1 ring-brand-green-light">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">অর্ডার নম্বর</p>
                    <p className="font-bold text-brand-green-deep">
                      {result.name}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">অর্ডার তারিখ</p>
                    <p className="text-sm font-medium">{result.date}</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between border-t border-brand-green-light pt-3 text-sm">
                  <span className="text-muted-foreground">
                    {result.items} টি পণ্য
                  </span>
                  <span className="font-bold text-brand-green-dark">
                    {result.total}৳
                  </span>
                </div>
              </div>

              {/* Tracking timeline */}
              <div className="relative">
                {steps.map((step, i) => {
                  const done = i < result.status;
                  const active = i === result.status - 1;
                  const Icon = step.icon;
                  return (
                    <div key={i} className="relative flex gap-3 pb-6 last:pb-0">
                      {/* Line */}
                      {i < steps.length - 1 && (
                        <div className="absolute left-5 top-10 h-[calc(100%-1.5rem)] w-0.5 bg-border">
                          <motion.div
                            className="w-full bg-brand-green"
                            initial={{ height: 0 }}
                            animate={{ height: done ? "100%" : "0%" }}
                            transition={{ delay: i * 0.2, duration: 0.4 }}
                          />
                        </div>
                      )}
                      {/* Icon */}
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: i * 0.15 }}
                        className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ring-4 ring-white transition-colors ${
                          done
                            ? "bg-brand-green text-white"
                            : "bg-muted text-muted-foreground"
                        } ${active ? "animate-pulse-ring" : ""}`}
                      >
                        {done ? (
                          <CheckCircle2 className="h-5 w-5" />
                        ) : (
                          <Icon className="h-5 w-5" />
                        )}
                      </motion.div>
                      {/* Text */}
                      <div className="pt-1.5">
                        <p
                          className={`text-sm font-semibold ${
                            done
                              ? "text-brand-green-deep"
                              : "text-muted-foreground"
                          }`}
                        >
                          {step.label}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Button
                onClick={reset}
                variant="outline"
                className="w-full rounded-xl"
              >
                অন্য অর্ডার খুঁজুন
              </Button>
            </motion.div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
