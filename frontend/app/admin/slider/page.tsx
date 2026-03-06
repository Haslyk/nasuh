"use client";

import { useEffect, useState, useRef } from "react";
import { API_BASE_URL, UPLOADS_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Plus,
  Trash2,
  Edit3,
  Loader2,
  UploadCloud,
  Link as LinkIcon,
} from "lucide-react";
import { toast } from "sonner";

export default function SliderPage() {
  const [sliders, setSliders] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [editingSlider, setEditingSlider] = useState<any>(null);

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    button_text: "İncele",
    button_link: "/products",
  });
  const [image, setImage] = useState<File | null>(null);

  const fetchSliders = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/sliders`);
      const data = await res.json();
      console.log("DATAAA:", data);
      setSliders(data);
    } catch (error) {
      toast.error("Slider verileri yüklenemedi.");
    }
  };

  useEffect(() => {
    fetchSliders();
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      subtitle: "",
      button_text: "İncele",
      button_link: "/products",
    });
    setImage(null);
    setImagePreview(null);
    setEditingSlider(null);
  };

  const handleEditClick = (slider: any) => {
    setEditingSlider(slider);
    setFormData({
      title: slider.title,
      subtitle: slider.subtitle || "",
      button_text: slider.button_text || "İncele",
      button_link: slider.button_link || "/products",
    });
    setImagePreview(`${UPLOADS_URL}${slider.image_url}`);
    setOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!image && !editingSlider)
      return toast.error("Lütfen bir görsel seçin.");
    setLoading(true);

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));
    if (image) data.append("image", image);

    const url = editingSlider
      ? `${API_BASE_URL}/sliders/${editingSlider.id}`
      : `${API_BASE_URL}/sliders`;

    const method = "POST";

    try {
      const res = await fetch(url, { method, body: data });
      if (res.ok) {
        toast.success(
          editingSlider ? "Slider güncellendi." : "Slider eklendi."
        );
        setOpen(false);
        resetForm();
        fetchSliders();
      }
    } catch (error) {
      toast.error("İşlem sırasında bir hata oluştu.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    try {
      const res = await fetch(`${API_BASE_URL}/sliders/${deleteId}`, {
        method: "DELETE",
      });
      if (res.ok) {
        toast.success("Slider başarıyla silindi.");
        fetchSliders();
      }
    } finally {
      setDeleteId(null);
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Slider Yönetimi
          </h1>
          <p className="text-sm text-slate-500 font-medium">
            Ana sayfa giriş görsellerini buradan yönetin.
          </p>
        </div>

        <Dialog
          open={open}
          onOpenChange={(v) => {
            setOpen(v);
            if (!v) resetForm();
          }}
        >
          <DialogTrigger asChild>
            <Button className="bg-[#0F3460] hover:bg-[#16427a] px-6 transition-all shadow-md">
              <Plus className="mr-2 h-4 w-4" /> Yeni Slider Ekle
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[750px] p-0 overflow-hidden border-none shadow-2xl">
            <DialogHeader className="p-6 bg-slate-50 border-b border-slate-200">
              <DialogTitle className="text-xl">
                {editingSlider ? "Slider Düzenle" : "Yeni Slider Oluştur"}
              </DialogTitle>
              <DialogDescription>
                Görsel ve metin içeriklerini optimize ederek girin.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid grid-cols-12 gap-8">
                {/* Sol Taraf: Görsel Önizleme */}
                <div className="col-span-5 space-y-3">
                  <Label className="text-slate-600 font-semibold">
                    Slider Görseli
                  </Label>
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="aspect-[16/9] border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:border-blue-400 hover:bg-blue-50/30 transition-all relative overflow-hidden group shadow-inner"
                  >
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        className="absolute inset-0 w-full h-full object-cover"
                        alt="Önizleme"
                      />
                    ) : (
                      <div className="text-center p-6 text-slate-400">
                        <UploadCloud className="mx-auto h-10 w-10 mb-2 opacity-50" />
                        <span className="text-xs font-medium block">
                          Yüksek Çözünürlüklü Resim
                        </span>
                      </div>
                    )}
                    <input
                      type="file"
                      ref={fileInputRef}
                      className="hidden"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </div>
                </div>

                {/* Sağ Taraf: Metinler */}
                <div className="col-span-7 space-y-4">
                  <div className="space-y-2">
                    <Label className="text-slate-600 font-semibold">
                      Ana Başlık
                    </Label>
                    <Input
                      className="h-11"
                      placeholder="Slider başlığı"
                      value={formData.title}
                      onChange={(e) =>
                        setFormData({ ...formData, title: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-slate-600 font-semibold">
                      Alt Başlık / Slogan
                    </Label>
                    <Input
                      className="h-11"
                      placeholder="Kısa açıklama metni"
                      value={formData.subtitle}
                      onChange={(e) =>
                        setFormData({ ...formData, subtitle: e.target.value })
                      }
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-slate-600 font-semibold">
                        Buton Yazısı
                      </Label>
                      <Input
                        placeholder="Örn: İncele"
                        value={formData.button_text}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            button_text: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-slate-600 font-semibold">
                        Buton Linki
                      </Label>
                      <Input
                        placeholder="Örn: /products"
                        value={formData.button_link}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            button_link: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>

              <DialogFooter className="pt-6 border-t border-slate-100 flex gap-3">
                <Button
                  type="button"
                  variant="ghost"
                  className="px-6"
                  onClick={() => setOpen(false)}
                >
                  İptal
                </Button>
                <Button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 px-10 shadow-lg"
                  disabled={loading}
                >
                  {loading ? (
                    <Loader2 className="animate-spin h-4 w-4" />
                  ) : (
                    "Yayınla"
                  )}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Tablo */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-slate-50/80">
            <TableRow>
              <TableHead className="w-[150px] text-center font-bold text-slate-700 uppercase text-[11px] tracking-wider">
                Görsel
              </TableHead>
              <TableHead className="font-bold text-slate-700 uppercase text-[11px] tracking-wider">
                Başlık & İçerik
              </TableHead>
              <TableHead className="w-[150px] text-center font-bold text-slate-700 uppercase text-[11px] tracking-wider">
                Buton
              </TableHead>
              <TableHead className="w-[140px] text-right px-8 font-bold text-slate-700 uppercase text-[11px] tracking-wider">
                İşlemler
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sliders.map((slider: any) => (
              <TableRow
                key={slider.id}
                className="hover:bg-slate-50/40 transition-colors"
              >
                <TableCell className="p-4">
                  <div className="aspect-video w-full rounded-xl border border-slate-100 overflow-hidden shadow-inner">
                    <img
                      src={`${UPLOADS_URL}${slider.image_url}`}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                </TableCell>
                <TableCell className="p-4">
                  <div className="flex flex-col gap-1">
                    <span className="font-bold text-slate-800 text-lg">
                      {slider.title}
                    </span>
                    <span className="text-sm text-slate-400 line-clamp-1">
                      {slider.subtitle}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-center p-4">
                  <div className="flex flex-col items-center gap-1">
                    <span className="px-3 py-1 bg-slate-100 rounded text-xs font-bold text-slate-600 border border-slate-200 italic">
                      {slider.button_text}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono truncate max-w-[100px]">
                      {slider.button_link}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-right px-8 p-4">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-9 w-9 border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all"
                      onClick={() => handleEditClick(slider)}
                    >
                      <Edit3 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-9 w-9 border-slate-200 text-slate-400 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-all"
                      onClick={() => setDeleteId(slider.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <AlertDialog
        open={!!deleteId}
        onOpenChange={(v) => {
          if (!v) setDeleteId(null);
        }}
      >
        <AlertDialogContent className="rounded-2xl border-none shadow-2xl">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-red-600 text-xl font-bold">
              Slider Silinsin mi?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-slate-500">
              Bu slider ana sayfanızdan kalıcı olarak kaldırılacaktır.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="gap-2">
            <AlertDialogCancel className="border-slate-200 rounded-xl">
              Vazgeç
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-red-600 hover:bg-red-700 rounded-xl px-6"
            >
              Silmeyi Onayla
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
