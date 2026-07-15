import { Syringe, Pill, Check } from "lucide-react";
import { products } from "@/lib/content";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { ProductArt } from "@/components/svg/ProductArt";
import { gbp } from "@/lib/utils";

const accentRing: Record<string, string> = {
  clay: "ring-clay/30",
  forest: "ring-forest/25",
  gold: "ring-gold/40",
  sage: "ring-sage/40",
};

export function ProductShowcase() {
  const maxPct = Math.max(...products.map((p) => p.avgLossPct));

  return (
    <Section id="medications" className="bg-cream-100">
      <SectionHeading
        eyebrow="Treatment options"
        title="Medication matched to your body"
        intro="Your clinician recommends the right option for you — from needle-free daily tablets to our most effective dual-action weekly pen."
      />

      {/* Product cards */}
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p, i) => (
          <Reveal key={p.slug} delay={i * 70}>
            <article
              className={`flex h-full flex-col rounded-3xl border border-forest/10 bg-white p-6 ring-1 ${accentRing[p.accent]} transition-transform duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-start justify-between">
                <div className="h-20 w-20">
                  <ProductArt art={p.art} accent={p.accent} />
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-cream px-2.5 py-1 text-[11px] font-medium text-forest-600">
                  {p.category === "Injection" ? (
                    <Syringe className="h-3 w-3" />
                  ) : (
                    <Pill className="h-3 w-3" />
                  )}
                  {p.category}
                </span>
              </div>

              <h3 className="mt-4 font-display text-2xl text-forest">
                {p.name}
              </h3>
              <p className="text-sm text-clay-600">{p.tagline}</p>

              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-3xl text-forest">
                  {p.avgLoss}
                </span>
                <span className="text-xs text-muted">avg. body weight</span>
              </div>

              <ul className="mt-4 space-y-2">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-sm text-muted">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-forest-400" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center justify-between border-t border-forest/10 pt-4">
                <div>
                  <span className="text-xs text-muted">from</span>
                  <p className="font-semibold text-forest">
                    {gbp(p.priceFrom)}
                    <span className="text-xs font-normal text-muted">/mo</span>
                  </p>
                </div>
                <ButtonLink href="/quiz" size="sm" variant="outline">
                  Check eligibility
                </ButtonLink>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Comparison chart */}
      <Reveal className="mt-16 rounded-3xl border border-forest/10 bg-white p-6 md:p-10">
        <div className="flex flex-col gap-1 md:flex-row md:items-end md:justify-between">
          <h3 className="font-display text-2xl text-forest">
            Average weight loss by treatment
          </h3>
          <p className="text-sm text-muted">
            Illustrative averages from published GLP-1 clinical studies
          </p>
        </div>

        <div className="mt-8 space-y-5">
          {products.map((p) => (
            <div key={p.slug} className="flex items-center gap-4">
              <span className="w-32 shrink-0 text-sm font-medium text-forest md:w-40">
                {p.name}
              </span>
              <div className="relative h-8 flex-1 overflow-hidden rounded-full bg-cream-100">
                <div
                  className="flex h-full items-center justify-end rounded-full bg-gradient-to-r from-forest-400 to-clay pr-3 text-xs font-semibold text-white"
                  style={{ width: `${(p.avgLossPct / maxPct) * 100}%` }}
                >
                  {p.avgLoss}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
