import type { Product } from "@/data/types";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/ui/Container";
import { ProductGrid } from "./ProductGrid";

export function RelatedProducts({ products }: { products: Product[] }) {
  if (products.length === 0) return null;

  return (
    <section className="py-14 md:py-20">
      <Container>
        <SectionTitle title="Você também pode gostar" align="left" className="mb-8" />
        <ProductGrid products={products} columns={4} />
      </Container>
    </section>
  );
}
