"use client";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { motion } from "framer-motion";

const metrics = [
  {
    value: "42h",
    label: "Avg. paralegal hours per case, pre-Lex Value"
  },
  {
    value: "$3.8k",
    label: "Manual review cost per average PI matter"
  },
  {
    value: "18%",
    label: "Cases where a key flag is discovered post-demand"
  },
  {
    value: "4 min",
    label: "Time to full chronology on Lex Value AI"
  }
];

export function Metrics() {
  return (
    <SectionContainer className="bg-background-warm !py-12 md:!py-16" id="metrics">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-primary/15 rounded-[2rem] overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x lg:divide-x divide-primary/15"
        >
          {metrics.map((metric, index) => (
            <div key={index} className="p-8 lg:p-10 flex flex-col justify-center">
              <div className="text-5xl lg:text-[4rem] font-display font-medium text-primary mb-4 tracking-tight">
                {metric.value}
              </div>
              <p className="text-body-text text-sm font-medium leading-relaxed opacity-80">
                {metric.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionContainer>
  );
}
