export type Category = {
  id: number;
  name: string;
  nameEn: string;
  slug: string;
  icon: string;
  description: string;
  descriptionEn: string;
};

export type Product = {
  id: number;
  name: string;
  nameEn: string;
  price: number;
  originalPrice?: number;
  categoryId: number;
  emoji: string;
  gradient: string;
  image?: string;
  rating: number;
  reviews: number;
  sold: number;
  popular?: boolean;
  isNew?: boolean;
  unit: string;
  care?: "easy" | "medium" | "hard";
  light?: "low" | "medium" | "bright";
  tags?: string[];
};

export type Testimonial = {
  id: number;
  name: string;
  role: string;
  text: string;
  initials: string;
  rating: number;
};

export type YouTubeVideo = {
  id: string;
  title: string;
  titleEn: string;
  description: string;
};

export type SocialLink = {
  name: string;
  nameEn: string;
  href: string;
  icon: string;
  color: string;
};

export const categories: Category[] = [
  {
    id: 1,
    name: "জৈব সার",
    nameEn: "Organic Fertilizer",
    slug: "organic-fertilizer",
    icon: "Leaf",
    description: "প্রাকৃতিক ও জৈব উপাদান দিয়ে তৈরি সার",
    descriptionEn: "Natural & organic plant nutrients",
  },
  {
    id: 7,
    name: "রাসায়নিক সার",
    nameEn: "Chemical Fertilizer",
    slug: "chemical-fertilizer",
    icon: "FlaskConical",
    description: "উন্নতমানের রাসায়নিক সার ও মাইক্রোনিউট্রিয়েন্ট",
    descriptionEn: "Premium chemical nutrients & micronutrients",
  },
  {
    id: 8,
    name: "রেডি মিক্স মিডিয়া",
    nameEn: "Ready Mix Media",
    slug: "ready-mix-media",
    icon: "Layers",
    description: "সরাসরি ব্যবহারযোগ্য প্রস্তুত মাটির মিশ্রণ",
    descriptionEn: "Ready-to-use soil mixes",
  },
  {
    id: 2,
    name: "টব ও প্লান্টার",
    nameEn: "Pots & Planters",
    slug: "pots-planters",
    icon: "Flower2",
    description: "বিভিন্ন মাপের টব ও সুন্দর প্লান্টার",
    descriptionEn: "Pots, planters & hanging baskets",
  },
  {
    id: 3,
    name: "বীজ",
    nameEn: "Seeds",
    slug: "seeds",
    icon: "Sprout",
    description: "উচ্চ ফলনশীল ও ভালো মানের বীজ",
    descriptionEn: "High-yield quality seeds",
  },
  {
    id: 4,
    name: "গার্ডেন টুলস",
    nameEn: "Garden Tools",
    slug: "garden-tools",
    icon: "Scissors",
    description: "বাগানের যত্ন নেওয়ার প্রয়োজনীয় সরঞ্জাম",
    descriptionEn: "Essential gardening equipment",
  },
  {
    id: 5,
    name: "কীটনাশক ও ছত্রাকনাশক",
    nameEn: "Pesticides & Fungicides",
    slug: "pesticides-fungicides",
    icon: "Bug",
    description: "গাছের রোগ-বালাই দূরে রাখার ওষুধ",
    descriptionEn: "Plant protection solutions",
  },
  {
    id: 6,
    name: "অন্যান্য উপকরণ",
    nameEn: "Other Accessories",
    slug: "other-accessories",
    icon: "Package",
    description: "বাগানের বিবিধ প্রয়োজনীয় উপকরণ",
    descriptionEn: "Miscellaneous garden essentials",
  },
  {
    id: 9,
    name: "ইনডোর প্লান্ট",
    nameEn: "Indoor Plants",
    slug: "indoor-plants",
    icon: "Home",
    description: "ঘরের ভেতরের সৌন্দর্য ও বাতাস পরিষ্কার করার গাছ",
    descriptionEn: "Air-purifying plants for homes & offices",
  },
];

export const products: Product[] = [
  // জৈব সার (Organic Fertilizer) - Category 1
  { id: 1, name: "ঝিনুক পাউডার (১ কেজি)", nameEn: "Oyster Shell Powder", price: 60, originalPrice: 80, categoryId: 1, emoji: "🐚", gradient: "from-amber-100 to-orange-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/f185ae4d4c7c.jpg", rating: 4.8, reviews: 124, sold: 540, popular: true, unit: "১ কেজি" },
  { id: 2, name: "ডিমের খোসা পাউডার (১ কেজি)", nameEn: "Egg Shell Powder", price: 45, originalPrice: 60, categoryId: 1, emoji: "🥚", gradient: "from-yellow-50 to-amber-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/05e8917f6c10.jpg", rating: 4.7, reviews: 98, sold: 410, popular: true, unit: "১ কেজি" },
  { id: 3, name: "শিং কুচি (১ কেজি)", nameEn: "Horn Meal", price: 110, categoryId: 1, emoji: "🐄", gradient: "from-stone-100 to-amber-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/1a4526325f08.jpg", rating: 4.6, reviews: 76, sold: 280, unit: "১ কেজি" },
  { id: 4, name: "নিম খোল (১ কেজি)", nameEn: "Neem Cake", price: 100, originalPrice: 130, categoryId: 1, emoji: "🌿", gradient: "from-green-100 to-emerald-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/4b79be6744e1.jpg", rating: 4.9, reviews: 156, sold: 620, popular: true, unit: "১ কেজি" },
  { id: 5, name: "হাড় গুঁড়া (১ কেজি)", nameEn: "Bone Meal", price: 50, categoryId: 1, emoji: "🦴", gradient: "from-slate-100 to-stone-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/d6ed6f9e01eb.jpeg", rating: 4.5, reviews: 64, sold: 230, unit: "১ কেজি" },
  { id: 6, name: "কোকোপিট (ফাইবারসহ)", nameEn: "Cocopeat with Fiber", price: 90, categoryId: 1, emoji: "🟤", gradient: "from-amber-100 to-yellow-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/f961e634198a.jpg", rating: 4.8, reviews: 112, sold: 480, isNew: true, unit: "১ কেজি" },
  { id: 7, name: "ভার্মিকম্পোস্ট (১ কেজি)", nameEn: "Vermicompost", price: 80, originalPrice: 100, categoryId: 1, emoji: "🪱", gradient: "from-stone-100 to-amber-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/b895c33d6504.jpeg", rating: 4.9, reviews: 201, sold: 890, popular: true, unit: "১ কেজি" },
  { id: 8, name: "সরিষা খৈল (১ কেজি)", nameEn: "Mustard Cake", price: 70, categoryId: 1, emoji: "🌾", gradient: "from-yellow-100 to-amber-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/25d46d33d666.jpg", rating: 4.6, reviews: 58, sold: 195, unit: "১ কেজি" },

  // রাসায়নিক সার (Chemical Fertilizer) - Category 7
  { id: 9, name: "NPK 20.20.20 (১০০ গ্রাম)", nameEn: "NPK 20.20.20", price: 180, originalPrice: 220, categoryId: 7, emoji: "🧪", gradient: "from-blue-50 to-cyan-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/50017918ac28.jpg", rating: 4.9, reviews: 187, sold: 760, popular: true, unit: "১০০ গ্রাম" },
  { id: 10, name: "NPK 19.19.19 (১০০ গ্রাম)", nameEn: "NPK 19.19.19", price: 170, categoryId: 7, emoji: "⚗️", gradient: "from-cyan-50 to-blue-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/7678ab5e11d8.jpg", rating: 4.8, reviews: 143, sold: 610, popular: true, unit: "১০০ গ্রাম" },
  { id: 11, name: "ইপসম সল্ট (কৌটাসহ)", nameEn: "Epsom Salt with Box", price: 95, categoryId: 7, emoji: "🧂", gradient: "from-slate-50 to-blue-50", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/bbbec8ac36eb.jpg", rating: 4.7, reviews: 89, sold: 340, unit: "২৫০ গ্রাম" },
  { id: 12, name: "নাফকো সলুবোর বোরন", nameEn: "NAFCO Solubor Boron", price: 80, originalPrice: 100, categoryId: 7, emoji: "💊", gradient: "from-violet-50 to-purple-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/df2638ad5a3c.jpg", rating: 4.6, reviews: 72, sold: 290, unit: "১০০ গ্রাম" },
  { id: 13, name: "পটাশ MOP (১ কেজি)", nameEn: "Potash MOP", price: 65, categoryId: 7, emoji: "🟥", gradient: "from-rose-50 to-red-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/3d92cdcc47d2.jpg", rating: 4.5, reviews: 54, sold: 210, unit: "১ কেজি" },
  { id: 14, name: "DAP (১ কেজি)", nameEn: "DAP Fertilizer", price: 75, categoryId: 7, emoji: "🟧", gradient: "from-orange-50 to-amber-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/52cf80945619.jpg", rating: 4.6, reviews: 67, sold: 250, unit: "১ কেজি" },
  { id: 15, name: "ইউরিয়া (১ কেজি)", nameEn: "Urea", price: 40, categoryId: 7, emoji: "⚪", gradient: "from-gray-50 to-slate-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/b557cecf636c.jpg", rating: 4.4, reviews: 41, sold: 180, unit: "১ কেজি" },
  { id: 16, name: "টিএসপি (১ কেজি)", nameEn: "TSP", price: 55, categoryId: 7, emoji: "⬜", gradient: "from-stone-50 to-gray-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/240b7b2c1099.webp", rating: 4.5, reviews: 38, sold: 160, unit: "১ কেজি" },

  // রেডি মিক্স মিডিয়া (Ready Mix Media) - Category 8
  { id: 17, name: "এডেনিয়াম সয়েল (১ কেজি)", nameEn: "Adenium Soil Mix", price: 140, originalPrice: 170, categoryId: 8, emoji: "🌺", gradient: "from-pink-50 to-rose-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/99ad35c48408.jpg", rating: 4.9, reviews: 134, sold: 520, popular: true, unit: "১ কেজি" },
  { id: 18, name: "ক্যাকটাস সয়েল (১ কেজি)", nameEn: "Cactus Soil Mix", price: 130, categoryId: 8, emoji: "🌵", gradient: "from-green-50 to-lime-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/169563cb9aa6.jpg", rating: 4.8, reviews: 118, sold: 460, popular: true, unit: "১ কেজি" },
  { id: 19, name: "রেডিমিক্স সয়েল (৫ কেজি)", nameEn: "Ready Mix Soil", price: 250, originalPrice: 300, categoryId: 8, emoji: "🪴", gradient: "from-amber-50 to-stone-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/bd0044ee6051.png", rating: 4.9, reviews: 167, sold: 680, popular: true, unit: "৫ কেজি" },
  { id: 20, name: "অর্কিড মিক্স (১ কেজি)", nameEn: "Orchid Mix", price: 150, categoryId: 8, emoji: "🌸", gradient: "from-fuchsia-50 to-pink-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/4041a31b8232.jpg", rating: 4.7, reviews: 92, sold: 370, unit: "১ কেজি" },
  { id: 21, name: "বনসাই সয়েল (১ কেজি)", nameEn: "Bonsai Soil Mix", price: 130, categoryId: 8, emoji: "🌳", gradient: "from-emerald-50 to-green-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/f72aabed14fb.jpg", rating: 4.8, reviews: 86, sold: 320, isNew: true, unit: "১ কেজি" },

  // টব ও প্লান্টার (Pots & Planters) - Category 2
  { id: 22, name: "১২ সে.মি. অর্কিড টব (কালো)", nameEn: "12cm Orchid Pot", price: 15, categoryId: 2, emoji: "🪣", gradient: "from-gray-100 to-slate-200", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/c8fdca74c521.jpg", rating: 4.6, reviews: 78, sold: 430, unit: "১টি" },
  { id: 23, name: "১০ সে.মি. অর্কিড টব (কালো)", nameEn: "10cm Orchid Pot", price: 10, categoryId: 2, emoji: "🥣", gradient: "from-gray-100 to-slate-200", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/65e6369600eb.jpg", rating: 4.5, reviews: 62, sold: 380, unit: "১টি" },
  { id: 24, name: "১৫ সে.মি. অর্কিড টব (কালো)", nameEn: "15cm Orchid Pot", price: 20, categoryId: 2, emoji: "🪴", gradient: "from-gray-100 to-slate-200", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/5b882508f0a9.jpeg", rating: 4.7, reviews: 91, sold: 510, popular: true, unit: "১টি" },
  { id: 25, name: "১৮ সে.মি. অর্কিড টব (কালো)", nameEn: "18cm Orchid Pot", price: 25, categoryId: 2, emoji: "🏺", gradient: "from-gray-100 to-slate-200", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/9d83b1c5ba0e.jpg", rating: 4.6, reviews: 70, sold: 290, unit: "১টি" },
  { id: 26, name: "৭ ইঞ্চি রাউন্ড প্লান্টার", nameEn: "7 inch Round Planter", price: 30, originalPrice: 40, categoryId: 2, emoji: "🟤", gradient: "from-amber-50 to-stone-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/75ffd0438692.jpg", rating: 4.8, reviews: 104, sold: 470, popular: true, unit: "১টি" },
  { id: 27, name: "৪ ইঞ্চি রাউন্ড প্লান্টার", nameEn: "4 inch Round Planter", price: 20, categoryId: 2, emoji: "🟫", gradient: "from-amber-50 to-stone-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/33397c0ca2e2.jpg", rating: 4.5, reviews: 56, sold: 240, unit: "১টি" },
  { id: 28, name: "হ্যাঙ্গিং বাস্কেট (৮ ইঞ্চি)", nameEn: "Hanging Basket 8in", price: 35, categoryId: 2, emoji: "🧺", gradient: "from-stone-50 to-amber-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/6b8ea7b1f346.jpg", rating: 4.7, reviews: 83, sold: 360, unit: "১টি" },
  { id: 29, name: "হ্যাঙ্গিং বাস্কেট (৭ ইঞ্চি)", nameEn: "Hanging Basket 7in", price: 30, categoryId: 2, emoji: "🪕", gradient: "from-stone-50 to-amber-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/793d87fe60dd.jpg", rating: 4.6, reviews: 67, sold: 280, unit: "১টি" },

  // বীজ (Seeds) - Category 3
  { id: 30, name: "ডেড়শ (গ্রীন ফিঙ্গার)", nameEn: "Red Amaranth Seeds", price: 40, originalPrice: 55, categoryId: 3, emoji: "🥬", gradient: "from-green-50 to-emerald-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/02c63233d52e.jpg", rating: 4.8, reviews: 129, sold: 590, popular: true, unit: "৫ গ্রাম" },
  { id: 31, name: "পুদিনা বীজ (৪০-৬০টি)", nameEn: "Mint Seeds", price: 35, categoryId: 3, emoji: "🌿", gradient: "from-green-50 to-teal-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/da74598ab3cb.jpg", rating: 4.7, reviews: 95, sold: 420, unit: "১ প্যাকেট" },
  { id: 32, name: "ডাটা (শ্রাবণী)", nameEn: "Data Shraboni Seeds", price: 30, categoryId: 3, emoji: "🌱", gradient: "from-lime-50 to-green-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/8134bd86eb3a.jpg", rating: 4.6, reviews: 71, sold: 310, unit: "২০ গ্রাম" },
  { id: 33, name: "ডাটা (লাবণী)", nameEn: "Data Laboni Seeds", price: 30, categoryId: 3, emoji: "🌾", gradient: "from-lime-50 to-green-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/85709076c208.jpg", rating: 4.6, reviews: 68, sold: 295, unit: "২০ গ্রাম" },
  { id: 34, name: "পেঁপে (ফাস্ট লেডি)", nameEn: "Papaya Fast Lady Seeds", price: 45, categoryId: 3, emoji: "🍈", gradient: "from-orange-50 to-amber-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/5f85958421b7.jpg", rating: 4.7, reviews: 88, sold: 380, isNew: true, unit: "১০টি বীজ" },
  { id: 35, name: "লাল তীর ধনিয়া", nameEn: "Red Coriander Seeds", price: 70, originalPrice: 90, categoryId: 3, emoji: "🍃", gradient: "from-green-50 to-lime-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/8c5a4bf31a0d.jpg", rating: 4.9, reviews: 142, sold: 640, popular: true, unit: "৫০ গ্রাম" },
  { id: 36, name: "টমেটো বীজ (হাইব্রিড)", nameEn: "Hybrid Tomato Seeds", price: 50, categoryId: 3, emoji: "🍅", gradient: "from-red-50 to-rose-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/142798aee180.jpg", rating: 4.8, reviews: 116, sold: 510, unit: "১০টি" },
  { id: 37, name: "মরিচ বীজ (হাইব্রিড)", nameEn: "Hybrid Chili Seeds", price: 45, categoryId: 3, emoji: "🌶️", gradient: "from-red-50 to-orange-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/31291d341c0c.jpg", rating: 4.7, reviews: 98, sold: 440, unit: "১০টি" },

  // গার্ডেন টুলস (Garden Tools) - Category 4
  { id: 38, name: "২ লিটার স্প্রেয়ার", nameEn: "2L Sprayer", price: 300, originalPrice: 380, categoryId: 4, emoji: "💧", gradient: "from-blue-50 to-cyan-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/169aa3f61e70.jpg", rating: 4.8, reviews: 154, sold: 620, popular: true, unit: "১টি" },
  { id: 39, name: "১০ ইঞ্চি গার্ডেন টুলস", nameEn: "10in Garden Tool Set", price: 220, categoryId: 4, emoji: "🛠️", gradient: "from-amber-50 to-yellow-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/04997d5eb6ad.png", rating: 4.6, reviews: 87, sold: 340, unit: "১ সেট" },
  { id: 40, name: "৮ ইঞ্চি সিকেচার", nameEn: "8in Secateur", price: 280, categoryId: 4, emoji: "✂️", gradient: "from-slate-50 to-gray-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/38809d178a15.jpg", rating: 4.7, reviews: 93, sold: 390, unit: "১টি" },
  { id: 41, name: "Bir ৮ ইঞ্চি সিকেচার", nameEn: "Bir 8in Secateur", price: 350, originalPrice: 420, categoryId: 4, emoji: "🔪", gradient: "from-slate-50 to-gray-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/67922ff43d8a.jpg", rating: 4.9, reviews: 128, sold: 560, popular: true, unit: "১টি" },
  { id: 42, name: "বেলচা", nameEn: "Garden Trowel", price: 90, categoryId: 4, emoji: "🪏", gradient: "from-amber-50 to-stone-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/c2c3ec23f993.jpg", rating: 4.5, reviews: 52, sold: 220, unit: "১টি" },
  { id: 43, name: "৫০০ গ্রাম স্প্রেয়ার", nameEn: "500g Sprayer", price: 150, categoryId: 4, emoji: "🚿", gradient: "from-blue-50 to-sky-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/0bc0f1f2e149.jpg", rating: 4.4, reviews: 44, sold: 190, unit: "১টি" },
  { id: 44, name: "হাতকড়া (হ্যান্ড ট্রল)", nameEn: "Hand Trowel", price: 180, categoryId: 4, emoji: "🦾", gradient: "from-stone-50 to-amber-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/d21d290f876f.jpg", rating: 4.6, reviews: 61, sold: 260, isNew: true, unit: "১টি" },
  { id: 45, name: "গার্ডেন গ্লাভস (জোড়া)", nameEn: "Garden Gloves", price: 60, categoryId: 4, emoji: "🧤", gradient: "from-green-50 to-emerald-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/f6876b4e4d9a.jpg", rating: 4.5, reviews: 49, sold: 210, unit: "১ জোড়া" },

  // কীটনাশক ও ছত্রাকনাশক (Pesticides & Fungicides) - Category 5
  { id: 46, name: "ইমিটাফ (৫০ মি.লি)", nameEn: "Emataf 50ml", price: 120, originalPrice: 150, categoryId: 5, emoji: "🧴", gradient: "from-orange-50 to-amber-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/8eeaac57b926.png", rating: 4.7, reviews: 108, sold: 470, popular: true, unit: "৫০ মি.লি" },
  { id: 47, name: "নাইট্রো (৫০ মি.লি)", nameEn: "Nitro 50ml", price: 90, categoryId: 5, emoji: "💊", gradient: "from-violet-50 to-purple-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/182f63f67c8c.jpg", rating: 4.6, reviews: 74, sold: 310, unit: "৫০ মি.লি" },
  { id: 48, name: "কুড়েনক্স (১০০ গ্রাম)", nameEn: "Curenox 100g", price: 190, categoryId: 5, emoji: "🟦", gradient: "from-blue-50 to-indigo-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/186e478a4447.jpg", rating: 4.8, reviews: 96, sold: 410, popular: true, unit: "১০০ গ্রাম" },
  { id: 49, name: "মিরাকুলান (১০০ মি.লি)", nameEn: "Miraculan 100ml", price: 140, originalPrice: 170, categoryId: 5, emoji: "🧪", gradient: "from-teal-50 to-cyan-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/0f4aa71b1c9d.jpg", rating: 4.7, reviews: 89, sold: 380, unit: "১০০ মি.লি" },
  { id: 50, name: "ফ্লোরা (১০০ মি.লি)", nameEn: "Flora 100ml", price: 150, categoryId: 5, emoji: "🌸", gradient: "from-pink-50 to-rose-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/78aa73dbe349.png", rating: 4.6, reviews: 72, sold: 300, unit: "১০০ মি.লি" },
  { id: 51, name: "ফ্লোরা (৫০ মি.লি)", nameEn: "Flora 50ml", price: 85, categoryId: 5, emoji: "🌺", gradient: "from-pink-50 to-rose-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/5da69f7ea65d.jpg", rating: 4.5, reviews: 58, sold: 240, unit: "৫০ মি.লি" },
  { id: 52, name: "নিম অয়েল (১০০ মি.লি)", nameEn: "Neem Oil 100ml", price: 110, originalPrice: 140, categoryId: 5, emoji: "🫧", gradient: "from-green-50 to-emerald-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/7c2938a7c3be.jpg", rating: 4.8, reviews: 121, sold: 520, isNew: true, unit: "১০০ মি.লি" },
  { id: 53, name: "সালফার পাউডার", nameEn: "Sulphur Powder", price: 85, categoryId: 5, emoji: "🟡", gradient: "from-yellow-50 to-amber-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/05255e8d4319.jpg", rating: 4.4, reviews: 47, sold: 200, unit: "১০০ গ্রাম" },

  // অন্যান্য উপকরণ (Other Accessories) - Category 6
  { id: 54, name: "নার্সারি পলি (১ কেজি)", nameEn: "Nursery Poly", price: 50, categoryId: 6, emoji: "📦", gradient: "from-slate-50 to-gray-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/5cfac6d7e6dd.jpg", rating: 4.4, reviews: 39, sold: 180, unit: "১ কেজি" },
  { id: 55, name: "সিডলিং ট্রে", nameEn: "Seedling Tray", price: 80, categoryId: 6, emoji: "🟩", gradient: "from-green-50 to-emerald-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/d7ff311564d1.jpg", rating: 4.6, reviews: 64, sold: 270, unit: "১টি" },
  { id: 56, name: "রঙ্গিন পাথর (১ কেজি)", nameEn: "Colorful Stones", price: 60, categoryId: 6, emoji: "🪨", gradient: "from-violet-50 to-purple-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/e624c15ad190.jpg", rating: 4.5, reviews: 51, sold: 230, unit: "১ কেজি" },
  { id: 57, name: "সাদা পাথর (১ কেজি)", nameEn: "White Stones", price: 55, categoryId: 6, emoji: "⚪", gradient: "from-gray-50 to-slate-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/0502d051e2bd.jpg", rating: 4.4, reviews: 43, sold: 190, unit: "১ কেজি" },
  { id: 58, name: "ফেরোমন ফাঁদ (১ পিছ)", nameEn: "Pheromone Trap", price: 100, categoryId: 6, emoji: "🪤", gradient: "from-amber-50 to-yellow-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/c61def49fe3b.jpg", rating: 4.6, reviews: 57, sold: 240, unit: "১টি" },
  { id: 59, name: "মোটা লাল বালি (১ কেজি)", nameEn: "Coarse Red Sand", price: 40, categoryId: 6, emoji: "🟧", gradient: "from-orange-50 to-red-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/0fec7dbe3c0a.jpg", rating: 4.3, reviews: 35, sold: 160, unit: "১ কেজি" },
  { id: 60, name: "গাছের সুতো (৫০ মি)", nameEn: "Plant Tie Wire", price: 40, categoryId: 6, emoji: "🧵", gradient: "from-stone-50 to-amber-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/271e3e12a133.jpg", rating: 4.4, reviews: 38, sold: 170, unit: "৫০ মিটার" },
  { id: 61, name: "ওয়াটারিং ক্যান (৫ লি)", nameEn: "Watering Can 5L", price: 250, originalPrice: 320, categoryId: 6, emoji: "🚰", gradient: "from-blue-50 to-cyan-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/b940c6d4cca6.jpg", rating: 4.8, reviews: 113, sold: 490, popular: true, unit: "১টি" },

  // ইনডোর প্লান্ট (Indoor Plants) - Category 9 — popular in Bangladesh
  { id: 62, name: "স্নেক প্লান্ট (Sansevieria)", nameEn: "Snake Plant", price: 350, originalPrice: 450, categoryId: 9, emoji: "🌿", gradient: "from-green-100 to-emerald-200", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/bf14995f774a.jpg", rating: 4.9, reviews: 234, sold: 890, popular: true, unit: "১টি", care: "easy", light: "low", tags: ["air-purifying", "low-light"] },
  { id: 63, name: "মানি প্লান্ট (Pothos)", nameEn: "Money Plant", price: 280, originalPrice: 350, categoryId: 9, emoji: "💚", gradient: "from-green-50 to-lime-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/2f7e838abd2c.jpg", rating: 4.9, reviews: 312, sold: 1240, popular: true, unit: "১টি", care: "easy", light: "low", tags: ["air-purifying", "hanging"] },
  { id: 64, name: "জেড প্লান্ট (ZZ Plant)", nameEn: "ZZ Plant", price: 450, originalPrice: 550, categoryId: 9, emoji: "🪴", gradient: "from-emerald-50 to-green-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/b47f6ac85bfe.jpg", rating: 4.8, reviews: 156, sold: 520, popular: true, unit: "১টি", care: "easy", light: "low", tags: ["low-maintenance"] },
  { id: 65, name: "স্পাইডার প্লান্ট", nameEn: "Spider Plant", price: 220, categoryId: 9, emoji: "🕷️", gradient: "from-green-50 to-teal-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/a6e3acc67ace.jpg", rating: 4.7, reviews: 98, sold: 410, unit: "১টি", care: "easy", light: "medium", tags: ["air-purifying", "hanging"] },
  { id: 66, name: "পিস লিলি (Peace Lily)", nameEn: "Peace Lily", price: 380, originalPrice: 480, categoryId: 9, emoji: "🕊️", gradient: "from-slate-50 to-green-50", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/e0042d76ffea.jpg", rating: 4.8, reviews: 142, sold: 560, popular: true, unit: "১টি", care: "medium", light: "low", tags: ["flowering", "air-purifying"] },
  { id: 67, name: "অ্যালোভেরা", nameEn: "Aloe Vera", price: 180, categoryId: 9, emoji: "🌵", gradient: "from-green-50 to-emerald-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/377d8e6750b0.webp", rating: 4.7, reviews: 187, sold: 720, unit: "১টি", care: "easy", light: "bright", tags: ["medicinal", "succulent"] },
  { id: 68, name: "আরেকা পাম", nameEn: "Areca Palm", price: 550, originalPrice: 700, categoryId: 9, emoji: "🌴", gradient: "from-green-50 to-lime-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/22715b7ef2a0.jpg", rating: 4.8, reviews: 124, sold: 480, popular: true, unit: "১টি", care: "medium", light: "bright", tags: ["air-purifying", "large"] },
  { id: 69, name: "অ্যানথুরিয়াম", nameEn: "Anthurium", price: 420, originalPrice: 520, categoryId: 9, emoji: "🌺", gradient: "from-rose-50 to-pink-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/f15f65a37c5e.jpg", rating: 4.7, reviews: 89, sold: 340, isNew: true, unit: "১টি", care: "medium", light: "medium", tags: ["flowering"] },
  { id: 70, name: "রাবার প্লান্ট", nameEn: "Rubber Plant", price: 480, categoryId: 9, emoji: "🌳", gradient: "from-emerald-50 to-green-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/bbf2bb4b24c1.webp", rating: 4.7, reviews: 76, sold: 290, isNew: true, unit: "১টি", care: "medium", light: "medium", tags: ["large", "air-purifying"] },
  { id: 71, name: "লাকি বাঁশ", nameEn: "Lucky Bamboo", price: 150, originalPrice: 200, categoryId: 9, emoji: "🎋", gradient: "from-green-50 to-emerald-50", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/055721274893.jpg", rating: 4.6, reviews: 167, sold: 650, unit: "১টি", care: "easy", light: "low", tags: ["feng-shui", "water"] },
  { id: 72, name: "ক্যাকটাস (মিক্সড)", nameEn: "Mixed Cactus", price: 200, categoryId: 9, emoji: "🌵", gradient: "from-amber-50 to-orange-50", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/5f7cc06ad51b.jpg", rating: 4.5, reviews: 92, sold: 380, unit: "১টি", care: "easy", light: "bright", tags: ["succulent", "low-water"] },
  { id: 73, name: "বার্ড নেস্ট স্নেক প্লান্ট", nameEn: "Bird Nest Snake Plant", price: 320, categoryId: 9, emoji: "🪺", gradient: "from-green-50 to-emerald-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/a517bb2223af.jpg", rating: 4.7, reviews: 64, sold: 240, isNew: true, unit: "১টি", care: "easy", light: "low", tags: ["air-purifying"] },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "সাহানা বেগম",
    role: "নার্সারি মালিক, ঢাকা",
    text: "জৈব সার নিয়মিত এখান থেকেই নিই। দাম বাজারের চেয়ে কম, আর ক্যাশ অন ডেলিভারি থাকায় নিশ্চিন্তে অর্ডার করতে পারি। পণ্যের মানও দারুণ।",
    initials: "স",
    rating: 5,
  },
  {
    id: 2,
    name: "মোঃ কামরুল হাসান",
    role: "কৃষি উদ্যোক্তা, গাজীপুর",
    text: "হ্যান্ড স্প্রেয়ারটা কিনে ভালো লেগেছে, বেশ মজবুত। ফোনে জিজ্ঞেস করলে ভালোভাবে বুঝিয়ে বলেন — এটাই সবচেয়ে ভালো দিক।",
    initials: "ক",
    rating: 5,
  },
  {
    id: 3,
    name: "আবুল কালাম",
    role: "ছাদ বাগানী, চট্টগ্রাম",
    text: "প্রথমে অনলাইনে সার কিনতে ভয় পেয়েছিলাম। কিন্তু পণ্য হাতে পেয়ে টাকা দিয়েছি, সব ঠিকঠাক ছিল। এখন নিয়মিত অর্ডার করি।",
    initials: "আ",
    rating: 5,
  },
  {
    id: 4,
    name: "রফিকুল ইসলাম",
    role: "কৃষক, বগুড়া",
    text: "সার আর বীজের মান সত্যিই ভালো। গতবার বীজ নিয়েছিলাম, ফলন আগের চেয়ে অনেক বেড়েছে। ডেলিভারিও সময়মতো পেয়েছি।",
    initials: "র",
    rating: 5,
  },
];

export const youtubeVideos: YouTubeVideo[] = [
  {
    id: "obbSK3Of0jk",
    title: "ডুমুর গাছে ফল — সিকদার নার্সারি",
    titleEn: "Fig Tree with Fruit at Sikdar Nursery",
    description: "মিশরীয় ডুমুর গাছে ফল ধরার দৃশ্য — গার্ডেনিং বাংলাদেশ শর্টস",
  },
  {
    id: "XHHT0OlBaNo",
    title: "গার্ডেনিং শপ — সার/বীজ/কীটনাশক",
    titleEn: "Gardening Shop Tour",
    description: "আমাদের গার্ডেনিং শপের ভেতরের দৃশ্য — সার, বীজ ও কীটনাশক",
  },
  {
    id: "g91Trssy0X8",
    title: "ইনডোর গাছ — ঘরের সৌন্দর্য",
    titleEn: "Indoor Plants Collection",
    description: "ঘরের ভেতরে রাখার মতো সুন্দর ইনডোর গাছের সংগ্রহ",
  },
  {
    id: "tue3K_3Iz48",
    title: "আমার ছাদবাগান — সবুজের রাজত্ব",
    titleEn: "My Rooftop Garden",
    description: "একটি সুন্দর ছাদবাগানের পূর্ণাঙ্গ পরিচিতি",
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "ইউটিউব",
    nameEn: "YouTube",
    href: "https://www.youtube.com/@gardeningbangladesh",
    icon: "Youtube",
    color: "#FF0000",
  },
  {
    name: "ফেসবুক পেজ",
    nameEn: "Facebook Page",
    href: "https://www.facebook.com/gardeningbangladeshGB",
    icon: "Facebook",
    color: "#1877F2",
  },
  {
    name: "ফেসবুক গ্রুপ",
    nameEn: "Facebook Group",
    href: "https://www.facebook.com/groups/gardeningbangladesh",
    icon: "Users",
    color: "#1877F2",
  },
  {
    name: "ইনস্টাগ্রাম",
    nameEn: "Instagram",
    href: "https://www.instagram.com/gardeningbangladesh",
    icon: "Instagram",
    color: "#E4405F",
  },
  {
    name: "টিকটক",
    nameEn: "TikTok",
    href: "https://www.tiktok.com/@gardeningbangladesh",
    icon: "Music2",
    color: "#000000",
  },
  {
    name: "এক্স (টুইটার)",
    nameEn: "X (Twitter)",
    href: "https://x.com/Gardening_BD",
    icon: "Twitter",
    color: "#000000",
  },
  {
    name: "লিংকডইন",
    nameEn: "LinkedIn",
    href: "https://www.linkedin.com/in/gardeningbangladesh",
    icon: "Linkedin",
    color: "#0A66C2",
  },
];

export const shopInfo = {
  name: "Gardening Bangladesh",
  nameBn: "গার্ডেনিং বাংলাদেশ",
  tagline: "Grow Green, Live Better",
  taglineBn: "সবুজে বাঁচি প্রতিদিন",
  subtitle: "বাংলাদেশের #১ অনলাইন গার্ডেনিং শপ",
  phone: "01822025322",
  email: "hello@gardeningbangladesh.com",
  address: "মাধবদী, নরসিংদী, বাংলাদেশ",
  description:
    "গার্ডেনিং বাংলাদেশ সারা দেশের ছাদ ও বাড়ি বাগানীদের হাতে সেরা মানের সার, বীজ, টব ও কৃষি উপকরণ পৌঁছে দিয়ে সবুজ বিপ্লবে নেতৃত্ব দিচ্ছে। ক্যাশ অন ডেলিভারি সুবিধাসহ নিশ্চিন্তে অর্ডার করুন।",
  copyright: "© 2022 - 2026 Gardening Bangladesh. সর্বস্বত্ব সংরক্ষিত।",
  youtubeChannel: "https://www.youtube.com/@gardeningbangladesh",
  youtubeChannelId: "UCQALXmlTF5vIA_PRna-hz4Q",
  stats: {
    products: "220+",
    customers: "15K+",
    rating: "4.9",
    districts: "64",
  },
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
    { label: "ইউটিউবে শিখুন", href: "https://www.youtube.com/@gardeningbangladesh" },
  ],
  company: [
    { label: "আমাদের গল্প", href: "#about" },
    { label: "ভিডিও গাইড", href: "#videos" },
    { label: "কাস্টমার রিভিউ", href: "#testimonials" },
    { label: "যোগাযোগ", href: "#contact" },
  ],
};
