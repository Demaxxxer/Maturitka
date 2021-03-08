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
    let animTimer = false;

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
      if(!animTimer){
        displayIndex += dir
        trueItems = getDisplayed()
        const elem = document.querySelector('#slider-widget');
  /*
        if(animTimer){
          let newClasses = Array.from(elem.classList).splice(0,2);
          elem.className = newClasses.join(' ');
          window.clearTimeout(animTimer);
        }
        */

        elem.classList.add('move' + dir);

        animTimer = window.setTimeout(()=> {
          elem.classList.remove('move' + dir);
          animTimer = false;
        },300);
      }

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
<div class="item-wrap" id="slider-widget">
  {#if loaded && !disabled}
    {#each trueItems as item,i}
      <a href={'/#/polozka/' + item._id}>
        <div class={'item ' + attrs[i]}>
          <div class="img-wrap">
            <img src={getImgUrl(item.thumbnail)} alt="Bohužel nejde načíst">
          </div>
          <div class="selected">{nf(item.cost)} Kč</div>
        </div>
      </a>
    {/each}
    <button class="btn-left" on:click={_ => move(-1)}></button>
    <button class="btn-right" on:click={_ => move(1)}></button>
  {:else if disabled}
    <div>Není dostatek zboží k dispozici pro vystavení.</div>
  {/if}
</div>

<style>
  /* Wrapper  */


  .item-wrap {
    position: relative;
    margin-top: 25px;
    opacity: 1;
    height: 270px;
    width: 860px;
    transition: background;
  }
  /* Item */
  .item {
    position: absolute;
    height: 100%;
    width: 180px;
    background: #384251;
    border-radius: 20px;
    border: solid 1px black;
    box-sizing: border-box;
  }

  /* Neviditelné itemy  */
  .invis {
    visibility: hidden;
    height: 0;
    width: 0;
    border: 0;
    background: #242830;
  }

  .invis .img-wrap {
    margin-top: 40px;
  }

  .invis.l {
      left: 100px;
  }

  .invis.r {
      right: 100px;
  }

  .medium, .small {
    display: flex;
    align-items: center
  }

  .medium .img-wrap, .small .img-wrap {
    margin-top: 0px;
  }
  /* Nejmenší itemy  */
  .small {
    transform: scale(0.75);
    background: #242830;
    z-index: 1;
  }
  .small.l {
    left: 100px;
  }
  .small.r {
    right: 100px;
  }
  /* Střední itemy vedle velkého  */
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
  /* Prostřední item  */
  .large {
    z-index: 3;
    left: calc(50% - 90px);
    font-size: 1.2em;
  }
  .large:hover {
    border-color: var(--yellow);
  }

  .large .selected {
    visibility: visible;
    height: auto;
    width: auto;
    margin-top: 10px;
  }

  /* Detaily Itemu  */
  .selected {
    visibility: hidden;
    height: 0;
    width: 0;
  }

  .img-wrap {
    display: flex;
    margin: 20px auto 0 auto;
    height: 190px;
    width: 130px;
    align-items: center;
  }

  .img-wrap img {
    max-width: 100%;
    max-height: 100%;
  }

  /* Neviditelné zóny kliknuti pro posunutí */
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

  /* Posunovací animace */
  @keyframes invis-r-move-1 {
    0% {
      visibility: visible;
      opacity: 1;
      transform: scale(0.75) translateX(0);
    }
    100% {
      opacity: 0;
      transform: scale(0.50) translateX(100px);
    }
  }

  @keyframes small-r-move-1 {
    0% {
      transform: scale(0.9) translateX(-130px);
    }
    100% {
      transform: scale(0.75) translateX(0);
    }
  }

  @keyframes medium-r-move-1 {
    0% {
      transform: scale(1) translateX(-120px);
    }
    100% {
      transform: scale(0.9) translateX(0);
    }
  }

  @keyframes large-move-1 {
    0% {
      transform: scale(0.9) translateX(-130px);
    }
    100% {
      transform: scale(1) translateX(0);
    }
  }

  @keyframes medium-l-move-1 {
    0% {
      transform: scale(0.75) translateX(-160px);
    }
    100% {
      transform: scale(0.9) translateX(0);
    }
  }

  @keyframes small-l-move-1 {
    0% {
      opacity: 0;
      transform: scale(0.50) translateX(-130px);
    }
    100% {
      opacity: 1;
      transform: scale(0.75) translateX(0);
    }
  }

  .move-1 a .invis.r {
    visibility: hidden;
    height: 100%;
    width: 180px;
    border: solid 1px black;
    animation: invis-r-move-1 var(--widget-duration) ease-in-out
  }

  .move-1 a .small.r {
    transform: scale(0.75) translateX(0);
    animation: small-r-move-1 var(--widget-duration) ease-in-out
  }

  .move-1 a .medium.r {
    transform: scale(0.9) translateX(0);
    animation: medium-r-move-1 var(--widget-duration) ease-in-out
  }

  .move-1 a .large {
    animation: large-move-1 var(--widget-duration) ease-in-out
  }

  .move-1 a .medium.l {
    animation: medium-l-move-1 var(--widget-duration) ease-in-out
  }

  .move-1 a .small.l {
    animation: small-l-move-1 var(--widget-duration) ease-in-out
  }


  @keyframes invis-l-move1 {
    0% {
      visibility: visible;
      opacity: 1;
      transform: scale(0.75) translateX(0);
    }
    100% {
      opacity: 0;
      transform: scale(0.50) translateX(-100px);
    }
  }

  @keyframes small-l-move1 {
    0% {
      transform: scale(0.9) translateX(130px);
    }
    100% {
      transform: scale(0.75) translateX(0);
    }
  }

  @keyframes medium-l-move1 {
    0% {
      transform: scale(1) translateX(120px);
    }
    100% {
      transform: scale(0.9) translateX(0);
    }
  }

  @keyframes large-move1 {
    0% {
      transform: scale(0.9) translateX(130px);
    }
    100% {
      transform: scale(1) translateX(0);
    }
  }

  @keyframes medium-r-move1 {
    0% {
      transform: scale(0.75) translateX(160px);
    }
    100% {
      transform: scale(0.9) translateX(0);
    }
  }

  @keyframes small-r-move1 {
    0% {
      opacity: 0;
      transform: scale(0.50) translateX(130px);
    }
    100% {
      opacity: 1;
      transform: scale(0.75) translateX(0);
    }
  }

  .move1 a .invis.l {
    visibility: hidden;
    height: 100%;
    width: 180px;
    border: solid 1px black;
    animation: invis-l-move1 var(--widget-duration) ease-in-out
  }

  .move1 a .small.l {
    //transform: scale(0.75) translateX(130);
    animation: small-l-move1 var(--widget-duration) ease-in-out
  }

  .move1 a .medium.l {
    //transform: scale(0.9) translateX(0);
    animation: medium-l-move1 var(--widget-duration) ease-in-out
  }

  .move1 a .large {
    animation: large-move1 var(--widget-duration) ease-in-out
  }

  .move1 a .medium.r {
    //transform: scale(0.75) translateX(0);
    animation: medium-r-move1 var(--widget-duration) ease-in-out
  }

  .move1 a .small.r {
    animation: small-r-move1 var(--widget-duration) ease-in-out
  }

  @media only screen and (max-width: 800px){
      .item-wrap {
        width: 400px;
      }
      .invis{
        display: none;
      }
      .small{
        display: none;
      }
      
      .btn-left {
        left: 0px;
        width: 110px;

      }

      .btn-right {
        right: 0px;
        width: 110px;
      }
      .move-1 a .invis.r, .move-1 a .small.r, .move-1 a .medium.r, .move-1 a .large, .move-1 a .medium.l, .move-1 a .small.l{
        animation: none;
      }
      .move1 a .invis.l, .move1 a .small.l, .move1 a .medium.l, .move1 a .large, .move1 a .medium.r, .move1 a .small.r{
        animation: none;
      }


      }


</style>
