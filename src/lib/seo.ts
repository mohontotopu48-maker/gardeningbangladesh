import type { Metadata } from "next";

// SEO Configuration — keyword-based metadata for Gardening Bangladesh
// Target: Bangladesh gardening market, rooftop gardening, indoor plants

export const SEO_CONFIG = {
  siteName: "Gardening Bangladesh",
  domain: "https://gardeningbangladesh.com",
  defaultTitle: "Gardening Bangladesh — Buy Fertilizers, Seeds, Plants & Garden Tools Online",
  defaultDescription:
    "Bangladesh's #1 online gardening shop. Buy organic & chemical fertilizers, seeds, indoor plants, pots, garden tools & pesticides. Cash on delivery across all 64 districts. Order online or call 01753961715.",
  keywords: [
    "gardening Bangladesh",
    "online gardening shop Bangladesh",
    "rooftop gardening Dhaka",
    "organic fertilizer Bangladesh",
    "chemical fertilizer Bangladesh",
    "buy seeds online Bangladesh",
    "indoor plants Bangladesh",
    "garden tools Bangladesh",
    "plant pots Bangladesh",
    "pesticide Bangladesh",
    "fungicide Bangladesh",
    "vermicompost Bangladesh",
    "NPK fertilizer Bangladesh",
    "bonsai soil Bangladesh",
    "cocopeat Bangladesh",
    "gardening supplies Bangladesh",
    "nursery online Bangladesh",
    "plant delivery Bangladesh",
    "cash on delivery plants Bangladesh",
    "terrace garden Bangladesh",
  ],
  ogImage: "/slide-hero.jpg",
  twitterHandle: "@Gardening_BD",
};

// Generate metadata for any page with custom title/description
export function generateMetadata({
  title,
  description,
  keywords,
  path,
  image,
}: {
  title?: string;
  description?: string;
  keywords?: string[];
  path?: string;
  image?: string;
}): Metadata {
  const fullTitle = title
    ? `${title} | ${SEO_CONFIG.siteName}`
    : SEO_CONFIG.defaultTitle;
  const desc = description || SEO_CONFIG.defaultDescription;
  const allKeywords = keywords
    ? [...keywords, ...SEO_CONFIG.keywords.slice(0, 10)]
    : SEO_CONFIG.keywords;
  const url = path ? `${SEO_CONFIG.domain}${path}` : SEO_CONFIG.domain;
  const ogImg = image || SEO_CONFIG.ogImage;

  return {
    title: fullTitle,
    description: desc,
    keywords: allKeywords,
    authors: [{ name: SEO_CONFIG.siteName }],
    creator: SEO_CONFIG.siteName,
    publisher: SEO_CONFIG.siteName,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: SEO_CONFIG.siteName,
      images: [
        {
          url: ogImg,
          width: 1200,
          height: 630,
          alt: SEO_CONFIG.siteName,
        },
      ],
      locale: "bn_BD",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [ogImg],
      creator: SEO_CONFIG.twitterHandle,
    },
    metadataBase: new URL(SEO_CONFIG.domain),
    category: "Gardening",
  };
}

// Category-specific SEO
export const categorySEO: Record<number, { title: string; description: string; keywords: string[] }> = {
  1: {
    title: "জৈব সার অনলাইনে কিনুন — Organic Fertilizer Bangladesh",
    description:
      "বাংলাদেশের সেরা জৈব সার: ভার্মিকম্পোস্ট, ঝিনুক পাউডার, নিম খোল, হাড় গুঁড়া, কোকোপিট। ছাদ বাগানের জন্য শতভাগ প্রাকৃতিক সার। ক্যাশ অন ডেলিভারি।",
    keywords: ["জৈব সার", "organic fertilizer Bangladesh", "vermicompost", "ঝিনুক পাউডার", "নিম খোল", "হাড় গুঁড়া", "কোকোপিট"],
  },
  7: {
    title: "রাসায়নিক সার অনলাইন — NPK, DAP, Urea, Potash Bangladesh",
    description:
      "NPK 20-20-20, NPK 19-19-19, DAP, ইউরিয়া, পটাশ, বোরন, ইপসম সল্ট — উন্নতমানের রাসায়নিক সার অনলাইনে কিনুন। দ্রুত গাছের বৃদ্ধি ও উচ্চ ফলন নিশ্চিত।",
    keywords: ["রাসায়নিক সার", "NPK fertilizer Bangladesh", "DAP", "urea", "potash", "boron fertilizer", "epsom salt"],
  },
  8: {
    title: "রেডি মিক্স সয়েল — Adenium, Cactus, Orchid, Bonsai Soil Bangladesh",
    description:
      "রেডিমিক্স সয়েল, অ্যাডেনিয়াম সয়েল, ক্যাকটাস সয়েল, অর্কিড মিক্স, বনসাই সয়েল — সরাসরি ব্যবহারযোগ্য প্রস্তুত মাটির মিশ্রণ। টবে ভরেই গাছ লাগান।",
    keywords: ["ready mix soil Bangladesh", "adenium soil", "cactus soil", "orchid mix", "bonsai soil", "potting mix"],
  },
  2: {
    title: "টব ও প্লান্টার — Plant Pots, Ceramic Pots, Hanging Baskets Bangladesh",
    description:
      "অর্কিড টব, রাউন্ড প্লান্টার, সিরামিক টব, হ্যাঙ্গিং বাস্কেট, ভার্টিক্যাল গার্ডেন পট — বিভিন্ন মাপের সুন্দর টব ও প্লান্টার। ক্যাশ অন ডেলিভারি।",
    keywords: ["plant pots Bangladesh", "ceramic pots", "hanging basket", "vertical garden", "orchid pot", "terracotta pot"],
  },
  3: {
    title: "বীজ অনলাইন কিনুন — Vegetable & Fruit Seeds Bangladesh",
    description:
      "ডেড়শ, পুদিনা, টমেটো, মরিচ, ধনিয়া, পেঁপে বীজ — উচ্চ ফলনশীল হাইব্রিড বীজ। ৯০%+ অঙ্কুরোদ্গম হার। বাংলাদেশের আবহাওয়ার উপযোগী।",
    keywords: ["seeds Bangladesh", "vegetable seeds", "tomato seeds", "chili seeds", "coriander seeds", "hybrid seeds"],
  },
  4: {
    title: "গার্ডেন টুলস — Sprayers, Secateurs, Garden Tools Bangladesh",
    description:
      "স্প্রেয়ার, সিকেচার, বেলচা, গ্লাভস — মজবুত ও টেকসই গার্ডেন টুলস। বাগানের প্রতিটি কাজকে সহজ ও দ্রুত করুন।",
    keywords: ["garden tools Bangladesh", "sprayer", "secateur", "pruning shears", "garden gloves", "trowel"],
  },
  5: {
    title: "কীটনাশক ও ছত্রাকনাশক — Pesticides & Fungicides Bangladesh",
    description:
      "ইমিটাফ, নাইট্রো, কুড়েনক্স, মিরাকুলান, ফ্লোরা, নিম অয়েল — কার্যকর কীটনাশক ও ছত্রাকনাশক। গাছের রোগ-বালাই দূরে রাখুন।",
    keywords: ["pesticide Bangladesh", "fungicide", "insecticide", "neem oil", "emamectin", "plant protection"],
  },
  6: {
    title: "গার্ডেনিং উপকরণ — Nursery Poly, Trays, Pebbles, Pheromone Traps",
    description:
      "নার্সারি পলি, সিডলিং ট্রে, রঙ্গিন পাথর, ফেরোমন ফাঁদ, ওয়াটারিং ক্যান — বাগানের বিবিধ প্রয়োজনীয় উপকরণ।",
    keywords: ["nursery supplies Bangladesh", "seedling tray", "garden pebbles", "pheromone trap", "watering can"],
  },
  9: {
    title: "Indoor Plants Bangladesh — Buy Air Purifying Plants Online",
    description:
      "Snake plant, money plant, ZZ plant, peace lily, areca palm, monstera — 38+ varieties of air-purifying indoor plants. Low maintenance, perfect for Dhaka apartments. Cash on delivery.",
    keywords: ["indoor plants Bangladesh", "snake plant", "money plant", "peace lily", "air purifying plants", "houseplants Dhaka"],
  },
};

// Collection-specific SEO
export const collectionSEO: Record<string, { title: string; description: string; keywords: string[] }> = {
  fertilizers: {
    title: "Fertilizers & Nutrition — Organic, Chemical & Ready Mix Bangladesh",
    description:
      "Complete plant nutrition solution: organic fertilizers, chemical fertilizers & ready mix soil. 24+ types for every growth stage. Nationwide delivery.",
    keywords: ["fertilizer Bangladesh", "organic fertilizer", "chemical fertilizer", "NPK", "DAP", "potash"],
  },
  "plants-seeds": {
    title: "Plants & Seeds — Indoor Plants, Seeds & Pots Bangladesh",
    description:
      "Start your garden: 38+ indoor plant varieties, high-yield hybrid seeds, and beautiful pots & planters. Everything you need in one place.",
    keywords: ["plants Bangladesh", "indoor plants", "seeds online", "plant pots", "gardening"],
  },
  "tools-care": {
    title: "Garden Tools & Plant Care — Sprayers, Pesticides & Accessories",
    description:
      "Garden tools, pesticides, fungicides & accessories — 27+ products for complete garden care. Sprayers, secateurs, neem oil & more.",
    keywords: ["garden tools Bangladesh", "pesticide", "fungicide", "sprayer", "plant care"],
  },
};

// Membership SEO
export const membershipSEO = {
  title: "Membership — Join Gardening Bangladesh (150৳ Lifetime)",
  description:
    "Become a member for exclusive discounts, free delivery, monthly gifts & gardening tips. Lifetime membership only 150৳ or 250৳/month.",
  keywords: ["gardening membership Bangladesh", "plant community", "gardening club", "garden membership"],
};

// Dashboard SEO (noindex)
export const dashboardSEO: Metadata = {
  title: "Admin Dashboard — Gardening Bangladesh",
  description: "Order & customer management dashboard.",
  robots: { index: false, follow: false },
};

// JSON-LD Structured Data
export function getOrganizationJSONLD() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Gardening Bangladesh",
    url: SEO_CONFIG.domain,
    logo: `${SEO_CONFIG.domain}/gb-logo-new-256.jpg`,
    description: SEO_CONFIG.defaultDescription,
    telephone: "+8801753961715",
    email: "contact.gardeningbd@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
    sameAs: [
      "https://www.youtube.com/@gardeningbangladesh",
      "https://www.facebook.com/gardeningbangladeshGB",
      "https://www.instagram.com/gardeningbangladesh",
      "https://x.com/Gardening_BD",
      "https://www.linkedin.com/in/gardeningbangladesh",
      "https://www.tiktok.com/@gardeningbangladesh",
    ],
  };
}

export function getWebsiteJSONLD() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SEO_CONFIG.siteName,
    url: SEO_CONFIG.domain,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SEO_CONFIG.domain}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function getStoreJSONLD() {
  return {
    "@context": "https://schema.org",
    "@type": "Store",
    name: SEO_CONFIG.siteName,
    image: `${SEO_CONFIG.domain}/slide-hero.jpg`,
    url: SEO_CONFIG.domain,
    telephone: "+8801753961715",
    priceRange: "৳40 - ৳5000",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
    openingHours: "Mo-Su 09:00-21:00",
    paymentAccepted: "Cash on Delivery",
  };
}

export function getBreadcrumbJSONLD(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SEO_CONFIG.domain}${item.url}`,
    })),
  };
}

export function getProductJSONLD(product: {
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image.startsWith("http") ? product.image : `${SEO_CONFIG.domain}${product.image}`,
    offers: {
      "@type": "Offer",
      url: SEO_CONFIG.domain,
      priceCurrency: "BDT",
      price: product.price,
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviews,
    },
  };
}
