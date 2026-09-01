"use client";

import { useEffect, useState } from "react";
import { announcementMessages } from "@/data/site";

export function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % announcementMessages.length);
    }, 4200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-9 overflow-hidden bg-wine text-cream">
      <div className="flex h-full items-center justify-center px-4">
        <p
          key={index}
          className="animate-pl-fade-in text-center text-[11px] font-medium uppercase tracking-[0.16em]"
        >
          {announcementMessages[index]}
        </p>
      </div>
    </div>
  );
}
