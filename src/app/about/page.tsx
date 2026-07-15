import type { Metadata } from "next";
import Image from "next/image";
import { Heart, ShieldCheck, Users, Leaf, Mail, Phone, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ContactForm } from "@/components/contact/ContactForm";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Renura is a clinician-led weight loss clinic built on evidence, empathy and whole-person care.",
};

const values = [
  {
    icon: Heart,
    title: "Empathy first",
    body: "Weight is personal. We lead with understanding, never judgement.",
  },
  {
    icon: ShieldCheck,
    title: "Clinically safe",
    body: "Every plan is prescribed and monitored by registered clinicians.",
  },
  {
    icon: Users,
    title: "Never alone",
    body: "Coaching and check-ins mean there's always someone in your corner.",
  },
  {
    icon: Leaf,
    title: "Built to last",
    body: "We focus on sustainable change, not crash results that rebound.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-cream bg-noise py-16 md:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <Badge>Our story</Badge>
            </Reveal>
            <Reveal delay={60}>
              <h1 className="mt-5 font-display text-4xl leading-[1.05] text-forest text-balance md:text-5xl">
                We started Renura because willpower was never the problem
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 text-lg text-muted">
                For too long, weight has been treated as a matter of discipline.
                The science tells a different story — one about biology,
                hormones and support. Renura brings modern medicine and real
                human care together, so people can finally get results that
                last.
              </p>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <div className="relative aspect-square overflow-hidden rounded-[2.5rem] shadow-[var(--shadow-soft)]">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=75"
                alt="A friendly clinician talking with a patient"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 500px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="What we believe"
          title="The values behind every plan"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <Reveal key={v.title} delay={i * 80}>
                <div className="flex h-full flex-col rounded-3xl border border-forest/10 bg-white p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-clay/10 text-clay">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display text-xl text-forest">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{v.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="bg-cream-100">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <SectionHeading
            align="left"
            eyebrow="Get in touch"
            title="We'd love to hear from you"
            intro="Questions about the programme, your plan or your eligibility? Our care team is here to help."
          />
          <div>
            <ContactForm />
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {[
            { icon: Mail, label: "Email", value: "care@renura.health" },
            { icon: Phone, label: "Phone", value: "0800 123 4567" },
            { icon: MapPin, label: "Clinic", value: "London, United Kingdom" },
          ].map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.label}
                className="flex items-center gap-3 rounded-2xl border border-forest/10 bg-white p-4"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest text-cream">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs text-muted">{c.label}</p>
                  <p className="text-sm font-medium text-forest">{c.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
