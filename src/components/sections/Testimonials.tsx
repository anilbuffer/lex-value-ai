"use client";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: '"We caught a 62-day treatment gap on a case we\'d already valued for demand. Re-worked the narrative — settled $410k higher. It paid for the year."',
    name: "Maren Halloran",
    title: "Managing Partner · Halloran Law"
  },
  {
    quote: '"The defense-side lens is the real product. Nothing else on the market thinks like an adjuster because nothing else was built by one."',
    name: "David Oakley",
    title: "Trial Attorney · Oakley · Cruz"
  },
  {
    quote: '"Paralegals stopped drowning. Attorneys stopped guessing. Chronologies that took 5 days take 5 minutes. It\'s not incremental — it\'s a category shift."',
    name: "Serena Brighton",
    title: "Founding Partner · Brighton Partners"
  }
];

export function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <SectionContainer className="bg-background-warm" id="testimonials">
      <div className="w-full max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white bg-[#FAFAFA] border border-white shadow-[0_32px_64px_rgba(8,48,42,0.06),0_16px_24px_rgba(8,48,42,0.04)] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00c37a]"></span>
            <span className="text-[10px] font-bold text-[#08302a]/70 uppercase tracking-widest">Testimonials</span>
          </div>
          
          <h2 className="font-display text-[36px] md:text-[48px] lg:text-[56px] tracking-tight text-[#08302a] leading-[1.055]">
            Partners who <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c37a] to-[#08302a]">bet the file</span> on it.
          </h2>
        </div>

        {/* Testimonials Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#FAFAFA] border border-white shadow-[0_32px_64px_rgba(8,48,42,0.04),0_16px_24px_rgba(8,48,42,0.02)] rounded-[32px] p-8 md:p-10 flex flex-col hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-[#00c37a] fill-[#00c37a]" strokeWidth={1} />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-[15px] font-medium leading-[1.7] text-[#08302a]/80 mb-8 flex-grow">
                {testimonial.quote}
              </p>
              
              {/* Divider */}
              <div className="w-full h-px bg-[#08302a]/5 mb-6" />

              {/* Author */}
              <div>
                <h4 className="text-[14px] font-bold text-[#08302a] mb-0.5">
                  {testimonial.name}
                </h4>
                <p className="text-[12px] font-medium text-[#08302a]/50">
                  {testimonial.title}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </SectionContainer>
  );
}
