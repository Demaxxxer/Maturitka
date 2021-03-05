<script>
    import axios from 'axios';
    import { onMount } from 'svelte';
    import Koupit from './Koupit.svelte'
    import {nf, getImgUrl} from '../scripty/uzitecne.js'
    import {polozkyTOP} from '../stores/stavy.js'

    let items = [];
    let loaded = false;
    let disabled = false;

    onMount(_ => {
      /*
      const catsKeys = Object.keys($cats)
      const index = Math.floor(Math.random() * catsKeys.length);
      choosedCat = $cats[catsKeys[index]];
      */
      axios({
        method: 'get',
        url: '/api/items/get',
        params: {
          limit: 20,
          sort: 'soldUp'
        }
      }).then(res => {
        console.log(res.data);
        items = res.data.splice(0,7);
        loaded = true;
      }).catch(err => {
        loaded = true;
        //Toto by se němělo stát ale može
      })

    });

    function move(dir){
      console.log(dir);
    }

    let attrs = [
      'invis l',
      'small l',
      'medium l',
      'large',
      'medium r',
      'small r',
      'invis r',
    ]

</script>
<div class="item-wrap">
  {#if loaded && !disabled}
    {#each items as item,i}
      <div class={'item ' + attrs[i]}>
        <div class="img-wrap">
          <img src={getImgUrl(item.thumbnail)}>
        </div>
      </div>
    {/each}
    <button class="btn-left" on:click={_ => move('left')}></button>
    <button class="btn-right" on:click={_ => move('right')}></button>
  {:else}
  <h2>Toto snad bude někdy fungovat</h2>
  {/if}
</div>

<style>

  .item-wrap {
    position: relative;
    margin-top: 25px;
    //background: green;
    height: 270px;
    width: 100%
  }

  .item {
    position: absolute;
    height: 100%;
    width: 180px;
    background: #384251;
    border-radius: 20px;
    border: solid 1px black;
    box-sizing: border-box;
    box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.5);
  }

  .invis {
    visibility: hidden;
    height: 0;
    width: 0;
    border: 0;
  }

  .medium, .small {
    display: flex;
    align-items: center
  }

  .medium .img-wrap, .small .img-wrap {
    margin-top: 0px;
  }

  .small {
    transform: scale(0.75);
    background: #242830;
    //width: 180px;;
  }

  .small.l {
    left: 100px;
  }

  .small.r {
    right: 100px;
  }

  .medium {
    z-index: 2;
    background: #2a303b;
    transform: scale(0.9);
  }

  .items:nth-child(1) {
    transform: translateX(calc(-50% - 300px) ) scale(0.6);
  }

  .items:nth-child(2) {
    transform: translateX(calc(-50% - 150px) ) scale(0.8);
  }

  .items:nth-child(4) {
    transform: translateX(calc(-50% + 150px) ) scale(0.8);
    z-index: 4;
  }

  .items:nth-child(5) {
    transform: translateX(calc(-50% + 300px) ) scale(0.6);
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
  .medium.l {
    left: 220px;
  }
  .medium.r {
    right: 220px;
  }

  .large {
    z-index: 3;
    left: 50%;
    transform: translateX(-50%);
  }

  .img-wrap {
    display: flex;
    margin: 20px auto 0 auto;
    height: 190px;
    width: 130px;
    align-items: center
  }

  .img-wrap img {
    max-width: 100%;
    max-height: 100%;
  }

<<<<<<< HEAD
=======
<<<<<<< HEAD
  .btn-left, .btn-right {
    position: absolute;
    z-index: 3;
    height: 100%;
    width: 350px;
  }

  .btn-left {
    left: 20px;
  }

  .btn-right {
    right: 20px;
  }

=======
>>>>>>> 2c7f8e298a1fe760c2133d37bfe9cb30b932c195
>>>>>>> db1343907618447cc1b3926e86e719d36e1b2961
>>>>>>> 520825ef1887527896d7a19fa558a7cf066b6ee2
</style>
