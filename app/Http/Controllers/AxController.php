<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Http\Client\HttpClientException;
use Illuminate\Support\Facades\Http;
use App\Common\Helpers\Crypt;

class AxController extends Controller
{
    public function __construct()
    {
        $this->middleware('ajax_security');
        $this->middleware(\App\Http\Middleware\VerifyCsrfToken::class);
    }
    public function checkCode(Request $request)
    {
        $code = $request->input('code');
        $code = preg_replace('/[^0-9]/', '', $code);

        try {

            $response = Http::timeout(10)->withOptions([
                'base_uri' => env("API_CORE_URL") . "/api/check-code",
            ])->get("", [
                'mk' => env("API_CORE_KEY"),
                'code' => $code
            ]);

            $responseObj = $response->json();

            if($responseObj['status'] === false){
                return response()->json([
                    'success' => false,
                    'message' => "Neispravan kod",
                ], 200);
            }else if($responseObj["data"]["available_amount"] <= 0){
                return response()->json([
                    'success' => false,
                    'message' => "Kod je već iskorišten",
                ], 200);
            }

            return response()->json([
                'success' => true,
                'valid' => true,
                'available_amount' => (float)$responseObj['data']['available_amount'],
            ], 200);
        } catch (HttpClientException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Trenutno imamo problema sa provjerom koda. Molimo pokušajte ponovo kasnije.',
            ], 200);
        }
    }

    public function processPayment(Request $request)
    {
        $codes = $request->input('codes');
        $appParams = strval($request->input('app_params'));

        if(!is_array($codes)){
            return response()->json([
                'success' => false,
                'message' => 'Neispravan zahtjev',
            ], 200);
        }

        if(strlen($appParams) < 1){
            return response()->json([
                'success' => false,
                'message' => 'Neispravan zahtjev',
            ], 200);
        }

        $codes = array_map(function($code){
            return preg_replace('/[^0-9]/', '', $code);
        }, $codes);

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
            'customer_ip' => $request->ip(),
            'mid' => $appParams["mid"],
            'app_params' => $appParams
        ]);

        $initPaymentResponse = $response->json();
        if($initPaymentResponse['status'] === false){
            return response()->json([
                'success' => false,
                'message' => $initPaymentResponse['message'],
                'reponse' => $initPaymentResponse,
            ], 200);
        }

        $paymentReference = $initPaymentResponse["payment_reference"];

        $response = Http::timeout(10)->withOptions([
            'base_uri' => env("API_CORE_URL") . "/api/process-payment",
        ])->put("", [
            'mk' => env("API_CORE_KEY"),
            'codes' => implode(",", $codes),
            'payment_reference' => $paymentReference
        ]);
        $processPaymentResponse = $response->json();
        if($processPaymentResponse['status'] === false){
            return response()->json([
                'success' => false,
                'message' => $processPaymentResponse['message'],
            ], 200);
        }

        $back = "";
        if(isset($appParams["success"])){
            $back = $appParams["success"];
        }else if(isset($appParams["back"])){
            $back = $appParams["back"];
        }else if(isset($appParams["referer"])){
            $back = $appParams["referer"];
        }

        if(strlen($back) > 0){
            if(stripos($back, "?") === false){
                $back .= "?_pavld=1";
            }
            $back .= "&payment_reference=" . $paymentReference;
        }

        return response()->json([
            'success' => true,
            'valid' => true,
            'redirect_url' => $back
        ], 200);
    }
}
