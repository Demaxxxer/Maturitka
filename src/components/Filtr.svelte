<script>
    import Polozka from '../components/Polozka.svelte';
    import {nf} from '../scripty/uzitecne.js'
    import {kosik} from '../stores/stavy.js';

    function odstranit(id){
        let novePolozky = [...$kosik];
        novePolozky=novePolozky.filter(polozka => {return polozka.id != id});
        kosik.update(_ => novePolozky);
    }
    
</script>

<form>
    <div class="wrapper">
        <div class="nadpis">Editace produktů</div>
    
        <label class="nazev" for="nazev">Název</label>
        <input type="text" class="hodnota1" name="nazev"><br>

        <label class="nazev" for="id">ID</label>
        <input type="number" class="hodnota1" name="id"><br>
    
    
        <label class="" for="kategorie">Kategorie</label>
        <select class="kategorie" name="kategorie" >
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
        <input type="number" class="hodnota3" name="cena" min="1" max="9999">
        <br>
        
        

        <input type="checkbox" class="radio" name="skladem">
        <label for="skladem" class="radioText">Není skladem</label><br>

    </div>
</form>
<style>

    .wrapper{
        position: relative;
        width: 940px;
        height: 100%;
        padding: 20px 20px;
        margin: 0 auto;
        background-color: var(--darkgrey);
        border-radius: 10px;
        line-height: 30px;
        
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
    

</style>