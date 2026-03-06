"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { API_BASE_URL, UPLOADS_URL } from "@/lib/constants";
import { PageHero } from "@/components/page-hero";
import { Loader2, CheckCircle2 } from "lucide-react";

export default function DynamicCorporatePage() {
  const params = useParams();
  const [data, setData] = useState<any>(null);
  const [stats, setStats] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const slug = params.slug as string;

    Promise.all([
      fetch(`${API_BASE_URL}/corporate/${slug}`).then((res) => res.json()),
      fetch(`${API_BASE_URL}/stats`).then((res) => res.json()),
    ])
      .then(([corpData, statsData]) => {
        setData(corpData);
        setStats(statsData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Veri yükleme hatası:", err);
        setLoading(false);
      });
  }, [params.slug]);

  if (loading)
    return (
      <div className="h-[70vh] flex items-center justify-center">
        <Loader2 className="animate-spin h-10 w-10 text-blue-600" />
      </div>
    );

  if (!data || data.message)
    return (
      <div className="h-[70vh] flex items-center justify-center text-slate-500 font-bold">
        İçerik bulunamadı.
      </div>
    );

  return (
    <>
      <PageHero
        title={data.title}
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Kurumsal", href: "/corporate" },
          { label: data.title },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-start">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl border border-slate-100">
              <Image
                src={
                  data.image_url
                    ? `${UPLOADS_URL}${data.image_url}`
                    : "/images/about.jpg"
                }
                alt={data.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="flex flex-col">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-600 mb-4 block">
                {data.subtitle || "Nasuh Ambalaj & Kağıt"}
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 uppercase tracking-tighter">
                {data.title}
              </h2>

              <div
                className="prose prose-slate max-w-none text-slate-600 leading-loose font-medium whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: data.content }}
              />

              {params.slug === "quality" && (
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 font-bold text-sm text-slate-700">
                    <CheckCircle2 className="text-blue-600" size={18} /> ISO
                    9001:2015
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 font-bold text-sm text-slate-700">
                    <CheckCircle2 className="text-blue-600" size={18} /> CE
                    Sertifikasyonu
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-24 grid grid-cols-2 gap-8 lg:grid-cols-4 border-t border-slate-100 pt-16">
            {stats.slice(0, 4).map((stat) => (
              <div key={stat.id} className="text-center group">
                <div className="text-4xl md:text-5xl font-black text-[#0F3460] group-hover:text-blue-600 transition-colors">
                  {stat.value}
                </div>
                <div className="mt-2 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
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
