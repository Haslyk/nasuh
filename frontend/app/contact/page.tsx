"use client";

import { useEffect, useState } from "react";
import { PageHero } from "@/components/page-hero";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ExternalLink,
  Loader2,
} from "lucide-react";
import { API_BASE_URL } from "@/lib/constants";

export default function ContactPage() {
  const [settings, setSettings] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE_URL}/settings`)
      .then((res) => res.json())
      .then((data) => setSettings(data))
      .catch((err) => console.error("Ayarlar yüklenemedi:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="animate-spin h-10 w-10 text-blue-600" />
      </div>
    );
  }

  const contactInfo = [
    {
      icon: Phone,
      label: "Telefon",
      value: settings?.phone,
      href: `tel:${settings?.phone}`,
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      icon: Mail,
      label: "E-posta",
      value: settings?.email,
      href: `mailto:${settings?.email}`,
      color: "bg-red-500/10 text-red-600",
    },
    {
      icon: MapPin,
      label: "Adres",
      value: settings?.address,
      href: null,
      color: "bg-amber-500/10 text-amber-600",
    },
    {
      icon: Clock,
      label: "Çalışma Saatleri",
      value: settings?.working_hours || "Hafta İçi: 09:00 - 18:00",
      href: null,
      color: "bg-purple-500/10 text-purple-600",
    },
  ];

  return (
    <>
      <PageHero
        title="İletişim"
        breadcrumbs={[{ label: "Ana Sayfa", href: "/" }, { label: "İletişim" }]}
      />

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Sol: İletişim Kartları */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">
                  Bize Ulaşın
                </h2>
                <p className="text-lg text-slate-500 font-medium leading-relaxed">
                  Sorularınız, teknik destek talepleriniz veya iş birliği için
                  doğrudan kanallarımızdan bize ulaşabilirsiniz.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group"
                  >
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.color} flex-shrink-0 transition-transform group-hover:scale-110`}
                    >
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div className="ml-6">
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors flex items-center gap-2"
                        >
                          {item.value}{" "}
                          <ExternalLink
                            size={14}
                            className="opacity-0 group-hover:opacity-100"
                          />
                        </a>
                      ) : (
                        <p className="text-lg font-bold text-slate-900 whitespace-pre-line">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sağ: WhatsApp Focus Alanı */}
            <div className="lg:col-span-7 h-full">
              <div className="relative h-full min-h-[450px] bg-[#0F3460] rounded-[3rem] overflow-hidden flex flex-col items-center justify-center p-12 text-center text-white shadow-2xl shadow-blue-900/20">
                {/* Background Pattern */}
                <div
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{
                    backgroundImage: `url("https://www.transparenttextures.com/patterns/carbon-fibre.png")`,
                  }}
                ></div>

                <div className="relative z-10 space-y-8 max-w-md">
                  <div className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-green-500 text-white animate-bounce">
                    <MessageCircle size={48} fill="currentColor" />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
                      Hızlı WhatsApp Hattı
                    </h3>
                    <p className="text-blue-100/80 text-lg font-medium">
                      Form doldurmakla vakit kaybetmeyin. Teknik ekibimizle
                      doğrudan WhatsApp üzerinden iletişime geçin.
                    </p>
                  </div>

                  <a
                    href={`https://wa.me/${settings?.phone?.replace(
                      /\D/g,
                      ""
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-4 bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-2xl text-xl font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl shadow-green-500/30"
                  >
                    Hemen Mesaj Gönder
                    <MessageCircle
                      size={24}
                      className="group-hover:rotate-12 transition-transform"
                    />
                  </a>

                  <p className="text-xs font-bold text-blue-200/50 uppercase tracking-[0.3em]">
                    Ortalama yanıt süresi: 15 Dakika
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map: Dinamik URL */}
      {settings?.map_embed_url && (
        <section className="bg-slate-50 pb-24">
          <div className="container mx-auto px-6">
            <div className="relative h-[450px] w-full overflow-hidden rounded-[3rem] border border-slate-200 shadow-inner">
              <iframe
                src={settings.map_embed_url}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Fabrika Konumu"
                className="grayscale contrast-125 opacity-80 hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
