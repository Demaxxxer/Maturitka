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
        width: 110px;
        top: 25px;
        left: 25px;
        background: white;
    }
    .id{
        position: absolute;
        max-width: 230px;
        bottom: 45px;
        left: 35%;
        font-size: 1.1em;
    }
    .nazev{
        position: absolute;
        max-width: 230px;
        top: 25px;
        left: 35%;
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

    .cena{
        position: absolute;
        left: 35%;
        bottom: 25px;
        font-family: roboto;
    }
    @media only screen and (max-width: 440px){
        .polozka{
            height: 200px;
            width: 330px;
            margin: 10px 15px;
        }
        .id, .cena{
            font-size: 0.8em;
        }

        .id{
            left: 50%;
        }
        .nazev{
            width: 120px;
            height: 90px;
            font-size: 1em;
            left: 50%;

        }
        .cena{
            left: 50%;
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


    }
</style>
