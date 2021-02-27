<script>
    import axios from 'axios';
    import { onMount } from 'svelte';

    import { alertContent, cats } from '../stores/stavy.js';
    import ItemManage from '../components/ItemManage.svelte';

    let loaded = false;
    let items = [];

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

    onMount(_ => {
      fetchItems();
    });

    function handleSearch(e){
      e.preventDefault();
      fetchItems(search)
    }

    function handleDelete(e){
      /*
        let novePolozky = [...$polozky];
        novePolozky=novePolozky.filter(polozka => {return polozka.id != id});
        kosik.update(_ => novePolozky);
      */

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
                <div class="nadpis">Editace produktů</div>

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
                <div class="od"> od </div>
                <input type="number" class="hodnota2" name="cena" min="1" max="9999" bind:value={search.costMin}>
                <div class="do"> do </div>
                <input type="number" class="hodnota3" name="cena" min="1" max="9999" bind:value={search.costMax}><br>

                <input type="checkbox" class="radio" name="skladem">
                <label for="skladem" class="radioText">Není skladem</label><br>

                <div>
                    <button type="submit" class="hledat">Hledat</button>
                </div>

            </div>
        </div>
    </form>
    <div class="sloupce">

      <div class="polozky">
        {#each items as item,i}
          <ItemManage details={item} on:itemDelete={handleDelete}/>
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

    }
    .padding{
        padding: 10px 20px;
    }
    .nadpis{
        font-size: 1.4em;
        margin-bottom: 10px;
    }
    .hodnota1, .hodnota2, .hodnota3, .od, .do, .cena{
        position: absolute;
    }
    .od{
        left: 120px;
    }
    .hodnota2{
        left: 150px;
    }
    .do{
        left: 220px;
    }
    .hodnota3{
        left: 250px;
    }
    .hodnota1, .hodnota2, .hodnota3{
        border-bottom: solid 1px var(--text);
        margin-top: 3px;
        color: var(--text);
    }
    .hodnota1{
        left: 120px;
        width: 200px;
    }
    .hodnota2, .hodnota3{
        width: 60px;
    }
    .kategorie{
        position: absolute;
        appearance: none;
        height: 20px;
        left: 120px;
        margin-top: 5px;
        color: black;
    }
    .hledat{
        margin: 0 auto;
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


</style>
