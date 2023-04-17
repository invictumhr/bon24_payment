<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [App\Http\Controllers\PaymentController::class, 'index']);
Route::post('/', [App\Http\Controllers\PaymentController::class, 'index']);


Route::middleware('ajax_security')->group(function ()
{
    Route::get('/ax/check-code', [App\Http\Controllers\AxController::class, 'checkCode']);
    Route::post('/ax/process-payment', [App\Http\Controllers\AxController::class, 'processPayment']);
});
