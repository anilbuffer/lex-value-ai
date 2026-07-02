"use client";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { motion } from "framer-motion";
import { Clock, Heart, Scale, Stethoscope, Activity, FileText } from "lucide-react";

const flags = [
  {
    icon: Clock,
    title: "Treatment Gaps",
    quote: '"47-day gap between PT sessions"',
    description: "Defense argues the condition resolved or was minor.",
    doc: "Records p. 88 → p. 121",
    conf: { val: "76% conf.", color: "gray" }
  },
  {
    icon: Heart,
    title: "Pre-Existing Conditions",
    quote: '"Prior lumbar complaint (aggravated)"',
    description: "Distinguishes aggravation (supports) vs. unrelated (defense).",
    doc: "Intake p. 12",
    conf: { val: "82% conf.", color: "orange" }
  },
  {
    icon: Scale,
    title: "Causation Language",
    quote: '""Directly attributable to the collision""',
    description: "Strong treating-physician causation drives demand value.",
    doc: "Ortho note p. 138",
    conf: { val: "88% conf.", color: "green" }
  },
  {
    icon: Stethoscope,
    title: "Surgical Recommendations",
    quote: '"L4-L5 microdiscectomy recommended"',
    description: "Significantly increases case value — surfaced instantly.",
    doc: "Surgical consult p. 138",
    conf: { val: "94% conf.", color: "green" }
  },
  {
    icon: Activity,
    title: "Permanency Indicators",
    quote: '"MMI reached · 12% impairment"',
    description: "Directly affects the damages calculation.",
    doc: "IME p. 204",
    conf: { val: "79% conf.", color: "orange" }
  },
  {
    icon: FileText,
    title: "Degenerative Findings",
    quote: '"Pre-incident disc degeneration"',
    description: "Flagged with pre/post-incident context to counter defense.",
    doc: "Radiology p. 61",
    conf: { val: "71% conf.", color: "gray" }
  }
];

const confColors = {
  gray: "bg-[#e5e1db] text-[#546a65]",
  orange: "bg-[#fbe7c8] text-[#d48937]",
  green: "bg-[#d3efe2] text-[#468e6f]"
};

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
    <SectionContainer className="bg-background-warm" id="case-intelligence">
      <div className="w-full max-w-7xl mx-auto px-6">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAFAFA] border border-white shadow-[0_32px_64px_rgba(8,48,42,0.06),0_16px_24px_rgba(8,48,42,0.04)] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00c37a]"></span>
            <span className="text-[10px] font-bold text-[#08302a]/70 uppercase tracking-widest">AI Case Intelligence</span>
          </div>

          <h2 className="font-display text-[34px] md:text-[42px] lg:text-[48px] tracking-tight text-[#08302a] leading-[1.055] mb-6">
            The six flags an adjuster <br className="hidden md:block" /> uses to cut
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c37a] to-[#08302a]"> your case value.</span>
          </h2>

          <p className="text-lg md:text-[16px] text-[#546a65] font-medium leading-[1.6]">
            Encoded from real defense-side evaluation experience — surfaced first, so you can<br className="hidden md:block" />
            prepare a response before a demand goes out.
          </p>
        </div>

        {/* Flags Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {flags.map((flag, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white border border-[#f0ebe1]/50 shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-[24px] p-8 flex flex-col hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Top Row: Icon & Confidence Pill */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#e6f4ef] flex items-center justify-center text-[#08302a]">
                  <flag.icon size={18} strokeWidth={1.5} />
                </div>
                <div className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase ${confColors[flag.conf.color as keyof typeof confColors]}`}>
                  {flag.conf.val}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col w-full flex-grow">
                <h3 className="font-display text-[20px] font-semibold text-[#08302a] mb-5">
                  {flag.title}
                </h3>

                {/* Quote Pill */}
                <div className="bg-[#fcfbfa] border border-[#f0ebe1] rounded-xl px-4 py-3 mb-4">
                  <span className="text-[14px] text-[#546a65] font-medium">
                    {flag.quote}
                  </span>
                </div>

                <p className="text-[14px] text-[#546a65] leading-[1.6] font-medium mb-6 flex-grow">
                  {flag.description}
                </p>

                {/* Divider & Document Footer */}
                <div className="pt-4 border-t border-[#f0ebe1] flex items-center gap-2">
                  <FileText className="text-[#00c37a]" size={14} />
                  <span className="text-[#546a65] text-[12px] font-medium">
                    {flag.doc}
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
