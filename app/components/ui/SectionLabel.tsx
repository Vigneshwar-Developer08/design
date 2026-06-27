import { cn } from "../../lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[var(--color-accent)]",
        className
      )}
    >
      <span className="inline-block w-4 h-px bg-[var(--color-accent)]" aria-hidden="true" />
      {children}
    </span>
  );
}
