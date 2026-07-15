import Image from "next/image";
import Link from "next/link";
import { Scale, FlaskConical, Sparkles, Flower2, ArrowUpRight } from "lucide-react";
import { treatments } from "@/lib/content";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const icons = {
  scale: Scale,
  flask: FlaskConical,
  sparkles: Sparkles,
  flower: Flower2,
};

export function TreatmentGrid() {
  return (
    <Section id="treatments">
      <SectionHeading
        eyebrow="One clinic, whole-body care"
        title="More than a number on the scales"
        intro="Weight is where most people start — but healthy change is bigger than that. Explore the areas our clinicians can help with."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {treatments.map((t, i) => {
          const Icon = icons[t.icon];
          return (
            <Reveal key={t.id} delay={i * 80}>
              <Link
                href={t.href}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-forest/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={t.image}
                    alt={t.title}
                    fill
                    sizes="(max-width: 768px) 90vw, 300px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-forest backdrop-blur">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-xl text-forest">
                      {t.title}
                    </h3>
                    <ArrowUpRight className="h-5 w-5 text-clay opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {t.blurb}
                  </p>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
