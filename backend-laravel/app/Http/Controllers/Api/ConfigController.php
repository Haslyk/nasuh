<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\SiteConfig;
use Illuminate\Http\Request;

class ConfigController extends Controller
{
    // Mevcut ayarları getir (Node: getSettings)
    public function index()
    {
        try {
            // Node.js mantığıyla ilk kaydı getiriyoruz (Genelde ID 1 olur)
            $settings = SiteConfig::first();
            return response()->json($settings);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Ayarlar getirilirken hata oluştu',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    // Ayarları güncelle (Node: updateSettings)
    public function update(Request $request)
    {
        try {
            // Her zaman ilk kaydı güncelliyoruz, yoksa oluşturuyoruz
            $settings = SiteConfig::firstOrCreate(['id' => 1]);

            $settings->company_name = $request->input('company_name');
            $settings->tagline = $request->input('tagline');
            $settings->phone = $request->input('phone');
            $settings->email = $request->input('email');
            $settings->address = $request->input('address');
            $settings->working_hours = $request->input('working_hours');
            $settings->linkedin = $request->input('linkedin');
            $settings->instagram = $request->input('instagram');
            $settings->youtube = $request->input('youtube');
            $settings->map_embed_url = $request->input('map_embed_url');

            $settings->save();

            return response()->json(['message' => 'Ayarlar başarıyla güncellendi']);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Güncelleme hatası',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
