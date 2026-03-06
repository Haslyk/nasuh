<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Slider;
use Illuminate\Http\Request;
use App\Traits\ManagesImages;

class SliderController extends Controller
{
    use ManagesImages;
    public function index()
    {
        try {
            return response()->json(Slider::orderBy('created_at', 'desc')->get());
        } catch (\Exception $e) {
            return response()->json(['message' => 'Sliderlar getirilemedi'], 500);
        }
    }

    public function store(Request $request)
    {
        try {
            $slider = new Slider();
            $slider->title = $request->input('title');
            $slider->subtitle = $request->input('subtitle');
            $slider->button_text = $request->input('button_text');
            $slider->button_link = $request->input('button_link');

            if ($request->hasFile('image')) {
                $slider->image_url = $this->uploadAndOptimize($request->file('image'), 'sliders', 1920);
            }

            $slider->save();
            return response()->json(['message' => 'Slider eklendi'], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Hata oluştu', 'error' => $e->getMessage()], 500);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $slider = Slider::find($id);
            if (!$slider) return response()->json(['message' => 'Bulunamadı'], 404);

            $slider->title = $request->input('title');
            $slider->subtitle = $request->input('subtitle');
            $slider->button_text = $request->input('button_text');
            $slider->button_link = $request->input('button_link');

            if ($request->hasFile('image')) {
                $path = $request->file('image')->store('sliders', 'public');
                $slider->image_url = '/storage/' . $path;
            }

            $slider->save();
            return response()->json(['message' => 'Güncellendi']);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Hata oluştu'], 500);
        }
    }

    public function destroy($id)
    {
        try {
            $slider = Slider::find($id);
            if (!$slider) return response()->json(['message' => 'Bulunamadı'], 404);

            $slider->delete();
            return response()->json(['message' => 'Silindi']);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Hata oluştu'], 500);
        }
    }
}
