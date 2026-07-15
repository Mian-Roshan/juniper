"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function OptionCard({
  label,
  hint,
  emoji,
  selected,
  onClick,
  multi,
}: {
  label: string;
  hint?: string;
  emoji?: string;
  selected: boolean;
  onClick: () => void;
  multi?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex w-full items-center gap-3 rounded-2xl border p-4 text-left transition-all",
        selected
          ? "border-clay bg-clay/5 ring-1 ring-clay/40"
          : "border-forest/12 bg-white hover:border-forest/30",
      )}
    >
      {emoji && <span className="text-2xl">{emoji}</span>}
      <span className="flex-1">
        <span className="block font-medium text-forest">{label}</span>
        {hint && <span className="block text-xs text-muted">{hint}</span>}
      </span>
      <span
        className={cn(
          "flex h-6 w-6 items-center justify-center border-forest/25 transition-colors",
          multi ? "rounded-md border" : "rounded-full border",
          selected && "border-clay bg-clay text-white",
        )}
      >
        {selected && <Check className="h-4 w-4" />}
      </span>
    </button>
  );
}

export function TextField({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  ...rest
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  error?: string;
} & Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "type"
>) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-forest">
        {label}
      </span>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "w-full rounded-2xl border bg-white px-4 py-3 text-forest outline-none transition-colors placeholder:text-muted/60 focus:border-clay focus:ring-2 focus:ring-clay/20",
          error ? "border-clay" : "border-forest/15",
        )}
        {...rest}
      />
      {error && <span className="mt-1 block text-xs text-clay">{error}</span>}
    </label>
  );
}

export function RangeField({
  label,
  value,
  display,
  min,
  max,
  onChange,
}: {
  label: string;
  value: number;
  display: string;
  min: number;
  max: number;
  onChange: (n: number) => void;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-medium text-forest">{label}</span>
        <span className="font-display text-lg text-clay">{display}</span>
      </div>
      <input
        type="range"
        className="renura-range mt-3 w-full"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
}
