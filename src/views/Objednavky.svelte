<script>
    import Objednavka from '../components/Objednavka.svelte'
    import {objednavka} from '../stores/stavy.js';
</script>
<main>
    <div class="ohraniceni1">
        <div class="nadpis">Objednávky</div>
        <div class="nazev1">ID</div>
        <div class="nazev2">Datum</div>
        <div class="nazev3">Počet položek</div>
        <div class="nazev4">Cena</div>

    </div>
    <div>
        {#each $objednavka as info}
            <Objednavka udaje={info}></Objednavka>
        {/each}
    </div>
</main>
<style>

    main{
        height: 100%;
        width: 100%;
        min-height: calc(100vh - 425px);
        position: relative;
        color: var(--text);
        padding-bottom: 150px;
    }
    .ohraniceni1 {
        position: relative;
        max-width: 700px;
        height: 90px;
        background-color: var(--darkgrey);
        border-radius: 10px;
        margin: 10px auto 20px auto;
        padding: 5px 35px 5px 35px;
    }
    .nadpis{
        font-size: 1.3em;
        padding: 10px 0;
    }
    .nazev1, .nazev2, .nazev3, .nazev4{
        position: absolute;
        top: 60px;
    }

    .nazev1{
        left: 35px;
    }
    .nazev2{
        left: 35%;
        transform: translateX(-50%);
    }
    .nazev3{
        left: 65%;
        transform: translateX(-50%);
    }
    .nazev4{
        right: 50px;
    }
    

    @media only screen and (max-width: 1200px){
        .ohraniceni1{
            width: 700px;
            margin: 20px auto;
        }
        main{
            padding-bottom: 110px;
        }
        
    }
    @media only screen and (max-width: 800px){
        .ohraniceni1{
            width: 400px;
            margin: 20px auto;
        }
        
    }

</style>