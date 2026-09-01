import { site } from "@/data/site";
import { formatBRL } from "./format";
import type { CartItem } from "@/context/cart-context";

export interface CustomerInfo {
  nome?: string;
  cep?: string;
  cidade?: string;
  estado?: string;
}

/**
 * Monta a mensagem de finalização de pedido no formato exato pedido no
 * briefing (seção 30). Deve ser sempre codificada com encodeURIComponent
 * antes de ir para a URL do WhatsApp.
 */
export function buildOrderMessage(items: CartItem[], customer: CustomerInfo): string {
  const lines: string[] = [];
  lines.push("Olá! Quero finalizar meu pedido na Paula Lourenço Store 🛍");
  lines.push("");
  lines.push("Meu pedido:");
  lines.push("");

  items.forEach((item, index) => {
    lines.push(`${index + 1}. ${item.nome}`);
    lines.push(`Cor: ${item.cor}`);
    lines.push(`Tamanho: ${item.tamanho}`);
    lines.push(`Quantidade: ${item.quantidade}`);
    lines.push(`Valor: ${formatBRL(item.preco * item.quantidade)}`);
    lines.push("");
  });

  const subtotal = items.reduce((sum, item) => sum + item.preco * item.quantidade, 0);

  lines.push("Subtotal:");
  lines.push(formatBRL(subtotal));
  lines.push("");
  lines.push("Nome:");
  lines.push(customer.nome?.trim() || "________________");
  lines.push("");
  lines.push("CEP:");
  lines.push(customer.cep?.trim() || "________________");

  if (customer.cidade || customer.estado) {
    lines.push("");
    lines.push("Cidade/Estado:");
    lines.push(`${customer.cidade?.trim() || "________________"} - ${customer.estado?.trim() || "____"}`);
  }

  lines.push("");
  lines.push("Forma de entrega:");
  lines.push("A combinar");
  lines.push("");
  lines.push("Gostaria de finalizar esse pedido. 💕");

  return lines.join("\n");
}

/** Mensagem padrão do botão flutuante — dúvida genérica, NÃO é o fluxo de finalizar pedido. */
export function buildInquiryMessage(): string {
  return "Olá! Vim pelo site da Paula Lourenço Store e gostaria de tirar uma dúvida.";
}

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${site.whatsappNumeroE164}?text=${encodeURIComponent(message)}`;
}

export function buildProductInquiryMessage(productName: string): string {
  return `Olá! Vim pelo site da Paula Lourenço Store e tenho uma dúvida sobre a peça "${productName}".`;
}
