import { MetadataRoute } from "next";
import { allPosts } from "@/data/blogs";

const siteUrl = "https://pulseweb.co.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: siteUrl, priority: 1.0, changeFrequency: "weekly" as const },
    {
      url: `${siteUrl}/services`,
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      url: `${siteUrl}/about`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      url: `${siteUrl}/portfolio`,
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      url: `${siteUrl}/blog`,
      priority: 0.8,
      changeFrequency: "weekly" as const,
    },
    {
      url: `${siteUrl}/careers`,
      priority: 0.7,
      changeFrequency: "weekly" as const,
    },
    {
      url: `${siteUrl}/contact`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
  ];

  const blogPages = allPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }));

  return [...staticPages, ...blogPages];
}
