"use client";

import { useEffect, useState } from "react";
import { API_BASE_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Loader2,
  Save,
  FileText,
  Target,
  ShieldCheck,
  AlignLeft,
} from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";

const PAGES_CONFIG = [
  {
    slug: "about",
    label: "Hakkımızda",
    icon: FileText,
    maxChars: 2500,
    subMax: 150,
  },
  {
    slug: "vision",
    label: "Vizyon & Misyon",
    icon: Target,
    maxChars: 1500,
    subMax: 150,
  },
  {
    slug: "quality",
    label: "Kalite Politikası",
    icon: ShieldCheck,
    maxChars: 1500,
    subMax: 150,
  },
];

export default function CorporateAdmin() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);
  const [data, setData] = useState<any>({});

  const fetchAllPages = async () => {
    setLoading(true);
    try {
      const results = await Promise.all(
        PAGES_CONFIG.map((p) =>
          fetch(`${API_BASE_URL}/corporate/${p.slug}`).then((res) => res.json())
        )
      );

      const newData: any = {};
      results.forEach((page, index) => {
        newData[PAGES_CONFIG[index].slug] = {
          title: page.title || "",
          subtitle: page.subtitle || "",
          content: page.content || "",
        };
      });
      setData(newData);
    } catch (error) {
      toast.error("İçerikler yüklenirken bir hata oluştu.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllPages();
  }, []);

  const handleSave = async (slug: string) => {
    setSaving(slug);
    try {
      const res = await fetch(`${API_BASE_URL}/corporate/${slug}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data[slug]),
      });

      if (res.ok) {
        toast.success(`${data[slug].title} başarıyla güncellendi.`);
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error("Kaydedilirken bir hata oluştu.");
    } finally {
      setSaving(null);
    }
  };

  if (loading) {
    return (
      <div className="flex h-[400px] w-full items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="h-10 w-10 animate-spin text-[#0F3460]" />
          <p className="text-sm font-medium text-slate-400">
            Veriler hazırlanıyor...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-20">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
          Kurumsal İçerik Yönetimi
        </h1>
        <p className="text-slate-500">
          Sayfalarınızın başlık, slogan ve ana metinlerini tek bir panelden
          yönetin.
        </p>
      </div>

      <div className="grid gap-8">
        {PAGES_CONFIG.map((page) => {
          const Icon = page.icon;
          const charCount = (data[page.slug]?.content || "").length;
          const subCount = (data[page.slug]?.subtitle || "").length;

          return (
            <Card
              key={page.slug}
              className="border-none shadow-xl bg-white overflow-hidden rounded-2xl transition-all hover:shadow-2xl"
            >
              <CardHeader className="bg-slate-50/50 border-b border-slate-100 flex flex-row items-center justify-between py-6 px-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100 text-[#0F3460]">
                    <Icon size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold">
                      {page.label}
                    </CardTitle>
                    <CardDescription>
                      Sayfa hiyerarşisini ve içeriğini düzenleyin.
                    </CardDescription>
                  </div>
                </div>
                <Button
                  onClick={() => handleSave(page.slug)}
                  disabled={!!saving}
                  className="bg-[#0F3460] hover:bg-[#1a4b85] px-8 shadow-md"
                >
                  {saving === page.slug ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Save className="mr-2 h-4 w-4" />
                  )}
                  Değişiklikleri Kaydet
                </Button>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                {/* Başlık ve Alt Başlık Yan Yana (Grid) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Sayfa Başlığı
                    </label>
                    <Input
                      value={data[page.slug]?.title}
                      onChange={(e) =>
                        setData({
                          ...data,
                          [page.slug]: {
                            ...data[page.slug],
                            title: e.target.value,
                          },
                        })
                      }
                      className="h-12 text-lg font-semibold border-slate-200 focus:ring-2 focus:ring-[#0F3460]/20"
                      placeholder="Örn: Biz Kimiz?"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Alt Başlık / Slogan
                      </label>
                      <span className="text-[10px] text-slate-400">
                        {subCount} / {page.subMax}
                      </span>
                    </div>
                    <div className="relative">
                      <Input
                        value={data[page.slug]?.subtitle}
                        onChange={(e) => {
                          if (e.target.value.length <= page.subMax) {
                            setData({
                              ...data,
                              [page.slug]: {
                                ...data[page.slug],
                                subtitle: e.target.value,
                              },
                            });
                          }
                        }}
                        className="h-12 border-slate-200 pl-10 italic focus:ring-2 focus:ring-[#0F3460]/20"
                        placeholder="Örn: Geleceği şekillendiren adımlar..."
                      />
                      <AlignLeft
                        size={16}
                        className="absolute left-3 top-4 text-slate-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Ana İçerik Alanı */}
                <div className="space-y-2">
                  <div className="flex justify-between items-end">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Ana İçerik Metni
                    </label>
                    <Badge
                      variant="outline"
                      className={`text-[10px] ${
                        charCount > page.maxChars
                          ? "text-red-500"
                          : "text-slate-500"
                      }`}
                    >
                      {charCount} / {page.maxChars} Karakter
                    </Badge>
                  </div>
                  <Textarea
                    value={data[page.slug]?.content}
                    onChange={(e) => {
                      if (e.target.value.length <= page.maxChars) {
                        setData({
                          ...data,
                          [page.slug]: {
                            ...data[page.slug],
                            content: e.target.value,
                          },
                        });
                      }
                    }}
                    className="min-h-[250px] text-base leading-relaxed border-slate-200 focus:ring-2 focus:ring-[#0F3460]/20 resize-none shadow-inner bg-slate-50/30"
                    placeholder="Tüm detayları buraya yazabilirsiniz..."
                  />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
