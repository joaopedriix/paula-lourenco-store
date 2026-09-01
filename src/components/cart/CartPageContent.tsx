"use client";

import { useCart } from "@/context/cart-context";
import { CartItemRow } from "./CartItemRow";
import { EmptyCart } from "./EmptyCart";
import { CartSummary } from "./CartSummary";

export function CartPageContent() {
  const { items } = useCart();

  if (items.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">
      <ul className="divide-y divide-line-cream border-y border-line-cream">
        {items.map((item) => (
          <CartItemRow key={item.key} item={item} />
        ))}
      </ul>
      <div className="h-fit lg:sticky lg:top-24">
        <CartSummary />
      </div>
    </div>
  );
}
