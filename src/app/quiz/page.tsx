import type { Metadata } from "next";
import { QuizWizard } from "@/components/quiz/QuizWizard";

export const metadata: Metadata = {
  title: "Free eligibility assessment",
  description:
    "Take our free 3-minute assessment to see if you're eligible for a clinician-led weight loss programme.",
};

export default function QuizPage() {
  return (
    <section className="bg-cream bg-noise py-16 md:py-20">
      <div className="container-x">
        <div className="mx-auto mb-10 max-w-xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay-600">
            Free · 3 minutes · No commitment
          </p>
          <h1 className="mt-3 font-display text-3xl text-forest text-balance md:text-4xl">
            Let&apos;s see if Renura is right for you
          </h1>
        </div>
        <QuizWizard />
      </div>
    </section>
  );
}
