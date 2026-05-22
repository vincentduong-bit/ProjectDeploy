<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});
Route::get('portfolio', function () {
    return Inertia::render('portfolio');
})->name('portfolio');

Route::get('services', function () {
    return Inertia::render('services');
})->name('services');

require __DIR__ . '/settings.php';
require __DIR__.'/auth.php';
