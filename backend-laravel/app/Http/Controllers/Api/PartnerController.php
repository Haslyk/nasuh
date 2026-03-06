<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Partner;
use Illuminate\Http\Request;
use App\Traits\ManagesImages;

class PartnerController extends Controller
{
    use ManagesImages;
    // Tüm partnerleri getir (Node: getAllPartners)
    public function index()
    {
        try {
            // Node.js'de getAll genellikle sıralama belirtmez ama order_index eklemiştik
            $partners = Partner::orderBy('order_index', 'asc')->get();
            return response()->json($partners);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Partnerler getirilemedi'], 500);
        }
    }

    // Yeni partner ekle (Node: createPartner)
    public function store(Request $request)
    {
        try {
            if (!$request->hasFile('image')) {
                return response()->json(['message' => 'Logo yüklenmelidir'], 400);
            }

            $partner = new Partner();
            $partner->name = $request->input('name');
            $partner->order_index = $request->input('order_index', 0); // Varsayılan 0

            // Resim Yükleme
            if ($request->hasFile('image')) {
                $partner->image_url = $this->uploadAndOptimize($request->file('image'), 'partners', 400); // Partner logoları için 400px yeterli
            }

            $partner->save();

            return response()->json(['message' => 'Partner eklendi'], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Ekleme hatası', 'error' => $e->getMessage()], 500);
        }
    }

    // Partner sil (Node: deletePartner)
    public function destroy($id)
    {
        try {
            $partner = Partner::find($id);
            if (!$partner) {
                return response()->json(['message' => 'Partner bulunamadı'], 404);
            }

            // Opsiyonel: Dosyayı fiziksel olarak da silmek istersen
            // $oldPath = str_replace('/storage/', '', $partner->image_url);
            // Storage::disk('public')->delete($oldPath);

            $partner->delete();
            return response()->json(['message' => 'Partner silindi']);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Silme hatası'], 500);
        }
    }
}
