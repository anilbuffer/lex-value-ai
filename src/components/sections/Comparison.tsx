"use client";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const comparisonData = [
  {
    workflow: "Time from upload to chronology",
    manual: "3–7 days",
    ai: "4 minutes"
  },
  {
    workflow: "Defense-side flag detection",
    manual: "Manual, inconsistent",
    ai: "Automatic, every case"
  },
  {
    workflow: "Source-page citations",
    manual: "Sometimes",
    ai: "Every claim, always"
  },
  {
    workflow: "HIPAA architecture",
    manual: "General cloud tools",
    ai: "BAA-covered, PHI-walled"
  },
  {
    workflow: "Cost per average case",
    manual: "$3,800+ paralegal",
    ai: "Fixed monthly seat"
  },
  {
    workflow: "Firm-wide role dashboards",
    manual: "Ad-hoc",
    ai: "Native workflow"
  }
];

export function Comparison() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <SectionContainer className="bg-background-warm py-24" id="comparison">
      <div className="w-full max-w-5xl mx-auto px-6">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white bg-[#FAFAFA] border border-white shadow-[0_32px_64px_rgba(8,48,42,0.06),0_16px_24px_rgba(8,48,42,0.04)] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00c37a]"></span>
            <span className="text-[10px] font-bold text-[#08302a]/70 uppercase tracking-widest">Comparison</span>
          </div>

          <h2 className="font-display text-[36px] md:text-[48px] lg:text-[56px] tracking-tight text-[#08302a] leading-[1.055]">
            The manual workflow<br className="hidden md:block" />
            vs. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c37a] to-[#08302a]">CaseChron AI.</span>
          </h2>
        </div>

        {/* Comparison Table */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[#FAFAFA] border border-white shadow-[0_32px_64px_rgba(8,48,42,0.04),0_16px_24px_rgba(8,48,42,0.02)] rounded-[32px] overflow-hidden"
        >
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-4 p-8 pb-4 border-b border-[#08302a]/5">
            <div className="text-[11px] font-bold text-[#08302a]/50 uppercase tracking-widest">Workflow</div>
            <div className="hidden md:block text-[11px] font-bold text-[#08302a]/50 uppercase tracking-widest">Manual Review</div>
            <div className="hidden md:block text-[11px] font-bold text-[#08302a]/70 uppercase tracking-widest">Lex Value AI</div>
          </div>

          {/* Table Rows */}
          <div className="flex flex-col">
            {comparisonData.map((row, index) => (
              <motion.div
                key={index}
                variants={rowVariants}
                className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-4 p-8 border-b border-[#08302a]/5 last:border-b-0 items-center hover:bg-[#08302a]/[0.02] transition-colors"
              >
                {/* Column 1 */}
                <div className="text-[15px] font-semibold text-[#08302a]">
                  {row.workflow}
                </div>

                {/* Column 2 */}
                <div className="text-[14px] font-medium text-[#08302a]/50 flex items-center gap-2">
                  <span className="md:hidden text-[11px] font-bold text-[#08302a]/40 uppercase tracking-widest mr-2">Manual:</span>
                  {row.manual}
                </div>

                {/* Column 3 */}
                <div className="text-[14px] font-semibold text-[#08302a] flex items-center gap-2.5">
                  <span className="md:hidden text-[11px] font-bold text-[#00c37a] uppercase tracking-widest mr-2">AI:</span>
                  <CheckCircle2 size={16} className="text-[#00c37a]" strokeWidth={2.5} />
                  {row.ai}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </SectionContainer>
  );
}
