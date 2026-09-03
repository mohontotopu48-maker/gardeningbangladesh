"use client";

import { useState, useEffect } from "react";
import { Globe, Check } from "lucide-react";

type Lang = "bn" | "en";

export function LanguageSwitcher() {
  const [lang, setLang] = useState<Lang>("bn");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("gb-lang")) as Lang | null;
    if (saved === "en" || saved === "bn") {
      /* eslint-disable react-hooks/set-state-in-effect */
      setLang(saved);
      /* eslint-enable react-hooks/set-state-in-effect */
    }
  }, []);

  const switchTo = (l: Lang) => {
    localStorage.setItem("gb-lang", l);
    setOpen(false);
    // Reload to apply language change
    window.location.reload();
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-foreground/70 hover:text-brand-green-dark hover:bg-brand-green-tint transition-all"
        aria-label="Language"
      >
        <Globe className="h-3.5 w-3.5" />
        {lang === "bn" ? "বাংলা" : "English"}
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1 w-32 rounded-xl border border-border bg-white shadow-lg z-50 overflow-hidden">
          <button
            onClick={() => switchTo("bn")}
            className={`flex w-full items-center justify-between px-3 py-2 text-sm hover:bg-brand-green-tint transition-colors ${
              lang === "bn" ? "text-brand-green-dark font-bold" : "text-foreground"
            }`}
          >
            বাংলা
            {lang === "bn" && <Check className="h-4 w-4" />}
          </button>
          <button
            onClick={() => switchTo("en")}
            className={`flex w-full items-center justify-between px-3 py-2 text-sm hover:bg-brand-green-tint transition-colors ${
              lang === "en" ? "text-brand-green-dark font-bold" : "text-foreground"
            }`}
          >
            English
            {lang === "en" && <Check className="h-4 w-4" />}
          </button>
        </div>
      )}
    </div>
  );
}
