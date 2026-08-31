import { CategoryPageView } from "@/components/site/category-page-view";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const catId = parseInt(id, 10);
  return <CategoryPageView catId={catId} />;
}
