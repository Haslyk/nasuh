"use client";

import { AuthGuard } from "@/components/admin/auth-guard";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  Settings,
  Package,
  Image as ImageIcon,
  FileText,
  LogOut,
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const isLoginPage = pathname === "/admin/login";

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    router.replace("/admin/login");
  };

  const menuItems = [
    { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { label: "Site Ayarları", href: "/admin/settings", icon: Settings },
    { label: "Ürün Yönetimi", href: "/admin/products", icon: Package },
    { label: "Slider Yönetimi", href: "/admin/slider", icon: ImageIcon },
    { label: "Kurumsal İçerik", href: "/admin/corporate", icon: FileText },
  ];

  return (
    <AuthGuard>
      <div className="flex min-h-screen bg-gray-100 font-[family-name:var(--font-inter)]">
        {!isLoginPage && (
          <aside className="w-64 bg-[#0F3460] text-white hidden md:flex flex-col fixed h-full">
            <div className="p-6 border-b border-slate-700">
              <h2 className="text-xl font-bold tracking-wider">NASUH PANEL</h2>
            </div>

            <nav className="flex-1 p-4 space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-all ${
                      isActive
                        ? "bg-blue-600 text-white shadow-md"
                        : "hover:bg-slate-800 text-slate-300"
                    }`}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="p-4 border-t border-slate-700">
              <button
                onClick={handleLogout}
                className="flex items-center space-x-3 p-3 w-full rounded-lg hover:bg-red-900/40 text-red-400 transition-colors group"
              >
                <LogOut
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
                <span>Çıkış Yap</span>
              </button>
            </div>
          </aside>
        )}

        <main className={`flex-1 ${isLoginPage ? "" : "md:ml-64 p-8"}`}>
          {children}
        </main>
      </div>
    </AuthGuard>
  );
}
