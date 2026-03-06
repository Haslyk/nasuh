<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CorporatePage;
use Illuminate\Http\Request;

class CorporateController extends Controller
{
    // Slug üzerinden sayfa getir (Node: getPage)
    public function show($slug)
    {
        try {
            $page = CorporatePage::where('slug', $slug)->first();

            if (!$page) {
                return response()->json(['message' => 'Sayfa bulunamadı'], 404);
            }

            return response()->json($page);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Hata oluştu'], 500);
        }
    }

    // Sayfa içeriğini güncelle (Node: updatePage)
    public function update(Request $request, $slug)
    {
        try {
            $page = CorporatePage::where('slug', $slug)->first();

            if (!$page) {
                return response()->json(['message' => 'Sayfa bulunamadı'], 404);
            }

            // Node.js: title, subtitle ve content alanlarını güncelliyoruz
            $page->title = $request->input('title');
            $page->subtitle = $request->input('subtitle');
            $page->content = $request->input('content');

            $page->save();

            return response()->json(['message' => 'İçerik güncellendi']);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Güncelleme hatası'], 500);
        }
    }
}
