<script>
    import axios from 'axios';
    import { fade, slide, scale } from 'svelte/transition'
    import { flip } from 'svelte/animate'
    import {push, pop, replace, location} from 'svelte-spa-router';
    import { onMount,createEventDispatcher } from 'svelte';
    import { cart } from '../stores/stavy.js';
    import { nf,soucet,getImgUrl,getCookie,setCookie,deleteCookie } from '../scripty/uzitecne.js'

  	const dispatch = createEventDispatcher();
    export let items;

    onMount(_ => {
      //Přesměrování kdyby to někdo zkoušel přímo URL odkazem
      if($location != '/kosik/')replace('/kosik')
    })

    function handleCartEmpty(){
      items = [];
      cart.update(_ => {
        return {};
      })
      deleteCookie('cart');
    }

    function handleNumberChange(e,id){
      if(isNaN(e.target.value))e.target.value = 1
      cart.update(obj => {
        obj[id] = parseInt(e.target.value);
        setCookie('cart',JSON.stringify(obj),30);
        return obj;
      })
    }

    function odstranit(index){
        cart.update(obj => {
          delete obj[items[index]._id];
          items.splice(index,1);
          items = items;
          setCookie('cart',JSON.stringify(obj),30);
          return obj;
        })
    }

    $: sum = soucet($cart,items);

</script>
<main>

    <div class="bar">

        <div class="postup1">Košík</div>
        {#if items.length > 0}
          <a href="/#/kosik/platba">
            <button class="postup2">Platba</button>
          </a>
        {:else}
          <div class="postup2">Platba</div>
        {/if}


        <div class="postup3">Souhrn</div>

    </div>

    {#if items.length<1}
    <div class="empty" >
        <p>Žádné položky v košíku</p>
    </div>
    {/if}

    {#if items.length > 0}
      <div class="polozky">
          {#each items as item,i (item._id)}

          <div class="polozka" in:scale={{duration:200 * i}} animate:flip={{duration: 500}}>
              <img  alt="error" src={getImgUrl(item.thumbnail)}>
              <div class="nazev">{ item.name}</div>
              <button class="odstranit" on:click={_ => dispatch('delete',{index: i})}>╳</button>
              <form class="kusy">
                  <label for="number">Kusy</label>
                  <input type="number" min="1" max="999" value={$cart[item._id]} on:change={e => dispatch('change',{e:e,id:item._id})}>

              </form>
              <div class="cena">{nf(item.cost * $cart[item._id])} Kč</div>
          </div>

          {/each}
      </div>

      <div class="spodek">
          <div class="text">
              Cena košíku:<span class="suma">{nf(sum)} Kč</span>
          </div>
          <div class="flow">
              <button class="vysypat" on:click={handleCartEmpty}>Vysypat košík</button>
              <a href="/#/kosik/platba"><button class="pokracovat">Pokračovat</button></a>
          </div>

      </div>
    {/if}

</main>
<style>
    main{
        height: 100%;
        width: 100%;
        min-height: calc(100vh - 425px);
        position: relative;
        color: var(--text);
        padding-bottom: 150px;
    }

    .bar{
        height: 75px;
        max-width: 78.5%;
        margin: 0 auto;
    }

    .postup1, .postup2, .postup3 {
        float: left;
        box-sizing: border-box;
        text-align: center;
        height: 100%;
        line-height: 75px;
        font-size: 1.5em;
    }

    .postup1 {
        width: 33%;
        background-color: var(--yellow);
        color: var(--darkgrey);
    }

    .postup2 {
        width: 34%;
        background-color: var(--darkgrey);
        border-right: solid 2px var(--grey);
        color: var(--text);
    }

    .postup3 {
        width: 33%;
        background-color: var(--darkgrey);
        color: var(--text);
    }

    .empty{
        text-align: center;
        font-size: 1.3em;
        margin-top: 200px;
        width: 100%;
        height: 100%;
    }

    .polozky{
        max-width: 790px;
        width: 100%;
        margin: 20px auto 0 auto;
    }
    .polozka{
        position: relative;
        background: var(--darkgrey);
        border-radius: 10px;
        height: 200px;
        margin: 10px;
    }

    img{
        position: absolute;
        height: 150px;
        width: 120px;
        top: 25px;
        left: 25px;
        background: white;
    }

    .nazev{
        position: absolute;
        max-width: 300px;
        top: 25px;
        left: 170px;
        font-size: 1.4em;
    }

    .odstranit{
        position: absolute;
        top: 25px;
        color: white;
        right: 25px;
        font-size: 1.1em;
    }
    .kusy{
        position: absolute;
        left: 50%;
        bottom: 20px;
        margin: 0 auto;
    }

    input{
        height: 20px;
        width: 40px;
        border: solid 1px black;
        border-radius: 5px;
        background-color: white;
        text-align: center;
    }

    .cena{
        position: absolute;
        bottom: 25px;
        right: 25px;
        font-family: roboto;
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
    .vysypat {
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

    @media only screen and (max-width: 1200px){
        .polozka{
            width: 700px;
            margin: 20px auto;
        }
        main{
            padding-bottom: 110px;
        }

    }
    @media only screen and (max-width: 800px){
        .polozka{
            width: 400px;
            margin: 20px auto;
        }
        .bar{
            margin-top: 10px;
            height: 50px;
        }
        .postup1, .postup2, .postup3 {
            line-height: 50px;
            font-size: 1.1em;
        }
    }
    @media only screen and (max-width: 440px){
        main{
            min-height: 480px;
        }
        .polozka{
            width: 330px;
            height: 140px;
            margin: 10px auto;

        }
        img{

            height: 100px;
            width: 75px;
            top: 20px;
            left: 20px;
        }

        .nazev{
            max-width: 300px;
            top: 20px;
            left: 120px;
            font-size: 1.2em;
            width: 150px;
            height: 75px;
        }

        .odstranit{
            top: 20px;
            color: white;
            right: 20px;
            font-size: 0.9em;
        }
        .kusy, .cena{
            font-size: 0.9em;
        }
        .kusy{
            left: 120px;
            bottom: 20px;
        }
        .cena{
            bottom: 20px;
            right: 20px;
        }
    }

</style>
