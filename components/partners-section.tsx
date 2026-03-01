"use client";

import { partners } from "@/data/content";
import { SectionHeader } from "@/components/why-us";

export function PartnersSection() {
  // Double the list for a seamless scroll
  const doubled = [...partners, ...partners];

  return (
    <section className="py-24 bg-card overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 mb-12">
        <SectionHeader
          label="Guvenilir Ortaklar"
          title="Sektir Liderleriyle Is Birligi"
        />
      </div>

      {/* Infinite scroll carousel */}
      <div className="relative">
        <div className="flex animate-[marquee_30s_linear_infinite] gap-16 px-6">
          {doubled.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex flex-shrink-0 items-center justify-center h-16 w-44 rounded-lg border border-border bg-background px-6"
            >
              <span className="text-sm font-semibold text-muted-foreground tracking-wide whitespace-nowrap">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
