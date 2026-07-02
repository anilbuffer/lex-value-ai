"use client";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { motion } from "framer-motion";

export function FounderStory() {
  return (
    <SectionContainer className="bg-background-warm" id="founder-story">
      <div className="w-full max-w-[1000px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-white shadow-[0_8px_40px_rgba(0,0,0,0.03)] rounded-[32px] md:rounded-[48px] p-8 md:p-16 lg:p-20 relative overflow-hidden flex flex-col items-center text-center"
        >
          {/* Subtle top-left green glow */}
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#e6f4ef] rounded-full blur-[80px] pointer-events-none opacity-80" />

          <div className="relative z-10 w-full flex flex-col items-center">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAFAFA] border border-white shadow-[0_32px_64px_rgba(8,48,42,0.06),0_16px_24px_rgba(8,48,42,0.04)] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00c37a]"></span>
              <span className="text-[10px] font-bold text-[#08302a]/70 uppercase tracking-widest">FOUNDER CREDIBILITY</span>
            </div>

            {/* Quote */}
            <h2 className="font-display text-[24px] md:text-[32px] lg:text-[36px] tracking-tight text-[#08302a] leading-[1.3] md:leading-[1.4] font-medium max-w-[800px] mb-12">
              “Built by professionals with deep experience on the defense side of personal injury litigation — bringing the exact institutional knowledge insurers use internally directly into plaintiff workflows.”
            </h2>

            {/* Signature Block */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#123e35] flex items-center justify-center text-white font-medium tracking-wide">
                LV
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[15px] font-medium text-[#123e35]">Lex Value AI Founding Team</span>
                <span className="text-[13px] font-medium text-[#546a65]">Former Defense-Side PI Evaluators</span>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </SectionContainer>
  );
}
