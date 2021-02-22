<script>
    import PolozkaV from '../components/PolozkaV.svelte';


    function open(){
        filtry.update(_ => true);
    }
    
</script>
<main>
    <div class="wrapper">
        <div class="nadpis">Kategorie:</div>
        <button class="seradit" on:click >Filtry</button>
    </div>
    <div>
        <label for="seradit">Seřadit:</label>
        <select class="serazeni" name="seradit" >
            <option value="drahe">Od nejdražšího</option>
            <option value="levne">Od nejlevnějšího</option>
            <option value="nej">Od nejprodávanějšího</option>
        </select><br>
        
    </div>

    <div class="sloupce">
        <div class="polozka"><PolozkaV></PolozkaV></div>
    </div>
    
</main>
<style>
    main{
        padding: 5px 0;    
    }
    .wrapper{
        position: relative;
        width: 940px;
        height: 50px;
        background-color: var(--darkgrey);
        border-radius: 10px;
        left: 50%;
        transform: translateX(-50%);
    }
    .nadpis, .seradit{
        position: absolute;
        font-size: 1.2em;
        top: 15px;

        
    }
    .seradit{
        right: 50px;
    }
    .nadpis{
        left: 30px;
    }



</style>