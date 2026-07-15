import { cn } from "@/lib/utils";

const bg: Record<string, string> = {
  clay: "bg-clay/15 text-clay-600",
  forest: "bg-forest/15 text-forest",
  gold: "bg-gold/20 text-[#a9781f]",
  sage: "bg-sage/25 text-forest",
};

/** Simple monogram avatar — no external image needed. */
export function Avatar({
  initials,
  accent = "forest",
  className,
}: {
  initials: string;
  accent?: "clay" | "forest" | "gold" | "sage";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display text-sm font-semibold",
        bg[accent],
        className,
      )}
    >
      {initials}
    </span>
  );
}
