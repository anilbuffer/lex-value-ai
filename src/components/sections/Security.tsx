"use client";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { motion } from "framer-motion";
import { ShieldCheck, Key, Fingerprint, FileText, Database, Server, ArrowRight } from "lucide-react";

const securityFeatures = [
  {
    icon: ShieldCheck,
    title: "HIPAA Compliant",
    description: "BAA-backed across every AWS service touching PHI."
  },
  {
    icon: Key,
    title: "AES-256 & TLS 1.3",
    description: "Encrypted at rest and in transit, end to end."
  },
  {
    icon: Fingerprint,
    title: "PHI Tokenization",
    description: "Raw PHI never enters an LLM prompt. Ever."
  },
  {
    icon: FileText,
    title: "Audit Logging",
    description: "Append-only logs retained six years minimum."
  },
  {
    icon: Database,
    title: "Row-Level Security",
    description: "Tenant isolation enforced in PostgreSQL."
  },
  {
    icon: Server,
    title: "Your AWS Account",
    description: "Deploy to infrastructure you own and control."
  }
];

const workflowSteps = ["Upload", "Tokenize", "Vector", "AI", "Review"];

export function Security() {
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
    <SectionContainer className="bg-background-warm" id="security">
      <div className="w-full max-w-6xl mx-auto px-6">

        <div className="bg-[#08302a] bg-gradient-to-br from-[#12604f] via-[#08302a] to-[#020d0b] border border-[#00c37a]/60 rounded-[24px] md:rounded-[40px] p-8 md:p-12 lg:p-14 shadow-2xl relative overflow-hidden">
          {/* Subtle Glow Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00c37a]/40 rounded-full blur-[140px] z-[0] pointer-events-none" />
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[100%] bg-[#00c37a]/25 blur-[120px] rounded-full pointer-events-none" />

          {/* Header */}
          <div className="mb-12 relative ">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#1a443a] mb-6">
              <span className="text-[10px] font-bold text-[#00c37a] uppercase tracking-widest">Security & Compliance</span>
            </div>

            <h2 className="font-display text-[32px] md:text-[42px] lg:text-[48px] tracking-tight text-white leading-[1.1]">
              Compliance built into every layer — not bolted on.
            </h2>
          </div>

          {/* 2x3 Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10"
          >
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-black/20 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)] rounded-[24px] p-6 flex flex-col hover:bg-black/30 transition-colors duration-300"
              >
                <feature.icon size={20} strokeWidth={1.5} className="text-[#00c37a] mb-5" />

                <h3 className="text-white text-[16px] font-medium mb-2">
                  {feature.title}
                </h3>

                <p className="text-[#9baea9] text-[13px] leading-[1.6]">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Workflow Bottom Bar */}
          <div className="bg-black/20 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)] rounded-2xl md:rounded-[24px] p-4 md:p-6 flex flex-wrap items-center justify-center gap-2 md:gap-4 lg:gap-6">
            {workflowSteps.map((step, index) => (
              <div key={index} className="flex items-center gap-2 md:gap-4 lg:gap-6">
                <div className="bg-white/5 border border-white/10 px-4 md:px-6 py-2 rounded-full">
                  <span className="text-white/90 text-[13px] font-medium">{step}</span>
                </div>
                {index < workflowSteps.length - 1 && (
                  <ArrowRight size={16} strokeWidth={2.5} className="text-[#00c37a]" />
                )}
              </div>
            ))}
          </div>

        </div>

      </div>
    </SectionContainer>
  );
}
