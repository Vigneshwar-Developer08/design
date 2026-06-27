"use client";

import Link from "next/link";
import { useScrolled } from "../../hooks/useScrolled";
import { NAV_LINKS } from "../../lib/data";
import { cn } from "../../lib/utils";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "../ui/ThemeToggle";

export default function Navbar() {
  const scrolled = useScrolled(20);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-[var(--color-border)] shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav
        className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-semibold text-[var(--color-text-primary)] text-lg tracking-tight hover:opacity-70 transition-opacity"
          aria-label="Forma Studio — home"
        >
          Forma<span className="text-[var(--color-accent)]">.</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="#contact"
            className="text-sm font-medium bg-[var(--color-accent)] text-white px-4 py-2 rounded-lg hover:bg-[var(--color-accent-hover)] transition-colors duration-200"
          >
            Start a project
          </Link>
        </div>

        {/* Mobile menu and Theme Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}

