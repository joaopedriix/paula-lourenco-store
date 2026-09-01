"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUI } from "@/context/ui-context";
import { products } from "@/data/products";
import { CloseIcon, SearchIcon } from "@/components/ui/icons";
import { ProductGrid } from "@/components/product/ProductGrid";

export function SearchOverlay() {
  const { isSearchOpen, closeSearch } = useUI();
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (!isSearchOpen) {
      // Reseta o campo de busca ao fechar o overlay — estado puramente local
      // de UI, sincronizado com a abertura/fechamento controlados pelo UIContext.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setQuery("");
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSearchOpen]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    return products
      .filter((p) => {
        const haystack = [
          p.nome,
          p.categoria,
          p.descricaoCurta,
          p.descricaoLonga,
          ...p.cores.map((c) => c.nome),
        ]
          .join(" ")
          .toLowerCase();
        return haystack.includes(q);
      })
      .slice(0, 8);
  }, [query]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/busca?q=${encodeURIComponent(query.trim())}`);
    closeSearch();
  }

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-cream animate-pl-fade-in">
      <div className="border-b border-line-cream px-4 py-4 sm:px-8">
        <form onSubmit={handleSubmit} className="mx-auto flex max-w-2xl items-center gap-3">
          <SearchIcon className="h-5 w-5 shrink-0 text-taupe" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por vestido, conjunto, calça..."
            className="h-12 flex-1 bg-transparent font-serif text-lg text-ink outline-none placeholder:text-taupe"
            aria-label="Buscar produtos"
          />
          <button
            type="button"
            onClick={closeSearch}
            aria-label="Fechar busca"
            className="flex h-10 w-10 items-center justify-center text-ink"
          >
            <CloseIcon />
          </button>
        </form>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-8">
        <div className="mx-auto max-w-5xl">
          {query.trim().length >= 2 ? (
            <>
              <p className="mb-4 text-xs uppercase tracking-[0.14em] text-taupe">
                {results.length} resultado{results.length === 1 ? "" : "s"} para &ldquo;{query}&rdquo;
              </p>
              <ProductGrid products={results} />
              {results.length > 0 ? (
                <div className="mt-8 text-center">
                  <Link
                    href={`/busca?q=${encodeURIComponent(query.trim())}`}
                    onClick={closeSearch}
                    className="text-[12px] font-medium uppercase tracking-[0.14em] text-wine underline-offset-4 hover:underline"
                  >
                    Ver todos os resultados
                  </Link>
                </div>
              ) : null}
            </>
          ) : (
            <p className="text-sm text-taupe">Digite ao menos 2 letras para ver resultados.</p>
          )}
        </div>
      </div>
    </div>
  );
}
