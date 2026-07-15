import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/content";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Avatar } from "@/components/svg/Avatar";

export function Testimonials() {
  return (
    <Section id="reviews" className="bg-cream-100">
      <SectionHeading
        eyebrow="Member stories"
        title="Change that lasts, in their words"
        intro="Thousands of members have found a rhythm that works. These stories are illustrative of typical journeys on the programme."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 70}>
            <figure className="flex h-full flex-col rounded-3xl border border-forest/10 bg-white p-7">
              <Quote className="h-8 w-8 text-clay/40" />
              <blockquote className="mt-3 flex-1 text-lg leading-relaxed text-forest">
                “{t.quote}”
              </blockquote>
              <div className="mt-6 flex items-center justify-between border-t border-forest/10 pt-5">
                <figcaption className="flex items-center gap-3">
                  <Avatar initials={t.initials} accent={t.accent} />
                  <div>
                    <p className="text-sm font-semibold text-forest">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted">
                      {t.age} · {t.location}
                    </p>
                  </div>
                </figcaption>
                <div className="text-right">
                  <p className="font-display text-lg text-clay">−{t.lost}</p>
                  <p className="text-xs text-muted">in {t.months} months</p>
                </div>
              </div>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 flex items-center justify-center gap-2 text-sm text-muted">
        <span className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-gold text-gold" />
          ))}
        </span>
        <span className="font-medium text-forest">4.8/5</span>
        from 12,000+ verified reviews
      </Reveal>
    </Section>
  );
}
