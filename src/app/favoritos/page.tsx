import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { WishlistContent } from "@/components/product/WishlistContent";

export const metadata: Metadata = {
  title: "Meus favoritos",
  robots: { index: false, follow: true },
};

export default function FavoritosPage() {
  return (
    <div className="py-6 md:py-10">
      <Container>
        <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Favoritos" }]} />
        <SectionTitle eyebrow="Sua seleção" title="Meus favoritos" align="left" className="my-6" />
        <WishlistContent />
      </Container>
    </div>
  );
}
