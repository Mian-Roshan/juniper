"use client";

import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { api } from "@/lib/api";
import { cn } from "@/lib/utils";

export function CheckoutButton({
  plan,
  label = "Choose plan",
  className,
}: {
  plan: string;
  label?: string;
  className?: string;
}) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");

  async function start() {
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError("Enter a valid email to continue.");
      return;
    }
    setError("");
    setLoading(true);
    const res = await api.createCheckout({ plan, email });
    setLoading(false);
    if (res.ok && res.data.url) {
      window.location.href = res.data.url;
    } else {
      setError(
        res.ok
          ? "No checkout URL returned."
          : `${res.error} (Set up Stripe keys in the backend to enable payments.)`,
      );
    }
  }

  if (!open) {
    return (
      <Button
        variant="secondary"
        className={cn("w-full", className)}
        onClick={() => setOpen(true)}
      >
        {label}
        <ArrowRight className="h-4 w-4" />
      </Button>
    );
  }

  return (
    <div className="space-y-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email for your receipt"
        className="w-full rounded-full border border-forest/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-clay focus:ring-2 focus:ring-clay/20"
      />
      <Button
        variant="secondary"
        className="w-full"
        onClick={start}
        disabled={loading}
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Redirecting…
          </>
        ) : (
          <>
            Continue to secure checkout
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </Button>
      {error && <p className="text-xs text-clay">{error}</p>}
    </div>
  );
}
