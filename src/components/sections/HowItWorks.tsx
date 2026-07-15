import { ClipboardList, Stethoscope, Package, HeartHandshake } from "lucide-react";
import { steps } from "@/lib/content";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

const icons = {
  clipboard: ClipboardList,
  stethoscope: Stethoscope,
  package: Package,
  "heart-handshake": HeartHandshake,
};

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <SectionHeading
        eyebrow="How it works"
        title="Care that begins in minutes"
        intro="No waiting rooms, no referrals. A straightforward path from your first answer to ongoing support."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => {
          const Icon = icons[s.icon as keyof typeof icons];
          return (
            <Reveal key={s.n} delay={i * 90}>
              <div className="relative flex h-full flex-col rounded-3xl border border-forest/10 bg-white p-6">
                <span className="absolute right-5 top-5 font-display text-5xl text-cream-100">
                  0{s.n}
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest text-cream">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl text-forest">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {s.body}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-12 flex justify-center">
        <ButtonLink href="/quiz" size="lg" variant="secondary">
          Start your free assessment
        </ButtonLink>
      </Reveal>
    </Section>
  );
}
