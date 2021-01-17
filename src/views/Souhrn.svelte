<script>
    import {nf,soucet} from '../scripty/uzitecne.js'
    import {kosik} from '../stores/stavy.js';

    $: sum = soucet($kosik);

    
</script>

<main>
    <div class="bar">

        <div class="postup1" id="kosikbarva">Košík</div>
        <div class="postup2" id="platbabarva">Platba</div>
        <div class="postup3" id="souhrnbarva">Souhrn</div>

    </div>
    <div class="ohraniceni1">
        <p>Osobní údaje</p>
        <table>
            <tr>
                <td><label for="jmeno">Jméno: </label></td>
                <td></td>
            </tr>
            <tr>
                <td><label for="prijmeni">Přijmení: </label></td>
                <td></td>
            </tr>
            <tr>
                <td><label for="email">Email: </label></td>
                <td></td>
            </tr>
        </table>

    </div>
        
    <div class="text">
        Cena košíku:<span class="suma">{nf(sum)} Kč</span>
    </div>
    
    <div class="flow">
        <a href="/#/platba"><button class="zpet">Zpět k platbě</button></a>

        <a href="/#/"><button class="pokracovat" >Dokončit objednávku</button></a>
    </div>

</main>
<style>
    
    main {
        height: 100%;
        width: 100%;
        min-height: calc(100vh - 425px);
        position: relative;
        color: var(--text);
        padding-bottom: 15px;
    }

    .input {
        border-bottom: solid 1px var(--lightgrey);
        color: var(--text);
        width: 100%;
        max-width: 200px;
        margin: 0 0 7px 30px;

    }

    p {
        font-size: 1.3em;
        max-width: 150px;
        width: 100%;
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
        width: 35%;
        background-image: url('/images/sipecka.svg');
        background-repeat: no-repeat;
        background-position: center right;
    }

    .postup2 {
        width: 30%;

    }

    .postup3 {
        width: 35%;
        background-image: url('/images/tvar3.svg');
        background-repeat: no-repeat;
        background-position: center right;
    }

    #kosikbarva {
        color: var(--text);
    }
    #platbabarva {
        color: var(--text);
    }
    #souhrnbarva {
        color: var(--darkgrey);
    }

    .ohraniceni1 {
        max-width: 700px;
        height: 170px;
        background-color: var(--darkgrey);
        border-radius: 10px;
        margin: 20px auto 10px auto;
        padding: 5px 35px 5px 35px;
    }

    .ohraniceni2 {
        max-width: 700px;
        height: 250px;
        background-color: var(--darkgrey);
        border-radius: 10px;
        margin: 20px auto 10px auto;
        padding: 5px 35px 5px 35px;
    }


    .ohraniceni2 div {
        margin: 10px 0;
        border-bottom: solid 1px var(--text);
        padding: 5px 0;
    }

    .ohraniceni2 input {
        margin-left: 10px;
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

    .zpet {
        height: 40px;
        width: 250px;
        border: solid 1px var(--grey);
        background-color: var(--yellow);
        border-radius: 10px;
        font-size: 1.3em;

    }

    .pokracovat {
        height: 40px;
        width: 250px;
        border: solid 1px var(--grey);
        background-color: var(--yellow);
        border-radius: 10px;
        font-size: 1.3em;


    }
    .flow {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        margin: 20px 0 0 0;



    }

    .text .suma {
        margin: 20px 0 0 10px;
        font-size: 1.3em;


    }
    .text {
        text-align: center;
        margin-top: 15px;
    }

</style>