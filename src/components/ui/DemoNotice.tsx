/**
 * Aviso discreto exibido perto de conteúdo de demonstração (produtos,
 * fotos, depoimentos) — briefing pede que nada fictício seja apresentado
 * como se fosse real (seções 16, 35, 36, 42).
 */
export function DemoNotice({ className = "" }: { className?: string }) {
  return (
    <p className={`text-[11px] leading-relaxed text-taupe ${className}`}>
      Conteúdo de demonstração — fotos e textos ilustrativos, não representam o catálogo real da loja.
    </p>
  );
}
