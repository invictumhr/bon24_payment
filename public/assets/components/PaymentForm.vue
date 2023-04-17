<template>
    <h2 class="h2 text-center mb-4">{{ amount_display }} €</h2>
    <form action="./" method="get" autocomplete="off" novalidate>
        <div class="mb-3">
            <label class="form-label">Upišite 16-znamenkasti kod </label>
            <div class="input-group mb-2">
                <input type="text" id="payment-code" class="form-control" data-mask="0000-0000-0000-0000" data-mask-visible="true" placeholder="XXXX-XXXX-XXXX-XXXX" autocomplete="off">
                <button class="btn" type="button">+</button>
            </div>
        </div>

        <div class="table-responsive" style="margin-bottom: 20px;">
            <table class="table table-vcenter card-table">
                <tbody>
                <tr>
                    <td style="padding-left: 0;">Saldo na bonu</td>
                    <td style="text-align: right; padding-right: 0;">0 €</td>
                </tr>
                <tr style="display: none;">
                    <td style="padding-left: 0;">Uplatite još</td>
                    <td style="text-align: right; padding-right: 0;">100 €</td>
                </tr>
                <tr>
                    <td style="padding-left: 0; padding-right: 0; " colspan="2">

                        <div class="alert alert-success" role="alert">
                            <h4 class="alert-title">Odlično! Imate dovoljan iznos za plaćanje.</h4>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

        <div class="mb-2">
            <label class="form-check">
                <input type="checkbox" class="form-check-input"/>
                <span class="form-check-label">Suglasan/suglasna sam s Općim uvjetima poslovanja, odredbom o zaštiti podataka i korištenjem kolačića</span>
            </label>
        </div>
        <div class="form-footer">
            <button type="button" class="btn btn-primary w-100">Plati {{ number_format($amount, 2, ',', '.') }} €</button>
        </div>
    </form>
</template>

<script>
export default {
    name: 'PaymentForm',
    data() {
        return {
            amount_display: '100,00 EUR'
        }
    }
}
</script>
