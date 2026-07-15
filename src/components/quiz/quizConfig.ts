import type { LucideIcon } from "lucide-react";
import {
  Target,
  User,
  Ruler,
  HeartPulse,
  Syringe,
  Mail,
} from "lucide-react";

export type StepId =
  | "goal"
  | "about"
  | "measurements"
  | "health"
  | "preference"
  | "contact";

export type Step = {
  id: StepId;
  title: string;
  subtitle: string;
  icon: LucideIcon;
};

export const quizSteps: Step[] = [
  {
    id: "goal",
    title: "What's your main goal?",
    subtitle: "This helps your clinician understand what matters to you.",
    icon: Target,
  },
  {
    id: "about",
    title: "Tell us about you",
    subtitle: "A few basics to check the programme is suitable.",
    icon: User,
  },
  {
    id: "measurements",
    title: "Your height & weight",
    subtitle: "We use this to calculate your BMI and eligibility.",
    icon: Ruler,
  },
  {
    id: "health",
    title: "Your health history",
    subtitle: "Select anything that applies. Everything stays confidential.",
    icon: HeartPulse,
  },
  {
    id: "preference",
    title: "Treatment preference",
    subtitle: "There's no wrong answer — your clinician will guide you.",
    icon: Syringe,
  },
  {
    id: "contact",
    title: "Where should we send your result?",
    subtitle: "We'll email your eligibility outcome and next steps.",
    icon: Mail,
  },
];

export const goalOptions = [
  { value: "lose-weight", label: "Lose weight for good", emoji: "⚖️" },
  { value: "more-energy", label: "Have more energy", emoji: "⚡" },
  { value: "health-condition", label: "Manage a health condition", emoji: "🩺" },
  { value: "confidence", label: "Feel confident again", emoji: "✨" },
];

export const sexOptions = [
  { value: "female", label: "Female" },
  { value: "male", label: "Male" },
  { value: "other", label: "Prefer to self-describe" },
];

export const healthOptions = [
  { value: "type-2-diabetes", label: "Type 2 diabetes" },
  { value: "high-blood-pressure", label: "High blood pressure" },
  { value: "high-cholesterol", label: "High cholesterol" },
  { value: "pcos", label: "PCOS" },
  { value: "sleep-apnoea", label: "Sleep apnoea" },
  { value: "none", label: "None of these" },
];

export const preferenceOptions = [
  {
    value: "injection",
    label: "Weekly injection pen",
    hint: "Most effective average results",
  },
  {
    value: "tablet",
    label: "Daily tablet",
    hint: "Needle-free option",
  },
  {
    value: "not-sure",
    label: "I'm not sure yet",
    hint: "Let my clinician recommend",
  },
];

export type QuizData = {
  goal: string;
  sex: string;
  age: string;
  heightCm: number;
  weightKg: number;
  conditions: string[];
  preference: string;
  firstName: string;
  email: string;
  phone: string;
  consent: boolean;
};

export const emptyQuiz: QuizData = {
  goal: "",
  sex: "",
  age: "",
  heightCm: 168,
  weightKg: 90,
  conditions: [],
  preference: "",
  firstName: "",
  email: "",
  phone: "",
  consent: false,
};
