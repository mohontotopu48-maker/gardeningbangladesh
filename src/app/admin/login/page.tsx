"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Lock, User, ArrowLeft, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AdminLoginPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        localStorage.setItem("admin-token", data.token);
        window.location.href = "/dashboard";
      } else {
        setError(data.error || "ভুল আইডি বা পাসওয়ার্ড");
      }
    } catch {
      setError("লগইন করতে সমস্যা হয়েছে");
    }
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-black p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="rounded-3xl bg-white p-8 shadow-2xl">
          {/* Logo */}
          <div className="mb-6 flex flex-col items-center">
            <div className="relative h-20 w-20 overflow-hidden rounded-2xl">
              <Image
                src="/gb-logo-new-128.jpg"
                alt="Gardening Bangladesh"
                fill
                className="object-cover"
              />
            </div>
            <h1 className="mt-3 text-xl font-extrabold text-brand-black">
              Admin Login
            </h1>
            <p className="text-sm text-muted-foreground">
              Gardening Bangladesh Dashboard
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label className="text-xs flex items-center gap-1 mb-1">
                <User className="h-3 w-3" /> Admin ID
              </Label>
              <Input
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="admin"
                required
                className="bg-brand-white-soft rounded-xl"
              />
            </div>

            <div>
              <Label className="text-xs flex items-center gap-1 mb-1">
                <Lock className="h-3 w-3" /> Password
              </Label>
              <div className="relative">
                <Input
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="bg-brand-white-soft rounded-xl pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {error && (
              <p className="text-sm text-brand-red font-medium text-center">{error}</p>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-green hover:bg-brand-green-dark text-white rounded-xl h-12 font-bold"
            >
              {loading ? "লগইন হচ্ছে..." : "লগইন করুন"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <a
              href="/"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-brand-green"
            >
              <ArrowLeft className="h-4 w-4" />
              হোমে ফিরুন
            </a>
          </div>
        </div>

        {/* Hint */}
        <p className="mt-4 text-center text-xs text-white/60">
          ID: admin | Password: gardeningbd2026
        </p>
      </motion.div>
    </div>
  );
}
