"use client";

import { useEffect, useState } from "react";
import { API_BASE_URL } from "@/lib/constants";
import * as LucideIcons from "lucide-react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function StatsSection() {
  const [stats, setStats] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE_URL}/stats`)
      .then((res) => res.json())
      .then((data) => setStats(Array.isArray(data) ? data : []))
      .catch((err) => console.error("Veri hatası:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading || stats.length === 0) return null;

  // İstatistik sayısına göre grid kolon sayısını belirliyoruz
  const gridConfig =
    {
      3: "lg:grid-cols-3",
      4: "lg:grid-cols-4",
      5: "lg:grid-cols-5",
    }[stats.length] || "lg:grid-cols-4";

  return (
    <section className="py-20 bg-[#0F3460] text-white">
      <div className="container mx-auto px-6">
        <div
          className={cn(
            "grid grid-cols-1 sm:grid-cols-2 gap-12 items-center justify-center",
            gridConfig // Dinamik kolon sınıfı buraya geliyor
          )}
        >
          {stats.map((stat) => {
            const IconComponent =
              (LucideIcons as any)[stat.icon_name] || LucideIcons.BarChart3;
            return (
              <div
                key={stat.id}
                className="flex flex-col items-center text-center group"
              >
                <div className="mb-6 p-5 bg-white/5 rounded-3xl group-hover:bg-blue-600 transition-all duration-500 group-hover:-translate-y-2 border border-white/10 group-hover:border-blue-400">
                  <IconComponent
                    size={32}
                    className="text-blue-400 group-hover:text-white transition-colors"
                  />
                </div>
                <div className="text-4xl md:text-5xl font-black mb-2 tracking-tighter text-white">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm font-bold text-blue-200/60 uppercase tracking-[0.2em]">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
