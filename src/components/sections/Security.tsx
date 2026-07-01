"use client";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { motion } from "framer-motion";
import { Shield, Lock, Fingerprint, Activity, Server, Brain } from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    text: "AES-256 at rest, TLS 1.3 in transit"
  },
  {
    icon: Shield,
    text: "AWS BAA executed across S3, RDS, Cognito, Textract, CloudWatch"
  },
  {
    icon: Fingerprint,
    text: "Row-level tenant isolation in PostgreSQL"
  },
  {
    icon: Activity,
    text: "Immutable audit log · 6-year retention"
  },
  {
    icon: Server,
    text: "Deploys to your AWS account - you own the infrastructure"
  },
  {
    icon: Brain,
    text: "PHI tokenized before LLM - never used for model training"
  }
];

const badges = [
  "HIPAA", "AWS BAA", "AES-256", "TLS 1.3", "PHI WALL", "6-YR AUDIT"
];

export function Security() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <SectionContainer className="bg-background-warm py-24" id="security">
      <div className="w-full max-w-7xl mx-auto px-6">

        <div className="bg-[#08302a] rounded-[32px] p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Subtle dot pattern background */}
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}
          />

          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center relative z-10">

            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-start text-left max-w-2xl"
            >
              {/* Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00c37a]/40 mb-8 bg-[#00c37a]/10">
                <Shield size={12} className="text-[#00c37a]" strokeWidth={2.5} />
                <span className="text-[10px] font-bold text-[#00c37a] uppercase tracking-widest">Security & Compliance</span>
              </div>

              {/* Heading */}
              <h2 className="font-playfair text-[36px] md:text-[48px] lg:text-[56px] tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-[#00c37a]/60 leading-[1.055] mb-8">
                HIPAA-grade from <br className="hidden md:block" />
                day one — not bolted <br className="hidden md:block" />
                on after Series A.
              </h2>

              {/* Paragraph */}
              <p className="text-lg md:text-[16px] text-white/80 font-medium leading-[1.6] max-w-[540px] mb-10">
                Compliance is architectural at Lex Value. Every layer, every service, every log — designed under BAA before the first record was ingested.
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-3 max-w-[480px]">
                {badges.map((badge, index) => (
                  <div key={index} className="px-4 py-1.5 rounded-full border border-[#00c37a]/40 bg-[#00c37a]/10 text-[#00c37a] text-[11px] font-bold tracking-wider">
                    {badge}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-4 lg:gap-5"
            >
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white/5 border border-white/10 rounded-[24px] p-5 flex items-center gap-4 hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm"
                >
                  <div className="shrink-0 w-11 h-11 rounded-full bg-[#00c37a]/15 flex items-center justify-center text-[#00c37a]">
                    <feature.icon size={18} strokeWidth={2} />
                  </div>

                  <p className="text-[13.5px] text-white/90 font-medium leading-[1.5]">
                    {feature.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>

      </div>
    </SectionContainer>
  );
}
