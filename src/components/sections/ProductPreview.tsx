"use client";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { motion } from "framer-motion";
import { Folder, Activity, Sparkles, FileText, FolderOpen } from "lucide-react";

export function ProductPreview() {
  const timelineData = [
    {
      date: "Mar 12",
      title: "ER visit — cervical & lumbar strain",
      citation: "Cited · p. 14"
    },
    {
      date: "Apr 03",
      title: "MRI — L4-L5 disc herniation",
      citation: "Cited · p. 61"
    },
    {
      date: "May 19",
      title: "Physical therapy — 8 sessions",
      citation: "Cited · p. 88"
    },
    {
      date: "Jun 21",
      title: "Orthopedic surgical consult",
      citation: "Cited · p. 138"
    }
  ];

  return (
    <SectionContainer className="bg-background-warm" id="preview">
      <div className="w-full max-w-[1100px] mx-auto px-6">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAFAFA] border border-white shadow-[0_32px_64px_rgba(8,48,42,0.06),0_16px_24px_rgba(8,48,42,0.04)] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00c37a]"></span>
            <span className="text-[10px] font-bold text-[#08302a]/70 uppercase tracking-widest">INTERACTIVE PRODUCT PREVIEW</span>
          </div>

          <h2 className="font-display text-[36px] md:text-[48px] lg:text-[52px] tracking-tight text-[#08302a] leading-[1.055] max-w-3xl mx-auto mb-8">
            A real enterprise workspace — not a<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c37a] to-[#08302a]">screenshot.</span>
          </h2>
        </div>

        {/* Browser Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full bg-white rounded-[24px] shadow-sm border border-white overflow-hidden"
        >
          {/* Top Bar */}
          <div className="flex items-center px-6 py-4 border-b border-gray-100">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="ml-6 text-[13px] font-medium text-gray-400 tracking-wide">
              app.Lex Value.ai / cases
            </div>
          </div>

          {/* Body */}
          <div className="flex flex-col md:flex-row">

            {/* Sidebar */}
            <div className="w-full md:w-[260px] p-6 border-r border-gray-100 shrink-0">
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6 px-4">
                WORKSPACE
              </div>

              <div className="flex flex-col gap-2">
                <button className="flex items-center gap-3 px-4 py-2.5 bg-[#e6f4ef] rounded-[12px] text-[#0c5844] font-medium transition-colors">
                  <Folder size={18} strokeWidth={2} />
                  <span className="text-[14.5px]">Cases</span>
                </button>
                <button className="flex items-center gap-3 px-4 py-2.5 text-gray-500 hover:bg-gray-50 rounded-[12px] font-medium transition-colors">
                  <Activity size={18} strokeWidth={2} />
                  <span className="text-[14.5px]">Timeline</span>
                </button>
                <button className="flex items-center gap-3 px-4 py-2.5 text-gray-500 hover:bg-gray-50 rounded-[12px] font-medium transition-colors">
                  <Sparkles size={18} strokeWidth={2} />
                  <span className="text-[14.5px]">Flags</span>
                </button>
                <button className="flex items-center gap-3 px-4 py-2.5 text-gray-500 hover:bg-gray-50 rounded-[12px] font-medium transition-colors">
                  <FileText size={18} strokeWidth={2} />
                  <span className="text-[14.5px]">Summary</span>
                </button>
                <button className="flex items-center gap-3 px-4 py-2.5 text-gray-500 hover:bg-gray-50 rounded-[12px] font-medium transition-colors">
                  <FolderOpen size={18} strokeWidth={2} />
                  <span className="text-[14.5px]">Documents</span>
                </button>
                <button className="flex items-center gap-3 px-4 py-2.5 text-gray-500 hover:bg-gray-50 rounded-[12px] font-medium transition-colors">
                  <Activity size={18} strokeWidth={2} />
                  <span className="text-[14.5px]">Activity</span>
                </button>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 p-6 md:p-8 bg-white">

              {/* Tabs */}
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <button className="flex items-center gap-2 px-5 py-2.5 bg-[#0c5844] text-white rounded-full shadow-sm transition-colors">
                  <Activity size={16} strokeWidth={2.5} />
                  <span className="text-[14px] font-medium">Timeline</span>
                </button>
                <button className="flex items-center gap-2 px-5 py-2.5 bg-white text-gray-500 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
                  <Sparkles size={16} strokeWidth={2} />
                  <span className="text-[14px] font-medium">Flags</span>
                </button>
                <button className="flex items-center gap-2 px-5 py-2.5 bg-white text-gray-500 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
                  <FileText size={16} strokeWidth={2} />
                  <span className="text-[14px] font-medium">Summary</span>
                </button>
              </div>

              {/* List Container */}
              <div className="bg-[#fcfbf9] rounded-[24px] p-4 md:p-6 flex flex-col gap-3 shadow-inner border border-gray-50">
                {timelineData.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-[16px] p-4 md:p-5 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 shadow-sm border border-white"
                  >
                    <div className="inline-flex items-center justify-center px-4 py-1.5 bg-[#e6f4ef] text-[#0c5844] rounded-full text-[12px] font-bold tracking-wide shrink-0">
                      {item.date}
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[15px] font-medium text-[#08302a]">
                        {item.title}
                      </span>
                      <span className="text-[13px] text-gray-500 font-medium">
                        {item.citation}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </SectionContainer>
  );
}
