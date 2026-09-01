import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/carrinho", "/busca"],
    },
    sitemap: "https://paulalourencostore.com.br/sitemap.xml",
  };
}
