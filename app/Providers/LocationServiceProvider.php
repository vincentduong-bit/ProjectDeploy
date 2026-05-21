<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Repositories\Interfaces\LocationRepositoriesInterface;
use App\Repositories\Eloquent\LocationRepository;

class LocationServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(
            LocationRepositoriesInterface::class,
            LocationRepository::class
        );  
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
