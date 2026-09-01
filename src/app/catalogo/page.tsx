import type { Metadata } from "next";
import { Suspense } from "react";
import { products } from "@/data/products";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CatalogExplorer } from "@/components/filters/CatalogExplorer";

export const metadata: Metadata = {
  title: "Catálogo",
  description: "Todas as peças da Paula Lourenço Store em um só lugar.",
  alternates: { canonical: "/catalogo" },
};

export default function CatalogoPage() {
  return (
    <div className="py-6 md:py-10">
      <Container>
        <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Catálogo" }]} />
        <SectionTitle eyebrow="Todas as peças" title="Catálogo completo" align="left" className="my-6" />
        <Suspense fallback={null}>
          <CatalogExplorer products={products} showCategoryFilter />
        </Suspense>
      </Container>
    </div>
  );
}
