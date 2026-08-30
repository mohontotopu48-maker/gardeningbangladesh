import { Header } from "@/components/site/header";
import { HeaderBanner } from "@/components/site/header-banner";
import { Hero } from "@/components/site/hero";
import { ImageSlider } from "@/components/site/image-slider";
import { FeaturesStrip } from "@/components/site/features-strip";
import { CategoryStrip } from "@/components/site/category-strip";
import { CategorySection } from "@/components/site/category-section";
import { IndoorPlantsHighlight } from "@/components/site/indoor-plants-highlight";
import { PopularProducts } from "@/components/site/popular-products";
import { AllProducts } from "@/components/site/all-products";
import { VideoSection } from "@/components/site/video-section";
import { Testimonials } from "@/components/site/testimonials";
import { Newsletter } from "@/components/site/newsletter";
import { Footer } from "@/components/site/footer";
import { FloatingBar } from "@/components/site/floating-bar";
import { CartDrawer } from "@/components/site/cart-drawer";
import { categories, products } from "@/lib/data";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeaderBanner />
        <Hero />
        <ImageSlider />
        <FeaturesStrip />
        <CategoryStrip />

        {categories.map((category) => {
          const catProducts = products.filter(
            (p) => p.categoryId === category.id,
          );
          return (
            <CategorySection
              key={category.id}
              category={category}
              products={catProducts}
            />
          );
        })}

        <IndoorPlantsHighlight />
        <PopularProducts />
        <AllProducts />
        <VideoSection />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
      <FloatingBar />
      <CartDrawer />
    </div>
  );
}
