import Link from "next/link";
import { getBestSellers } from "@/data/products";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProductGrid } from "@/components/product/ProductGrid";

/** Mais vendidos (briefing seção 10). */
export function BestSellers() {
  const produtos = getBestSellers();
  if (produtos.length === 0) return null;

  return (
    <section className="py-14 md:py-20">
      <Container>
        <SectionTitle title="Os queridinhos da Paula Lourenço" className="mb-8 md:mb-10" />
        <ProductGrid products={produtos} columns={4} />
        <div className="mt-9 text-center">
          <Link
            href="/catalogo?ordenar=mais-vendidos"
            className="text-[12px] font-medium uppercase tracking-[0.14em] text-wine underline-offset-4 hover:underline"
          >
            Ver todos os mais vendidos
          </Link>
        </div>
      </Container>
    </section>
  );
}
