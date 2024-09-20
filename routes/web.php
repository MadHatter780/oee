<?php

use App\Models\Machine;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MachineController;


Route::get('/', [HomeController::class,'index']);
Route::get('/data', [MachineController::class,'index']);

Route::get('/ab', function
() {
    return inertia('Home');
});

