import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/about", "/templates"],
      disallow: [],
    },
    sitemap: "https://simplianimate.vercel.app/sitemap.xml",
  };
}
