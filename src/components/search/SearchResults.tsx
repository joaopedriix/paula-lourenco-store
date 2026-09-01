"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProductGrid } from "@/components/product/ProductGrid";
import { SearchIcon } from "@/components/ui/icons";

export function SearchResults() {
  const searchParams = useSearchParams();
  const initial = searchParams.get("q") ?? "";
  const [query, setQuery] = useState(initial);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return products.filter((p) => {
      const haystack = [p.nome, p.categoria, p.descricaoCurta, p.descricaoLonga, ...p.cores.map((c) => c.nome)]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [query]);

  return (
    <>
      <SectionTitle eyebrow="Busca" title={query ? `Resultados para "${query}"` : "Buscar produtos"} align="left" />
      <div className="my-6 flex items-center gap-2 border border-line-cream px-3">
        <SearchIcon className="h-4 w-4 text-taupe" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar por vestido, conjunto, calça..."
          className="h-11 flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-taupe"
        />
      </div>
      <ProductGrid products={results} />
    </>
  );
}
