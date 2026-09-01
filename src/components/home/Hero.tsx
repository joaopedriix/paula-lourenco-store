import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

/**
 * Hero editorial (briefing seção 8). Conteúdo (headline/CTA) isolado em
 * <HeroCopy> para ser fácil de trocar quando a loja enviar a campanha real.
 * Sem carrossel automático — uma imagem de campanha só, como pedido.
 */
export function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[76vh] min-h-[480px] w-full overflow-hidden bg-rose/25 sm:hidden">
        <Image
          src="https://picsum.photos/seed/pl-hero-mobile/900/1400"
          alt="Campanha Paula Lourenço Store — nova coleção (imagem de demonstração)"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink/60 via-ink/10 to-transparent" />
        <Container className="absolute inset-x-0 bottom-0 pb-9">
          <HeroCopy className="text-cream" />
        </Container>
      </div>

      <div className="relative hidden h-[84vh] min-h-[540px] max-h-[780px] w-full overflow-hidden bg-rose/25 sm:block">
        <Image
          src="https://picsum.photos/seed/pl-hero-desktop/1800/1100"
          alt="Campanha Paula Lourenço Store — nova coleção (imagem de demonstração)"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-ink/50 via-ink/10 to-transparent" />
        <Container className="relative flex h-full items-center">
          <HeroCopy className="max-w-md text-cream" />
        </Container>
      </div>
    </section>
  );
}

function HeroCopy({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-start gap-4 ${className}`}>
      <span className="text-[11px] font-medium uppercase tracking-[0.3em]">Nova coleção</span>
      <h1 className="font-serif text-3xl leading-[1.12] sm:text-4xl md:text-[3.2rem]">
        Peças escolhidas para acompanhar você em todos os momentos.
      </h1>
      <Link
        href="/catalogo"
        className="mt-2 inline-flex h-12 items-center justify-center bg-cream px-7 text-[12px] font-medium uppercase tracking-[0.16em] text-ink transition-colors duration-300 hover:bg-wine hover:text-cream"
      >
        Conhecer a coleção
      </Link>
    </div>
  );
}
