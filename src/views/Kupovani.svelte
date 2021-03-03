<script>
    import axios from 'axios';
    import { onMount } from 'svelte';
    import { cart, cartState } from '../stores/stavy.js';
    import { nf,soucet,getImgUrl,getCookie,setCookie,deleteCookie } from '../scripty/uzitecne.js'
    import Kosik from '../components/Kosik.svelte'
    import Platba from '../components/Platba.svelte'
    import Souhrn from '../components/Souhrn.svelte'


    export let params;

    let state = 'kosik';

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

    function handleChange(e){
      const value = e.detail.e.target.value
      if(isNaN(value))e.detail.e.target.value = 1
      cart.update(obj => {
        obj[e.detail.id] = parseInt(value);
        setCookie('cart',JSON.stringify(obj),30);
        return obj;
      })
    }

    function handleDelete(e){
      const index = e.detail.index;
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

<div>

{#if loaded}
  {#if params && params.op == 'platba'}
    <Platba sumed={sum}/>
  {:else if params && params.op == 'souhrn'}
    <Souhrn items={items} sumed={sum}/>
  {:else}
    <Kosik items={items} on:delete={handleDelete} on:change={handleChange}/>
  {/if}
{/if}
</div>

<style>

</style>
