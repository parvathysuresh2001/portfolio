import { MetadataRoute } from "next";
import { SITE_URL, projects } from "@/lib/constants";

const sitemap = (): MetadataRoute.Sitemap => {
  // Static routes
  const staticRoutes = ["/", "/about", "/certs", "/journey", "/projects", "/tech"];

  // Dynamic routes (project slugs)
  const dynamicProjectRoutes = projects.map(
    (project) => `/projects/${project.slug}`
  );

  // Combine static and dynamic routes
  const allRoutes = [...staticRoutes, ...dynamicProjectRoutes];

  return allRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));
};

export default sitemap;