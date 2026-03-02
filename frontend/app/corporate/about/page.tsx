import type { Metadata } from "next";
import Image from "next/image";
import { corporate, stats } from "@/data/content";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Hakkimizda",
  description: corporate.about.content[0],
};

export default function AboutPage() {
  const data = corporate.about;

  return (
    <>
      <PageHero
        title={data.title}
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Kurumsal", href: "/corporate" },
          { label: "Hakkimizda" },
        ]}
      />

      <section className="py-20 bg-card">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={data.image}
                alt={data.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Content */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-3 block">
                {data.subtitle}
              </span>
              <div className="flex flex-col gap-4">
                {data.content.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-muted-foreground leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Stats inline */}
          <div className="mt-20 grid grid-cols-2 gap-8 lg:grid-cols-4 border-t border-border pt-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary font-mono">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
