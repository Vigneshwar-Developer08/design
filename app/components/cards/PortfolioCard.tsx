"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { ProjectItem } from "../../types";
import { cn } from "../../lib/utils";

interface PortfolioCardProps {
  project: ProjectItem;
  index: number;
}

export default function PortfolioCard({ project, index }: PortfolioCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group relative cursor-pointer flex flex-col"
      aria-label={project.title}
      data-cursor-hover
    >
      {/* Image container */}
      <div className="relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-slate-100 aspect-[16/10] transition-all duration-400 ease-out group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] group-hover:-translate-y-1">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />

        {/* Category tag */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-block text-[9px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[var(--color-text-primary)] shadow-sm">
            {project.category}
          </span>
        </div>
      </div>

      {/* Info below the image */}
      <div className="mt-3.5 flex items-center justify-between px-1">
        <div>
          <h3 className="font-semibold text-sm text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-xs text-[var(--color-text-secondary)] mt-0.5">{project.category}</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-[var(--color-text-primary)] border border-[var(--color-border)] group-hover:bg-[var(--color-accent)] group-hover:text-white group-hover:border-transparent transition-all duration-300">
          <ArrowUpRight size={14} aria-hidden="true" />
        </div>
      </div>
    </motion.article>
  );
}

