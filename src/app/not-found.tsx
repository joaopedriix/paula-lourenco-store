import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="flex flex-1 flex-col items-center justify-center gap-4 py-24 text-center">
      <span className="font-serif text-5xl text-wine">404</span>
      <h1 className="font-serif text-2xl text-ink">Página não encontrada</h1>
      <p className="max-w-sm text-sm text-taupe">
        A página que você procura não existe ou foi movida. Que tal voltar para o catálogo?
      </p>
      <Link
        href="/catalogo"
        className="mt-2 inline-flex h-11 items-center justify-center bg-wine px-6 text-[12px] font-medium uppercase tracking-[0.14em] text-cream transition-colors hover:bg-wine-dark"
      >
        Ver catálogo
      </Link>
    </Container>
  );
}
