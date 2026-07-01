"use client";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { motion } from "framer-motion";
import { Clock, Activity, Scale, Stethoscope, CheckCircle, AlertTriangle } from "lucide-react";

const flags = [
  {
    icon: Clock,
    title: "Treatment Gaps",
    description: "Defense uses gaps to argue injuries had resolved. We flag every gap with its bounding records.",
    example: "47-day gap · Mar 12 → Apr 28 · Records: Ex. 04 p.112, Ex. 07 p.3"
  },
  {
    icon: Activity,
    title: "Pre-Existing Conditions",
    description: "Aggravated vs. unrelated — we distinguish the difference, so you're never surprised by prior treatment.",
    example: "Prior L5-S1 complaint · 2019 · Aggravation supported by Dr. Hale (p.208)"
  },
  {
    icon: Scale,
    title: "Causation Language",
    description: "Strong physician attributions surfaced. Hedged, weak, or ambiguous language flagged before defense finds it.",
    example: 'Strong: "directly attributable to 3/4 MVC" — Dr. Nguyen (p.541)'
  },
  {
    icon: Stethoscope,
    title: "Surgical Recommendations",
    description: "Never buried again. Every recommendation flagged whether or not surgery was performed.",
    example: "L4-L5 fusion recommended · Ortho consult - p.782"
  },
  {
    icon: CheckCircle,
    title: "Permanency Indicators",
    description: "MMI, permanent impairment, permanent restrictions — pulled to the front of the review.",
    example: "MMI reached 06/14/24 · 12% whole-person impairment · p.1,104"
  },
  {
    icon: AlertTriangle,
    title: "Degenerative Findings",
    description: "Every degenerative reference flagged, with pre- vs. post-incident context to counter the defense argument.",
    example: "Mild L4 disc desiccation · Pre-incident (2021 MRI) · p.94"
  }
];

export function AIIntelligence() {
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
    <SectionContainer className="bg-background-warm py-24" id="case-intelligence">
      <div className="w-full max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white bg-[#FAFAFA] border border-white shadow-[0_32px_64px_rgba(8,48,42,0.06),0_16px_24px_rgba(8,48,42,0.04)] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00c37a]"></span>
            <span className="text-[10px] font-bold text-[#08302a]/70 uppercase tracking-widest">Case Intelligence</span>
          </div>
          
          <h2 className="font-playfair text-[36px] md:text-[48px] lg:text-[56px] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#08302a] via-[#08302a] to-[#00c37a] leading-[1.055] mb-6">
            The six flags defense counsel<br className="hidden md:block" />
            is already looking for.
          </h2>
          
          <p className="text-lg md:text-[16px] text-[#08302a]/80 font-medium leading-[1.6]">
            Every case, every time — surfaced before the demand goes out.
          </p>
        </div>

        {/* Flags Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {flags.map((flag, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#FAFAFA] border border-white shadow-[0_32px_64px_rgba(8,48,42,0.04),0_16px_24px_rgba(8,48,42,0.02)] rounded-[32px] p-8 flex items-start gap-6 hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Icon */}
              <div className="shrink-0 w-12 h-12 rounded-full bg-[#00c37a]/15 flex items-center justify-center text-[#08302a]">
                <flag.icon size={20} strokeWidth={1.5} />
              </div>
              
              {/* Content */}
              <div className="flex flex-col w-full">
                <h3 className="font-playfair text-[20px] font-semibold text-[#08302a] mb-2">
                  {flag.title}
                </h3>
                
                <p className="text-[15px] text-[#08302a]/70 leading-[1.6] font-medium mb-6">
                  {flag.description}
                </p>

                {/* Example Pill */}
                <div className="mt-auto bg-[#08302a]/5 border border-[#08302a]/10 rounded-full py-2.5 px-4 w-full flex items-center gap-2">
                  <span className="text-[#00c37a] text-xs leading-none">→</span>
                  <span className="font-mono text-[11px] text-[#08302a]/60 leading-none truncate block">
                    {flag.example}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </SectionContainer>
  );
}
