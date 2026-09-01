# PLAN.md — Paula Lourenço Store

> Plano de arquitetura escrito antes da implementação, conforme seção 54 do BRIEF-ORIGINAL.txt.
> Todas as referências "seção N" abaixo apontam para BRIEF-ORIGINAL.txt.

## 1. Arquitetura de páginas (App Router)

```
src/app/
  layout.tsx              -> shell global: fonts, <CartProvider>, <WishlistProvider>, AnnouncementBar,
                              Header, Footer, WhatsAppFloatingButton, CartDrawer, SearchOverlay
  page.tsx                -> Home (seções 8–18)
  catalogo/page.tsx        -> Catálogo completo (todos os produtos) com filtros/ordenação (seção 19, sem categoria fixa)
  categoria/[slug]/page.tsx-> Página de categoria (seção 19): breadcrumb, filtros, grid
  produto/[slug]/page.tsx  -> Página de produto (seções 21–28)
  busca/page.tsx            -> Resultados completos de busca (complementa o overlay da seção 20)
  favoritos/page.tsx        -> Meus favoritos (seção 33) + estado vazio (seção 52)
  carrinho/page.tsx         -> Página de carrinho completa (seção 29), além do drawer lateral
  sobre/page.tsx            -> Sobre a marca (seção 35) — placeholders claros
  trocas/page.tsx           -> Política de trocas (seção 36) — placeholders claros
  contato/page.tsx          -> Contato (WhatsApp, Instagram, endereço real — BRAND.md)
  not-found.tsx             -> 404 on-brand
  sitemap.ts / robots.ts    -> SEO técnico (seção 45)
```

Rotas amigáveis conforme seção 45: `/produto/vestido-midi-aurora`, `/categoria/vestidos`.

## 2. Componentes

```
src/components/
  layout/   AnnouncementBar, Header, MobileMenu, Footer, WhatsAppFloatingButton
  home/     Hero, CategoryShowcase, BestSellers, EditorialBanner, NewArrivals,
            ShopByOccasion, BenefitsBar, Testimonials, InstagramSection, Newsletter
  product/  ProductCard, ProductGrid, ProductGallery, ColorSelector, SizeSelector,
            QuantitySelector, AddToCartButton, WishlistButton, SizeGuideModal,
            ProductAccordion, RelatedProducts, CompleteTheLook, ProductBadge
  cart/     CartDrawer, CartItem, CartSummary, WhatsAppCheckoutForm, EmptyCart
  search/   SearchOverlay, SearchResultsGrid
  filters/  FilterDrawer, SortSelect
  ui/       Container, SectionTitle, Price, Toast/AddedToCartFeedback, Breadcrumb
```

Regra: nenhum arquivo de componente deve crescer demais — se uma seção da home tiver lógica
própria (ex.: hover troca de imagem no card), ela vive em um subcomponente próprio.

## 3. Design system (tokens)

Implementado em `src/app/globals.css` com Tailwind v4 (`@theme`) — sem `tailwind.config.js`
separado (padrão do Tailwind v4 é CSS-first). Cores extraídas do briefing (seção 2) e
confirmadas contra o pixel real da logo (`public/brand/logo-square.png`, fundo ~#fde4df,
traço vinho ~#8b4b4f) — muito próximas dos hex sugeridos, então usamos os hex do briefing
como fonte oficial:

- `--color-bg` #F8E3DE (fundo blush)
- `--color-wine` #994A50 (vinho — CTA, preço, destaque, hover)
- `--color-wine-dark` #7c3b40 (hover/active do vinho)
- `--color-rose` #D9B0AA (rosa queimado — áreas editoriais, fundos secundários)
- `--color-cream` #FFF9F7 (off-white — superfícies, cards)
- `--color-ink` #3E292B (texto escuro)
- `--color-taupe` #756767 (cinza quente — texto secundário)
- `--color-whatsapp` #25D366 (só para o botão flutuante de dúvida, nunca dominante)

Tipografia (seção 3, cruzada com BRAND.md "estilo Bodoni/Playfair/Cormorant"):
- Serifada editorial: **Bodoni Moda** (`--font-serif`) — títulos, hero, nomes de produto grandes.
- Sans-serif de UI: **DM Sans** (`--font-sans`) — menu, preços, botões, filtros, corpo de texto.
Ambas via `next/font/google`, carregadas uma vez em `layout.tsx` como CSS variables.

Espaçamento/raios: escala contida (raios pequenos, 2–6px — nunca "pill" exagerado exceto
botões de tag/cor), sombras discretas, sem gradientes vistosos, sem elementos 3D.

## 4. Estrutura de dados

`src/data/types.ts` — tipos centrais (`Product`, `ProductColor`, `ProductImage`, `SizeStock`,
`Category`, `Testimonial`).
`src/data/products.ts` — **dados fictícios de demonstração**, claramente comentados no topo
do arquivo, fáceis de substituir. Imagens via `picsum.photos` com seed fixa por produto/cor
(nunca apresentadas como fotos reais — aviso no rodapé + comentário no código).
`src/data/categories.ts` — categorias do menu (Vestidos, Conjuntos, Blusas, Calças, Shorts,
Acessórios) com imagem de vitrine.
`src/data/testimonials.ts` — depoimentos placeholder, marcados como não reais.
`src/data/site.ts` — dados reais confirmados (BRAND.md): WhatsApp, Instagram, endereço;
mais placeholders explícitos (CNPJ/razão social) para preencher depois.

## 5. Estado global (carrinho e favoritos)

Escolha: **Context API + hooks próprios com sincronização em `localStorage`**, sem Zustand/Redux.
Justificativa: o estado é pequeno (lista de itens do carrinho + lista de ids favoritados),
não há necessidade de seletividade de re-render sofisticada, e o briefing pede "não instalar
bibliotecas desnecessárias" (seção 44). Context + `useReducer` + `useEffect` de persistência
resolve com zero dependências novas.

`src/context/cart-context.tsx`:
- Estado: `CartItem[]` (productId+cor+tamanho como chave composta, quantidade, preço congelado).
- Ações: add, remove, updateQuantity, clear.
- Persistência: `localStorage["pl_cart_v1"]`, hidratado em `useEffect` (evita mismatch SSR).
- Deriva: `subtotal`, `count`.

`src/context/wishlist-context.tsx`:
- Estado: `string[]` de productIds.
- Ações: toggle, isFavorited.
- Persistência: `localStorage["pl_wishlist_v1"]`.

`src/context/ui-context.tsx` (auxiliar): controla abertura de CartDrawer, SearchOverlay,
FilterDrawer e o toast de "produto adicionado" (feedback seção 53).

## 6. Fluxo do carrinho → WhatsApp (seção 29–31, obrigatório)

1. Usuário adiciona itens (com cor/tamanho/quantidade) → `CartContext`.
2. Abre `CartDrawer` (ou página `/carrinho`) → vê itens, subtotal, pode alterar qtd/remover.
3. Clica "Finalizar pedido pelo WhatsApp" → abre `WhatsAppCheckoutForm` (mini-formulário:
   Nome, CEP, Cidade, Estado — nenhum campo sensível, todos opcionais para não travar o fluxo).
4. `src/lib/whatsapp.ts#buildOrderMessage(items, customer)` monta a mensagem exatamente no
   formato do exemplo da seção 30, com subtotal formatado em BRL.
5. `encodeURIComponent` na mensagem, monta `https://wa.me/5516991073041?text=...` e abre em
   nova aba (`window.open`, com fallback `location.href` no mobile).
6. Botão flutuante do WhatsApp (seção 32) usa uma função separada `buildInquiryMessage()`
   com o texto fixo de dúvida — nunca reaproveita a mensagem de pedido.

## 7. SEO e performance (seções 44–45)

- `generateMetadata` por página (produto e categoria dinâmicos: title/description/OG).
- `next/image` em todo lugar (lazy por padrão, `priority` só no hero).
- JSON-LD `Product` na página de produto.
- `sitemap.ts` e `robots.ts` dinâmicos a partir de `data/products.ts` e `data/categories.ts`.
- Sem libs de terceiros para ícones pesados — SVGs inline minimalistas.

## 8. Ordem de implementação

1. Design tokens (globals.css) + fontes (layout.tsx).
2. Dados (`data/*`) e tipos.
3. Estado global (cart/wishlist/ui contexts) + localStorage hooks.
4. `lib/whatsapp.ts`, `lib/format.ts`.
5. Layout global: AnnouncementBar, Header, MobileMenu, Footer, WhatsApp flutuante.
6. Home completa (todas as seções 8–18).
7. Catálogo/Categoria + filtros + ordenação + busca.
8. Página de produto completa + CartDrawer + página /carrinho.
9. Favoritos.
10. Sobre / Trocas / Contato.
11. SEO técnico (sitemap/robots/metadata) + revisão de acessibilidade/responsividade.
12. Lint, typecheck, build.
