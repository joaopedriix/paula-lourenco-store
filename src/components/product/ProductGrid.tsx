import type { Product } from "@/data/types";
import { ProductCard } from "./ProductCard";

export function ProductGrid({
  products,
  columns = 4,
}: {
  products: Product[];
  columns?: 2 | 3 | 4;
}) {
  const colClass =
    columns === 2
      ? "sm:grid-cols-2"
      : columns === 3
        ? "sm:grid-cols-2 lg:grid-cols-3"
        : "sm:grid-cols-2 lg:grid-cols-4";

  if (products.length === 0) {
    return (
      <p className="py-16 text-center text-sm text-taupe">
        Nenhuma peça encontrada com esses filtros.
      </p>
    );
  }

  return (
    <div className={`grid grid-cols-2 gap-x-4 gap-y-8 ${colClass} md:gap-x-6 md:gap-y-10`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
