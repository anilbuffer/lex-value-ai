"use client";

import { motion, Variants } from "framer-motion";
import { ShieldCheck, Lock, Activity, Fingerprint } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";

const complianceFeatures = [
  {
    title: "HIPAA Compliant",
    description: "BAA-covered end to end",
    icon: ShieldCheck,
  },
  {
    title: "AES-256 Encryption",
    description: "At rest and in transit",
    icon: Lock,
  },
  {
    title: "6-Year Audit Retention",
    description: "Immutable, append-only",
    icon: Activity,
  },
  {
    title: "Multi-Tenant Isolation",
    description: "Row-level in PostgreSQL",
    icon: Fingerprint,
  },
];

export function Compliance() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <SectionContainer className="py-16 bg-[#fafafa]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-7xl mx-auto flex flex-col items-center"
      >
        {/* <motion.h2
          variants={itemVariants}
          className="text-[11px] font-bold text-[#546a65] uppercase tracking-[0.2em] mb-12 text-center"
        >
          BUILT ON A COMPLIANCE FOUNDATION YOUR GC WILL SIGN OFF ON
        </motion.h2> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full px-4 lg:px-0">
          {complianceFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#fafafa] rounded-[24px] p-6 flex items-center gap-4 border border-[#08302a]/10 shadow-[0_8px_30px_rgba(8,48,42,0.04)]"
            >
              <div className="w-12 h-12 rounded-full bg-[#00c37a]/15 flex items-center justify-center shrink-0">
                <feature.icon size={20} className="text-[#08302a]" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[14px] font-bold text-[#08302a] mb-0.5">{feature.title}</h3>
                <p className="text-[12px] text-[#546a65] font-medium">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionContainer>
  );
}
