import { cn } from "@/lib/utils";

/** Renura logomark — an abstract leaf/renewal symbol. */
export function LeafMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={cn("h-8 w-8", className)}
      aria-hidden
    >
      <path
        d="M16 2C8 6 4 12 4 19a12 12 0 0 0 24 0c0-7-4-13-12-17Z"
        fill="currentColor"
        opacity="0.16"
      />
      <path
        d="M16 3c6 4 9 9 9 15a9 9 0 1 1-18 0c0-6 3-11 9-15Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M16 8v16M16 14l4-3M16 18l-4-3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-display text-xl tracking-tight text-forest",
        className,
      )}
    >
      <LeafMark className="h-7 w-7 text-forest" />
      <span className="font-semibold">Renura</span>
    </span>
  );
}
