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
      <div class="text">Top produkty týdne</div>
    </div>
    <div class="ohraniceni2">
      <div class="stred">
        <PolozkaTOP></PolozkaTOP>
      </div>
    </div>
  <div>
  {#if loaded}
    <div class="ohraniceni3">Nejprodávanější {choosedCat}</div>
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
    background-color: var(--darkgrey);
    border-radius: 10px;
    height: 50px;
    width: 940px;
    margin: 10px auto 0;
  }
  .text{
    line-height: 50px;
    text-align: center;
    font-size: 1.3em;
  }
  .ohraniceni2{
    position: relative;
    box-sizing: border-box;
    text-align: center;
    height: 320px;
    width: 940px;
    margin: 0 auto 300px;
    margin-bottom: 20px;
    padding: 10px 10px 20px;
  }
  
  .ohraniceni3{
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
  .stred{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
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
        .ohraniceni1, .ohraniceni2, .ohraniceni3{
            width: 740px;
            margin: 20px auto;
        }
        main{
            padding-bottom: 20px;
        }

  }
  @media only screen and (max-width: 800px){
      .ohraniceni1, .ohraniceni2, .ohraniceni3{
          width: 400px;
          margin: 20px auto;
      }
      

  }
  @media only screen and (max-width: 440px){
      .ohraniceni1, .ohraniceni2, .ohraniceni3{
          width: 330px;
          margin: 10px auto;
      }

  }


</style>
