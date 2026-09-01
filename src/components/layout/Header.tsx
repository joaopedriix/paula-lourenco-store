"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/cart-context";
import { useUI } from "@/context/ui-context";
import { mainNav } from "@/data/nav";
import { BagIcon, HeartIcon, MenuIcon, SearchIcon } from "@/components/ui/icons";
import { Container } from "@/components/ui/Container";

export function Header() {
  const { count } = useCart();
  const { openSearch, openCart, openMobileMenu } = useUI();

  return (
    <header className="sticky top-0 z-40 border-b border-line-cream bg-cream/95 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between gap-4 md:h-[76px]">
        {/* Mobile: hambúrguer à esquerda */}
        <button
          type="button"
          onClick={openMobileMenu}
          className="flex h-10 w-10 items-center justify-center text-ink transition-colors hover:text-wine md:hidden"
          aria-label="Abrir menu"
        >
          <MenuIcon />
        </button>

        {/* Logo — desktop à esquerda, mobile centralizada */}
        <Link
          href="/"
          aria-label="Paula Lourenço Store — página inicial"
          className="flex items-center gap-2 md:mr-auto"
        >
          <Image
            src="/brand/logo-transparent.png"
            alt="Paula Lourenço Store"
            width={112}
            height={112}
            priority
            className="h-10 w-10 object-contain md:h-14 md:w-14"
          />
          <span className="hidden font-serif text-lg tracking-wide text-ink sm:block md:text-xl">
            Paula Lourenço Store
          </span>
        </Link>

        {/* Menu central — desktop apenas */}
        <nav aria-label="Menu principal" className="hidden md:block">
          <ul className="flex items-center gap-6 lg:gap-7">
            {mainNav.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-[12px] font-medium uppercase tracking-[0.14em] text-ink transition-colors hover:text-wine"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Ações à direita */}
        <div className="flex items-center gap-1 md:ml-auto md:gap-2">
          <button
            type="button"
            onClick={openSearch}
            className="flex h-10 w-10 items-center justify-center text-ink transition-colors hover:text-wine"
            aria-label="Buscar produtos"
          >
            <SearchIcon />
          </button>
          <Link
            href="/favoritos"
            className="hidden h-10 w-10 items-center justify-center text-ink transition-colors hover:text-wine sm:flex"
            aria-label="Meus favoritos"
          >
            <HeartIcon />
          </Link>
          <button
            type="button"
            onClick={openCart}
            className="flex h-10 items-center gap-1.5 px-2 text-ink transition-colors hover:text-wine"
            aria-label={`Sacola, ${count} ${count === 1 ? "item" : "itens"}`}
          >
            <BagIcon />
            <span className="hidden text-[12px] font-medium uppercase tracking-[0.1em] sm:inline">
              Sacola ({count})
            </span>
            <span className="text-[12px] font-medium sm:hidden">({count})</span>
          </button>
        </div>
      </Container>
    </header>
  );
}
