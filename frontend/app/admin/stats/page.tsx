"use client";

import { useEffect, useState } from "react";
import { API_BASE_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
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
import { Loader2, Save, BarChart3, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";

export default function StatsAdminPage() {
  const [stats, setStats] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<number | null>(null);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [newStat, setNewStat] = useState({
    label: "",
    value: "",
    icon_name: "Award",
  });

  const fetchStats = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/stats`);
      const data = await res.json();
      setStats(Array.isArray(data) ? data : []);
    } catch (error) {
      toast.error("Veriler yüklenemedi.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const handleAdd = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/stats`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newStat),
      });
      if (res.ok) {
        toast.success("Yeni istatistik eklendi.");
        setIsAddOpen(false);
        setNewStat({ label: "", value: "", icon_name: "Award" });
        fetchStats();
      }
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (id: number, index: number) => {
    setSaving(id);
    try {
      const res = await fetch(`${API_BASE_URL}/stats/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(stats[index]),
      });
      if (res.ok) toast.success("İstatistik güncellendi.");
    } finally {
      setSaving(null);
    }
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    try {
      const res = await fetch(`${API_BASE_URL}/stats/${deleteId}`, {
        method: "DELETE",
      });
      if (res.ok) {
        toast.success("İstatistik silindi.");
        fetchStats();
      }
    } finally {
      setDeleteId(null);
    }
  };

  if (loading && stats.length === 0)
    return (
      <div className="flex justify-center py-20">
        <Loader2 className="animate-spin h-10 w-10 text-[#0F3460]" />
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-slate-900">
            İstatistik Yönetimi
          </h1>
          <p className="text-sm text-slate-500 font-medium">
            Başarı rakamlarını ekleyin, düzenleyin veya silin.
          </p>
        </div>

        <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
          <DialogTrigger asChild>
            <Button className="bg-[#0F3460] hover:bg-[#16427a]">
              <Plus className="mr-2 h-4 w-4" /> Yeni Ekle
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Yeni İstatistik Ekle</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold">Başlık</label>
                <Input
                  value={newStat.label}
                  onChange={(e) =>
                    setNewStat({ ...newStat, label: e.target.value })
                  }
                  placeholder="Örn: Yıllık Deneyim"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold">Değer</label>
                <Input
                  value={newStat.value}
                  onChange={(e) =>
                    setNewStat({ ...newStat, value: e.target.value })
                  }
                  placeholder="Örn: 25+"
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="ghost" onClick={() => setIsAddOpen(false)}>
                İptal
              </Button>
              <Button onClick={handleAdd} className="bg-blue-600">
                Kaydet
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {stats.map((stat, index) => (
          <Card
            key={stat.id}
            className="border-none shadow-md rounded-2xl overflow-hidden transition-all hover:shadow-lg"
          >
            <CardContent className="p-6 flex flex-wrap md:flex-nowrap items-end gap-4">
              <div className="flex-1 space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Başlık
                </label>
                <Input
                  value={stat.label}
                  onChange={(e) => {
                    const newStats = [...stats];
                    newStats[index].label = e.target.value;
                    setStats(newStats);
                  }}
                  className="h-11 border-slate-200"
                />
              </div>
              <div className="w-32 space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Değer
                </label>
                <Input
                  value={stat.value}
                  onChange={(e) => {
                    const newStats = [...stats];
                    newStats[index].value = e.target.value;
                    setStats(newStats);
                  }}
                  className="h-11 border-slate-200"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={() => handleUpdate(stat.id, index)}
                  disabled={saving === stat.id}
                  className="bg-blue-600 hover:bg-blue-700 min-w-[100px] h-11"
                >
                  {saving === stat.id ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Save className="mr-2 h-4 w-4" />
                  )}
                  Güncelle
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setDeleteId(stat.id)}
                  className="h-11 w-11 border-red-100 text-red-500 hover:bg-red-50 hover:text-red-600"
                >
                  <Trash2 size={18} />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <AlertDialog
        open={!!deleteId}
        onOpenChange={(v) => !v && setDeleteId(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Emin misiniz?</AlertDialogTitle>
            <AlertDialogDescription>
              Bu istatistik verisi ana sayfadan kalıcı olarak kaldırılacaktır.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Vazgeç</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-red-600 hover:bg-red-700"
            >
              Sil
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
