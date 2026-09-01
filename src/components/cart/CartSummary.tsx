"use client";

import { useState } from "react";
import { useCart } from "@/context/cart-context";
import { formatBRL } from "@/lib/format";
import { buildOrderMessage, buildWhatsAppUrl } from "@/lib/whatsapp";

export function CartSummary({ compact = false }: { compact?: boolean }) {
  const { items, subtotal } = useCart();
  const [nome, setNome] = useState("");
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [showForm, setShowForm] = useState(false);

  function handleCheckout() {
    const message = buildOrderMessage(items, { nome, cep, cidade, estado });
    const url = buildWhatsAppUrl(message);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="flex flex-col gap-4 border-t border-line-cream pt-4">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-taupe">Subtotal</span>
        <span className="font-serif text-xl text-ink">{formatBRL(subtotal)}</span>
      </div>
      <p className="text-[11px] leading-relaxed text-taupe">
        Frete e prazos são combinados diretamente pelo WhatsApp após o pedido.
      </p>

      {!showForm ? (
        <button
          type="button"
          onClick={() => setShowForm(true)}
          disabled={items.length === 0}
          className="flex h-12 w-full items-center justify-center bg-wine text-[12px] font-medium uppercase tracking-[0.14em] text-cream transition-colors hover:bg-wine-dark disabled:cursor-not-allowed disabled:opacity-50"
        >
          Finalizar pedido pelo WhatsApp
        </button>
      ) : (
        <div className="flex flex-col gap-3 animate-pl-slide-up">
          <p className="text-xs text-taupe">
            Só para agilizar seu atendimento (nenhum campo é obrigatório):
          </p>
          <div className={`grid gap-2 ${compact ? "grid-cols-1" : "grid-cols-2"}`}>
            <input
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Nome"
              className="col-span-2 h-11 border border-line-cream bg-cream px-3 text-sm text-ink outline-none focus:border-wine"
            />
            <input
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              placeholder="CEP"
              className="h-11 border border-line-cream bg-cream px-3 text-sm text-ink outline-none focus:border-wine"
            />
            <input
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              placeholder="Cidade"
              className="h-11 border border-line-cream bg-cream px-3 text-sm text-ink outline-none focus:border-wine"
            />
            <input
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
              placeholder="Estado"
              className="col-span-2 h-11 border border-line-cream bg-cream px-3 text-sm text-ink outline-none focus:border-wine sm:col-span-1"
            />
          </div>
          <button
            type="button"
            onClick={handleCheckout}
            className="flex h-12 w-full items-center justify-center bg-wine text-[12px] font-medium uppercase tracking-[0.14em] text-cream transition-colors hover:bg-wine-dark"
          >
            Enviar pedido pelo WhatsApp
          </button>
        </div>
      )}
    </div>
  );
}
