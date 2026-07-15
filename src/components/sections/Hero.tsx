import Image from "next/image";
import { Star, ArrowRight, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { ProductArt } from "@/components/svg/ProductArt";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream bg-noise">
      {/* soft gradient blobs */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-clay/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-40 h-80 w-80 rounded-full bg-sage/25 blur-3xl" />

      <div className="container-x relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <div>
          <Reveal>
            <Badge icon={<Star className="h-3.5 w-3.5 fill-gold text-gold" />}>
              Rated 4.8/5 by 12,000+ members
            </Badge>
          </Reveal>

          <Reveal delay={60}>
            <h1 className="mt-6 font-display text-4xl leading-[1.05] text-forest text-balance sm:text-5xl lg:text-6xl">
              Weight loss that finally{" "}
              <span className="relative whitespace-nowrap text-clay">
                works with you
                <svg
                  viewBox="0 0 300 12"
                  className="absolute -bottom-1 left-0 w-full text-clay/40"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M2 9c60-6 236-8 296-3"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              Clinician-prescribed GLP-1 medication, personal health coaching and
              lab testing — combined into one programme designed around your
              body. Take the free 3-minute assessment to see if you&apos;re
              eligible.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/quiz" size="lg" variant="secondary">
                Take the assessment
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="/calculator" size="lg" variant="outline">
                Estimate my results
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex items-center gap-4 text-sm text-muted">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-forest-400" />
                CQC-registered
              </span>
              <span className="h-4 w-px bg-forest/15" />
              <span>UK-registered prescribers</span>
              <span className="h-4 w-px bg-forest/15" />
              <span>Free & discreet</span>
            </div>
          </Reveal>
        </div>

        {/* Visual */}
        <Reveal delay={140} className="relative">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-forest-400/20 to-clay/20" />
            <div className="absolute inset-3 overflow-hidden rounded-[2rem] shadow-[var(--shadow-soft)]">
              <Image
                src="https://images.unsplash.com/photo-1573497491765-dccce02b29df?auto=format&fit=crop&w=800&q=75"
                alt="A woman smiling, feeling confident and healthy"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 420px"
                className="object-cover"
              />
            </div>

            {/* Floating product card */}
            <div className="absolute -left-6 top-10 w-40 rounded-2xl border border-forest/10 bg-white/90 p-3 shadow-[var(--shadow-card)] backdrop-blur">
              <div className="h-16 w-16">
                <ProductArt art="pen" accent="clay" />
              </div>
              <p className="mt-1 text-xs font-semibold text-forest">
                Weekly pen
              </p>
              <p className="text-[11px] text-muted">Up to 20.9% avg. loss</p>
            </div>

            {/* Floating results card */}
            <div className="absolute -right-4 bottom-8 w-44 rounded-2xl border border-forest/10 bg-white/90 p-4 shadow-[var(--shadow-card)] backdrop-blur">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted">Avg. member</span>
                <span className="rounded-full bg-sage/20 px-2 py-0.5 text-[10px] font-semibold text-forest">
                  6 months
                </span>
              </div>
              <p className="mt-1 font-display text-2xl text-forest">−24 lbs</p>
              <div className="mt-2 h-1.5 w-full rounded-full bg-sand">
                <div className="h-full w-4/5 rounded-full bg-clay" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
