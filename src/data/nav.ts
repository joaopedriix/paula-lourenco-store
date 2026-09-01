export interface NavItem {
  label: string;
  href: string;
}

/**
 * Menu principal do header (briefing seção 6). "Roupas" aponta para o
 * catálogo completo; "Novidades" e "Promoções" usam parâmetros de busca
 * do catálogo para filtrar sem precisar de páginas duplicadas.
 */
export const mainNav: NavItem[] = [
  { label: "Novidades", href: "/catalogo?ordenar=novidades" },
  { label: "Roupas", href: "/catalogo" },
  { label: "Vestidos", href: "/categoria/vestidos" },
  { label: "Conjuntos", href: "/categoria/conjuntos" },
  { label: "Blusas", href: "/categoria/blusas" },
  { label: "Calças", href: "/categoria/calcas" },
  { label: "Shorts", href: "/categoria/shorts" },
  { label: "Acessórios", href: "/categoria/acessorios" },
  { label: "Promoções", href: "/catalogo?promocao=1" },
];

export const footerNav = {
  institucional: [
    { label: "Sobre nós", href: "/sobre" },
    { label: "Contato", href: "/contato" },
  ],
  atendimento: [
    { label: "WhatsApp", href: "/contato" },
    { label: "Trocas e devoluções", href: "/trocas" },
    { label: "Guia de medidas", href: "/trocas#guia-de-medidas" },
  ],
  politicas: [
    { label: "Privacidade", href: "/trocas#privacidade" },
    { label: "Termos", href: "/trocas#termos" },
  ],
};
