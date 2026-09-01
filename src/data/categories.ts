import type { Category } from "./types";

/**
 * Categorias de vitrine. As imagens usam fotos de moda feminina do Unsplash
 * (placeholder de demonstração — ver aviso em src/data/products.ts).
 */
export const categories: Category[] = [
  {
    slug: "vestidos",
    nome: "Vestidos",
    descricao: "Peças que marcam presença, do dia à noite.",
    imagem: { url: "https://images.unsplash.com/photo-1549410336-60dde98be9cc?w=900&h=1200&fit=crop&crop=entropy&q=80&auto=format", alt: "Vestidos Paula Lourenço Store (imagem de demonstração)" },
  },
  {
    slug: "conjuntos",
    nome: "Conjuntos",
    descricao: "Combinações prontas, sem esforço.",
    imagem: { url: "https://images.unsplash.com/photo-1685703206267-314ce44ca3c8?w=900&h=1200&fit=crop&crop=entropy&q=80&auto=format", alt: "Conjuntos Paula Lourenço Store (imagem de demonstração)" },
  },
  {
    slug: "blusas",
    nome: "Blusas",
    descricao: "Versáteis para compor qualquer look.",
    imagem: { url: "https://images.unsplash.com/photo-1738651875566-859920488d0d?w=900&h=1200&fit=crop&crop=entropy&q=80&auto=format", alt: "Blusas Paula Lourenço Store (imagem de demonstração)" },
  },
  {
    slug: "calcas",
    nome: "Calças",
    descricao: "Alfaiataria com caimento impecável.",
    imagem: { url: "https://images.unsplash.com/photo-1767631338127-8cd80ee2f9df?w=900&h=1200&fit=crop&crop=entropy&q=80&auto=format", alt: "Calças Paula Lourenço Store (imagem de demonstração)" },
  },
  {
    slug: "shorts",
    nome: "Shorts",
    descricao: "Leveza para os dias quentes.",
    imagem: { url: "https://images.unsplash.com/photo-1682917265565-ee06ea11e19f?w=900&h=1200&fit=crop&crop=entropy&q=80&auto=format", alt: "Shorts Paula Lourenço Store (imagem de demonstração)" },
  },
  {
    slug: "acessorios",
    nome: "Acessórios",
    descricao: "Os detalhes que fecham o look.",
    imagem: { url: "https://images.unsplash.com/photo-1552224614-2a4345873a96?w=900&h=1200&fit=crop&crop=entropy&q=80&auto=format", alt: "Acessórios Paula Lourenço Store (imagem de demonstração)" },
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
