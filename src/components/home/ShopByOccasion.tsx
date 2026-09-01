import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

const OCCASIONS = [
  { slug: "dia", label: "Para o dia", seed: "pl-occasion-dia" },
  { slug: "noite", label: "Para a noite", seed: "pl-occasion-noite" },
  { slug: "trabalho", label: "Para trabalhar", seed: "pl-occasion-trabalho" },
  { slug: "celebrar", label: "Para celebrar", seed: "pl-occasion-celebrar" },
] as const;

/**
 * Compre por ocasião (briefing seção 14) — navegação por contexto de uso,
 * complementar às categorias por tipo de peça.
 */
export function ShopByOccasion() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <SectionTitle title="Compre por ocasião" className="mb-8 md:mb-10" />
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {OCCASIONS.map((occasion) => (
            <Link
              key={occasion.slug}
              href={`/catalogo?ocasiao=${occasion.slug}`}
              className="group relative flex aspect-[3/4] items-end overflow-hidden bg-rose/20"
            >
              <Image
                src={`https://picsum.photos/seed/${occasion.seed}/800/1100`}
                alt={`${occasion.label} — imagem de demonstração`}
                fill
                sizes="(min-width: 1024px) 24vw, 46vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink/65 via-ink/0 to-transparent" />
              <span className="relative w-full p-4 text-[12px] font-medium uppercase tracking-[0.14em] text-cream">
                {occasion.label}
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
