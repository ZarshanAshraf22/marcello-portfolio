"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  /** How much of the element must be visible to trigger (0–1). */
  amount?: number;
}

export default function FadeInUp({
  children,
  delay = 0,
  duration = 0.65,
  className = "",
  amount = 0.15,
}: FadeInUpProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
