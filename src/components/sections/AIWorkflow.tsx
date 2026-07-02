"use client";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { motion } from "framer-motion";
import { FileText, Zap, Shield, Brain, Sparkles, CheckCircle2 } from "lucide-react";

const stages = [
  {
    num: "01",
    icon: FileText,
    title: "Ingestion",
    description: "PDFs land in AES-256 encrypted S3, case-scoped."
  },
  {
    num: "02",
    icon: Zap,
    title: "OCR & Extraction",
    description: "AWS Textract + pdfplumber cover every quality of scan."
  },
  {
    num: "03",
    icon: Shield,
    title: "PHI Wall",
    description: "Names, DOBs, IDs tokenized before any LLM contact."
  },
  {
    num: "04",
    icon: Brain,
    title: "Chunk & Embed",
    description: "Page-aware chunks vectorized into pgvector."
  },
  {
    num: "05",
    icon: Sparkles,
    title: "AI Analysis",
    description: "GPT-4o over RAG. Every claim cited. Low confidence → human review."
  },
  {
    num: "06",
    icon: CheckCircle2,
    title: "Rendered Output",
    description: "Chronology, flags, and narrative in the attorney's dashboard."
  }
];

export function AIWorkflow() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <SectionContainer className="bg-background-warm" id="ai-pipeline">
      <div className="w-full max-w-7xl mx-auto px-6">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow-sm border border-white/50 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00c37a]"></span>
            <span className="text-[11px] font-bold text-[#546a65] uppercase tracking-widest">AI Pipeline</span>
          </div>

          <h2 className="font-display text-[34px] md:text-[42px] lg:text-[48px] tracking-tight text-[#08302a] leading-[1.055]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c37a] to-[#08302a]">Six stages. Zero raw PHI</span><br className="hidden md:block" />
            leaves your walls.
          </h2>
        </div>

        {/* Pipeline Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {stages.map((stage, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white border border-[#f0ebe1]/50 shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-[24px] p-8 md:p-10 flex flex-col hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden"
            >
              {/* Top Row: Icon & Number */}
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="section-icon">
                  <stage.icon size={20} strokeWidth={1.5} />
                </div>
                <div className="font-display text-[28px] font-medium text-[#12a170]">
                  {stage.num}
                </div>
              </div>

              {/* Bottom Row: Content */}
              <h3 className="font-display text-[20px] font-semibold text-[#08302a] mb-3 relative z-10">
                {stage.title}
              </h3>

              <p className="text-[14px] text-[#546a65] leading-[1.6] font-medium relative z-10">
                {stage.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </SectionContainer>
  );
}
