import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Compliance } from "@/components/sections/Compliance";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative overflow-hidden bg-background-warm selection:bg-accent/20">
      <Navigation />
      <Hero />
      <Compliance />
      {/* 
      <TrustedPlatform />
      <Problem />
      <WhyCaseChron />
      <PlatformOverview />
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
