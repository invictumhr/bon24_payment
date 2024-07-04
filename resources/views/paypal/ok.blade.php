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

<div class="page page-center">
    <div class="container container-tight py-4">
        <div class="text-center mb-4">
            <a href="." class="navbar-brand navbar-brand-autodark">
                <img src="{{ asset('assets/img/logo.png') }}" title="BON24" style="width: 80px;"/>
            </a>
        </div>
        <div class="card card-md">
            <div class="card-body">
                <h2 class="h2 text-center mb-4">Još samo nekoliko sekundi...</h2>
                <div class="progress">
                    <div class="progress-bar progress-bar-indeterminate bg-green"></div>
                </div>
                <br/><br/>
                Potvrđujemo vašu uplatu. To može potrajati do 30 sekundi.
                <div id="app"></div>
            </div>


        </div>
    </div>
</div>

<script>
    const { createApp } = Vue

    createApp({
        data() {
            return {

            }
        },
        created() {
            setTimeout(() => {
                this.doLoad();
            }, 2000);
        },
        methods: {
            doLoad() {
                axios.get(AX_URL + 'paypal-check', {
                    params: {
                        id: "{{ $paymentId }}",
                        k: "{{ $securityHash }}"
                    }
                })
                    .then(response => {
                        if(response.data.status == 'completed') {
                            window.location.href = response.data.back;
                        }
                        setTimeout(() => {
                            this.doLoad();
                        }, 2000);
                    })
                    .catch(error => {
                        alert(error);
                        console.log(error);
                    });
            }
        }

    }).mount('#app')
</script>




</body>
</html>
