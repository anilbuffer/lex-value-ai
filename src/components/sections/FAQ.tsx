"use client";

import { useState } from "react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How does Lex Value stay HIPAA-compliant when using LLMs?",
    answer: "We use a proprietary PHI tokenization layer before any data touches an LLM. Raw patient names, DOBs, and SSNs never leave your secure environment. Additionally, we use zero-retention enterprise models covered by BAAs."
  },
  {
    question: "Won't the AI hallucinate on medical records?",
    answer: "Our pipeline forces the AI to cite the exact page and paragraph for every claim it makes. If it cannot find a source document, it refuses to generate the flag. Every output is directly traceable to the raw record."
  },
  {
    question: "Does it deploy in our AWS account or yours?",
    answer: "We offer both. Standard plans run in our tenant-isolated AWS infrastructure under a strict BAA. Enterprise plans can be deployed directly into your firm's AWS account for total data sovereignty."
  },
  {
    question: "What roles does the platform support?",
    answer: "Lex Value AI includes specific dashboards for Managing Partners, Trial Attorneys, and Paralegals, ensuring that everyone sees the case data filtered for their specific workflow and responsibilities."
  },
  {
    question: "How is pricing structured?",
    answer: "Per-seat subscription with tiers by firm size. Billing is managed through Stripe with a self-serve customer portal for invoices, plan changes, and payment methods."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(4);

  return (
    <SectionContainer className="bg-background-warm" id="faq">
      <div className="w-full max-w-3xl mx-auto px-6">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white bg-[#FAFAFA] border border-white shadow-[0_32px_64px_rgba(8,48,42,0.06),0_16px_24px_rgba(8,48,42,0.04)] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00c37a]"></span>
            <span className="text-[10px] font-bold text-[#08302a]/70 uppercase tracking-widest">FAQ</span>
          </div>

          <h2 className="font-display text-[36px] md:text-[48px] lg:text-[56px] tracking-tight text-[#08302a] leading-[1.055]">
            What partners ask <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c37a] to-[#08302a]">before they buy.</span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={cn(
                  "bg-[#FAFAFA] border border-white rounded-[24px] overflow-hidden transition-all duration-300",
                  isOpen ? "shadow-[0_16px_32px_rgba(8,48,42,0.06)]" : "shadow-sm hover:shadow-md"
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-medium text-[15px] text-[#08302a] pr-8">
                    {faq.question}
                  </span>

                  <div className="shrink-0 w-8 h-8 rounded-full bg-[#00c37a]/15 flex items-center justify-center text-[#08302a] transition-colors hover:bg-[#00c37a]/25">
                    {isOpen ? <Minus size={16} strokeWidth={2.5} /> : <Plus size={16} strokeWidth={2.5} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-7 text-[14px] text-[#08302a]/70 font-medium leading-[1.6]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </SectionContainer>
  );
}
