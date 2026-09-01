"use client";

import { MinusIcon, PlusIcon } from "@/components/ui/icons";

export function QuantitySelector({
  value,
  onChange,
  max = 10,
}: {
  value: number;
  onChange: (value: number) => void;
  max?: number;
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-taupe">Quantidade</span>
      <div className="flex w-fit items-center border border-line-cream">
        <button
          type="button"
          onClick={() => onChange(Math.max(1, value - 1))}
          aria-label="Diminuir quantidade"
          className="flex h-11 w-11 items-center justify-center text-ink transition-colors hover:text-wine"
        >
          <MinusIcon className="h-4 w-4" />
        </button>
        <span className="w-10 text-center text-sm font-medium" aria-live="polite">
          {value}
        </span>
        <button
          type="button"
          onClick={() => onChange(Math.min(max, value + 1))}
          aria-label="Aumentar quantidade"
          className="flex h-11 w-11 items-center justify-center text-ink transition-colors hover:text-wine"
        >
          <PlusIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
