"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { Loader2, Lock, ShieldCheck, User } from "lucide-react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await login(username, password);
      if (data.token) {
        toast.success("Giriş başarılı!");
        router.push("/admin");
      } else {
        toast.error(data.message || "Giriş başarısız.");
      }
    } catch (error) {
      toast.error("Sunucuya bağlanılamadı.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex h-full items-center justify-center">
      {/* Arka plan ışık efekti */}

      <div className="w-full max-w-[420px] px-4">
        {/* Form Card */}
        <Card className="border-white/5 bg-white/5 backdrop-blur-2xl shadow-[0_32px_64px_-15px_rgba(0,0,0,0.5)] rounded-[2.5rem] overflow-hidden mt-40 mb-12 bg-[#0f172a]">
          <CardContent className="p-10">
            <div className="flex flex-col items-center mb-10">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/20 mb-6 rotate-3 hover:rotate-0 transition-transform duration-500">
                <ShieldCheck className="text-white w-12 h-12" />
              </div>
              <h2 className="text-4xl font-black text-white tracking-tighter uppercase">
                Nasuh<span className="text-blue-500">Panel</span>
              </h2>
              <div className="h-1 w-12 bg-blue-500 rounded-full mt-2 opacity-50" />
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-3">
                {/* Kullanıcı Adı */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-blue-400 transition-colors">
                    <User size={18} />
                  </div>
                  <Input
                    type="text"
                    placeholder="Kullanıcı Adı"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="h-14 pl-12 bg-white/5 border-white/10 text-white placeholder:text-slate-500 rounded-2xl focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                  />
                </div>

                {/* Şifre */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-blue-400 transition-colors">
                    <Lock size={18} />
                  </div>
                  <Input
                    type="password"
                    placeholder="Şifre"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="h-14 pl-12 bg-white/5 border-white/10 text-white placeholder:text-slate-500 rounded-2xl focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                  />
                </div>
              </div>

              <Button
                className="w-full h-14 bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-blue-600/20 transition-all active:scale-[0.97] border-t border-white/20"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  "SİSTEME ERİŞ"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
