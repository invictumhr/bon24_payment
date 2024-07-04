<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePayments extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->integer('merchant_id');
            $table->string('amount');
            $table->string('currency');
            $table->string('payment_type');
            $table->string('payment_status');
            $table->longText('payment_params');
            $table->longText('payment_reference');
            $table->longText('reqest');
            $table->longText('callback_response');
            $table->dateTime('callback_at');
            $table->string('customer_ip', 50);
            $table->longText('init_payment_response');
            $table->longText('payment_status_response');
            $table->longText('gateway_subcheck_response');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('payments');
    }
}
