"use client";

import type { SizeLabel } from "@/data/types";

export interface FilterState {
  sizes: SizeLabel[];
  colors: string[];
  categorias: string[];
  maxPrice: number;
  onlyInStock: boolean;
}

const ALL_SIZES: SizeLabel[] = ["PP", "P", "M", "G", "GG"];

export function FilterPanel({
  availableColors,
  availableCategories,
  priceCeiling,
  filters,
  onChange,
  onClear,
}: {
  availableColors: { nome: string; hex: string }[];
  availableCategories?: { slug: string; nome: string }[];
  priceCeiling: number;
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  onClear: () => void;
}) {
  function toggleCategoria(slug: string) {
    const has = filters.categorias.includes(slug);
    onChange({
      ...filters,
      categorias: has ? filters.categorias.filter((c) => c !== slug) : [...filters.categorias, slug],
    });
  }

  function toggleSize(size: SizeLabel) {
    const has = filters.sizes.includes(size);
    onChange({
      ...filters,
      sizes: has ? filters.sizes.filter((s) => s !== size) : [...filters.sizes, size],
    });
  }

  function toggleColor(nome: string) {
    const has = filters.colors.includes(nome);
    onChange({
      ...filters,
      colors: has ? filters.colors.filter((c) => c !== nome) : [...filters.colors, nome],
    });
  }

  return (
    <div className="flex flex-col gap-7">
      {availableCategories && availableCategories.length > 0 ? (
        <div>
          <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-taupe">Tipo</h3>
          <div className="flex flex-wrap gap-2">
            {availableCategories.map((cat) => {
              const active = filters.categorias.includes(cat.slug);
              return (
                <button
                  key={cat.slug}
                  type="button"
                  onClick={() => toggleCategoria(cat.slug)}
                  aria-pressed={active}
                  className={`h-9 border px-3 text-xs font-medium transition-colors ${
                    active ? "border-wine bg-wine text-cream" : "border-line-cream text-ink hover:border-wine"
                  }`}
                >
                  {cat.nome}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}

      <div>
        <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-taupe">Tamanho</h3>
        <div className="flex flex-wrap gap-2">
          {ALL_SIZES.map((size) => {
            const active = filters.sizes.includes(size);
            return (
              <button
                key={size}
                type="button"
                onClick={() => toggleSize(size)}
                aria-pressed={active}
                className={`flex h-9 min-w-9 items-center justify-center border px-2 text-xs font-medium transition-colors ${
                  active ? "border-wine bg-wine text-cream" : "border-line-cream text-ink hover:border-wine"
                }`}
              >
                {size}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-taupe">Cor</h3>
        <div className="flex flex-wrap gap-2">
          {availableColors.map((cor) => {
            const active = filters.colors.includes(cor.nome);
            return (
              <button
                key={cor.nome}
                type="button"
                onClick={() => toggleColor(cor.nome)}
                aria-pressed={active}
                title={cor.nome}
                className={`flex h-9 items-center gap-2 border px-2.5 text-xs transition-colors ${
                  active ? "border-wine text-wine" : "border-line-cream text-ink hover:border-wine"
                }`}
              >
                <span className="h-3.5 w-3.5 rounded-full border border-black/10" style={{ backgroundColor: cor.hex }} />
                {cor.nome}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-taupe">
          Preço até {filters.maxPrice.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
        </h3>
        <input
          type="range"
          min={0}
          max={priceCeiling}
          step={10}
          value={filters.maxPrice}
          onChange={(e) => onChange({ ...filters, maxPrice: Number(e.target.value) })}
          className="w-full accent-[#994a50]"
          aria-label="Filtro de preço máximo"
        />
      </div>

      <div>
        <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-taupe">Disponibilidade</h3>
        <label className="flex items-center gap-2 text-sm text-ink">
          <input
            type="checkbox"
            checked={filters.onlyInStock}
            onChange={(e) => onChange({ ...filters, onlyInStock: e.target.checked })}
            className="h-4 w-4 accent-[#994a50]"
          />
          Somente disponíveis
        </label>
      </div>

      <button
        type="button"
        onClick={onClear}
        className="self-start text-[11px] font-medium uppercase tracking-[0.12em] text-wine underline-offset-4 hover:underline"
      >
        Limpar filtros
      </button>
    </div>
  );
}
