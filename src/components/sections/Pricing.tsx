"use client";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

const plans = [
  {
    name: "Managing Partner",
    price: "149",
    description: "Firm-wide access, user management, billing, audit logs.",
    features: [
      "Unlimited cases",
      "Team management",
      "Weekly digest",
      "Priority support",
    ],
    highlighted: false,
  },
  {
    name: "Attorney",
    price: "99",
    description: "Assigned cases, chronologies, flags, exports.",
    features: [
      "Assigned cases",
      "PDF / Word / Excel exports",
      "Weekly summary",
    ],
    highlighted: true,
  },
  {
    name: "Paralegal",
    price: "49",
    description: "Upload and manage case files for assigned matters.",
    features: [
      "Upload records",
      "View chronology",
      "Case files",
    ],
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <SectionContainer className="bg-background-warm" id="pricing">
      <div className="w-full max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-[36px] md:text-[48px] lg:text-[56px] tracking-tight text-[#08302a] leading-[1.055] mb-4">
            Per-seat pricing, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c37a] to-[#08302a]">by role</span>
          </h2>
          <p className="text-lg md:text-[16px] text-[#08302a]/70 font-medium">
            14-day free trial. No card required to start.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-[24px] p-8 flex flex-col h-full relative ${
                plan.highlighted 
                  ? 'border-2 border-[#00c37a] shadow-[0_16px_40px_rgba(0,195,122,0.1)]' 
                  : 'border border-[#08302a]/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]'
              }`}
            >
              
              {/* Role */}
              <div className="text-[#08302a]/80 font-semibold mb-2">
                {plan.name}
              </div>
              
              {/* Price */}
              <div className="mb-4 flex items-end gap-1">
                <span className="font-display text-5xl font-bold text-[#08302a] tracking-tight">
                  ${plan.price}
                </span>
                <span className="text-[13px] font-medium text-[#08302a]/50 pb-2">
                  /seat/mo
                </span>
              </div>
              
              {/* Description */}
              <p className="text-[#08302a]/70 text-[14px] leading-relaxed mb-8 h-[42px]">
                {plan.description}
              </p>
              
              {/* Features List */}
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 
                      size={18} 
                      strokeWidth={2.5} 
                      className="text-[#00c37a] shrink-0 mt-[2px]" 
                    />
                    <span className="text-[14px] font-medium text-[#08302a]/80">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              {/* CTA Button */}
              <Button 
                variant={plan.highlighted ? "primary" : "outline"} 
                className={`w-full h-12 rounded-xl text-[14px] font-bold transition-all ${
                  plan.highlighted 
                    ? "bg-[#08302a] hover:bg-[#051c18] text-white shadow-md" 
                    : "bg-transparent border border-[#08302a]/20 text-[#08302a] hover:bg-black/5"
                }`}
              >
                Start trial
              </Button>
              
            </motion.div>
          ))}
        </div>
        
      </div>
    </SectionContainer>
  );
}
