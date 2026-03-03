"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Image bileşeni eklendi
import { API_BASE_URL } from "@/lib/constants";
import {
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
} from "lucide-react";

export function Footer() {
  const [settings, setSettings] = useState<any>(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/settings`)
      .then((res) => res.json())
      .then((data) => setSettings(data))
      .catch((err) => console.error("Footer ayarları yüklenemedi:", err));
  }, []);

  if (!settings) return null;

  const quickLinks = [
    { label: "Hakkımızda", href: "/corporate/about" },
    { label: "Vizyon & Misyon", href: "/corporate/vision" },
    { label: "Kalite Politikası", href: "/corporate/quality" },
    { label: "Ürünlerimiz", href: "/products" },
    { label: "İletişim", href: "/contact" },
  ];

  return (
    <footer
      className={`${
        settings.font_family || "font-sans"
      } bg-slate-900 text-white pt-20 pb-10`}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* 1. Sütun: Logo ve Kurumsal Kimlik */}
          <div className="space-y-8">
            {/* LOGO ALANI */}
            <Link href="/" className="relative flex items-center group">
              <div className="relative w-48 h-20">
                <Image
                  src="/images/logo.png"
                  alt={settings.company_name || "Logo"}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              {settings.tagline ||
                "Mühendislik ve teknolojide öncü çözümler sunuyoruz."}
            </p>

            <div className="flex gap-4 pt-2">
              {settings.instagram && (
                <a
                  href={settings.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 p-3 rounded-xl hover:bg-pink-600 transition-all"
                >
                  <Instagram size={20} />
                </a>
              )}
              {settings.linkedin && (
                <a
                  href={settings.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 p-3 rounded-xl hover:bg-blue-600 transition-all"
                >
                  <Linkedin size={20} />
                </a>
              )}
              {settings.youtube && (
                <a
                  href={settings.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 p-3 rounded-xl hover:bg-red-600 transition-all"
                >
                  <Youtube size={20} />
                </a>
              )}
            </div>
          </div>

          {/* 2. Sütun: Hızlı Menü */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold uppercase tracking-widest text-blue-500 pt-2">
              Kurumsal
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white text-sm font-medium flex items-center gap-2 group transition-all"
                  >
                    <ChevronRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Sütun: İletişim Bilgileri */}
          <div className="space-y-6 md:col-span-2 lg:col-span-2">
            <h3 className="text-lg font-bold uppercase tracking-widest text-blue-500 pt-2">
              Bize Ulaşın
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4 group">
                  <div className="bg-blue-600/10 p-3 rounded-xl text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-black uppercase text-slate-500 tracking-widest mb-1">
                      Adres
                    </span>
                    <p className="text-sm text-slate-300 font-medium whitespace-pre-line leading-relaxed">
                      {settings.address}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 group">
                  <div className="bg-blue-600/10 p-3 rounded-xl text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-black uppercase text-slate-500 tracking-widest mb-1">
                      Telefon
                    </span>
                    <a
                      href={`tel:${settings.phone}`}
                      className="text-sm text-slate-300 font-bold hover:text-white transition-colors"
                    >
                      {settings.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="bg-blue-600/10 p-3 rounded-xl text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-black uppercase text-slate-500 tracking-widest mb-1">
                      E-Posta
                    </span>
                    <a
                      href={`mailto:${settings.email}`}
                      className="text-sm text-slate-300 font-bold hover:text-white transition-colors"
                    >
                      {settings.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alt Bant */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} {settings.company_name}. Tüm Hakları
            Saklıdır.
          </p>
          <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest flex gap-6">
            <Link
              href="/privacy/kvkk"
              className="hover:text-white transition-colors"
            >
              KVKK
            </Link>
            <Link
              href="/privacy/cookies"
              className="hover:text-white transition-colors"
            >
              Çerez Politikası
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
