import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Order confirmed",
};

export default async function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;

  return (
    <section className="bg-cream bg-noise py-24">
      <div className="container-x">
        <div className="mx-auto max-w-lg rounded-3xl border border-forest/10 bg-white p-10 text-center">
          <CheckCircle2 className="mx-auto h-16 w-16 text-forest-400" />
          <h1 className="mt-5 font-display text-3xl text-forest">
            You&apos;re all set
          </h1>
          <p className="mt-3 text-muted">
            Thank you — your plan is confirmed and a receipt is on its way to
            your inbox. Your clinician will be in touch to finalise your
            treatment.
          </p>
          {session_id && (
            <p className="mt-4 break-all rounded-xl bg-cream px-4 py-2 text-xs text-muted">
              Reference: {session_id}
            </p>
          )}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/treatments/weight-loss" variant="secondary" size="lg">
              Explore your programme
            </ButtonLink>
            <ButtonLink href="/" variant="outline" size="lg">
              Back to home
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
