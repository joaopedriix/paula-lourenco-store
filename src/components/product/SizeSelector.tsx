"use client";

import type { SizeLabel } from "@/data/types";

export function SizeSelector({
  tamanhos,
  estoque,
  selected,
  onSelect,
  onOpenGuide,
}: {
  tamanhos: SizeLabel[];
  estoque: Partial<Record<SizeLabel, number>>;
  selected: SizeLabel | null;
  onSelect: (tamanho: SizeLabel) => void;
  onOpenGuide?: () => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-taupe">Escolha o tamanho</span>
        {onOpenGuide ? (
          <button
            type="button"
            onClick={onOpenGuide}
            className="text-[11px] font-medium uppercase tracking-[0.1em] text-wine underline-offset-4 hover:underline"
          >
            Guia de medidas
          </button>
        ) : null}
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {tamanhos.map((tamanho) => {
          const disponivel = (estoque[tamanho] ?? 0) > 0;
          const isSelected = tamanho === selected;
          return (
            <button
              key={tamanho}
              type="button"
              disabled={!disponivel}
              onClick={() => onSelect(tamanho)}
              aria-pressed={isSelected}
              aria-label={disponivel ? `Tamanho ${tamanho}` : `Tamanho ${tamanho}, indisponível`}
              className={`flex h-11 min-w-11 items-center justify-center border px-3 text-sm font-medium transition-colors ${
                !disponivel
                  ? "cursor-not-allowed border-line-cream text-taupe/50 line-through"
                  : isSelected
                    ? "border-wine bg-wine text-cream"
                    : "border-line-cream text-ink hover:border-wine"
              }`}
            >
              {tamanho}
            </button>
          );
        })}
      </div>
    </div>
  );
}
