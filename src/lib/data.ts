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
  {
    id: 10,
    name: "আউটডোর প্লান্ট",
    nameEn: "Outdoor Plants",
    slug: "outdoor-plants",
    icon: "TreePine",
    description: "বাগান, ছাদ ও বারান্দার জন্য সুন্দর বহিরাঙ্গন গাছ",
    descriptionEn: "Beautiful plants for garden, rooftop & balcony",
  },
];

export type Benefit = {
  icon: string;
  title: string;
  desc: string;
};

export type Infographic = {
  value: string;
  label: string;
  icon: string;
};

export type PlantingGuide = {
  title: string;
  icon: string;
  steps: { title: string; desc: string }[];
  careTips: string[];
  usageInstructions: { title: string; desc: string }[];
};

export type CategoryPageContent = {
  categoryId: number;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  youtubeId: string;
  youtubeTitle: string;
  benefits: Benefit[];
  infographics: Infographic[];
  usage: string[];
  faq: { q: string; a: string }[];
  plantingGuide?: PlantingGuide;
};

export const categoryContent: Record<number, CategoryPageContent> = {
  1: {
    categoryId: 1,
    heroTitle: "জৈব সার",
    heroSubtitle: "Organic Fertilizer — প্রকৃতির সেরা পুষ্টি",
    heroDescription:
      "ঝিনুক পাউডার, ভার্মিকম্পোস্ট, নিম খোল, হাড় গুঁড়াসহ ৮ ধরনের শতভাগ প্রাকৃতিক জৈব সার। মাটির উর্বরতা বাড়ায়, ফলন বহুগুণ করে এবং গাছকে রোগমুক্ত রাখে। বাংলাদেশের ছাদ ও বাড়ি বাগানের জন্য আদর্শ।",
    youtubeId: "obbSK3Of0jk",
    youtubeTitle: "জৈব সার তৈরি ও ব্যবহারের সঠিক নিয়ম",
    benefits: [
      { icon: "Leaf", title: "মাটির উর্বরতা বাড়ায়", desc: "প্রাকৃতিক উপাদানে মাটির গঠন ও পুষ্টি উন্নত করে" },
      { icon: "Sprout", title: "ফলন বহুগুণ", desc: "শাকসবজি ও ফলের পরিমাণ ও মান উভয়ই বৃদ্ধি পায়" },
      { icon: "ShieldCheck", title: "রোগ প্রতিরোধ", desc: "গাছের রোগ প্রতিরোধ ক্ষমতা বাড়ায়, রাসায়নিকমুক্ত" },
      { icon: "Recycle", title: "পরিবেশবান্ধব", desc: "১০০% প্রাকৃতিক, মাটি ও পরিবেশের ক্ষতি করে না" },
    ],
    infographics: [
      { value: "৮+", label: "প্রকার জৈব সার", icon: "Package" },
      { value: "৩০%", label: "ফলন বৃদ্ধি", icon: "TrendingUp" },
      { value: "১০০%", label: "প্রাকৃতিক", icon: "Leaf" },
      { value: "৫৪০+", label: "বিক্রি", icon: "ShoppingCart" },
    ],
    usage: [
      "প্রতি ১ কেজি জৈব সার ১০-১৫ বর্গফুট জায়গার জন্য যথেষ্ট",
      "সপ্তাহে ১-২ বার গাছের গোড়ায় প্রয়োগ করুন",
      "পানি দেওয়ার আগে মাটির সাথে মিশিয়ে নিন",
      "সকালে বা বিকেলে প্রয়োগ সবচেয়ে ভালো ফল দেয়",
    ],
    faq: [
      { q: "জৈব সার কতদিন পর পর দিতে হয়?", a: "সাধারণত সপ্তাহে ১-২ বার জৈব সার প্রয়োগ করা উচিত। গাছের ধরন অনুযায়ী পরিমাণ নির্ধারণ করুন।" },
      { q: "এটি কি সব ধরনের গাছের জন্য নিরাপদ?", a: "হ্যাঁ, জৈব সার শতভাগ প্রাকৃতিক হওয়ায় শাকসবজি, ফল, ফুল ও ইনডোর প্লান্ট সব ধরনের গাছের জন্য নিরাপদ।" },
      { q: "মেয়াদ উত্তীর্ণ হলে কি ব্যবহার করা যাবে?", a: "শুকনো ও সঠিকভাবে সংরক্ষণে জৈব সার ১২-১৮ মাস পর্যন্ত ভালো থাকে।" },
    ],
    plantingGuide: {
      title: "জৈব সার দিয়ে গাছ লাগানো ও যত্নের গাইড",
      icon: "Sprout",
      steps: [
        { title: "মাটি প্রস্তুত করুন", desc: "টব বা বাগানের মাটি ভালোভাবে কুপিয়ে নরম করুন। পানি নিষ্কাশনের জন্য তলায় ছোট পাথর দিন।" },
        { title: "জৈব সার মেশান", desc: "মাটির সাথে ১-২ চামচ জৈব সার ভালোভাবে মিশিয়ে নিন। ভার্মিকম্পোস্ট বা ঝিনুক পাউডার ব্যবহার করুন।" },
        { title: "চারা বা বীজ লাগান", desc: "মাটি ভেজানোর পর চারা বা বীজ লাগান। সার মাটির সাথে মিশে গাছের শিকড়ে পৌঁছাবে।" },
        { title: "পানি দিন", desc: "লাগানোর পর পরিমিত পানি দিন। জৈব সার পানিতে গুলে স্প্রে করাও যায়।" },
        { title: "নিয়মিত যত্ন নিন", desc: "সপ্তাহে ১-২ বার জৈব সার প্রয়োগ করুন। গাছের গোড়ায় প্রয়োগ করে হালকা মাটি দিয়ে ঢেকে দিন।" },
      ],
      careTips: [
        "সকালে বা বিকেলে সার প্রয়োগ করুন, দুপুরের রোদে নয়",
        "পানি দেওয়ার আগে সার মাটির সাথে মিশিয়ে নিন",
        "অতিরিক্ত সার দেবেন না — পরিমিত পরিমাণে দিন",
        "শাকসবজির জন্য ভার্মিকম্পোস্ট সবচেয়ে ভালো",
        "ফলের গাছে হাড় গুঁড়া ও শিং কুচি ব্যবহার করুন",
        "ফুলের গাছে ঝিনুক পাউডার ফুল ফোটাতে সাহায্য করে",
      ],
      usageInstructions: [
        { title: "টবের গাছে", desc: "১ কেজি জৈব সার ১০-১৫ টবের জন্য যথেষ্ট। প্রতি টবে ১-২ চামচ মাসে একবার দিন।" },
        { title: "ছাদ বাগানে", desc: "প্রতি বর্গফুটে ১০০-২০০ গ্রাম জৈব সার মাটির সাথে মেশান। মাসে একবার পুনঃপ্রয়োগ করুন।" },
        { title: "স্প্রে হিসেবে", desc: "১ চামচ জৈব সার ১ লিটার পানিতে গুলে ২৪ ঘণ্টা রেখে স্প্রে করুন। পাতা ও গাছ সুস্থ থাকে।" },
        { title: "চারা তোলার সময়", desc: "চারা তোলার আগে মাটিতে জৈব সার মেশালে চারা দ্রুত শিকড় ছড়ায় ও বাঁচে।" },
      ],
    },
  },
  7: {
    categoryId: 7,
    heroTitle: "রাসায়নিক সার",
    heroSubtitle: "Chemical Fertilizer — দ্রুত ফলাফলের নিশ্চয়তা",
    heroDescription:
      "NPK, DAP, ইউরিয়া, পটাশ, বোরনসহ ৮ ধরনের উন্নতমানের রাসায়নিক সার। দ্রুত গাছের বৃদ্ধি নিশ্চিত করে এবং পুষ্টির ঘাটতি দূর করে। সঠিক মাত্রায় ব্যবহারের জন্য আমাদের গাইড অনুসরণ করুন।",
    youtubeId: "XHHT0OlBaNo",
    youtubeTitle: "রাসায়নিক সার ব্যবহারের সঠিক নিয়ম",
    benefits: [
      { icon: "Zap", title: "দ্রুত ফলাফল", desc: "গাছ দ্রুত পুষ্টি গ্রহণ করে ও বৃদ্ধি পায়" },
      { icon: "FlaskConical", title: "নির্ভুল পুষ্টি", desc: "নির্দিষ্ট NPK অনুপাতে সঠিক পুষ্টি সরবরাহ" },
      { icon: "TrendingUp", title: "উচ্চ ফলন", desc: "বাণিজ্যিক চাষে অসাধারণ ফলন নিশ্চিত" },
      { icon: "Coins", title: "সাশ্রয়ী", desc: "অল্প পরিমাণে কার্যকর, খরচ কম" },
    ],
    infographics: [
      { value: "৮+", label: "প্রকার সার", icon: "Package" },
      { value: "৩x", label: "দ্রুত বৃদ্ধি", icon: "Zap" },
      { value: "৯৯%", label: "বিশুদ্ধ", icon: "FlaskConical" },
      { value: "৭৬০+", label: "বিক্রি", icon: "ShoppingCart" },
    ],
    usage: [
      "প্রতি গাছে ৫-১০ গ্রাম সার প্রয়োগ করুন",
      "পানিতে গুলে স্প্রে করলে দ্রুত ফল পাওয়া যায়",
      "অতিরিক্ত ব্যবহার গাছের ক্ষতি করতে পারে",
      "সবসময় পরিমিত মাত্রায় ও নির্দেশিত নিয়মে ব্যবহার করুন",
    ],
    faq: [
      { q: "রাসায়নিক সার কি জৈব সারের সাথে ব্যবহার করা যায়?", a: "হ্যাঁ, জৈব ও রাসায়নিক সারের সমন্বয়ে সেরা ফল পাওয়া যায়। তবে মাত্রা সঠিক রাখুন।" },
      { q: "কতবার সার দিতে হয়?", a: "সাধারণত ১৫-২০ দিন পরপর রাসায়নিক সার প্রয়োগ করা উচিত। গাছের অবস্থা দেখে মাত্রা নির্ধারণ করুন।" },
      { q: "বোরন সার কেন দরকার?", a: "বোরন ফুল ও ফল ধরার জন্য অপরিহার্য। এর ঘাটতিতে ফল ঝরে পড়ে ও ফলন কমে।" },
    ],
    plantingGuide: {
      title: "রাসায়নিক সার ব্যবহারের গাইড — কীভাবে প্রয়োগ করবেন",
      icon: "FlaskConical",
      steps: [
        { title: "সঠিক সার নির্বাচন করুন", desc: "গাছের পর্যায় অনুযায়ী সার বাছুন। বৃদ্ধির জন্য ইউরিয়া, ফুলের জন্য NPK, ফলের জন্য পটাশ ও বোরন।" },
        { title: "পরিমাণ নির্ধারণ করুন", desc: "প্রতি গাছে ৫-১০ গ্রাম রাসায়নিক সার যথেষ্ট। বেশি দিলে গাছের শিকড় পুড়ে যেতে পারে।" },
        { title: "গাছের গোড়ায় প্রয়োগ করুন", desc: "গাছের গোড়া থেকে ৫-১০ সে.মি. দূরে ছোট গর্ত করে সার দিন। সরাসরি গাছের গায়ে লাগাবেন না।" },
        { title: "মাটি দিয়ে ঢেকে দিন", desc: "সার দেওয়ার পর মাটি দিয়ে ঢেকে দিন যাতে পুষ্টি বাষ্প না হয়ে যায়।" },
        { title: "পানি দিন", desc: "সার প্রয়োগের পর পরিমিত পানি দিন যাতে সার গলে শিকড়ে পৌঁছায়।" },
      ],
      careTips: [
        "১৫-২০ দিন পরপর রাসায়নিক সার প্রয়োগ করুন, বেশি বার নয়",
        "সবসময় পরিমিত মাত্রায় ব্যবহার করুন — বেশি দিলে ক্ষতি হয়",
        "রোদের সময় সার দেবেন না, সকাল/বিকেলে দিন",
        "গ্লাভস পরে সার ধরুন, হাত ধুয়ে ফেলুন",
        "ফল ও শাকসবজি খাওয়ার ৭-১০ দিন আগে সার দেবেন না",
        "NPK পানিতে গুলে স্প্রে করলে দ্রুত ফল পাওয়া যায়",
      ],
      usageInstructions: [
        { title: "NPK স্প্রে", desc: "১ চামচ NPK ১ লিটার পানিতে গুলে পাতায় স্প্রে করুন। সপ্তাহে ১ বার। দ্রুত বৃদ্ধি নিশ্চিত।" },
        { title: "ইউরিয়া প্রয়োগ", desc: "প্রতি গাছে ৫-১০ গ্রাম ইউরিয়া গোড়ায় দিন। পাতার রঙ সবুজ ও বড় হবে।" },
        { title: "DAP ও পটাশ", desc: "ফল ধরার সময় DAP ও পটাশ দিন। ফল বড় ও মিষ্টি হয়।" },
        { title: "বোরন স্প্রে", desc: "ফুল ফোটার সময় বোরন স্প্রে করলে ফল ঝরে পড়ে না। ১ গ্রাম ১ লিটার পানিতে।" },
      ],
    },
  },
  8: {
    categoryId: 8,
    heroTitle: "রেডি মিক্স মিডিয়া",
    heroSubtitle: "Ready Mix Media — সরাসরি ব্যবহারযোগ্য",
    heroDescription:
      "অ্যাডেনিয়াম, ক্যাকটাস, অর্কিড, বনসাই ও রেডিমিক্স সয়েল — প্রতিটি গাছের জন্য বিশেষভাবে তৈরি প্রস্তুত মাটির মিশ্রণ। ঝামেলাহীন, সরাসরি টবে ভরে গাছ লাগানোর জন্য উপযুক্ত।",
    youtubeId: "g91Trssy0X8",
    youtubeTitle: "রেডি মিক্স সয়েল ব্যবহারের সহজ নিয়ম",
    benefits: [
      { icon: "Clock", title: "সময় সাশ্রয়", desc: "নিজে মিশ্রণ তৈরি করার ঝামেলা নেই" },
      { icon: "Layers", title: "সঠিক অনুপাত", desc: "বিশেষজ্ঞ দ্বারা পরিমিত উপাদানে তৈরি" },
      { icon: "Droplets", title: "পানি নিষ্কাশন", desc: "অতিরিক্ত পানি দ্রুত বের হয়ে যায়" },
      { icon: "Flower2", title: "গাছের জন্য উপযুক্ত", desc: "প্রতিটি গাছের প্রয়োজন অনুযায়ী আলাদা" },
    ],
    infographics: [
      { value: "৫+", label: "মিক্স মিডিয়া", icon: "Package" },
      { value: "১০০%", label: "প্রস্তুত", icon: "CheckCircle2" },
      { value: "৬৮০+", label: "বিক্রি", icon: "ShoppingCart" },
      { value: "৪.৯", label: "রেটিং", icon: "Star" },
    ],
    usage: [
      "টবের তলায় ছোট পাথর বা টুকরো দিন পানি নিষ্কাশনের জন্য",
      "রেডিমিক্স সয়েল সরাসরি টবে ভরুন",
      "গাছ লাগিয়ে হালকা চাপ দিয়ে মাটি স্থির করুন",
      "প্রথম পানি ভালোভাবে দিন, এরপর মাটি শুকালে পানি দিন",
    ],
    faq: [
      { q: "রেডিমিক্স সয়েল কতদিন ভালো থাকে?", a: "সঠিক সংরক্ষণে ৬-১২ মাস পর্যন্ত মাটির গুণাগুণ অটুট থাকে।" },
      { q: "কোন সয়েল কোন গাছের জন্য?", a: "ক্যাকটাস সয়েল ক্যাকটাসের জন্য, অর্কিড মিক্স অর্কিডের জন্য, রেডিমিক্স সাধারণ গাছের জন্য উপযুক্ত।" },
      { q: "পুনরায় সার দিতে হবে?", a: "প্রথম ২-৩ মাস অতিরিক্ত সারের প্রয়োজন নেই, মিশ্রণে পুষ্টি থাকে।" },
    ],
    plantingGuide: {
      title: "রেডি মিক্স সয়েল দিয়ে গাছ লাগানোর গাইড",
      icon: "Layers",
      steps: [
        { title: "টব প্রস্তুত করুন", desc: "টবের তলায় ছোট পাথর বা টুকরো দিন পানি নিষ্কাশনের জন্য। ড্রেনেজ গর্ত আছে কিনা দেখুন।" },
        { title: "রেডিমিক্স সয়েল ভরুন", desc: "সরাসরি রেডিমিক্স সয়েল টবে ভরুন। কোনো অতিরিক্ত মিশ্রণ বা সার যোগ করার দরকার নেই।" },
        { title: "গাছ বা বীজ লাগান", desc: "গাছের চারা বা বীজ সয়েলে লাগান। সাবধানে শিকড় সয়েলের সাথে মিশিয়ে দিন।" },
        { title: "হালকা চাপ দিন", desc: "গাছ লাগানোর পর হালকা চাপ দিয়ে সয়েল স্থির করুন। গাছ যেন নড়বে না।" },
        { title: "পানি দিন", desc: "প্রথম পানি ভালোভাবে দিন। এরপর মাটি শুকালে পানি দিন, অতিরিক্ত পানি এড়িয়ে চলুন।" },
      ],
      careTips: [
        "প্রথম ২-৩ মাস অতিরিক্ত সারের দরকার নেই, সয়েলে পুষ্টি আছে",
        "মাটি শুকালেই পানি দিন, ভেজা অবস্থায় দেবেন না",
        "ক্যাকটাস সয়েলে কম পানি দিন, অর্কিড মিক্সে বেশি বাতাস দরকার",
        "৩-৪ মাস পর সামান্য জৈব সার যোগ করতে পারেন",
        "টবের মাটি শক্ত হলে হালকা কুপিয়ে দিন",
        "রেডিমিক্স সয়েল সংরক্ষণ করতে শুকনো ও বাতাসরোধী পাত্রে রাখুন",
      ],
      usageInstructions: [
        { title: "অ্যাডেনিয়াম সয়েল", desc: "অ্যাডেনিয়াম ও মরু গাছের জন্য। দ্রুত পানি নিষ্কাশন, কম পানি দিন।" },
        { title: "ক্যাকটাস সয়েল", desc: "ক্যাকটাস ও সাকুলেন্টের জন্য। বেশি বালু থাকে, কম পানি দিন। ১০-১৫ দিন পর পানি।" },
        { title: "রেডিমিক্স সয়েল", desc: "সাধারণ গাছের জন্য। শাকসবজি, ফুল, ইনডোর প্লান্ট সব ধরনের গাছে ব্যবহারযোগ্য।" },
        { title: "অর্কিড মিক্স", desc: "অর্কিডের জন্য বিশেষ। বাকর ও চারকোল মিশ্রণ, বেশি বাতাস ও আলো দরকার।" },
      ],
    },
  },
  2: {
    categoryId: 2,
    heroTitle: "টব ও প্লান্টার",
    heroSubtitle: "Pots & Planters — সৌন্দর্যময় বাগান",
    heroDescription:
      "অর্কিড টব, রাউন্ড প্লান্টার, হ্যাঙ্গিং বাস্কেটসহ ৮ ধরনের মজবুত ও সুন্দর টব। আপনার ছাদ, বারান্দা বা ঘরের সৌন্দর্য বাড়াতে আদর্শ। বিভিন্ন মাপে ও রঙে উপলব্ধ।",
    youtubeId: "tue3K_3Iz48",
    youtubeTitle: "টব বাছাই ও গাছ লাগানোর নিয়ম",
    benefits: [
      { icon: "Flower2", title: "সুন্দর ডিজাইন", desc: "আকর্ষণীয় রঙ ও আধুনিক ডিজাইন" },
      { icon: "ShieldCheck", title: "মজবুত", desc: "উন্নতমানের প্লাস্টিক, সহজে ভাঙে না" },
      { icon: "Droplets", title: "পানি নিষ্কাশন", desc: "সঠিক ড্রেনেজ সিস্টেমসহ" },
      { icon: "Ruler", title: "বিভিন্ন মাপ", desc: "ছোট থেকে বড় সব গাছের জন্য" },
    ],
    infographics: [
      { value: "৮+", label: "ধরনের টব", icon: "Package" },
      { value: "৪-১৮", label: "সে.মি. মাপ", icon: "Ruler" },
      { value: "৫১০+", label: "বিক্রি", icon: "ShoppingCart" },
      { value: "৪.৭", label: "রেটিং", icon: "Star" },
    ],
    usage: [
      "গাছের আকার অনুযায়ী টবের মাপ নির্বাচন করুন",
      "টবের তলায় ছোট পাথর দিন পানি নিষ্কাশনের জন্য",
      "টব পরিষ্কার রাখলে দীর্ঘস্থায়ী হয়",
      "সরাসরি রোদে রাখলে কালার দীর্ঘক্ষণ টিকে",
    ],
    faq: [
      { q: "টবের মাপ কীভাবে বুঝব?", a: "গাছের বর্তমান উচ্চতার তুলনায় টব ২-৩ সে.মি. বড় হওয়া উচিত।" },
      { q: "প্লাস্টিক টব কি ভালো?", a: "হ্যাঁ, আধুনিক প্লাস্টিক টব মজবুত, হালকা ও সুন্দর। সঠিক ড্রেনেজ থাকলে গাছ ভালো হয়।" },
      { q: "হ্যাঙ্গিং বাস্কেট কোথায় লাগাব?", a: "বারান্দা, ছাদ বা ঘরের জানালায় হুক দিয়ে ঝুলিয়ে লাগাতে পারেন।" },
    ],
  },
  3: {
    categoryId: 3,
    heroTitle: "বীজ",
    heroSubtitle: "Seeds — উচ্চ ফলনশীল বীজ",
    heroDescription:
      "ডেড়শ, পুদিনা, ডাটা, পেঁপে, ধনিয়া, টমেটো, মরিচসহ ৮ ধরনের হাইব্রিড ও উন্নতমানের বীজ। উচ্চ অঙ্কুরোদ্গম হার, রোগপ্রতিরোধী ও প্রচুর ফলন নিশ্চিত। বাংলাদেশের আবহাওয়ার উপযোগী।",
    youtubeId: "obbSK3Of0jk",
    youtubeTitle: "বীজ বপন ও চারা গজানোর নিয়ম",
    benefits: [
      { icon: "Sprout", title: "উচ্চ অঙ্কুরোদ্গম", desc: "৯০%+ বীজ অঙ্কুরিত হয়" },
      { icon: "TrendingUp", title: "উচ্চ ফলন", desc: "হাইব্রিড জাতে প্রচুর ফলন" },
      { icon: "ShieldCheck", title: "রোগপ্রতিরোধী", desc: "সাধারণ রোগে সহজে আক্রান্ত হয় না" },
      { icon: "Leaf", title: "উপযোগী আবহাওয়া", desc: "বাংলাদেশের জলবায়ুর জন্য আদর্শ" },
    ],
    infographics: [
      { value: "৮+", label: "প্রকার বীজ", icon: "Package" },
      { value: "৯০%+", label: "অঙ্কুরোদ্গম", icon: "Sprout" },
      { value: "৬৪০+", label: "বিক্রি", icon: "ShoppingCart" },
      { value: "৪.৮", label: "রেটিং", icon: "Star" },
    ],
    usage: [
      "বীজ বপনের আগে মাটি ভালোভাবে প্রস্তুত করুন",
      "বীজ ১-২ সে.মি. গভীরে বপন করুন",
      "প্রথম ৩-৫ দিন মাটি ভেজা রাখুন",
      "অঙ্কুরিত হলে পর্যাপ্ত আলো ও পানি নিশ্চিত করুন",
    ],
    faq: [
      { q: "বীজ কতদিনে অঙ্কুরিত হয়?", a: "সাধারণত ৫-১৫ দিনে অঙ্কুরিত হয়। জাত ও ঋতু অনুযায়ী সময় ভিন্ন হতে পারে।" },
      { q: "কোন ঋতুতে বীজ বুনব?", a: "বেশিরভাগ শাকসবজি শীত ও বর্ষায় ভালো হয়। প্যাকেটের নির্দেশ অনুসরণ করুন।" },
      { q: "বীজ সংরক্ষণ কীভাবে?", a: "শুকনো ও ঠান্ডা জায়গায় বাতাসরোধী পাত্রে সংরক্ষণ করুন।" },
    ],
  },
  9: {
    categoryId: 9,
    heroTitle: "ইনডোর প্লান্ট",
    heroSubtitle: "Indoor Plants — ঘরে সবুজের ছোঁয়া",
    heroDescription:
      "স্নেক প্লান্ট, মানি প্লান্ট, জেড প্লান্ট, পিস লিলি, আরেকা পামসহ ১২+ জাতের এয়ার-পিউরিফাইং ইনডোর প্লান্ট। ঘরের বাতাস পরিষ্কার করে, সৌন্দর্য বাড়ায় এবং মানসিক প্রশান্তি দেয়। ঢাকার অ্যাপার্টমেন্টের জন্য আদর্শ।",
    youtubeId: "g91Trssy0X8",
    youtubeTitle: "ইনডোর প্লান্ট যত্নের সহজ গাইড",
    benefits: [
      { icon: "Wind", title: "বাতাস পরিষ্কার", desc: "বিষাক্ত গ্যাস শোষণ করে বাতাস পরিষ্কার রাখে" },
      { icon: "Sun", title: "কম আলোতে চলে", desc: "ছায়ায়ও সুন্দরভাবে বেড়ে ওঠে" },
      { icon: "Droplets", title: "সহজ যত্ন", desc: "অল্প পানিতেই টিকে থাকে" },
      { icon: "Heart", title: "মানসিক শান্তি", desc: "ঘরে সবুজ থাকলে মন ভালো থাকে" },
    ],
    infographics: [
      { value: "১২+", label: "জাতের গাছ", icon: "Package" },
      { value: "৮৯০+", label: "বিক্রি", icon: "ShoppingCart" },
      { value: "৪.৯", label: "রেটিং", icon: "Star" },
      { value: "১০০%", label: "সতেজ", icon: "Leaf" },
    ],
    usage: [
      "সপ্তাহে ১-২ বার পানি দিন, মাটি শুকালে দিন",
      "পরোক্ষ আলোতে রাখুন, সরাসরি রোদ এড়িয়ে চলুন",
      "পাতা মাঝে মাঝে ভেজা কাপড় দিয়ে মুছে দিন",
      "প্রতি ৬ মাসে সামান্য সার দিন",
    ],
    faq: [
      { q: "কোন গাছ ঘরের জন্য সেরা?", a: "স্নেক প্লান্ট, মানি প্লান্ট ও জেড প্লান্ট নতুনদের জন্য সবচেয়ে সহজ ও উপযুক্ত।" },
      { q: "ইনডোর প্লান্ট কি বাথরুমে রাখা যায়?", a: "হ্যাঁ, পিস লিলি ও স্পাইডার প্লান্ট বাথরুমের ভেজা পরিবেশে ভালো থাকে।" },
      { q: "কেন পাতা হলুদ হয়ে যাচ্ছে?", a: "অতিরিক্ত পানি, কম আলো বা পুষ্টির ঘাটতিতে পাতা হলুদ হতে পারে। পানির পরিমাণ ঠিক করুন।" },
    ],
  },
  4: {
    categoryId: 4,
    heroTitle: "গার্ডেন টুলস",
    heroSubtitle: "Garden Tools — বাগানের সঙ্গী",
    heroDescription:
      "স্প্রেয়ার, সিকেচার, বেলচা, গ্লাভসহ ৮ ধরনের মজবুত ও কার্যকর গার্ডেন টুলস। বাগানের প্রতিটি কাজকে সহজ, দ্রুত ও আনন্দদায়ক করে তুলুন।",
    youtubeId: "XHHT0OlBaNo",
    youtubeTitle: "গার্ডেন টুলস ব্যবহারের গাইড",
    benefits: [
      { icon: "Wrench", title: "মজবুত ও টেকসই", desc: "উন্নতমানের উপাদানে তৈরি" },
      { icon: "Hand", title: "আরামদায়ক গ্রিপ", desc: "হাতে ধরে কাজ করতে সহজ" },
      { icon: "Zap", title: "দ্রুত কাজ", desc: "সঠিক টুলসে সময় কম, কাজ বেশি" },
      { icon: "ShieldCheck", title: "নিরাপদ", desc: "ব্যবহারে নিরাপদ ও সুরক্ষিত" },
    ],
    infographics: [
      { value: "৮+", label: "টুলস", icon: "Package" },
      { value: "৬২০+", label: "বিক্রি", icon: "ShoppingCart" },
      { value: "৪.৮", label: "রেটিং", icon: "Star" },
      { value: "১২", label: "মাস ওয়ারেন্টি", icon: "ShieldCheck" },
    ],
    usage: [
      "ব্যবহারের পর টুলস পরিষ্কার করে রাখুন",
      "ধারালো অংশ থেকে সাবধানে থাকুন",
      "শুকনো জায়গায় সংরক্ষণ করলে মরিচা ধরে না",
      "গ্লাভস পরে কাজ করা নিরাপদ",
    ],
    faq: [
      { q: "স্প্রেয়ার কত লিটারের কিনব?", a: "ছোট বাগানের জন্য ৫০০মিলি-২ লিটার, বড় বাগানের জন্য ৫ লিটারের স্প্রেয়ার উপযুক্ত।" },
      { q: "সিকেচার কখন ব্যবহার করব?", a: "গাছের শুকনো ডাল কাটা, আকৃতি ঠিক রাখা ও ফল পাড়ার জন্য সিকেচার ব্যবহার করুন।" },
      { q: "ওয়ারেন্টি আছে কি?", a: "হ্যাঁ, নির্দিষ্ট টুলসে নির্মাতা ওয়ারেন্টি রয়েছে। বিস্তারিত পণ্যের সাথে দেওয়া হয়।" },
    ],
  },
  5: {
    categoryId: 5,
    heroTitle: "কীটনাশক ও ছত্রাকনাশক",
    heroSubtitle: "Pesticides & Fungicides — গাছের সুরক্ষা",
    heroDescription:
      "ইমিটাফ, নাইট্রো, কুড়েনক্স, মিরাকুলান, ফ্লোরা, নিম অয়েলসহ ৮ ধরনের কার্যকর কীটনাশক ও ছত্রাকনাশক। পোকা, ছত্রাক ও রোগ থেকে গাছকে রক্ষা করে।",
    youtubeId: "tue3K_3Iz48",
    youtubeTitle: "কীটনাশক ব্যবহারের নিরাপদ নিয়ম",
    benefits: [
      { icon: "Bug", title: "পোকা দূর", desc: "ক্ষতিকারক পোকা থেকে গাছ রক্ষা" },
      { icon: "ShieldCheck", title: "ছত্রাক প্রতিরোধ", desc: "গাছের রোগ ও পচন রোধ" },
      { icon: "Leaf", title: "গাছ সুস্থ", desc: "সঠিক ব্যবহারে গাছ সুস্থ থাকে" },
      { icon: "Zap", title: "দ্রুত কার্যকর", desc: "অল্প সময়ে ফল পাওয়া যায়" },
    ],
    infographics: [
      { value: "৮+", label: "প্রকার ওষুধ", icon: "Package" },
      { value: "৪৭০+", label: "বিক্রি", icon: "ShoppingCart" },
      { value: "৪.৭", label: "রেটিং", icon: "Star" },
      { value: "৯৫%", label: "কার্যকারিতা", icon: "Bug" },
    ],
    usage: [
      "সর্বদা প্রস্তুতকারকের নির্দেশিত মাত্রায় ব্যবহার করুন",
      "সকালে বা বিকেলে স্প্রে করুন, রোদে নয়",
      "গ্লাভস ও মাস্ক পরে ব্যবহার করুন",
      "ফল ও শাকসবজি খাওয়ার ৭-১০ দিন আগে ব্যবহার এড়িয়ে চলুন",
    ],
    faq: [
      { q: "নিম অয়েল কি নিরাপদ?", a: "নিম অয়েল প্রাকৃতিক ও জৈব কীটনাশক। সঠিক মাত্রায় ব্যবহার নিরাপদ।" },
      { q: "কতদিন পর স্প্রে করব?", a: "সাধারণত ৭-১০ দিন পরপর স্প্রে করা উচিত। রোগের তীব্রতা অনুযায়ী সমন্বয় করুন।" },
      { q: "কোন ওষুধ কোন পোকার জন্য?", a: "ইমিটাফ ফল ছিদ্রকারী পোকায়, কুড়েনক্স ছত্রাকে, নিম অয়েল সাধারণ পোকায় কার্যকর।" },
    ],
  },
  6: {
    categoryId: 6,
    heroTitle: "অন্যান্য উপকরণ",
    heroSubtitle: "Other Accessories — বাগানের বিবিধ",
    heroDescription:
      "নার্সারি পলি, সিডলিং ট্রে, রঙ্গিন পাথর, ফেরোমন ফাঁদ, ওয়াটারিং ক্যানসহ ৮ ধরনের বাগানের বিবিধ প্রয়োজনীয় উপকরণ।",
    youtubeId: "obbSK3Of0jk",
    youtubeTitle: "বাগানের উপকরণ ব্যবহারের গাইড",
    benefits: [
      { icon: "Package", title: "বিস্তৃত সংগ্রহ", desc: "৮+ ধরনের বিবিধ উপকরণ" },
      { icon: "Coins", title: "সাশ্রয়ী দাম", desc: "সব উপকরণ সাশ্রয়ী মূল্যে" },
      { icon: "Truck", title: "সারা দেশে", desc: "৬৪ জেলায় ডেলিভারি" },
      { icon: "Star", title: "উন্নতমান", desc: "মান নিশ্চিত ও টেকসই" },
    ],
    infographics: [
      { value: "৮+", label: "উপকরণ", icon: "Package" },
      { value: "১৮০+", label: "বিক্রি", icon: "ShoppingCart" },
      { value: "৪.৫", label: "রেটিং", icon: "Star" },
      { value: "৬৪", label: "জেলায়", icon: "Truck" },
    ],
    usage: [
      "সিডলিং ট্রেতে চারা গজানো সহজ ও দ্রুত",
      "পাথর টবের উপর দিলে সৌন্দর্য বাড়ে",
      "ফেরোমন ফাঁদ ফলের মাছি ধরার জন্য",
      "ওয়াটারিং ক্যান দিয়ে নিয়ন্ত্রিত পানি দিন",
    ],
    faq: [
      { q: "সিডলিং ট্রে কোন হোলের নেব?", a: "ছোট বীজের জন্য ১২৮ হোল, মাঝারির জন্য ১০৫, বড় বীজের জন্য ৭২ হোলের ট্রে উপযুক্ত।" },
      { q: "পাথর কেন ব্যবহার করব?", a: "পাথর টবের সৌন্দর্য বাড়ায় এবং মাটির উপরিভাগ শুকনো রাখতে সাহায্য করে।" },
      { q: "ফেরোমন ফাঁদ কীভাবে কাজ করে?", a: "এটি নারী পোকার গন্ধ ছড়ায়, ফলে পুরুষ পোকা ফাঁদে আসে ও ফল ক্ষতি থেকে রক্ষা পায়।" },
    ],
  },
  10: {
    categoryId: 10,
    heroTitle: "আউটডোর প্লান্ট",
    heroSubtitle: "Outdoor Plants — বাগানে প্রাণ ফুলিয়ে তুলুন",
    heroDescription:
      "গোলাপ, জবা, বেলি, টগর, কৃষ্ণচূড়া সহ ফুল গাছ এবং আম, কাঁঠাল, লেবু, পেঁপে চারাসহ ১২+ জাতের আউটডোর প্লান্ট। বাগান, ছাদ ও বারান্দার সৌন্দর্য বাড়ান এবং ফলের ফলন পান। বাংলাদেশের আবহাওয়ার উপযোগী।",
    youtubeId: "tue3K_3Iz48",
    youtubeTitle: "আউটডোর প্লান্ট লাগানো ও যত্নের গাইড",
    benefits: [
      { icon: "Flower2", title: "সুন্দর ফুল", desc: "রঙিন ফুলে বাগান সুন্দর করে তোলে" },
      { icon: "Sun", title: "পূর্ণ রোদে", desc: "বাংলাদেশের রোদে দারুণ বেড়ে ওঠে" },
      { icon: "Apple", title: "ফলের ফলন", desc: "ফলের গাছে নিজেই ফল ফলান" },
      { icon: "Leaf", title: "প্রকৃতির ছোঁয়া", desc: "বাড়ির আঙিনায় সবুজ পরিবেশ" },
    ],
    infographics: [
      { value: "১২+", label: "জাতের গাছ", icon: "Package" },
      { value: "৫৪০+", label: "বিক্রি", icon: "ShoppingCart" },
      { value: "৪.৮", label: "রেটিং", icon: "Star" },
      { value: "৬৪", label: "জেলায় ডেলিভারি", icon: "Truck" },
    ],
    usage: [
      "পর্যাপ্ত রোদ ও পানি নিশ্চিত করুন",
      "মাসে একবার জৈব সার দিন",
      "নিয়মিত আগাছা পরিষ্কার করুন",
      "ফুল ও ফল আসার সময় অতিরিক্ত যত্ন নিন",
    ],
    faq: [
      { q: "কোন গাছ ছাদে লাগানো যায়?", a: "গোলাপ, জবা, বেলি, টগর এবং ছোট ফলের চারা ছাদে লাগানো যায়। পর্যাপ্ত রোদ নিশ্চিত করুন।" },
      { q: "কখন ফুল আসবে?", a: "গোলাপ ও জবা সারা বছর ফুল দেয়। বেলি বর্ষায়, টগর শীতে ভালো ফুল দেয়।" },
      { q: "ফলের চারা কবে ফল দেবে?", a: "লেবু ও পেঁপে ৬-১২ মাসে ফল দেয়। আম ও কাঁঠাল ৩-৫ বছরে ফল শুরু করে।" },
    ],
  },
};

export type Collection = {
  slug: string;
  title: string;
  titleEn: string;
  subtitle: string;
  description: string;
  categoryIds: number[];
  heroImage: string;
  accent: string;
  benefits: Benefit[];
  infographics: Infographic[];
  youtubeId: string;
  youtubeTitle: string;
  highlights: string[];
};

export const collections: Collection[] = [
  {
    slug: "fertilizers",
    title: "সার ও পুষ্টি",
    titleEn: "Fertilizers & Nutrition",
    subtitle: "গাছের সম্পূর্ণ পুষ্টি সমাধান",
    description:
      "জৈব সার, রাসায়নিক সার ও রেডি মিক্স মিডিয়া — গাছের প্রতিটি পর্যায়ের পুষ্টির চাহিদা মেটাতে ২১+ ধরনের সার। মাটির উর্বরতা বাড়ায়, ফলন বহুগুণ করে এবং গাছকে সুস্থ রাখে। বাংলাদেশের ছাদ ও বাড়ি বাগানের জন্য আদর্শ পুষ্টি সমাধান।",
    categoryIds: [1, 7, 8],
    heroImage: "/gallery/gardening-bangladesh-nursery.jpg",
    accent: "from-amber-500 to-brand-green",
    benefits: [
      { icon: "Leaf", title: "সম্পূর্ণ পুষ্টি", desc: "জৈব, রাসায়নিক ও রেডিমিক্স — সব ধরনের সার" },
      { icon: "TrendingUp", title: "ফলন বহুগুণ", desc: "শাকসবজি ও ফলের পরিমাণ ও মান বৃদ্ধি" },
      { icon: "Sprout", title: "সুস্থ গাছ", desc: "রোগ প্রতিরোধ ও দ্রুত বৃদ্ধি নিশ্চিত" },
      { icon: "Recycle", title: "পরিবেশবান্ধব", desc: "প্রাকৃতিক ও নিরাপদ উপাদান" },
    ],
    infographics: [
      { value: "২১+", label: "প্রকার সার", icon: "Package" },
      { value: "৩x", label: "ফলন বৃদ্ধি", icon: "TrendingUp" },
      { value: "১৯৮০+", label: "বিক্রি", icon: "ShoppingCart" },
      { value: "৪.৮", label: "রেটিং", icon: "Star" },
    ],
    youtubeId: "obbSK3Of0jk",
    youtubeTitle: "সার ব্যবহারের সম্পূর্ণ গাইড — জৈব ও রাসায়নিক",
    highlights: [
      "জৈব সার মাটির উর্বরতা ও গঠন উন্নত করে",
      "রাসায়নিক সার দ্রুত ফলাফল নিশ্চিত করে",
      "রেডিমিক্স সয়েল সরাসরি ব্যবহারযোগ্য",
      "প্রতিটি গাছের জন্য সঠিক সারের গাইড",
    ],
  },
  {
    slug: "plants-seeds",
    title: "গাছ ও বীজ",
    titleEn: "Plants & Seeds",
    subtitle: "সবুজের সূচনা এখান থেকে",
    description:
      "ইনডোর প্লান্ট, বীজ ও টব — আপনার বাগান শুরুর সম্পূর্ণ সংগ্রহ। ১২+ জাতের এয়ার-পিউরিফাইং ইনডোর প্লান্ট, উচ্চ ফলনশীল বীজ এবং বিভিন্ন মাপের সুন্দর টব। ঘরে সবুজের ছোঁয়া আর ছাদে ফলন — সবকিছুই এক ছাদে।",
    categoryIds: [9, 3, 2],
    heroImage: "/gallery/gardening-bangladesh-indoor-plants-02.jpg",
    accent: "from-brand-green to-emerald-500",
    benefits: [
      { icon: "Wind", title: "পরিষ্কার বাতাস", desc: "ইনডোর প্লান্ট বিষাক্ত গ্যাস শোষণ করে" },
      { icon: "Sprout", title: "উচ্চ অঙ্কুরোদ্গম", desc: "৯০%+ বীজ অঙ্কুরিত হয়" },
      { icon: "Flower2", title: "সুন্দর টব", desc: "বিভিন্ন মাপের আকর্ষণীয় প্লান্টার" },
      { icon: "Heart", title: "মানসিক শান্তি", desc: "সবুজ পরিবেশে মন ভালো থাকে" },
    ],
    infographics: [
      { value: "২৮+", label: "প্রকার গাছ/বীজ", icon: "Package" },
      { value: "১২+", label: "ইনডোর প্লান্ট", icon: "Home" },
      { value: "২৪০০+", label: "বিক্রি", icon: "ShoppingCart" },
      { value: "৪.৯", label: "রেটিং", icon: "Star" },
    ],
    youtubeId: "g91Trssy0X8",
    youtubeTitle: "গাছ লাগানো ও যত্নের সম্পূর্ণ গাইড",
    highlights: [
      "ইনডোর প্লান্ট ঘরের বাতাস পরিষ্কার রাখে",
      "হাইব্রিড বীজে প্রচুর ফলন",
      "বিভিন্ন মাপের টব ও প্লান্টার",
      "বাংলাদেশের আবহাওয়ার উপযোগী",
    ],
  },
  {
    slug: "tools-care",
    title: "টুলস ও সুরক্ষা",
    titleEn: "Tools & Care",
    subtitle: "বাগানের যত্ন ও সুরক্ষা",
    description:
      "গার্ডেন টুলস, কীটনাশক ও অন্যান্য উপকরণ — বাগানের প্রতিটি কাজকে সহজ ও নিরাপদ করতে ২৪+ ধরনের টুলস ও সুরক্ষা উপকরণ। স্প্রেয়ার, সিকেচার, কীটনাশক, ফেরোমন ফাঁদসহ সবকিছু সারা দেশে ক্যাশ অন ডেলিভারিতে।",
    categoryIds: [4, 5, 6],
    heroImage: "/gallery/gardening-bangladesh-rooftop-garden.jpg",
    accent: "from-amber-600 to-orange-500",
    benefits: [
      { icon: "Wrench", title: "মজবুত টুলস", desc: "উন্নতমানের ও টেকসই গার্ডেন টুলস" },
      { icon: "Bug", title: "পোকা দূর", desc: "কার্যকর কীটনাশক ও ছত্রাকনাশক" },
      { icon: "ShieldCheck", title: "গাছের সুরক্ষা", desc: "রোগ-বালাই থেকে গাছ রক্ষা" },
      { icon: "Coins", title: "সাশ্রয়ী", desc: "সব উপকরণ সাশ্রয়ী মূল্যে" },
    ],
    infographics: [
      { value: "২৪+", label: "টুলস ও উপকরণ", icon: "Package" },
      { value: "৯৫%", label: "কার্যকারিতা", icon: "Bug" },
      { value: "১২৭০+", label: "বিক্রি", icon: "ShoppingCart" },
      { value: "৪.৭", label: "রেটিং", icon: "Star" },
    ],
    youtubeId: "tue3K_3Iz48",
    youtubeTitle: "গার্ডেন টুলস ও কীটনাশক ব্যবহারের গাইড",
    highlights: [
      "মজবুত ও আরামদায়ক গার্ডেন টুলস",
      "কার্যকর কীটনাশক ও ছত্রাকনাশক",
      "সিডলিং ট্রে, পাথর, ফেরোমন ফাঁদ",
      "বাগানের সম্পূর্ণ যত্ন ও সুরক্ষা",
    ],
  },
];

export const products: Product[] = [
  // জৈব সার (Organic Fertilizer) - Category 1
  { id: 1, name: "ঝিনুক পাউডার (১ কেজি)", nameEn: "Oyster Shell Powder", price: 60, originalPrice: 80, categoryId: 1, emoji: "🐚", gradient: "from-amber-100 to-orange-100", image: "/dreamagro/jinuk.jpg", rating: 4.8, reviews: 124, sold: 540, popular: true, unit: "১ কেজি" },
  { id: 2, name: "ডিমের খোসা পাউডার (১ কেজি)", nameEn: "Egg Shell Powder", price: 45, originalPrice: 60, categoryId: 1, emoji: "🥚", gradient: "from-yellow-50 to-amber-100", image: "/dreamagro/egg-shell-fertilizer.jpg", rating: 4.7, reviews: 98, sold: 410, popular: true, unit: "১ কেজি" },
  { id: 3, name: "শিং কুচি (১ কেজি)", nameEn: "Horn Meal", price: 110, categoryId: 1, emoji: "🐄", gradient: "from-stone-100 to-amber-100", image: "/dreamagro/horn-meal.jpg", rating: 4.6, reviews: 76, sold: 280, unit: "১ কেজি" },
  { id: 4, name: "নিম খোল (১ কেজি)", nameEn: "Neem Cake", price: 100, originalPrice: 130, categoryId: 1, emoji: "🌿", gradient: "from-green-100 to-emerald-100", image: "/dreamagro/neem.jpg", rating: 4.9, reviews: 156, sold: 620, popular: true, unit: "১ কেজি" },
  { id: 5, name: "হাড় গুঁড়া (১ কেজি)", nameEn: "Bone Meal", price: 50, categoryId: 1, emoji: "🦴", gradient: "from-slate-100 to-stone-100", image: "/dreamagro/bone-meal.jpg", rating: 4.5, reviews: 64, sold: 230, unit: "১ কেজি" },
  { id: 6, name: "কোকোপিট (ফাইবারসহ)", nameEn: "Cocopeat with Fiber", price: 90, categoryId: 1, emoji: "🟤", gradient: "from-amber-100 to-yellow-100", image: "/dreamagro/cocopeat.jpg", rating: 4.8, reviews: 112, sold: 480, isNew: true, unit: "১ কেজি" },
  { id: 7, name: "ভার্মিকম্পোস্ট (১ কেজি)", nameEn: "Vermicompost", price: 80, originalPrice: 100, categoryId: 1, emoji: "🪱", gradient: "from-stone-100 to-amber-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/b895c33d6504.jpeg", rating: 4.9, reviews: 201, sold: 890, popular: true, unit: "১ কেজি" },
  { id: 8, name: "সরিষা খৈল (১ কেজি)", nameEn: "Mustard Cake", price: 70, categoryId: 1, emoji: "🌾", gradient: "from-yellow-100 to-amber-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/25d46d33d666.jpg", rating: 4.6, reviews: 58, sold: 195, unit: "১ কেজি" },

  // রাসায়নিক সার (Chemical Fertilizer) - Category 7
  { id: 9, name: "NPK 20.20.20 (১০০ গ্রাম)", nameEn: "NPK 20.20.20", price: 180, originalPrice: 220, categoryId: 7, emoji: "🧪", gradient: "from-blue-50 to-cyan-100", image: "/dreamagro/npk20.jpg", rating: 4.9, reviews: 187, sold: 760, popular: true, unit: "১০০ গ্রাম" },
  { id: 10, name: "NPK 19.19.19 (১০০ গ্রাম)", nameEn: "NPK 19.19.19", price: 170, categoryId: 7, emoji: "⚗️", gradient: "from-cyan-50 to-blue-100", image: "/dreamagro/npk19.jpg", rating: 4.8, reviews: 143, sold: 610, popular: true, unit: "১০০ গ্রাম" },
  { id: 11, name: "ইপসম সল্ট (কৌটাসহ)", nameEn: "Epsom Salt with Box", price: 95, categoryId: 7, emoji: "🧂", gradient: "from-slate-50 to-blue-50", image: "/dreamagro/prod_beccdbeec753f5e1.jpg", rating: 4.7, reviews: 89, sold: 340, unit: "২৫০ গ্রাম" },
  { id: 12, name: "নাফকো সলুবোর বোরন", nameEn: "NAFCO Solubor Boron", price: 80, originalPrice: 100, categoryId: 7, emoji: "💊", gradient: "from-violet-50 to-purple-100", image: "/dreamagro/nafco-boron.jpg", rating: 4.6, reviews: 72, sold: 290, unit: "১০০ গ্রাম" },
  { id: 13, name: "পটাশ MOP (১ কেজি)", nameEn: "Potash MOP", price: 65, categoryId: 7, emoji: "🟥", gradient: "from-rose-50 to-red-100", image: "/dreamagro/potash.jpg", rating: 4.5, reviews: 54, sold: 210, unit: "১ কেজি" },
  { id: 14, name: "DAP (১ কেজি)", nameEn: "DAP Fertilizer", price: 75, categoryId: 7, emoji: "🟧", gradient: "from-orange-50 to-amber-100", image: "/dreamagro/dap.jpg", rating: 4.6, reviews: 67, sold: 250, unit: "১ কেজি" },
  { id: 15, name: "ইউরিয়া (১ কেজি)", nameEn: "Urea", price: 40, categoryId: 7, emoji: "⚪", gradient: "from-gray-50 to-slate-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/b557cecf636c.jpg", rating: 4.4, reviews: 41, sold: 180, unit: "১ কেজি" },
  { id: 16, name: "টিএসপি (১ কেজি)", nameEn: "TSP", price: 55, categoryId: 7, emoji: "⬜", gradient: "from-stone-50 to-gray-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/240b7b2c1099.webp", rating: 4.5, reviews: 38, sold: 160, unit: "১ কেজি" },

  // রেডি মিক্স মিডিয়া (Ready Mix Media) - Category 8
  { id: 17, name: "এডেনিয়াম সয়েল (১ কেজি)", nameEn: "Adenium Soil Mix", price: 140, originalPrice: 170, categoryId: 8, emoji: "🌺", gradient: "from-pink-50 to-rose-100", image: "/dreamagro/adenium.jpg", rating: 4.9, reviews: 134, sold: 520, popular: true, unit: "১ কেজি" },
  { id: 18, name: "ক্যাকটাস সয়েল (১ কেজি)", nameEn: "Cactus Soil Mix", price: 130, categoryId: 8, emoji: "🌵", gradient: "from-green-50 to-lime-100", image: "/dreamagro/cactus.jpg", rating: 4.8, reviews: 118, sold: 460, popular: true, unit: "১ কেজি" },
  { id: 19, name: "রেডিমিক্স সয়েল (৫ কেজি)", nameEn: "Ready Mix Soil", price: 250, originalPrice: 300, categoryId: 8, emoji: "🪴", gradient: "from-amber-50 to-stone-100", image: "/dreamagro/ready-mix.jpg", rating: 4.9, reviews: 167, sold: 680, popular: true, unit: "৫ কেজি" },
  { id: 20, name: "অর্কিড মিক্স (১ কেজি)", nameEn: "Orchid Mix", price: 150, categoryId: 8, emoji: "🌸", gradient: "from-fuchsia-50 to-pink-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/4041a31b8232.jpg", rating: 4.7, reviews: 92, sold: 370, unit: "১ কেজি" },
  { id: 21, name: "বনসাই সয়েল (১ কেজি)", nameEn: "Bonsai Soil Mix", price: 130, categoryId: 8, emoji: "🌳", gradient: "from-emerald-50 to-green-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/f72aabed14fb.jpg", rating: 4.8, reviews: 86, sold: 320, isNew: true, unit: "১ কেজি" },

  // টব ও প্লান্টার (Pots & Planters) - Category 2
  { id: 22, name: "১২ সে.মি. অর্কিড টব (কালো)", nameEn: "12cm Orchid Pot", price: 15, categoryId: 2, emoji: "🪣", gradient: "from-gray-100 to-slate-200", image: "/dreamagro/orchid.jpg", rating: 4.6, reviews: 78, sold: 430, unit: "১টি" },
  { id: 23, name: "১০ সে.মি. অর্কিড টব (কালো)", nameEn: "10cm Orchid Pot", price: 10, categoryId: 2, emoji: "🥣", gradient: "from-gray-100 to-slate-200", image: "/dreamagro/orchid.jpg", rating: 4.5, reviews: 62, sold: 380, unit: "১টি" },
  { id: 24, name: "১৫ সে.মি. অর্কিড টব (কালো)", nameEn: "15cm Orchid Pot", price: 20, categoryId: 2, emoji: "🪴", gradient: "from-gray-100 to-slate-200", image: "/dreamagro/orchid.jpg", rating: 4.7, reviews: 91, sold: 510, popular: true, unit: "১টি" },
  { id: 25, name: "১৮ সে.মি. অর্কিড টব (কালো)", nameEn: "18cm Orchid Pot", price: 25, categoryId: 2, emoji: "🏺", gradient: "from-gray-100 to-slate-200", image: "/dreamagro/orchid.jpg", rating: 4.6, reviews: 70, sold: 290, unit: "১টি" },
  { id: 26, name: "৭ ইঞ্চি রাউন্ড প্লান্টার", nameEn: "7 inch Round Planter", price: 30, originalPrice: 40, categoryId: 2, emoji: "🟤", gradient: "from-amber-50 to-stone-100", image: "/dreamagro/bp-round-7.jpg", rating: 4.8, reviews: 104, sold: 470, popular: true, unit: "১টি" },
  { id: 27, name: "৪ ইঞ্চি রাউন্ড প্লান্টার", nameEn: "4 inch Round Planter", price: 20, categoryId: 2, emoji: "🟫", gradient: "from-amber-50 to-stone-100", image: "/dreamagro/bp-round-4.jpg", rating: 4.5, reviews: 56, sold: 240, unit: "১টি" },
  { id: 28, name: "হ্যাঙ্গিং বাস্কেট (৮ ইঞ্চি)", nameEn: "Hanging Basket 8in", price: 35, categoryId: 2, emoji: "🧺", gradient: "from-stone-50 to-amber-100", image: "/dreamagro/bp-hanging.jpg", rating: 4.7, reviews: 83, sold: 360, unit: "১টি" },
  { id: 29, name: "হ্যাঙ্গিং বাস্কেট (৭ ইঞ্চি)", nameEn: "Hanging Basket 7in", price: 30, categoryId: 2, emoji: "🪕", gradient: "from-stone-50 to-amber-100", image: "/dreamagro/bp-hanging.jpg", rating: 4.6, reviews: 67, sold: 280, unit: "১টি" },

  // বীজ (Seeds) - Category 3
  { id: 30, name: "ডেড়শ (গ্রীন ফিঙ্গার)", nameEn: "Red Amaranth Seeds", price: 40, originalPrice: 55, categoryId: 3, emoji: "🥬", gradient: "from-green-50 to-emerald-100", image: "/dreamagro/green-finger.jpg", rating: 4.8, reviews: 129, sold: 590, popular: true, unit: "৫ গ্রাম" },
  { id: 31, name: "পুদিনা বীজ (৪০-৬০টি)", nameEn: "Mint Seeds", price: 35, categoryId: 3, emoji: "🌿", gradient: "from-green-50 to-teal-100", image: "/dreamagro/mint.jpg", rating: 4.7, reviews: 95, sold: 420, unit: "১ প্যাকেট" },
  { id: 32, name: "ডাটা (শ্রাবণী)", nameEn: "Data Shraboni Seeds", price: 30, categoryId: 3, emoji: "🌱", gradient: "from-lime-50 to-green-100", image: "/dreamagro/Sraboni.jpg", rating: 4.6, reviews: 71, sold: 310, unit: "২০ গ্রাম" },
  { id: 33, name: "ডাটা (লাবণী)", nameEn: "Data Laboni Seeds", price: 30, categoryId: 3, emoji: "🌾", gradient: "from-lime-50 to-green-100", image: "/dreamagro/Laboni.jpg", rating: 4.6, reviews: 68, sold: 295, unit: "২০ গ্রাম" },
  { id: 34, name: "পেঁপে (ফাস্ট লেডি)", nameEn: "Papaya Fast Lady Seeds", price: 45, categoryId: 3, emoji: "🍈", gradient: "from-orange-50 to-amber-100", image: "/dreamagro/first-lady.jpg", rating: 4.7, reviews: 88, sold: 380, isNew: true, unit: "১০টি বীজ" },
  { id: 35, name: "লাল তীর ধনিয়া", nameEn: "Red Coriander Seeds", price: 70, originalPrice: 90, categoryId: 3, emoji: "🍃", gradient: "from-green-50 to-lime-100", image: "/dreamagro/dhaniya.jpg", rating: 4.9, reviews: 142, sold: 640, popular: true, unit: "৫০ গ্রাম" },
  { id: 36, name: "টমেটো বীজ (হাইব্রিড)", nameEn: "Hybrid Tomato Seeds", price: 50, categoryId: 3, emoji: "🍅", gradient: "from-red-50 to-rose-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/142798aee180.jpg", rating: 4.8, reviews: 116, sold: 510, unit: "১০টি" },
  { id: 37, name: "মরিচ বীজ (হাইব্রিড)", nameEn: "Hybrid Chili Seeds", price: 45, categoryId: 3, emoji: "🌶️", gradient: "from-red-50 to-orange-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/31291d341c0c.jpg", rating: 4.7, reviews: 98, sold: 440, unit: "১০টি" },

  // গার্ডেন টুলস (Garden Tools) - Category 4
  { id: 38, name: "২ লিটার স্প্রেয়ার", nameEn: "2L Sprayer", price: 300, originalPrice: 380, categoryId: 4, emoji: "💧", gradient: "from-blue-50 to-cyan-100", image: "/dreamagro/prod_2545c23a854479d3.jpg", rating: 4.8, reviews: 154, sold: 620, popular: true, unit: "১টি" },
  { id: 39, name: "১০ ইঞ্চি গার্ডেন টুলস", nameEn: "10in Garden Tool Set", price: 220, categoryId: 4, emoji: "🛠️", gradient: "from-amber-50 to-yellow-100", image: "/dreamagro/prod_9a4aa112cf8ef988.jpg", rating: 4.6, reviews: 87, sold: 340, unit: "১ সেট" },
  { id: 40, name: "৮ ইঞ্চি সিকেচার", nameEn: "8in Secateur", price: 280, categoryId: 4, emoji: "✂️", gradient: "from-slate-50 to-gray-100", image: "/dreamagro/prod_25f30528269bf09c.jpg", rating: 4.7, reviews: 93, sold: 390, unit: "১টি" },
  { id: 41, name: "Bir ৮ ইঞ্চি সিকেচার", nameEn: "Bir 8in Secateur", price: 350, originalPrice: 420, categoryId: 4, emoji: "🔪", gradient: "from-slate-50 to-gray-100", image: "/dreamagro/prod_9b0e080aa1a2e544.jpg", rating: 4.9, reviews: 128, sold: 560, popular: true, unit: "১টি" },
  { id: 42, name: "বেলচা", nameEn: "Garden Trowel", price: 90, categoryId: 4, emoji: "🪏", gradient: "from-amber-50 to-stone-100", image: "/dreamagro/belcha.jpg", rating: 4.5, reviews: 52, sold: 220, unit: "১টি" },
  { id: 43, name: "৫০০ গ্রাম স্প্রেয়ার", nameEn: "500g Sprayer", price: 150, categoryId: 4, emoji: "🚿", gradient: "from-blue-50 to-sky-100", image: "/dreamagro/half-liter-sprayer.jpg", rating: 4.4, reviews: 44, sold: 190, unit: "১টি" },
  { id: 44, name: "হাতকড়া (হ্যান্ড ট্রল)", nameEn: "Hand Trowel", price: 180, categoryId: 4, emoji: "🦾", gradient: "from-stone-50 to-amber-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/d21d290f876f.jpg", rating: 4.6, reviews: 61, sold: 260, isNew: true, unit: "১টি" },
  { id: 45, name: "গার্ডেন গ্লাভস (জোড়া)", nameEn: "Garden Gloves", price: 60, categoryId: 4, emoji: "🧤", gradient: "from-green-50 to-emerald-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/f6876b4e4d9a.jpg", rating: 4.5, reviews: 49, sold: 210, unit: "১ জোড়া" },

  // কীটনাশক ও ছত্রাকনাশক (Pesticides & Fungicides) - Category 5
  { id: 46, name: "ইমিটাফ (৫০ মি.লি)", nameEn: "Emataf 50ml", price: 120, originalPrice: 150, categoryId: 5, emoji: "🧴", gradient: "from-orange-50 to-amber-100", image: "/dreamagro/imitaf.jpg", rating: 4.7, reviews: 108, sold: 470, popular: true, unit: "৫০ মি.লি" },
  { id: 47, name: "নাইট্রো (৫০ মি.লি)", nameEn: "Nitro 50ml", price: 90, categoryId: 5, emoji: "💊", gradient: "from-violet-50 to-purple-100", image: "/dreamagro/nitro.jpg", rating: 4.6, reviews: 74, sold: 310, unit: "৫০ মি.লি" },
  { id: 48, name: "কুড়েনক্স (১০০ গ্রাম)", nameEn: "Curenox 100g", price: 190, categoryId: 5, emoji: "🟦", gradient: "from-blue-50 to-indigo-100", image: "/dreamagro/kurenox.jpg", rating: 4.8, reviews: 96, sold: 410, popular: true, unit: "১০০ গ্রাম" },
  { id: 49, name: "মিরাকুলান (১০০ মি.লি)", nameEn: "Miraculan 100ml", price: 140, originalPrice: 170, categoryId: 5, emoji: "🧪", gradient: "from-teal-50 to-cyan-100", image: "/dreamagro/miraculan.jpg", rating: 4.7, reviews: 89, sold: 380, unit: "১০০ মি.লি" },
  { id: 50, name: "ফ্লোরা (১০০ মি.লি)", nameEn: "Flora 100ml", price: 150, categoryId: 5, emoji: "🌸", gradient: "from-pink-50 to-rose-100", image: "/dreamagro/flora.jpg", rating: 4.6, reviews: 72, sold: 300, unit: "১০০ মি.লি" },
  { id: 51, name: "ফ্লোরা (৫০ মি.লি)", nameEn: "Flora 50ml", price: 85, categoryId: 5, emoji: "🌺", gradient: "from-pink-50 to-rose-100", image: "/dreamagro/flora.jpg", rating: 4.5, reviews: 58, sold: 240, unit: "৫০ মি.লি" },
  { id: 52, name: "নিম অয়েল (১০০ মি.লি)", nameEn: "Neem Oil 100ml", price: 110, originalPrice: 140, categoryId: 5, emoji: "🫧", gradient: "from-green-50 to-emerald-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/7c2938a7c3be.jpg", rating: 4.8, reviews: 121, sold: 520, isNew: true, unit: "১০০ মি.লি" },
  { id: 53, name: "সালফার পাউডার", nameEn: "Sulphur Powder", price: 85, categoryId: 5, emoji: "🟡", gradient: "from-yellow-50 to-amber-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/05255e8d4319.jpg", rating: 4.4, reviews: 47, sold: 200, unit: "১০০ গ্রাম" },

  // অন্যান্য উপকরণ (Other Accessories) - Category 6
  { id: 54, name: "নার্সারি পলি (১ কেজি)", nameEn: "Nursery Poly", price: 50, categoryId: 6, emoji: "📦", gradient: "from-slate-50 to-gray-100", image: "/dreamagro/black-poly.jpg", rating: 4.4, reviews: 39, sold: 180, unit: "১ কেজি" },
  { id: 55, name: "সিডলিং ট্রে", nameEn: "Seedling Tray", price: 80, categoryId: 6, emoji: "🟩", gradient: "from-green-50 to-emerald-100", image: "/dreamagro/tray.jpg", rating: 4.6, reviews: 64, sold: 270, unit: "১টি" },
  { id: 56, name: "রঙ্গিন পাথর (১ কেজি)", nameEn: "Colorful Stones", price: 60, categoryId: 6, emoji: "🪨", gradient: "from-violet-50 to-purple-100", image: "/dreamagro/color-stone.jpg", rating: 4.5, reviews: 51, sold: 230, unit: "১ কেজি" },
  { id: 57, name: "সাদা পাথর (১ কেজি)", nameEn: "White Stones", price: 55, categoryId: 6, emoji: "⚪", gradient: "from-gray-50 to-slate-100", image: "/dreamagro/white-stone.jpg", rating: 4.4, reviews: 43, sold: 190, unit: "১ কেজি" },
  { id: 58, name: "ফেরোমন ফাঁদ (১ পিছ)", nameEn: "Pheromone Trap", price: 100, categoryId: 6, emoji: "🪤", gradient: "from-amber-50 to-yellow-100", image: "/dreamagro/feromon.jpg", rating: 4.6, reviews: 57, sold: 240, unit: "১টি" },
  { id: 59, name: "মোটা লাল বালি (১ কেজি)", nameEn: "Coarse Red Sand", price: 40, categoryId: 6, emoji: "🟧", gradient: "from-orange-50 to-red-100", image: "/dreamagro/sand.jpg", rating: 4.3, reviews: 35, sold: 160, unit: "১ কেজি" },
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

  // More Indoor Plants (74-83)
  { id: 74, name: "পোথোস (মার্বেল কুইন)", nameEn: "Marble Queen Pothos", price: 300, originalPrice: 380, categoryId: 9, emoji: "💚", gradient: "from-green-50 to-lime-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/1d7d5c966a76.jpg", rating: 4.8, reviews: 145, sold: 580, popular: true, unit: "১টি", care: "easy", light: "low", tags: ["air-purifying", "hanging"] },
  { id: 75, name: "মোনস্টেরা ডেলিসিওসা", nameEn: "Monstera Deliciosa", price: 650, originalPrice: 800, categoryId: 9, emoji: "🍃", gradient: "from-green-50 to-emerald-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/75534988b733.jpg", rating: 4.9, reviews: 98, sold: 320, popular: true, unit: "১টি", care: "medium", light: "medium", tags: ["large", "trending"] },
  { id: 76, name: "ফিলোডেনড্রন", nameEn: "Philodendron", price: 380, categoryId: 9, emoji: "🌿", gradient: "from-green-50 to-teal-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/d2beece2b6f1.jpg", rating: 4.7, reviews: 76, sold: 280, isNew: true, unit: "১টি", care: "easy", light: "low", tags: ["air-purifying"] },
  { id: 77, name: "ক্যালাথিয়া (প্রেয়ার প্লান্ট)", nameEn: "Calathea Prayer Plant", price: 450, categoryId: 9, emoji: "🌱", gradient: "from-green-50 to-emerald-50", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/4803c4e15998.png", rating: 4.6, reviews: 54, sold: 190, unit: "১টি", care: "medium", light: "medium", tags: ["decorative"] },
  { id: 78, name: "ড্রাসেনা", nameEn: "Dracaena", price: 420, originalPrice: 500, categoryId: 9, emoji: "🌴", gradient: "from-green-50 to-lime-50", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/a5a726f6c462.jpg", rating: 4.5, reviews: 67, sold: 230, unit: "১টি", care: "easy", light: "medium", tags: ["air-purifying", "large"] },
  { id: 79, name: "বোস্টন ফার্ন", nameEn: "Boston Fern", price: 280, categoryId: 9, emoji: "🌿", gradient: "from-green-50 to-emerald-50", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/14eab4860957.jpg", rating: 4.4, reviews: 43, sold: 160, unit: "১টি", care: "medium", light: "low", tags: ["hanging", "air-purifying"] },
  { id: 80, name: "জেড প্লান্ট (ছোট)", nameEn: "Mini Jade Plant", price: 180, categoryId: 9, emoji: "🪴", gradient: "from-emerald-50 to-green-50", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/9778be9d58ed.jpg", rating: 4.6, reviews: 89, sold: 340, popular: true, unit: "১টি", care: "easy", light: "bright", tags: ["succulent", "feng-shui"] },
  { id: 81, name: "ইংলিশ আইভি", nameEn: "English Ivy", price: 220, categoryId: 9, emoji: "🍃", gradient: "from-green-50 to-teal-50", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/df5317aae11c.jpg", rating: 4.5, reviews: 56, sold: 210, unit: "১টি", care: "easy", light: "medium", tags: ["hanging", "air-purifying"] },
  { id: 82, name: "পিলিয়া (অ্যালুমিনিয়াম প্লান্ট)", nameEn: "Pilea Aluminum Plant", price: 250, originalPrice: 320, categoryId: 9, emoji: "🌱", gradient: "from-green-50 to-lime-50", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/e9fe6e070112.png", rating: 4.6, reviews: 48, sold: 180, isNew: true, unit: "১টি", care: "easy", light: "medium", tags: ["decorative"] },
  { id: 83, name: "টয় অ্যালো", nameEn: "Tiger Aloe", price: 200, categoryId: 9, emoji: "🌵", gradient: "from-green-50 to-emerald-50", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/3514af29b353.jpeg", rating: 4.5, reviews: 34, sold: 140, unit: "১টি", care: "easy", light: "bright", tags: ["succulent", "medicinal"] },

  // Outdoor Plants (84-95) - Category 10
  { id: 84, name: "গোলাপ (রোজ)", nameEn: "Rose Plant", price: 350, originalPrice: 450, categoryId: 10, emoji: "🌹", gradient: "from-rose-50 to-red-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/9919038b01d8.jpg", rating: 4.9, reviews: 312, sold: 890, popular: true, unit: "১টি", care: "medium", light: "bright", tags: ["flowering", "fragrant"] },
  { id: 85, name: "জবা (হিবিস্কাস)", nameEn: "Hibiscus", price: 280, categoryId: 10, emoji: "🌺", gradient: "from-red-50 to-rose-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/5865e95e4caf.jpg", rating: 4.8, reviews: 234, sold: 670, popular: true, unit: "১টি", care: "easy", light: "bright", tags: ["flowering"] },
  { id: 86, name: "বেলি (জুই)", nameEn: "Jasmine Beli", price: 320, originalPrice: 400, categoryId: 10, emoji: "🌼", gradient: "from-yellow-50 to-amber-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/76b28b3341bd.jpg", rating: 4.9, reviews: 187, sold: 540, popular: true, unit: "১টি", care: "easy", light: "bright", tags: ["flowering", "fragrant"] },
  { id: 87, name: "টগর (বুগেনভিলিয়া)", nameEn: "Bougainvillea", price: 380, categoryId: 10, emoji: "🌸", gradient: "from-fuchsia-50 to-pink-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/fadf35885b5f.jpg", rating: 4.7, reviews: 156, sold: 430, unit: "১টি", care: "easy", light: "bright", tags: ["flowering", "climbing"] },
  { id: 88, name: "কৃষ্ণচূড়া", nameEn: "Gulmohar Royal Poinciana", price: 550, originalPrice: 700, categoryId: 10, emoji: "🔥", gradient: "from-orange-50 to-red-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/60deb04803e3.png", rating: 4.8, reviews: 98, sold: 210, isNew: true, unit: "১টি", care: "medium", light: "bright", tags: ["flowering", "large"] },
  { id: 89, name: "শিমুল", nameEn: "Silk Cotton Tree", price: 600, categoryId: 10, emoji: "🌳", gradient: "from-red-50 to-orange-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/3b13460c4cfe.jpg", rating: 4.6, reviews: 45, sold: 120, unit: "১টি", care: "medium", light: "bright", tags: ["large", "flowering"] },
  { id: 90, name: "আম চারা", nameEn: "Mango Sapling", price: 250, originalPrice: 320, categoryId: 10, emoji: "🥭", gradient: "from-green-50 to-lime-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/aff200d53203.jpg", rating: 4.7, reviews: 167, sold: 450, popular: true, unit: "১টি", care: "easy", light: "bright", tags: ["fruit", "large"] },
  { id: 91, name: "কাঁঠাল চারা", nameEn: "Jackfruit Sapling", price: 280, categoryId: 10, emoji: "🍈", gradient: "from-green-50 to-emerald-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/f2ba74b45c71.jpg", rating: 4.6, reviews: 89, sold: 230, unit: "১টি", care: "easy", light: "bright", tags: ["fruit", "large"] },
  { id: 92, name: "লেবু চারা", nameEn: "Lemon Sapling", price: 220, originalPrice: 280, categoryId: 10, emoji: "🍋", gradient: "from-yellow-50 to-lime-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/b121b291d1b3.jpg", rating: 4.8, reviews: 143, sold: 380, popular: true, unit: "১টি", care: "easy", light: "bright", tags: ["fruit"] },
  { id: 93, name: "পেঁপে চারা", nameEn: "Papaya Sapling", price: 150, categoryId: 10, emoji: "🌴", gradient: "from-green-50 to-lime-50", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/774ab18466e0.jpg", rating: 4.5, reviews: 76, sold: 290, unit: "১টি", care: "easy", light: "bright", tags: ["fruit"] },
  { id: 94, name: "তুলসী", nameEn: "Holy Basil Tulsi", price: 80, categoryId: 10, emoji: "🌿", gradient: "from-green-50 to-emerald-50", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/dad7be7a3482.jpg", rating: 4.9, reviews: 234, sold: 680, popular: true, unit: "১টি", care: "easy", light: "bright", tags: ["medicinal", "herb"] },
  { id: 95, name: "পুদিনা (বাগান)", nameEn: "Garden Mint", price: 60, categoryId: 10, emoji: "🍃", gradient: "from-green-50 to-teal-50", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/c24f98c619d6.jpg", rating: 4.7, reviews: 112, sold: 420, unit: "১টি", care: "easy", light: "medium", tags: ["herb", "edible"] },

  // More Indoor Plants (96-110) — researched from Bangladesh market
  { id: 96, name: "অ্যাগ্লোনিমা (সিলভার বে)", nameEn: "Aglaonema Silver Bay", price: 550, originalPrice: 700, categoryId: 9, emoji: "🌿", gradient: "from-green-50 to-silver-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/d28a7245f80f.jpg", rating: 4.8, reviews: 87, sold: 290, popular: true, unit: "১টি", care: "easy", light: "low", tags: ["air-purifying", "decorative"] },
  { id: 97, name: "সিঙ্গোনিয়াম (পিংক)", nameEn: "Syngonium Pink", price: 320, categoryId: 9, emoji: "🌱", gradient: "from-pink-50 to-rose-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/290d31e3706c.jpg", rating: 4.7, reviews: 65, sold: 210, isNew: true, unit: "১টি", care: "easy", light: "medium", tags: ["decorative", "colorful"] },
  { id: 98, name: "ডিফেনব্যাকিয়া", nameEn: "Dieffenbachia", price: 380, originalPrice: 450, categoryId: 9, emoji: "🍃", gradient: "from-green-50 to-lime-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/0fe355d58a68.jpg", rating: 4.6, reviews: 54, sold: 180, unit: "১টি", care: "medium", light: "medium", tags: ["decorative", "large"] },
  { id: 99, name: "স্ট্রিং অফ পার্লস", nameEn: "String of Pearls", price: 450, categoryId: 9, emoji: "🫧", gradient: "from-green-50 to-emerald-50", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/6da1ba0af9a7.jpg", rating: 4.7, reviews: 43, sold: 120, isNew: true, unit: "১টি", care: "easy", light: "bright", tags: ["hanging", "succulent"] },
  { id: 100, name: "পার্লোর পাম", nameEn: "Parlor Palm", price: 500, originalPrice: 650, categoryId: 9, emoji: "🌴", gradient: "from-green-50 to-lime-50", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/e5b09acf1e33.jpg", rating: 4.8, reviews: 92, sold: 340, popular: true, unit: "১টি", care: "easy", light: "low", tags: ["air-purifying", "large"] },
  { id: 101, name: "বেগুনি হার্ট", nameEn: "Purple Heart Plant", price: 280, categoryId: 9, emoji: "💜", gradient: "from-purple-50 to-violet-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/aa7f131cc314.jpg", rating: 4.6, reviews: 38, sold: 150, isNew: true, unit: "১টি", care: "easy", light: "bright", tags: ["colorful", "hanging"] },
  { id: 102, name: "ক্যালাথিয়া অরবিফোলিয়া", nameEn: "Calathea Orbifolia", price: 650, categoryId: 9, emoji: "🌿", gradient: "from-green-50 to-emerald-50", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/8b60530ef963.jpg", rating: 4.9, reviews: 56, sold: 190, popular: true, unit: "১টি", care: "medium", light: "medium", tags: ["decorative", "trending"] },
  { id: 103, name: "নেপ্রোলেপিস (সোর্ড ফার্ন)", nameEn: "Sword Fern", price: 300, categoryId: 9, emoji: "🌿", gradient: "from-green-50 to-teal-50", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/7cdcb34088cd.jpg", rating: 4.5, reviews: 34, sold: 130, unit: "১টি", care: "medium", light: "low", tags: ["hanging", "air-purifying"] },
  { id: 104, name: "পেপেরোমিয়া", nameEn: "Peperomia", price: 250, originalPrice: 320, categoryId: 9, emoji: "🍃", gradient: "from-green-50 to-lime-50", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/44365b018b50.jpg", rating: 4.6, reviews: 47, sold: 170, unit: "১টি", care: "easy", light: "medium", tags: ["small", "decorative"] },
  { id: 105, name: "ফিটোনিয়া (নার্ভ প্লান্ট)", nameEn: "Fittonia Nerve Plant", price: 180, categoryId: 9, emoji: "🌱", gradient: "from-pink-50 to-green-50", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/b904d5b77431.jpeg", rating: 4.5, reviews: 52, sold: 220, isNew: true, unit: "১টি", care: "medium", light: "low", tags: ["small", "colorful"] },
  { id: 106, name: "স্ট্রিং অফ হার্টস", nameEn: "String of Hearts", price: 480, originalPrice: 600, categoryId: 9, emoji: "💚", gradient: "from-green-50 to-pink-50", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/97e075f3e17f.jpg", rating: 4.8, reviews: 61, sold: 240, popular: true, unit: "১টি", care: "easy", light: "bright", tags: ["hanging", "trending"] },
  { id: 107, name: "আর্লিয়ারি (লাকি প্লান্ট)", nameEn: "Arali Lucky Plant", price: 350, categoryId: 9, emoji: "🌳", gradient: "from-green-50 to-emerald-50", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/1d6ddb7c8115.jpg", rating: 4.6, reviews: 44, sold: 160, unit: "১টি", care: "easy", light: "medium", tags: ["feng-shui", "large"] },
  { id: 108, name: "জেড পোথোস (নিয়ন)", nameEn: "Neon Pothos", price: 320, categoryId: 9, emoji: "💛", gradient: "from-yellow-50 to-lime-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/ddf3a455212b.png", rating: 4.7, reviews: 58, sold: 200, isNew: true, unit: "১টি", care: "easy", light: "low", tags: ["air-purifying", "colorful"] },
  { id: 109, name: "ব্রোমেলিয়াড", nameEn: "Bromeliad", price: 550, originalPrice: 700, categoryId: 9, emoji: "🌸", gradient: "from-rose-50 to-orange-50", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/fd96a3c3d0a8.png", rating: 4.7, reviews: 35, sold: 110, unit: "১টি", care: "medium", light: "bright", tags: ["flowering", "decorative"] },
  { id: 110, name: "স্ট্যাগহর্ন ফার্ন", nameEn: "Staghorn Fern", price: 600, categoryId: 9, emoji: "🦌", gradient: "from-green-50 to-emerald-50", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/767cf0dd650d.jpg", rating: 4.8, reviews: 28, sold: 90, isNew: true, unit: "১টি", care: "medium", light: "medium", tags: ["hanging", "rare"] },

  // More Pots & Planters (111-120) — researched from Bangladesh market
  { id: 111, name: "সিরামিক টব ০১", nameEn: "Ceramic Pot 01", price: 650, originalPrice: 800, categoryId: 2, emoji: "🏺", gradient: "from-amber-50 to-stone-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/3dd56e61254a.jpg", rating: 4.8, reviews: 89, sold: 280, popular: true, unit: "১টি" },
  { id: 112, name: "সিরামিক টব ০২", nameEn: "Ceramic Pot 02", price: 680, categoryId: 2, emoji: "🏺", gradient: "from-stone-50 to-amber-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/3730f1ba8127.jpg", rating: 4.7, reviews: 67, sold: 220, unit: "১টি" },
  { id: 113, name: "সিরামিক টব ০৩", nameEn: "Ceramic Pot 03", price: 450, originalPrice: 550, categoryId: 2, emoji: "🏺", gradient: "from-slate-50 to-stone-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/f6bae9819dd8.jpg", rating: 4.6, reviews: 54, sold: 190, unit: "১টি" },
  { id: 114, name: "সিরামিক টব ০৪", nameEn: "Ceramic Pot 04", price: 480, categoryId: 2, emoji: "🏺", gradient: "from-rose-50 to-stone-50", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/dac91df9ee9e.jpg", rating: 4.7, reviews: 43, sold: 160, isNew: true, unit: "১টি" },
  { id: 115, name: "ভার্টিক্যাল গার্ডেন পট", nameEn: "Vertical Garden Pot", price: 299, originalPrice: 399, categoryId: 2, emoji: "🟩", gradient: "from-green-50 to-emerald-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/68565ffc88ee.jpg", rating: 4.6, reviews: 78, sold: 310, popular: true, unit: "১ সেট" },
  { id: 116, name: "ওয়াল হ্যাঙ্গিং পট", nameEn: "Wall Hanging Pot", price: 250, categoryId: 2, emoji: "🪟", gradient: "from-blue-50 to-cyan-50", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/dd4c1d0b09f3.jpg", rating: 4.5, reviews: 56, sold: 240, unit: "১টি" },
  { id: 117, name: "প্রিমিয়াম হ্যাঙ্গিং বাস্কেট", nameEn: "Premium Hanging Basket", price: 350, originalPrice: 450, categoryId: 2, emoji: "🧺", gradient: "from-amber-50 to-stone-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/6b24ec5d03ff.jpg", rating: 4.7, reviews: 92, sold: 380, popular: true, unit: "১টি" },
  { id: 118, name: "টেরাকোটা টব (মাঝারি)", nameEn: "Terracotta Pot Medium", price: 180, categoryId: 2, emoji: "🪴", gradient: "from-orange-50 to-amber-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/62640ae2c5c5.jpg", rating: 4.6, reviews: 64, sold: 290, unit: "১টি" },
  { id: 119, name: "টেরাকোটা টব (বড়)", nameEn: "Terracotta Pot Large", price: 280, originalPrice: 350, categoryId: 2, emoji: "🏺", gradient: "from-amber-50 to-orange-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/45101123dd08.jpg", rating: 4.7, reviews: 71, sold: 230, unit: "১টি" },
  { id: 120, name: "স্কয়ার প্লাস্টিক প্লান্টার", nameEn: "Square Plastic Planter", price: 120, categoryId: 2, emoji: "🟫", gradient: "from-gray-50 to-slate-100", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/8fe6fc5cd8e9.jpg", rating: 4.4, reviews: 38, sold: 170, isNew: true, unit: "১টি" },
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
    { label: "সদস্যপদ", href: "/membership" },
    { label: "ভিডিও গাইড", href: "#videos" },
    { label: "কাস্টমার রিভিউ", href: "#testimonials" },
    { label: "যোগাযোগ", href: "#contact" },
  ],
};
