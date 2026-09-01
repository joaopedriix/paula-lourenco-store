import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/categories";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

/**
 * Categorias visuais (briefing seção 9). Scroll horizontal suave no mobile,
 * grid no desktop — imagem é sempre a protagonista, sem texto sobreposto pesado.
 */
export function CategoryShowcase() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <SectionTitle title="Escolha seu estilo" className="mb-8 md:mb-10" />

        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hidden sm:hidden">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} className="w-[42vw] shrink-0" />
          ))}
        </div>

        <div className="hidden gap-5 sm:grid sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function CategoryCard({
  category,
  className = "",
}: {
  category: (typeof categories)[number];
  className?: string;
}) {
  return (
    <Link href={`/categoria/${category.slug}`} className={`group flex flex-col gap-3 ${className}`}>
      <div className="relative aspect-[3/4] overflow-hidden bg-rose/20">
        <Image
          src={category.imagem.url}
          alt={category.imagem.alt}
          fill
          sizes="(min-width: 1024px) 16vw, (min-width: 640px) 30vw, 42vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <span className="text-center text-[12px] font-medium uppercase tracking-[0.14em] text-ink transition-colors group-hover:text-wine">
        {category.nome}
      </span>
    </Link>
  );
}
