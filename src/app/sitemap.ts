import { MetadataRoute } from "next";
import { allPosts } from "@/data/blogs";

const siteUrl = "https://pulsewebtechnologies.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    {
      url: siteUrl,
      lastModified: new Date(),
      priority: 1.0,
      changeFrequency: "weekly" as const,
    },
    {
      url: `${siteUrl}/services`,
      lastModified: new Date(),
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      url: `${siteUrl}/portfolio`,
      lastModified: new Date(),
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "weekly" as const,
    },
    {
      url: `${siteUrl}/careers`,
      lastModified: new Date(),
      priority: 0.7,
      changeFrequency: "weekly" as const,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      url: `${siteUrl}/privacy-policy`,
      lastModified: new Date(),
      priority: 0.3,
      changeFrequency: "yearly" as const,
    },
    {
      url: `${siteUrl}/terms-of-service`,
      lastModified: new Date(),
      priority: 0.3,
      changeFrequency: "yearly" as const,
    },
  ];

  const blogPages = allPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  return [...staticPages, ...blogPages];
}
