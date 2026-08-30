import { Truck, ShieldCheck, CreditCard, Headphones, RotateCcw, Sprout } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "সারা দেশে ডেলিভারি",
    desc: "৬৪ জেলায় দ্রুত হোম ডেলিভারি",
  },
  {
    icon: CreditCard,
    title: "ক্যাশ অন ডেলিভারি",
    desc: "পণ্য হাতে পেয়ে টাকা দিন",
  },
  {
    icon: ShieldCheck,
    title: "১০০% আসল পণ্য",
    desc: "মান নিশ্চিত, গ্যারান্টিসহ",
  },
  {
    icon: Headphones,
    title: "গার্ডেনিং সাপোর্ট",
    desc: "ফোনে বিশেষজ্ঞ পরামর্শ",
  },
  {
    icon: RotateCcw,
    title: "সহজ রিটার্ন",
    desc: "৭ দিনের মধ্যে রিটার্ন",
  },
  {
    icon: Sprout,
    title: "২২০+ পণ্য",
    desc: "সার, বীজ, টব ও টুলস",
  },
];

export function FeaturesStrip() {
  return (
    <section className="border-b border-brand-green-light/60 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="group flex flex-col items-center gap-2 text-center"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-green-light text-brand-green-dark transition-all duration-300 group-hover:bg-brand-green group-hover:text-white group-hover:scale-110">
                <f.icon className="h-6 w-6" />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">{f.title}</p>
                <p className="text-[11px] text-muted-foreground leading-tight mt-0.5">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
