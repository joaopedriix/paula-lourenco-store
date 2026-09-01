"use client";

import { useState, type ReactNode } from "react";
import { ChevronDownIcon } from "@/components/ui/icons";

export function AccordionItem({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-line-cream">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-4 text-left text-[12px] font-semibold uppercase tracking-[0.14em] text-ink"
      >
        {title}
        <ChevronDownIcon className={`h-4 w-4 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div
        className={`grid overflow-hidden text-sm leading-relaxed text-taupe transition-all duration-300 ${
          open ? "grid-rows-[1fr] pb-4 opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">{children}</div>
      </div>
    </div>
  );
}
