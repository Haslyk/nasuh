import type { Metadata } from "next";
import { corporate } from "@/data/content";
import { PageHero } from "@/components/page-hero";
import { BadgeCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Kalite Politikasi",
  description: corporate.quality.content[0],
};

export default function QualityPage() {
  const data = corporate.quality;

  return (
    <>
      <PageHero
        title={data.title}
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Kurumsal", href: "/corporate" },
          { label: "Kalite Politikasi" },
        ]}
      />

      <section className="py-20 bg-card">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
            {/* Main content */}
            <div className="lg:col-span-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-3 block">
                {data.subtitle}
              </span>
              <div className="flex flex-col gap-4">
                {data.content.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-muted-foreground leading-relaxed text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Certifications sidebar */}
            <div className="lg:col-span-2">
              <div className="rounded-lg border border-border bg-background p-8 sticky top-32">
                <h3 className="text-lg font-semibold text-foreground mb-6">
                  Sertifikalar ve Standartlar
                </h3>
                <ul className="flex flex-col gap-4">
                  {data.certifications.map((cert) => (
                    <li key={cert} className="flex items-start gap-3">
                      <BadgeCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {cert}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
