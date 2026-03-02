"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { API_BASE_URL } from "@/lib/constants";
import { Phone, Mail, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [settings, setSettings] = useState<any>(null);
  const [categories, setCategories] = useState<any[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    fetch(`${API_BASE_URL}/settings`)
      .then((res) => res.json())
      .then((data) => setSettings(data))
      .catch((err) => console.error("Ayarlar çekilemedi", err));

    fetch(`${API_BASE_URL}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Kategoriler çekilemedi", err));

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "w-full fixed top-0 z-[100] transition-all duration-300",
        isScrolled ? "shadow-lg" : ""
      )}
    >
      {!isScrolled && (
        <div className="bg-[#0F3460] text-white py-2 hidden md:block border-b border-white/10">
          <div className="container mx-auto px-4 flex justify-between items-center text-xs font-medium uppercase tracking-widest">
            <div className="flex gap-6">
              <a
                href={`tel:${settings?.phone}`}
                className="flex items-center gap-2 hover:text-blue-300 transition-colors"
              >
                <Phone size={14} /> {settings?.phone || "Yükleniyor..."}
              </a>
              <a
                href={`mailto:${settings?.email}`}
                className="flex items-center gap-2 hover:text-blue-300 transition-colors"
              >
                <Mail size={14} /> {settings?.email || "Yükleniyor..."}
              </a>
            </div>
            <div>{settings?.tagline || "Mühendislikte Güven ve Kalite"}</div>
          </div>
        </div>
      )}

      {/* Ana Navigasyon */}
      <nav
        className={cn(
          "bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all duration-300",
          isScrolled ? "h-16" : "h-20"
        )}
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-black text-[#0F3460] tracking-tighter uppercase"
          >
            {settings?.company_name?.split(" ")[0] || "NASUH"}
            <span className="text-blue-600">
              {settings?.company_name?.split(" ")[1] || "MAKİNE"}
            </span>
          </Link>

          {/* Desktop Menü */}
          <div className="hidden lg:flex items-center gap-8 font-bold text-sm text-slate-600 uppercase">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Ana Sayfa
            </Link>

            {/* Ürünler Dropdown */}
            <div className="relative group py-4">
              <Link
                href="/products"
                className="flex items-center gap-1 hover:text-blue-600 transition-colors cursor-pointer"
              >
                Ürünler <ChevronDown size={14} />
              </Link>

              {/* Dropdown Menü (Kategoriler) */}
              {categories.length > 0 && (
                <div className="absolute top-full left-0 w-64 bg-white border border-slate-100 shadow-xl rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[110]">
                  <div className="py-2">
                    {categories.map((cat) => (
                      <Link
                        key={cat.id || cat._id}
                        href={`/products/${cat.slug}`}
                        className="block px-6 py-3 hover:bg-slate-50 hover:text-blue-600 transition-colors border-b border-slate-50 last:border-0"
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/corporate/about"
              className="hover:text-blue-600 transition-colors"
            >
              Kurumsal
            </Link>
            <Link
              href="/contact"
              className="hover:text-blue-600 transition-colors"
            >
              İletişim
            </Link>
            <Button className="bg-[#0F3460] hover:bg-blue-700 text-white rounded-full px-6 shadow-lg shadow-blue-900/20">
              Teklif Alın
            </Button>
          </div>

          {/* Mobil Menü Butonu */}
          <button
            className="lg:hidden p-2 text-slate-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobil Menü Paneli */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-6 flex flex-col gap-4 shadow-2xl font-bold animate-in slide-in-from-top duration-300 overflow-y-auto max-h-[80vh]">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              Ana Sayfa
            </Link>

            {/* Mobil Ürünler ve Kategoriler */}
            <div className="flex flex-col gap-2">
              <Link href="/products" onClick={() => setIsMenuOpen(false)}>
                Ürünler
              </Link>
              <div className="pl-4 flex flex-col gap-2 text-sm text-slate-500 font-semibold border-l-2 border-slate-100">
                {categories.map((cat) => (
                  <Link
                    key={cat.id || cat._id}
                    href={`/products/${cat.slug}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/corporate/about" onClick={() => setIsMenuOpen(false)}>
              Kurumsal
            </Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              İletişim
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
