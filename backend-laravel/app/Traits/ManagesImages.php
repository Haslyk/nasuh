<?php

namespace App\Traits;

use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
use Illuminate\Support\Facades\File; // Bu satırı ekle

trait ManagesImages
{
    public function uploadAndOptimize($file, $folder = 'uploads', $width = 800)
    {
        $filename = time() . '_' . uniqid() . '.jpg';

        // Klasör yolunu belirle
        $directory = storage_path('app/public/' . $folder);

        // Klasör yoksa oluştur (Recursive true: iç içe klasörleri de oluşturur)
        if (!File::isDirectory($directory)) {
            File::makeDirectory($directory, 0755, true, true);
        }

        $path = $directory . '/' . $filename;

        // Optimize et ve Kaydet (Manager v3 yapısı)
        $manager = new ImageManager(new Driver());
        $image = $manager->read($file);

        $image->scale(width: $width)
            ->toJpeg(80)
            ->save($path);

        return '/storage/' . $folder . '/' . $filename;
    }
}
