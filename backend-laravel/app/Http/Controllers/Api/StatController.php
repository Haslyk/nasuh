<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Stat;
use Illuminate\Http\Request;

class StatController extends Controller
{
    // Tüm istatistikleri getir (Node: getAllStats)
    public function index()
    {
        try {
            $stats = Stat::orderBy('order_index', 'asc')->get();
            return response()->json($stats);
        } catch (\Exception $e) {
            return response()->json(['message' => 'İstatistikler getirilemedi'], 500);
        }
    }

    // Yeni istatistik ekle (Node: createStat)
    public function store(Request $request)
    {
        try {
            $count = Stat::count();
            if ($count >= 5) {
                return response()->json(['message' => 'Maksimum 5 istatistik ekleyebilirsiniz.'], 400);
            }

            $stat = new Stat();
            $stat->label = $request->input('label');
            $stat->value = $request->input('value');
            $stat->icon_name = $request->input('icon_name');
            $stat->order_index = $request->input('order_index', 0);
            $stat->save();

            return response()->json(['message' => 'İstatistik eklendi'], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Ekleme hatası'], 500);
        }
    }

    // İstatistik güncelle (Node: updateStat)
    public function update(Request $request, $id)
    {
        try {
            $stat = Stat::find($id);
            if (!$stat) {
                return response()->json(['message' => 'İstatistik bulunamadı'], 404);
            }

            $stat->label = $request->input('label');
            $stat->value = $request->input('value');
            $stat->icon_name = $request->input('icon_name');
            $stat->order_index = $request->input('order_index', 0);
            $stat->save();

            return response()->json(['message' => 'İstatistik güncellendi']);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Güncelleme hatası'], 500);
        }
    }

    // İstatistik sil (Node: deleteStat)
    public function destroy($id)
    {
        try {
            $count = Stat::count();
            if ($count <= 3) {
                return response()->json([
                    'message' => 'En az 3 istatistik bulunmalıdır. Daha fazla silemezsiniz.'
                ], 400);
            }

            $stat = Stat::find($id);
            if (!$stat) {
                return response()->json(['message' => 'İstatistik bulunamadı'], 404);
            }

            $stat->delete();
            return response()->json(['message' => 'İstatistik silindi']);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Silme hatası'], 500);
        }
    }
}
