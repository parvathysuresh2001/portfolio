import { SITE_URL, projects } from "@/lib/constants";

// This function handles GET requests to /sitemap/sitemap.xml
export function GET(): Response {
  // Static routes
  const staticRoutes = ["/", "/about", "/certs", "/journey", "/projects", "/tech"];

  // Map dynamic project slugs to full route paths
  const dynamicProjectRoutes = projects.map(
    (project) => `/projects/${project.slug}`
  );

  // Combine static and dynamic routes
  const allRoutes = [...staticRoutes, ...dynamicProjectRoutes];

  // Construct the XML sitemap string
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes
    .map(
      (route) => `
    <url>
      <loc>${SITE_URL}${route}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </url>`
    )
    .join("")}
</urlset>`;

  return new Response(sitemapXml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}