"use client";

import { motion } from "framer-motion";
import { Layers, Code2, Fingerprint, TrendingUp, type LucideIcon } from "lucide-react";
import type { ServiceItem } from "../../types";
import { cn } from "../../lib/utils";

const ICON_MAP: Record<string, LucideIcon> = {
  Layers, Code2, Fingerprint, TrendingUp,
};

// Mini decorative SVG illustration per service
const ILLUSTRATIONS: Record<string, React.ReactNode> = {
  "ux-design": (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <rect x="8" y="8" width="28" height="20" rx="3" fill="#4f46e520" stroke="#4f46e540" strokeWidth="1.5" />
      <rect x="44" y="8" width="28" height="20" rx="3" fill="#4f46e510" stroke="#4f46e530" strokeWidth="1.5" />
      <rect x="8" y="36" width="64" height="36" rx="3" fill="#4f46e515" stroke="#4f46e535" strokeWidth="1.5" />
      <circle cx="40" cy="54" r="8" fill="#4f46e530" />
      <line x1="40" y1="46" x2="40" y2="62" stroke="#4f46e5" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="32" y1="54" x2="48" y2="54" stroke="#4f46e5" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  "web-dev": (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <rect x="8" y="16" width="64" height="48" rx="4" fill="#4f46e510" stroke="#4f46e530" strokeWidth="1.5" />
      <rect x="8" y="16" width="64" height="10" rx="4" fill="#4f46e520" />
      <circle cx="17" cy="21" r="2" fill="#4f46e560" />
      <circle cx="24" cy="21" r="2" fill="#4f46e540" />
      <circle cx="31" cy="21" r="2" fill="#4f46e530" />
      <polyline points="16,38 24,46 16,54" stroke="#4f46e5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="28" y1="54" x2="48" y2="54" stroke="#4f46e540" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  "branding": (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <circle cx="40" cy="40" r="28" fill="#4f46e508" stroke="#4f46e525" strokeWidth="1.5" />
      <circle cx="40" cy="40" r="16" fill="#4f46e515" stroke="#4f46e540" strokeWidth="1.5" />
      <circle cx="40" cy="40" r="5" fill="#4f46e5" />
      <line x1="40" y1="12" x2="40" y2="24" stroke="#4f46e5" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="40" y1="56" x2="40" y2="68" stroke="#4f46e5" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="12" y1="40" x2="24" y2="40" stroke="#4f46e5" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="56" y1="40" x2="68" y2="40" stroke="#4f46e5" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  "strategy": (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <polyline points="12,60 28,38 44,46 68,18" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="60" r="3" fill="#4f46e5" />
      <circle cx="28" cy="38" r="3" fill="#4f46e5" />
      <circle cx="44" cy="46" r="3" fill="#4f46e5" />
      <circle cx="68" cy="18" r="4" fill="#4f46e5" />
      <path d="M60 18 L68 18 L68 26" stroke="#4f46e5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  ),
};

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
  featured?: boolean;
}

export default function ServiceCard({ service, index, featured = false }: ServiceCardProps) {
  const Icon = ICON_MAP[service.icon] ?? Layers;
  const Illustration = ILLUSTRATIONS[service.id];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.52, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
      className={cn(
        "group relative bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl",
        "flex flex-col gap-5 transition-shadow duration-300",
        "hover:shadow-xl hover:shadow-slate-100 hover:border-slate-200",
        featured ? "p-8 md:p-10 h-full" : "p-6 h-full"
      )}
      aria-label={service.title}
    >
      <div className={cn("flex items-start", featured ? "justify-between" : "")}>
        <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/8 flex items-center justify-center text-[var(--color-accent)] transition-colors duration-300 group-hover:bg-[var(--color-accent)]/15">
          <Icon size={20} aria-hidden="true" />
        </div>
        {featured && Illustration && (
          <div className="opacity-70 group-hover:opacity-100 transition-opacity duration-300">
            {Illustration}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <h3 className={cn(
          "font-semibold text-[var(--color-text-primary)]",
          featured ? "text-xl" : "text-base"
        )}>
          {service.title}
        </h3>
        <p className={cn(
          "text-[var(--color-text-secondary)] leading-relaxed",
          featured ? "text-base max-w-md" : "text-sm"
        )}>
          {service.description}
        </p>
      </div>

      {/* Bottom accent line */}
      <span
        className="absolute bottom-0 inset-x-0 h-0.5 rounded-b-xl bg-[var(--color-accent)] scale-x-0 group-hover:scale-x-100 transition-transform duration-350 origin-left"
        aria-hidden="true"
      />
    </motion.article>
  );
}
