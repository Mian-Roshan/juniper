import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { clinicians } from "@/lib/content";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Clinicians() {
  return (
    <Section id="clinicians">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading
          align="left"
          eyebrow="Real clinicians, real care"
          title="A medical team behind every plan"
          intro="Every treatment is prescribed and reviewed by UK-registered clinicians. You're never handed a prescription and left alone — our team monitors your progress throughout."
        />

        <div className="grid gap-6 sm:grid-cols-3">
          {clinicians.map((c, i) => (
            <Reveal key={c.name} delay={i * 90}>
              <div className="overflow-hidden rounded-3xl border border-forest/10 bg-white">
                <div className="relative aspect-square">
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    sizes="(max-width: 768px) 45vw, 220px"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-sm font-semibold text-forest">
                      {c.name}
                    </h3>
                    <BadgeCheck className="h-4 w-4 text-clay" />
                  </div>
                  <p className="text-xs font-medium text-clay-600">{c.role}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    {c.bio}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
