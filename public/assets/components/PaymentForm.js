export default  {
    name: 'PaymentForm',
    emits: ['addNewCode'],
    props: {
        amount: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            payment_code: '',
            has_amount: 0,
            displayPayMore: 'table-row',
            displayHasCorrectAmount: 'none',
            displayUsedCodes: 'none',
            used_codes_html: "",
            used_codes: [],
            paymentButtonDisabled: true,
            userAgreedConditions: false,
            paymentCodeInputClass: "",
            displayForm: 'block',
            displaySuccess: 'none',
            checkCodeStarted: false
        }
    },
    mounted () {
        var element = document.getElementById('payment_code_input');
        var maskOptions = {
            mask: '0000-0000-0000-0000'
        };
        var mask = IMask(element, maskOptions);
    },
    computed: {
        amountDisplay() {
            const formatter = new Intl.NumberFormat('hr-HR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })
            return formatter.format(this.amount)
        },
        amountHasDisplay() {
            const formatter = new Intl.NumberFormat('hr-HR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })
            return formatter.format(this.has_amount)
        },
        amountLeftDisplay() {
            const formatter = new Intl.NumberFormat('hr-HR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })
            return formatter.format(this.amount - this.has_amount)
        }
    },
    methods: {
        addNewCode() {
            this.processCode();

        },
        conditionChanged() {
            if(this.has_amount >= this.amount && this.userAgreedConditions) {
                this.paymentButtonDisabled = false;
            }else{
                this.paymentButtonDisabled = true;
            }
        },
        validateCode(code) {
            var code = code.split('-');
            if(code.length != 4) {
                return false;
            }
            for(var k in code){
                if(code[k].length != 4 || isNaN(code[k])) {
                    return false;
                }
            }
            var codeClean = code.join('');
            var sameDigits = 1;
            for (var i = 0; i < codeClean.length - 2; i++) {
                if (codeClean.charAt(i) === codeClean.charAt(i+1)) {
                    sameDigits++;
                    if (sameDigits > 5) {
                        return false; //korisnik je unio više od 5 istih brojeva
                    }
                } else {
                    sameDigits = 1;
                }
            }

            return true;
        },
        processPayment(){
            if(this.has_amount >= this.amount) {
                this.paymentButtonDisabled = true;
                axios.post(AX_URL + "process-payment" , {
                    codes: this.used_codes,
                    t: new Date().getTime(),
                    app_params: _APP_PARAMS
                }).then(response => {
                    if(response.data.success) {
                        this.displayForm = 'none';
                        this.displaySuccess = 'block';
                        if(response.data.redirect_url){
                            setTimeout(() => {
                                window.location.href = response.data.redirect_url;
                            }, 5000);
                        }
                    }else{
                        alert(response.data.message);
                        this.paymentButtonDisabled = false;
                    }
                    console.log(response);
                }).then(error => {
                    console.log(error);
                    this.paymentButtonDisabled = false;
                });
            }
        },
        processCode() {
            if(!this.validateCode(this.payment_code)) {
                this.paymentCodeInputClass = "is-invalid";
                return;
            }
            if(this.checkCodeStarted) return;
            this.checkCodeStarted = true;
            axios.get(AX_URL + "check-code" , {
                params: {
                    code: this.payment_code,
                    t: new Date().getTime()
                }
            }).then(response => {
                if(response.data.success) {
                    this.paymentCodeInputClass = "";

                    this.has_amount += parseFloat(response.data.available_amount);
                    this.displayUsedCodes = "block";

                    this.used_codes_html += `<div style="margin: 5px 0;"><div class="badge bg-primary">${this.payment_code}</div></div>`;
                    this.used_codes.push(this.payment_code);
                    this.payment_code = '';
                    if(this.has_amount >= this.amount) {
                        this.displayPayMore = 'none';
                        this.displayHasCorrectAmount = 'table-row';
                        if(this.userAgreedConditions){
                            this.paymentButtonDisabled = false;
                        }else{
                            this.paymentButtonDisabled = true;
                        }
                    }

                }else{
                    alert(response.data.message);
                }
                this.checkCodeStarted = false;
                console.log(response);
            }).then(error => {
                this.checkCodeStarted = false;
                console.log(error);
            });


        },
        onCodeChange() {
            this.paymentCodeInputClass = "";
            if(this.validateCode(this.payment_code)) {
                this.processCode();
            }else if(this.payment_code.length == 19) {
                this.paymentCodeInputClass = "is-invalid";
            }else if(this.payment_code.length > 19) {
                this.payment_code = this.payment_code.substring(0, this.payment_code.length - 1);
                if(!this.validateCode(this.payment_code)) {
                    this.paymentCodeInputClass = "is-invalid";
                    return;
                }else{
                    this.processCode();
                }
            }
        },
        onPaste(){
            setTimeout(() => {
                if(this.payment_code.length === 16){
                    this.payment_code = this.payment_code.substring(0, 4) + '-' + this.payment_code.substring(4, 8) + '-' + this.payment_code.substring(8, 12) + '-' + this.payment_code.substring(12);
                }
                if(this.validateCode(this.payment_code)) {
                    this.processCode();
                }else{
                    this.paymentCodeInputClass = "is-invalid";
                }
            }, 100);
        }
    },
    directives: {
        //mask:  VueIMask.IMaskDirective
    },
    template: `<div>
        <h2 class="h2 text-center mb-4">{{ amountDisplay }} €</h2>
        <form action="./" method="get" autocomplete="off" novalidate :style="{ display: displayForm }">
            <div class="mb-3">
                <label class="form-label">Upišite 16-znamenkasti kod </label>
                <div class="input-group mb-2">
                    <input
                        type="text"
                        id="payment_code_input"
                        v-model="payment_code"
                        class="form-control"
                        autocomplete="off"
                        placeholder="XXXX-XXXX-XXXX-XXXX"
                        :class="paymentCodeInputClass"
                        @keyup.enter="addNewCode"
                        @keyup="onCodeChange"
                        @paste="onPaste"
                     >
                    <button class="btn" type="button" @click="addNewCode">+</button>
                </div>
            </div>

            <div class="mb-3" :style="{ display: displayUsedCodes }">
                <label class="form-label">Korišteni bonovi</label>
                <div v-html="used_codes_html"></div>
            </div>


            <div class="table-responsive" style="margin-bottom: 20px;">
                <table class="table table-vcenter card-table">
                    <tbody>
                    <tr>
                        <td style="padding-left: 0;">Saldo na bonu</td>
                        <td style="text-align: right; padding-right: 0;">{{ amountHasDisplay }} €</td>
                    </tr>
                    <tr :style="{ display: displayPayMore }">
                        <td style="padding-left: 0;">Uplatite još</td>
                        <td style="text-align: right; padding-right: 0;">{{ amountLeftDisplay }} €</td>
                    </tr>
                    <tr :style="{ display: displayHasCorrectAmount }">
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
                    <input type="checkbox" class="form-check-input" v-model="userAgreedConditions" @change="conditionChanged"/>
                    <span class="form-check-label">Suglasan/suglasna sam s Općim uvjetima poslovanja, odredbom o zaštiti podataka i korištenjem kolačića</span>
                </label>
            </div>
            <div class="form-footer">
                <button type="button" class="btn btn-primary w-100" :disabled="paymentButtonDisabled" @click="processPayment">Plati {{ amountDisplay }} €</button>
            </div>
        </form>
        <div :style="{ display: displaySuccess }">
            <div class="alert alert-success" role="alert">
                <h4 class="alert-title">Vaša uplata je provedena. Urkoro ćemo vas preusmjeriti nazad na trgovinu.</h4>
            </div>
        </div>
    </div>
    `
}
