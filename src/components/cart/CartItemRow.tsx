"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart, type CartItem } from "@/context/cart-context";
import { formatBRL } from "@/lib/format";
import { MinusIcon, PlusIcon, CloseIcon } from "@/components/ui/icons";

export function CartItemRow({ item, onNavigate }: { item: CartItem; onNavigate?: () => void }) {
  const { removeItem, setQuantity } = useCart();

  return (
    <li className="flex gap-3 py-4">
      <Link
        href={`/produto/${item.slug}`}
        onClick={onNavigate}
        className="relative h-24 w-20 shrink-0 overflow-hidden rounded-xs bg-rose/20"
      >
        <Image src={item.imagemUrl} alt={item.nome} fill sizes="80px" className="object-cover" />
      </Link>

      <div className="flex flex-1 flex-col gap-1">
        <div className="flex items-start justify-between gap-2">
          <Link href={`/produto/${item.slug}`} onClick={onNavigate} className="font-serif text-sm text-ink hover:text-wine">
            {item.nome}
          </Link>
          <button
            type="button"
            onClick={() => removeItem(item.key)}
            aria-label={`Remover ${item.nome} do carrinho`}
            className="text-taupe transition-colors hover:text-wine"
          >
            <CloseIcon className="h-4 w-4" />
          </button>
        </div>
        <p className="text-xs text-taupe">
          Cor: {item.cor} · Tamanho: {item.tamanho}
        </p>

        <div className="mt-1 flex items-center justify-between">
          <div className="flex items-center border border-line-cream">
            <button
              type="button"
              onClick={() => setQuantity(item.key, item.quantidade - 1)}
              aria-label="Diminuir quantidade"
              className="flex h-8 w-8 items-center justify-center text-ink transition-colors hover:text-wine"
            >
              <MinusIcon className="h-3.5 w-3.5" />
            </button>
            <span className="w-6 text-center text-sm">{item.quantidade}</span>
            <button
              type="button"
              onClick={() => setQuantity(item.key, item.quantidade + 1)}
              aria-label="Aumentar quantidade"
              className="flex h-8 w-8 items-center justify-center text-ink transition-colors hover:text-wine"
            >
              <PlusIcon className="h-3.5 w-3.5" />
            </button>
          </div>
          <span className="text-sm font-medium text-wine">{formatBRL(item.preco * item.quantidade)}</span>
        </div>
      </div>
    </li>
  );
}
