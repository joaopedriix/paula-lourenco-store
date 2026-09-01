export function AddToCartButton({
  onClick,
  disabled,
  label = "Adicionar à sacola",
}: {
  onClick: () => void;
  disabled?: boolean;
  label?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="flex h-13 w-full items-center justify-center bg-wine text-[13px] font-medium uppercase tracking-[0.14em] text-cream transition-colors duration-300 hover:bg-wine-dark disabled:cursor-not-allowed disabled:bg-taupe/40"
      style={{ height: 52 }}
    >
      {label}
    </button>
  );
}
