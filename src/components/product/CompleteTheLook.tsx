"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/types";
import { useCart } from "@/context/cart-context";
import { useUI } from "@/context/ui-context";
import { formatBRL } from "@/lib/format";
import { PlusIcon } from "@/components/ui/icons";

export function CompleteTheLook({ products }: { products: Product[] }) {
  const { addItem } = useCart();
  const { showToast } = useUI();

  if (products.length === 0) return null;

  function handleAdd(product: Product) {
    const size = product.tamanhos.find((t) => (product.estoque[t] ?? 0) > 0);
    if (!size) {
      showToast("Peça esgotada no momento");
      return;
    }
    addItem({
      productId: product.id,
      slug: product.slug,
      nome: product.nome,
      imagemUrl: product.imagens[0]?.url ?? "",
      cor: product.cores[0]?.nome ?? "Única",
      tamanho: size,
      quantidade: 1,
      preco: product.preco,
    });
    showToast(`${product.nome} adicionada à sacola`);
  }

  return (
    <section className="border-t border-line-cream py-10">
      <h3 className="mb-5 font-serif text-xl text-ink">Complete o look</h3>
      <div className="flex flex-wrap items-center gap-3">
        {products.map((product, index) => (
          <div key={product.id} className="flex items-center gap-3">
            <div className="flex flex-col items-center gap-2 text-center">
              <Link href={`/produto/${product.slug}`} className="relative h-24 w-20 overflow-hidden bg-rose/15 sm:h-28 sm:w-24">
                {product.imagens[0] ? (
                  <Image src={product.imagens[0].url} alt={product.imagens[0].alt} fill sizes="96px" className="object-cover" />
                ) : null}
              </Link>
              <span className="max-w-[96px] text-xs text-ink">{product.nome}</span>
              <span className="text-xs font-medium text-wine">{formatBRL(product.preco)}</span>
              <button
                type="button"
                onClick={() => handleAdd(product)}
                className="text-[10px] font-medium uppercase tracking-[0.1em] text-wine underline-offset-4 hover:underline"
              >
                Adicionar
              </button>
            </div>
            {index < products.length - 1 ? <PlusIcon className="h-4 w-4 shrink-0 text-taupe" /> : null}
          </div>
        ))}
      </div>
    </section>
  );
}
