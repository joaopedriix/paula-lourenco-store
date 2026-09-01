"use client";

import type { ProductColor } from "@/data/types";

export function ColorSelector({
  cores,
  selected,
  onSelect,
}: {
  cores: ProductColor[];
  selected: string;
  onSelect: (nome: string) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-taupe">
        Cor: <span className="text-ink">{selected}</span>
      </span>
      <div className="flex items-center gap-2">
        {cores.map((cor) => {
          const isSelected = cor.nome === selected;
          return (
            <button
              key={cor.nome}
              type="button"
              onClick={() => onSelect(cor.nome)}
              aria-label={`Cor ${cor.nome}`}
              aria-pressed={isSelected}
              className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all ${
                isSelected ? "border-wine ring-1 ring-wine ring-offset-2 ring-offset-cream" : "border-line-cream"
              }`}
            >
              <span className="h-6 w-6 rounded-full border border-black/10" style={{ backgroundColor: cor.hex }} />
            </button>
          );
        })}
      </div>
    </div>
  );
}
