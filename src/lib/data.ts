export type Category = {
  id: number;
  name: string;
  slug: string;
  icon: string;
  description: string;
};

export type Product = {
  id: number;
  name: string;
  price: number | null;
  categoryId: number;
  emoji: string;
  gradient: string;
  popular?: boolean;
};

export type Testimonial = {
  id: number;
  name: string;
  role: string;
  text: string;
  initials: string;
};

export const categories: Category[] = [
  {
    id: 1,
    name: "জৈব সার",
    slug: "organic-fertilizer",
    icon: "Leaf",
    description: "প্রাকৃতিক ও জৈব উপাদান দিয়ে তৈরি সার",
  },
  {
    id: 7,
    name: "রাসায়নিক সার",
    slug: "chemical-fertilizer",
    icon: "FlaskConical",
    description: "উন্নতমানের রাসায়নিক সার ও মাইক্রোনিউট্রিয়েন্ট",
  },
  {
    id: 8,
    name: "রেডি মিক্স মিডিয়া",
    slug: "ready-mix-media",
    icon: "Layers",
    description: "সরাসরি ব্যবহারযোগ্য প্রস্তুত মাটির মিশ্রণ",
  },
  {
    id: 2,
    name: "টব ও প্লান্টার",
    slug: "pots-planters",
    icon: "Flower2",
    description: "বিভিন্ন মাপের টব ও সুন্দর প্লান্টার",
  },
  {
    id: 3,
    name: "বীজ",
    slug: "seeds",
    icon: "Sprout",
    description: "উচ্চ ফলনশীল ও ভালো মানের বীজ",
  },
  {
    id: 4,
    name: "গার্ডেন টুলস",
    slug: "garden-tools",
    icon: "Scissors",
    description: "বাগানের যত্ন নেওয়ার প্রয়োজনীয় সরঞ্জাম",
  },
  {
    id: 5,
    name: "কীটনাশক ও ছত্রাকনাশক",
    slug: "pesticides-fungicides",
    icon: "Bug",
    description: "গাছের রোগ-বালাই দূরে রাখার ওষুধ",
  },
  {
    id: 6,
    name: "অন্যান্য উপকরণ",
    slug: "other-accessories",
    icon: "Package",
    description: "বাগানের বিবিধ প্রয়োজনীয় উপকরণ",
  },
];

export const products: Product[] = [
  // জৈব সার (Organic Fertilizer) - Category 1
  { id: 1, name: "ঝিনুক পাউডার (১ কেজি)", price: 60, categoryId: 1, emoji: "🐚", gradient: "from-amber-100 to-orange-100", popular: true },
  { id: 2, name: "ডিমের খোসা পাউডার (১ কেজি)", price: null, categoryId: 1, emoji: "🥚", gradient: "from-yellow-50 to-amber-100", popular: true },
  { id: 3, name: "শিং কুচি (১ কেজি)", price: 110, categoryId: 1, emoji: "🐄", gradient: "from-stone-100 to-amber-100" },
  { id: 4, name: "নিম খোল (১ কেজি)", price: 100, categoryId: 1, emoji: "🌿", gradient: "from-green-100 to-emerald-100", popular: true },
  { id: 5, name: "হাড় গুঁড়া (১ কেজি)", price: 50, categoryId: 1, emoji: "🦴", gradient: "from-slate-100 to-stone-100" },
  { id: 6, name: "কোকোপিট (ফাইবারসহ) — ১ কেজি", price: null, categoryId: 1, emoji: "🟤", gradient: "from-amber-100 to-yellow-100" },
  { id: 7, name: "ভার্মিকম্পোস্ট (১ কেজি)", price: 80, categoryId: 1, emoji: "🪱", gradient: "from-stone-100 to-amber-100" },
  { id: 8, name: "সরিষা খৈল (১ কেজি)", price: 70, categoryId: 1, emoji: "🌾", gradient: "from-yellow-100 to-amber-100" },

  // রাসায়নিক সার (Chemical Fertilizer) - Category 7
  { id: 9, name: "NPK 20.20.20 (১০০ গ্রাম)", price: 180, categoryId: 7, emoji: "🧪", gradient: "from-blue-50 to-cyan-100", popular: true },
  { id: 10, name: "NPK 19.19.19 (১০০ গ্রাম)", price: null, categoryId: 7, emoji: "⚗️", gradient: "from-cyan-50 to-blue-100" },
  { id: 11, name: "ইপসম সল্ট (কৌটাসহ) — ২৫০ গ্রাম", price: null, categoryId: 7, emoji: "🧂", gradient: "from-slate-50 to-blue-50" },
  { id: 12, name: "নাফকো সলুবোর বোরন (১০০ গ্রাম)", price: 80, categoryId: 7, emoji: "💊", gradient: "from-violet-50 to-purple-100" },
  { id: 13, name: "পটাশ (MOP) — ১ কেজি", price: null, categoryId: 7, emoji: "🟥", gradient: "from-rose-50 to-red-100" },
  { id: 14, name: "DAP (১ কেজি)", price: null, categoryId: 7, emoji: "🟧", gradient: "from-orange-50 to-amber-100" },
  { id: 15, name: "ইউরিয়া (১ কেজি)", price: 40, categoryId: 7, emoji: "⚪", gradient: "from-gray-50 to-slate-100" },
  { id: 16, name: "টিএসপি (১ কেজি)", price: 55, categoryId: 7, emoji: "⬜", gradient: "from-stone-50 to-gray-100" },

  // রেডি মিক্স মিডিয়া (Ready Mix Media) - Category 8
  { id: 17, name: "এডেনিয়াম সয়েল (১ কেজি)", price: null, categoryId: 8, emoji: "🌺", gradient: "from-pink-50 to-rose-100", popular: true },
  { id: 18, name: "ক্যাকটাস সয়েল (১ কেজি)", price: null, categoryId: 8, emoji: "🌵", gradient: "from-green-50 to-lime-100", popular: true },
  { id: 19, name: "রেডিমিক্স সয়েল (৫ কেজি)", price: null, categoryId: 8, emoji: "🪴", gradient: "from-amber-50 to-stone-100", popular: true },
  { id: 20, name: "অর্কিড মিক্স (১ কেজি)", price: 150, categoryId: 8, emoji: "🌸", gradient: "from-fuchsia-50 to-pink-100" },
  { id: 21, name: "বনসাই সয়েল (১ কেজি)", price: 130, categoryId: 8, emoji: "🌳", gradient: "from-emerald-50 to-green-100" },

  // টব ও প্লান্টার (Pots & Planters) - Category 2
  { id: 22, name: "১২ সে.মি. অর্কিড টব (কালো)", price: 15, categoryId: 2, emoji: "🪣", gradient: "from-gray-100 to-slate-200" },
  { id: 23, name: "১০ সে.মি. অর্কিড টব (কালো)", price: 10, categoryId: 2, emoji: "🥣", gradient: "from-gray-100 to-slate-200" },
  { id: 24, name: "১৫ সে.মি. অর্কিড টব (কালো)", price: 20, categoryId: 2, emoji: "🪴", gradient: "from-gray-100 to-slate-200" },
  { id: 25, name: "১৮ সে.মি. অর্কিড টব (কালো)", price: 25, categoryId: 2, emoji: "🏺", gradient: "from-gray-100 to-slate-200" },
  { id: 26, name: "৭ ইঞ্চি রাউন্ড প্লান্টার", price: 30, categoryId: 2, emoji: "🟤", gradient: "from-amber-50 to-stone-100" },
  { id: 27, name: "৪ ইঞ্চি রাউন্ড প্লান্টার", price: null, categoryId: 2, emoji: "🟫", gradient: "from-amber-50 to-stone-100" },
  { id: 28, name: "হ্যাঙ্গিং বাস্কেট (৮ ইঞ্চি)", price: 35, categoryId: 2, emoji: "🧺", gradient: "from-stone-50 to-amber-100" },
  { id: 29, name: "হ্যাঙ্গিং বাস্কেট (৭ ইঞ্চি)", price: 30, categoryId: 2, emoji: "🪕", gradient: "from-stone-50 to-amber-100" },

  // বীজ (Seeds) - Category 3
  { id: 30, name: "ডেড়শ (গ্রীন ফিঙ্গার) — ৫ গ্রাম", price: 40, categoryId: 3, emoji: "🥬", gradient: "from-green-50 to-emerald-100", popular: true },
  { id: 31, name: "পুদিনা বীজ (৪০-৬০টি বীজ)", price: null, categoryId: 3, emoji: "🌿", gradient: "from-green-50 to-teal-100" },
  { id: 32, name: "ডাটা (শ্রাবণী) — ২০ গ্রাম", price: null, categoryId: 3, emoji: "🌱", gradient: "from-lime-50 to-green-100" },
  { id: 33, name: "ডাটা (লাবণী) — ২০ গ্রাম", price: null, categoryId: 3, emoji: "🌾", gradient: "from-lime-50 to-green-100" },
  { id: 34, name: "পেঁপে (ফাস্ট লেডি) — ১০টি বীজ", price: null, categoryId: 3, emoji: "🍈", gradient: "from-orange-50 to-amber-100" },
  { id: 35, name: "লাল তীর ধনিয়া (সুপার গ্রীন) — ৫০ গ্রাম", price: 70, categoryId: 3, emoji: "🍃", gradient: "from-green-50 to-lime-100", popular: true },
  { id: 36, name: "টমেটো বীজ (হাইব্রিড) — ১০টি", price: 50, categoryId: 3, emoji: "🍅", gradient: "from-red-50 to-rose-100" },
  { id: 37, name: "মরিচ বীজ (হাইব্রিড) — ১০টি", price: 45, categoryId: 3, emoji: "🌶️", gradient: "from-red-50 to-orange-100" },

  // গার্ডেন টুলস (Garden Tools) - Category 4
  { id: 38, name: "২ লিটার স্প্রেয়ার", price: 300, categoryId: 4, emoji: "💧", gradient: "from-blue-50 to-cyan-100", popular: true },
  { id: 39, name: "১০ ইঞ্চি গার্ডেন টুলস", price: 220, categoryId: 4, emoji: "🛠️", gradient: "from-amber-50 to-yellow-100" },
  { id: 40, name: "৮ ইঞ্চি সিকেচার", price: null, categoryId: 4, emoji: "✂️", gradient: "from-slate-50 to-gray-100" },
  { id: 41, name: "Bir ৮ ইঞ্চি সিকেচার", price: 350, categoryId: 4, emoji: "🔪", gradient: "from-slate-50 to-gray-100" },
  { id: 42, name: "বেলচা", price: null, categoryId: 4, emoji: "🪏", gradient: "from-amber-50 to-stone-100" },
  { id: 43, name: "৫০০ গ্রাম স্প্রেয়ার", price: null, categoryId: 4, emoji: "🚿", gradient: "from-blue-50 to-sky-100" },
  { id: 44, name: "হাতকড়া (হ্যান্ড ট্রল)", price: 180, categoryId: 4, emoji: "🦾", gradient: "from-stone-50 to-amber-100" },
  { id: 45, name: "গার্ডেন গ্লাভস (জোড়া)", price: 60, categoryId: 4, emoji: "🧤", gradient: "from-green-50 to-emerald-100" },

  // কীটনাশক ও ছত্রাকনাশক (Pesticides & Fungicides) - Category 5
  { id: 46, name: "ইমিটাফ (৫০ মি.লি)", price: 120, categoryId: 5, emoji: "🧴", gradient: "from-orange-50 to-amber-100", popular: true },
  { id: 47, name: "নাইট্রো (৫০ মি.লি)", price: 90, categoryId: 5, emoji: "💊", gradient: "from-violet-50 to-purple-100" },
  { id: 48, name: "কুড়েনক্স (১০০ গ্রাম)", price: 190, categoryId: 5, emoji: "🟦", gradient: "from-blue-50 to-indigo-100", popular: true },
  { id: 49, name: "মিরাকুলান (১০০ মি.লি)", price: 140, categoryId: 5, emoji: "🧪", gradient: "from-teal-50 to-cyan-100" },
  { id: 50, name: "ফ্লোরা (১০০ মি.লি)", price: 150, categoryId: 5, emoji: "🌸", gradient: "from-pink-50 to-rose-100" },
  { id: 51, name: "ফ্লোরা (৫০ মি.লি)", price: null, categoryId: 5, emoji: "🌺", gradient: "from-pink-50 to-rose-100" },
  { id: 52, name: "নিম অয়েল (১০০ মি.লি)", price: 110, categoryId: 5, emoji: "🫧", gradient: "from-green-50 to-emerald-100" },
  { id: 53, name: "সালফার পাউডার (১০০ গ্রাম)", price: 85, categoryId: 5, emoji: "🟡", gradient: "from-yellow-50 to-amber-100" },

  // অন্যান্য উপকরণ (Other Accessories) - Category 6
  { id: 54, name: "নার্সারি পলি (১ কেজি)", price: null, categoryId: 6, emoji: "📦", gradient: "from-slate-50 to-gray-100" },
  { id: 55, name: "সিডলিং ট্রে (৭২/১০৫/১২৮ হোল)", price: null, categoryId: 6, emoji: "🟩", gradient: "from-green-50 to-emerald-100" },
  { id: 56, name: "রঙ্গিন পাথর (১ কেজি)", price: null, categoryId: 6, emoji: "🪨", gradient: "from-violet-50 to-purple-100" },
  { id: 57, name: "সাদা পাথর (১ কেজি)", price: null, categoryId: 6, emoji: "⚪", gradient: "from-gray-50 to-slate-100" },
  { id: 58, name: "ফেরোমন ফাঁদ (১ পিছ)", price: null, categoryId: 6, emoji: "🪤", gradient: "from-amber-50 to-yellow-100" },
  { id: 59, name: "মোটা লাল বালি (১ কেজি)", price: null, categoryId: 6, emoji: "🟧", gradient: "from-orange-50 to-red-100" },
  { id: 60, name: "গাছের সুতো (৫০ মিটার)", price: 40, categoryId: 6, emoji: "🧵", gradient: "from-stone-50 to-amber-100" },
  { id: 61, name: "ওয়াটারিং ক্যান (৫ লিটার)", price: 250, categoryId: 6, emoji: "🚰", gradient: "from-blue-50 to-cyan-100" },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "সাহানা বেগম",
    role: "নার্সারি মালিক",
    text: "জৈব সার নিয়মিত এখান থেকেই নিই। দাম বাজারের চেয়ে কম, আর ক্যাশ অন ডেলিভারি থাকায় নিশ্চিন্তে অর্ডার করতে পারি।",
    initials: "স",
  },
  {
    id: 2,
    name: "মোঃ কামরুল হাসান",
    role: "কৃষি উদ্যোক্তা",
    text: "হ্যান্ড স্প্রেয়ারটা কিনে ভালো লেগেছে, বেশ মজবুত। ফোনে জিজ্ঞেস করলে ভালোভাবে বুঝিয়ে বলেন — এটাই সবচেয়ে ভালো দিক।",
    initials: "ক",
  },
  {
    id: 3,
    name: "আবুল কালাম",
    role: "ছাদ বাগানী",
    text: "প্রথমে অনলাইনে সার কিনতে ভয় পেয়েছিলাম। কিন্তু পণ্য হাতে পেয়ে টাকা দিয়েছি, সব ঠিকঠাক ছিল। এখন নিয়মিত অর্ডার করি।",
    initials: "আ",
  },
  {
    id: 4,
    name: "রফিকুল ইসলাম",
    role: "কৃষক, বগুড়া",
    text: "সার আর বীজের মান সত্যিই ভালো। গতবার বীজ নিয়েছিলাম, ফলন আগের চেয়ে অনেক বেড়েছে। ডেলিভারিও সময়মতো পেয়েছি।",
    initials: "র",
  },
];

export const shopInfo = {
  name: "ড্রিম এগ্রো",
  tagline: "সবুজে বাঁচি প্রতিদিন",
  subtitle: "সার, বীজ ও কৃষি উপকরণের অনলাইন শপ",
  phone: "01822025322",
  email: "dreamcropcarebd@gmail.com",
  address: "মাধবদী, নরসিংদী",
  description:
    "ড্রিম এগ্রো সারা বাংলাদেশে ছাদ বাগানীদের হাতে সেরা মানের সার, বীজ ও কৃষি উপকরণ পৌঁছে দিতে কাজ করছে।",
  copyright: "© 2022 - 2026 ড্রিম এগ্রো. সর্বস্বত্ব সংরক্ষিত।",
};

export const footerLinks = {
  shop: [
    { label: "সব পণ্য", href: "#products" },
    { label: "জৈব সার", href: "#category-1" },
    { label: "রাসায়নিক সার", href: "#category-7" },
    { label: "রেডি মিক্স মিডিয়া", href: "#category-8" },
    { label: "টব ও প্লান্টার", href: "#category-2" },
    { label: "বীজ", href: "#category-3" },
  ],
  support: [
    { label: "অর্ডার ট্র্যাক করুন", href: "#track" },
    { label: "কার্ট ও চেকআউট", href: "#cart" },
    { label: "অর্ডার করতে কল করুন", href: "tel:01822025322" },
  ],
};
