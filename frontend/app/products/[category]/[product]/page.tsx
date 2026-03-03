"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { API_BASE_URL, UPLOADS_URL } from "@/lib/constants";
import { Loader2, ArrowLeft, ShieldCheck, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ProductDetailPage() {
  const params = useParams();
  const [product, setProduct] = useState<any>(null);
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const prodRes = await fetch(
          `${API_BASE_URL}/products/detail/${params.product}`
        );
        const productData = await prodRes.json();
        setProduct(productData);

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
      <div className="h-[70vh] flex items-center justify-center">
        <Loader2 className="animate-spin text-blue-600" size={32} />
      </div>
    );

  if (!product)
    return <div className="text-center py-20 font-bold">Ürün bulunamadı.</div>;

  return (
    <div className="min-h-screen bg-white">
      {/* İnce Breadcrumb / Navigasyon */}
      <div className="bg-slate-50/50 border-b border-slate-100 py-4">
        <div className="container mx-auto px-6">
          <nav className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-widest text-slate-400">
            <Link
              href="/products"
              className="hover:text-blue-600 transition-colors flex items-center gap-1"
            >
              <ArrowLeft size={14} /> Ürünler
            </Link>
            <ChevronRight size={12} className="opacity-50" />
            <span>{categoryName}</span>
            <ChevronRight size={12} className="opacity-50" />
            <span className="text-slate-900 line-clamp-1">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Sol: Görsel Alanı (Genişlik: 5/12) */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <div className="relative aspect-square rounded-[2.5rem] overflow-hidden bg-slate-50 border border-slate-100 shadow-xl">
                <Image
                  src={`${UPLOADS_URL}${product?.image_url}`}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Küçük Güven Rozeti */}
              <div className="mt-6 p-4 rounded-2xl bg-blue-50/50 border border-blue-100 flex items-center gap-3">
                <ShieldCheck className="text-blue-600" size={20} />
                <span className="text-xs font-bold text-blue-900 uppercase tracking-tight">
                  Yüksek Mühendislik ve Kalite Standartları
                </span>
              </div>
            </div>
          </div>

          {/* Sağ: Bilgi Alanı (Genişlik: 7/12) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="space-y-6">
              {/* Kategori Etiketi */}
              <div className="inline-block px-3 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-md">
                {categoryName}
              </div>

              {/* Ürün Başlığı - Boyut Düzeltildi */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.1] tracking-tighter uppercase">
                {product.name}
              </h1>

              {/* Kısa Açıklama - Daha Zarif */}
              <div className="relative pl-6">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 rounded-full" />
                <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed italic">
                  {product.description}
                </p>
              </div>

              <div className="h-px w-full bg-slate-100 my-8" />

              {/* Aksiyon Alanı */}
              <div className="pt-10 flex flex-wrap items-center gap-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-[#0F3460] text-white px-10 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-blue-800 transition-all shadow-lg hover:-translate-y-1 active:translate-y-0"
                >
                  Fiyat Teklifi Al
                </Link>
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                  Stok ve Teslimat Süresi İçin Sorunuz
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
