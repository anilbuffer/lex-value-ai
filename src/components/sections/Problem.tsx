"use client";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const problems = [
  {
    num: "01",
    title: "Weeks lost to manual review",
    desc: "Junior attorneys read every page, every provider, every visit. Value burns while the file sits.",
  },
  {
    num: "02",
    title: "Inconsistent case reads",
    desc: "A 2nd-year paralegal reads a record differently than a partner with 500 PI cases. The lens changes with the hand.",
  },
  {
    num: "03",
    title: "Critical flags caught late",
    desc: "Treatment gaps, causation language, surgical recs — often found the week before mediation, not the week after intake.",
  },
];

export function Problem() {
  return (
    <SectionContainer className="bg-background-warm" id="problem">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-10 items-center">
          
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
            
            <h2 className="font-playfair text-[36px] md:text-[48px] lg:text-[60px] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#08302a] via-[#08302a] to-[#00c37a] leading-[1.055] mb-8">
              Your paralegals are <br className="hidden md:block" />
              reading 3,000 pages. <br className="hidden md:block" />
              Defense already knows <br className="hidden md:block" />
              what they'll miss.
            </h2>
            
            <p className="text-lg md:text-[16px] text-[#08302a]/80 mb-10 font-medium leading-[1.6] max-w-[540px]">
              A gap on page 812. A degenerative note on page 1,204. A hedged causation phrase on page 2,097. Miss any one and defense builds their offer around it.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto px-8 h-14 bg-[#08302a] hover:bg-[#051c18] rounded-full text-[15px] text-white shadow-[0_32px_64px_rgba(8,48,42,0.06),0_16px_24px_rgba(8,48,42,0.04)]">
                Book a Live Demo
                <span className="ml-2 font-serif text-lg">→</span>
              </Button>
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {problems.map((item, index) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex gap-6 items-start"
              >
                <div className="text-3xl font-medium text-accent font-playfair">
                  {item.num}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2 font-playfair">
                    {item.title}
                  </h3>
                  <p className="text-body-text leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </SectionContainer>
  );
}
