<script>
    import axios from 'axios';
    import { onMount } from 'svelte';
    import { cart } from '../stores/stavy.js';
    import { nf,soucet,getImgUrl,getCookie,setCookie,deleteCookie } from '../scripty/uzitecne.js'
    import { kosik } from '../stores/stavy.js';

    let loaded = false;
    let items = [];

    onMount(_ => {
      axios({
        method: 'get',
        url: '/api/items/fromcart',
        params: {
          cart: JSON.stringify($cart)
        }
      }).then(res => {
        items = res.data;
        loaded = true;
      }).catch(err => {
        loaded = true;
        cart.update(_ => {});
        deleteCookie('cart');
      })

    })

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


  {#if loaded}

    <div class="bar">

        <a href="/#/kosik"><button class="postup1">Košík</button></a>
        <a href="/#/platba"><button class="postup2">Platba</button></a>
        <div class="postup3">Souhrn</div>

    </div>

    {#if items.length<1}
    <div class="empty" >
        <p>Žádné položky v košíku</p>
    </div>
    {/if}

    {#if items.length> 0}
      <div class="polozky">
          {#each items as item,i}

          <div class="polozka"><!--relative-->
              <img  alt="error" src={getImgUrl(item.thumbnail)}><!--src="{polozka.imgUrl}"-->
              <div class="nazev">{ item.name}</div>
              <button class="odstranit" on:click={_ => odstranit(i)}>╳</button>
              <form class="kusy">
                  <label for="number">Kusy</label>
                  <input type="number" min="1" max="999" value={$cart[item._id]} on:change={e => handleNumberChange(e,item._id)}>

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
              <a href="/#/platba"><button class="pokracovat">Pokračovat</button></a>
          </div>

      </div>
    {/if}
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
        top: 15px;
        color: white;
        right: 15px;
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
        right: 15px;
        font-family: roboto;
    }
    .flow{
        text-align: center;
        bottom: 20px;
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

    .pokracovat {
        position: absolute;
        height: 40px;
        width: 150px;
        border: solid 1px var(--grey);
        background-color: var(--yellow);
        border-radius: 10px;
        font-size: 1.3em;
        bottom: 15px;
        transform: translateX(-50%);
        left: 50%;
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

    }

</style>
