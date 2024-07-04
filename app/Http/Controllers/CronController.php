<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Http\Client\HttpClientException;
use Illuminate\Support\Facades\Http;
use App\Common\Helpers\Crypt;

class CronController extends Controller
{
    public function __construct()
    {

    }
    public function runCron(Request $request)
    {
        $startTs = time();
        while(time() - $startTs < 50){
            $doneCnt = $this->callback();
            if($doneCnt === 0){
                sleep(10);
            }
        }
        return 0;
    }



    public function callback()
    {
        //error_log(date("H:i:s") . PHP_EOL, 3, "_callback.txt");
        $cntDone = 0;
        $limitPerCall = 10;
        $response = Http::timeout(10)->withOptions([
            'base_uri' => env("API_CORE_URL") . "/api/get-callback-payment-status",
        ])->get("", [
            'mk' => env("API_CORE_KEY"),
            'limit' => $limitPerCall
        ]);

        $response->json();
        foreach ($response["payments"] as $payment){
            $callbackUrl = $payment["callback_url"];
            if(isset($payment["data"]["callback_url"]) && strlen($payment["data"]["callback_url"]) > 0){
                $callbackUrl = $payment["data"]["callback_url"];
            }
            $callBackData = [
                'payment_id' => $payment["payment_id"],
                'status' => $payment["status"],
                'data' => $payment["data"],
            ];

            $responseCallback = Http::timeout(30)->withOptions([
                'base_uri' => $callbackUrl
            ])->post("", $callBackData);

            $status = 0;
            if($responseCallback->ok()){
                $status = 1;
            }


            $response = Http::timeout(10)->withOptions([
                'base_uri' => env("API_CORE_URL") . "/api/update-callback-status",
            ])->put("", [
                'mk' => env("API_CORE_KEY"),
                'payment_id' => $payment["payment_id"],
                'new_status' => $status,
                'callback_response' => $responseCallback->body(),
                'request' => [
                    "data" => $callBackData,
                    "url" => $payment["callback_url"]
                ]
            ]);

            echo $response->body() ;

            $cntDone ++;
        }

        return $cntDone;
    }
}
