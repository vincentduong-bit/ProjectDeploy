<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\LocationController;


Route::apiResource('locations', LocationController::class);
Route::post('locations/{id}/restore', [LocationController::class, 'restore']);
Route::delete('locations/{id}/force-delete', [LocationController::class, 'forceDelete']);