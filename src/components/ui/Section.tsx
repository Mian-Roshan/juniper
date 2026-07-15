import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-20 md:py-28", className)}>
      <div className="container-x">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-clay-600">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl leading-tight text-forest text-balance md:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
          {intro}
        </p>
      )}
    </Reveal>
  );
}
