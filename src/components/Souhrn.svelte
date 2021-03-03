<script>
    import {nf,soucet} from '../scripty/uzitecne.js'
    import {cartUser, cart, kosik} from '../stores/stavy.js';

    export let sumed;
    export let items;


</script>

<main>
    <div class="bar">

        <a href="/#/kosik"><button class="postup1">Košík</button></a>
        <a href="/#/kosik/platba"><button class="postup2">Platba</button></a>
        <button class="postup3">Souhrn</button>

    </div>
    <div class="ohraniceni1">
        <div class="nadpis">Osobní údaje</div>
        <div class="udaje">Jméno <span class="udaj1">{$cartUser.fname}</span></div>
        <div class="udaje">Příjmení <span class="udaj2">{$cartUser.sname}</span></div>
        <div class="udaje">Email <span class="udaj3">{$cartUser.email}</span></div>
    </div>
    <div class="ohraniceni2">
        <div class="nadpis">Objednávka</div>
        {#each items as item,i}
            <div class="polozka">
                <div class="nazev">{item.name}</div>
                <div class="pocet">{$cart[item._id]}x</div>
                <div class="cena">{nf(item.cost * $cart[item._id])} Kč</div>
            </div>
        {/each}
    </div>

    <div class="spodek">
        <div class="text">
            Cena košíku:<span class="suma">{nf(sumed)} Kč</span>
        </div>

        <div class="flow">
            <a class="button" href="/#/kosik/platba"><button class="zpet">Zpět</button></a>

        <a class="button" href="/#/dokoncit"><button class="pokracovat">Dokončit</button></a>
        </div>
    </div>



</main>
<style>

    main {
        height: 100%;
        width: 100%;
        min-height: calc(100vh - 290px);
        position: relative;
        color: var(--text);
        padding-bottom: 15px;
    }

    .nadpis{
        font-size: 1.3em;
        margin: 20px 0;
    }
    .ohraniceni1{
        max-width: 700px;
        height: 160px;
        box-sizing: border-box;
        background-color: var(--darkgrey);
        border-radius: 10px;
        margin: 20px auto 10px auto;
        padding: 5px 35px 5px 35px;
    }
    .ohraniceni2{
        max-width: 700px;
        height: 100%;
        box-sizing: border-box;
        background-color: var(--darkgrey);
        border-radius: 10px;
        margin: 20px auto 10px auto;
        padding: 5px 35px 5px 35px;
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
        background-color: var(--darkgrey);
        color: var(--text);
        border-left: solid 2px var(--grey);
    }

    .postup3 {
        width: 33%;
        background-color: var(--yellow);
        color: var(--darkgrey);
    }

    .spodek{
        width: 100%;
        height: 100px;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .udaje{
        margin-top: 7px;
    }
    .udaj1{
        padding-left: 25px;
    }
    .udaj2{
        padding-left: 15px;
    }
    .udaj3{
        padding-left: 34px;
    }
    .udaj1, .udaj2, .udaj3{
        font-size: 0.8em;
    }

    .polozka{
        position: relative;
        width: 100%;
        height: 30px;
    }
    .nazev {
        float: left;
    }

    .pocet {
      position: absolute;
      right: 100px;
    }

    .cena {
        float: right;
    }

    .text {

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
        padding-top: 20px;
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
            width: 760px;
            margin: 20px auto;
        }
        main{
            padding-bottom: 20px;
        }
    }
    @media only screen and (max-width: 800px){
        .ohraniceni1, .ohraniceni2{
            width: 400px;
            margin: 20px auto;
        }
    }


</style>
