"use client";

import Link from "next/link";
import { useWishlist } from "@/context/wishlist-context";
import { products } from "@/data/products";
import { ProductGrid } from "@/components/product/ProductGrid";
import { HeartIcon } from "@/components/ui/icons";

export function WishlistContent() {
  const { productIds, hydrated } = useWishlist();

  if (!hydrated) return null;

  const favoritos = products.filter((p) => productIds.includes(p.id));

  if (favoritos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
        <HeartIcon className="h-10 w-10 text-rose" />
        <h3 className="font-serif text-xl text-ink">VOCÊ AINDA NÃO FAVORITOU NENHUMA PEÇA</h3>
        <Link
          href="/catalogo"
          className="mt-2 inline-flex h-11 items-center justify-center bg-wine px-6 text-[12px] font-medium uppercase tracking-[0.14em] text-cream transition-colors hover:bg-wine-dark"
        >
          Descobrir produtos
        </Link>
      </div>
    );
  }

  return <ProductGrid products={favoritos} />;
}
