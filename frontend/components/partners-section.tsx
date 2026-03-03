"use client";

import { useEffect, useState } from "react";
import { API_BASE_URL, UPLOADS_URL } from "@/lib/constants";

export function PartnersSection() {
  const [partners, setPartners] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE_URL}/partners`)
      .then((res) => res.json())
      .then((data) => {
        setPartners(Array.isArray(data) ? data : []);
      })
      .catch((err) => console.error("Partnerler çekilemedi:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading || partners.length === 0) return null;

  return (
    <section className="py-24 bg-white border-y border-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 mb-12 text-center">
        <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900">
          Referanslarımız
        </h2>
        <div className="h-1 w-20 bg-blue-600 mx-auto mt-4 rounded-full" />
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="flex animate-marquee whitespace-nowrap gap-16 items-center py-4">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="w-40 md:w-52 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-50 hover:opacity-100"
            >
              <img
                src={`${UPLOADS_URL}${partner.image_url}`}
                alt={partner.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
