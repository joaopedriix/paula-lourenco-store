"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProductImage } from "@/data/types";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/icons";

export function ProductGallery({ imagens, activeIndex, onChangeIndex }: {
  imagens: ProductImage[];
  activeIndex: number;
  onChangeIndex: (index: number) => void;
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const current = imagens[activeIndex] ?? imagens[0];

  function goTo(delta: number) {
    const next = (activeIndex + delta + imagens.length) % imagens.length;
    onChangeIndex(next);
  }

  if (!current) return null;

  return (
    <div className="flex flex-col-reverse gap-3 md:flex-row md:gap-4">
      <div className="flex gap-2 overflow-x-auto md:flex-col md:overflow-visible">
        {imagens.map((img, index) => (
          <button
            key={img.url}
            type="button"
            onClick={() => onChangeIndex(index)}
            aria-label={`Ver foto ${index + 1}`}
            aria-current={index === activeIndex}
            className={`relative h-16 w-14 shrink-0 overflow-hidden border md:h-20 md:w-16 ${
              index === activeIndex ? "border-wine" : "border-transparent opacity-70 hover:opacity-100"
            }`}
          >
            <Image src={img.url} alt={img.alt} fill sizes="80px" className="object-cover" />
          </button>
        ))}
      </div>

      <div className="relative aspect-[3/4] flex-1 overflow-hidden bg-rose/15">
        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          className="absolute inset-0 h-full w-full"
          aria-label="Ampliar imagem"
        >
          <Image
            src={current.url}
            alt={current.alt}
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </button>

        {imagens.length > 1 ? (
          <>
            <button
              type="button"
              onClick={() => goTo(-1)}
              aria-label="Foto anterior"
              className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center bg-cream/85 text-ink transition-colors hover:text-wine"
            >
              <ChevronLeftIcon />
            </button>
            <button
              type="button"
              onClick={() => goTo(1)}
              aria-label="Próxima foto"
              className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center bg-cream/85 text-ink transition-colors hover:text-wine"
            >
              <ChevronRightIcon />
            </button>
          </>
        ) : null}
      </div>

      {lightboxOpen ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-4 animate-pl-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="Imagem ampliada"
          onClick={() => setLightboxOpen(false)}
        >
          <div className="relative h-[85vh] w-full max-w-2xl">
            <Image src={current.url} alt={current.alt} fill sizes="100vw" className="object-contain" />
          </div>
        </div>
      ) : null}
    </div>
  );
}
