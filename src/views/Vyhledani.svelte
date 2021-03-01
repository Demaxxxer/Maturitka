<script>
    import PolozkaV from '../components/PolozkaV.svelte';


    function open(){
        filtry.update(_ => true);
    }
    
</script>
<main>
    <div class="ohraniceni1">
        <div class="nadpis">Kategorie:</div>
        <div class="seradit">
            <button>Filtry</button>
        </div>
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
        top: 15px;
    }
    .seradit{
        font-size: 1.5em;
        height: 20px;
        width: 200px;
        background-color: red;
        position: absolute;
        right: 50px;
        margin-top: 5px;
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