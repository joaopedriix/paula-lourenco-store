import { formatBRL, formatInstallment } from "@/lib/format";

export function Price({
  preco,
  precoAnterior,
  parcelamento,
  size = "md",
}: {
  preco: number;
  precoAnterior?: number;
  parcelamento?: { vezes: number; valor: number };
  size?: "sm" | "md" | "lg";
}) {
  const priceClass =
    size === "lg" ? "text-2xl" : size === "sm" ? "text-sm" : "text-base";

  return (
    <div className="flex flex-col gap-0.5">
      <div className="flex items-baseline gap-2">
        {precoAnterior ? (
          <span className="text-xs text-taupe line-through">{formatBRL(precoAnterior)}</span>
        ) : null}
        <span className={`font-medium text-wine ${priceClass}`}>{formatBRL(preco)}</span>
      </div>
      {parcelamento ? (
        <span className="text-xs text-taupe">
          ou {formatInstallment(parcelamento.vezes, parcelamento.valor)}
        </span>
      ) : null}
    </div>
  );
}
