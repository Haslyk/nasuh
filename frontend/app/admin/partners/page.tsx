"use client";

import { useEffect, useState, useRef } from "react";
import { API_BASE_URL, UPLOADS_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Plus,
  Trash2,
  UploadCloud,
  Loader2,
  Image as ImageIcon,
  CheckCircle2,
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export default function PartnersAdminPage() {
  const [partners, setPartners] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [adding, setAdding] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [newName, setNewName] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const fetchPartners = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/partners`);
      const data = await res.json();
      setPartners(Array.isArray(data) ? data : []);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPartners();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) return toast.error("Lütfen bir logo seçin.");

    setAdding(true);
    const formData = new FormData();
    formData.append("name", newName);
    formData.append("image", selectedFile);

    try {
      const res = await fetch(`${API_BASE_URL}/partners`, {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        toast.success("Yeni referans başarıyla eklendi.");
        setNewName("");
        setSelectedFile(null);
        setPreview(null);
        fetchPartners();
      }
    } finally {
      setAdding(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const res = await fetch(`${API_BASE_URL}/partners/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        toast.success("Referans silindi.");
        fetchPartners();
      }
    } catch (e) {
      toast.error("İşlem sırasında hata oluştu.");
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-10 pb-20">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
          Referans & İş Ortakları
        </h1>
        <p className="text-slate-500 font-medium text-lg">
          Marka değerinizi artıran logoları buradan yönetin.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        {/* Sol: Ekleme Formu */}
        <Card className="lg:col-span-1 border-none shadow-2xl rounded-3xl overflow-hidden bg-white">
          <CardHeader className="bg-slate-50/50 border-b border-slate-100 p-6">
            <CardTitle className="text-lg font-bold">
              Yeni Referans Ekle
            </CardTitle>
            <CardDescription>Firma logosunu ve adını giriniz.</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleAdd} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Firma Adı
                </label>
                <Input
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="Firma adını yazınız..."
                  className="h-12 border-slate-200 focus:ring-blue-500/20"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Logo Görseli
                </label>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className={cn(
                    "aspect-video border-2 border-dashed rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300 relative overflow-hidden group",
                    preview
                      ? "border-green-400 bg-green-50/30"
                      : "border-slate-200 hover:border-blue-400 hover:bg-blue-50/30"
                  )}
                >
                  {preview ? (
                    <>
                      <img
                        src={preview}
                        className="absolute inset-0 w-full h-full object-contain p-4"
                        alt="Önizleme"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <UploadCloud className="text-white" size={32} />
                      </div>
                    </>
                  ) : (
                    <div className="text-center p-6 text-slate-400">
                      <ImageIcon className="mx-auto h-10 w-10 mb-2 opacity-20" />
                      <span className="text-xs font-semibold block">
                        Görsel Seç
                      </span>
                    </div>
                  )}
                  <input
                    type="file"
                    ref={fileInputRef}
                    hidden
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </div>
              </div>

              <Button
                disabled={adding}
                className="w-full bg-[#0F3460] hover:bg-[#1a4b85] h-12 rounded-xl shadow-lg shadow-blue-900/20 font-bold"
              >
                {adding ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <Plus className="mr-2" />
                )}
                Referansı Kaydet
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Sağ: Liste */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {partners.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white border border-slate-100 shadow-sm rounded-3xl p-6 aspect-square flex flex-col items-center justify-center transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <img
                  src={`${UPLOADS_URL}${item.image_url}`}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />

                {/* Alt Bilgi Bandı */}
                <div className="absolute bottom-4 left-4 right-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-[10px] font-black uppercase tracking-tighter text-slate-400">
                    {item.name}
                  </p>
                </div>

                {/* Silme Butonu (Hover'da çıkar) */}
                <button
                  onClick={() => handleDelete(item.id)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white p-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100 hover:bg-red-600"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}

            {partners.length === 0 && !loading && (
              <div className="col-span-full py-20 text-center border-2 border-dashed border-slate-100 rounded-3xl">
                <ImageIcon className="mx-auto h-12 w-12 text-slate-200 mb-4" />
                <p className="text-slate-400 font-medium">
                  Henüz bir referans eklenmemiş.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
