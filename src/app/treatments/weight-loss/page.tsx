import type { Metadata } from "next";
import Image from "next/image";
import { FlaskConical, Sparkles, Flower2, Check } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CalculatorTeaser } from "@/components/sections/CalculatorTeaser";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Weight loss treatment",
  description:
    "GLP-1 medication, coaching and lab testing in one clinician-led programme. See treatment options and check your eligibility.",
};

const adjuncts = [
  {
    id: "labs",
    icon: FlaskConical,
    title: "Metabolic labs",
    body: "At-home finger-prick blood tests map your cholesterol, HbA1c and thyroid markers. A clinician talks you through every result so you understand what's driving your health.",
    points: ["At-home collection kit", "Clinician-reviewed results", "Repeat panels to track progress"],
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=900&q=70",
  },
  {
    id: "hair",
    icon: Sparkles,
    title: "Hair renewal",
    body: "Rapid weight loss can sometimes affect your hair. Our prescribers offer evidence-based regrowth treatments and monitor you as part of your wider plan.",
    points: ["Prescription-strength options", "Ongoing clinical review", "Discreet delivery"],
    image:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=900&q=70",
  },
  {
    id: "menopause",
    icon: Flower2,
    title: "Menopause support",
    body: "Hormonal change and weight are deeply linked. We offer symptom reviews and HRT guidance so your plan works with your body, not against it.",
    points: ["Symptom assessment", "HRT reviews", "Joined-up with your weight plan"],
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=70",
  },
];

export default function WeightLossPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-cream bg-noise">
        <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-clay/15 blur-3xl" />
        <div className="container-x grid items-center gap-10 py-16 md:py-24 lg:grid-cols-2">
          <div>
            <Reveal>
              <Badge>Weight loss programme</Badge>
            </Reveal>
            <Reveal delay={60}>
              <h1 className="mt-5 font-display text-4xl leading-[1.05] text-forest text-balance md:text-5xl lg:text-6xl">
                Medication is the tool. Support is the difference.
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 max-w-lg text-lg text-muted">
                We pair proven GLP-1 treatments with real human coaching and lab
                testing — because lasting change needs more than a prescription.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/quiz" size="lg" variant="secondary">
                  Check my eligibility
                </ButtonLink>
                <ButtonLink href="/calculator" size="lg" variant="outline">
                  Estimate my results
                </ButtonLink>
              </div>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <div className="relative aspect-[5/4] overflow-hidden rounded-[2.5rem] shadow-[var(--shadow-soft)]">
              <Image
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=75"
                alt="Fresh, healthy food arranged on a table"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 520px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <ProductShowcase />
      <HowItWorks />

      {/* Adjunct treatments */}
      <Section className="bg-cream-100">
        <SectionHeading
          eyebrow="Beyond the scales"
          title="Care that treats the whole picture"
          intro="Your weight doesn't exist in isolation — and neither does your plan."
        />
        <div className="mt-14 space-y-8">
          {adjuncts.map((a, i) => {
            const Icon = a.icon;
            return (
              <Reveal key={a.id} delay={i * 60}>
                <div
                  id={a.id}
                  className="grid scroll-mt-24 items-center gap-8 overflow-hidden rounded-3xl border border-forest/10 bg-white p-6 md:grid-cols-2 md:p-8"
                >
                  <div className={i % 2 === 1 ? "md:order-2" : ""}>
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest text-cream">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-4 font-display text-2xl text-forest">
                      {a.title}
                    </h3>
                    <p className="mt-2 text-muted">{a.body}</p>
                    <ul className="mt-4 space-y-2">
                      {a.points.map((p) => (
                        <li key={p} className="flex gap-2 text-sm text-forest">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-forest-400" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`relative aspect-[4/3] overflow-hidden rounded-2xl ${
                      i % 2 === 1 ? "md:order-1" : ""
                    }`}
                  >
                    <Image
                      src={a.image}
                      alt={a.title}
                      fill
                      sizes="(max-width: 768px) 90vw, 440px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <CalculatorTeaser />
      <FAQ />
      <CTASection />
    </>
  );
}
