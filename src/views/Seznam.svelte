<script>
    import axios from 'axios';
    import { onMount } from 'svelte';
    import Polozka from '../components/Polozka.svelte';

    let loaded = false;

    onMount(_ => {
      axios({
        method: 'get',
        url: '/api/items/get',
      }).then(res => {
        console.log(res.data)
        loaded = true;
      }).catch(err => {
        //Špatně všechno
      })
    });

</script>
<main>
    <form>
        <div class="ohraniceni">
            <div class="padding">
                <div class="nadpis">Editace produktů</div>

                <label class="nazev" for="nazev">Název</label>
                <input type="text" class="hodnota1" name="nazev"><br>

                <label class="nazev" for="id">ID</label>
                <input type="number" class="hodnota1" name="id"><br>

                <label for="kategorie">Kategorie</label>
                <select class="kategorie" name="kategorie" >
                    <option value="0">Všechny</option>
                    <option value="activ">Akční hry</option>
                    <option value="logic">Logické hry</option>
                    <option value="sim">Simulátory</option>
                    <option value="strat">Strategické hry</option>
                    <option value="rpg">RPG hry</option>
                    <option value="race">Závodní hry</option>
                </select><br>

                <div class="cena">Cena</div>
                <div class="od"> od </div>
                <input type="number" class="hodnota2" name="cena" min="1" max="9999">
                <div class="do"> do </div>
                <input type="number" class="hodnota3" name="cena" min="1" max="9999"><br>

                <input type="checkbox" class="radio" name="skladem">
                <label for="skladem" class="radioText">Není skladem</label><br>

                <div>
                    <button type="submit" class="hledat">Hledat</button>
                </div>

            </div>
        </div>
    </form>
    <div class="sloupce">
        <Polozka/>
    </div>

</main>
<style>
    main{
        padding-bottom: 10px;
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
