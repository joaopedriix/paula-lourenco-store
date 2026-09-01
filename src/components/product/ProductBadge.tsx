const BADGE_STYLES: Record<string, string> = {
  NOVO: "bg-ink text-cream",
  "MAIS VENDIDO": "bg-wine text-cream",
  "ÚLTIMAS UNIDADES": "bg-rose text-ink",
  SALE: "bg-wine-dark text-cream",
};

export function ProductBadge({ label }: { label: keyof typeof BADGE_STYLES }) {
  return (
    <span
      className={`inline-flex items-center px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] ${BADGE_STYLES[label]}`}
    >
      {label}
    </span>
  );
}
