"use client";

import Link from "next/link";
import { Umbrella } from "lucide-react";

export function Footer() {
  const links = [
    { label: "Platform", href: "#platform", isSection: true },
    { label: "How it works", href: "#ai-pipeline", isSection: true },
    { label: "Privacy", href: "#", isSection: false },
    { label: "Terms", href: "#", isSection: false },
  ];

  return (
    <footer className="w-full bg-background-warm border-t border-[#08302a]/10">
      <div className="w-full max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#08302a] flex items-center justify-center text-white shrink-0">
            <Umbrella size={14} strokeWidth={2} />
          </div>
          <div className="font-bold text-[#08302a] text-[15px] tracking-tight">
            Lex Value<span className="text-[#00c37a]">.</span>AI
          </div>
        </div>

        {/* Center: Links */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              onClick={(e) => {
                if (link.isSection) {
                  e.preventDefault();
                  const element = document.getElementById(link.href.replace('#', ''));
                  if (element) {
                    const navHeight = 100;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - navHeight;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth"
                    });
                  }
                }
              }}
              className="text-[13px] font-medium text-[#08302a]/60 hover:text-[#08302a] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: Copyright */}
        <div className="text-[12px] font-medium text-[#08302a]/50">
          © 2026 Lex Value AI · Built for plaintiff PI firms
        </div>

      </div>
    </footer>
  );
}
