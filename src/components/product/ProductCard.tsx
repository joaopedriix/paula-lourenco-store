"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { Product } from "@/data/types";
import { Price } from "@/components/ui/Price";
import { HeartIcon } from "@/components/ui/icons";
import { useWishlist } from "@/context/wishlist-context";
import { useCart } from "@/context/cart-context";
import { useUI } from "@/context/ui-context";
import { ProductBadge } from "./ProductBadge";

export function ProductCard({ product }: { product: Product }) {
  const { isFavorited, toggle } = useWishlist();
  const { addItem } = useCart();
  const { showToast } = useUI();
  const [hovered, setHovered] = useState(false);

  const favorited = isFavorited(product.id);
  const secondImage = product.imagens[1] ?? product.imagens[0];

  const badge = useMemo(() => {
    if (product.ultimasUnidades) return "ÚLTIMAS UNIDADES" as const;
    if (product.emPromocao) return "SALE" as const;
    if (product.maisVendido) return "MAIS VENDIDO" as const;
    if (product.novidade) return "NOVO" as const;
    return null;
  }, [product]);

  function handleQuickAdd(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    const firstSize = product.tamanhos.find((t) => (product.estoque[t] ?? 0) > 0);
    if (!firstSize) {
      showToast("Peça esgotada no momento");
      return;
    }
    const color = product.cores[0];
    addItem({
      productId: product.id,
      slug: product.slug,
      nome: product.nome,
      imagemUrl: product.imagens[0]?.url ?? "",
      cor: color?.nome ?? "Única",
      tamanho: firstSize,
      quantidade: 1,
      preco: product.preco,
    });
    showToast(`${product.nome} adicionada à sacola`);
  }

  return (
    <div
      className="group relative flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href={`/produto/${product.slug}`} className="relative block aspect-[3/4] overflow-hidden bg-rose/15">
        {product.imagens[0] ? (
          <Image
            src={product.imagens[0].url}
            alt={product.imagens[0].alt}
            fill
            sizes="(min-width: 1024px) 25vw, 50vw"
            className={`object-cover transition-opacity duration-300 ${hovered && secondImage ? "opacity-0" : "opacity-100"}`}
          />
        ) : null}
        {secondImage ? (
          <Image
            src={secondImage.url}
            alt={secondImage.alt}
            fill
            sizes="(min-width: 1024px) 25vw, 50vw"
            className={`object-cover transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}
          />
        ) : null}

        {badge ? (
          <span className="absolute left-2 top-2">
            <ProductBadge label={badge} />
          </span>
        ) : null}

        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggle(product.id);
          }}
          aria-label={favorited ? "Remover dos favoritos" : "Adicionar aos favoritos"}
          aria-pressed={favorited}
          className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center bg-cream/90 text-ink transition-colors hover:text-wine"
        >
          <HeartIcon filled={favorited} className={`h-4 w-4 ${favorited ? "text-wine" : ""}`} />
        </button>

        <button
          type="button"
          onClick={handleQuickAdd}
          className="absolute inset-x-2 bottom-2 hidden translate-y-1 items-center justify-center bg-ink/90 py-2.5 text-[11px] font-medium uppercase tracking-[0.1em] text-cream opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:flex"
        >
          Adicionar rápido
        </button>
      </Link>

      <div className="mt-3 flex flex-col gap-1">
        <Link href={`/produto/${product.slug}`} className="font-serif text-[15px] leading-snug text-ink hover:text-wine">
          {product.nome}
        </Link>
        <Price preco={product.preco} precoAnterior={product.precoAnterior} parcelamento={product.parcelamento} size="sm" />
        {product.cores.length > 0 ? (
          <div className="mt-1 flex items-center gap-1.5" aria-label={`Cores disponíveis: ${product.cores.map((c) => c.nome).join(", ")}`}>
            {product.cores.map((c) => (
              <span
                key={c.nome}
                title={c.nome}
                className="h-3.5 w-3.5 rounded-full border border-line-cream"
                style={{ backgroundColor: c.hex }}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
