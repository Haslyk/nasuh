"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Loader2 } from "lucide-react";

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [status, setStatus] = useState<
    "loading" | "authorized" | "unauthorized"
  >("loading");

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("adminToken");
      const isLoginPath = pathname === "/admin/login";

      if (!token) {
        if (isLoginPath) {
          setStatus("authorized"); // Login sayfasını görebilir
        } else {
          setStatus("unauthorized");
          router.replace("/admin/login"); // push yerine replace kullanarak geçmişi temizleyelim
        }
      } else {
        if (isLoginPath) {
          router.replace("/admin"); // Token varken logine gitmeye çalışırsa dashboard'a at
        } else {
          setStatus("authorized");
        }
      }
    };

    checkAuth();
  }, [pathname, router]);

  if (status === "loading") {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-gray-50">
        <Loader2 className="h-10 w-10 animate-spin text-[#0F3460]" />
      </div>
    );
  }

  return <>{children}</>;
}
