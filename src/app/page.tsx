import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { TreatmentGrid } from "@/components/sections/TreatmentGrid";
import { StatsBar } from "@/components/sections/StatsBar";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CalculatorTeaser } from "@/components/sections/CalculatorTeaser";
import { Testimonials } from "@/components/sections/Testimonials";
import { Clinicians } from "@/components/sections/Clinicians";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <TreatmentGrid />
      <StatsBar />
      <ProductShowcase />
      <HowItWorks />
      <CalculatorTeaser />
      <Testimonials />
      <Clinicians />
      <FAQ />
      <CTASection />
    </>
  );
}
