"use client";

import { useWishlist } from "@/context/wishlist-context";
import { HeartIcon } from "@/components/ui/icons";

export function WishlistButton({ productId }: { productId: string }) {
  const { isFavorited, toggle } = useWishlist();
  const favorited = isFavorited(productId);

  return (
    <button
      type="button"
      onClick={() => toggle(productId)}
      aria-pressed={favorited}
      className="flex h-12 w-full items-center justify-center gap-2 border border-line-cream text-[12px] font-medium uppercase tracking-[0.12em] text-ink transition-colors hover:border-wine hover:text-wine"
    >
      <HeartIcon filled={favorited} className={favorited ? "text-wine" : ""} />
      {favorited ? "Adicionado aos favoritos" : "Adicionar aos favoritos"}
    </button>
  );
}
