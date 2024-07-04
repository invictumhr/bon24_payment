<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Common\Helpers\Crypt;
use App\Models\Payment;

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
        $forcePayPal = (int)$request->input('force_paypal');

        if($merchantId <= 0 || $amount <= 0 || $currency == ""){
            return response("Invalid request", 400);
        }

        session(['user_session_set' => 'yes']);

        $reqParams = $request->all();
        $reqParams["_pavld"] = 1;
        $reqParams["referer"] = $refererUrl;
        $params = Crypt::encrypt(env('APP_KEY'), json_encode($reqParams));

        return view('payment.index', [
            'merchantId' => $merchantId,
            'amount' => $amount,
            'currency' => $currency,
            'params' => $params,
            'forcePayPal' => $forcePayPal
        ]);
    }

    public function paypal(Request $request)
    {
        $merchantId = (int)$request->input('mid');
        $amount = (float)$request->input('amount');
        $currency = $request->input('currency');

        if($merchantId <= 0 || $amount <= 0 || $currency == ""){
            return response("Invalid request", 400);
        }

        $paramsStr = $request->input('payment_params');
        //$params = Crypt::decrypt(env('APP_KEY'), $paramsStr);
        //$params = json_decode($params, true);

        $siteUrl = url("/");

        $sandbox = env('PAYPAL_SANDBOX', false);

        $payment = new Payment();
        $payment->merchant_id = $merchantId;
        $payment->amount = $amount;
        $payment->currency = $currency;
        $payment->payment_type = "paypal";
        $payment->payment_status = "waiting";
        $payment->payment_params = $paramsStr;
        $payment->payment_reference = "";
        $payment->reqest = "";
        $payment->callback_response = "";
        $payment->callback_at = "2000-01-01 00:00:00";
        $payment->customer_ip = $request->ip();
        $payment->save();
        $paymentId = $payment->id;
        $allParams = array(
            'business' => env('PAYPAL_BUSINESS_ID'),
            'quantity' => 1,
            'tax' => 0,
            'shipping' => 0,
            'cmd' => '_xclick',

            'button' => 'buynow',
            'return' => null,
            'cancel_return' => null,
            'order_id' => $paymentId,
            'order_token' => md5(time()),
            'order_hash' => Crypt::encrypt(env('APP_KEY'), $paymentId),

            'item_name' => "Plaćanje {$amount} {$currency}",
            'amount' => round($amount, 2),
            'return' => $siteUrl . "/paypal-ok/?pid=" . $paymentId . "&k=" . md5($paymentId . env('APP_KEY')),
            'cancel_return' => $siteUrl . "/paypal-nok/?pid=" . $paymentId . "&k=" . md5($paymentId . env('APP_KEY')),
            'notify_url' => $siteUrl . "/paypal-notify/?pid=" . $paymentId . "&k=" . md5($paymentId . env('APP_KEY')),
            'currency_code' => 'EUR'
        );



        $url = 'https://www.sandbox.paypal.com/cgi-bin/webscr';
        if(!$sandbox){
            $url = "https://www.paypal.com/cgi-bin/webscr";
        }

        $html = '<form method="post" action="'.$url.'" id="paypal_form">';
        foreach ($allParams as $name=>$value){
            if($value === null) continue;
            $html .= '<input type="hidden" name="'.$name.'" value="'.$value.'" />';
        }
        $html .= '</form><script type="text/javascript">setTimeout(function(){document.getElementById("paypal_form").submit();}, 100);</script>';

        return response($html);
    }


}
