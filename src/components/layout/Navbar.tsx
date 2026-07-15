"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { nav } from "@/lib/content";
import { Wordmark } from "@/components/svg/LeafMark";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false); // mobile drawer
  const [dropdown, setDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-cream/80 backdrop-blur-md">
      <nav className="container-x flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label="Renura Health home">
          <Wordmark />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => setDropdown(item.children ? item.label : null)}
              onMouseLeave={() => setDropdown(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-forest/80 transition-colors hover:text-forest"
              >
                {item.label}
                {item.children && (
                  <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                )}
              </Link>

              {item.children && dropdown === item.label && (
                <div className="absolute left-0 top-full w-72 pt-2">
                  <div className="overflow-hidden rounded-2xl border border-forest/10 bg-white p-2 shadow-[var(--shadow-soft)]">
                    {item.children.map((c) => (
                      <Link
                        key={c.label}
                        href={c.href}
                        className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-cream"
                      >
                        <span className="block text-sm font-medium text-forest">
                          {c.label}
                        </span>
                        {c.description && (
                          <span className="block text-xs text-muted">
                            {c.description}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/calculator"
            className="rounded-full px-4 py-2 text-sm font-medium text-forest/80 hover:text-forest"
          >
            Calculate results
          </Link>
          <ButtonLink href="/quiz" size="sm" variant="secondary">
            Start assessment
          </ButtonLink>
        </div>

        {/* Mobile toggle */}
        <button
          className="rounded-full p-2 text-forest lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={cn(
          "overflow-hidden border-t border-forest/10 bg-cream lg:hidden",
          open ? "max-h-[80vh]" : "max-h-0",
        )}
        style={{ transition: "max-height 0.35s var(--ease-out-expo)" }}
      >
        <div className="container-x flex flex-col gap-1 py-4">
          {nav.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-2.5 text-base font-medium text-forest"
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="ml-3 border-l border-forest/10 pl-3">
                  {item.children.map((c) => (
                    <Link
                      key={c.label}
                      href={c.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-2 text-sm text-muted hover:text-forest"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-3 flex flex-col gap-2">
            <ButtonLink href="/calculator" variant="outline" onClick={() => setOpen(false)}>
              Calculate results
            </ButtonLink>
            <ButtonLink href="/quiz" variant="secondary" onClick={() => setOpen(false)}>
              Start assessment
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
}
