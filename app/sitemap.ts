import { FEATURED_PROJECTS, PERSONAL_INFO, PROJECTS } from "@/constants";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = PERSONAL_INFO.siteUrl;

  const routes = ["", "/Projects", "/Techstack", "/Contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const projectRoutes = PROJECTS.filter((p) => p.caseStudy).map((project) => ({
    url: `${baseUrl}${project.caseStudy}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const featuredRoutes = FEATURED_PROJECTS.filter((p) =>
    p.link.startsWith("Project")
  ).map((project) => ({
    url: `${baseUrl}/${project.link}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...routes, ...featuredRoutes, ...projectRoutes];
}
