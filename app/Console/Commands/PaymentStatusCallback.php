<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;

// * * * * * php /putanja/do/projekta/artisan NazivKomande > /dev/null 2>&1

class PaymentStatusCallback extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'payment_status_callback';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Callback koji se poziva nakon što se napravi uspješno plaćanje';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
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
            //var_dump($payment);

            $callBackData = [
                'payment_id' => $payment["payment_id"],
                'status' => $payment["status"],
                'data' => $payment["data"],
            ];
            $responseCallback = Http::timeout(30)->withOptions([
                'base_uri' => $payment["callback_url"]
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
