<script>
    import {nf,soucet} from '../scripty/uzitecne.js'
    import {kosik,platba} from '../stores/stavy.js';

    $: sum = soucet($kosik);

</script>

<main>
    <div class="text">Objednávka je dokončena, kliknutím na tlačítko se vrátíze zpět.</div>
    <div class="flow">
        <a class="button" href="/#/"><button class="zpet">Zpět na úvodní stránku</button></a>
    </div>

</main>
<style>
    
    main {
        height: 100%;
        width: 100%;
        min-height: calc(100vh - 325px);
        position: relative;
        color: var(--text);
        padding-bottom: 15px;
    }

    .text {
        font-size: 1.7em;
        padding-top: 4px;
        text-align: center;
        padding-top: 100px;
        margin-bottom: 150px;
    }

    .zpet {
        margin: 0 auto;
        height: 40px;
        width: 250px;
        border: solid 1px var(--grey);
        background-color: var(--yellow);
        border-radius: 10px;
        font-size: 1.3em;
    }

</style>