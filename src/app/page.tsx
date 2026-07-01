import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Compliance } from "@/components/sections/Compliance";
import { Problem } from "@/components/sections/Problem";
import { Metrics } from "@/components/sections/Metrics";
import { FounderStory } from "@/components/sections/FounderStory";
import { PlatformOverview } from "@/components/sections/PlatformOverview";
import { AIIntelligence } from "@/components/sections/AIIntelligence";
import { AIWorkflow } from "@/components/sections/AIWorkflow";
import { Security } from "@/components/sections/Security";
import { Comparison } from "@/components/sections/Comparison";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/layout/Footer";










export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative overflow-hidden bg-background-warm selection:bg-accent/20">
      <Navigation />
      <Hero />
      <Compliance />
      <Problem />
      <Metrics />
      <FounderStory />
      <PlatformOverview />
      <AIIntelligence />
      <AIWorkflow />
      <Security />
      <Comparison />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      {/* 
      <TrustedPlatform />
      <WhyLex Value />
      <AIIntelligence />
      <AIWorkflow />
      <DashboardShowcase />
      <Security />
      <Comparison />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer /> 
      */}
    </main>
  );
}
