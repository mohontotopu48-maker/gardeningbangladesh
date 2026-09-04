import Image from "next/image";
import { MapPin, Phone, Mail, Truck, ShieldCheck, CreditCard, ArrowRight, Leaf } from "lucide-react";
import { Logo } from "./logo";
import { SocialBar } from "./social-bar";
import { shopInfo, footerLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="mt-auto relative overflow-hidden bg-brand-green-deep text-white">
      {/* Feature strip with image bg 1 */}
      <div className="relative border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="/gallery/gardening-bangladesh-garden-view-03.jpg"
            alt="Gardening Bangladesh garden view"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-green-deep/95 via-brand-green-deep/85 to-brand-green-dark/80" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-3 group">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20 backdrop-blur-sm transition-all group-hover:bg-brand-green-bright group-hover:scale-110">
                <Truck className="h-6 w-6 text-brand-green-bright group-hover:text-brand-green-deep transition-colors" />
              </span>
              <div>
                <p className="text-sm font-bold">সারা দেশে ডেলিভারি</p>
                <p className="text-xs text-white">দ্রুত ও নিরাপদ হোম ডেলিভারি</p>
              </div>
            </div>
            <div className="flex items-center gap-3 group">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20 backdrop-blur-sm transition-all group-hover:bg-brand-green-bright group-hover:scale-110">
                <CreditCard className="h-6 w-6 text-brand-green-bright group-hover:text-brand-green-deep transition-colors" />
              </span>
              <div>
                <p className="text-sm font-bold">ক্যাশ অন ডেলিভারি</p>
                <p className="text-xs text-white">পণ্য হাতে পেয়ে টাকা দিন</p>
              </div>
            </div>
            <div className="flex items-center gap-3 group">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20 backdrop-blur-sm transition-all group-hover:bg-brand-green-bright group-hover:scale-110">
                <ShieldCheck className="h-6 w-6 text-brand-green-bright group-hover:text-brand-green-deep transition-colors" />
              </span>
              <div>
                <p className="text-sm font-bold">১০০% আসল পণ্য</p>
                <p className="text-xs text-white">মান নিশ্চিত, গ্যারান্টিসহ</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer with image bg 2 */}
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src="/gallery/gardening-bangladesh-garden-view-04.jpg"
            alt="Gardening Bangladesh lush garden"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-green-deep/95 via-brand-green-deep/92 to-brand-green-deep/98" />
          {/* Decorative dot pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12">
            {/* Brand */}
            <div className="space-y-4 lg:col-span-4">
              <Logo theme="dark" />
              <p className="text-sm leading-relaxed text-white max-w-sm">
                {shopInfo.description}
              </p>
              <div className="space-y-2 text-sm">
                <a
                  href={`tel:${shopInfo.phone}`}
                  className="flex items-center gap-2 text-white hover:text-brand-green-bright transition-colors"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
                    <Phone className="h-4 w-4" />
                  </span>
                  {shopInfo.phone}
                </a>
                <a
                  href={`mailto:${shopInfo.email}`}
                  className="flex items-center gap-2 text-white hover:text-brand-green-bright transition-colors"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span className="break-all">{shopInfo.email}</span>
                </a>
                <span className="flex items-center gap-2 text-white">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
                    <MapPin className="h-4 w-4" />
                  </span>
                  {shopInfo.address}
                </span>
              </div>
              {/* Social */}
              <div className="pt-2">
                <p className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-white">
                  আমাদের ফলো করুন
                </p>
                <SocialBar variant="solid" size="sm" />
              </div>
            </div>

            {/* Shop links */}
            <div className="lg:col-span-2">
              <h3 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-white">
                <span className="h-4 w-1 rounded-full bg-brand-green-bright" />
                শপ করুন
              </h3>
              <ul className="space-y-2.5">
                {footerLinks.shop.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-sm text-white transition-colors hover:text-white"
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
              <h3 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-white">
                <span className="h-4 w-1 rounded-full bg-brand-green-bright" />
                সহায়তা
              </h3>
              <ul className="space-y-2.5">
                {footerLinks.support.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group inline-flex items-center gap-1 text-sm text-white transition-colors hover:text-white"
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
              <h3 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-white">
                <span className="h-4 w-1 rounded-full bg-brand-green-bright" />
                কোম্পানি
              </h3>
              <ul className="space-y-2.5">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-sm text-white transition-colors hover:text-white"
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
              <div className="relative overflow-hidden rounded-2xl bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur-md">
                <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-brand-green-bright/20 blur-2xl" />
                <div className="relative">
                  <h3 className="mb-2 flex items-center gap-1.5 text-sm font-bold text-white">
                    <Leaf className="h-4 w-4 text-brand-green-bright" />
                    অর্ডার করতে কল করুন
                  </h3>
                  <p className="mb-3 text-xs text-white">
                    প্রতিদিন সকাল ৯টা — রাত ৯টা
                  </p>
                  <a
                    href={`tel:${shopInfo.phone}`}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-green px-4 py-2.5 text-sm font-bold text-white transition-all hover:bg-brand-green-bright hover:text-brand-green-deep shadow-lg hover:shadow-brand-lg hover:scale-105"
                  >
                    <Phone className="h-4 w-4 transition-transform group-hover:rotate-12" />
                    {shopInfo.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10 bg-brand-green-deep/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p className="text-xs text-white">{shopInfo.copyright}</p>
          <p className="text-xs text-white flex items-center gap-1">
            🌱 বাংলাদেশে তৈরি · Made with 💚 in Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
}
