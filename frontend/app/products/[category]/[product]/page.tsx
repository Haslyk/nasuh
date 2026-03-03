"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { API_BASE_URL, UPLOADS_URL } from "@/lib/constants";
import { Loader2, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ProductDetailPage() {
  const params = useParams();
  const [product, setProduct] = useState<any>(null);
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        // 1. Ürünü çek
        const prodRes = await fetch(
          `${API_BASE_URL}/products/detail/${params.product}`
        );
        const productData = await prodRes.json();
        setProduct(productData);

        // 2. Kategorileri çekip ürünün kategorisini bul
        const catRes = await fetch(`${API_BASE_URL}/categories`);
        const categories = await catRes.json();
        const foundCat = categories.find(
          (c: any) => c.slug == productData.category_slug
        );
        if (foundCat) setCategoryName(foundCat.name);
      } catch (err) {
        console.error("Ürün detayı yüklenemedi:", err);
      } finally {
        setLoading(false);
      }
    };

    if (params.product) fetchProductData();
  }, [params.product]);

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="animate-spin" />
      </div>
    );
  if (!product)
    return <div className="text-center py-20 font-bold">Ürün bulunamadı.</div>;

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Üst Navigasyon Çubuğu */}
      <div className="bg-slate-50 border-b py-4 mb-12">
        <div className="container mx-auto px-6 flex items-center gap-4">
          <Link
            href="/products"
            className="text-slate-400 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft size={20} />
          </Link>
          <span className="text-xs font-black uppercase tracking-widest text-slate-400">
            Ürünler / {categoryName} / {product.name}
          </span>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Ürün Görseli */}
          <div className="relative aspect-square rounded-[3rem] overflow-hidden bg-slate-100 shadow-2xl">
            <Image
              src={`${UPLOADS_URL}${product?.image_url}`}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Ürün Bilgileri */}
          <div className="flex flex-col space-y-8 justify-center">
            <div className="space-y-4">
              <span className="px-4 py-1.5 bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-[0.2em] rounded-full">
                {categoryName}
              </span>
              <h1 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tighter uppercase">
                {product.name}
              </h1>
            </div>

            {/* Kısa Açıklama */}
            <p className="text-xl text-slate-600 font-semibold italic border-l-4 border-blue-600 pl-6 leading-relaxed">
              {product.description}
            </p>

            {/* Uzun Açıklama (Content) */}
            <div className="space-y-4">
              <h3 className="text-lg font-black uppercase tracking-widest text-slate-400">
                Ürün Hakkında
              </h3>
              <div className="text-slate-600 leading-loose whitespace-pre-line text-lg font-medium">
                {product.content || "Detaylı açıklama bulunmuyor."}
              </div>
            </div>

            {/* Teklif Al Butonu */}
            <div className="pt-6">
              <Link
                href="/contact"
                className="inline-block bg-[#0F3460] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/20"
              >
                Fiyat Teklifi Al
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
