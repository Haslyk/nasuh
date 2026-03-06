<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SiteConfig extends Model
{
    protected $table = 'site_config';
    // Bu tabloda ID otomatik artan olduğu için özel UUID ayarı gerekmez
    protected $fillable = [
        'company_name',
        'tagline',
        'phone',
        'email',
        'address',
        'working_hours',
        'linkedin',
        'instagram',
        'youtube',
        'map_embed_url'
    ];
}
