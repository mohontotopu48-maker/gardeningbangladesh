export type GalleryImage = {
  src: string;
  title: string;
  category: "rooftop" | "garden" | "indoor" | "outdoor" | "community";
};

export const galleryImages: GalleryImage[] = [
  // Rooftop gardens
  { src: "/gallery/gardening-bangladesh-dhaka-rooftop-aerial.png", title: "ছাদ বাগান — আকাশ থেকে দৃশ্য", category: "rooftop" },
  { src: "/gallery/gardening-bangladesh-dhaka-rooftop-night.png", title: "রাতের ছাদ বাগান", category: "rooftop" },
  { src: "/gallery/gardening-bangladesh-dhaka-rooftop-lounge.png", title: "ছাদের বিশ্রাম কোণ", category: "rooftop" },
  { src: "/gallery/gardening-bangladesh-dhaka-rooftop-food-garden.png", title: "ছাদে শাকসবজি বাগান", category: "rooftop" },
  { src: "/gallery/gardening-bangladesh-rooftop-garden.png", title: "সবুজ ছাদ বাগান", category: "rooftop" },
  // Garden views
  { src: "/gallery/gardening-bangladesh-garden-view-01.png", title: "বাগানের দৃশ্য ১", category: "garden" },
  { src: "/gallery/gardening-bangladesh-garden-view-02.png", title: "বাগানের দৃশ্য ২", category: "garden" },
  { src: "/gallery/gardening-bangladesh-garden-view-03.png", title: "বাগানের দৃশ্য ৩", category: "garden" },
  { src: "/gallery/gardening-bangladesh-garden-view-04.png", title: "বাগানের দৃশ্য ৪", category: "garden" },
  { src: "/gallery/gardening-bangladesh-hero-reference.png", title: "সবুজে বাঁচি প্রতিদিন", category: "garden" },
  // Indoor plants
  { src: "/gallery/gardening-bangladesh-indoor-plants-01.png", title: "ইনডোর প্লান্ট সংগ্রহ ১", category: "indoor" },
  { src: "/gallery/gardening-bangladesh-indoor-plants-02.png", title: "ইনডোর প্লান্ট সংগ্রহ ২", category: "indoor" },
  { src: "/gallery/gardening-bangladesh-indoor-plants-03.png", title: "ইনডোর প্লান্ট সংগ্রহ ৩", category: "indoor" },
  { src: "/gallery/gardening-bangladesh-indoor-plants-04.png", title: "ইনডোর প্লান্ট সংগ্রহ ৪", category: "indoor" },
  // Outdoor / nursery
  { src: "/gallery/gardening-bangladesh-mango.png", title: "আম বাগান", category: "outdoor" },
  { src: "/gallery/gardening-bangladesh-nursery.png", title: "আমাদের নার্সারি", category: "outdoor" },
  // Community
  { src: "/gallery/gardening-bangladesh-community.png", title: "গার্ডেনিং কমিউনিটি", category: "community" },
];

// Best images for header gallery (rotating strip on every page)
export const headerGalleryImages = [
  "/gallery/gardening-bangladesh-dhaka-rooftop-aerial.png",
  "/gallery/gardening-bangladesh-garden-view-01.png",
  "/gallery/gardening-bangladesh-dhaka-rooftop-night.png",
  "/gallery/gardening-bangladesh-garden-view-03.png",
  "/gallery/gardening-bangladesh-indoor-plants-01.png",
  "/gallery/gardening-bangladesh-dhaka-rooftop-lounge.png",
  "/gallery/gardening-bangladesh-garden-view-04.png",
  "/gallery/gardening-bangladesh-indoor-plants-03.png",
];
