"use client";

import { useMemo, useState } from "react";
import type { Product, SizeLabel } from "@/data/types";
import { ColorSelector } from "./ColorSelector";
import { SizeSelector } from "./SizeSelector";
import { QuantitySelector } from "./QuantitySelector";
import { AddToCartButton } from "./AddToCartButton";
import { WishlistButton } from "./WishlistButton";
import { SizeGuideModal } from "./SizeGuideModal";
import { useCart } from "@/context/cart-context";
import { useUI } from "@/context/ui-context";

export function ProductPurchasePanel({
  product,
  onColorChange,
}: {
  product: Product;
  onColorChange?: (imagemIndex: number | undefined) => void;
}) {
  const [selectedColor, setSelectedColor] = useState(product.cores[0]?.nome ?? "Única");
  const [selectedSize, setSelectedSize] = useState<SizeLabel | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [guideOpen, setGuideOpen] = useState(false);
  const { addItem } = useCart();
  const { showToast, openCart } = useUI();

  const maxQty = useMemo(() => {
    if (!selectedSize) return 10;
    return Math.min(10, product.estoque[selectedSize] ?? 10);
  }, [product.estoque, selectedSize]);

  function handleColorSelect(nome: string) {
    setSelectedColor(nome);
    const cor = product.cores.find((c) => c.nome === nome);
    onColorChange?.(cor?.imagemIndex);
  }

  function handleAddToCart() {
    if (!selectedSize) {
      showToast("Escolha um tamanho antes de adicionar");
      return;
    }
    addItem({
      productId: product.id,
      slug: product.slug,
      nome: product.nome,
      imagemUrl: product.imagens[0]?.url ?? "",
      cor: selectedColor,
      tamanho: selectedSize,
      quantidade: quantity,
      preco: product.preco,
    });
    showToast(`${product.nome} adicionada à sacola`);
    openCart();
  }

  return (
    <div className="flex flex-col gap-6">
      {product.cores.length > 0 ? (
        <ColorSelector cores={product.cores} selected={selectedColor} onSelect={handleColorSelect} />
      ) : null}

      <SizeSelector
        tamanhos={product.tamanhos}
        estoque={product.estoque}
        selected={selectedSize}
        onSelect={(t) => {
          setSelectedSize(t);
          setQuantity(1);
        }}
        onOpenGuide={() => setGuideOpen(true)}
      />

      <QuantitySelector value={quantity} onChange={setQuantity} max={maxQty} />

      <div className="flex flex-col gap-3">
        <AddToCartButton onClick={handleAddToCart} />
        <WishlistButton productId={product.id} />
      </div>

      <SizeGuideModal
        open={guideOpen}
        onClose={() => setGuideOpen(false)}
        tabela={product.tabelaMedidas}
        medidasModelo={product.medidasModelo}
      />
    </div>
  );
}
