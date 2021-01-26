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
<main>
    <form>
        <table class="wrapper">
            <div class="nadpis">Editace produktů</div>
            <tr>
                <td><label class="nazev" for="nazev">Název</label></td>
                <td><input type="text" class="input" name="nazev"></td>
            </tr>
            <tr>
                <td><label class="katergorie" for="kategorie">Kategorie</label></td>
                <td><select class="kategorie" name="kategorie" >
                        <option value="activ">Akční hry</option>
                        <option value="logic">Logické hry</option>
                        <option value="sim">Simulátory</option>
                        <option value="strat">Strategické hry</option>
                        <option value="rpg">RPG hry</option>
                        <option value="race">Zívodní hry</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td><label class="cena" for="cena">Cena</label></td>
                <td><input type="text" class="inputCena" name="cena"></td>

            </tr>
            <tr>
                <td><input type="checkbox" class="radio" name="skladem">
                <label for="skladem" class="skladem">Není skladem</label></td>
            </tr>
        </table>
    </form>
    <div class="sloupce">
        <Polozka/>
    </div>
    
</main>
<style>
    main{
        padding: 5px 0 15px;    
    }
    .wrapper{
        width: 940px;
        height: 100%;
        padding: 20px 20px;
        margin: 0 auto;
        background-color: var(--darkgrey);
        border-radius: 10px;
        
    }
    .nadpis{
        font-size: 1.4em;
        margin-bottom: 10px;
    }
    .input, .inputCena{
        border-bottom: solid 1px var(--text);
    }
    .inputCena{
        width: 60px;

    }
    .kategorie{
        appearance: none;
        background: none;
        border: none;
        color: var(--white);
        border-bottom: solid 1px var(--white);
        
    }


</style>