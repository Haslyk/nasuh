<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Traits\ManagesImages;

class ProductController extends Controller
{
    use ManagesImages;
    // Tüm ürünleri getir (Node: getAllProducts)
    public function index()
    {
        try {
            $products = Product::orderBy('created_at', 'desc')->get();
            return response()->json($products);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Ürünler getirilemedi', 'error' => $e->getMessage()], 500);
        }
    }

    // Slug ile ürün getir (Node: getProductBySlug)
    public function show($slug)
    {
        try {
            $product = Product::where('slug', $slug)->first();
            if (!$product) {
                return response()->json(['message' => 'Ürün bulunamadı'], 404);
            }
            return response()->json($product);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Ürün detayı getirilemedi'], 500);
        }
    }

    // Yeni ürün ekle (Node: createProduct)
    public function store(Request $request)
    {
        try {
            $product = new Product();
            $product->name = $request->name;
            $product->category_slug = $request->category_slug;
            $product->short_description = $request->short_description;
            $product->description = $request->description;
            $product->slug = Str::slug($request->name);

            // Resim Yükleme (Multer karşılığı)
            if ($request->hasFile('image')) {
                $product->image_url = $this->uploadAndOptimize($request->file('image'), 'products', 800);
            }

            $product->save();

            // Node.js Logic: Eğer kategorinin ilk ürünü ise kategori resmini güncelle
            $categoryProductsCount = Product::where('category_slug', $request->category_slug)->count();
            if ($categoryProductsCount === 1 && $product->image_url) {
                Category::where('slug', $request->category_slug)
                    ->update(['image_url' => $product->image_url]);
            }

            return response()->json(['message' => 'Ürün eklendi'], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Hata oluştu', 'error' => $e->getMessage()], 500);
        }
    }

    // Ürün güncelle (Node: updateProduct)
    public function update(Request $request, $id)
    {
        try {
            $product = Product::find($id);
            if (!$product) {
                return response()->json(['message' => 'Ürün bulunamadı'], 404);
            }

            $product->name = $request->name;
            $product->category_slug = $request->category_slug;
            $product->short_description = $request->short_description;
            $product->description = $request->description;
            $product->slug = Str::slug($request->name);

            if ($request->hasFile('image')) {
                $product->image_url = $this->uploadAndOptimize($request->file('image'), 'products', 800);
            }

            $product->save();

            $categoryProductsCount = Product::where('category_slug', $product->category_slug)->count();
            if ($categoryProductsCount === 1) {
                Category::where('slug', $product->category_slug)
                    ->update(['image_url' => $product->image_url]);
            }

            return response()->json(['message' => 'Ürün başarıyla güncellendi']);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Güncelleme sırasında hata oluştu'], 500);
        }
    }

    // Ürün sil (Node: deleteProduct)
    public function destroy($id)
    {
        try {
            $product = Product::find($id);
            if (!$product) {
                return response()->json(['message' => 'Ürün bulunamadı'], 404);
            }

            $categorySlug = $product->category_slug;
            $product->delete();

            // Node.js Logic: Kalan ürünlere bak ve kategori resmini güncelle
            $remainingProduct = Product::where('category_slug', $categorySlug)->first();
            Category::where('slug', $categorySlug)
                ->update(['image_url' => $remainingProduct ? $remainingProduct->image_url : null]);

            return response()->json(['message' => 'Ürün silindi']);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Ürün silinemedi'], 500);
        }
    }
}
