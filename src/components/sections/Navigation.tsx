"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Umbrella } from "lucide-react";
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
        "fixed left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-50 transition-all duration-300",
        "py-2.5 px-3 bg-white/70 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,195,122,0.12),0_2px_8px_rgba(0,0,0,0.04)] rounded-full",
        isScrolled ? "top-2 bg-white/80" : "top-6"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2.5 pl-1">
          <div className="bg-[#08302a] text-[#00c37a] p-2 rounded-full flex items-center justify-center shadow-[0_0_12px_rgba(0,195,122,0.3)]">
            <Umbrella size={18} strokeWidth={2} />
          </div>
          <span className="font-bold text-[17px] tracking-tight text-[#08302a]">LexValue<span className="text-[#00c37a]">.AI</span></span>
        </div>

        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-[#4a5f58]">
          {[
            { name: "Platform", id: "platform" },
            { name: "Intelligence", id: "case-intelligence" },
            { name: "How it works", id: "ai-pipeline" },
            { name: "Pricing", id: "pricing" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(item.id);
                if (element) {
                  const navHeight = 100;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.scrollY - navHeight;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                  });
                }
              }}
              className="hover:text-[#08302a] transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6 pr-1">
          <a href="#login" className="hidden md:block font-medium text-sm text-[#4a5f58] hover:text-[#08302a] transition-colors">Sign in</a>
          <Button size="sm" className="rounded-full bg-[#08302a] hover:bg-[#051c18] text-white px-6 py-2.5 h-auto text-sm font-medium border border-[#00c37a]/30 shadow-[0_0_15px_rgba(0,195,122,0.4)] hover:shadow-[0_0_25px_rgba(0,195,122,0.6)] transition-all duration-300">Request demo</Button>
        </div>
      </div>
    </motion.header>
  );
}
