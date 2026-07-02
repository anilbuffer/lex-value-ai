"use client";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const workflowSteps = [
  "Upload",
  "OCR",
  "AI Analysis",
  "Attorney Review",
  "Demand Package",
  "Settlement"
];

const metrics = [
  {
    value: 20,
    suffix: "x",
    label: "Faster turnaround",
    color: "text-[#124d41]"
  },
  {
    value: 90,
    suffix: "%",
    label: "Less manual review",
    color: "text-[#108365]"
  },
  {
    value: 1284,
    suffix: "+",
    label: "Pages per case",
    color: "text-[#124d41]"
  },
  {
    value: 20,
    suffix: " min",
    label: "From upload to draft",
    color: "text-[#00a36a]"
  }
];

export function WorkflowROI() {
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
    <SectionContainer className="bg-background-warm relative" id="workflow-roi">
      {/* Subtle grid background pattern if needed, but keeping it clean */}
      <div className="w-full max-w-7xl mx-auto px-6">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00c37a]"></span>
            <span className="text-[10px] font-bold text-[#08302a]/70 uppercase tracking-widest">WORKFLOW & ROI</span>
          </div>

          <h2 className="font-display text-[34px] md:text-[42px] lg:text-[48px] tracking-tight text-[#08302a] leading-[1.1] mb-8">
            Fits your existing process — and<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c37a] to-[#08302a]">pays for itself fast.</span>
          </h2>
        </div>

        {/* Workflow Diagram */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-20 max-w-7xl mx-auto">
          {workflowSteps.map((step, index) => (
            <div key={index} className="flex items-center gap-2 md:gap-4">
              <div className="glass-panel px-5 md:px-8 py-3 md:py-4 rounded-[16px]">
                <span className="text-[#08302a]/80 text-[14px] md:text-[15px] font-medium whitespace-nowrap">{step}</span>
              </div>
              {index < workflowSteps.length - 1 && (
                <ArrowRight size={18} strokeWidth={2.5} className="text-[#00c37a] shrink-0" />
              )}
            </div>
          ))}
        </div>

        {/* Metrics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-panel rounded-[18px] md:rounded-[24px] p-6 md:p-10 flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-transform duration-300 group"
            >
              {/* Right-side glow (Default) */}
              <div className="!absolute top-1/2 -right-1/4 w-[100%] h-[120%] -translate-y-1/2 bg-[#e6f4ef] rounded-full blur-[40px] pointer-events-none opacity-80 !z-0" />

              <h3 className={`font-display text-[34px] md:text-[42px] lg:text-[48px] font-medium leading-[1] mb-2 md:mb-4 relative z-10 ${metric.color}`}>
                <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              </h3>
              <p className="text-[13px] md:text-[15px] text-[#546a65] font-medium relative z-10">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </SectionContainer>
  );
}
