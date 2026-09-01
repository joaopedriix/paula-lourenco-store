"use client";

import { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";

interface ToastState {
  message: string;
  visible: boolean;
}

interface UIContextValue {
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  isSearchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  isMobileMenuOpen: boolean;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
  toast: ToastState;
  showToast: (message: string) => void;
}

const UIContext = createContext<UIContextValue | null>(null);

export function UIProvider({ children }: { children: React.ReactNode }) {
  const [isCartOpen, setCartOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toast, setToast] = useState<ToastState>({ message: "", visible: false });
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openCart = useCallback(() => {
    setSearchOpen(false);
    setMobileMenuOpen(false);
    setCartOpen(true);
  }, []);
  const closeCart = useCallback(() => setCartOpen(false), []);

  const openSearch = useCallback(() => {
    setCartOpen(false);
    setMobileMenuOpen(false);
    setSearchOpen(true);
  }, []);
  const closeSearch = useCallback(() => setSearchOpen(false), []);

  const openMobileMenu = useCallback(() => {
    setSearchOpen(false);
    setCartOpen(false);
    setMobileMenuOpen(true);
  }, []);
  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

  const showToast = useCallback((message: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setToast({ message, visible: true });
    timeoutRef.current = setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 2600);
  }, []);

  const value = useMemo<UIContextValue>(
    () => ({
      isCartOpen,
      openCart,
      closeCart,
      isSearchOpen,
      openSearch,
      closeSearch,
      isMobileMenuOpen,
      openMobileMenu,
      closeMobileMenu,
      toast,
      showToast,
    }),
    [
      isCartOpen,
      openCart,
      closeCart,
      isSearchOpen,
      openSearch,
      closeSearch,
      isMobileMenuOpen,
      openMobileMenu,
      closeMobileMenu,
      toast,
      showToast,
    ]
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export function useUI(): UIContextValue {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error("useUI deve ser usado dentro de <UIProvider>");
  return ctx;
}
