import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/about", "/templates"],
      disallow: [],
    },
    sitemap: "https://simplianimate.com/sitemap.xml",
  };
}
