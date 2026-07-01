"use client";

import { motion } from "framer-motion";

export function SectionDivider() {
  return (
    <div className="w-full h-px relative flex items-center justify-center my-4 md:my-8 z-20">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00c37a]/20 to-transparent h-px" />
      <motion.div
        initial={{ opacity: 0, scale: 0, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(4px)" }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-[30%] md:w-[20%] h-[2px] bg-gradient-to-r from-transparent via-[#00c37a] to-transparent absolute shadow-[0_0_20px_rgba(0,195,122,0.6)]"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-1.5 h-1.5 rounded-full bg-[#00c37a] absolute shadow-[0_0_15px_3px_rgba(0,195,122,0.8)]"
      />
    </div>
  );
}
