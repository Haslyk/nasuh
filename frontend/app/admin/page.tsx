"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { API_BASE_URL } from "@/lib/constants";
import {
  Package,
  FolderTree,
  Image as ImageIcon,
  Globe,
  Users,
} from "lucide-react";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    products: 0,
    categories: 0,
    sliders: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [p, c, s] = await Promise.all([
          fetch(`${API_BASE_URL}/products`).then((res) => res.json()),
          fetch(`${API_BASE_URL}/categories`).then((res) => res.json()),
          fetch(`${API_BASE_URL}/sliders`).then((res) => res.json()),
        ]);
        setStats({
          products: p.length,
          categories: c.length,
          sliders: s.length,
        });
      } catch (e) {
        console.error("Stats error", e);
      }
    };
    fetchStats();
  }, []);

  const statCards = [
    {
      title: "Toplam Ürün",
      value: stats.products,
      icon: Package,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Kategoriler",
      value: stats.categories,
      icon: FolderTree,
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      title: "Slider Sayısı",
      value: stats.sliders,
      icon: ImageIcon,
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      title: "Ziyaretçi",
      value: "---",
      icon: Users,
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-[#0F3460]">Yönetim Paneli</h1>
        <p className="text-slate-500">
          Hoş geldin Halim, işte sitendeki son durum.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((item, i) => (
          <Card
            key={i}
            className="border-none shadow-lg rounded-2xl overflow-hidden"
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    {item.title}
                  </p>
                  <h3 className="text-3xl font-bold mt-1">{item.value}</h3>
                </div>
                <div className={`p-4 ${item.bg} ${item.color} rounded-2xl`}>
                  <item.icon size={24} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
