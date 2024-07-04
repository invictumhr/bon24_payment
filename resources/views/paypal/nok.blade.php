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



<script>
   document.location.href = '{{ $backUrl }}'
</script>




</body>
</html>
