"use client";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

import { Copy, Clock, SearchX, FileText, AlarmClock, Activity, Stethoscope } from "lucide-react";

const problems = [
  {
    icon: Copy,
    title: "Thousands of pages",
    desc: "Records span dozens of providers and years.",
  },
  {
    icon: Clock,
    title: "Days of manual review",
    desc: "Paralegals read every page by hand.",
  },
  {
    icon: SearchX,
    title: "Missed treatment gaps",
    desc: "Critical flags caught late — or never.",
  },
  {
    icon: FileText,
    title: "Hidden surgical notes",
    desc: "Value-driving findings buried on page 340.",
  },
  {
    icon: AlarmClock,
    title: "Delayed demand packages",
    desc: "Cases stall while records pile up.",
  },
];

export function Problem() {
  return (
    <SectionContainer className="bg-background-warm pb-20" id="problem">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-10 items-center mb-20">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start text-left max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white bg-[#FAFAFA] border border-white shadow-[0_32px_64px_rgba(8,48,42,0.06),0_16px_24px_rgba(8,48,42,0.04)] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00c37a]"></span>
              <span className="text-[10px] font-bold text-[#08302a]/70 uppercase tracking-widest">The Problem</span>
            </div>

            <h2 className="font-display text-[36px] md:text-[48px] lg:text-[60px] tracking-tight text-[#08302a] leading-[1.055] mb-8">
              Medical record review<br className="hidden md:block" />
              is <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c37a] to-[#08302a]"> slow, costly,</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c37a] to-[#08302a]">and inconsistent.</span>
            </h2>

            <p className="text-lg md:text-[16px] text-[#08302a]/80 mb-10 font-medium leading-[1.6] max-w-[540px]">
              A junior paralegal reads a chart very differently than a senior attorney who has handled 500 cases. That gap costs firms time — and case value.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto px-8 h-14 bg-gradient-to-r from-[#0F4C43] to-[#12a170] hover:from-[#0c3e36] hover:to-[#0f8b60] text-white rounded-2xl text-[15px] font-semibold shadow-[0_8px_24px_rgba(18,161,112,0.25)] transition-all duration-300 border-none">
                Book Demo
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Visual Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#FAFAFA] rounded-[32px] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col items-center border border-white"
          >
            <div className="grid grid-cols-2 gap-4 w-full mb-6">
              {/* Card 1 */}
              <div className="bg-white rounded-[24px] p-6 h-36 flex flex-col justify-between border border-[#f0ebe1]/50 shadow-sm">
                <Activity size={24} className="text-[#546a65]" strokeWidth={1.5} />
                <div className="space-y-2 w-full">
                  <div className="h-1.5 bg-[#e8e3d9] rounded-full w-[95%]"></div>
                  <div className="h-1.5 bg-[#e8e3d9] rounded-full w-[70%]"></div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-white rounded-[24px] p-6 h-36 flex flex-col justify-between border border-[#f0ebe1]/50 shadow-sm">
                <Copy size={24} className="text-[#546a65]" strokeWidth={1.5} />
                <div className="space-y-2 w-full">
                  <div className="h-1.5 bg-[#e8e3d9] rounded-full w-[90%]"></div>
                  <div className="h-1.5 bg-[#e8e3d9] rounded-full w-[60%]"></div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="bg-white rounded-[24px] p-6 h-36 flex flex-col justify-between border border-[#f0ebe1]/50 shadow-sm">
                <Stethoscope size={24} className="text-[#546a65]" strokeWidth={1.5} />
                <div className="space-y-2 w-full">
                  <div className="h-1.5 bg-[#e8e3d9] rounded-full w-[100%]"></div>
                  <div className="h-1.5 bg-[#e8e3d9] rounded-full w-[65%]"></div>
                </div>
              </div>
              {/* Card 4 */}
              <div className="bg-white rounded-[24px] p-6 h-36 flex flex-col justify-between border border-[#f0ebe1]/50 shadow-sm">
                <FileText size={24} className="text-[#546a65]" strokeWidth={1.5} />
                <div className="space-y-2 w-full">
                  <div className="h-1.5 bg-[#e8e3d9] rounded-full w-[85%]"></div>
                  <div className="h-1.5 bg-[#e8e3d9] rounded-full w-[55%]"></div>
                </div>
              </div>
            </div>

            <div className="bg-[#08302a] text-white rounded-2xl w-full py-5 px-6 text-center shadow-[0_8px_24px_rgba(8,48,42,0.2)]">
              <p className="font-medium text-[16px]">
                “Every missed detail can weaken a case.”
              </p>
            </div>
          </motion.div>

        </div>

        {/* Bottom Row: Features List */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#FAFAFA] rounded-[24px] p-5 shadow-[0_2px_12px_rgb(0,0,0,0.03)] flex flex-col gap-4 border border-white"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-[16px] bg-[#e6f4ef] flex items-center justify-center text-[#08302a]">
                <item.icon size={20} strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-[15px] font-medium text-[#08302a] mb-1 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[13px] text-[#546a65] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
