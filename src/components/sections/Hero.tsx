"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { GradientBlob } from "@/components/animations/GradientBlob";
import { GlassCard } from "@/components/ui/GlassCard";
import { Shield, BrainCircuit, Stethoscope, ArrowUpRight, FileText, AlertTriangle, CheckCircle2, Sparkles, Activity } from "lucide-react";
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
    <SectionContainer className="min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#F5F3ED] via-[#EDF3ED] to-[#F1EDE7] relative">
      {/* Background Neon Blobs - reverted to beige/green enterprise gradient */}
      <GradientBlob className="w-[800px] h-[800px] top-[-100px] -left-[200px]" color="primary" />
      <GradientBlob className="w-[700px] h-[700px] top-[20%] -right-[150px]" color="emerald" delay={10} />
      <GradientBlob className="w-[600px] h-[600px] bottom-[-100px] left-[15%]" color="teal" delay={5} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-[1400px] mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-8 items-center relative z-10"
      >
        {/* Left Column: Copy & CTAs */}
        <div className="flex flex-col items-start text-left max-w-2xl">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/40 border border-white/60 backdrop-blur-[18px] mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[11px] font-bold text-primary/80 uppercase tracking-widest">HIPAA-COMPLIANT · SOC 2 TYPE II IN PROGRESS</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="font-sora text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-primary leading-[1.05] mb-6">
            Medical record <br />
            review, <br />
            <span className="italic font-light">reimagined</span> for <br />
            plaintiff firms.
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg text-primary/70 mb-10 font-medium leading-relaxed max-w-xl">
            CaseChron ingests thousands of pages of medical records and returns litigation-ready chronologies, case intelligence flags, and demand-ready narratives — with citations to the exact page. In hours, not weeks.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 mb-12 w-full sm:w-auto">
            <Button size="lg" glow className="w-full sm:w-auto px-10 h-14 bg-[#08383A] hover:bg-[#062c2e]">
              Request a demo
              <ArrowUpRight size={18} className="ml-2 opacity-80" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto px-10 h-14 bg-white/50 hover:bg-white/80 border-primary/20">
              See the platform
            </Button>
          </motion.div>

          {/* Trust Markers */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 text-[13px] text-primary/60 font-medium">
            <div className="flex items-center gap-2">
              <Shield size={16} className="text-primary/40" />
              BAA on every account
            </div>
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-primary/40" />
              Citations on every fact
            </div>
            <div className="flex items-center gap-2">
              <Activity size={16} className="text-primary/40" />
              96% attorney accuracy
            </div>
          </motion.div>
        </div>

        {/* Right Column: Dashboard Mockup */}
        <motion.div
          variants={itemVariants}
          className="relative w-full h-full min-h-[500px] flex items-center justify-center lg:justify-end"
        >
          <GlassCard className="w-[95%] max-w-[600px] bg-white/70 backdrop-blur-2xl border-white/80 shadow-[0_20px_60px_rgba(0,0,0,0.05)] rounded-[32px] p-2 relative">
            <div className="w-full h-full bg-[#FAFAFA] rounded-[24px] border border-black/5 shadow-inner overflow-hidden flex flex-col p-6">
              
              {/* Mockup Header */}
              <div className="flex items-center justify-between border-b border-black/5 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                  <span className="text-[10px] font-mono font-bold text-primary/50 tracking-widest uppercase">CASE · JIMENEZ v. ATLAS FREIGHT</span>
                </div>
                <span className="text-[10px] font-mono text-primary/40">421 pgs · 18 flags</span>
              </div>

              {/* Stats Row */}
              <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-[#F5F2ED] rounded-xl p-4 border border-black/5">
                  <p className="text-[10px] font-mono font-bold text-primary/50 uppercase tracking-wider mb-2">Treatment Gaps</p>
                  <p className="text-3xl font-sora font-bold text-primary">3</p>
                </div>
                <div className="flex-1 bg-[#F5F2ED] rounded-xl p-4 border border-black/5">
                  <p className="text-[10px] font-mono font-bold text-primary/50 uppercase tracking-wider mb-2">Pre-existing</p>
                  <p className="text-3xl font-sora font-bold text-primary">02</p>
                </div>
              </div>

              {/* List of Flags */}
              <div className="space-y-3 mb-10">
                <div className="flex items-center justify-between bg-white border border-black/5 rounded-full px-5 py-3 shadow-sm">
                  <div className="flex items-center gap-3">
                    <FileText size={16} className="text-primary/40" />
                    <span className="text-sm font-medium text-primary">MRI L-Spine · Dr. Patel</span>
                  </div>
                  <span className="text-xs font-mono text-primary/40">p. 47</span>
                </div>
                <div className="flex items-center justify-between bg-white border border-black/5 rounded-full px-5 py-3 shadow-sm relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500" />
                  <div className="flex items-center gap-3">
                    <AlertTriangle size={16} className="text-amber-500" />
                    <span className="text-sm font-medium text-primary">Treatment gap · 42 days</span>
                  </div>
                  <span className="text-xs font-mono text-primary/40">p. 112-114</span>
                </div>
                <div className="flex items-center justify-between bg-white border border-black/5 rounded-full px-5 py-3 shadow-sm relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent" />
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-accent" />
                    <span className="text-sm font-medium text-primary">Causation opinion · orthopedic</span>
                  </div>
                  <span className="text-xs font-mono text-primary/40">p. 203</span>
                </div>
              </div>

              <div className="mt-auto">
                <span className="text-[10px] font-mono font-bold text-primary/40 tracking-widest uppercase">Chronology Assembly</span>
                <div className="h-2 w-full bg-black/5 rounded-full mt-2 overflow-hidden">
                  <div className="h-full w-3/4 bg-accent rounded-full" />
                </div>
              </div>
            </div>

            {/* Floating AI Notification */}
            <motion.div 
              className="absolute top-20 -left-12 bg-white rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-black/5 p-5 w-[280px]"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: [0, -6, 0], opacity: 1 }}
              transition={{ y: { duration: 5, repeat: Infinity, ease: "easeInOut" }, opacity: { delay: 0.8, duration: 0.5 } }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={14} className="text-accent" />
                <span className="text-[10px] font-bold text-accent tracking-widest uppercase">AI Ready</span>
              </div>
              <p className="text-sm font-medium text-primary leading-tight">
                Demand narrative generated for Jimenez.
              </p>
            </motion.div>

            {/* Floating Timeline Graph */}
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-black/5 p-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: [0, 6, 0], opacity: 1 }}
              transition={{ y: { duration: 6, repeat: Infinity, ease: "easeInOut" }, opacity: { delay: 1, duration: 0.5 } }}
            >
              <p className="text-[9px] font-mono font-bold text-primary/40 uppercase tracking-widest mb-3 text-center">Timeline</p>
              <div className="flex items-end gap-1.5 h-12">
                {[30, 40, 25, 50, 45, 70, 85, 100].map((h, i) => (
                  <div key={i} className="w-2 bg-primary rounded-t-sm" style={{ height: `${h}%`, opacity: i === 7 ? 1 : 0.4 + (i * 0.05), backgroundColor: i > 5 ? '#10B981' : '#08383A' }} />
                ))}
              </div>
            </motion.div>

          </GlassCard>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
}
