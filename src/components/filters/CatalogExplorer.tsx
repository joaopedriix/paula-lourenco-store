"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { Product } from "@/data/types";
import { categories } from "@/data/categories";
import { ProductGrid } from "@/components/product/ProductGrid";
import { FilterPanel, type FilterState } from "@/components/filters/FilterPanel";
import { FilterDrawer } from "@/components/filters/FilterDrawer";
import { SortSelect, type SortOption } from "@/components/filters/SortSelect";
import { FilterIcon } from "@/components/ui/icons";

export function CatalogExplorer({
  products,
  showCategoryFilter = false,
}: {
  products: Product[];
  showCategoryFilter?: boolean;
}) {
  const searchParams = useSearchParams();
  const initialSort: SortOption = searchParams.get("ordenar") === "novidades" ? "novidades" : "relevancia";
  const initialOnlyPromo = searchParams.get("promocao") === "1";
  const occasionParam = searchParams.get("ocasiao");

  const priceCeiling = useMemo(
    () => Math.max(...products.map((p) => p.preco), 100),
    [products]
  );

  const [sort, setSort] = useState<SortOption>(initialSort);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    sizes: [],
    colors: [],
    categorias: [],
    maxPrice: Math.ceil(priceCeiling),
    onlyInStock: false,
  });
  const [onlyPromo] = useState(initialOnlyPromo);

  const availableColors = useMemo(() => {
    const map = new Map<string, string>();
    products.forEach((p) => p.cores.forEach((c) => map.set(c.nome, c.hex)));
    return Array.from(map.entries()).map(([nome, hex]) => ({ nome, hex }));
  }, [products]);

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      if (onlyPromo && !p.emPromocao) return false;
      if (occasionParam && !p.ocasioes?.includes(occasionParam as never)) return false;
      if (filters.sizes.length > 0 && !filters.sizes.some((s) => p.tamanhos.includes(s))) return false;
      if (filters.colors.length > 0 && !filters.colors.some((c) => p.cores.some((pc) => pc.nome === c))) return false;
      if (filters.categorias.length > 0 && !filters.categorias.includes(p.categoria)) return false;
      if (p.preco > filters.maxPrice) return false;
      if (filters.onlyInStock) {
        const hasStock = Object.values(p.estoque).some((qty) => (qty ?? 0) > 0);
        if (!hasStock) return false;
      }
      return true;
    });

    list = [...list];
    switch (sort) {
      case "mais-vendidos":
        list.sort((a, b) => Number(b.maisVendido) - Number(a.maisVendido));
        break;
      case "novidades":
        list.sort((a, b) => new Date(b.criadoEm).getTime() - new Date(a.criadoEm).getTime());
        break;
      case "menor-preco":
        list.sort((a, b) => a.preco - b.preco);
        break;
      case "maior-preco":
        list.sort((a, b) => b.preco - a.preco);
        break;
      default:
        break;
    }
    return list;
  }, [products, filters, sort, onlyPromo, occasionParam]);

  function clearFilters() {
    setFilters({
      sizes: [],
      colors: [],
      categorias: [],
      maxPrice: Math.ceil(priceCeiling),
      onlyInStock: false,
    });
  }

  const availableCategories = showCategoryFilter
    ? categories.map((c) => ({ slug: c.slug, nome: c.nome }))
    : undefined;

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
      <aside className="hidden w-56 shrink-0 lg:block">
        <FilterPanel
          availableColors={availableColors}
          availableCategories={availableCategories}
          priceCeiling={Math.ceil(priceCeiling)}
          filters={filters}
          onChange={setFilters}
          onClear={clearFilters}
        />
      </aside>

      <div className="flex-1">
        <div className="mb-5 flex items-center justify-between border-b border-line-cream pb-4">
          <p className="text-xs text-taupe">
            {filtered.length} {filtered.length === 1 ? "peça" : "peças"}
          </p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="flex h-10 items-center gap-1.5 border border-line-cream px-3 text-[11px] font-medium uppercase tracking-[0.1em] text-ink lg:hidden"
            >
              <FilterIcon className="h-4 w-4" /> Filtros
            </button>
            <SortSelect value={sort} onChange={setSort} />
          </div>
        </div>

        <ProductGrid products={filtered} />
      </div>

      <FilterDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        availableColors={availableColors}
        availableCategories={availableCategories}
        priceCeiling={Math.ceil(priceCeiling)}
        filters={filters}
        onChange={setFilters}
        onClear={clearFilters}
        resultCount={filtered.length}
      />
    </div>
  );
}
