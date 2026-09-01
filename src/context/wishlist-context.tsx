"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { readStorage, writeStorage } from "@/lib/storage";

const STORAGE_KEY = "pl_wishlist_v1";

interface WishlistContextValue {
  productIds: string[];
  hydrated: boolean;
  isFavorited: (productId: string) => boolean;
  toggle: (productId: string) => void;
}

const WishlistContext = createContext<WishlistContextValue | null>(null);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [productIds, setProductIds] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // Hidrata a partir do localStorage após o mount — evita mismatch de SSR
    // (servidor não tem acesso ao localStorage do navegador).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProductIds(readStorage<string[]>(STORAGE_KEY, []));
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    writeStorage(STORAGE_KEY, productIds);
  }, [productIds, hydrated]);

  const toggle = useCallback((productId: string) => {
    setProductIds((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  }, []);

  const isFavorited = useCallback((productId: string) => productIds.includes(productId), [productIds]);

  const value = useMemo<WishlistContextValue>(
    () => ({ productIds, hydrated, isFavorited, toggle }),
    [productIds, hydrated, isFavorited, toggle]
  );

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}

export function useWishlist(): WishlistContextValue {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist deve ser usado dentro de <WishlistProvider>");
  return ctx;
}
