import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { ProductPreview } from "@/components/sections/ProductPreview";
import { Compliance } from "@/components/sections/Compliance";
import { Problem } from "@/components/sections/Problem";
import { WorkflowROI } from "@/components/sections/WorkflowROI";
import { FounderStory } from "@/components/sections/FounderStory";
import { PlatformOverview } from "@/components/sections/PlatformOverview";
import { AIIntelligence } from "@/components/sections/AIIntelligence";
import { AIWorkflow } from "@/components/sections/AIWorkflow";
import { Security } from "@/components/sections/Security";
import { Comparison } from "@/components/sections/Comparison";
import { Roles } from "@/components/sections/Roles";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionDivider } from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative overflow-hidden bg-background-warm selection:bg-accent/20">
      <Navigation />
      <Hero />
      {/* <SectionDivider /> */}
      <ScrollReveal className="w-full"><Compliance /></ScrollReveal>
      <SectionDivider />
      <ScrollReveal className="w-full"><ProductPreview /></ScrollReveal>
      {/* <SectionDivider /> */}
      <ScrollReveal className="w-full"><Problem /></ScrollReveal>
      <SectionDivider />
      <ScrollReveal className="w-full"><WorkflowROI /></ScrollReveal>
      {/* <SectionDivider /> */}
      <ScrollReveal className="w-full"><FounderStory /></ScrollReveal>
      {/* <SectionDivider /> */}
      <ScrollReveal className="w-full"><PlatformOverview /></ScrollReveal>
      <SectionDivider />
      <ScrollReveal className="w-full"><AIIntelligence /></ScrollReveal>
      <SectionDivider />
      <ScrollReveal className="w-full"><AIWorkflow /></ScrollReveal>
      <SectionDivider />
      <ScrollReveal className="w-full"><Security /></ScrollReveal>
      <SectionDivider />
      <ScrollReveal className="w-full"><Comparison /></ScrollReveal>
      <SectionDivider />
      <ScrollReveal className="w-full"><Roles /></ScrollReveal>
      <SectionDivider />
      <ScrollReveal className="w-full"><Pricing /></ScrollReveal>
      {/* <SectionDivider /> */}
      <ScrollReveal className="w-full"><Testimonials /></ScrollReveal>
      <SectionDivider />
      <ScrollReveal className="w-full"><FAQ /></ScrollReveal>
      <SectionDivider />
      <ScrollReveal className="w-full"><FinalCTA /></ScrollReveal>
      <Footer />
    </main>
  );
}
