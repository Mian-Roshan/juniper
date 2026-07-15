import type { Metadata } from "next";
import { XCircle } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Checkout cancelled" };

export default function CheckoutCancelPage() {
  return (
    <section className="bg-cream bg-noise py-24">
      <div className="container-x">
        <div className="mx-auto max-w-lg rounded-3xl border border-forest/10 bg-white p-10 text-center">
          <XCircle className="mx-auto h-16 w-16 text-gold" />
          <h1 className="mt-5 font-display text-3xl text-forest">
            No payment taken
          </h1>
          <p className="mt-3 text-muted">
            Your checkout was cancelled and you haven&apos;t been charged. When
            you&apos;re ready, you can pick up right where you left off.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/plans" variant="secondary" size="lg">
              Back to plans
            </ButtonLink>
            <ButtonLink href="/" variant="outline" size="lg">
              Home
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
