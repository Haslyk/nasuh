import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, featuredCategories } from "@/data/content";
import { PageHero } from "@/components/page-hero";
import { ArrowRight } from "lucide-react";

interface Props {
  params: Promise<{ category: string; product: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({
    category: p.categorySlug,
    product: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { product: productSlug } = await params;
  const product = products.find((p) => p.slug === productSlug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { category, product: productSlug } = await params;
  const product = products.find(
    (p) => p.categorySlug === category && p.slug === productSlug
  );
  if (!product) notFound();

  const cat = featuredCategories.find((c) => c.slug === category);

  return (
    <>
      <PageHero
        title={product.name}
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Urunler", href: "/products" },
          { label: cat?.title ?? product.category, href: `/products/${category}` },
          { label: product.name },
        ]}
      />

      <section className="py-20 bg-card">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Gallery */}
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              {product.gallery.length > 1 && (
                <div className="grid grid-cols-3 gap-3">
                  {product.gallery.map((img, i) => (
                    <div
                      key={i}
                      className="relative aspect-[4/3] overflow-hidden rounded-md border border-border"
                    >
                      <Image
                        src={img}
                        alt={`${product.name} - Gorsel ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 33vw, 16vw"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Details */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-2 block">
                {product.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {product.name}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                {product.description}
              </p>

              {/* Specs table */}
              <div className="rounded-lg border border-border overflow-hidden">
                <div className="bg-muted px-6 py-3">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                    Teknik Ozellikler
                  </h3>
                </div>
                <div className="divide-y divide-border">
                  {product.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex items-center justify-between px-6 py-3.5"
                    >
                      <span className="text-sm text-muted-foreground">
                        {spec.label}
                      </span>
                      <span className="text-sm font-medium text-foreground">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Link
                href="/contact?quote=true"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-secondary px-7 py-3.5 text-sm font-semibold text-secondary-foreground shadow-sm hover:opacity-90 transition-opacity"
              >
                Bu Urun Icin Teklif Alin
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
