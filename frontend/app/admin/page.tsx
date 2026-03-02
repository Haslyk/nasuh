"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Image as ImageIcon, Settings, FileText } from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    {
      title: "Toplam Ürün",
      value: "12",
      icon: Package,
      color: "text-blue-600",
    },
    {
      title: "Aktif Slider",
      value: "3",
      icon: ImageIcon,
      color: "text-purple-600",
    },
    {
      title: "Kurumsal Sayfa",
      value: "3",
      icon: FileText,
      color: "text-green-600",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#0F3460]">Dashboard</h1>
        <p className="text-slate-500">
          Hoş geldiniz, site içeriğini buradan yönetebilirsiniz.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="shadow-sm border-slate-200">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-500 uppercase">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-white p-8 rounded-xl border border-dashed border-slate-300 flex flex-col items-center justify-center text-center space-y-3">
        <div className="p-3 bg-slate-100 rounded-full">
          <Settings className="h-6 w-6 text-slate-400" />
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">Hızlı Başlangıç</h3>
          <p className="text-sm text-slate-500 max-w-sm">
            Sol menüyü kullanarak ürünlerinizi güncelleyebilir veya site genel
            ayarlarını değiştirebilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
}
