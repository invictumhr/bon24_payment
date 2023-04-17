<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Common\Helpers\Crypt;

//http://localhost/_invictum_projects/invictum_bon24/bon24-payment/public/?mid=1&mtid=133&amount=10&currency=EUR&back=https://www.google.hr/
class PaymentController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index(Request $request)
    {
        $merchantId = (int)$request->input('mid');
        $amount = (float)$request->input('amount');
        $currency = $request->input('currency');
        $refererUrl = $request->headers->get('referer');

        session(['user_session_set' => 'yes']);

        $reqParams = $request->all();
        $reqParams["_pavld"] = 1;
        $reqParams["referer"] = $refererUrl;
        $prams = Crypt::encrypt(env('APP_KEY'), json_encode($reqParams));

        return view('payment.index', [
            'merchantId' => $merchantId,
            'amount' => $amount,
            'currency' => $currency,
            'params' => $prams
        ]);
    }
}
