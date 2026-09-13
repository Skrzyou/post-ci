import type { MetadataRoute } from "next";

const routes = [
  "",
  "/dla-firm",
  "/dla-partnerow",
  "/dla-specjalistow",
  "/metoda",
  "/o-nas",
  "/kontakt",
  "/polityka-prywatnosci",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://post-ci.com${route}`,
    lastModified: new Date(),
  }));
}
