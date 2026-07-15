import { Calculator, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

export function CalculatorTeaser() {
  return (
    <section className="py-8">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-[2.5rem] border border-forest/10 bg-gradient-to-br from-clay-100 to-cream-100 p-8 md:p-14">
          <div className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 rounded-full bg-clay/20 blur-3xl" />
          <div className="relative grid items-center gap-8 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-clay-600">
                <Calculator className="h-4 w-4" />
                Interactive tool
              </span>
              <h2 className="mt-4 font-display text-3xl leading-tight text-forest text-balance md:text-4xl">
                How much could you lose? Find out in seconds.
              </h2>
              <p className="mt-3 max-w-lg text-muted">
                Our estimator uses average results from clinical studies to
                project your potential weight loss over 12 months — adjust your
                details and watch the numbers update live.
              </p>
              <ButtonLink
                href="/calculator"
                size="lg"
                variant="secondary"
                className="mt-6"
              >
                Open the calculator
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>

            <div className="relative rounded-3xl border border-forest/10 bg-white p-6 shadow-[var(--shadow-card)]">
              <p className="text-xs text-muted">Projected 12-month loss</p>
              <p className="font-display text-5xl text-clay">−19%</p>
              <p className="text-sm text-muted">of starting body weight</p>
              <div className="mt-4 flex items-end gap-1.5">
                {[40, 55, 48, 62, 70, 66, 80, 88].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-forest-400 to-clay"
                    style={{ height: `${h}px` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
