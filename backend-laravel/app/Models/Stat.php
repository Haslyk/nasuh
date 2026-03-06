<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Stat extends Model
{
    // Node.js sorgusunda label, value, icon_name, order_index kullandığın için:
    protected $fillable = ['label', 'value', 'icon_name', 'order_index'];
}
