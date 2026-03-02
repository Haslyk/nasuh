"use client";

import { useEffect, useState } from "react";
import { useParams, notFound } from "next/navigation";
import { API_BASE_URL, UPLOADS_URL } from "@/lib/constants";
import { PageHero } from "@/components/page-hero";
import Image from "next/image";
import Link from "next/link";

export default function CategoryPage() {
  const { category: categorySlug } = useParams();
  const [data, setData] = useState<{ category: any; products: any[] } | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE_URL}/categories`)
      .then((res) => res.json())
      .then(async (categories) => {
        const foundCategory = categories.find(
          (c: any) => c.slug === categorySlug
        );
        if (!foundCategory) {
          setLoading(false);
          return;
        }
        const prodRes = await fetch(`${API_BASE_URL}/products`);
        const allProducts = await prodRes.json();
        const categoryProducts = allProducts.filter(
          (p: any) => p.category_slug === foundCategory.slug
        );

        setData({ category: foundCategory, products: categoryProducts });
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [categorySlug]);

  if (loading) return <div className="py-20 text-center">Yükleniyor...</div>;
  if (!data) return notFound();

  return (
    <>
      <PageHero
        title={data.category.name}
        breadcrumbs={[
          { label: "Ürünler", href: "/products" },
          { label: data.category.name },
        ]}
      />
      <section className="py-20 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.products.map((product) => (
            <Link
              key={product._id}
              href={`/products/${categorySlug}/${product.slug}`}
              className="border rounded-lg overflow-hidden group"
            >
              <div className="relative aspect-square">
                <Image
                  src={`${UPLOADS_URL}${product.image_url}`}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 font-bold group-hover:text-primary">
                {product.name}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
