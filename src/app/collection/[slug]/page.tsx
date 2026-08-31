import { CollectionPageView } from "@/components/site/collection-page-view";

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <CollectionPageView slug={slug} />;
}
