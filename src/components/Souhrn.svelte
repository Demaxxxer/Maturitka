<script>
    import axios from 'axios';
    import {push, pop, replace} from 'svelte-spa-router';
    import {nf,soucet,deleteCookie} from '../scripty/uzitecne.js'
    import { cart, cartUser, orderInfo } from '../stores/stavy.js';

    export let sumed;
    export let items;

    function handleBuy(e){
      e.target.disabled = true;
      axios({
        method: 'post',
        url: '/api/order/create',
        data: {
          firstname: $cartUser.fname,
          surname: $cartUser.sname,
          email: $cartUser.email,
          payment: $cartUser.payment
        }
      }).then(res => {
        push('/dokoncit');
        cart.update(_ => { return {} });
        deleteCookie('cart');
        alertContent.update(_ => res);
        orderInfo.update(_ => res.data)
        e.target.disabled = false;
      }).catch(err => {
        //Chyba při nákupu
        alertContent.update(_ => err);
        e.target.disabled = false;
      })


    }

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

            <button class="pokracovat" on:click={e => handleBuy(e)}>Dokončit</button>
        </div>
    </div>



</main>
<style>

    main {
        height: 100%;
        width: 100%;
        min-height: calc(100vh - 275px);
        position: relative;
        color: var(--text);

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
        position: absolute;
        bottom: 75px;
        left: 50%;
        transform: translateX(-50%);
    }
    .text .suma {
        margin-left: 10px;
        font-size: 1.3em;
    }
    .flow {
        position: absolute;
        height: 50px;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        margin: 20px 0 0 0;
        overflow: auto;
        box-sizing: border-box;
        bottom: 20px;
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
    @media only screen and (max-width: 440px){
        
        .bar{
            height: 50px;
            margin-top: 10px;
        }
        .postup1, .postup2, .postup3 {
            line-height: 50px;
            font-size: 1.3em;
        }
        .ohraniceni1, .ohraniceni2{
            width: 320px;
            margin: 20px auto;
        }
        

    }


</style>
