<script>
    import axios from 'axios';
    import { onMount } from 'svelte';
    import Koupit from './Koupit.svelte'
    import {nf, getImgUrl} from '../scripty/uzitecne.js'
    import {polozkyTOP} from '../stores/stavy.js'

    let items = [];
    let loaded = false;
    let disabled = true;

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
          limit: 7,
          sort: 'soldUp'
        }
      }).then(res => {
        items = res.data;
        loaded = true;
      }).catch(err => {
        loaded = true;
        //Toto by se němělo stát ale može
      })

    });

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
  {:else}
  <h2>Toto snad bude někdy fungovat</h2>
  {/if}
</div>

<style>

  .item-wrap {
    position: relative;
    margin-top: 25px;
    background: green;
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
  }

  .invis {
    visibility: hidden;
    height: 0;
    width: 0;
    border: 0;
  }

  .small {
    transform: scale(0.75);
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

  .img-wrap {
    display: flex;
    margin: 20px auto 0 auto;
    height: 190px;
    width: 130px;
    background-color: pink;
    align-items: center
  }

  .img-wrap img {
    max-width: 100%;
    max-height: 100%;
  }

</style>
