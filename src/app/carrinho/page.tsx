import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CartPageContent } from "@/components/cart/CartPageContent";

export const metadata: Metadata = {
  title: "Minha sacola",
  robots: { index: false, follow: true },
};

export default function CarrinhoPage() {
  return (
    <div className="py-6 md:py-10">
      <Container>
        <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Sacola" }]} />
        <SectionTitle eyebrow="Seu pedido" title="Sua sacola" align="left" className="my-6" />
        <CartPageContent />
      </Container>
    </div>
  );
}
