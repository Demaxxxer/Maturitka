<script>
    import axios from 'axios';
    import { onMount } from 'svelte';
    import Koupit from './Koupit.svelte'
    import {nf} from '../scripty/uzitecne.js'
    import {polozkyTOP} from '../stores/stavy.js'

    onMount(_ => {
      /*
      const catsKeys = Object.keys($cats)
      const index = Math.floor(Math.random() * catsKeys.length);
      choosedCat = $cats[catsKeys[index]];

      axios({
        method: 'get',
        url: '/api/items/get',
        params: {
          cat: catsKeys[index],
          cat: 'race',
          limit: 3,
          sort: 'soldUp'
        }
      }).then(res => {
        items = res.data;
        loaded = true;
      }).catch(err => {
        loaded = true;
        //Toto by se němělo stát ale može
      })
      */
    });


    let items = ['ok1','ok2','ok3','ok4','ok5'];

</script>
<!--
<div class="polozky">
    {#each $polozkyTOP as polozka}
    <div class="polozka">
        <div class="nazev">{polozka.nazev}</div>
        <img  alt="error">
        <div class="cena">Cena: {nf(polozka.cena * polozka.kusy)} Kč</div>
        <div class="koupit"><Koupit></Koupit></div>
    </div>
    {/each}
</div>
-->
<div class="item-wrap">

  {#each items as item}
    <div class="items">

    </div>
  {/each}

</div>

<style>

  .item-wrap {
    position: relative;
  }

  .items {
    position: absolute;
    top: 0;
    left: 50%;
    width: 250px;
    height: 300px;
    background: red;
    margin: 5px;
    float: left;
    border: solid 2px black;
    transform: translateX(-50%);
  }

  .items:nth-child(3){
    z-index: 5
  }


  .items:nth-child(1) {
    transform: translateX(calc(-50% - 250px) ) scale(0.6);
  }

  .items:nth-child(2) {
    transform: translateX(calc(-50% - 100px) ) scale(0.8);
  }

  .items:nth-child(4) {
    transform: translateX(calc(-50% + 100px) ) scale(0.8);
    z-index: 4;
  }

  .items:nth-child(5) {
    transform: translateX(calc(-50% + 250px) ) scale(0.6);
  }

    .polozky{
        height: 500px;
    }

    .polozka{
        position: relative;
        border-radius: 10px;
        width: 270px;
        height: 300px;
        padding-top: 20px;
    }

    .nazev{
        position: absolute;
        width: 100%;
        top: 20px;
        text-align: center;
        font-size: 0.9em;

    }
    img{
        position: absolute;
        height: 150px;
        width: 120px;
        top: 85px;
        left: 50%;
        transform: translateX(-50%);
        background: white;
    }
    .cena{
        position: absolute;
        bottom: 30px;
        left: 20px;
        font-size: 0.8em;
        font-family: roboto;
    }
    .koupit{
        font-size: 0.8em;
        position: absolute;
        bottom: 22px;
        right: 10px;
    }
</style>
