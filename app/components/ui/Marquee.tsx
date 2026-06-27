import { cn } from "../../lib/utils";

interface MarqueeProps {
  items: string[];
  className?: string;
}

export default function Marquee({ items, className }: MarqueeProps) {
  // Duplicate for seamless loop
  const all = [...items, ...items];

  return (
    <div
      className={cn("overflow-hidden border-y border-[var(--color-border)] py-4 bg-[var(--color-bg)]", className)}
      aria-hidden="true"
    >
      <div className="flex w-max" style={{ animation: "marquee 28s linear infinite" }}>
        {all.map((item, i) => (
          <span
            key={i}
            className="mx-8 text-sm font-medium text-[var(--color-text-secondary)] whitespace-nowrap tracking-wide uppercase text-[11px]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
