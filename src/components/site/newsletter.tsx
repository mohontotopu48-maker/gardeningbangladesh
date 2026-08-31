"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setDone(true);
      setEmail("");
      setTimeout(() => setDone(false), 3500);
    }
  };

  return (
    <section className="bg-brand-cream">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-8 sm:p-12 shadow-brand">
          {/* Decorative orbs */}
          <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-brand-green-bright/20 blur-2xl" />

          <div className="relative grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
            <div className="text-white">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-medium ring-1 ring-white/25">
                <Mail className="h-3.5 w-3.5" />
                নিউজলেটার
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight">
                গার্ডেনিং টিপস পান ইনবক্সে 🌿
              </h2>
              <p className="mt-2 text-sm text-white/85 max-w-md">
                নতুন পণ্য, ডিসকাউন্ট অফার ও ছাদ বাগানের টিপস সরাসরি আপনার
                ইনবক্সে। সাবস্ক্রাইব করে ১০% ছাড়ের কুপন পান।
              </p>
            </div>

            <div>
              {done ? (
                <div className="flex items-center gap-3 rounded-2xl bg-white/15 p-5 ring-1 ring-white/25 backdrop-blur-sm">
                  <CheckCircle2 className="h-8 w-8 text-brand-green-bright shrink-0" />
                  <div>
                    <p className="font-semibold text-white">সাবস্ক্রিপশন সফল!</p>
                    <p className="text-sm text-white/80">
                      আপনার ইনবক্সে কুপন কোড পাঠানো হয়েছে।
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={submit} className="flex flex-col sm:flex-row gap-2.5">
                  <Input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="আপনার ইমেইল ঠিকানা"
                    className="h-12 flex-1 bg-white border-0 text-foreground placeholder:text-muted-foreground rounded-full shadow-lg"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="h-12 bg-brand-green-deep hover:bg-black/80 text-white font-semibold rounded-full px-6 shadow-lg"
                  >
                    <Send className="h-4 w-4 mr-1.5" />
                    সাবস্ক্রাইব
                  </Button>
                </form>
              )}
              <p className="mt-2.5 text-xs text-white/70">
                আমরা আপনার প্রাইভেসি সম্মান করি। যেকোনো সময় আনসাবস্ক্রাইব করতে পারেন।
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Youtube({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M23.5 6.2c-.3-1-1-1.8-2-2.1C19.7 3.5 12 3.5 12 3.5s-7.7 0-9.5.6c-1 .3-1.8 1.1-2 2.1C0 8 0 12 0 12s0 4 .5 5.8c.3 1 1 1.8 2 2.1 1.8.6 9.5.6 9.5.6s7.7 0 9.5-.6c1-.3 1.8-1.1 2-2.1.5-1.8.5-5.8.5-5.8s0-4-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
    </svg>
  );
}
