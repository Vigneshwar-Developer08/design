"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";

const STEPS = [
  { num: "01", title: "Discovery", desc: "We learn your business, audience, and goals before touching any tool." },
  { num: "02", title: "Strategy", desc: "Information architecture, content hierarchy, and a clear creative direction." },
  { num: "03", title: "Design", desc: "High-fidelity screens, design system, motion principles — reviewed together." },
  { num: "04", title: "Build", desc: "Production Next.js, pixel-perfect implementation, performance-first." },
  { num: "05", title: "Launch", desc: "Deployment, QA, handoff — and we stay reachable after go-live." },
];

export default function ProcessStrip() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="py-24 md:py-28 bg-[var(--color-card)] border-y border-[var(--color-border)] overflow-visible"
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div>
            <FadeIn delay={0.05} direction="none">
              <SectionLabel>How we work</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.12}>
              <h2 id="process-heading" className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] leading-tight">
                From brief to live.
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.18} direction="left">
            <p className="text-[var(--color-text-secondary)] text-sm md:text-base max-w-xs leading-relaxed">
              Five phases, zero surprises. We believe in clear process and cleaner communication.
            </p>
          </FadeIn>
        </div>

        {/* The Blocks Container */}
        <div 
          className="relative flex flex-col lg:flex-row border border-[var(--color-border)] rounded-2xl bg-[var(--color-bg)] p-2 gap-2 transition-all duration-500 overflow-visible"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {STEPS.map((step, i) => {
            const isHovered = hoveredIndex === i;
            const isAnyHovered = hoveredIndex !== null;
            const isSibling = isAnyHovered && !isHovered;

            return (
              <div key={step.num} className="relative flex-1 group">
                {/* Divider Line: visible on desktop, hides when any card is hovered */}
                {i > 0 && (
                  <div
                    className={`hidden lg:block absolute left-[-4px] top-6 bottom-6 w-px bg-[var(--color-border)] transition-opacity duration-300 pointer-events-none ${
                      isAnyHovered ? "opacity-0" : "opacity-100"
                    }`}
                  />
                )}

                <FadeIn delay={i * 0.07} direction="up" className="h-full">
                  <motion.div
                    onMouseEnter={() => setHoveredIndex(i)}
                    className={`relative p-6 h-full flex flex-col gap-4 rounded-xl cursor-pointer bg-[var(--color-bg)] border transition-colors duration-300 ${
                      isHovered
                        ? "border-sky-400/70 shadow-[0_0_0_1px_rgba(56,189,248,0.25),0_20px_50px_rgba(56,189,248,0.10)] bg-[var(--color-bg)] z-10"
                        : "border-transparent bg-transparent"
                    }`}
                    animate={{
                      y: isHovered ? -8 : 0,
                      scale: isHovered ? 1.03 : isSibling ? 0.97 : 1,
                      opacity: isSibling ? 0.6 : 1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  >
                    <span
                      className={`text-xs font-bold tracking-widest transition-colors duration-300 ${
                        isHovered ? "text-[var(--color-accent)]" : "text-indigo-400"
                      }`}
                    >
                      {step.num}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-1.5 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                </FadeIn>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

