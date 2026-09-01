export function SectionTitle({
  eyebrow,
  title,
  align = "center",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col gap-2 ${align === "center" ? "items-center text-center" : "items-start text-left"} ${className}`}
    >
      {eyebrow ? (
        <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-wine-soft">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-serif text-2xl leading-tight text-ink sm:text-3xl md:text-[2.25rem]">
        {title}
      </h2>
    </div>
  );
}
