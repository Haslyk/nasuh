<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    // Tüm kategorileri getir (Node: getAllCategories)
    public function index()
    {
        try {
            $categories = Category::orderBy('name', 'asc')->get();
            return response()->json($categories);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Kategoriler getirilemedi'], 500);
        }
    }

    // Yeni kategori oluştur (Node: createCategory)
    public function store(Request $request)
    {
        try {
            $request->validate([
                'name' => 'required|string',
                'description' => 'nullable|string'
            ]);

            $category = new Category();
            $category->name = $request->name;
            $category->description = $request->description;
            // Node.js tarafındaki slug logic'i (Str::slug Laravel'de aynı işi yapar)
            $category->slug = Str::slug($request->name);

            $category->save();

            return response()->json(['message' => 'Kategori oluşturuldu'], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Kategori oluşturulamadı',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    // Kategori güncelle (Node: updateCategory)
    public function update(Request $request, $id)
    {
        try {
            $category = Category::find($id);
            if (!$category) {
                return response()->json(['message' => 'Kategori bulunamadı'], 404);
            }

            $newSlug = Str::slug($request->name);
            $exists = Category::where('slug', $newSlug)->where('id', '!=', $id)->exists();

            if ($exists) {
                return response()->json([
                    'message' => 'Bu isimde bir kategori zaten mevcut. Lütfen farklı bir isim deneyin.'
                ], 422);
            }

            $category->name = $request->name;
            $category->description = $request->description;
            $category->slug = Str::slug($request->name);

            $category->save();

            return response()->json(['message' => 'Kategori başarıyla güncellendi']);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Güncelleme hatası',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    // Kategori sil (Node: deleteCategory)
    public function destroy($id)
    {
        try {
            $category = Category::find($id);
            if (!$category) {
                return response()->json(['message' => 'Kategori bulunamadı'], 404);
            }

            $category->delete();
            return response()->json(['message' => 'Kategori silindi']);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Kategori silinemedi'], 500);
        }
    }
}
