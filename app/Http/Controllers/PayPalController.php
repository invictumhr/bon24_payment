<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Common\Helpers\Crypt;
use App\Models\Payment;
use Illuminate\Support\Facades\Http;

class PayPalController extends Controller
{
    public function ok(Request $request)
    {
        $securityHash = $request->input("k");
        $paymentId = (int)$request->input('pid');

        if($securityHash != md5($paymentId . env('APP_KEY')))
        {
            return response()->json([
                'status' => 'error',
                'message' => 'Invalid request'
            ]);
        }

        $payment = Payment::find($paymentId);
        if(!$payment)
        {
            return response()->json([
                'status' => 'error',
                'message' => 'Invalid request'
            ]);
        }

        return view('paypal.ok', [
            'paymentId' => $paymentId,
            'amount' => $payment->amount,
            'currency' => $payment->currency,
            'securityHash' => $securityHash
        ]);
    }


    public function nok(Request $request)
    {
        $securityHash = $request->input("k");
        $paymentId = (int)$request->input('pid');

        if($securityHash != md5($paymentId . env('APP_KEY')))
        {
            return response()->json([
                'status' => 'error',
                'message' => 'Invalid request'
            ]);
        }

        $payment = Payment::find($paymentId);
        if(!$payment)
        {
            return response()->json([
                'status' => 'error',
                'message' => 'Invalid request'
            ]);
        }

        $appParams = $payment->payment_params;
        $appParams = Crypt::decrypt(env('APP_KEY'), $appParams);
        $appParams = json_decode($appParams, true);

        //var_dump($appParams);die();

        $backUrl = isset($appParams['error']) ? $appParams['error'] : $appParams['back'] ;

        return view('paypal.nok', [
            'paymentId' => $paymentId,
            'amount' => $payment->amount,
            'currency' => $payment->currency,
            'backUrl' => $backUrl,
            'securityHash' => $securityHash
        ]);
    }

    public function check(Request $request)
    {
        $securityHash = $request->input("k");
        $paymentId = (int)$request->input('id');
        if($securityHash != md5($paymentId . env('APP_KEY')))
        {
            return response()->json([
                'status' => 'error',
                'message' => 'Invalid request'
            ]);
        }

        $payment = Payment::find($paymentId);
        if(!$payment)
        {
            return response()->json([
                'status' => 'error',
                'message' => 'Invalid request'
            ]);
        }

        $appParams = $payment->payment_params;
        $appParams = Crypt::decrypt(env('APP_KEY'), $appParams);
        $appParams = json_decode($appParams, true);

        $backUrl = isset($appParams['back']) ? $appParams['back'] : $appParams['referer'] ;

        if($payment->payment_status == 'completed')
        {
            return response()->json([
                'status' => 'completed',
                'message' => 'Payment completed',
                'back'    => $backUrl
            ]);
        }

        return response()->json([
            'status' => 'waiting',
            'message' => 'Payment waiting',
        ]);
    }

    public function notify(Request $request)
    {
        $sandbox = env('PAYPAL_SANDBOX', false);
        $paymentId = (int)$request->input('pid');
        $securityHash = $request->input("k");
        $raw_post_data = file_get_contents('php://input');

        //error_log("notify: " . $raw_post_data . PHP_EOL . PHP_EOL, 3, "_paypal.txt");

        if($securityHash != md5($paymentId . env('APP_KEY')))
        {
            return response()->json([
                'status' => 'error',
                'message' => 'Invalid request'
            ]);
        }

        $payment = Payment::find($paymentId);
        if(!$payment)
        {
            return response()->json([
                'status' => 'error',
                'message' => 'Invalid request'
            ]);
        }
        $payment->callback_response = base64_encode($raw_post_data);
        $payment->callback_at = date('Y-m-d H:i:s');
        $payment->save();

        if($payment->payment_status == "completed")
        {
            return response()->json([
                'status' => 'ok',
                'message' => 'Payment already processed'
            ]);
        }


        $raw_post_array = explode('&', $raw_post_data);
        $myPost = array();
        foreach ($raw_post_array as $keyval) {
            $keyval = explode ('=', $keyval);
            if (count($keyval) == 2)
                $myPost[$keyval[0]] = urldecode($keyval[1]);
        }

        $paypalAccountBlockList = [
            'adis_corey@hotmail.com'
        ];
        if(isset($myPost['payer_email']) && in_array($myPost['payer_email'], $paypalAccountBlockList)){
            $payment->payment_status = "blocklist";
            $payment->save();

            return response()->json([
                'status' => 'ok',
                'message' => 'user in blocklist'
            ]);
        }

        $req = 'cmd=_notify-validate';
        $get_magic_quotes_exists = function_exists('get_magic_quotes_gpc');
        foreach ($myPost as $key => $value) {
            if($get_magic_quotes_exists && get_magic_quotes_gpc() == 1) {
                $value = urlencode(stripslashes($value));
            } else {
                $value = urlencode($value);
            }
            $req .= "&$key=$value";
        }


        // STEP 2: POST IPN data back to PayPal to validate
        $ipnUrl = $sandbox ? "https://www.sandbox.paypal.com/cgi-bin/webscr" : "https://www.paypal.com/cgi-bin/webscr";
        $ch = curl_init($ipnUrl);
        curl_setopt($ch, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_1);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $req);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 1);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2);
        curl_setopt($ch, CURLOPT_FORBID_REUSE, 1);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Connection: Close'));
        if( !($res = curl_exec($ch)) ) {
            return response()->json([
                'status' => 'error',
                'message' => 'Error while processing payment'
            ]);
            curl_close($ch);
            exit;
        }
        curl_close($ch);
        //$res = "VERIFIED";
        $payment->gateway_subcheck_response = base64_encode($res);


        if (strcmp ($res, "VERIFIED") == 0){
            $payment->payment_status = "completed";
            $payment->payment_reference = $request->input('txn_id', '');
            $payment->save();

            // procesiranje uplate
            $appParams = $payment->payment_params;
            $appParams = Crypt::decrypt(env('APP_KEY'), $appParams);
            $appParams = json_decode($appParams, true);
            if(!isset($appParams["_pavld"])){
                return response()->json([
                    'success' => false,
                    'message' => 'Neispravan zahtjev',
                ], 200);
            }

            $response = Http::timeout(10)->withOptions([
                'base_uri' => env("API_CORE_URL") . "/api/init-payment",
            ])->post("", [
                'mk' => env("API_CORE_KEY"),
                'currency_id' => 1,
                'amount' => $appParams["amount"],
                'customer_ip' => $payment->customer_ip,
                'mid' => $appParams["mid"],
                'app_params' => $appParams
            ]);
            $payment->init_payment_response = base64_encode(json_encode($response->json()));
            $payment->save();
            $initPaymentResponse = $response->json();
            if($initPaymentResponse['status'] === false){
                return response()->json([
                    'success' => false,
                    'message' => $initPaymentResponse['message'],
                    'response' => $initPaymentResponse,
                    'a' => $appParams
                ], 200);
            }
            $paymentReference = $initPaymentResponse["payment_reference"];

            $response = Http::timeout(10)->withOptions([
                'base_uri' => env("API_CORE_URL") . "/api/payment-status",
            ])->put("", [
                'mk' => env("API_CORE_KEY"),
                'status' => 1,
                'payment_id' => $paymentReference
            ]);
            $payment->payment_status_response = base64_encode(json_encode($response->json()));
            $payment->save();
            $processPaymentResponse = $response->json();

            return response()->json([
                'status' => 'ok',
                'message' => 'Payment processed',
                'response' => $processPaymentResponse,
            ]);
        } else if (strcmp ($res, "INVALID") == 0) {
            $payment->payment_status = "invalid";
            $payment->save();
            return response()->json([
                'status' => 'error',
                'message' => 'Error while processing payment'
            ]);
        }
    }
}
