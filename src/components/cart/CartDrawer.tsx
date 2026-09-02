"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/cart-context";
import { useUI } from "@/context/ui-context";
import { CloseIcon } from "@/components/ui/icons";
import { CartItemRow } from "./CartItemRow";
import { EmptyCart } from "./EmptyCart";
import { CartSummary } from "./CartSummary";

export function CartDrawer() {
  const { items } = useCart();
  const { isCartOpen, closeCart } = useUI();

  useEffect(() => {
    if (!isCartOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        aria-label="Fechar carrinho"
        onClick={closeCart}
        className="absolute inset-0 bg-ink/40 animate-pl-fade-in"
      />
      <div className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-cream shadow-xl animate-[pl-slide-up_320ms_ease]">
        <div className="flex items-center justify-between border-b border-line-cream px-5 py-4">
          <h2 className="font-serif text-lg text-ink">Sua sacola ({items.length})</h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Fechar carrinho"
            className="flex h-9 w-9 items-center justify-center text-ink"
          >
            <CloseIcon />
          </button>
        </div>

        {items.length === 0 ? (
          <EmptyCart onNavigate={closeCart} />
        ) : (
          <>
            <ul className="flex-1 divide-y divide-line-cream overflow-y-auto px-5">
              {items.map((item) => (
                <CartItemRow key={item.key} item={item} onNavigate={closeCart} />
              ))}
            </ul>
            <div className="px-5 pb-5">
              <CartSummary compact />
              <div className="mt-3 flex flex-col items-center gap-2">
                <Link
                  href="/catalogo"
                  onClick={closeCart}
                  className="text-[12px] font-medium uppercase tracking-[0.12em] text-ink underline-offset-4 hover:text-wine hover:underline"
                >
                  Continuar comprando
                </Link>
                <Link
                  href="/carrinho"
                  onClick={closeCart}
                  className="text-[12px] font-medium uppercase tracking-[0.12em] text-wine underline-offset-4 hover:underline"
                >
                  Ver sacola completa
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
