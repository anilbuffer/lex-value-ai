"use client";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Sparkles } from "lucide-react";

export function FinalCTA() {
  return (
    <SectionContainer className="bg-background-warm pb-16 md:pb-24" id="cta">
      <div className="w-full max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#08302a] rounded-[32px] md:rounded-[48px] p-12 md:p-20 lg:p-24 flex flex-col items-center text-center relative overflow-hidden shadow-2xl"
        >
          {/* Subtle Glow Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00c37a]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00c37a]/30 mb-8 bg-[#00c37a]/10">
              <Sparkles size={12} className="text-[#00c37a]" strokeWidth={2.5} />
              <span className="text-[10px] font-bold text-[#00c37a] uppercase tracking-widest">Ready when your next case lands</span>
            </div>
            
            {/* Heading */}
            <h2 className="font-display text-[40px] md:text-[56px] lg:text-[72px] tracking-tight text-white leading-[1.055] mb-8">
              Stop <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c37a] to-[#00e08c]">reading records.</span><br className="hidden md:block" />
              Start <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c37a] to-[#00e08c]">winning them.</span>
            </h2>
            
            {/* Paragraph */}
            <p className="text-lg md:text-[18px] text-white/80 font-medium leading-[1.6] max-w-2xl mb-12">
              30-minute live demo on one of your real cases. Under NDA, in your AWS sandbox, with your records — no synthetic data theater.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Button 
                size="lg" 
                className="w-full sm:w-auto px-8 h-14 bg-[#00c37a] hover:bg-[#00e08c] text-[#08302a] rounded-full text-[15px] font-semibold shadow-[0_0_24px_rgba(0,195,122,0.4)] transition-all"
              >
                Book a Live Demo
                <span className="ml-2 font-serif text-lg">→</span>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto px-8 h-14 bg-white/5 hover:bg-white/10 border-white/20 text-white rounded-full text-[15px] font-medium transition-all"
              >
                Review our security architecture
              </Button>
            </div>
          </div>
          
        </motion.div>
        
      </div>
    </SectionContainer>
  );
}
