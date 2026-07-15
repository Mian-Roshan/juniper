import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { LeafMark } from "@/components/svg/LeafMark";

export function CTASection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-forest px-6 py-16 text-center text-cream md:px-16 md:py-20">
          <div className="pointer-events-none absolute -left-10 -top-10 h-52 w-52 rounded-full bg-clay/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -right-10 h-64 w-64 rounded-full bg-sage/20 blur-3xl" />

          <LeafMark className="mx-auto h-12 w-12 text-gold" />
          <h2 className="mx-auto mt-6 max-w-2xl font-display text-3xl leading-tight text-balance md:text-5xl">
            Your healthiest chapter starts with one honest answer
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/75">
            The assessment is free, takes three minutes and comes with zero
            commitment. See if Renura is right for you today.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/quiz" size="lg" variant="secondary">
              Take the assessment
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink
              href="/plans"
              size="lg"
              variant="outline"
              className="border-cream/30 text-cream hover:bg-cream/10"
            >
              See plans & pricing
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
