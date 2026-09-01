import Link from "next/link";
import { getNewArrivals } from "@/data/products";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProductGrid } from "@/components/product/ProductGrid";

/** Novidades (briefing seção 13). */
export function NewArrivals() {
  const produtos = getNewArrivals().slice(0, 8);
  if (produtos.length === 0) return null;

  return (
    <section className="bg-rose/10 py-14 md:py-20">
      <Container>
        <SectionTitle title="Acabaram de chegar" className="mb-8 md:mb-10" />
        <ProductGrid products={produtos} columns={4} />
        <div className="mt-9 text-center">
          <Link
            href="/catalogo?ordenar=novidades"
            className="inline-flex h-12 items-center justify-center bg-wine px-7 text-[12px] font-medium uppercase tracking-[0.16em] text-cream transition-colors duration-300 hover:bg-wine-dark"
          >
            Ver todas as novidades
          </Link>
        </div>
      </Container>
    </section>
  );
}
