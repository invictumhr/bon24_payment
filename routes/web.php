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
Route::post('/paypal', [App\Http\Controllers\PaymentController::class, 'paypal']);
Route::post('/paypal-notify', [App\Http\Controllers\PayPalController::class, 'notify']);
Route::get('/paypal-notify', [App\Http\Controllers\PayPalController::class, 'notify']);

Route::get('/paypal-ok', [App\Http\Controllers\PayPalController::class, 'ok']);
Route::post('/paypal-ok', [App\Http\Controllers\PayPalController::class, 'ok']);
Route::get('/ax/paypal-check', [App\Http\Controllers\PayPalController::class, 'check']);
Route::get('/paypal-nok', [App\Http\Controllers\PayPalController::class, 'nok']);
Route::post('/paypal-nok', [App\Http\Controllers\PayPalController::class, 'nok']);

Route::get('/cron/mcrun34534', [App\Http\Controllers\CronController::class, 'runCron']);


Route::middleware('ajax_security')->group(function ()
{
    Route::get('/ax/check-code', [App\Http\Controllers\AxController::class, 'checkCode']);
    Route::post('/ax/process-payment', [App\Http\Controllers\AxController::class, 'processPayment']);
});
