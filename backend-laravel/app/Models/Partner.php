<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Partner extends Model
{
    // Node.js sorgusunda image_url ve order_index kullandığın için:
    protected $fillable = ['name', 'image_url', 'order_index'];
}
