<script>
    import axios from 'axios';
    import { onMount } from 'svelte';
    import { cart, cartUser } from '../stores/stavy.js';
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
      }).then(res => {
        items = res.data;
        if(items.length < 1){
          cart.update(_ => {});
          deleteCookie('cart');
        }

        let dbIds = []
        for (const i in items){
          dbIds.push(items[i]._id);
        }
        for(const id in $cart){
          if(dbIds.indexOf(id) == -1){
            cart.update(obj => {
              delete obj[id];
              setCookie('cart',JSON.stringify(obj),30);
              return obj;
            });
          }
        }

        loaded = true;
      }).catch(err => {
        loaded = true;
        cart.update(_ => { return {} });
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

    function validCartUser(user){
      return (
        user.fname.length > 0 &&
        user.sname.length > 0 &&
        user.email.length > 2 &&
        user.email.indexOf('@') != -1
      )
    }

    $: sum = soucet($cart,items);
    $: notEmptyCart = items.length > 0;
    $: souhrnAccess = validCartUser($cartUser)
</script>

<div>

{#if loaded}
  {#if params && params.op == 'platba' && notEmptyCart}
    <Platba sumed={sum}/>
  {:else if params && params.op == 'souhrn' && notEmptyCart && souhrnAccess}
    <Souhrn items={items} sumed={sum}/>
  {:else}
    <Kosik items={items} on:delete={handleDelete} on:change={handleChange}/>
  {/if}
{/if}
</div>

<style>

</style>
