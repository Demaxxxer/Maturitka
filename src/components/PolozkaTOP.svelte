<script>
    import axios from 'axios';
    import { onMount } from 'svelte';
    import Koupit from './Koupit.svelte'
    import {nf, getImgUrl} from '../scripty/uzitecne.js'
    import {polozkyTOP} from '../stores/stavy.js'

    let items = [];
    let displayIndex = 0;
    let loaded = false;
    let disabled = false;
    let trueItems = [];

    onMount(_ => {
      axios({
        method: 'get',
        url: '/api/items/get',
        params: {
          limit: 20,
          sort: 'soldUp'
        }
      }).then(res => {
        if (res.data.length < 8){
          disabled = true;
          return;
        }
        items = res.data
        trueItems = getDisplayed(0)
        loaded = true;
      }).catch(err => {
        console.log(err);
        loaded = true;
        //Toto by se němělo stát ale može
      })

    });

    function getDisplayed(){
      let toDisplay = []
      if(displayIndex >= items.length){
        displayIndex = 0
      }
      if(displayIndex < -6){
        displayIndex = items.length - 1;
      }
      let underIter = displayIndex
      let overIter = 0;
      for(let i=0;i<7;i++){
        if(items[displayIndex + i]){
          toDisplay.push(items[displayIndex + i])
        } else {
          if(displayIndex + i >= items.length){
            toDisplay.push(items[overIter]);
            overIter ++;
          } else {
            toDisplay.push(items[items.length + underIter]);
            underIter ++;
          }
        }
      }

      return toDisplay;
    }

    function move(dir){
      displayIndex += dir
      trueItems = getDisplayed()
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
    {#each trueItems as item,i}
      <div class={'item ' + attrs[i]}>
        <div class="img-wrap">
          <img src={getImgUrl(item.thumbnail)}>
        </div>
        <div class="cost">{item.cost} Kč</div>
      </div>
    {/each}
    <button class="btn-left" on:click={_ => move(-1)}></button>
    <button class="btn-right" on:click={_ => move(1)}></button>
  {:else if disabled}
  <h2>K zobrazení je potřeba aby v databázi bylo více než 8 položek</h2>
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

  .cost {
    display: none;
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

  .large .cost {
    display: block;
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

</style>
