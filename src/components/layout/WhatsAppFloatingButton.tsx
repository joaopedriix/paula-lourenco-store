"use client";

import { buildInquiryMessage, buildWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/icons";

/**
 * Botão flutuante de dúvida (briefing seção 32) — DIFERENTE do fluxo de
 * finalizar pedido (seção 30). Usa sempre a mensagem padrão de dúvida.
 */
export function WhatsAppFloatingButton() {
  const url = buildWhatsAppUrl(buildInquiryMessage());

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a loja pelo WhatsApp"
      className="fixed bottom-5 right-4 z-40 flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-105 md:bottom-7 md:right-7"
      style={{ height: 52, width: 52 }}
    >
      <WhatsAppIcon />
    </a>
  );
}
