import type { Metadata } from "next";
import { CollectionPageView } from "@/components/site/collection-page-view";
import { collectionSEO, generateMetadata as genMeta, getBreadcrumbJSONLD } from "@/lib/seo";
import { collections } from "@/lib/data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const seo = collectionSEO[slug];

  if (!seo) return genMeta({});

  return genMeta({
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    path: `/collection/${slug}`,
  });
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = collections.find((c) => c.slug === slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbJSONLD([
              { name: "Home", url: "/" },
              { name: collection?.title || "Collection", url: `/collection/${slug}` },
            ]),
          ),
        }}
      />
      <CollectionPageView slug={slug} />
    </>
  );
}
