/**
 * Conteúdo editorial da Home — centralizado para facilitar troca de texto e
 * imagens sem mexer nos componentes (briefing seção 8: "conteúdo deverá
 * poder ser alterado facilmente"). Imagens usam picsum.photos como
 * placeholder de demonstração (ver aviso em src/data/products.ts).
 */
export const heroContent = {
  eyebrow: "Nova coleção",
  title: "Seu estilo. Do seu jeito.",
  subtitle: "Peças escolhidas para acompanhar você em todos os momentos.",
  ctaLabel: "Conhecer a coleção",
  ctaHref: "/catalogo",
  imageDesktop: {
    url: "https://picsum.photos/seed/pl-hero-desktop/1800/1000",
    alt: "Campanha Paula Lourenço Store (imagem de demonstração)",
  },
  imageMobile: {
    url: "https://picsum.photos/seed/pl-hero-mobile/900/1200",
    alt: "Campanha Paula Lourenço Store (imagem de demonstração)",
  },
};

export const editorialBannerContent = {
  eyebrow: "Nova coleção",
  title: "Uma curadoria para mulheres que gostam de vestir personalidade.",
  ctaLabel: "Ver coleção",
  ctaHref: "/catalogo",
  image: {
    url: "https://picsum.photos/seed/pl-editorial-banner/1600/1000",
    alt: "Campanha editorial Paula Lourenço Store (imagem de demonstração)",
  },
};

export const occasions = [
  { slug: "dia", label: "Para o dia", image: { url: "https://picsum.photos/seed/pl-ocasiao-dia/800/1000", alt: "Looks para o dia (imagem de demonstração)" } },
  { slug: "noite", label: "Para a noite", image: { url: "https://picsum.photos/seed/pl-ocasiao-noite/800/1000", alt: "Looks para a noite (imagem de demonstração)" } },
  { slug: "trabalho", label: "Para trabalhar", image: { url: "https://picsum.photos/seed/pl-ocasiao-trabalho/800/1000", alt: "Looks para trabalhar (imagem de demonstração)" } },
  { slug: "celebrar", label: "Para celebrar", image: { url: "https://picsum.photos/seed/pl-ocasiao-celebrar/800/1000", alt: "Looks para celebrar (imagem de demonstração)" } },
] as const;

export const instagramShowcase = Array.from({ length: 6 }).map((_, i) => ({
  url: `https://picsum.photos/seed/pl-instagram-${i}/600/600`,
  alt: "Post do Instagram Paula Lourenço Store (imagem de demonstração)",
}));
