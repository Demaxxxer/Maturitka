<script>
    import {push, pop, replace} from 'svelte-spa-router';
    import { cats } from '../stores/stavy.js';
    import { createEventDispatcher } from 'svelte';

    import { nf,getImgUrl } from '../scripty/uzitecne.js';

    const dispatch = createEventDispatcher();

    //import {polozky} from '../stores/stavy.js'

    export let details;


    function odstranit(id){
      dispatch('itemDelete', {id});
    }
    function upravit(id){
      push('/edit/' + id)
    }

</script>

<div class="polozka">
    <img alt="error" src={getImgUrl(details.thumbnail)}>
    <div class="nazev">{details.name}</div>
    <div class="id">{$cats[details.cat]}</div>
    <button class="odstranit" on:click={_ => odstranit(details._id)}>╳</button>
    <button class="edit" on:click={_ => upravit(details._id)}></button>
    <form class="kusy">
        <label for="number">Skladem: {details.storage}</label>

    </form>
    <div class="cena">Cena: {nf(details.cost)} Kč</div>
</div>

<style>
    .polozka{
        position: relative;
        background: var(--darkgrey);
        border-radius: 10px;
        height: 200px;
        width: 450px;
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
    .id{
        position: absolute;
        max-width: 230px;
        bottom: 65px;
        left: 38%;
        font-size: 1.1em;
    }
    .nazev{
        position: absolute;
        max-width: 230px;
        top: 25px;
        left: 38%;
        font-size: 1.2em;
    }

    .odstranit{
        position: absolute;
        top: 20px;
        color: white;
        right: 15px;
        font-size: 1.1em;
    }
    .edit{
        position: absolute;
        height: 18px;
        width: 18px;
        background-image: url('/images/settings.svg');
        background-repeat: none;
        background-size: 100%;
        right: 14px;
        top: 50px;

    }
    .kusy{
        position: absolute;
        left: 38%;
        bottom: 45px;

    }

    .cena{
        position: absolute;
        left: 38%;
        bottom: 25px;
        font-family: roboto;
    }
</style>
