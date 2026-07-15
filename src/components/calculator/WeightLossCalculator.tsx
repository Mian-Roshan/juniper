"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Info, TrendingDown } from "lucide-react";
import { products } from "@/lib/content";
import { ButtonLink } from "@/components/ui/Button";
import { ProductArt } from "@/components/svg/ProductArt";
import { cn } from "@/lib/utils";

const KG_PER_STONE = 6.35029;
const MONTHS = [0, 1, 2, 3, 4, 5, 6, 9, 12];
const TAU = 3.6; // controls how quickly loss approaches the plateau

function bmiCategory(bmi: number) {
  if (bmi < 18.5) return { label: "Underweight", color: "text-gold" };
  if (bmi < 25) return { label: "Healthy", color: "text-forest-400" };
  if (bmi < 30) return { label: "Overweight", color: "text-gold" };
  return { label: "Obese", color: "text-clay" };
}

export function WeightLossCalculator() {
  const [weightKg, setWeightKg] = useState(95);
  const [heightCm, setHeightCm] = useState(168);
  const [adherence, setAdherence] = useState(90);
  const [productSlug, setProductSlug] = useState(products[1].slug);
  const [unit, setUnit] = useState<"kg" | "st">("st");

  const product = products.find((p) => p.slug === productSlug)!;

  const projection = useMemo(() => {
    const targetFraction = (product.avgLossPct / 100) * (adherence / 100);
    return MONTHS.map((t) => {
      const f = targetFraction * (1 - Math.exp(-t / TAU));
      return { month: t, weight: weightKg * (1 - f), lostKg: weightKg * f };
    });
  }, [weightKg, adherence, product.avgLossPct]);

  const final = projection[projection.length - 1];
  const totalLostKg = final.lostKg;
  const heightM = heightCm / 100;
  const startBmi = weightKg / (heightM * heightM);
  const endBmi = final.weight / (heightM * heightM);

  const fmtWeight = (kg: number) =>
    unit === "kg"
      ? `${kg.toFixed(1)} kg`
      : `${Math.floor(kg / KG_PER_STONE)}st ${Math.round(
          (kg / KG_PER_STONE - Math.floor(kg / KG_PER_STONE)) * 14,
        )}lb`;

  // Build the SVG area path
  const W = 520;
  const H = 220;
  const pad = 8;
  const maxW = weightKg;
  const minW = Math.min(...projection.map((p) => p.weight)) - 3;
  const x = (m: number) => pad + (m / 12) * (W - pad * 2);
  const y = (w: number) =>
    pad + ((maxW - w) / (maxW - minW)) * (H - pad * 2);

  const linePath = projection
    .map((p, i) => `${i === 0 ? "M" : "L"} ${x(p.month)} ${y(p.weight)}`)
    .join(" ");
  const areaPath = `${linePath} L ${x(12)} ${H - pad} L ${x(0)} ${H - pad} Z`;

  return (
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      {/* Controls */}
      <div className="rounded-3xl border border-forest/10 bg-white p-6 md:p-8">
        <h3 className="font-display text-2xl text-forest">Your details</h3>
        <p className="mt-1 text-sm text-muted">
          Adjust the sliders to see a personalised estimate.
        </p>

        {/* Unit toggle */}
        <div className="mt-6 inline-flex rounded-full border border-forest/15 p-1 text-sm">
          {(["st", "kg"] as const).map((u) => (
            <button
              key={u}
              onClick={() => setUnit(u)}
              className={cn(
                "rounded-full px-4 py-1.5 font-medium transition-colors",
                unit === u ? "bg-forest text-cream" : "text-forest/70",
              )}
            >
              {u === "st" ? "Stones" : "Kilograms"}
            </button>
          ))}
        </div>

        {/* Weight */}
        <Slider
          label="Current weight"
          value={fmtWeight(weightKg)}
          min={50}
          max={180}
          raw={weightKg}
          onChange={setWeightKg}
        />
        {/* Height */}
        <Slider
          label="Height"
          value={`${heightCm} cm`}
          min={140}
          max={210}
          raw={heightCm}
          onChange={setHeightCm}
        />
        {/* Adherence */}
        <Slider
          label="Plan adherence"
          value={`${adherence}%`}
          min={50}
          max={100}
          raw={adherence}
          onChange={setAdherence}
          hint="How consistently you follow the plan and coaching."
        />

        {/* Medication picker */}
        <p className="mt-8 text-sm font-medium text-forest">Treatment</p>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {products.map((p) => (
            <button
              key={p.slug}
              onClick={() => setProductSlug(p.slug)}
              className={cn(
                "flex items-center gap-2 rounded-2xl border p-2.5 text-left transition-all",
                productSlug === p.slug
                  ? "border-clay bg-clay/5 ring-1 ring-clay/40"
                  : "border-forest/10 hover:border-forest/25",
              )}
            >
              <span className="h-10 w-10 shrink-0">
                <ProductArt art={p.art} accent={p.accent} />
              </span>
              <span>
                <span className="block text-sm font-medium text-forest">
                  {p.name}
                </span>
                <span className="block text-xs text-muted">{p.avgLoss} avg</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="flex flex-col rounded-3xl border border-forest/10 bg-forest p-6 text-cream md:p-8">
        <div className="flex items-center gap-2 text-gold">
          <TrendingDown className="h-5 w-5" />
          <span className="text-xs font-semibold uppercase tracking-wider">
            Your 12-month estimate
          </span>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-4">
          <Stat
            big={fmtWeight(totalLostKg)}
            label="could be lost"
            accent
          />
          <Stat big={fmtWeight(final.weight)} label="projected weight" />
          <Stat
            big={`${((totalLostKg / weightKg) * 100).toFixed(0)}%`}
            label="of body weight"
          />
        </div>

        {/* Chart */}
        <div className="mt-6 rounded-2xl bg-forest-600/40 p-4">
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="h-auto w-full"
            preserveAspectRatio="none"
            role="img"
            aria-label="Projected weight over 12 months"
          >
            <defs>
              <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#d97757" stopOpacity="0.55" />
                <stop offset="1" stopColor="#d97757" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d={areaPath} fill="url(#area)" />
            <path
              d={linePath}
              fill="none"
              stroke="#e0b04a"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {projection.map((p) => (
              <circle
                key={p.month}
                cx={x(p.month)}
                cy={y(p.weight)}
                r="3.5"
                fill="#faf6f0"
              />
            ))}
          </svg>
          <div className="mt-2 flex justify-between text-[11px] text-cream/60">
            <span>Start</span>
            <span>Month 6</span>
            <span>Month 12</span>
          </div>
        </div>

        {/* BMI */}
        <div className="mt-6 flex items-center justify-between rounded-2xl bg-forest-600/40 px-5 py-4">
          <BmiPill label="BMI now" value={startBmi} />
          <ArrowRight className="h-5 w-5 text-gold" />
          <BmiPill label="Projected BMI" value={endBmi} />
        </div>

        <div className="mt-6 flex items-start gap-2 text-xs text-cream/60">
          <Info className="mt-0.5 h-4 w-4 shrink-0" />
          <p>
            Estimates are illustrative, based on average results from published
            GLP-1 studies — individual results vary. Not medical advice.
          </p>
        </div>

        <ButtonLink
          href="/quiz"
          size="lg"
          variant="secondary"
          className="mt-6 w-full"
        >
          Check if I&apos;m eligible
          <ArrowRight className="h-4 w-4" />
        </ButtonLink>
      </div>
    </div>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  raw,
  onChange,
  hint,
}: {
  label: string;
  value: string;
  min: number;
  max: number;
  raw: number;
  onChange: (n: number) => void;
  hint?: string;
}) {
  return (
    <div className="mt-6">
      <div className="flex items-baseline justify-between">
        <label className="text-sm font-medium text-forest">{label}</label>
        <span className="font-display text-lg text-clay">{value}</span>
      </div>
      <input
        type="range"
        className="renura-range mt-3 w-full"
        min={min}
        max={max}
        value={raw}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      {hint && <p className="mt-1.5 text-xs text-muted">{hint}</p>}
    </div>
  );
}

function Stat({
  big,
  label,
  accent,
}: {
  big: string;
  label: string;
  accent?: boolean;
}) {
  return (
    <div>
      <p
        className={cn(
          "font-display text-xl leading-tight md:text-2xl",
          accent ? "text-gold" : "text-cream",
        )}
      >
        {big}
      </p>
      <p className="mt-1 text-[11px] leading-tight text-cream/60">{label}</p>
    </div>
  );
}

function BmiPill({ label, value }: { label: string; value: number }) {
  const cat = bmiCategory(value);
  return (
    <div className="text-center">
      <p className="text-[11px] text-cream/60">{label}</p>
      <p className="font-display text-2xl text-cream">{value.toFixed(1)}</p>
      <p className={cn("text-[11px] font-medium", cat.color)}>{cat.label}</p>
    </div>
  );
}
