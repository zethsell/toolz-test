<?php

namespace Routes;

use App\Http\Controllers\Auth\SignInController;
use App\Http\Controllers\Auth\SignUpController;
use Illuminate\Support\Facades\Route;

#No auth routes
Route::post('sign-in', SignInController::class);
Route::post('sign-up', SignUpController::class);
