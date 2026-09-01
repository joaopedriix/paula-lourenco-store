"use client";

import { useUI } from "@/context/ui-context";

export function ToastFeedback() {
  const { toast } = useUI();

  return (
    <div
      aria-live="polite"
      className={`pointer-events-none fixed inset-x-0 bottom-5 z-[70] flex justify-center px-4 transition-all duration-300 ${
        toast.visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
      }`}
    >
      <div className="rounded-sm bg-ink px-5 py-3 text-sm font-medium text-cream shadow-lg">
        {toast.message}
      </div>
    </div>
  );
}
