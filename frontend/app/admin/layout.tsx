"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  FolderTree,
  Image as ImageIcon,
  Settings,
  FileText,
  LogOut,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const MENU_ITEMS = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Slider Yönetimi", href: "/admin/slider", icon: ImageIcon },
  { name: "Kategori Yönetimi", href: "/admin/categories", icon: FolderTree }, // Menüye eklendi
  { name: "Ürün Yönetimi", href: "/admin/products", icon: Package },
  { name: "Kurumsal İçerik", href: "/admin/corporate", icon: FileText },
  { name: "Site Ayarları", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Sayfa değiştiğinde mobil menüyü kapat
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* --- SIDEBAR (Desktop) --- */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-72 bg-[#0F3460] text-white transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0",
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo / Brand Alanı */}
          <div className="h-20 flex items-center px-8 border-b border-white/10">
            <span className="text-xl font-black tracking-wider uppercase">
              Admin<span className="text-blue-400">Panel</span>
            </span>
          </div>

          {/* Navigasyon */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {MENU_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group",
                    isActive
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <item.icon
                      size={20}
                      className={cn(
                        isActive
                          ? "text-white"
                          : "text-slate-400 group-hover:text-white"
                      )}
                    />
                    <span className="font-medium">{item.name}</span>
                  </div>
                  {isActive && <ChevronRight size={16} />}
                </Link>
              );
            })}
          </nav>

          {/* Alt Kısım: Çıkış Yap */}
          <div className="p-4 border-t border-white/10">
            <Button
              onClick={handleLogout}
              variant="ghost"
              className="w-full justify-start gap-3 text-red-400 hover:text-white hover:bg-red-600/20 h-12 rounded-xl transition-all"
            >
              <LogOut size={20} />
              <span className="font-semibold">Güvenli Çıkış</span>
            </Button>
          </div>
        </div>
      </aside>

      {/* --- ANA İÇERİK ALANI --- */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Üst Navbar (Mobil için Menu Butonu) */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 lg:justify-end shrink-0">
          <button
            className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-slate-900">Halim</p>
              <p className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">
                Sistem Yöneticisi
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700 font-bold">
              H
            </div>
          </div>
        </header>

        {/* Sayfa İçeriği */}
        <main className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          {children}
        </main>
      </div>

      {/* Mobil Arka Plan Karartma */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </div>
  );
}
