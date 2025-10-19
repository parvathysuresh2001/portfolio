import { SITE_URL } from "@/lib/constants";
import { MetadataRoute } from "next";

const robots = (): MetadataRoute.Robots => ({
  rules: [
    {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/links", "/404"],
    },
  ],
  sitemap: `${SITE_URL}/sitemap.xml`,
  // host: SITE_URL,
});

export default robots;