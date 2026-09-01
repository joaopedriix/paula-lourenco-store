import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

/**
 * Banner editorial (briefing seção 12) — pensado como campanha de moda, não
 * como banner publicitário: foto grande, pouco texto, um único CTA.
 */
export function EditorialBanner() {
  return (
    <section className="relative h-[70vh] min-h-[420px] max-h-[640px] w-full overflow-hidden bg-rose/25">
      <Image
        src="https://picsum.photos/seed/pl-editorial-banner/1800/1000"
        alt="Nova coleção Paula Lourenço Store — campanha editorial (imagem de demonstração)"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-ink/55 via-ink/5 to-transparent" />
      <Container className="relative flex h-full flex-col items-center justify-end gap-4 pb-12 text-center text-cream md:pb-16">
        <span className="text-[11px] font-medium uppercase tracking-[0.3em]">Nova coleção</span>
        <h2 className="max-w-lg font-serif text-2xl leading-tight sm:text-3xl md:text-4xl">
          Uma curadoria para mulheres que gostam de vestir personalidade.
        </h2>
        <Link
          href="/catalogo"
          className="mt-2 inline-flex h-12 items-center justify-center border border-cream px-7 text-[12px] font-medium uppercase tracking-[0.16em] text-cream transition-colors duration-300 hover:bg-cream hover:text-ink"
        >
          Ver coleção
        </Link>
      </Container>
    </section>
  );
}
