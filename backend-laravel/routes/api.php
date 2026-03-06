<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\CorporateController;
use App\Http\Controllers\Api\PartnerController;
use App\Http\Controllers\Api\StatController;
use App\Http\Controllers\Api\SliderController;
use App\Http\Controllers\Api\ConfigController;


// Kategoriler Rotaları
Route::prefix('categories')->group(function () {
    Route::get('/', [CategoryController::class, 'index']);
    Route::post('/', [CategoryController::class, 'store']);
    Route::put('/{id}', [CategoryController::class, 'update']);
    Route::delete('/{id}', [CategoryController::class, 'destroy']);
});



Route::prefix('products')->group(function () {
    Route::get('/', [ProductController::class, 'index']);
    Route::get('/detail/{slug}', [ProductController::class, 'show']);
    Route::post('/', [ProductController::class, 'store']);
    Route::post('/{id}', [ProductController::class, 'update']);
    Route::delete('/{id}', [ProductController::class, 'destroy']);
});


Route::post('/auth/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/auth/logout', [AuthController::class, 'logout']);
});


Route::prefix('corporate')->group(function () {
    Route::get('/{slug}', [CorporateController::class, 'show']);
    Route::put('/{slug}', [CorporateController::class, 'update']);
});



// Partner Rotaları
Route::prefix('partners')->group(function () {
    Route::get('/', [PartnerController::class, 'index']);
    Route::post('/', [PartnerController::class, 'store']);
    Route::delete('/{id}', [PartnerController::class, 'destroy']);
});



// İstatistik Rotaları
Route::prefix('stats')->group(function () {
    Route::get('/', [StatController::class, 'index']);
    Route::post('/', [StatController::class, 'store']);
    Route::put('/{id}', [StatController::class, 'update']);
    Route::delete('/{id}', [StatController::class, 'destroy']);
});


// Slider Rotaları
Route::prefix('sliders')->group(function () {
    Route::get('/', [SliderController::class, 'index']);
    Route::post('/', [SliderController::class, 'store']);
    Route::post('/{id}', [SliderController::class, 'update']); 
    Route::delete('/{id}', [SliderController::class, 'destroy']);
});



// Site Ayarları Rotaları
Route::prefix('settings')->group(function () {
    Route::get('/', [ConfigController::class, 'index']);
    Route::put('/', [ConfigController::class, 'update']);
});
