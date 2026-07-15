import type { Metadata } from "next";
import { Star, Quote } from "lucide-react";
import { testimonials, heroStats } from "@/lib/content";
import { SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Avatar } from "@/components/svg/Avatar";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Member reviews",
  description:
    "Read stories from members of the Renura weight loss programme. Rated 4.8/5 by 12,000+ people.",
};

// A longer, page-specific set built from the shared testimonials plus extras.
const extra = [
  {
    name: "Grace L.",
    age: 52,
    location: "Cardiff",
    quote:
      "The coaching taught me habits I'll keep forever. This isn't a quick fix — it's the first thing that ever felt sustainable.",
    lost: "2st 3lb",
    months: 8,
    initials: "GL",
    accent: "forest" as const,
  },
  {
    name: "Rachel K.",
    age: 39,
    location: "Glasgow",
    quote:
      "Being able to message my coach between check-ins kept me on track through some tough weeks. I never felt judged.",
    lost: "1st 7lb",
    months: 4,
    initials: "RK",
    accent: "gold" as const,
  },
];

const all = [...testimonials, ...extra];

export default function ReviewsPage() {
  return (
    <>
      <section className="bg-cream bg-noise py-16 md:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Member reviews"
            title="Thousands of reasons to start"
            intro="We're proud of the trust our members place in us — here's what a few of them have to say."
          />
          <Reveal className="mx-auto mt-8 flex max-w-md items-center justify-center gap-3 rounded-full border border-forest/10 bg-white px-6 py-3">
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold text-gold" />
              ))}
            </span>
            <span className="font-display text-xl text-forest">4.8</span>
            <span className="text-sm text-muted">/ 5 · 12,000+ reviews</span>
          </Reveal>
        </div>
      </section>

      <section className="pb-8">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {all.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 80}>
              <figure className="flex h-full flex-col rounded-3xl border border-forest/10 bg-white p-6">
                <div className="flex items-center justify-between">
                  <Quote className="h-7 w-7 text-clay/40" />
                  <span className="flex">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-3.5 w-3.5 fill-gold text-gold" />
                    ))}
                  </span>
                </div>
                <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-forest">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-forest/10 pt-4">
                  <Avatar initials={t.initials} accent={t.accent} />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-forest">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted">
                      {t.age} · {t.location}
                    </p>
                  </div>
                  <span className="rounded-full bg-clay/10 px-2.5 py-1 text-xs font-semibold text-clay-600">
                    −{t.lost}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="container-x grid gap-8 rounded-3xl bg-forest px-6 py-12 text-cream sm:grid-cols-2 md:px-12 lg:grid-cols-4">
          {heroStats.map((s) => (
            <Reveal key={s.value} className="text-center">
              <p className="font-display text-4xl text-gold">{s.value}</p>
              <p className="mt-2 text-sm text-cream/70">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
