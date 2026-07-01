"use client";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { motion } from "framer-motion";
import { Scale } from "lucide-react";

export function FounderStory() {
  return (
    <SectionContainer className="bg-background-warm py-24" id="founder-story">
      <div className="w-full max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#FAFAFA] border border-white shadow-[0_32px_64px_rgba(8,48,42,0.04),0_16px_24px_rgba(8,48,42,0.02)] rounded-[32px] p-8 md:p-12 lg:p-16"
        >
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-center">

            {/* Left Column - Dark Card */}
            <div className="bg-[#08302a] rounded-[24px] p-12 md:p-16 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-xl aspect-square lg:aspect-auto lg:h-[480px]">
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#00c37a]/10 to-transparent opacity-50" />

              <div className="relative z-10 flex flex-col items-center gap-8">
                <div className="text-[#00c37a]">
                  <Scale size={56} strokeWidth={1.5} />
                </div>
                <h3 className="font-playfair text-[28px] md:text-[32px] leading-tight text-[#ffffff] font-medium max-w-[280px]">
                  Built for plaintiffs.<br />
                  Defense perspective.
                </h3>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="flex flex-col items-start text-left max-w-2xl">
              {/* Top Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white bg-[#FAFAFA] border border-[#08302a]/10 shadow-sm mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00c37a]"></span>
                <span className="text-[10px] font-bold text-[#08302a]/70 uppercase tracking-widest">Founder Story</span>
              </div>

              {/* Heading */}
              <h2 className="font-playfair text-[36px] md:text-[48px] lg:text-[56px] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#08302a] via-[#08302a] to-[#00c37a] leading-[1.055] mb-8">
                I spent a decade helping insurance carriers pay you less.
              </h2>

              {/* Paragraphs */}
              <div className="text-lg md:text-[16px] text-[#08302a]/80 font-medium leading-[1.6] space-y-6 mb-10 max-w-[540px]">
                <p>
                  Every adjuster has a checklist. Every defense counsel has a playbook. Gaps. Priors. Degenerative language. Hedged causation. That's how a <strong className="text-[#08302a] font-bold">$1.4M case becomes $340k</strong> — not through argument, but through what plaintiff's counsel didn't catch first.
                </p>
                <p>
                  Lex Value AI is that checklist — inverted. The same lens, running for you, on every case, before the demand goes out.
                </p>
              </div>

              {/* Signature Block */}
              <div className="flex items-center gap-4 border-l-2 border-[#00c37a] pl-4">
                <div>
                  <h4 className="text-[15px] font-bold text-[#08302a]">John Smith</h4>
                  <p className="text-[13px] text-[#08302a]/50 font-medium">Founder · Former Senior Claims Counsel</p>
                </div>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
