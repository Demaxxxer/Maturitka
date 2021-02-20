<script>
    import PolozkaV from '../components/PolozkaV.svelte';
    
</script>
<main>
    <div class="wrapper">
        <div class="nadpis">Kategorie:</div>
        <div class="seradit">Filtry</div>
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