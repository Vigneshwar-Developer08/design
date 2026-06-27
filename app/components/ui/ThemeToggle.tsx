"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Read theme from localStorage or document class
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-9 h-9 flex items-center justify-center rounded-lg border border-[var(--color-border)] hover:bg-[var(--color-card)] transition-colors duration-250 cursor-pointer text-[var(--color-text-primary)]"
      aria-label="Toggle visual theme"
      data-cursor-hover
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "light" ? (
          <motion.div
            key="light"
            initial={{ rotate: -45, opacity: 0, scale: 0.8 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 45, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <Moon size={18} />
          </motion.div>
        ) : (
          <motion.div
            key="dark"
            initial={{ rotate: 45, opacity: 0, scale: 0.8 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -45, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <Sun size={18} />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
