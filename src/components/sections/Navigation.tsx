"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Gavel } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navigation() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  return (
    <motion.header
      className={cn(
        "fixed left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-6xl z-50 transition-all duration-300",
        "py-2.5 px-4 bg-white/70 backdrop-blur-md border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.04)] rounded-full",
        isScrolled ? "top-2 bg-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.08)]" : "top-6"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-center justify-between w-full pl-2">
        <div className="flex items-center gap-3">
          <div className="bg-[#0f2e24] text-white p-2 rounded-full flex items-center justify-center">
            <Gavel size={18} strokeWidth={2} />
          </div>
          <span className="font-semibold text-lg tracking-tight text-[#0f2e24]">CaseChron<span className="text-emerald-500">.AI</span></span>
        </div>

        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-[#4a5f58]">
          <a href="#platform" className="hover:text-[#0f2e24] transition-colors">Platform</a>
          <a href="#intelligence" className="hover:text-[#0f2e24] transition-colors">Intelligence</a>
          <a href="#engine" className="hover:text-[#0f2e24] transition-colors">AI Engine</a>
          <a href="#security" className="hover:text-[#0f2e24] transition-colors">Security</a>
          <a href="#faq" className="hover:text-[#0f2e24] transition-colors">FAQ</a>
        </nav>

        <div className="flex items-center gap-6">
          <a href="#login" className="hidden md:block font-medium text-sm text-[#4a5f58] hover:text-[#0f2e24] transition-colors">Sign in</a>
          <Button size="sm" className="rounded-full bg-[#0f2e24] hover:bg-[#0a1f18] text-white px-5 py-2 h-auto text-sm font-medium border-none shadow-none">Request demo</Button>
        </div>
      </div>
    </motion.header>
  );
}
