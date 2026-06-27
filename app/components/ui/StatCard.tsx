"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { useCountUp } from "../../hooks/useCountUp";

interface StatCardProps {
  value: number;
  suffix: string;
  label: string;
}

export default function StatCard({ value, suffix, label }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useCountUp(value, 1600, inView);

  return (
    <div ref={ref} className="bg-[var(--color-bg)] px-6 py-5 text-center">
      <dt className="text-xs text-[var(--color-text-secondary)] mb-1">{label}</dt>
      <dd className="text-xl font-semibold text-[var(--color-text-primary)] tabular-nums">
        {count}{suffix}
      </dd>
    </div>
  );
}
