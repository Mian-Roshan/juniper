"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/content";
import { Section, SectionHeading } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq">
      <SectionHeading
        eyebrow="Questions, answered"
        title="Everything you might be wondering"
      />

      <div className="mx-auto mt-12 max-w-3xl divide-y divide-forest/10 rounded-3xl border border-forest/10 bg-white px-6">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="py-2">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-display text-lg text-forest">{f.q}</span>
                <span
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream text-forest transition-transform duration-300",
                    isOpen && "rotate-45 bg-clay text-white",
                  )}
                >
                  <Plus className="h-4 w-4" />
                </span>
              </button>
              <div
                className="grid overflow-hidden transition-all duration-300"
                style={{
                  gridTemplateRows: isOpen ? "1fr" : "0fr",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <div className="min-h-0">
                  <p className="pb-5 text-sm leading-relaxed text-muted">
                    {f.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
