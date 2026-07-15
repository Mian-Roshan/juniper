import { heroStats } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function StatsBar() {
  return (
    <section className="bg-forest py-16 text-cream md:py-20">
      <div className="container-x">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            The evidence
          </p>
          <h2 className="mt-3 font-display text-3xl text-balance md:text-4xl">
            Real support changes the odds
          </h2>
        </Reveal>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {heroStats.map((s, i) => (
            <Reveal
              key={s.value}
              delay={i * 80}
              className="border-t border-cream/15 pt-6"
            >
              <p className="font-display text-4xl text-gold md:text-5xl">
                {s.value}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-cream/75">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
