"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  variant?: "fade-up" | "fade-in" | "scale-in" | "slide-right";
  delay?: number;
}

export function ScrollReveal({ children, className, variant = "fade-up", delay = 0 }: ScrollRevealProps) {
  const getVariants = () => {
    switch (variant) {
      case "fade-in":
        return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
      case "scale-in":
        return { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } };
      case "slide-right":
        return { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } };
      case "fade-up":
      default:
        return { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };
    }
  };

  return (
    <motion.div
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
