import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { SearchResults } from "@/components/search/SearchResults";

export const metadata: Metadata = {
  title: "Busca",
  robots: { index: false, follow: true },
};

export default function BuscaPage() {
  return (
    <div className="py-6 md:py-10">
      <Container>
        <Suspense fallback={null}>
          <SearchResults />
        </Suspense>
      </Container>
    </div>
  );
}
