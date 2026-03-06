<?php

namespace App\Providers;

use App\Models\Product;
use App\Models\Slider;
use App\Models\Partner;
use App\Models\Category;
use App\Observers\ImageCleanupObserver;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Product::observe(ImageCleanupObserver::class);
        Slider::observe(ImageCleanupObserver::class);
        Partner::observe(ImageCleanupObserver::class);
    }
}
