<script>
    import PolozkaV from '../components/PolozkaV.svelte';


    function open(){
        filtry.update(_ => true);
    }
    
</script>
<main>
    <div class="ohraniceni1">
        <div class="nadpis">Kategorie:</div>
        <button class="seradit" on:click >Filtry</button>
    </div>
    <div class="ohraniceni2">
        <label for="seradit">Seřadit:</label>
        <select class="seradit" name="seradit" >
            <option value="drahe">Od nejdražšího</option>
            <option value="levne">Od nejlevnějšího</option>
            <option value="nej">Od nejprodávanějšího</option>
        </select>
    </div><br>

    <div class="sloupce">
        <div class="polozka"><PolozkaV></PolozkaV></div>
    </div>
    
</main>
<style>
    main{
        padding: 5px 0;    
    }
    .ohraniceni1, .ohraniceni2{
        position: relative;
    }
    .ohraniceni1{
        width: 940px;
        height: 50px;
        background-color: var(--darkgrey);
        border-radius: 10px;
        margin: 0 auto;
        margin-bottom: 20px;
    }
    .ohraniceni2{
        margin: 0 auto;
        width: 940px;
        height: 100%;
        background-color: var(--darkgrey);
        border-radius: 10px;
        padding: 10px;
        box-sizing: border-box;
    }
    .nadpis{
        position: absolute;
        font-size: 1.2em;
        top: 15px;
    }
    .seradit{
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
    .nadpis{
        left: 30px;
    }




</style>