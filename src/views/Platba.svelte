<script>

    
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
                <td><label for="jmeno">Jméno</label></td>
                <td><input type="text" id="jmeno" class="input" required></td>
            </tr>
            <tr>
                <td><label for="prijmeni">Přijmení</label></td>
                <td><input type="text" id="prijmeni" class="input" required></td>
            </tr>
            <tr>
                <td><label for="email">Email</label></td>
                <td><input type="email" id="email" class="input" required></td>
            </tr>
            
        </table>


    </div>
        
    <form class="ohraniceni2">

        <p>Typ platby</p>

        <div clas="">
            <input type="radio" id="karta" name="typ" value="karta">
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
    </form>

    <p></p>
    <div class="flow2">
        <a href="/#/souhrn"><button class="pokracovat">Pokračovat v objednávce</button></a>
    </div>

</main>
<style>
    main{
        height: 100%;
        width: 100%;
        min-height: calc(100vh - 425px);
        position: relative;
        color: var(--text);

    }

    .input{
        border-bottom: solid 1px var(--lightgrey);
        color: var(--text);
        width: 200px;
        margin: 0 0 7px 30px;

    }

    p{
        font-size: 1.3em;
    }

    .bar{
        background-color: var(--darkgrey);
        height: 75px;
        max-width: 78.5%;
        margin: 0 auto;
    }

    .postup1, .postup2, .postup3{
        float: left;

        text-align: center;
        height: 100%;
        line-height: 75px;
        font-size: 1.5em;
    }

    .postup1{        
        width: 32%;
    }

    .postup2{
        width: 36%;
        background-image: url('/images/tvar2.svg');
        background-repeat: no-repeat;
        background-position: center center;


    }

    .postup3{
        width: 32%;

    }

    #kosikbarva{
        color: var(--text);
    }
    #platbabarva{
        color: var(--darkgrey);
    }
    #souhrnbarva{
        color: var(--text);
    }

    .ohraniceni1{
        width: 700px;
        height: 170px;
        background-color: var(--darkgrey);
        border-radius: 10px;
        margin: 0 auto;
        margin-top: 20px;
        padding: 5px 35px 5px 35px;
    }

    .ohraniceni2{
        width: 700px;
        height: 200px;
        background-color: var(--darkgrey);
        border-radius: 10px;
        margin: 0 auto;
        margin-top: 20px;
        padding: 5px 35px 5px 35px;
    }

    .ohraniceni2 input{

    }

    form div{
        min-height: 20px;
        border-bottom: solid 1px var(--text);
    }

    .karta{
        background-image: url('/images/kreditka.svg');
        background-repeat: no-repeat;
        background-position: left center;
        padding-left: 70px;
        margin-left: 10px;
    }

    .paypal{
        background-image: url('/images/paypal.svg');
        background-repeat: no-repeat;
        background-position: left center;
        padding-left: 70px;
        margin-left: 10px;
    }

    .paysafe{
        background-image: url('/images/paysafe.svg');
        background-repeat: no-repeat;
        background-position: left center;
        background-size: 50px;
        padding-left: 70px;
        margin-left: 10px;
    }

    .bitcoin{
        background-image: url('/images/bitcoin.svg');
        background-repeat: no-repeat;
        background-position: left center;
        background-size: 20%;
        padding-left: 70px;
        margin-left: 10px;
    }
    .pokracovat{
        height: 40px;
        width: 250px;
        border: solid 1px var(--grey);
        background-color: var(--yellow);
        border-radius: 10px;
        font-size: 1.3em;
        margin: 20px 126px 30px 0;
        float: right;
    }

</style>