"use client";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { motion } from "framer-motion";
import { Brain, Users, Server, ArrowRight } from "lucide-react";

const ecosystemCategories = [
  {
    icon: Brain,
    title: "AI Analysis",
    features: [
      "Medical Chronology",
      "Narrative Summary",
      "Intelligence Flags",
      "Semantic Search"
    ]
  },
  {
    icon: Users,
    title: "Collaboration",
    features: [
      "Role-Based Access",
      "Team Assignments",
      "Notifications",
      "Case Activity"
    ]
  },
  {
    icon: Server,
    title: "Enterprise",
    features: [
      "Multi-Tenant Architecture",
      "Audit Logs",
      "User Management",
      "Billing"
    ]
  }
];

export function PlatformOverview() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <SectionContainer className="bg-background-warm" id="platform">
      <div className="w-full max-w-[1100px] mx-auto px-6">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAFAFA] border border-white shadow-[0_32px_64px_rgba(8,48,42,0.06),0_16px_24px_rgba(8,48,42,0.04)] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00c37a]"></span>
            <span className="text-[10px] font-bold text-[#08302a]/70 uppercase tracking-widest">FEATURE ECOSYSTEM</span>
          </div>

          <h2 className="font-display text-[34px] md:text-[42px] lg:text-[48px] tracking-tight text-[#08302a] leading-[1.1] max-w-4xl mx-auto mb-8">
            Everything a modern PI firm <br className="hidden md:block" /> needs —
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c37a] to-[#08302a]"> in one workspace.</span>
          </h2>
        </div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 items-stretch"
        >
          {ecosystemCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-[24px] p-8 md:p-10 border border-[#e8e3d9] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,195,122,0.14)] hover:border-[#00c37a]/40 relative overflow-hidden flex flex-col hover:-translate-y-1 transition-all duration-500 group"
            >
              {/* Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00c37a]/[0.08] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Subtle top right green glow */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#e6f4ef] rounded-full blur-[50px] opacity-70 pointer-events-none" />

              {/* Content relative wrapper */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="section-icon mb-8">
                  <category.icon size={24} strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-[22px] font-medium text-[#08302a] mb-6">
                  {category.title}
                </h3>

                {/* Features List */}
                <ul className="space-y-4">
                  {category.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <ArrowRight size={16} strokeWidth={2.5} className="text-[#00c37a] shrink-0" />
                      <span className="text-[14px] font-medium text-[#546a65]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </SectionContainer>
  );
}
