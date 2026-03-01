import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, featuredCategories } from "@/data/content";
import { PageHero } from "@/components/page-hero";
import { ArrowUpRight } from "lucide-react";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return featuredCategories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = featuredCategories.find((c) => c.slug === category);
  if (!cat) return {};
  return {
    title: cat.title,
    description: cat.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = featuredCategories.find((c) => c.slug === category);
  if (!cat) notFound();

  const categoryProducts = products.filter((p) => p.categorySlug === category);

  return (
    <>
      <PageHero
        title={cat.title}
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Urunler", href: "/products" },
          { label: cat.title },
        ]}
      />

      <section className="py-20 bg-card">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-lg text-muted-foreground max-w-2xl mb-12 leading-relaxed">
            {cat.description}
          </p>

          {categoryProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {categoryProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${category}/${product.slug}`}
                  className="group overflow-hidden rounded-lg border border-border bg-background transition-all hover:shadow-xl hover:border-primary/20"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-all" />
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {product.shortDescription}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground">
                Bu kategorideki urunler yaknda eklenecektir.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 text-primary hover:underline"
              >
                Bilgi icin bize ulasin
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
