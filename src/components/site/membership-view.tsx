"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Crown, Check, User, Phone, Mail, MapPin, Loader2, CheckCircle2,
  Sparkles, Gift, Tag, Users, ArrowRight, Star, Shield, Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { FloatingBar } from "@/components/site/floating-bar";
import { QuickSidebar } from "@/components/site/quick-sidebar";
import { CartDrawer } from "@/components/site/cart-drawer";
import { AnimatedBackground } from "@/components/site/animated-background";
import { PageHeaderImage } from "@/components/site/page-header-image";
import { shopInfo } from "@/lib/data";

type Plan = "monthly" | "lifetime";

const planConfig = {
  monthly: {
    label: "মাসিক সদস্যপদ",
    price: 250,
    period: "/ মাস",
    icon: Star,
    color: "from-brand-green to-brand-green-dark",
    badge: "জনপ্রিয়",
    popular: true,
  },
  lifetime: {
    label: "এককালীন সদস্যপদ",
    price: 150,
    period: " একবার",
    icon: Crown,
    color: "from-amber-500 to-orange-600",
    badge: "সেরা মূল্য",
    popular: false,
  },
};

const benefits = [
  { icon: Tag, title: "সদস্য ছাড়", desc: "সব পণ্যে বিশেষ সদস্য ছাড়" },
  { icon: Truck, title: "ফ্রি ডেলিভারি", desc: "৫০০৳+ অর্ডারে ফ্রি ডেলিভারি" },
  { icon: Gift, title: "উপহার", desc: "মাসে একটি ফ্রি গাছ/সার" },
  { icon: Shield, title: "অগ্রাধিকার", desc: "অর্ডারে অগ্রাধিকার পাবেন" },
  { icon: Users, title: "কমিউনিটি", desc: "গার্ডেনিং গ্রুপে অ্যাক্সেস" },
  { icon: Sparkles, title: "টিপস ও গাইড", desc: "এক্সক্লুসিভ গার্ডেনিং টিপস" },
];

type FormState = "form" | "loading" | "success";

export function MembershipView() {
  const [selectedPlan, setSelectedPlan] = useState<Plan>("monthly");
  const [state, setState] = useState<FormState>("form");
  const [error, setError] = useState("");
  const [memberCode, setMemberCode] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    note: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      setError("নাম ও ফোন নম্বর আবশ্যক");
      return;
    }

    setState("loading");
    setError("");

    try {
      const res = await fetch("/api/memberships", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          email: form.email || undefined,
          address: form.address || undefined,
          city: form.city || undefined,
          note: form.note || undefined,
          plan: selectedPlan,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "সদস্যপদ তৈরি করতে সমস্যা");
      }

      setMemberCode(data.membership.memberCode);
      setState("success");
    } catch (err: any) {
      setError(err.message || "সদস্যপদ তৈরি করতে সমস্যা হয়েছে");
      setState("form");
    }
  };

  const reset = () => {
    setState("form");
    setMemberCode("");
    setError("");
    setForm({ name: "", phone: "", email: "", address: "", city: "", note: "" });
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <PageHeaderImage
          src="/gallery/gardening-bangladesh-community.jpg"
          alt="Gardening Bangladesh Membership"
          title="সদস্যপদ"
          subtitle="Gardening Bangladesh Membership"
        />
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/gallery/gardening-bangladesh-community.jpg"
              alt="Gardening Bangladesh Membership"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-brand-green-deep/95 via-brand-green-dark/85 to-brand-green/60" />
          </div>
          <AnimatedBackground variant="hero" />
          <div className="relative mx-auto max-w-5xl px-4 py-16 sm:py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-bold text-white ring-1 ring-white/25 backdrop-blur-sm"
              >
                <Crown className="h-4 w-4" />
                Gardening Bangladesh Membership
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-4 text-3xl sm:text-5xl font-extrabold text-white"
              >
                সদস্য হোন, সবুজ উপভোগ করুন 🌱
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-3 text-sm sm:text-base text-white/85 max-w-xl mx-auto"
              >
                আমাদের সদস্য হয়ে পান বিশেষ ছাড়, ফ্রি ডেলিভারি, উপহার ও এক্সক্লুসিভ
                গার্ডেনিং টিপস। মাত্র ১৫০৳ এককালীন বা মাসে ২৫০৳।
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="bg-brand-cream py-12">
          <div className="mx-auto max-w-4xl px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {(Object.keys(planConfig) as Plan[]).map((key, i) => {
                const plan = planConfig[key];
                const Icon = plan.icon;
                const isSelected = selectedPlan === key;
                return (
                  <motion.button
                    key={key}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.15 }}
                    whileHover={{ y: -6 }}
                    onClick={() => setSelectedPlan(key)}
                    className={`group relative overflow-hidden rounded-3xl border-2 p-6 text-left transition-all ${
                      isSelected
                        ? "border-brand-green shadow-brand-lg bg-white scale-[1.02]"
                        : "border-border bg-white shadow-premium hover:shadow-lg"
                    }`}
                  >
                    {/* Badge */}
                    {plan.badge && (
                      <span
                        className={`absolute right-4 top-4 inline-flex items-center rounded-full bg-gradient-to-r ${plan.color} px-2.5 py-0.5 text-[10px] font-bold text-white`}
                      >
                        {plan.badge}
                      </span>
                    )}
                    {/* Selected check */}
                    {isSelected && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute left-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-brand-green text-white"
                      >
                        <Check className="h-4 w-4" />
                      </motion.span>
                    )}
                    <span
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${plan.color} text-white shadow-lg mt-6`}
                    >
                      <Icon className="h-7 w-7" />
                    </span>
                    <h3 className="mt-4 text-lg font-bold text-foreground">
                      {plan.label}
                    </h3>
                    <div className="mt-2 flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-brand-green-dark">
                        {plan.price}
                      </span>
                      <span className="text-lg font-bold text-brand-green-dark">৳</span>
                      <span className="text-sm text-muted-foreground">{plan.period}</span>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">
                      {key === "monthly"
                        ? "প্রতি মাসে নবায়নযোগ্য, যেকোনো সময় বাতিল করুন"
                        : "একবার পরিশোধ, আজীবন সদস্যপদ"}
                    </p>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-white py-12">
          <div className="mx-auto max-w-5xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 text-center"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-green-light px-3 py-1 text-xs font-semibold text-brand-green-dark">
                <Gift className="h-3.5 w-3.5" />
                সদস্য সুবিধা
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-brand-green-deep">
                সদস্য হিসেবে যা যা পাবেন
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ y: -4 }}
                    className="flex items-start gap-3 rounded-2xl border border-border bg-brand-green-tint/30 p-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-green-light text-brand-green-dark">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-bold text-foreground text-sm">{b.title}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{b.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="form" className="scroll-mt-20 bg-brand-cream py-12">
          <div className="mx-auto max-w-2xl px-4">
            <AnimatePresence mode="wait">
              {state === "form" && (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="rounded-3xl border border-border bg-white p-6 sm:p-8 shadow-premium"
                >
                  <div className="mb-6 text-center">
                    <h2 className="text-2xl font-extrabold text-brand-green-deep">
                      সদস্যপদের আবেদন
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      নিচের ফর্ম পূরণ করুন — আমরা শীঘ্রই যোগাযোগ করব
                    </p>
                    {/* Selected plan badge */}
                    <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-brand-green-tint px-3 py-1.5 text-sm font-semibold text-brand-green-dark">
                      {(() => {
                        const PlanIcon = planConfig[selectedPlan].icon;
                        return <PlanIcon className="h-4 w-4" />;
                      })()}
                      {planConfig[selectedPlan].label} — {planConfig[selectedPlan].price}৳{planConfig[selectedPlan].period}
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-xs flex items-center gap-1">
                          <User className="h-3 w-3" /> নাম *
                        </Label>
                        <Input
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="আপনার নাম"
                          required
                          className="mt-1 bg-brand-green-tint rounded-xl"
                        />
                      </div>
                      <div>
                        <Label className="text-xs flex items-center gap-1">
                          <Phone className="h-3 w-3" /> ফোন নম্বর *
                        </Label>
                        <Input
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="01XXXXXXXXX"
                          required
                          className="mt-1 bg-brand-green-tint rounded-xl"
                        />
                      </div>
                    </div>

                    <div>
                      <Label className="text-xs flex items-center gap-1">
                        <Mail className="h-3 w-3" /> ইমেইল (ঐচ্ছিক)
                      </Label>
                      <Input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@example.com"
                        className="mt-1 bg-brand-green-tint rounded-xl"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-xs flex items-center gap-1">
                          <MapPin className="h-3 w-3" /> ঠিকানা
                        </Label>
                        <Input
                          value={form.address}
                          onChange={(e) => setForm({ ...form, address: e.target.value })}
                          placeholder="সম্পূর্ণ ঠিকানা"
                          className="mt-1 bg-brand-green-tint rounded-xl"
                        />
                      </div>
                      <div>
                        <Label className="text-xs">জেলা/শহর</Label>
                        <Input
                          value={form.city}
                          onChange={(e) => setForm({ ...form, city: e.target.value })}
                          placeholder="জেলা"
                          className="mt-1 bg-brand-green-tint rounded-xl"
                        />
                      </div>
                    </div>

                    <div>
                      <Label className="text-xs">নোট (ঐচ্ছিক)</Label>
                      <Textarea
                        value={form.note}
                        onChange={(e) => setForm({ ...form, note: e.target.value })}
                        placeholder="আপনার কোনো বিশেষ অনুরোধ..."
                        className="mt-1 bg-brand-green-tint rounded-xl min-h-[80px]"
                      />
                    </div>

                    {/* COD notice */}
                    <div className="flex items-center gap-2 rounded-xl bg-amber-50 p-3 text-xs text-amber-800">
                      <Shield className="h-4 w-4 shrink-0" />
                      অর্থ পরিশোধ ক্যাশ অন ডেলিভারি বা বিকাশের মাধ্যমে — আমরা ফোনে যোগাযোগ করে নিশ্চিত করব
                    </div>

                    {error && (
                      <p className="text-sm text-red-500 text-center">{error}</p>
                    )}

                    <Button
                      type="submit"
                      className="w-full bg-gradient-brand hover:shadow-brand-lg rounded-xl font-bold h-12 text-base"
                    >
                      সদস্যপদের আবেদন জমা দিন
                      <ArrowRight className="h-4 w-4 ml-1.5" />
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
                  className="flex flex-col items-center justify-center py-20 gap-4 rounded-3xl bg-white shadow-premium"
                >
                  <Loader2 className="h-12 w-12 animate-spin text-brand-green" />
                  <p className="text-sm font-medium text-muted-foreground">
                    আপনার আবেদন প্রসেস হচ্ছে...
                  </p>
                </motion.div>
              )}

              {state === "success" && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-3xl border border-brand-green/30 bg-white p-8 shadow-brand-lg text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-green-light"
                  >
                    <CheckCircle2 className="h-12 w-12 text-brand-green" />
                  </motion.div>
                  <h2 className="mt-4 text-2xl font-bold text-brand-green-deep">
                    সদস্যপদের আবেদন সফল! 🎉
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    আপনার সদস্য কোড:
                  </p>
                  <p className="text-2xl font-extrabold text-brand-green mt-1 font-mono">
                    {memberCode}
                  </p>
                  <div className="mt-4 w-full rounded-xl bg-brand-green-tint p-4 text-left text-sm space-y-1">
                    <p>
                      <strong>প্ল্যান:</strong> {planConfig[selectedPlan].label}
                    </p>
                    <p>
                      <strong>মূল্য:</strong> {planConfig[selectedPlan].price}৳{planConfig[selectedPlan].period}
                    </p>
                    <p>📞 আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।</p>
                    <p>💰 অর্থ পরিশোধ ক্যাশ অন ডেলিভারি বা বিকাশে।</p>
                  </div>
                  <div className="mt-5 flex gap-2">
                    <Button
                      variant="outline"
                      onClick={reset}
                      className="flex-1 rounded-xl"
                    >
                      আরেকটি আবেদন
                    </Button>
                    <Button asChild className="flex-1 bg-brand-green hover:bg-brand-green-dark rounded-xl">
                      <a href="/">হোমে ফিরুন</a>
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingBar />
      <QuickSidebar />
      <CartDrawer />
    </div>
  );
}
