<script>
    import {nf,soucet} from '../scripty/uzitecne.js'
    import {kosik,platba} from '../stores/stavy.js';
    //$: sum = soucet($kosik);

    let sum = 3000;

    function zapis(e,klic){

        platba.update(test => {
            test[klic] = e.target.value
            return test
        })

    }

</script>

<main>
    <form on:submit|preventDefault={(e) => document.location.href="/#/souhrn"}>
        <div class="bar">

            <a href="/#/kosik"><button type="button" class="postup1">Košík</button></a>
            <a href="/#/platba"><button type="button" class="postup2">Platba</button></a>
            <a href="/#/souhrn"><button class="postup3">Souhrn</button></a>

        </div>
        <div class="ohraniceni1">
            <div class="nadpis1">Osobní údaje</div>
            <div class="wrapper1">
                <label for="jmeno" class="label">Jméno</label>
                <input type="text" class="input1" on:input={e => zapis(e,"jmeno")} value={$platba.jmeno} required><br>

                <label for="prijmeni" class="label">Příjmení</label>
                <input type="text" class="input2" on:input={e => zapis(e,"prijmeni")} value={$platba.prijmeni} required><br>

                <label for="email" class="label">Email</label>
                <input type="email" class="input3" on:input={e => zapis(e,"email")} value={$platba.email} required><br>
            </div>
        </div>

        <div class="ohraniceni2">

            <div class="nadpis2">Typ platby</div>
            <div class="platby">
                <div>
                    <input type="radio" id="karta" name="typ" value="karta" checked="checked">
                    <label for="karta" class="karta">Kartou online</label>
                </div>
                <div>
                    <input type="radio" id="paypal" name="typ" value="paypal">
                    <label for="paypal" class="paypal">PayPal</label>
                </div>
                <div>
                    <input type="radio" id="paysafe" name="typ" value="paysafe">
                    <label for="paysafe" class="paysafe">Paysafecard</label>
                </div>
                <div>
                    <input type="radio" id="bitcoin" name="typ" value="bitcoin">
                    <label for="bitcoin" class="bitcoin">Bitcoin</label>
                </div>
            </div>
        </div>

        <div class="spodek">
            <div class="text">
                Cena košíku:<span class="suma">{nf(sum)} Kč</span>
            </div>

            <div class="flow">
                <a class="button" href="/#/kosik"><button type="button" class="zpet">Zpět</button></a>

                <button type="submit" class="pokracovat">Pokračovat </button>
            </div>
        </div>
    </form>
</main>
<style>

    main {
        height: 100%;
        width: 100%;
        min-height: calc(100vh - 425px);
        position: relative;
        color: var(--text);


    }

    .input1, .input2, .input3 {
        border-bottom: solid 1px var(--lightgrey);
        color: var(--text);
        width: 100%;
        max-width: 200px;
        margin-bottom: 7px;
    }
    .input1{
        margin-left: 25px;
    }

    .input2{
        margin-left: 15px;
    }
    .input3{
        margin-left: 34px;
    }
    .nadpis1, .nadpis2{
        font-size: 1.3em;
        margin: 20px 0;
    }
    .nadpis2{
        padding-bottom: 5px;
    }

    .bar {
        background-color: var(--darkgrey);
        height: 75px;
        max-width: 78.5%;
        margin: 0 auto;
    }

    .postup1, .postup2, .postup3 {
        float: left;
        text-align: center;
        height: 100%;
        line-height: 75px;
        font-size: 1.5em;
    }

    .postup1 {
        width: 33%;
        background-color: var(--darkgrey);
        color: var(--text);
    }

    .postup2 {
        width: 34%;
        background-color: var(--yellow);
        color: var(--darkgrey);
    }

    .postup3 {
        width: 33%;
        background-color: var(--darkgrey);
        color: var(--text);
    }

    .ohraniceni1 {
        max-width: 700px;
        height: 160px;
        box-sizing: border-box;
        background-color: var(--darkgrey);
        border-radius: 10px;
        margin: 20px auto 10px auto;
        padding: 5px 35px 5px 35px;
    }

    .ohraniceni2 {
        max-width: 700px;
        height: 250px;
        box-sizing: border-box;
        background-color: var(--darkgrey);
        border-radius: 10px;
        margin: 20px auto 10px auto;
        padding: 5px 35px 5px 35px;
    }

    .ohraniceni2 .platby div {
        margin: 10px 0;
        border-bottom: solid 1px var(--text);
        padding: 5px 0;
    }

    .ohraniceni2 input {
        margin-left: 10px;

    }

    .wrapper1{
        height: 100%;
    }
    .label{
        width: 100%;
        margin-top: 10px;
    }


    label {
        height: 100%;
    }

    .karta {
        background-image: url('/images/kreditka.svg');
        background-repeat: no-repeat;
        background-position: left;
        padding-left: 70px;
        margin-left: 35px;
    }

    .paypal {
        background-image: url('/images/paypal.svg');
        background-repeat: no-repeat;
        background-position: left;
        padding-left: 70px;
        margin-left: 35px;
    }

    .paysafe {
        background-image: url('/images/paysafe.svg');
        background-repeat: no-repeat;
        background-position: left;
        background-size: 50px;
        padding-left: 87px;
        margin-left: 18px;
    }

    .bitcoin {
        background-image: url('/images/bitcoin.svg');
        background-repeat: no-repeat;
        background-position: left;
        background-size: 18px;
        padding-left: 70px;
        margin-left: 35px;
    }
    .spodek{
        position: relative;
        width: 100%;
        height: 100px;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .text {
        margin-top: 25px;
        text-align: center;
    }
    .text .suma {
        margin-left: 10px;
        font-size: 1.3em;
    }
    .flow {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        margin: 20px 0 0 0;
        overflow: auto;
        box-sizing: border-box;
    }
    .zpet {
        height: 40px;
        width: 150px;
        border: solid 1px var(--grey);
        background-color: var(--yellow);
        border-radius: 10px;
        font-size: 1.3em;
    }

    .pokracovat {
        height: 40px;
        width: 150px;
        border: solid 1px var(--grey);
        background-color: var(--yellow);
        border-radius: 10px;
        font-size: 1.3em;
    }
    .button{
        height: 40px;
        width: 150px;
    }

    @media only screen and (max-width: 1200px){
        .ohraniceni1, .ohraniceni2{
            width: 700px;
            margin: 20px auto;
        }
        main{
            padding: 0 10px 110px;
        }

    }
    @media only screen and (max-width: 800px){
        .ohraniceni1, .ohraniceni2{
            width: 400px;
            margin: 20px auto;
        }

    }

</style>
