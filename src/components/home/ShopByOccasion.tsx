import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

const OCCASIONS = [
  { slug: "dia", label: "Para o dia", photoId: "1738651875566-859920488d0d" },
  { slug: "noite", label: "Para a noite", photoId: "1768853932212-2b16d6d35715" },
  { slug: "trabalho", label: "Para trabalhar", photoId: "1767631338127-8cd80ee2f9df" },
  { slug: "celebrar", label: "Para celebrar", photoId: "1685703206267-314ce44ca3c8" },
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
                src={`https://images.unsplash.com/photo-${occasion.photoId}?w=800&h=1100&fit=crop&crop=entropy&q=80&auto=format`}
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
