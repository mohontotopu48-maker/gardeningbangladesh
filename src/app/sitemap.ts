import type { MetadataRoute } from "next";

const BASE_URL = "https://gardeningbangladesh.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}`, lastModified: new Date(), changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE_URL}/membership`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];

  const categoryIds = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const categoryPages: MetadataRoute.Sitemap = categoryIds.map((id) => ({
    url: `${BASE_URL}/category/${id}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const collectionSlugs = ["fertilizers", "plants-seeds", "tools-care"];
  const collectionPages: MetadataRoute.Sitemap = collectionSlugs.map((slug) => ({
    url: `${BASE_URL}/collection/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticPages, ...categoryPages, ...collectionPages];
}
