import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { products, getProductBySlug, getRelatedProducts, getCompleteTheLook } from "@/data/products";
import { getCategoryBySlug } from "@/data/categories";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { DemoNotice } from "@/components/ui/DemoNotice";
import { ProductDetail } from "@/components/product/ProductDetail";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import { CompleteTheLook } from "@/components/product/CompleteTheLook";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Produto não encontrado" };

  return {
    title: product.nome,
    description: product.descricaoCurta,
    alternates: { canonical: `/produto/${product.slug}` },
    openGraph: {
      title: product.nome,
      description: product.descricaoCurta,
      images: product.imagens[0] ? [product.imagens[0].url] : undefined,
    },
  };
}

export default async function ProdutoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const categoria = getCategoryBySlug(product.categoria);
  const related = getRelatedProducts(product);
  const completeOLook = getCompleteTheLook(product);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.nome,
    description: product.descricaoCurta,
    image: product.imagens.map((i) => i.url),
    offers: {
      "@type": "Offer",
      priceCurrency: "BRL",
      price: product.preco.toFixed(2),
      availability: Object.values(product.estoque).some((qty) => (qty ?? 0) > 0)
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      url: `https://paulalourencostore.com.br/produto/${product.slug}`,
    },
  };

  return (
    <div className="py-6 md:py-10">
      <Script
        id={`product-jsonld-${product.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Container>
        <Breadcrumb
          items={[
            { label: "Início", href: "/" },
            { label: categoria?.nome ?? "Catálogo", href: `/categoria/${product.categoria}` },
            { label: product.nome },
          ]}
        />
        <div className="mt-4">
          <ProductDetail product={product} />
        </div>
        <DemoNotice className="mt-8" />
        <CompleteTheLook products={completeOLook} />
      </Container>
      <RelatedProducts products={related} />
    </div>
  );
}
