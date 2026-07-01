"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradientBlobProps {
  className?: string;
  delay?: number;
  color?: "primary" | "accent" | "emerald" | "aqua" | "mint" | "teal";
}

export function GradientBlob({ className, delay = 0, color = "accent" }: GradientBlobProps) {
  const colors = {
    primary: "bg-[#10B981]", // We'll rely on opacity for softness
    accent: "bg-[#10B981]",
    emerald: "bg-[#10B981]",
    aqua: "bg-[#06B6D4]",
    mint: "bg-[#34D399]",
    teal: "bg-[#14B8A6]",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: [0.06, 0.15, 0.06],
        scale: [1, 1.05, 1],
        x: [0, 20, -15, 0],
        y: [0, -25, 15, 0],
      }}
      transition={{
        duration: 30, // Very slow ambient drift
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
        delay: delay,
      }}
      className={cn(
        "absolute rounded-full filter blur-[120px] pointer-events-none mix-blend-screen",
        colors[color] || colors.emerald,
        className
      )}
    />
  );
}
