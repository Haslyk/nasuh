"use client";

import { useEffect, useState } from "react";
import { API_BASE_URL } from "@/lib/constants";
import { PageHero } from "@/components/page-hero";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Loader2 } from "lucide-react";

export default function ProductsPage() {
  const [categories, setCategories] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // API'den dinamik verileri çekiyoruz
    Promise.all([
      fetch(`${API_BASE_URL}/categories`).then((res) => res.json()),
      fetch(`${API_BASE_URL}/products`).then((res) => res.json()),
    ])
      .then(([catData, prodData]) => {
        setCategories(catData);
        console.log("CARDATA:", catData);
        console.log("GGGGGGGGGGGGG:", prodData);
        setProducts(prodData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Veri çekme hatası:", err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="animate-spin" />
      </div>
    );

  return (
    <>
      <PageHero
        title="Ürünlerimiz"
        breadcrumbs={[{ label: "Ana Sayfa", href: "/" }, { label: "Ürünler" }]}
      />

      <section className="py-20 bg-card">
        <div className="mx-auto max-w-7xl px-6">
          {categories.map((category) => {
            const categoryProducts = products.filter(
              (p) => p.category_slug === category.slug
            );

            if (categoryProducts.length === 0) return null;

            return (
              <div key={category._id} className="mb-20 last:mb-0">
                <div className="flex items-center justify-between border-b border-border pb-4 mb-8">
                  <div>
                    <h2 className="text-3xl font-bold text-foreground">
                      {category.name}
                    </h2>
                    {category.description && (
                      <p className="text-muted-foreground mt-2">
                        {category.description}
                      </p>
                    )}
                  </div>
                  <Link
                    href={`/products/${category.slug}`}
                    className="text-primary hover:underline flex items-center gap-1 text-sm font-medium"
                  >
                    Kategoriyi İncele <ArrowUpRight size={16} />
                  </Link>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {categoryProducts.map((product) => (
                    <Link
                      key={product._id}
                      href={`/products/${category.slug}/${product.slug}`}
                      className="group bg-background border border-border rounded-lg overflow-hidden transition-all hover:shadow-lg"
                    >
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={product.image || "/placeholder.jpg"}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                          {product.shortDescription}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
