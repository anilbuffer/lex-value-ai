"use client";

import { useState } from "react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Is Lex Value AI HIPAA compliant?",
    answer: "Yes. HIPAA compliance is built into every layer — AES-256 at rest, TLS 1.3 in transit, a BAA executed with AWS before any PHI is stored, append-only audit logging retained six years, and role/tenant checks enforced at the API layer."
  },
  {
    question: "Is my data used to train AI?",
    answer: "Never. PHI is tokenized before any LLM contact and raw PHI never enters a prompt. Your data is not used to train any external models."
  },
  {
    question: "How accurate are the outputs?",
    answer: "Every chronology entry and flag must cite a source document and page number. Claims that can't be traced to the record are omitted, and low-confidence outputs are routed to human review rather than displayed as confirmed findings."
  },
  {
    question: "Can I edit AI-generated summaries?",
    answer: "Absolutely. All AI outputs are presented as drafts. Attorneys review, edit, and approve before anything is used in a demand package or court submission."
  },
  {
    question: "What document formats are supported?",
    answer: "PDF medical records — digital, scanned, and handwritten. AWS Textract handles OCR while pdfplumber handles structured extraction, covering the full range of document quality PI firms encounter."
  },
  {
    question: "How long does processing take?",
    answer: "Minutes, not days. A typical case of 1,000+ pages moves through the full six-stage pipeline in around 20 minutes, then notifies the paralegal and assigned attorney automatically."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionContainer className="bg-background-warm" id="faq">
      <div className="w-full max-w-4xl mx-auto px-6">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAFAFA] border border-white shadow-[0_32px_64px_rgba(8,48,42,0.06),0_16px_24px_rgba(8,48,42,0.04)] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00c37a]"></span>
            <span className="text-[10px] font-bold text-[#08302a]/70 uppercase tracking-widest">FAQ</span>
          </div>

          <h2 className="font-display text-[34px] md:text-[42px] lg:text-[48px] tracking-tight text-[#08302a] leading-[1.055] mb-8">
            Answers for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c37a] to-[#08302a]">enterprise buyers.</span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-[#fcfbf9] border border-white rounded-[18px] overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-3 md:py-4 flex items-center justify-between text-left focus:outline-none group"
                >
                  <span className="font-medium text-[16px] text-[#08302a] pr-8">
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 text-[#546a65]"
                  >
                    <ChevronDown size={20} strokeWidth={2} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-7 text-[15px] text-[#546a65] font-medium leading-[1.6]">
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
