import { Leaf, MapPin, Phone, Mail, Truck, ShieldCheck, CreditCard } from "lucide-react";
import { shopInfo, footerLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="mt-auto bg-brand-green-dark text-white">
      {/* Feature strip */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                <Truck className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold">সারা দেশে ডেলিভারি</p>
                <p className="text-xs text-white/70">দ্রুত ও নিরাপদ হোম ডেলিভারি</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                <CreditCard className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold">ক্যাশ অন ডেলিভারি</p>
                <p className="text-xs text-white/70">পণ্য হাতে পেয়ে টাকা দিন</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold">১০০% আসল পণ্য</p>
                <p className="text-xs text-white/70">মান নিশ্চিত, গ্যারান্টিসহ</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-brand-green-dark">
                <Leaf className="h-5 w-5" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-lg font-bold">{shopInfo.name}</span>
                <span className="text-[10px] text-white/60 -mt-0.5">
                  {shopInfo.tagline}
                </span>
              </span>
            </a>
            <p className="text-sm leading-relaxed text-white/80">
              {shopInfo.description}
            </p>
            <div className="space-y-2 text-sm">
              <a
                href={`tel:${shopInfo.phone}`}
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 shrink-0" />
                {shopInfo.phone}
              </a>
              <a
                href={`mailto:${shopInfo.email}`}
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 shrink-0" />
                <span className="break-all">{shopInfo.email}</span>
              </a>
              <span className="flex items-center gap-2 text-white/90">
                <MapPin className="h-4 w-4 shrink-0" />
                {shopInfo.address}
              </span>
            </div>
          </div>

          {/* Shop links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/90">
              শপ করুন
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/90">
              সহায়তা
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
            <h3 className="mb-2 text-sm font-semibold text-white">
              অর্ডার করতে কল করুন
            </h3>
            <p className="mb-3 text-xs text-white/70">
              প্রতিদিন সকাল ৯টা — রাত ৯টা
            </p>
            <a
              href={`tel:${shopInfo.phone}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-brand-green-dark transition-colors hover:bg-white/90"
            >
              <Phone className="h-4 w-4" />
              {shopInfo.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 text-center">
          <p className="text-xs text-white/60">{shopInfo.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
