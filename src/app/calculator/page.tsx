import type { Metadata } from "next";
import { WeightLossCalculator } from "@/components/calculator/WeightLossCalculator";
import { SectionHeading } from "@/components/ui/Section";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Weight loss calculator",
  description:
    "Estimate how much weight you could lose with a clinician-led GLP-1 programme. Adjust your details and see a personalised 12-month projection.",
};

export default function CalculatorPage() {
  return (
    <>
      <section className="bg-cream bg-noise pb-8 pt-16 md:pt-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Weight loss calculator"
            title="See what's possible for you"
            intro="Move the sliders to model your journey. This is an estimate based on average clinical results — your clinician will build your real plan."
          />
        </div>
      </section>

      <section className="pb-20">
        <div className="container-x">
          <WeightLossCalculator />
        </div>
      </section>

      <CTASection />
    </>
  );
}
