import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { categories } from "@/data/categories";

const BASE_URL = "https://paulalourencostore.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/catalogo", "/favoritos", "/sobre", "/trocas", "/contato"].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));

  const categoryRoutes = categories.map((c) => ({
    url: `${BASE_URL}/categoria/${c.slug}`,
    lastModified: new Date(),
  }));

  const productRoutes = products.map((p) => ({
    url: `${BASE_URL}/produto/${p.slug}`,
    lastModified: p.criadoEm,
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
