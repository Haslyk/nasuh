import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { featuredCategories } from "@/data/content";
import { PageHero } from "@/components/page-hero";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Urunler",
  description:
    "GuneyMak endustriyel makine yelpazesini kesfedin - hidrolik presler, CNC tezgahlar, konveyor sistemleri ve daha fazlasi.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Urunlerimiz"
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Urunler" },
        ]}
      />

      <section className="py-20 bg-card">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products/${cat.slug}`}
                className="group relative overflow-hidden rounded-lg border border-border bg-background transition-all hover:shadow-xl hover:border-primary/20"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-foreground/0 transition-colors group-hover:bg-foreground/10" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {cat.title}
                    </h3>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
