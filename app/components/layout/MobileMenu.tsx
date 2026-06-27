"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "../../lib/data";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="p-2 rounded-md text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 inset-x-0 bg-[var(--color-bg)] border-b border-[var(--color-border)] shadow-lg px-4 py-6 flex flex-col gap-4"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors py-1"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 text-center text-sm font-medium bg-[var(--color-accent)] text-white px-4 py-2.5 rounded-lg hover:bg-[var(--color-accent-hover)] transition-colors"
            >
              Start a project
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
