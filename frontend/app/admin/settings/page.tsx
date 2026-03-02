"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Loader2, Save } from "lucide-react";
import { API_BASE_URL } from "@/lib/constants";

export default function SettingsPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [settings, setSettings] = useState({
    company_name: "",
    tagline: "",
    phone: "",
    email: "",
    address: "",
    working_hours: "",
    instagram: "",
    linkedin: "",
    youtube: "",
    map_embed_url: "",
  });

  // Ayarları Getir
  useEffect(() => {
    fetch(`${API_BASE_URL}/settings`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          const sanitizedData = Object.keys(data).reduce((acc, key) => {
            acc[key] = data[key] === null ? "" : data[key];
            return acc;
          }, {} as any);

          setSettings(sanitizedData);
        }
        setLoading(false);
      });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const res = await fetch(`${API_BASE_URL}/settings`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });

      if (res.ok) {
        toast.success("Ayarlar başarıyla güncellendi.");
      } else {
        toast.error("Güncelleme başarısız.");
      }
    } catch (error) {
      toast.error("Sunucu hatası.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex h-64 w-full items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-[#0F3460]">Site Ayarları</h1>
        <Button
          onClick={handleSubmit}
          disabled={saving}
          className="bg-green-600 hover:bg-green-700"
        >
          {saving ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Save className="mr-2 h-4 w-4" />
          )}
          Kaydet
        </Button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <Card className="md:col-span-2 shadow-sm">
          <CardHeader>
            <CardTitle>Genel Bilgiler</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Şirket Adı</label>
                <Input
                  value={settings.company_name || ""}
                  onChange={(e) =>
                    setSettings({ ...settings, company_name: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Slogan (Tagline)</label>
                <Input
                  value={settings.tagline || ""}
                  onChange={(e) =>
                    setSettings({ ...settings, tagline: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Adres</label>
              <Textarea
                value={settings.address || ""}
                onChange={(e) =>
                  setSettings({ ...settings, address: e.target.value })
                }
              />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>İletişim</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Telefon</label>
              <Input
                value={settings.phone || ""}
                onChange={(e) =>
                  setSettings({ ...settings, phone: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">E-posta</label>
              <Input
                value={settings.email || ""}
                onChange={(e) =>
                  setSettings({ ...settings, email: e.target.value })
                }
              />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Sosyal Medya</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Instagram URL</label>
              <Input
                value={settings.instagram || ""}
                onChange={(e) =>
                  setSettings({ ...settings, instagram: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">LinkedIn URL</label>
              <Input
                value={settings.linkedin || ""}
                onChange={(e) =>
                  setSettings({ ...settings, linkedin: e.target.value })
                }
              />
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
