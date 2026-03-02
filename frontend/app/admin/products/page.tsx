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
import { Badge } from "@/components/ui/badge";
import { Plus, Trash2, Edit3, Loader2, UploadCloud } from "lucide-react";
import { toast } from "sonner";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [editingProduct, setEditingProduct] = useState<any>(null);

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    category_slug: "hydraulic-presses",
    short_description: "",
    description: "",
  });
  const [image, setImage] = useState<File | null>(null);

  const fetchProducts = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/products`);
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      toast.error("Ürünler yüklenemedi.");
    }
  };

  useEffect(() => {
    fetchProducts();
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
      name: "",
      category_slug: "hydraulic-presses",
      short_description: "",
      description: "",
    });
    setImage(null);
    setImagePreview(null);
    setEditingProduct(null);
  };

  const handleEditClick = (product: any) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      category_slug: product.category_slug,
      short_description: product.short_description || "",
      description: product.description || "",
    });
    setImagePreview(`${UPLOADS_URL}${product.image_url}`);
    setOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));
    if (image) data.append("image", image);

    const url = editingProduct
      ? `${API_BASE_URL}/products/${editingProduct.id}`
      : `${API_BASE_URL}/products`;

    const method = editingProduct ? "PUT" : "POST";

    try {
      const res = await fetch(url, { method, body: data });
      if (res.ok) {
        toast.success(editingProduct ? "Ürün güncellendi." : "Ürün eklendi.");
        setOpen(false);
        resetForm();
        fetchProducts();
      }
    } catch (error) {
      toast.error("İşlem başarısız.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    try {
      const res = await fetch(`${API_BASE_URL}/products/${deleteId}`, {
        method: "DELETE",
      });
      if (res.ok) {
        toast.success("Ürün silindi.");
        fetchProducts();
      }
    } finally {
      setDeleteId(null);
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header Alanı */}
      <div className="flex justify-between items-center bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Ürün Kataloğu
          </h1>
          <p className="text-sm text-slate-500 font-medium">
            Sistemde {products.length} aktif ürün bulunmaktadır.
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
              <Plus className="mr-2 h-4 w-4" /> Yeni Ürün Ekle
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[750px] p-0 overflow-hidden border-none shadow-2xl">
            <DialogHeader className="p-6 bg-slate-50 border-b border-slate-200">
              <DialogTitle className="text-xl">
                {editingProduct ? "Ürünü Düzenle" : "Yeni Ürün Tanımla"}
              </DialogTitle>
              <DialogDescription>
                Gerekli teknik detayları ve görseli buraya girin.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="p-8 space-y-8">
              <div className="grid grid-cols-12 gap-8">
                {/* Sol Taraf: Görsel */}
                <div className="col-span-5 space-y-3">
                  <Label className="text-slate-600 font-semibold">
                    Ürün Görseli
                  </Label>
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="aspect-square border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:border-blue-400 hover:bg-blue-50/30 transition-all relative overflow-hidden group shadow-inner"
                  >
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        className="absolute inset-0 w-full h-full object-cover"
                        alt="Önizleme"
                      />
                    ) : (
                      <div className="text-center p-6 text-slate-400">
                        <UploadCloud className="mx-auto h-10 w-10 mb-3 opacity-50" />
                        <span className="text-sm font-medium block">
                          Resim Seç veya Sürükle
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

                {/* Sağ Taraf: Metin Girişleri */}
                <div className="col-span-7 space-y-5">
                  <div className="space-y-2">
                    <Label className="text-slate-600 font-semibold">
                      Ürün Adı
                    </Label>
                    <Input
                      className="h-11 border-slate-200 focus:ring-blue-500"
                      placeholder="Örn: 500 Ton Hidrolik Pres"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-slate-600 font-semibold">
                      Kategori
                    </Label>
                    <Input
                      className="h-11 border-slate-200"
                      value={formData.category_slug}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          category_slug: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-slate-600 font-semibold">
                      Kısa Özet (Alt Başlık)
                    </Label>
                    <Input
                      className="h-11 border-slate-200"
                      placeholder="Kataloglarda görünecek özet"
                      value={formData.short_description}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          short_description: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-slate-600 font-semibold">
                  Detaylı Açıklama / Teknik Özellikler
                </Label>
                <Textarea
                  className="min-h-[100px] border-slate-200 resize-none"
                  placeholder="Ürün hakkında detaylı bilgi girin..."
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                />
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
                  ) : editingProduct ? (
                    "Güncellemeleri Kaydet"
                  ) : (
                    "Kataloğa Ekle"
                  )}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Tablo Alanı */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-slate-50/80">
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-[100px] text-center font-bold text-slate-700 uppercase text-[11px] tracking-wider">
                Görsel
              </TableHead>
              <TableHead className="font-bold text-slate-700 uppercase text-[11px] tracking-wider">
                Ürün Bilgileri
              </TableHead>
              <TableHead className="w-[180px] text-center font-bold text-slate-700 uppercase text-[11px] tracking-wider">
                Kategori
              </TableHead>
              <TableHead className="w-[140px] text-right px-8 font-bold text-slate-700 uppercase text-[11px] tracking-wider">
                İşlemler
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product: any) => (
              <TableRow
                key={product.id}
                className="hover:bg-slate-50/40 transition-colors border-b border-slate-50"
              >
                <TableCell className="p-4">
                  <div className="w-14 h-14 rounded-xl border border-slate-100 overflow-hidden bg-slate-50 shadow-inner">
                    <img
                      src={`${UPLOADS_URL}${product.image_url}`}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                </TableCell>
                <TableCell className="p-4">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-bold text-slate-800 text-base">
                      {product.name}
                    </span>
                    <span className="text-xs text-slate-400 italic font-medium line-clamp-1">
                      {product.short_description || "Açıklama belirtilmedi"}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-center p-4">
                  <Badge
                    variant="secondary"
                    className="px-3 py-1 rounded-lg bg-blue-50 text-blue-600 border-none font-bold text-[10px] uppercase"
                  >
                    {product.category_slug}
                  </Badge>
                </TableCell>
                <TableCell className="text-right px-8 p-4">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-9 w-9 border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all"
                      onClick={() => handleEditClick(product)}
                    >
                      <Edit3 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-9 w-9 border-slate-200 text-slate-400 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-all"
                      onClick={() => setDeleteId(product.id)}
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

      {/* Silme Onay Modalı */}
      <AlertDialog
        open={!!deleteId}
        onOpenChange={(v) => {
          if (!v) setDeleteId(null);
        }}
      >
        <AlertDialogContent className="rounded-2xl border-none shadow-2xl">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-red-600 text-xl font-bold">
              Ürünü Sil?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-slate-500">
              Bu işlem, ürünü kataloğunuzdan kalıcı olarak silecektir. Emin
              misiniz?
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
