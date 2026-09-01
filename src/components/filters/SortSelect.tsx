"use client";

export type SortOption = "relevancia" | "mais-vendidos" | "novidades" | "menor-preco" | "maior-preco";

const OPTIONS: { value: SortOption; label: string }[] = [
  { value: "relevancia", label: "Relevância" },
  { value: "mais-vendidos", label: "Mais vendidos" },
  { value: "novidades", label: "Novidades" },
  { value: "menor-preco", label: "Menor preço" },
  { value: "maior-preco", label: "Maior preço" },
];

export function SortSelect({
  value,
  onChange,
}: {
  value: SortOption;
  onChange: (value: SortOption) => void;
}) {
  return (
    <label className="flex items-center gap-2 text-[12px] text-ink">
      <span className="hidden uppercase tracking-[0.1em] text-taupe sm:inline">Ordenar por</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="h-10 border border-line-cream bg-cream px-2 text-[12px] text-ink outline-none focus:border-wine"
        aria-label="Ordenar produtos"
      >
        {OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </label>
  );
}
