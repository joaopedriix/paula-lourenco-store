"use client";

import { useEffect } from "react";
import type { ModelMeasurements, SizeMeasurement } from "@/data/types";
import { CloseIcon } from "@/components/ui/icons";

export function SizeGuideModal({
  open,
  onClose,
  tabela,
  medidasModelo,
}: {
  open: boolean;
  onClose: () => void;
  tabela: SizeMeasurement[];
  medidasModelo: ModelMeasurements;
}) {
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center">
      <button
        type="button"
        aria-label="Fechar guia de medidas"
        onClick={onClose}
        className="absolute inset-0 bg-ink/40 animate-pl-fade-in"
      />
      <div className="relative max-h-[85vh] w-full max-w-lg overflow-y-auto bg-cream p-6 shadow-xl animate-pl-slide-up sm:rounded-sm">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-serif text-lg text-ink">Guia de medidas</h3>
          <button type="button" onClick={onClose} aria-label="Fechar" className="text-ink">
            <CloseIcon />
          </button>
        </div>

        <p className="mb-4 text-xs text-taupe">
          Medidas da modelo nas fotos: altura {medidasModelo.altura}, busto {medidasModelo.busto}, cintura{" "}
          {medidasModelo.cintura}, quadril {medidasModelo.quadril} — veste tamanho {medidasModelo.tamanhoVestido}.
        </p>

        {tabela.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[420px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-line-cream text-left text-[11px] uppercase tracking-[0.1em] text-taupe">
                  <th className="py-2 pr-3">Tamanho</th>
                  <th className="py-2 pr-3">Busto</th>
                  <th className="py-2 pr-3">Cintura</th>
                  <th className="py-2 pr-3">Quadril</th>
                  <th className="py-2">Comprimento</th>
                </tr>
              </thead>
              <tbody>
                {tabela.map((row) => (
                  <tr key={row.tamanho} className="border-b border-line-cream/70">
                    <td className="py-2 pr-3 font-medium text-ink">{row.tamanho}</td>
                    <td className="py-2 pr-3 text-taupe">{row.busto}</td>
                    <td className="py-2 pr-3 text-taupe">{row.cintura}</td>
                    <td className="py-2 pr-3 text-taupe">{row.quadril}</td>
                    <td className="py-2 text-taupe">{row.comprimento}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-sm text-taupe">Tabela de medidas não disponível para este produto.</p>
        )}
      </div>
    </div>
  );
}
