/* ------------------------------------------------------------------ */
/*  Central content model for the Renura Health site.                  */
/*  Original copy + illustrative clinical figures (not medical advice).*/
/* ------------------------------------------------------------------ */

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

export const nav: NavItem[] = [
  {
    label: "Treatments",
    href: "/treatments/weight-loss",
    children: [
      {
        label: "Weight loss",
        href: "/treatments/weight-loss",
        description: "GLP-1 medication + coaching programme",
      },
      {
        label: "Metabolic labs",
        href: "/treatments/weight-loss#labs",
        description: "At-home blood testing & review",
      },
      {
        label: "Hair renewal",
        href: "/treatments/weight-loss#hair",
        description: "Clinician-prescribed regrowth",
      },
      {
        label: "Menopause",
        href: "/treatments/weight-loss#menopause",
        description: "Symptom support & HRT review",
      },
    ],
  },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Calculator", href: "/calculator" },
  { label: "Reviews", href: "/reviews" },
  { label: "About", href: "/about" },
];

/* --------------------------------- Products --------------------------------- */

export type Product = {
  slug: string;
  name: string;
  category: "Injection" | "Tablet";
  tagline: string;
  avgLoss: string; // headline stat
  avgLossPct: number; // for chart
  priceFrom: number; // monthly GBP
  description: string;
  bullets: string[];
  accent: "clay" | "forest" | "gold" | "sage";
  art: "pen" | "pill" | "capsule";
};

export const products: Product[] = [
  {
    slug: "tirzepatide",
    name: "Tirzepatide",
    category: "Injection",
    tagline: "Dual-action weekly pen",
    avgLoss: "20.9%",
    avgLossPct: 20.9,
    priceFrom: 189,
    description:
      "A once-weekly GLP-1/GIP injection that targets appetite and blood sugar regulation for our most significant average results.",
    bullets: [
      "Once-weekly self-injection",
      "Dual GLP-1 & GIP action",
      "Titrated dose plan from your clinician",
    ],
    accent: "clay",
    art: "pen",
  },
  {
    slug: "semaglutide-injection",
    name: "Semaglutide",
    category: "Injection",
    tagline: "The established weekly pen",
    avgLoss: "20.7%",
    avgLossPct: 20.7,
    priceFrom: 169,
    description:
      "A once-weekly GLP-1 injection with years of clinical evidence, slowing digestion and reducing appetite.",
    bullets: [
      "Once-weekly self-injection",
      "Well-studied GLP-1 pathway",
      "Ongoing clinician monitoring",
    ],
    accent: "forest",
    art: "pen",
  },
  {
    slug: "semaglutide-tablet",
    name: "Oral Semaglutide",
    category: "Tablet",
    tagline: "Needle-free daily tablet",
    avgLoss: "16.6%",
    avgLossPct: 16.6,
    priceFrom: 149,
    description:
      "A daily tablet for those who would rather skip injections, delivering GLP-1 support in oral form.",
    bullets: [
      "Once-daily tablet — no needles",
      "Taken on an empty stomach",
      "Simple to travel with",
    ],
    accent: "gold",
    art: "capsule",
  },
  {
    slug: "orlistat",
    name: "Orlistat",
    category: "Tablet",
    tagline: "Non-hormonal option",
    avgLoss: "8%",
    avgLossPct: 8,
    priceFrom: 49,
    description:
      "A non-GLP-1 capsule that reduces the amount of dietary fat your body absorbs — a gentler starting point.",
    bullets: [
      "Taken with meals",
      "Non-hormonal mechanism",
      "Pairs with our nutrition coaching",
    ],
    accent: "sage",
    art: "pill",
  },
];

/* --------------------------------- Stats --------------------------------- */

export const heroStats = [
  { value: "97%", label: "reach clinically significant loss in 4 months" },
  { value: "4.5×", label: "more likely to lose weight vs. medication alone" },
  { value: "300k+", label: "patients supported across the programme" },
  { value: "83%", label: "report improved mood & energy" },
];

/* --------------------------------- Treatments --------------------------------- */

export type Treatment = {
  id: string;
  title: string;
  blurb: string;
  href: string;
  icon: "scale" | "flask" | "sparkles" | "flower";
  image: string;
};

export const treatments: Treatment[] = [
  {
    id: "weight-loss",
    title: "Weight loss",
    blurb:
      "Clinician-prescribed GLP-1 medication paired with health coaching built around your body.",
    href: "/treatments/weight-loss",
    icon: "scale",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=70",
  },
  {
    id: "labs",
    title: "Metabolic labs",
    blurb:
      "At-home blood tests that map your metabolic health, reviewed one-to-one by a clinician.",
    href: "/treatments/weight-loss#labs",
    icon: "flask",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=70",
  },
  {
    id: "hair",
    title: "Hair renewal",
    blurb:
      "Evidence-based regrowth treatments, prescribed and monitored by our medical team.",
    href: "/treatments/weight-loss#hair",
    icon: "sparkles",
    image:
      "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=900&q=70",
  },
  {
    id: "menopause",
    title: "Menopause",
    blurb:
      "Personalised symptom support and HRT reviews to help you feel like yourself again.",
    href: "/treatments/weight-loss#menopause",
    icon: "flower",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=70",
  },
];

/* --------------------------------- How it works --------------------------------- */

export const steps = [
  {
    n: 1,
    title: "Take the 3-minute assessment",
    body: "Answer a few questions about your health, history and goals. It's free and there's no commitment.",
    icon: "clipboard",
  },
  {
    n: 2,
    title: "A clinician reviews your case",
    body: "A registered prescriber checks your eligibility and designs a treatment plan tailored to you.",
    icon: "stethoscope",
  },
  {
    n: 3,
    title: "Treatment arrives at your door",
    body: "Your medication and welcome kit are delivered discreetly, with everything you need to begin.",
    icon: "package",
  },
  {
    n: 4,
    title: "We support you every step",
    body: "Health coaching, dose check-ins and lab reviews keep you progressing safely month after month.",
    icon: "heart-handshake",
  },
];

/* --------------------------------- Testimonials --------------------------------- */

export type Testimonial = {
  name: string;
  age: number;
  location: string;
  quote: string;
  lost: string;
  months: number;
  initials: string;
  accent: "clay" | "forest" | "gold" | "sage";
};

export const testimonials: Testimonial[] = [
  {
    name: "Hannah R.",
    age: 41,
    location: "Manchester",
    quote:
      "For the first time the constant food noise just… quietened. The coaching kept me honest and the check-ins meant I never felt on my own.",
    lost: "2st 6lb",
    months: 7,
    initials: "HR",
    accent: "clay",
  },
  {
    name: "Priya S.",
    age: 36,
    location: "London",
    quote:
      "I'd tried everything. Having a clinician actually explain my labs and adjust my plan made all the difference — this felt like real medicine.",
    lost: "1st 9lb",
    months: 5,
    initials: "PS",
    accent: "forest",
  },
  {
    name: "Emma T.",
    age: 48,
    location: "Bristol",
    quote:
      "The tablet fit my life — no needles, no fuss. My energy is back and my knees thank me on the school run every morning.",
    lost: "3st 1lb",
    months: 9,
    initials: "ET",
    accent: "gold",
  },
  {
    name: "Sofia M.",
    age: 33,
    location: "Leeds",
    quote:
      "What I didn't expect was how much my mood lifted. It's not just a number on the scales — I feel like me again.",
    lost: "1st 12lb",
    months: 6,
    initials: "SM",
    accent: "sage",
  },
];

/* --------------------------------- Clinicians --------------------------------- */

export const clinicians = [
  {
    name: "Dr. Amara Okafor",
    role: "Clinical Director, GP",
    bio: "15 years in metabolic medicine and obesity care.",
    initials: "AO",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=500&q=70",
  },
  {
    name: "Dr. James Whitfield",
    role: "Lead Prescriber",
    bio: "Specialist in GLP-1 therapy and safe dose titration.",
    initials: "JW",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500&q=70",
  },
  {
    name: "Nadia Hassan",
    role: "Head of Health Coaching",
    bio: "Registered dietitian building sustainable nutrition plans.",
    initials: "NH",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=500&q=70",
  },
];

/* --------------------------------- FAQ --------------------------------- */

export const faqs = [
  {
    q: "Is Renura right for me?",
    a: "Our programme is designed for adults with a BMI of 30+, or 27+ with a weight-related health condition. The quickest way to find out is our free 3-minute assessment — a clinician reviews every answer before any treatment is offered.",
  },
  {
    q: "How much does it cost?",
    a: "Treatment plans start from £49/month depending on the medication and dose your clinician recommends. Your assessment is free, and your plan price is confirmed before you ever pay.",
  },
  {
    q: "Are the medications safe?",
    a: "Every treatment is a licensed medication prescribed by a UK-registered clinician after reviewing your health history. We monitor you throughout and adjust your plan to keep it safe and effective.",
  },
  {
    q: "Do I need to inject myself?",
    a: "Not necessarily. We offer both once-weekly injection pens and needle-free daily tablets. Your clinician will help you choose the option that best fits your body and lifestyle.",
  },
  {
    q: "What's included beyond the medication?",
    a: "Every plan includes clinician oversight, health coaching, dose check-ins and access to metabolic lab reviews — because medication works best alongside real support.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. There's no lock-in. You can pause or cancel your plan from your account, and our care team is always on hand to help.",
  },
];

/* --------------------------------- Plans --------------------------------- */

export type Plan = {
  slug: string;
  name: string;
  price: number;
  cadence: string;
  best?: boolean;
  summary: string;
  features: string[];
  accent: "clay" | "forest" | "gold";
};

export const plans: Plan[] = [
  {
    slug: "essential",
    name: "Essential",
    price: 49,
    cadence: "/mo",
    summary: "A supported start with a non-GLP-1 option and coaching.",
    features: [
      "Clinician assessment & plan",
      "Orlistat medication",
      "Monthly coaching check-in",
      "Cancel anytime",
    ],
    accent: "sage" as unknown as "gold",
  },
  {
    slug: "complete",
    name: "Complete",
    price: 169,
    cadence: "/mo",
    best: true,
    summary: "Our most popular GLP-1 programme with full support.",
    features: [
      "Everything in Essential",
      "GLP-1 injection or oral option",
      "Dose titration & monitoring",
      "Fortnightly coaching",
      "Metabolic lab review",
    ],
    accent: "clay",
  },
  {
    slug: "premier",
    name: "Premier",
    price: 219,
    cadence: "/mo",
    summary: "Maximum results with our dual-action medication.",
    features: [
      "Everything in Complete",
      "Dual-action Tirzepatide",
      "Priority clinician access",
      "Quarterly full lab panel",
    ],
    accent: "forest",
  },
];

/* --------------------------------- Trust logos --------------------------------- */

export const trustBadges = [
  "CQC-registered clinic",
  "GPhC pharmacy partners",
  "UK-registered prescribers",
  "GMC-licensed doctors",
  "Data secured & GDPR-compliant",
];
