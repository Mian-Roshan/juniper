import type { Metadata } from "next";
import { Check, Star } from "lucide-react";
import { plans } from "@/lib/content";
import { SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CheckoutButton } from "@/components/checkout/CheckoutButton";
import { FAQ } from "@/components/sections/FAQ";
import { gbp } from "@/lib/utils";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Plans & pricing",
  description:
    "Simple monthly plans for clinician-led weight loss. No lock-in, cancel anytime.",
};

const accentBar: Record<string, string> = {
  clay: "bg-clay",
  forest: "bg-forest",
  gold: "bg-gold",
};

export default function PlansPage() {
  return (
    <>
      <section className="bg-cream bg-noise pb-6 pt-16 md:pt-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Plans & pricing"
            title="One simple monthly price"
            intro="Every plan includes clinician oversight and coaching. No hidden fees, no lock-in — cancel anytime from your account."
          />
        </div>
      </section>

      <section className="pb-16">
        <div className="container-x grid items-start gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.slug} delay={i * 90}>
              <div
                className={cn(
                  "relative flex h-full flex-col overflow-hidden rounded-3xl border bg-white p-7",
                  p.best
                    ? "border-clay/40 shadow-[var(--shadow-soft)] lg:-mt-4 lg:mb-4"
                    : "border-forest/10",
                )}
              >
                <span
                  className={cn(
                    "absolute inset-x-0 top-0 h-1.5",
                    accentBar[p.accent],
                  )}
                />
                {p.best && (
                  <span className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-clay/10 px-3 py-1 text-xs font-semibold text-clay-600">
                    <Star className="h-3 w-3 fill-clay text-clay" />
                    Most popular
                  </span>
                )}

                <h3 className="font-display text-2xl text-forest">{p.name}</h3>
                <p className="mt-1 text-sm text-muted">{p.summary}</p>

                <div className="mt-5 flex items-baseline gap-1">
                  <span className="font-display text-5xl text-forest">
                    {gbp(p.price)}
                  </span>
                  <span className="text-muted">{p.cadence}</span>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm text-forest">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-forest-400" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-7">
                  <CheckoutButton plan={p.slug} label={`Choose ${p.name}`} />
                  <p className="mt-2 text-center text-xs text-muted">
                    Requires a completed clinical assessment
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <FAQ />
    </>
  );
}
