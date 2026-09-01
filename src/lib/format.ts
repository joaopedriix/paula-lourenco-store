export function formatBRL(value: number): string {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function formatInstallment(vezes: number, valor: number): string {
  return `${vezes}x de ${formatBRL(valor)}`;
}

export function discountPercent(preco: number, precoAnterior?: number): number | null {
  if (!precoAnterior || precoAnterior <= preco) return null;
  return Math.round(((precoAnterior - preco) / precoAnterior) * 100);
}
