"use client";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { motion } from "framer-motion";
import { FileText, Zap, Shield, Brain, Sparkles, CheckCircle2 } from "lucide-react";

const stages = [
  {
    num: "01",
    icon: FileText,
    title: "Upload",
    description: "Drag-and-drop medical records. Scanned, handwritten, or digital PDFs."
  },
  {
    num: "02",
    icon: Zap,
    title: "Extract",
    description: "AWS Textract + pdfplumber preserve page structure through OCR."
  },
  {
    num: "03",
    icon: Shield,
    title: "Tokenize PHI",
    description: "Names, DOBs, providers replaced with reference tokens. The security wall."
  },
  {
    num: "04",
    icon: Brain,
    title: "Embed",
    description: "Chunks embedded to pgvector with document + page metadata."
  },
  {
    num: "05",
    icon: Sparkles,
    title: "Reason",
    description: "GPT-4o retrieves only the relevant chunks and builds the chronology."
  },
  {
    num: "06",
    icon: CheckCircle2,
    title: "Deliver",
    description: "Cited chronology, six flags, and demand narrative — notified by email."
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
              className="bg-white border border-[#e8e3d9] shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-[24px] p-8 md:p-10 flex flex-col hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,195,122,0.12)] hover:border-[#00c37a]/40 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Right-side glow (Default) */}
              <div className="absolute top-1/2 -right-1/4 w-[80%] h-[80%] -translate-y-1/2 bg-[#e6f4ef] rounded-full blur-[60px] pointer-events-none opacity-80 z-0" />

              {/* Inner Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00c37a]/[0.08] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

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
