<script>
    import { cart } from '../stores/stavy.js';
    import { getCookie,setCookie,deleteCookie } from '../scripty/uzitecne.js'

    //getCookie(name)
    //setCookie(cname, cvalue, exdays)
    //deleteCookie(name)

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    export let itemId;

    function forwardEvent(){
      cart.update(obj => {
        if(obj[itemId]){
          obj[itemId] += 1;
        } else {
          obj[itemId] = 1;
        }
        setCookie('cart', JSON.stringify(obj), 30)
        return obj;
      })
      //dispatch('click',{id:itemId})
    }

</script>

<button class="button" on:click={forwardEvent}>Koupit</button>


<style>

    .button{
        font-family: roboto;
        font-size: 1.2em;
        height: 35px;
        width: 120px;
        background-color: var(--yellow);
        border: solid 1px var(--darkgrey);
        border-radius: 10px;
        background-image: url('/images/Kosik1.svg');
        background-repeat: no-repeat;
        background-position: center right 15px;
        background-size: 15px;
        padding-right: 20px;
    }

</style>
