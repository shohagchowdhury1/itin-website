import { MetadataRoute } from "next";
import { APP_URL } from "@/lib/constants";
import { getAllBlogPosts } from "@/data/blog-posts";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "itin-application/",
    "pricing/",
    "itin-for-llc/",
    "itin-for-amazon-sellers/",
    "itin-for-freelancers/",
    "itin-for-non-residents/",
    "how-to-get-itin/",
    "itin-vs-ein/",
    "itin-processing-time/",
    "itin-renewal/",
    "about/",
    "contact/",
    "blog/",
  ];

  const staticPages: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${APP_URL}/${route}`,
    lastModified: new Date("2026-06-04"),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  const blogPosts: MetadataRoute.Sitemap = getAllBlogPosts().map((post) => ({
    url: `${APP_URL}/blog/${post.slug}/`,
    lastModified: new Date(post.dateModified),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticPages, ...blogPosts];
}
