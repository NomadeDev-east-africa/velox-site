import type { MetadataRoute } from "next";

const BASE_URL = "https://veloxdj.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/confidentialite",
    "/confidentialite-driver",
    "/confidentialite-livreur",
    "/confidentialite-restaurant",
    "/suppression-donnees-driver",
    "/suppression-donnees-livreur",
    "/suppression-donnees-restaurant",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));
}
