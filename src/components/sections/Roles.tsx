"use client";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { motion } from "framer-motion";
import { Briefcase, Scale, Folder, UserCheck } from "lucide-react";

const roles = [
  {
    icon: Briefcase,
    title: "Managing Partner",
    description: "Full firm oversight, billing, and user management.",
    features: [
      "Firm-wide visibility",
      "Invite attorneys & paralegals",
      "Weekly digest",
      "Stripe billing"
    ]
  },
  {
    icon: Scale,
    title: "Attorney",
    description: "The intelligence layer — review, edit, and export.",
    features: [
      "AI chronology review",
      "Intelligence flags",
      "Edit narrative",
      "Export demand package"
    ]
  },
  {
    icon: Folder,
    title: "Paralegal",
    description: "Upload records and manage case files.",
    features: [
      "Upload medical records",
      "Manage cases",
      "Track processing",
      "View chronologies"
    ]
  }
];

export function Roles() {
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
    <SectionContainer className="bg-background-warm" id="roles">
      <div className="w-full max-w-[1100px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAFAFA] border border-white shadow-[0_32px_64px_rgba(8,48,42,0.06),0_16px_24px_rgba(8,48,42,0.04)] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00c37a]"></span>
            <span className="text-[10px] font-bold text-[#08302a]/70 uppercase tracking-widest">BUILT FOR EVERY ROLE</span>
          </div>
          
          <h2 className="font-display text-[36px] md:text-[48px] lg:text-[52px] tracking-tight text-[#08302a] leading-[1.055] mb-8">
            Role-based dashboards, enforced at<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c37a] to-[#08302a]">the API.</span>
          </h2>
        </div>

        {/* Roles Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 items-stretch"
        >
          {roles.map((role, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#fcfbf9] border border-white shadow-sm rounded-[32px] p-8 md:p-10 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-[#e6f4ef] flex items-center justify-center text-[#08302a] mb-8">
                <role.icon size={24} strokeWidth={1.5} />
              </div>

              {/* Header */}
              <div className="mb-8">
                <h3 className="text-[22px] font-medium text-[#08302a] mb-3">
                  {role.title}
                </h3>
                <p className="text-[14px] font-medium text-[#546a65] leading-[1.6]">
                  {role.description}
                </p>
              </div>
              
              {/* Features List */}
              <ul className="space-y-4 mt-auto">
                {role.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <UserCheck 
                      size={16} 
                      strokeWidth={2.5} 
                      className="text-[#00c37a] shrink-0" 
                    />
                    <span className="text-[14px] font-medium text-[#546a65]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </SectionContainer>
  );
}
