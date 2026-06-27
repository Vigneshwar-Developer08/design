"use client";

import Link from "next/link";
import { ArrowRight, MoveRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import FadeIn from "../ui/FadeIn";
import StatCard from "../ui/StatCard";

const CYCLING_WORDS = ["memorable", "precise", "purposeful", "enduring"];

const STATS = [
  { value: 60, suffix: "+", label: "Projects shipped" },
  { value: 8, suffix: "yr", label: "In the industry" },
  { value: 97, suffix: "%", label: "Client retention" },
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % CYCLING_WORDS.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--color-bg)]"
    >
      {/* Dot-grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 75% 65% at 50% 42%, black 20%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 75% 65% at 50% 42%, black 20%, transparent 100%)",
        }}
      />

      {/* Single restrained glow */}
      <div
        className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[480px] pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse at center, rgba(79,70,229,0.06) 0%, transparent 68%)",
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 pt-36 pb-24 text-center">

        {/* Availability badge */}
        <FadeIn delay={0.04} direction="none">
          <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full border border-[var(--color-border)] text-[var(--color-text-secondary)] mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
            Available for new projects
          </span>
        </FadeIn>

        {/* Headline with cycling word */}
        <FadeIn delay={0.1}>
          <h1 className="font-bold tracking-tight text-[var(--color-text-primary)] leading-[1.06] text-[clamp(2.2rem,6.5vw,4.75rem)] max-w-4xl mx-auto">
            Digital products that are{" "}
            <span className="relative inline-flex items-center justify-center" style={{ minWidth: "8ch" }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -16, filter: "blur(4px)" }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[var(--color-accent)]"
                  aria-live="polite"
                >
                  {CYCLING_WORDS[wordIndex]}.
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>
        </FadeIn>

        {/* Sub-copy */}
        <FadeIn delay={0.2}>
          <p className="mt-7 text-lg md:text-xl text-[var(--color-text-secondary)] max-w-[520px] mx-auto leading-relaxed">
            Forma Studio partners with ambitious brands to design and build digital experiences that earn attention and hold it.
          </p>
        </FadeIn>

        {/* CTAs */}
        <FadeIn delay={0.3}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="#portfolio"
              className="group inline-flex items-center gap-2 bg-[var(--color-accent)] text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[var(--color-accent-hover)] transition-colors duration-200"
            >
              View our work
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-primary)] px-5 py-2.5 rounded-lg border border-[var(--color-border)] hover:border-slate-400 transition-colors duration-200"
            >
              Start a project
              <MoveRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>
        </FadeIn>

        {/* Stats with count-up */}
        <FadeIn delay={0.42}>
          <dl className="mt-20 grid grid-cols-3 gap-px bg-[var(--color-border)] border border-[var(--color-border)] rounded-xl overflow-hidden max-w-sm mx-auto">
            {STATS.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </dl>
        </FadeIn>

        {/* Scroll cue */}
        <FadeIn delay={0.55} direction="none">
          <motion.div
            className="mt-16 flex justify-center"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          >
            <div className="flex flex-col items-center gap-1">
              <div className="w-px h-10 bg-gradient-to-b from-transparent to-[var(--color-border)]" />
              <div className="w-1 h-1 rounded-full bg-[var(--color-text-secondary)] opacity-50" />
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
