import { Sparkles } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="bg-forest text-cream/90">
      <div className="container-x flex items-center justify-center gap-2 py-2 text-center text-xs sm:text-sm">
        <Sparkles className="h-3.5 w-3.5 text-gold" aria-hidden />
        <span>
          Free clinical assessment · Treatment plans from{" "}
          <span className="font-semibold text-cream">£49/month</span> · No
          commitment
        </span>
      </div>
    </div>
  );
}
