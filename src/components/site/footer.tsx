import { MapPin, Phone, Mail, Truck, ShieldCheck, CreditCard, ArrowRight } from "lucide-react";
import { Logo } from "./logo";
import { SocialBar } from "./social-bar";
import { shopInfo, footerLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="mt-auto bg-brand-green-deep text-white">
      {/* Feature strip */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
                <Truck className="h-5 w-5 text-brand-green-bright" />
              </span>
              <div>
                <p className="text-sm font-semibold">সারা দেশে ডেলিভারি</p>
                <p className="text-xs text-white/70">দ্রুত ও নিরাপদ হোম ডেলিভারি</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
                <CreditCard className="h-5 w-5 text-brand-green-bright" />
              </span>
              <div>
                <p className="text-sm font-semibold">ক্যাশ অন ডেলিভারি</p>
                <p className="text-xs text-white/70">পণ্য হাতে পেয়ে টাকা দিন</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
                <ShieldCheck className="h-5 w-5 text-brand-green-bright" />
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
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="space-y-4 lg:col-span-4">
            <Logo theme="dark" />
            <p className="text-sm leading-relaxed text-white/80 max-w-sm">
              {shopInfo.description}
            </p>
            <div className="space-y-2 text-sm">
              <a
                href={`tel:${shopInfo.phone}`}
                className="flex items-center gap-2 text-white/90 hover:text-brand-green-bright transition-colors"
              >
                <Phone className="h-4 w-4 shrink-0" />
                {shopInfo.phone}
              </a>
              <a
                href={`mailto:${shopInfo.email}`}
                className="flex items-center gap-2 text-white/90 hover:text-brand-green-bright transition-colors"
              >
                <Mail className="h-4 w-4 shrink-0" />
                <span className="break-all">{shopInfo.email}</span>
              </a>
              <span className="flex items-center gap-2 text-white/90">
                <MapPin className="h-4 w-4 shrink-0" />
                {shopInfo.address}
              </span>
            </div>
            {/* Social */}
            <div className="pt-2">
              <p className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-white/60">
                আমাদের ফলো করুন
              </p>
              <SocialBar variant="solid" size="sm" />
            </div>
          </div>

          {/* Shop links */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/90">
              শপ করুন
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-white/70 transition-colors hover:text-white"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-brand-green-bright" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support links */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/90">
              সহায়তা
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group inline-flex items-center gap-1 text-sm text-white/70 transition-colors hover:text-white"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-brand-green-bright" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/90">
              কোম্পানি
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-white/70 transition-colors hover:text-white"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-brand-green-bright" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <h3 className="mb-2 text-sm font-semibold text-white">
                অর্ডার করতে কল করুন
              </h3>
              <p className="mb-3 text-xs text-white/70">
                প্রতিদিন সকাল ৯টা — রাত ৯টা
              </p>
              <a
                href={`tel:${shopInfo.phone}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-green px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-green-bright hover:text-brand-green-deep shadow-lg"
              >
                <Phone className="h-4 w-4" />
                {shopInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p className="text-xs text-white/60">{shopInfo.copyright}</p>
          <p className="text-xs text-white/60">
            🌱 বাংলাদেশে তৈরি · Made with 💚 in Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
}
