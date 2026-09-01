import Link from "next/link";
import { BagIcon } from "@/components/ui/icons";

export function EmptyCart({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-16 text-center">
      <BagIcon className="h-10 w-10 text-rose" />
      <h3 className="font-serif text-xl text-ink">SUA SACOLA ESTÁ VAZIA</h3>
      <p className="max-w-[240px] text-sm text-taupe">Que tal encontrar uma peça para chamar de sua?</p>
      <Link
        href="/catalogo?ordenar=novidades"
        onClick={onNavigate}
        className="mt-2 inline-flex h-11 items-center justify-center bg-wine px-6 text-[12px] font-medium uppercase tracking-[0.14em] text-cream transition-colors hover:bg-wine-dark"
      >
        Ver novidades
      </Link>
    </div>
  );
}
