<script>
    import axios from 'axios';
    import { onMount } from 'svelte';
    import { flip } from 'svelte/animate'
    import RangeSlider from "svelte-range-slider-pips";
    import { alertContent, cats } from '../stores/stavy.js';
    import ItemManage from '../components/ItemManage.svelte';

    let loaded = false;
    let items = [];
    let costLimit = [
      50,
      2000,
    ]
    let search = {
      name: '',
      cat: '',
      costMin: '',
      costMax: '',
      //storage:
    }

    function fetchItems(query = {}){
      axios({
        method: 'get',
        url: '/api/items/get',
        params: query
      }).then(res => {
        items = res.data;
        loaded = true;
      }).catch(err => {
        //Špatně všechno
      })
    }

    function handleCostLimit(e){
      search.costMin = costLimit[0];
      search.costMax = costLimit[1];
      fetchItems(search);
    }

    onMount(_ => {
      fetchItems();
    });

    function handleSearch(e){
      e.preventDefault();
      fetchItems(search);
    }

    function handleDelete(e){

      axios({
        method: 'delete',
        url: '/api/item/delete',
        data: {
          id: e.detail.id
        }
      }).then(res => {
        fetchItems();
        alertContent.update(_ => res);
      }).catch(err => {
        alertContent.update(_ => err);
      })

    }


</script>
<main>
    <form on:submit={e => handleSearch(e)}>
        <div class="ohraniceni">
            <div class="padding">
                <div class="nadpis">Seznam produktů</div>

                <label class="nazev" for="item-seznam-name">Název</label>
                <input type="text" class="hodnota1" id="item-seznam-name" bind:value={search.name}><br>

                <label for="item-seznam-cats">Kategorie</label>
                <select class="kategorie" name="item-seznam-cats" bind:value={search.cat}>
                    <option value="0">Všechny</option>
                    {#each Object.keys($cats) as c}
                      <option value={c}>{$cats[c]}</option>
                    {/each}
                </select><br>

                <div class="cena">Cena</div>
                <div class="sliderO">
                    <RangeSlider id="slider" range pushy bind:values={costLimit} float max={2000} min={0} on:stop={handleCostLimit} pips step={50} suffix="Kč" />
                </div>

                <div>
                    <button type="submit" class="hledat">Hledat</button>
                </div>

            </div>
        </div>
    </form>
    <div class="sloupce">

      <div class="polozky">
        {#each items as item,i (item._id)}
          <div animate:flip={{duration: 500}}>
            <ItemManage details={item} on:itemDelete={handleDelete}/>
          </div>
        {/each}
      </div>


    </div>

</main>
<style>
    main{
        padding-bottom: 10px;
    }
    .polozky{
        max-width: 940px;
        width: 100%;
        margin: 20px auto 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .ohraniceni{
        position: relative;
        width: 940px;
        height: 100%;
        margin: 0 auto;
        background-color: var(--darkgrey);
        border-radius: 10px;
        line-height: 30px;
        margin-top: 5px;
    }
    .padding{
        padding: 10px 20px;
    }
    .nadpis{
        font-size: 1.4em;
        margin-bottom: 10px;
    }

    .cena{
        line-height: 30px;
        height: 30px;
        width: 100px;
        margin-top: 10px;
    }
    .sliderO{
        padding: 5px 20px;
        height: 30px;
        width: 60%;
        margin-left: 65px;
    }
    .hodnota1, .cena{
        position: absolute;
    }

    .hodnota1{
        border-bottom: solid 1px var(--text);
        margin-top: 3px;
        color: var(--text);
    }
    .hodnota1{
        left: 120px;
        width: 200px;
    }

    .kategorie{
        width: 200px;
        background-color: var(--darkgrey);
        position: absolute;
        appearance: none;
        height: 20px;
        left: 120px;
        margin-top: 5px;
        color: var(--text);
    }

    select {
        text-align: center;
        text-align-last: center;
        outline: 0;
    }
    option {
        background-color: var(--darkgrey);
        text-align: center;
        text-align-last: center;
    }
    input:focus{
        outline: 0 none;
    }
    .hledat{
        margin: 10px auto;
        height: 40px;
        width: 150px;
        border: solid 1px var(--grey);
        background-color: var(--yellow);
        border-radius: 10px;
        font-size: 1.3em;

    }
    @media only screen and (max-width: 1200px){
        .ohraniceni{
            width: 760px;
            margin: 20px auto;
        }
        main{
            padding-bottom: 20px;
        }

    }
    @media only screen and (max-width: 800px){
        .ohraniceni{
            width: 400px;
            margin: 20px auto;
        }

    }
    @media only screen and (max-width: 440px){
        .ohraniceni{
            width: 330px;
            margin: 10px auto;
        }

    }


</style>
