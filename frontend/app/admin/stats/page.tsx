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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Loader2,
  Save,
  Plus,
  Trash2,
  HelpCircle,
  AlertCircle,
} from "lucide-react";
import * as LucideIcons from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const AVAILABLE_ICONS = [
  "Award",
  "CheckCircle",
  "Smile",
  "Users",
  "Briefcase",
  "Globe",
  "Clock",
  "Settings",
  "Zap",
  "Shield",
];

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
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const handleAdd = async () => {
    if (stats.length >= 5)
      return toast.error("Maksimum 5 istatistik sınırına ulaşıldı.");
    try {
      const res = await fetch(`${API_BASE_URL}/stats`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newStat),
      });
      if (res.ok) {
        toast.success("Eklendi");
        setIsAddOpen(false);
        fetchStats();
      }
    } catch (e) {
      toast.error("Hata");
    }
  };

  const handleDelete = async () => {
    if (stats.length <= 3) return toast.error("En az 3 istatistik kalmalıdır.");
    try {
      const res = await fetch(`${API_BASE_URL}/stats/${deleteId}`, {
        method: "DELETE",
      });
      if (res.ok) {
        toast.success("Silindi");
        fetchStats();
      }
    } finally {
      setDeleteId(null);
    }
  };

  if (loading && stats.length === 0)
    return (
      <div className="flex justify-center py-20">
        <Loader2 className="animate-spin h-10" />
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm border">
        <div>
          <h1 className="text-2xl font-bold">İstatistik Yönetimi</h1>
          <div className="flex items-center gap-2 mt-1 text-slate-500 text-sm">
            <AlertCircle size={14} />
            <span>
              En az 3, en fazla 5 istatistik olmalıdır. (Şu an: {stats.length}
              /5)
            </span>
          </div>
        </div>

        <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
          <DialogTrigger asChild>
            <Button
              disabled={stats.length >= 5}
              className="bg-[#0F3460] rounded-xl h-11"
            >
              <Plus className="mr-2 h-4 w-4" /> Yeni Ekle
            </Button>
          </DialogTrigger>
          <DialogContent>
            {/* Ekleme formu içeriği (Önceki kod ile aynı) */}
            <DialogHeader>
              <DialogTitle>Yeni İstatistik</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <Input
                placeholder="Başlık"
                value={newStat.label}
                onChange={(e) =>
                  setNewStat({ ...newStat, label: e.target.value })
                }
              />
              <Input
                placeholder="Değer (25+ gibi)"
                value={newStat.value}
                onChange={(e) =>
                  setNewStat({ ...newStat, value: e.target.value })
                }
              />
            </div>
            <DialogFooter>
              <Button onClick={handleAdd}>Kaydet</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {stats.map((stat, index) => (
          <Card
            key={stat.id}
            className="border-none shadow-sm rounded-2xl overflow-hidden border"
          >
            <CardContent className="p-6 flex items-center gap-6">
              {/* İkon Seçici */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-14 h-14 rounded-2xl">
                    {(() => {
                      const Icon =
                        (LucideIcons as any)[stat.icon_name] || HelpCircle;
                      return <Icon size={24} className="text-blue-600" />;
                    })()}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-64 grid grid-cols-5 gap-2">
                  {AVAILABLE_ICONS.map((iconName) => (
                    <button
                      key={iconName}
                      onClick={() => {
                        const newStats = [...stats];
                        newStats[index].icon_name = iconName;
                        setStats(newStats);
                      }}
                      className={cn(
                        "p-2 rounded-lg",
                        stat.icon_name === iconName
                          ? "bg-blue-100"
                          : "hover:bg-slate-50"
                      )}
                    >
                      {(() => {
                        const Icon = (LucideIcons as any)[iconName];
                        return <Icon size={18} />;
                      })()}
                    </button>
                  ))}
                </PopoverContent>
              </Popover>

              <Input
                className="flex-1 h-14"
                value={stat.label}
                onChange={(e) => {
                  const ns = [...stats];
                  ns[index].label = e.target.value;
                  setStats(ns);
                }}
              />

              <Input
                className="w-32 h-14 text-center font-bold"
                value={stat.value}
                onChange={(e) => {
                  const ns = [...stats];
                  ns[index].value = e.target.value;
                  setStats(ns);
                }}
              />

              <div className="flex gap-2">
                <Button
                  onClick={() => {
                    fetch(`${API_BASE_URL}/stats/${stat.id}`, {
                      method: "PUT",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(stats[index]),
                    }).then(() => toast.success("Güncellendi"));
                  }}
                  className="h-14 w-14 bg-blue-600"
                >
                  <Save size={20} />
                </Button>

                <Button
                  disabled={stats.length <= 3}
                  onClick={() => setDeleteId(stat.id)}
                  variant="outline"
                  className="h-14 w-14 border-red-50 text-red-500 hover:bg-red-50"
                >
                  <Trash2 size={20} />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      {/* Onay Modalı */}
      <AlertDialog
        open={!!deleteId}
        onOpenChange={(v) => !v && setDeleteId(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Siliyorsunuz</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button variant="ghost" onClick={() => setDeleteId(null)}>
              İptal
            </Button>
            <AlertDialogAction onClick={handleDelete} className="bg-red-600">
              Sil
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
