import { trustBadges } from "@/lib/content";
import { BadgeCheck } from "lucide-react";

/** Infinite marquee of trust/credential badges. */
export function TrustBar() {
  const items = [...trustBadges, ...trustBadges];
  return (
    <div className="border-y border-forest/10 bg-cream-100 py-5">
      <div className="relative overflow-hidden">
        <div
          className="flex w-max gap-10 whitespace-nowrap"
          style={{ animation: "marquee 32s linear infinite" }}
        >
          {items.map((label, i) => (
            <span
              key={i}
              className="flex items-center gap-2 text-sm font-medium text-forest-600"
            >
              <BadgeCheck className="h-4 w-4 text-clay" />
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
