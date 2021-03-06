<script>
    import axios from 'axios';
    import { onMount } from 'svelte';
    import { fade, slide, scale } from 'svelte/transition'
    import Objednavka from '../components/Objednavka.svelte'
    import {alertContent, uzivatel} from '../stores/stavy.js';

    let loaded = false;
    let orders = [];

    onMount(_ => {

      axios({
        method: 'get',
        url: '/api/order/get',
      }).then(res => {
        orders = res.data;
        loaded = true;
      }).catch(err => {
        loaded = true;
        alertContent.update(_ => err);
        replace('/');
      })
    })

</script>
<main>
    <div class="ohraniceni1">
        <div class="nadpis">Údaje účtu</div>
        <div class="jmeno">Jméno a příjmení: <span class="jmenoH">{$uzivatel.jmeno} {$uzivatel.prijmeni}</span></div>
        <div class="email">E-mail: <span class="emailH">{$uzivatel.email}</span></div>


    </div>
    <div class="ohraniceni2">
        <div class="nadpis">Objednávky</div>
        <div class="nazev1">ID</div>
        <div class="nazev2">Datum</div>
        <div class="nazev3">Počet položek</div>
        <div class="nazev4">Cena</div>

    </div>
    <div>
      {#if loaded}
        {#each orders as order,i}
            <div in:scale={{duration:200 * i}}>
              <Objednavka udaje={order}></Objednavka>
            </div>
        {/each}
      {/if}
    </div>
</main>
<style>

    .ohraniceni1{
        position: relative;
        max-width: 940px;
        height: 100px;
        background-color: var(--darkgrey);
        border-radius: 10px;
        margin: 10px auto 20px auto;
        padding: 5px 35px 5px 35px;
        box-sizing: border-box;
    }
    .ohraniceni2{
        box-sizing: border-box;
    }
    .jmeno, .email{
        margin-bottom: 5px;
    }
    .jmenoH{
        margin-left: 10px;
    }
    .emailH{
        margin-left: 88px;
    }
    .ohraniceni2{
        position: relative;
        max-width: 940px;
        height: 90px;
        background-color: var(--darkgrey);
        border-radius: 10px;
        margin: 10px auto 20px auto;
        padding: 5px 35px 5px 35px;
    }
    .nadpis{
        font-size: 1.3em;
        padding: 10px 0;
    }
    .nazev1, .nazev2, .nazev3, .nazev4{
        position: absolute;
        top: 60px;
    }

    .nazev1{
        left: 35px;
    }
    .nazev2{
        left: 35%;
        transform: translateX(-50%);
    }
    .nazev3{
        left: 65%;
        transform: translateX(-50%);
    }
    .nazev4{
        right: 50px;
    }


    @media only screen and (max-width: 1200px){
        .ohraniceni1, .ohraniceni2{
            width: 700px;
            margin: 20px auto;
        }
        main{
            padding-bottom: 110px;
        }

    }
    @media only screen and (max-width: 800px){
        .ohraniceni1, .ohraniceni2{
            width: 400px;
            margin: 20px auto;
        }

    }
    @media only screen and (max-width: 440px){
        .ohraniceni1, .ohraniceni2{
            width: 330px;
            margin: 10px auto;
            padding: 10px 20px;

        }
        .ohraniceni1{
            height: 120px;

        }
        .nazev1, .nazev2, .nazev3, .nazev4{
            top: 30;
            font-size: 0.7em;
        }
        .nazev1{
            left: 30px;
        }
        .nazev2{
            left: 33%;
        }
        .nazev3{
            left: 65%;
        }
        .nazev4{
            right: 20px;
        }

    }

</style>
