import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://simplianimate.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://simplianimate.vercel.app/about",
      lastModified: new Date(),
    },
    {
      url: "https://simplianimate.vercel.app/templates",
      lastModified: new Date(),
    },
  ];
}
