"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "../../lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
}

const variants: Record<string, Variants> = {
  up:    { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } },
  down:  { hidden: { opacity: 0, y: -28 }, visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: 28 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: -28 }, visible: { opacity: 1, x: 0 } },
  none:  { hidden: { opacity: 0 }, visible: { opacity: 1 } },
};

export default function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.55,
}: FadeInProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={variants[direction]}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
