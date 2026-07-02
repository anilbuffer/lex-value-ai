"use client";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const comparisonData = [
  {
    capability: "Time to chronology",
    manual: "3–6 weeks",
    generic: "Hours + hallucinations",
    lexvalue: "Minutes, source-cited"
  },
  {
    capability: "Source citations",
    manual: "Manual",
    generic: "Rare or fabricated",
    lexvalue: "Every claim, page-linked"
  },
  {
    capability: "Defense-perspective flags",
    manual: "—",
    generic: "—",
    lexvalue: "Six, automatic"
  },
  {
    capability: "PHI handling",
    manual: "Manual redaction",
    generic: "Sent raw to LLM",
    lexvalue: "Tokenized before LLM"
  },
  {
    capability: "HIPAA + BAA",
    manual: "Firm's responsibility",
    generic: "Rarely",
    lexvalue: "Built-in"
  },
  {
    capability: "Human review",
    manual: "Every line",
    generic: "None",
    lexvalue: "Drafts, attorney-approved"
  }
];

export function Comparison() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <SectionContainer className="bg-background-warm relative overflow-hidden" id="comparison">
      {/* Centered background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#00c37a]/15 blur-[120px] rounded-[100%] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 relative z-10">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAFAFA] border border-white shadow-[0_32px_64px_rgba(8,48,42,0.06),0_16px_24px_rgba(8,48,42,0.04)] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00c37a]"></span>
            <span className="text-[10px] font-bold text-[#08302a]/70 uppercase tracking-widest">WHY lexvalue AI</span>
          </div>

          <h2 className="font-display text-[36px] md:text-[48px] lg:text-[52px] tracking-tight text-[#08302a] leading-[1.055] max-w-3xl mx-auto mb-8">
            We don't just summarize. We think<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c37a] to-[#08302a]">like the defense.</span>
          </h2>
        </div>

        {/* Table Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-[24px] p-2 md:p-3 shadow-sm border border-white overflow-x-auto"
        >
          <div className="min-w-[800px] grid grid-cols-[1.5fr_1fr_1fr_1.2fr]">

            {/* Headers */}
            <div className="px-6 py-4 text-[11px] font-bold text-[#869591] uppercase tracking-widest border-b border-gray-100">
              CAPABILITY
            </div>
            <div className="px-6 py-4 text-[11px] font-bold text-[#869591] uppercase tracking-widest border-b border-gray-100">
              MANUAL REVIEW
            </div>
            <div className="px-6 py-4 text-[11px] font-bold text-[#869591] uppercase tracking-widest border-b border-gray-100">
              GENERIC AI
            </div>
            <div className="px-8 py-4 text-[11px] font-bold text-white uppercase tracking-widest bg-[#123e35] rounded-t-[24px] border-b border-white/10">
              lexvalue AI
            </div>

            {/* Data Rows */}
            {comparisonData.map((row, index) => {
              const isLast = index === comparisonData.length - 1;
              return (
                <div key={index} className="contents group">
                  {/* Capability Column */}
                  <div className={cn("px-6 py-4 md:py-4 flex items-center text-[14px] md:text-[15px] font-semibold text-[#1f3a34]", !isLast && "border-b border-gray-100")}>
                    {row.capability}
                  </div>

                  {/* Manual Column */}
                  <div className={cn("px-6 py-4 md:py-4 flex items-center gap-3 text-[14px] md:text-[15px] font-medium text-[#7a8a86]", !isLast && "border-b border-gray-100")}>
                    <X size={14} strokeWidth={2.5} className="text-[#a0ada9] shrink-0" />
                    {row.manual}
                  </div>

                  {/* Generic Column */}
                  <div className={cn("px-6 py-4 md:py-4 flex items-center gap-3 text-[14px] md:text-[15px] font-medium text-[#7a8a86]", !isLast && "border-b border-gray-100")}>
                    <X size={14} strokeWidth={2.5} className="text-[#a0ada9] shrink-0" />
                    {row.generic}
                  </div>

                  {/* lexvalue Column */}
                  <div className={cn("px-8 py-4 md:py-4 flex items-center gap-3 text-[14px] md:text-[15px] font-semibold text-white bg-[#123e35]", !isLast && "border-b border-white/10", isLast && "rounded-b-[24px]")}>
                    <Check size={16} strokeWidth={3} className="text-[#00c37a] shrink-0" />
                    {row.lexvalue}
                  </div>
                </div>
              );
            })}

          </div>
        </motion.div>

      </div>
    </SectionContainer>
  );
}
