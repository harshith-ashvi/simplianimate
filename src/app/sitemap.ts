import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://simplianimate.com",
      lastModified: new Date(),
    },
    {
      url: "https://simplianimate.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://simplianimate.com/templates",
      lastModified: new Date(),
    },
  ];
}
