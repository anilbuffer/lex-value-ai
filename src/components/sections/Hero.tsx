"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Shield, Lock, FileCheck, Users, Clock, AlertTriangle, FileText, CheckCircle2, Zap, ShieldCheck, Sparkles, Activity } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 300, damping: 24 },
    },
  };

  return (
    <SectionContainer className="min-h-screen flex items-center justify-center pt-32 pb-20 bg-[#F4EFE7] relative overflow-hidden">
      {/* Background Textures & Glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(#08302a 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />
        {/* Left Side Rainbow/Colorful Glow */}
        <div className="absolute top-[10%] left-[-15%] w-[800px] h-[800px] bg-gradient-to-tr from-purple-400/20 via-pink-300/20 to-blue-400/20 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute top-[40%] left-[5%] w-[600px] h-[600px] bg-gradient-to-br from-blue-300/20 via-teal-300/20 to-transparent rounded-full blur-[120px] mix-blend-multiply" />

        {/* Right Side Glow */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#00c37a]/15 rounded-full blur-[120px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-10 items-center relative z-10"
      >
        {/* Left Column */}
        <div className="flex flex-col items-start text-left max-w-2xl">
          {/* Top Pill */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white bg-[#FAFAFA] border border-white shadow-[0_32px_64px_rgba(8,48,42,0.06),0_16px_24px_rgba(8,48,42,0.04)] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00c37a]" />
            <span className="text-[10px] font-bold text-[#08302a]/70">HIPAA-COMPLIANT <span className="mx-1 text-[#08302a]/30">·</span> BUILT FOR PLAINTIFF PI FIRMS</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={itemVariants} className="font-display text-[36px] md:text-[48px] lg:text-[60px] tracking-tight text-[#08302a] leading-[1.055] mb-8">
            Medical record review <br className="hidden md:block" />
            <span className="font-medium relative inline-block">
              <span className="bg-gradient-to-r from-[#08302a] to-[#00c37a] bg-clip-text text-transparent">reimagined</span>
              <span className="absolute inset-0 bg-[#00c37a]/15 blur-2xl rounded-full -z-10 transform scale-120" />
            </span> for
            <span className="bg-gradient-to-r from-[#00c37a] to-[#08302a] px-1 bg-clip-text text-transparent"> plaintiff</span> firms.

          </motion.h1>

          {/* Subtext */}
          <motion.p variants={itemVariants} className="text-lg md:text-[16px] text-[#08302a]/80 mb-10 font-medium leading-[1.6] max-w-[540px]">
            LexValue AI turns unruly medical records into structured chronologies, litigation-critical case flags, and narrative summaries — encoded with the same analytical lens insurance defense uses to devalue your cases.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 mb-12 w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto px-8 h-14 bg-[#08302a] hover:bg-[#051c18] text-white rounded-full text-[15px] shadow-[0_8px_24px_rgba(8,48,42,0.2)] transition-shadow duration-300">
              Book a Live Demo
              <span className="ml-2 font-serif text-lg">→</span>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 h-14 bg-white hover:bg-gray-50 border border-[#00c37a] shadow-[0_8px_24px_rgba(8,48,42,0.1)] rounded-full text-[#00c37a] font-semibold text-[15px] transition-shadow duration-300">
              See how it works
              <span className="ml-2 text-[#00c37a]/60">›</span>
            </Button>
          </motion.div>

          {/* Trust Markers */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-x-8 gap-y-3 text-[14px] text-[#546a65] font-medium mt-2">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} strokeWidth={1.5} className="text-[#68827c]" />
              BAA on every account
            </div>
            <div className="flex items-center gap-2">
              <Sparkles size={18} strokeWidth={1.5} className="text-[#68827c]" />
              Citations on every fact
            </div>
            <div className="flex items-center gap-2">
              <Activity size={18} strokeWidth={1.5} className="text-[#68827c]" />
              96% attorney accuracy
            </div>
          </motion.div>
        </div>

        {/* Right Column: Dashboard Mockup */}
        <motion.div
          variants={itemVariants}
          className="relative w-full h-full min-h-[500px] flex items-center justify-center lg:justify-end mt-12 lg:mt-0"
        >
          {/* Main Card */}
          <div className="w-full max-w-[540px] bg-[#FAFAFA] border border-white shadow-[0_32px_64px_rgba(8,48,42,0.06),0_16px_24px_rgba(8,48,42,0.04)] rounded-[32px] p-8 relative">

            {/* Mockup Header */}
            <div className="flex items-center justify-between border-b border-[#08302a]/5 pb-6 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#08302a] flex items-center justify-center text-white shadow-[0_4px_20px_rgba(0,195,122,0.3)] border border-[#00c37a]/40">
                  <FileText size={18} />
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-[#08302a]">Ramirez v. TransLogix</h3>
                  <p className="text-[12px] text-[#08302a]/50 font-medium">2,847 pages · 14 providers</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 bg-[#00c37a]/15 px-3 py-1.5 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00c37a]" />
                <span className="text-[10px] font-bold text-[#08302a] tracking-widest uppercase">READY</span>
              </div>
            </div>

            {/* AI-Generated Chronology */}
            <div className="mb-8">
              <h4 className="text-[10px] font-bold text-[#08302a]/40 uppercase tracking-[0.2em] mb-5">AI-GENERATED CHRONOLOGY</h4>

              <div className="relative border-l-2 border-[#00c37a]/20 ml-2 space-y-5">

                {/* Timeline Item 1 */}
                <div className="relative pl-6">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[#00c37a]" />
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[11px] text-[#08302a]/60 font-medium mb-1">Mar 04 '24</p>
                      <p className="text-[13px] font-semibold text-[#08302a]">ED Visit — Cedar Grove</p>
                    </div>
                    <span className="bg-[#08302a]/5 text-[#08302a]/60 text-[9px] font-bold tracking-wider px-2 py-1 rounded-md uppercase">INITIAL</span>
                  </div>
                </div>

                {/* Timeline Item 2 */}
                <div className="relative pl-6">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[#00c37a]" />
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[11px] text-[#08302a]/60 font-medium mb-1">Mar 12 '24</p>
                      <p className="text-[13px] font-semibold text-[#08302a]">MRI · Lumbar Spine</p>
                    </div>
                    <span className="bg-[#08302a]/5 text-[#08302a]/60 text-[9px] font-bold tracking-wider px-2 py-1 rounded-md uppercase">IMAGING</span>
                  </div>
                </div>

                {/* Timeline Item 3 */}
                <div className="relative pl-6">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[#00c37a]" />
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[11px] text-[#08302a]/60 font-medium mb-1">May 20 '24</p>
                      <p className="text-[13px] font-semibold text-[#08302a]">Ortho Consult — Dr. Hale</p>
                    </div>
                    <span className="bg-[#08302a]/5 text-[#08302a]/60 text-[9px] font-bold tracking-wider px-2 py-1 rounded-md uppercase">SURGERY REC.</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Case Intelligence */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Zap size={14} className="text-[#00c37a]" />
                  <h4 className="text-[10px] font-bold text-[#08302a]/70 uppercase tracking-[0.2em]">CASE INTELLIGENCE</h4>
                </div>
                <span className="text-[10px] text-[#08302a]/40 font-medium">6 flags</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {/* Flag 1 */}
                <div className="bg-white rounded-xl p-4 border border-[#08302a]/5 shadow-[0_2px_8px_rgba(8,48,42,0.02)]">
                  <Clock size={14} className="text-[#00c37a] mb-2" />
                  <p className="text-[11px] text-[#08302a]/50 font-medium mb-0.5">Treatment Gap</p>
                  <p className="text-[13px] font-bold text-[#08302a]">47 days</p>
                </div>
                {/* Flag 2 */}
                <div className="bg-white rounded-xl p-4 border border-[#08302a]/5 shadow-[0_2px_8px_rgba(8,48,42,0.02)]">
                  <AlertTriangle size={14} className="text-[#00c37a] mb-2" />
                  <p className="text-[11px] text-[#08302a]/50 font-medium mb-0.5">Surgery Rec.</p>
                  <p className="text-[13px] font-bold text-[#08302a]">L4-L5 fusion</p>
                </div>
                {/* Flag 3 */}
                <div className="bg-white rounded-xl p-4 border border-[#08302a]/5 shadow-[0_2px_8px_rgba(8,48,42,0.02)]">
                  <AlertTriangle size={14} className="text-[#00c37a] mb-2" />
                  <p className="text-[11px] text-[#08302a]/50 font-medium mb-0.5">Degenerative</p>
                  <p className="text-[13px] font-bold text-[#08302a]">Pre-incident</p>
                </div>
                {/* Flag 4 */}
                <div className="bg-white rounded-xl p-4 border border-[#08302a]/5 shadow-[0_2px_8px_rgba(8,48,42,0.02)]">
                  <CheckCircle2 size={14} className="text-[#00c37a] mb-2" />
                  <p className="text-[11px] text-[#08302a]/50 font-medium mb-0.5">Causation</p>
                  <p className="text-[13px] font-bold text-[#08302a]">Strong</p>
                </div>
              </div>
            </div>

            {/* Floating Notification */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-[0_16px_32px_rgba(8,48,42,0.08)] border border-white p-4 w-[240px] flex items-center gap-3"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: [0, -6, 0], opacity: 1 }}
              transition={{ y: { duration: 6, repeat: Infinity, ease: "easeInOut" }, opacity: { delay: 0.8, duration: 0.5 } }}
            >
              <div className="w-10 h-10 rounded-full bg-[#00c37a]/15 flex items-center justify-center text-[#00c37a] shadow-[0_4px_20px_rgba(0,195,122,0.3)] border border-[#00c37a]/40">
                <Zap size={18} />
              </div>
              <div>
                <p className="text-[13px] font-bold text-[#08302a]">Chronology ready</p>
                <p className="text-[11px] text-[#08302a]/50 font-medium">Processed in 4m 12s</p>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
}
