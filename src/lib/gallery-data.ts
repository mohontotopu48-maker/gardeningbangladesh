export type GalleryImage = {
  src: string;
  title: string;
  category: "rooftop" | "garden" | "indoor" | "outdoor" | "community";
};

export const galleryImages: GalleryImage[] = [
  // Rooftop gardens
  { src: "/gallery/gardening-bangladesh-dhaka-rooftop-aerial.jpg", title: "ছাদ বাগান — আকাশ থেকে দৃশ্য", category: "rooftop" },
  { src: "/gallery/gardening-bangladesh-dhaka-rooftop-night.jpg", title: "রাতের ছাদ বাগান", category: "rooftop" },
  { src: "/gallery/gardening-bangladesh-dhaka-rooftop-lounge.jpg", title: "ছাদের বিশ্রাম কোণ", category: "rooftop" },
  { src: "/gallery/gardening-bangladesh-dhaka-rooftop-food-garden.jpg", title: "ছাদে শাকসবজি বাগান", category: "rooftop" },
  { src: "/gallery/gardening-bangladesh-rooftop-garden.jpg", title: "সবুজ ছাদ বাগান", category: "rooftop" },
  // Garden views
  { src: "/gallery/gardening-bangladesh-garden-view-01.jpg", title: "বাগানের দৃশ্য ১", category: "garden" },
  { src: "/gallery/gardening-bangladesh-garden-view-02.jpg", title: "বাগানের দৃশ্য ২", category: "garden" },
  { src: "/gallery/gardening-bangladesh-garden-view-03.jpg", title: "বাগানের দৃশ্য ৩", category: "garden" },
  { src: "/gallery/gardening-bangladesh-garden-view-04.jpg", title: "বাগানের দৃশ্য ৪", category: "garden" },
  { src: "/gallery/gardening-bangladesh-hero-reference.jpg", title: "সবুজে বাঁচি প্রতিদিন", category: "garden" },
  // Indoor plants
  { src: "/gallery/gardening-bangladesh-indoor-plants-01.jpg", title: "ইনডোর প্লান্ট সংগ্রহ ১", category: "indoor" },
  { src: "/gallery/gardening-bangladesh-indoor-plants-02.jpg", title: "ইনডোর প্লান্ট সংগ্রহ ২", category: "indoor" },
  { src: "/gallery/gardening-bangladesh-indoor-plants-03.jpg", title: "ইনডোর প্লান্ট সংগ্রহ ৩", category: "indoor" },
  { src: "/gallery/gardening-bangladesh-indoor-plants-04.jpg", title: "ইনডোর প্লান্ট সংগ্রহ ৪", category: "indoor" },
  // Outdoor / nursery
  { src: "/gallery/gardening-bangladesh-mango.jpg", title: "আম বাগান", category: "outdoor" },
  { src: "/gallery/gardening-bangladesh-nursery.jpg", title: "আমাদের নার্সারি", category: "outdoor" },
  // Community
  { src: "/gallery/gardening-bangladesh-community.jpg", title: "গার্ডেনিং কমিউনিটি", category: "community" },
];

// Best images for header gallery (rotating strip on every page)
export const headerGalleryImages = [
  "/gallery/gardening-bangladesh-dhaka-rooftop-aerial.jpg",
  "/gallery/gardening-bangladesh-garden-view-01.jpg",
  "/gallery/gardening-bangladesh-dhaka-rooftop-night.jpg",
  "/gallery/gardening-bangladesh-garden-view-03.jpg",
  "/gallery/gardening-bangladesh-indoor-plants-01.jpg",
  "/gallery/gardening-bangladesh-dhaka-rooftop-lounge.jpg",
  "/gallery/gardening-bangladesh-garden-view-04.jpg",
  "/gallery/gardening-bangladesh-indoor-plants-03.jpg",
];
