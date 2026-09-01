"use client";

import { useEffect } from "react";
import { CloseIcon } from "@/components/ui/icons";
import { FilterPanel, type FilterState } from "./FilterPanel";

export function FilterDrawer({
  open,
  onClose,
  availableColors,
  availableCategories,
  priceCeiling,
  filters,
  onChange,
  onClear,
  resultCount,
}: {
  open: boolean;
  onClose: () => void;
  availableColors: { nome: string; hex: string }[];
  availableCategories?: { slug: string; nome: string }[];
  priceCeiling: number;
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  onClear: () => void;
  resultCount: number;
}) {
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <button type="button" aria-label="Fechar filtros" onClick={onClose} className="absolute inset-0 bg-ink/40 animate-pl-fade-in" />
      <div className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-cream shadow-xl animate-[pl-slide-up_320ms_ease]">
        <div className="flex items-center justify-between border-b border-line-cream px-5 py-4">
          <h2 className="font-serif text-lg text-ink">Filtros</h2>
          <button type="button" onClick={onClose} aria-label="Fechar filtros" className="flex h-9 w-9 items-center justify-center text-ink">
            <CloseIcon />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-5">
          <FilterPanel
            availableColors={availableColors}
            availableCategories={availableCategories}
            priceCeiling={priceCeiling}
            filters={filters}
            onChange={onChange}
            onClear={onClear}
          />
        </div>
        <div className="border-t border-line-cream px-5 py-4">
          <button
            type="button"
            onClick={onClose}
            className="flex h-12 w-full items-center justify-center bg-wine text-[12px] font-medium uppercase tracking-[0.14em] text-cream"
          >
            Ver {resultCount} {resultCount === 1 ? "resultado" : "resultados"}
          </button>
        </div>
      </div>
    </div>
  );
}
