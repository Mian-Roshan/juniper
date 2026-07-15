"use client";

import { useEffect, useState } from "react";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const STORAGE_KEY = "renura-cookie-consent";
type Consent = "accepted" | "rejected";

export function CookieConsent() {
  // `null` until we've checked storage, so nothing flashes on first paint.
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function decide(choice: Consent) {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      /* storage unavailable — still dismiss for this session */
    }
    setVisible(false);
  }

  if (!mounted || !visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 sm:px-6 sm:pb-6"
    >
      <div className="relative mx-auto flex max-w-3xl flex-col gap-4 rounded-3xl border border-forest/10 bg-white/95 p-5 shadow-[var(--shadow-soft)] backdrop-blur-md sm:flex-row sm:items-center sm:gap-6 sm:p-6">
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-clay/10 text-clay">
            <Cookie className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-semibold text-forest">
              We value your privacy
            </p>
            <p className="mt-1 text-xs leading-relaxed text-muted">
              We use cookies to run this site, remember your preferences and
              understand how it&apos;s used. You can accept all cookies or reject
              non-essential ones.
            </p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:flex-col sm:items-stretch lg:flex-row">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 whitespace-nowrap"
            onClick={() => decide("rejected")}
          >
            Reject non-essential
          </Button>
          <Button
            variant="secondary"
            size="sm"
            className="flex-1 whitespace-nowrap"
            onClick={() => decide("accepted")}
          >
            Accept all
          </Button>
        </div>

        <button
          onClick={() => decide("rejected")}
          aria-label="Dismiss"
          className="absolute right-4 top-4 text-muted transition-colors hover:text-forest sm:static"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
