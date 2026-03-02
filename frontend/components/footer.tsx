"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { API_BASE_URL } from "@/lib/constants";
import {
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export function Footer() {
  const [settings, setSettings] = useState<any>(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/settings`)
      .then((res) => res.json())
      .then((data) => setSettings(data));
  }, []);

  if (!settings) return null;

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Şirket Bilgisi */}
        <div className="space-y-4">
          <h2 className="text-2xl font-black uppercase tracking-tighter">
            {settings.company_name}
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            {settings.tagline}
          </p>
          <div className="flex gap-4 pt-4">
            {settings.instagram && (
              <a
                href={settings.instagram}
                className="hover:text-pink-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
            )}
            {settings.linkedin && (
              <a
                href={settings.linkedin}
                className="hover:text-blue-500 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            )}
            {settings.youtube && (
              <a
                href={settings.youtube}
                className="hover:text-red-500 transition-colors"
              >
                <Youtube size={20} />
              </a>
            )}
          </div>
        </div>

        {/* Hızlı Linkler */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Kurumsal</h3>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li>
              <Link
                href="/corporate/about"
                className="hover:text-white transition-colors"
              >
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link
                href="/corporate/vision"
                className="hover:text-white transition-colors"
              >
                Vizyon & Misyon
              </Link>
            </li>
            <li>
              <Link
                href="/corporate/quality"
                className="hover:text-white transition-colors"
              >
                Kalite Politikası
              </Link>
            </li>
          </ul>
        </div>

        {/* İletişim */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold">İletişim</h3>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-blue-500" /> {settings.phone}
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-blue-500" /> {settings.email}
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-blue-500 shrink-0" />{" "}
              {settings.address || "Yalova, Türkiye"}
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-white/5 text-center text-slate-500 text-xs">
        © {new RegExp(/\d{4}/).exec(new Date().toISOString())}{" "}
        {settings.company_name}. Tüm Hakları Saklıdır.
      </div>
    </footer>
  );
}
