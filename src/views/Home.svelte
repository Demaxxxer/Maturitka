<script>
  import axios from 'axios';
      import { fade, slide, scale } from 'svelte/transition'
  import { onMount } from 'svelte';
  import { cats} from '../stores/stavy.js'
  import PolozkaHS from '../components/PolozkaHS.svelte'
  import PolozkaTOP from '../components/PolozkaTOP.svelte'


  let items = [];
  let loaded = false;
  let choosedCat = ''


  onMount(_ => {
    const catsKeys = Object.keys($cats)
    const index = Math.floor(Math.random() * catsKeys.length);
    choosedCat = $cats[catsKeys[index]];

    axios({
      method: 'get',
      url: '/api/items/get',
      params: {
        cat: catsKeys[index],
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
  });

</script>
<main>
  <div class="ohraniceni1">
    <dit class="text">Top produkty týdne</dit>
    <PolozkaTOP></PolozkaTOP>
  </div>
  <div>
  {#if loaded}
    <div class="ohraniceni2">Nejprodávanější {choosedCat}</div>
    <div class="polozky">
        {#each items as item,i}
          <div in:scale={{duration:200 * i}}>
              <PolozkaHS details={item} />
          </div>
        {/each}
    </div>
  {/if}

  </div>


</main>

<style>
  .ohraniceni1{
    box-sizing: border-box;
    background-color: var(--darkgrey);
    border-radius: 10px;
    height: 370px;
    width: 940px;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 20px;
    padding: 10px 10px 20px;
  }
  .ohraniceni1, .text{
    font-size: 1.2em;
    text-align: center;
    padding-bottom: 10px;
  }
  
  .ohraniceni2{
    background-color: var(--darkgrey);
    border-radius: 10px;
    height: 50px;
    width: 940px;
    margin: 0 auto;
    font-size: 1.3em;
    margin-top: 10px;
    text-align: center;
    line-height: 50px;
  }

  .polozky{
      max-width: 940px;
      width: calc(100% - 80px);
      margin: 20px auto 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
  }

  @media only screen and (max-width: 1200px){
        .ohraniceni1, .ohraniceni2{
            width: 880px;
            margin: 20px auto;
        }
        main{
            padding-bottom: 20px;
        }

  }
  @media only screen and (max-width: 940px){
      .ohraniceni1, .ohraniceni2{
          width: 400px;
          margin: 20px auto;
      }

  }
  @media only screen and (max-width: 940px){
      .ohraniceni1, .ohraniceni2{
          width: 330px;
          margin: 10px auto;
      }

  }


</style>
