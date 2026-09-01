/**
 * Wrapper mínimo de localStorage, seguro para SSR (não acessa `window` no
 * servidor) e resiliente a erros (modo anônimo, quota excedida, etc.).
 */
export function readStorage<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function writeStorage<T>(key: string, value: T): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // localStorage indisponível (modo privado/quota) — falha silenciosa,
    // o estado continua funcionando em memória durante a sessão.
  }
}
