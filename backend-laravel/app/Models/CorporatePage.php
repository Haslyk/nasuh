<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class CorporatePage extends Model
{
    protected $table = 'corporate_pages'; // Tablo adını sağlama alıyoruz
    protected $keyType = 'string';
    public $incrementing = false;

    protected $fillable = ['id', 'title', 'subtitle', 'slug', 'content'];

    protected static function boot()
    {
        parent::boot();
        static::creating(function ($model) {
            if (empty($model->id)) {
                $model->id = (string) Str::uuid();
            }
        });
    }
}
