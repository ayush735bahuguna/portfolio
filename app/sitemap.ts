import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ayush0portfolio.vercel.app";

  const routes = [
    "",
    "/Projects",
    "/Techstack",
    "/Contact"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const projects = [
    "splitzy",
    "overshare",
    "ble-connect",
    "feed4me",
  ].map((slug) => ({
    url: `${baseUrl}/Project?slug=${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...projects];
}
