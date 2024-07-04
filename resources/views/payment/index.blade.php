<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Plaćanje</title>

    <link rel="stylesheet" href="{{ asset('tabler/css/tabler.min.css') }}">
    <script src="{{ asset('tabler/js/tabler.min.js') }}"></script>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script src="https://unpkg.com/imask"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script>
        var BASE_URL = "{{ url('/') }}";
        var CURRENT_URL = "{{ url()->current() }}";
        var AX_URL = "{{ url('/ax') }}/";

    </script>

</head>
<body class="d-flex flex-column">

@if ($forcePayPal != 1)
<div class="page page-center">
    <div class="container container-tight py-4">
        <div class="text-center mb-4">
            <a href="." class="navbar-brand navbar-brand-autodark">
                <img src="{{ asset('assets/img/logo.png') }}" title="BON24" style="width: 80px;"/>
            </a>
        </div>
        <div class="card card-md">
            <div class="card-body" id="payment-app">
                <payment-form :amount="{{ $amount }}"></payment-form>
            </div>
            <div class="hr-text">ili</div>
            <div class="card-body">
                <div class="row">
                    <div class="col-12">
                        <a href="javascript:;" class="btn w-100" style="display: block;" onclick="_paypalPayment();">
                            <div style="width: 100%; margin: 0 0 10px;">
                                <img src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-100px.png" />
                            </div>
                            Platite sa PayPal
                        </a></div>
                </div>
            </div>
        </div>
    </div>
</div>
@endif

<form method="post" action="{{ url('/paypal') }}" id="paypal-form">
    @csrf
    <input type="hidden" name="payment_params" value="{{ $params  }}">
    <input type="hidden" name="mid" value="{{ $merchantId  }}">
    <input type="hidden" name="amount" value="{{ $amount  }}">
    <input type="hidden" name="currency" value="{{ $currency  }}">
</form>

<script>
    var _APP_PARAMS = "{{ $params }}";

    function _paypalPayment() {
        document.getElementById('paypal-form').submit();
    }

    @if ($forcePayPal === 1)
        _paypalPayment();
    @endif
</script>
<script type="module">
    const { createApp } = Vue
    import PaymentForm from './assets/components/PaymentForm.js';
    const app = createApp({});
    app.component('PaymentForm', PaymentForm)

    app.mount('#payment-app');
</script>



</body>
</html>
