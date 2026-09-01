import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { categories, getCategoryBySlug } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CatalogExplorer } from "@/components/filters/CatalogExplorer";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const categoria = getCategoryBySlug(slug);
  if (!categoria) return { title: "Categoria não encontrada" };
  return {
    title: categoria.nome,
    description: categoria.descricao ?? `Peças da categoria ${categoria.nome} — Paula Lourenço Store.`,
    alternates: { canonical: `/categoria/${categoria.slug}` },
  };
}

export default async function CategoriaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const categoria = getCategoryBySlug(slug);
  if (!categoria) notFound();

  const produtos = getProductsByCategory(categoria.slug);

  return (
    <div className="py-6 md:py-10">
      <Container>
        <Breadcrumb items={[{ label: "Início", href: "/" }, { label: categoria.nome }]} />
        <SectionTitle eyebrow={`${produtos.length} peças`} title={categoria.nome} align="left" className="my-6" />
        <Suspense fallback={null}>
          <CatalogExplorer products={produtos} />
        </Suspense>
      </Container>
    </div>
  );
}
