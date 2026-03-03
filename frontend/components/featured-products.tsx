"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { API_BASE_URL, UPLOADS_URL } from "@/lib/constants";
import { ChevronRight, Loader2 } from "lucide-react";

export function FeaturedProducts() {
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE_URL}/categories`)
      .then((res) => res.json())
      .then((data) => {
        const activeCategories = data.filter((cat: any) => cat.image_url);
        setCategories(activeCategories);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="py-20 flex justify-center">
        <Loader2 className="animate-spin text-blue-600" />
      </div>
    );
  if (categories.length === 0) return null;

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-blue-600">
              Üretim Gücümüz
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter">
              Ürün Gruplarımız
            </h2>
          </div>
          <Link
            href="/products"
            className="group flex items-center gap-2 font-bold text-slate-400 hover:text-blue-600 transition-all"
          >
            Tümünü Gör{" "}
            <ChevronRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.slice(0, 3).map((category) => (
            <Link
              href={`/products/${category.id}`}
              key={category.id}
              className="group relative h-[450px] rounded-[3rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <Image
                src={`${UPLOADS_URL}${category.image_url}`}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-10 w-full">
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2 group-hover:text-blue-400 transition-colors">
                  {category.name}
                </h3>
                <p className="text-slate-300 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                  Yüksek performanslı ve dayanıklı {category.name.toLowerCase()}{" "}
                  çözümlerimizi inceleyin.
                </p>
                <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
                  <ChevronRight size={24} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
