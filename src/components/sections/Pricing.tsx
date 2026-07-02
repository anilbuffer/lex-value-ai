"use client";

import { useState } from "react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const plans = [
  {
    name: "Starter",
    description: "For solo practitioners getting started.",
    monthlyPrice: "590",
    annualPrice: "490",
    features: [
      "Up to 3 seats",
      "50 cases / mo",
      "Core AI chronology",
      "Email support",
    ],
    btnText: "Get Started",
    theme: "light"
  },
  {
    name: "Professional",
    description: "For growing multi-attorney firms.",
    monthlyPrice: "1490",
    annualPrice: "1290",
    features: [
      "Up to 15 seats",
      "Unlimited cases",
      "All intelligence flags",
      "Priority support",
      "Audit logs"
    ],
    btnText: "Get Started",
    theme: "light"
  },
  {
    name: "Enterprise",
    description: "Deploy to your own AWS account.",
    priceText: "Custom",
    features: [
      "Unlimited seats",
      "Dedicated tenancy",
      "BAA + SSO",
      "Custom integrations",
      "White-glove onboarding"
    ],
    btnText: "Book Demo",
    theme: "dark",
    badge: "Most Popular"
  }
];

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <SectionContainer className="bg-background-warm" id="pricing">
      <div className="w-full max-w-[1100px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAFAFA] border border-white shadow-[0_32px_64px_rgba(8,48,42,0.06),0_16px_24px_rgba(8,48,42,0.04)] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00c37a]"></span>
            <span className="text-[10px] font-bold text-[#08302a]/70 uppercase tracking-widest">PRICING</span>
          </div>
          
          <h2 className="font-display text-[36px] md:text-[48px] lg:text-[52px] tracking-tight text-[#08302a] leading-[1.055] mb-8">
            Enterprise-ready plans that scale<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c37a] to-[#08302a]">with your firm.</span>
          </h2>
        </div>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-3 mb-16">
          <span className={`text-[13px] font-medium transition-colors ${!isAnnual ? 'text-[#08302a]' : 'text-[#546a65]'}`}>Monthly</span>
          <button 
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-12 h-6 rounded-full bg-[#08302a] flex items-center p-1 transition-colors relative"
            aria-label="Toggle Annual Billing"
          >
            <motion.div 
              className="w-4 h-4 rounded-full bg-[#00c37a]"
              animate={{ x: isAnnual ? 24 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </button>
          <span className={`text-[13px] font-medium flex items-center gap-1 transition-colors ${isAnnual ? 'text-[#08302a]' : 'text-[#546a65]'}`}>
            Annual <span className="text-[#00c37a] text-[11px] font-bold ml-1">-save 20%</span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-[32px] p-8 md:p-10 flex flex-col h-full relative ${
                plan.theme === 'dark'
                  ? 'bg-[#0f342d] border border-[#0f342d] shadow-[0_32px_64px_rgba(15,52,45,0.2)] text-white' 
                  : 'bg-[#fcfbf9] border border-white shadow-sm text-[#08302a]'
              }`}
            >
              {plan.badge && (
                <div className="absolute top-8 right-8 bg-[#155145] text-[#14b87e] px-4 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase">
                  {plan.badge}
                </div>
              )}

              {/* Header */}
              <div className="mb-8">
                <h3 className={`text-[22px] font-medium mb-2 ${plan.theme === 'dark' ? 'text-white' : 'text-[#08302a]'}`}>
                  {plan.name}
                </h3>
                <p className={`text-[14px] font-medium ${plan.theme === 'dark' ? 'text-[#9baea9]' : 'text-[#546a65]'}`}>
                  {plan.description}
                </p>
              </div>
              
              {/* Price */}
              <div className="mb-10 flex items-end gap-1">
                {plan.priceText ? (
                  <span className={`font-display text-[44px] font-medium leading-[1] ${plan.theme === 'dark' ? 'text-white' : 'text-[#08302a]'}`}>
                    {plan.priceText}
                  </span>
                ) : (
                  <>
                    <span className={`font-display text-[44px] font-medium leading-[1] ${plan.theme === 'dark' ? 'text-white' : 'text-[#08302a]'}`}>
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className={`text-[13px] font-medium pb-2 ${plan.theme === 'dark' ? 'text-[#9baea9]' : 'text-[#546a65]'}`}>
                      /mo
                    </span>
                  </>
                )}
              </div>
              
              {/* Features List */}
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className={`w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0 ${plan.theme === 'dark' ? 'bg-[#155145]' : 'bg-[#e6f4ef]'}`}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className={plan.theme === 'dark' ? 'text-[#14b87e]' : 'text-[#00c37a]'}>
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className={`text-[14px] font-medium ${plan.theme === 'dark' ? 'text-[#dce2e0]' : 'text-[#546a65]'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              {/* CTA Button */}
              <Button 
                className={`w-full h-[52px] rounded-[14px] text-[15px] font-bold transition-all border-none shadow-sm ${
                  plan.theme === 'dark' 
                    ? "bg-gradient-to-r from-[#0c4a3e] via-[#107e5c] to-[#16c487] hover:brightness-110 text-white shadow-[0_4px_20px_rgba(20,184,126,0.15)]" 
                    : "bg-white hover:bg-[#f4f4f4] text-[#08302a]"
                }`}
              >
                {plan.btnText}
              </Button>
              
            </motion.div>
          ))}
        </div>
        
      </div>
    </SectionContainer>
  );
}
