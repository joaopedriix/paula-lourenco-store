import type { Category } from "./types";

/**
 * Categorias de vitrine. As imagens usam picsum.photos com seed fixa
 * (placeholder de demonstração — ver aviso em src/data/products.ts).
 */
export const categories: Category[] = [
  {
    slug: "vestidos",
    nome: "Vestidos",
    descricao: "Peças que marcam presença, do dia à noite.",
    imagem: { url: "https://picsum.photos/seed/pl-cat-vestidos/900/1200", alt: "Vestidos Paula Lourenço Store (imagem de demonstração)" },
  },
  {
    slug: "conjuntos",
    nome: "Conjuntos",
    descricao: "Combinações prontas, sem esforço.",
    imagem: { url: "https://picsum.photos/seed/pl-cat-conjuntos/900/1200", alt: "Conjuntos Paula Lourenço Store (imagem de demonstração)" },
  },
  {
    slug: "blusas",
    nome: "Blusas",
    descricao: "Versáteis para compor qualquer look.",
    imagem: { url: "https://picsum.photos/seed/pl-cat-blusas/900/1200", alt: "Blusas Paula Lourenço Store (imagem de demonstração)" },
  },
  {
    slug: "calcas",
    nome: "Calças",
    descricao: "Alfaiataria com caimento impecável.",
    imagem: { url: "https://picsum.photos/seed/pl-cat-calcas/900/1200", alt: "Calças Paula Lourenço Store (imagem de demonstração)" },
  },
  {
    slug: "shorts",
    nome: "Shorts",
    descricao: "Leveza para os dias quentes.",
    imagem: { url: "https://picsum.photos/seed/pl-cat-shorts/900/1200", alt: "Shorts Paula Lourenço Store (imagem de demonstração)" },
  },
  {
    slug: "acessorios",
    nome: "Acessórios",
    descricao: "Os detalhes que fecham o look.",
    imagem: { url: "https://picsum.photos/seed/pl-cat-acessorios/900/1200", alt: "Acessórios Paula Lourenço Store (imagem de demonstração)" },
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
