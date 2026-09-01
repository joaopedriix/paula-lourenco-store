"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import { readStorage, writeStorage } from "@/lib/storage";

export interface CartItem {
  /** chave composta: productId + cor + tamanho */
  key: string;
  productId: string;
  slug: string;
  nome: string;
  imagemUrl: string;
  cor: string;
  tamanho: string;
  quantidade: number;
  preco: number;
}

export interface AddToCartInput {
  productId: string;
  slug: string;
  nome: string;
  imagemUrl: string;
  cor: string;
  tamanho: string;
  quantidade: number;
  preco: number;
}

type CartState = { items: CartItem[]; hydrated: boolean };

type CartAction =
  | { type: "hydrate"; items: CartItem[] }
  | { type: "add"; input: AddToCartInput }
  | { type: "remove"; key: string }
  | { type: "setQuantity"; key: string; quantidade: number }
  | { type: "clear" };

const STORAGE_KEY = "pl_cart_v1";

function makeKey(productId: string, cor: string, tamanho: string): string {
  return `${productId}__${cor}__${tamanho}`;
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "hydrate":
      return { items: action.items, hydrated: true };
    case "add": {
      const key = makeKey(action.input.productId, action.input.cor, action.input.tamanho);
      const existing = state.items.find((item) => item.key === key);
      if (existing) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.key === key
              ? { ...item, quantidade: item.quantidade + action.input.quantidade }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.input, key }],
      };
    }
    case "remove":
      return { ...state, items: state.items.filter((item) => item.key !== action.key) };
    case "setQuantity":
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.key === action.key ? { ...item, quantidade: action.quantidade } : item
          )
          .filter((item) => item.quantidade > 0),
      };
    case "clear":
      return { ...state, items: [] };
    default:
      return state;
  }
}

interface CartContextValue {
  items: CartItem[];
  count: number;
  subtotal: number;
  hydrated: boolean;
  addItem: (input: AddToCartInput) => void;
  removeItem: (key: string) => void;
  setQuantity: (key: string, quantidade: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], hydrated: false });

  useEffect(() => {
    const items = readStorage<CartItem[]>(STORAGE_KEY, []);
    dispatch({ type: "hydrate", items });
  }, []);

  useEffect(() => {
    if (!state.hydrated) return;
    writeStorage(STORAGE_KEY, state.items);
  }, [state.items, state.hydrated]);

  const addItem = useCallback((input: AddToCartInput) => dispatch({ type: "add", input }), []);
  const removeItem = useCallback((key: string) => dispatch({ type: "remove", key }), []);
  const setQuantity = useCallback(
    (key: string, quantidade: number) => dispatch({ type: "setQuantity", key, quantidade }),
    []
  );
  const clearCart = useCallback(() => dispatch({ type: "clear" }), []);

  const count = useMemo(
    () => state.items.reduce((sum, item) => sum + item.quantidade, 0),
    [state.items]
  );
  const subtotal = useMemo(
    () => state.items.reduce((sum, item) => sum + item.preco * item.quantidade, 0),
    [state.items]
  );

  const value = useMemo<CartContextValue>(
    () => ({
      items: state.items,
      count,
      subtotal,
      hydrated: state.hydrated,
      addItem,
      removeItem,
      setQuantity,
      clearCart,
    }),
    [state.items, state.hydrated, count, subtotal, addItem, removeItem, setQuantity, clearCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart deve ser usado dentro de <CartProvider>");
  return ctx;
}
