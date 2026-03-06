<?php

namespace App\Observers;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;

class ImageCleanupObserver
{
    /**
     * Model tamamen silindiğinde tetiklenir.
     */
    public function deleting($model)
    {
        Log::info('Observer: Silme işlemi tetiklendi.', ['model_id' => $model->id]);
        $this->deleteFile($model->image_url);
    }

    /**
     * Model güncellendiğinde tetiklenir.
     */
    public function updated($model)
    {
        // image_url alanı değişmiş mi kontrol et
        if ($model->wasChanged('image_url')) {
            $oldImage = $model->getOriginal('image_url'); 

            if ($oldImage && $oldImage !== $model->image_url) {
                Log::info('Observer: Görsel değişti, eski dosya temizleniyor.', [
                    'model_id' => $model->id,
                    'old_path' => $oldImage,
                    'new_path' => $model->image_url
                ]);
                $this->deleteFile($oldImage);
            }
        }
    }

    protected function deleteFile($url)
    {
        if (!$url) return;

        $path = str_replace('/storage/', '', $url);

        if (Storage::disk('public')->exists($path)) {
            Storage::disk('public')->delete($path);
            Log::info('Observer: Görsel diskten başarıyla silindi.', ['path' => $path]);
        } else {
            Log::warning('Observer: Silinecek görsel diskte bulunamadı.', ['path' => $path]);
        }
    }
}
