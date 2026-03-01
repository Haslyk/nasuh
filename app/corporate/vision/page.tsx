import type { Metadata } from "next";
import { corporate } from "@/data/content";
import { PageHero } from "@/components/page-hero";
import { Target, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "Vizyon ve Misyon",
  description: corporate.vision.vision.text,
};

export default function VisionPage() {
  const data = corporate.vision;

  return (
    <>
      <PageHero
        title={data.title}
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Kurumsal", href: "/corporate" },
          { label: "Vizyon ve Misyon" },
        ]}
      />

      <section className="py-20 bg-card">
        <div className="mx-auto max-w-7xl px-6">
          {/* Vision & Mission blocks */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-lg border border-border bg-background p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <Compass className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  {data.vision.heading}
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {data.vision.text}
              </p>
            </div>

            <div className="rounded-lg border border-border bg-background p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
                  <Target className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  {data.mission.heading}
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {data.mission.text}
              </p>
            </div>
          </div>

          {/* Core values */}
          <div className="mt-20">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary mb-2">
              Temel Degerlerimiz
            </h3>
            <h2 className="text-3xl font-bold text-foreground mb-12">
              Bize Yol Gosteren Ilkeler
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {data.values.map((value, i) => (
                <div
                  key={value.title}
                  className="relative rounded-lg border border-border bg-background p-8"
                >
                  <span className="text-5xl font-bold text-muted/50 font-mono absolute top-4 right-4">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="text-lg font-semibold text-foreground mt-6">
                    {value.title}
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
