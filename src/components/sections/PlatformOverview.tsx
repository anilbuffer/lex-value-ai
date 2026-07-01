"use client";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { motion } from "framer-motion";
import { FileText, Brain, Sparkles, Shield, Users, Activity } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Medical Chronology",
    description: "Every visit, every provider, every finding — structured, dated, and cited to source page."
  },
  {
    icon: Brain,
    title: "Case Intelligence",
    description: "Six litigation-critical flags surfaced automatically, drawn from defense-side evaluation."
  },
  {
    icon: Sparkles,
    title: "Narrative Summary",
    description: "Draft demand narrative ready for attorney review, with every claim traceable to a page."
  },
  {
    icon: Shield,
    title: "PHI Wall",
    description: "PHI tokenized before any LLM contact. Raw patient data never enters a prompt."
  },
  {
    icon: Users,
    title: "Firm-Wide Workspace",
    description: "Managing Partner, Attorney, Paralegal roles with tenant-isolated case access."
  },
  {
    icon: Activity,
    title: "Audit-Grade Logging",
    description: "Every access, upload, and export logged for six years in append-only storage."
  }
];

export function PlatformOverview() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <SectionContainer className="bg-background-warm py-24" id="platform">
      <div className="w-full max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white bg-[#FAFAFA] border border-white shadow-[0_32px_64px_rgba(8,48,42,0.06),0_16px_24px_rgba(8,48,42,0.04)] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00c37a]"></span>
            <span className="text-[10px] font-bold text-[#08302a]/70 uppercase tracking-widest">Platform</span>
          </div>
          
          <h2 className="font-display text-[36px] md:text-[48px] lg:text-[56px] tracking-tight text-[#08302a] leading-[1.055] mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c37a] to-[#08302a]">One workspace.</span> Every record.<br className="hidden md:block" />
            The whole case, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c37a] to-[#08302a]">understood.</span>
          </h2>
          
          <p className="text-lg md:text-[16px] text-[#08302a]/80 font-medium leading-[1.6]">
            Purpose-built for plaintiff-side PI litigation — not a general legal LLM wrapper. Every feature earns its place in the workflow.
          </p>
        </div>

        {/* Features Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#FAFAFA] border border-white shadow-[0_32px_64px_rgba(8,48,42,0.04),0_16px_24px_rgba(8,48,42,0.02)] rounded-[32px] p-8 md:p-10 flex flex-col items-start hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-[#08302a] flex items-center justify-center mb-6 text-white shadow-sm">
                <feature.icon size={20} strokeWidth={1.5} />
              </div>
              
              <h3 className="font-display text-[20px] font-semibold text-[#08302a] mb-3">
                {feature.title}
              </h3>
              
              <p className="text-[14px] text-[#08302a]/70 leading-[1.6] font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </SectionContainer>
  );
}
