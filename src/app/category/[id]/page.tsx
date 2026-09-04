import type { Metadata } from "next";
import { CategoryPageView } from "@/components/site/category-page-view";
import { categorySEO, generateMetadata as genMeta, getBreadcrumbJSONLD } from "@/lib/seo";
import { categories, products } from "@/lib/data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const catId = parseInt(id, 10);
  const category = categories.find((c) => c.id === catId);
  const seo = categorySEO[catId];

  if (!seo) return genMeta({});

  return genMeta({
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    path: `/category/${id}`,
  });
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const catId = parseInt(id, 10);
  const category = categories.find((c) => c.id === catId);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbJSONLD([
              { name: "Home", url: "/" },
              { name: category?.name || "Category", url: `/category/${id}` },
            ]),
          ),
        }}
      />
      <CategoryPageView catId={catId} />
    </>
  );
}
