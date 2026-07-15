import Link from "next/link";
import { LeafMark } from "@/components/svg/LeafMark";

const columns = [
  {
    title: "Treatments",
    links: [
      { label: "Weight loss", href: "/treatments/weight-loss" },
      { label: "Metabolic labs", href: "/treatments/weight-loss#labs" },
      { label: "Hair renewal", href: "/treatments/weight-loss#hair" },
      { label: "Menopause", href: "/treatments/weight-loss#menopause" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Reviews", href: "/reviews" },
      { label: "How it works", href: "/#how-it-works" },
      { label: "Plans & pricing", href: "/plans" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Weight loss calculator", href: "/calculator" },
      { label: "Take the assessment", href: "/quiz" },
      { label: "Contact us", href: "/about#contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-forest text-cream/80">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 text-cream">
              <LeafMark className="h-8 w-8 text-gold" />
              <span className="font-display text-xl font-semibold">Renura</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
              Clinician-led weight loss that treats the whole you — medication,
              coaching and care in one programme.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-cream">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-cream/70 transition-colors hover:text-cream"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-cream/15 pt-8">
          <p className="text-center text-xs text-cream/60">
            Designed &amp; Developed with{" "}
            <span className="text-clay" aria-label="love">♥</span> by{" "}
            <a
              href="https://www.codebeetech.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-cream underline decoration-clay/50 underline-offset-2 transition-colors hover:text-clay"
            >
              CodeBee
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
