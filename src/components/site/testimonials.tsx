import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { testimonials } from "@/lib/data";
import { shopInfo } from "@/lib/data";

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 bg-brand-cream">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-8 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
            <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
            {shopInfo.stats.rating} রেটিং · {shopInfo.stats.customers} কাস্টমার
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-brand-green-deep">
            কাস্টমাররা যা বলছেন
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            আমাদের গ্রাহকদের অভিজ্ঞতা ও বিশ্বাসই আমাদের শক্তি
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="group relative flex flex-col gap-3 rounded-2xl border border-border bg-white p-5 shadow-premium transition-all duration-300 hover:shadow-brand hover:-translate-y-1"
            >
              <Quote className="h-8 w-8 text-brand-green/15 absolute top-4 right-4" />
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < t.rating
                        ? "fill-amber-400 text-amber-400"
                        : "fill-muted text-muted"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-foreground/90 flex-1">
                “{t.text}”
              </p>
              <div className="mt-2 flex items-center gap-3 border-t border-border pt-3">
                <Avatar className="h-10 w-10 border-2 border-brand-green/30">
                  <AvatarFallback className="bg-brand-green-light text-brand-green-dark font-bold">
                    {t.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
