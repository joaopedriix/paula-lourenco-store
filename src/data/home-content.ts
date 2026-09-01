/**
 * Conteúdo editorial da Home — centralizado para facilitar troca de texto e
 * imagens sem mexer nos componentes (briefing seção 8: "conteúdo deverá
 * poder ser alterado facilmente"). Imagens usam fotos de moda feminina do
 * Unsplash como placeholder de demonstração (ver aviso em src/data/products.ts).
 */
export const heroContent = {
  eyebrow: "Nova coleção",
  title: "Seu estilo. Do seu jeito.",
  subtitle: "Peças escolhidas para acompanhar você em todos os momentos.",
  ctaLabel: "Conhecer a coleção",
  ctaHref: "/catalogo",
  imageDesktop: {
    url: "https://images.unsplash.com/photo-1685703206267-314ce44ca3c8?w=1800&h=1000&fit=crop&crop=entropy&q=80&auto=format",
    alt: "Campanha Paula Lourenço Store (imagem de demonstração)",
  },
  imageMobile: {
    url: "https://images.unsplash.com/photo-1685703206267-314ce44ca3c8?w=900&h=1200&fit=crop&crop=entropy&q=80&auto=format",
    alt: "Campanha Paula Lourenço Store (imagem de demonstração)",
  },
};

export const editorialBannerContent = {
  eyebrow: "Nova coleção",
  title: "Uma curadoria para mulheres que gostam de vestir personalidade.",
  ctaLabel: "Ver coleção",
  ctaHref: "/catalogo",
  image: {
    url: "https://images.unsplash.com/photo-1747817230321-4ad317ac0809?w=1600&h=1000&fit=crop&crop=entropy&q=80&auto=format",
    alt: "Campanha editorial Paula Lourenço Store (imagem de demonstração)",
  },
};

export const occasions = [
  { slug: "dia", label: "Para o dia", image: { url: "https://images.unsplash.com/photo-1738651875566-859920488d0d?w=800&h=1000&fit=crop&crop=entropy&q=80&auto=format", alt: "Looks para o dia (imagem de demonstração)" } },
  { slug: "noite", label: "Para a noite", image: { url: "https://images.unsplash.com/photo-1768853932212-2b16d6d35715?w=800&h=1000&fit=crop&crop=entropy&q=80&auto=format", alt: "Looks para a noite (imagem de demonstração)" } },
  { slug: "trabalho", label: "Para trabalhar", image: { url: "https://images.unsplash.com/photo-1767631338127-8cd80ee2f9df?w=800&h=1000&fit=crop&crop=entropy&q=80&auto=format", alt: "Looks para trabalhar (imagem de demonstração)" } },
  { slug: "celebrar", label: "Para celebrar", image: { url: "https://images.unsplash.com/photo-1685703206267-314ce44ca3c8?w=800&h=1000&fit=crop&crop=entropy&q=80&auto=format", alt: "Looks para celebrar (imagem de demonstração)" } },
] as const;

export const instagramShowcase = Array.from({ length: 6 }).map((_, i) => ({
  url: `https://images.unsplash.com/photo-${['1738651875566-859920488d0d','1549410336-60dde98be9cc','1768853932212-2b16d6d35715','1552224614-2a4345873a96','1682917265565-ee06ea11e19f','1685703206267-314ce44ca3c8'][i % 6]}?w=600&h=600&fit=crop&crop=entropy&q=80&auto=format`,
  alt: "Post do Instagram Paula Lourenço Store (imagem de demonstração)",
}));
