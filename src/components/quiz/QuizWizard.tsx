"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Loader2,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import {
  quizSteps,
  goalOptions,
  sexOptions,
  healthOptions,
  preferenceOptions,
  emptyQuiz,
  type QuizData,
} from "./quizConfig";
import { OptionCard, TextField, RangeField } from "./fields";
import { Button, ButtonLink } from "@/components/ui/Button";
import { products } from "@/lib/content";
import { api } from "@/lib/api";
import { cn } from "@/lib/utils";

const KG_PER_STONE = 6.35029;

type Status = "idle" | "submitting" | "eligible" | "ineligible" | "error";

export function QuizWizard() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<QuizData>(emptyQuiz);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set = <K extends keyof QuizData>(key: K, value: QuizData[K]) =>
    setData((d) => ({ ...d, [key]: value }));

  const bmi = useMemo(() => {
    const m = data.heightCm / 100;
    return data.weightKg / (m * m);
  }, [data.heightCm, data.weightKg]);

  const current = quizSteps[step];
  const progress = ((step + 1) / quizSteps.length) * 100;

  // Per-step validation gate
  const canContinue = useMemo(() => {
    switch (current.id) {
      case "goal":
        return !!data.goal;
      case "about":
        return !!data.sex && Number(data.age) >= 18 && Number(data.age) <= 100;
      case "measurements":
        return data.heightCm > 0 && data.weightKg > 0;
      case "health":
        return data.conditions.length > 0;
      case "preference":
        return !!data.preference;
      case "contact":
        return (
          data.firstName.trim().length > 1 &&
          /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email) &&
          data.consent
        );
      default:
        return true;
    }
  }, [current.id, data]);

  const recommended = useMemo(() => {
    if (data.preference === "tablet")
      return products.find((p) => p.category === "Tablet")!;
    if (data.preference === "injection")
      return products.find((p) => p.category === "Injection")!;
    return bmi >= 35 ? products[0] : products[1];
  }, [data.preference, bmi]);

  const toggleCondition = (value: string) => {
    setData((d) => {
      if (value === "none") return { ...d, conditions: ["none"] };
      const without = d.conditions.filter((c) => c !== "none");
      return without.includes(value)
        ? { ...d, conditions: without.filter((c) => c !== value) }
        : { ...d, conditions: [...without, value] };
    });
  };

  async function submit() {
    // Eligibility rule: BMI 30+, or 27+ with a weight-related condition.
    const hasCondition =
      data.conditions.length > 0 && !data.conditions.includes("none");
    const eligible = bmi >= 30 || (bmi >= 27 && hasCondition);

    if (!eligible) {
      setStatus("ineligible");
      return;
    }

    setStatus("submitting");
    const res = await api.submitQuiz({ ...data, bmi: Number(bmi.toFixed(1)) });
    if (res.ok) {
      setStatus("eligible");
    } else {
      // Backend offline shouldn't block the demo UX — still show the result,
      // but surface the issue.
      setErrorMsg(res.error);
      setStatus("eligible");
    }
  }

  /* ------------------------------ Result screens ------------------------------ */

  if (status === "eligible") {
    return (
      <ResultCard
        tone="success"
        icon={<CheckCircle2 className="h-14 w-14 text-forest-400" />}
        title={`Good news, ${data.firstName || "there"} — you may be eligible`}
        body="A clinician will review your answers and confirm your personalised plan. We've sent your result and next steps to your email."
      >
        <div className="mt-6 rounded-2xl border border-forest/10 bg-cream p-5 text-left">
          <p className="text-xs font-semibold uppercase tracking-wider text-clay-600">
            Suggested starting point
          </p>
          <p className="mt-1 font-display text-2xl text-forest">
            {recommended.name}
          </p>
          <p className="text-sm text-muted">{recommended.description}</p>
        </div>
        {errorMsg && (
          <p className="mt-3 text-xs text-muted">
            (Demo note: {errorMsg})
          </p>
        )}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <ButtonLink href="/plans" variant="secondary" size="lg">
            Choose your plan
            <ArrowRight className="h-4 w-4" />
          </ButtonLink>
          <ButtonLink href="/" variant="outline" size="lg">
            Back to home
          </ButtonLink>
        </div>
      </ResultCard>
    );
  }

  if (status === "ineligible") {
    return (
      <ResultCard
        tone="neutral"
        icon={<XCircle className="h-14 w-14 text-gold" />}
        title="This programme may not be the right fit right now"
        body="Based on your answers, our weight-loss medication isn't suitable at the moment. That's not the end of the road — our team can point you toward other support."
      >
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <ButtonLink href="/about#contact" variant="secondary" size="lg">
            Talk to our team
          </ButtonLink>
          <button
            onClick={() => {
              setStatus("idle");
              setStep(0);
            }}
            className="rounded-full px-6 py-4 text-sm font-medium text-forest hover:bg-forest/5"
          >
            Start over
          </button>
        </div>
      </ResultCard>
    );
  }

  /* ------------------------------ Wizard ------------------------------ */

  const Icon = current.icon;

  return (
    <div className="mx-auto max-w-2xl">
      {/* Progress */}
      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between text-xs text-muted">
          <span>
            Step {step + 1} of {quizSteps.length}
          </span>
          <span>{Math.round(progress)}% complete</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-sand">
          <div
            className="h-full rounded-full bg-clay transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="rounded-3xl border border-forest/10 bg-white p-6 md:p-9">
        <div className="mb-6 flex items-start gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-forest text-cream">
            <Icon className="h-5 w-5" />
          </span>
          <div>
            <h2 className="font-display text-2xl text-forest">
              {current.title}
            </h2>
            <p className="text-sm text-muted">{current.subtitle}</p>
          </div>
        </div>

        {/* Step body */}
        <div className="space-y-3">
          {current.id === "goal" &&
            goalOptions.map((o) => (
              <OptionCard
                key={o.value}
                label={o.label}
                emoji={o.emoji}
                selected={data.goal === o.value}
                onClick={() => set("goal", o.value)}
              />
            ))}

          {current.id === "about" && (
            <div className="space-y-5">
              <div className="grid gap-3 sm:grid-cols-3">
                {sexOptions.map((o) => (
                  <OptionCard
                    key={o.value}
                    label={o.label}
                    selected={data.sex === o.value}
                    onClick={() => set("sex", o.value)}
                  />
                ))}
              </div>
              <TextField
                label="Your age"
                type="number"
                min={18}
                max={100}
                value={data.age}
                onChange={(v) => set("age", v)}
                placeholder="e.g. 42"
                error={
                  data.age && Number(data.age) < 18
                    ? "You must be 18 or over."
                    : undefined
                }
              />
            </div>
          )}

          {current.id === "measurements" && (
            <div className="space-y-6">
              <RangeField
                label="Height"
                value={data.heightCm}
                display={`${data.heightCm} cm`}
                min={140}
                max={210}
                onChange={(n) => set("heightCm", n)}
              />
              <RangeField
                label="Weight"
                value={data.weightKg}
                display={`${Math.floor(
                  data.weightKg / KG_PER_STONE,
                )}st ${Math.round(
                  (data.weightKg / KG_PER_STONE -
                    Math.floor(data.weightKg / KG_PER_STONE)) *
                    14,
                )}lb`}
                min={45}
                max={200}
                onChange={(n) => set("weightKg", n)}
              />
              <div className="flex items-center justify-between rounded-2xl bg-cream px-5 py-4">
                <span className="text-sm text-muted">Your BMI</span>
                <span className="font-display text-2xl text-forest">
                  {bmi.toFixed(1)}
                </span>
              </div>
            </div>
          )}

          {current.id === "health" && (
            <div className="grid gap-3 sm:grid-cols-2">
              {healthOptions.map((o) => (
                <OptionCard
                  key={o.value}
                  label={o.label}
                  multi
                  selected={data.conditions.includes(o.value)}
                  onClick={() => toggleCondition(o.value)}
                />
              ))}
            </div>
          )}

          {current.id === "preference" &&
            preferenceOptions.map((o) => (
              <OptionCard
                key={o.value}
                label={o.label}
                hint={o.hint}
                selected={data.preference === o.value}
                onClick={() => set("preference", o.value)}
              />
            ))}

          {current.id === "contact" && (
            <div className="space-y-4">
              <TextField
                label="First name"
                value={data.firstName}
                onChange={(v) => set("firstName", v)}
                placeholder="Alex"
              />
              <TextField
                label="Email address"
                type="email"
                value={data.email}
                onChange={(v) => set("email", v)}
                placeholder="you@example.com"
              />
              <TextField
                label="Phone (optional)"
                type="tel"
                value={data.phone}
                onChange={(v) => set("phone", v)}
                placeholder="07…"
              />
              <label className="flex items-start gap-3 rounded-2xl bg-cream p-4 text-sm text-muted">
                <input
                  type="checkbox"
                  checked={data.consent}
                  onChange={(e) => set("consent", e.target.checked)}
                  className="mt-0.5 h-5 w-5 accent-clay"
                />
                <span>
                  I agree to Renura contacting me about my assessment and
                  accept the{" "}
                  <Link href="#" className="text-clay underline">
                    privacy policy
                  </Link>
                  .
                </span>
              </label>
            </div>
          )}
        </div>

        {/* Nav */}
        <div className="mt-8 flex items-center justify-between">
          <button
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
            className={cn(
              "flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-forest transition-colors hover:bg-forest/5",
              step === 0 && "invisible",
            )}
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>

          {step < quizSteps.length - 1 ? (
            <Button
              variant="secondary"
              disabled={!canContinue}
              onClick={() => setStep((s) => s + 1)}
            >
              Continue
              <ArrowRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button
              variant="secondary"
              disabled={!canContinue || status === "submitting"}
              onClick={submit}
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Checking…
                </>
              ) : (
                <>
                  See my result
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </Button>
          )}
        </div>
      </div>

      <p className="mt-5 flex items-center justify-center gap-2 text-xs text-muted">
        <ShieldCheck className="h-4 w-4 text-forest-400" />
        Your answers are confidential and reviewed only by our clinical team.
      </p>
    </div>
  );
}

function ResultCard({
  tone,
  icon,
  title,
  body,
  children,
}: {
  tone: "success" | "neutral";
  icon: React.ReactNode;
  title: string;
  body: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-xl text-center">
      <div
        className={cn(
          "rounded-3xl border p-8 md:p-10",
          tone === "success"
            ? "border-forest/15 bg-white"
            : "border-gold/30 bg-white",
        )}
      >
        <div className="mx-auto flex justify-center">{icon}</div>
        <h2 className="mt-5 font-display text-2xl text-forest text-balance md:text-3xl">
          {title}
        </h2>
        <p className="mt-3 text-muted">{body}</p>
        {children}
      </div>
    </div>
  );
}
