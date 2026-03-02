"use client";

import { useEffect, useState } from "react";
import { API_BASE_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Loader2, Save, Globe, Phone, Share2, MapPin } from "lucide-react";
import { toast } from "sonner";

export default function SettingsPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [settings, setSettings] = useState<any>({});

  useEffect(() => {
    fetch(`${API_BASE_URL}/settings`)
      .then(res => res.json())
      .then(data => {
        const sanitized = Object.keys(data).reduce((acc: any, key) => {
          acc[key] = data[key] === null ? "" : data[key];
          return acc;
        }, {});
        setSettings(sanitized);
        setLoading(false);
      });
  }, []);

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch(`${API_BASE_URL}/settings`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });
      if (res.ok) toast.success("Ayarlar güncellendi.");
    } finally { setSaving(false); }
  };

  if (loading) return <div className="flex justify-center py-20"><Loader2 className="animate-spin h-10 w-10 text-[#0F3460]" /></div>;

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-10">
      <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h1 className="text-2xl font-bold text-slate-900">Site Yapılandırması</h1>
        <Button onClick={handleSave} disabled={saving} className="bg-[#0F3460] hover:bg-[#1a4b85] px-10">
          {saving ? <Loader2 className="animate-spin h-4 w-4" /> : <Save className="mr-2 h-4 w-4" />}
          Değişiklikleri Kaydet
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Kimlik Bilgileri */}
        <Card className="border-none shadow-xl rounded-2xl">
          <CardHeader className="flex flex-row items-center gap-3 border-b bg-slate-50/50 rounded-t-2xl">
            <Globe className="text-blue-600" size={20} />
            <CardTitle className="text-lg">Kurumsal Kimlik</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="space-y-2">
              <Label>Şirket Adı</Label>
              <Input value={settings.company_name} onChange={e => setSettings({...settings, company_name: e.target.value})} />
            </div>
            <div className="space-y-2">
              <Label>Slogan</Label>
              <Input value={settings.tagline} onChange={e => setSettings({...settings, tagline: e.target.value})} />
            </div>
          </CardContent>
        </Card>

        {/* İletişim */}
        <Card className="border-none shadow-xl rounded-2xl">
          <CardHeader className="flex flex-row items-center gap-3 border-b bg-slate-50/50 rounded-t-2xl">
            <Phone className="text-green-600" size={20} />
            <CardTitle className="text-lg">İletişim Bilgileri</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="space-y-2">
              <Label>E-Posta</Label>
              <Input value={settings.email} onChange={e => setSettings({...settings, email: e.target.value})} />
            </div>
            <div className="space-y-2">
              <Label>Telefon</Label>
              <Input value={settings.phone} onChange={e => setSettings({...settings, phone: e.target.value})} />
            </div>
          </CardContent>
        </Card>

        {/* Sosyal Medya */}
        <Card className="md:col-span-2 border-none shadow-xl rounded-2xl">
          <CardHeader className="flex flex-row items-center gap-3 border-b bg-slate-50/50 rounded-t-2xl">
            <Share2 className="text-purple-600" size={20} />
            <CardTitle className="text-lg">Sosyal Medya Linkleri</CardTitle>
          </CardHeader>
          <CardContent className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label>Instagram URL</Label>
              <Input value={settings.instagram} onChange={e => setSettings({...settings, instagram: e.target.value})} />
            </div>
            <div className="space-y-2">
              <Label>LinkedIn URL</Label>
              <Input value={settings.linkedin} onChange={e => setSettings({...settings, linkedin: e.target.value})} />
            </div>
            <div className="space-y-2">
              <Label>YouTube URL</Label>
              <Input value={settings.youtube} onChange={e => setSettings({...settings, youtube: e.target.value})} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}