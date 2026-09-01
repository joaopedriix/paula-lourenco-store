"use client";

import { useState } from "react";
import type { Product } from "@/data/types";
import { ProductGallery } from "./ProductGallery";
import { ProductPurchasePanel } from "./ProductPurchasePanel";
import { ProductAccordion } from "./ProductAccordion";
import { Price } from "@/components/ui/Price";
import { ProductBadge } from "./ProductBadge";

export function ProductDetail({ product }: { product: Product }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const badge = product.ultimasUnidades
    ? ("ÚLTIMAS UNIDADES" as const)
    : product.emPromocao
      ? ("SALE" as const)
      : product.maisVendido
        ? ("MAIS VENDIDO" as const)
        : product.novidade
          ? ("NOVO" as const)
          : null;

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
      <ProductGallery
        imagens={product.imagens}
        activeIndex={activeIndex}
        onChangeIndex={setActiveIndex}
      />

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          {badge ? <ProductBadge label={badge} /> : null}
          <h1 className="font-serif text-2xl leading-tight text-ink sm:text-3xl">{product.nome}</h1>
          <p className="text-sm leading-relaxed text-taupe">{product.descricaoCurta}</p>
          <Price
            preco={product.preco}
            precoAnterior={product.precoAnterior}
            parcelamento={product.parcelamento}
            size="lg"
          />
        </div>

        <ProductPurchasePanel
          product={product}
          onColorChange={(imagemIndex) => {
            if (typeof imagemIndex === "number") setActiveIndex(imagemIndex);
          }}
        />

        <ProductAccordion product={product} />
      </div>
    </div>
  );
}
