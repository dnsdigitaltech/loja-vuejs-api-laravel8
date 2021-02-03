<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\v1\CategoryController;
use App\Http\Controllers\Api\v1\ProductController;
use App\Http\Controllers\Auth\Api\AuthApiController;
use App\Http\Controllers\Auth\Api\ProfileApiController;

Route::post('auth', [AuthApiController::class, 'authenticate']);
Route::post('auth-refresh', [AuthApiController::class, 'refreshToken']);
Route::get('me', [AuthApiController::class, 'getAuthenticatedUser']);

Route::post('register', [ProfileApiController::class, 'register']);
Route::put('update', [ProfileApiController::class, 'update']);

Route::group([
    'prefix' => 'v1',  
    //'middleware' => 'auth:api'
    ],
    function(){
    Route::get('categories/{id}/products', [CategoryController::class, 'products']);
    Route::apiResource('categories', CategoryController::class);
    Route::apiResource('products', ProductController::class);
});