"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";

/**
 * Lista VIP (briefing seção 18). Sem integração real ainda — captura o
 * contato apenas na UI e dá feedback de sucesso, deixando a estrutura pronta
 * para plugar um provedor real (ex.: Klaviyo/Mailchimp/planilha) depois.
 */
export function Newsletter() {
  const [value, setValue] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!value.trim()) return;
    // TODO: plugar integração real de e-mail/WhatsApp marketing quando disponível.
    setSent(true);
    setValue("");
  }

  return (
    <section className="bg-wine py-14 text-cream md:py-16">
      <Container className="flex flex-col items-center gap-4 text-center">
        <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-cream/80">
          Entre para a lista VIP
        </span>
        <h2 className="max-w-md font-serif text-2xl leading-tight sm:text-3xl">
          Receba novidades, lançamentos e condições especiais antes de todo mundo.
        </h2>

        {sent ? (
          <p className="mt-2 text-sm text-cream/90">
            Recebemos seu contato — em breve você começa a receber nossas novidades.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-2 flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Seu WhatsApp ou e-mail"
              aria-label="Seu WhatsApp ou e-mail"
              className="h-12 flex-1 border border-cream/40 bg-transparent px-4 text-sm text-cream outline-none placeholder:text-cream/60 focus:border-cream"
            />
            <button
              type="submit"
              className="h-12 shrink-0 bg-cream px-6 text-[12px] font-medium uppercase tracking-[0.14em] text-wine transition-colors duration-300 hover:bg-ink hover:text-cream"
            >
              Quero participar
            </button>
          </form>
        )}
      </Container>
    </section>
  );
}
