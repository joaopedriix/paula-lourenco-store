"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { useUI } from "@/context/ui-context";
import { mainNav } from "@/data/nav";
import { CloseIcon, HeartIcon, InstagramIcon } from "@/components/ui/icons";
import { site } from "@/data/site";

export function MobileMenu() {
  const { isMobileMenuOpen, closeMobileMenu } = useUI();

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  if (!isMobileMenuOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <button
        type="button"
        aria-label="Fechar menu"
        onClick={closeMobileMenu}
        className="absolute inset-0 bg-ink/40 animate-pl-fade-in"
      />
      <div className="absolute inset-y-0 left-0 flex w-[86%] max-w-sm flex-col bg-cream shadow-xl animate-[pl-slide-up_320ms_ease]">
        <div className="flex items-center justify-between border-b border-line-cream px-5 py-4">
          <Image
            src="/brand/logo-transparent.png"
            alt="Paula Lourenço Store"
            width={80}
            height={80}
            className="h-10 w-10 object-contain"
          />
          <button
            type="button"
            onClick={closeMobileMenu}
            aria-label="Fechar menu"
            className="flex h-10 w-10 items-center justify-center text-ink"
          >
            <CloseIcon />
          </button>
        </div>

        <nav aria-label="Menu principal mobile" className="flex-1 overflow-y-auto px-5 py-4">
          <ul className="flex flex-col divide-y divide-line-cream">
            {mainNav.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="flex min-h-[52px] items-center text-[13px] font-medium uppercase tracking-[0.14em] text-ink transition-colors active:text-wine"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/favoritos"
                onClick={closeMobileMenu}
                className="flex min-h-[52px] items-center gap-2 text-[13px] font-medium uppercase tracking-[0.14em] text-ink transition-colors active:text-wine"
              >
                <HeartIcon className="h-4 w-4" /> Favoritos
              </Link>
            </li>
          </ul>
        </nav>

        <div className="border-t border-line-cream px-5 py-4">
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.12em] text-wine"
          >
            <InstagramIcon className="h-4 w-4" /> {site.instagramHandle}
          </a>
        </div>
      </div>
    </div>
  );
}
