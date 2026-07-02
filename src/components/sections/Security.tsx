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
      <div className="w-full max-w-[1100px] mx-auto px-6">

        <div className="bg-[#0f342d] rounded-[24px] md:rounded-[40px] p-8 md:p-12 lg:p-14 shadow-xl">

          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#1a443a] mb-6">
              <span className="text-[10px] font-bold text-[#00c37a] uppercase tracking-widest">Security & Compliance</span>
            </div>

            <h2 className="font-display text-[32px] md:text-[42px] lg:text-[48px] tracking-tight text-white leading-[1.1] max-w-[600px]">
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
                className="border border-[#1c4d42] bg-[#123e35]/50 rounded-[24px] p-6 flex flex-col hover:bg-[#1a443a]/50 transition-colors duration-300"
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
          <div className="bg-[#154238] rounded-2xl md:rounded-[24px] p-4 md:p-6 flex flex-wrap items-center justify-center gap-2 md:gap-4 lg:gap-6">
            {workflowSteps.map((step, index) => (
              <div key={index} className="flex items-center gap-2 md:gap-4 lg:gap-6">
                <div className="bg-[#215247] px-4 md:px-6 py-2 rounded-full">
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
