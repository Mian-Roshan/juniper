import { cn } from "@/lib/utils";

type Accent = "clay" | "forest" | "gold" | "sage";

const fills: Record<Accent, { a: string; b: string }> = {
  clay: { a: "#e69376", b: "#c15f40" },
  forest: { a: "#4a7860", b: "#1f3d2f" },
  gold: { a: "#ecc873", b: "#c9922f" },
  sage: { a: "#a7c0a3", b: "#6f9069" },
};

/** Original illustrations of the medication formats — pen, capsule, pill. */
export function ProductArt({
  art,
  accent,
  className,
}: {
  art: "pen" | "pill" | "capsule";
  accent: Accent;
  className?: string;
}) {
  const c = fills[accent];
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      className={cn("h-full w-full", className)}
      aria-hidden
    >
      <defs>
        <linearGradient id={`g-${art}-${accent}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={c.a} />
          <stop offset="1" stopColor={c.b} />
        </linearGradient>
      </defs>

      <circle cx="60" cy="60" r="54" fill={c.a} opacity="0.14" />

      {art === "pen" && (
        <g transform="rotate(-32 60 60)">
          <rect
            x="50"
            y="20"
            width="20"
            height="58"
            rx="10"
            fill={`url(#g-${art}-${accent})`}
          />
          <rect x="50" y="34" width="20" height="6" fill="#fff" opacity="0.5" />
          <rect x="53" y="78" width="14" height="16" rx="5" fill={c.b} />
          <rect x="57" y="10" width="6" height="14" rx="3" fill={c.b} />
          <circle cx="60" cy="30" r="3" fill="#fff" opacity="0.8" />
        </g>
      )}

      {art === "capsule" && (
        <g transform="rotate(38 60 60)">
          <rect
            x="34"
            y="48"
            width="52"
            height="24"
            rx="12"
            fill={`url(#g-${art}-${accent})`}
          />
          <path
            d="M34 60a12 12 0 0 1 12-12h14v24H46A12 12 0 0 1 34 60Z"
            fill="#fff"
            opacity="0.85"
          />
          <circle cx="46" cy="56" r="1.6" fill={c.b} opacity="0.3" />
          <circle cx="52" cy="62" r="1.6" fill={c.b} opacity="0.3" />
        </g>
      )}

      {art === "pill" && (
        <g>
          <circle cx="60" cy="60" r="26" fill={`url(#g-${art}-${accent})`} />
          <path d="M42 60h36" stroke="#fff" strokeWidth="3" opacity="0.7" />
          <circle cx="60" cy="60" r="26" stroke="#fff" strokeWidth="2" opacity="0.4" />
          <circle cx="52" cy="50" r="4" fill="#fff" opacity="0.5" />
        </g>
      )}
    </svg>
  );
}
