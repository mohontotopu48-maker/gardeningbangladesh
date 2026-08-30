import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { CategoryStrip } from "@/components/site/category-strip";
import { CategorySection } from "@/components/site/category-section";
import { PopularProducts } from "@/components/site/popular-products";
import { AllProducts } from "@/components/site/all-products";
import { Testimonials } from "@/components/site/testimonials";
import { Footer } from "@/components/site/footer";
import { categories, products } from "@/lib/data";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
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

        <PopularProducts />
        <AllProducts />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
