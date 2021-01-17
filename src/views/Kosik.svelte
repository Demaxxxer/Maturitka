<script>
    import {nf,soucet} from '../scripty/uzitecne.js'
    import {kosik} from '../stores/stavy.js';


    function odstranit(id){
        let novePolozky = [...$kosik];
        novePolozky=novePolozky.filter(polozka => {return polozka.id != id});
        kosik.update(_ => novePolozky);
    
    }
    
    $: sum = soucet($kosik);
    
</script>
<main>
    <div class="bar">

        <div class="postup1" id="kosikbarva">Košík</div>
        <div class="postup2" id="platbabarva">Platba</div>
        <div class="postup3" id="souhrnbarva">Souhrn</div>

    </div>
    {#if $kosik.length<1}
    <div class="empty" >
        <p>Žádné položky v košíku</p>
    </div>
    {/if}
    <div class="polozky">
        {#each $kosik as polozka}

        <div class="polozka"><!--relative-->
            <img  alt="error"><!--src="{polozka.imgUrl}"-->
            <div class="nazev">{ polozka.nazev}</div>
            <button class="odstranit" on:click={_ => odstranit(polozka.id)}>╳</button>
            <form class="kusy">
                <label>Kusy</label>
                <input type="number" min="1" max="999" bind:value={polozka.kusy}>

            </form>
            <div class="cena">{nf(polozka.cena * polozka.kusy)} Kč</div>
        </div>

        {/each}
    </div>
    {#if $kosik.length> 0}
    <div class="spodek">
        <div class="vpravo">
            <div class="flow">
                <span class="cenaObsahu">Cena obsahu košíku:</span>
                <span class="cenaKosiku"> {nf(sum)} Kč</span><br>
            </div>

        </div>
        <div class="flow2">
            <a href="/#/platba"><button class="pokracovat">Pokračovat v objednávce</button></a>
        </div>
    </div>
    {/if}
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

    .bar{
        background-color: var(--darkgrey);
        height: 75px;
        max-width: 78.5%;
        margin: 0 auto;
        /*background-image: url('/images/tvar1.svg'), url('/images/sipecka.svg');
        background-position: left center, left 66% center;
        background-repeat: no-repeat, no-repeat;*/
    }

    .postup1, .postup2, .postup3{
        float: left;

        text-align: center;
        height: 100%;
        line-height: 75px;
        font-size: 1.5em;
    }

    .postup1{        
        width: 35%;
        background-image: url('/images/tvar1.svg');
        background-repeat: no-repeat;
        background-position: right center;

    }

    .postup2{
        width: 30%;
    }

    .postup3{
        width: 35%;
        background-image: url('/images/sipecka.svg');
        background-repeat: no-repeat;
        background-position: left center;

    }

    #kosikbarva{
        color: var(--darkgrey);
    }

    #platbabarva{
        color: var(--text);
    }

    #souhrnbarva{

        color: var(--text);
    }

    .empty{
        text-align: center;
        font-size: 1.3em;
        margin-top: 200px;
        width: 100%;
        height: 100%;
    }

    .polozky{
        max-width: 960px;
        width: 100%;
        margin: 30px auto 0 auto;
    }
    .polozka{
        position: relative;
        background: var(--darkgrey);
        border-radius: 10px;
        height: 200px;
        margin: 10px;
    }

    img{
        position: absolute;
        height: 150px;
        width: 150px;
        top: 25px;
        left: 25px;
        background: white;
    }

    .nazev{
        position: absolute;
        max-width: 300px;
        top: 25px;
        left: 200px;
        font-size: 1.4em;
    }

    .odstranit{
        position: absolute;     
        top: 15px;
        color: white;
        right: 15px;
        font-size: 1.1em;
    }
    .kusy{
        position: absolute;
        left: 60%;
        bottom: 20px;
        margin: 0 auto;
    }

    input{
        height: 20px;
        width: 40px;
        border: solid 1px black;
        border-radius: 5px;
        background-color: white;
        text-align: center;
    }

    .cena{
        position: absolute;
        bottom: 25px;
        right: 15px;
    }

    .vpravo{

        box-sizing: border-box;
        margin: 0 126px;
        overflow: auto;
    }
    .flow{
        float: right;
    }

    .flow2{
        overflow: auto;
        box-sizing: border-box;
    }

    .cenaObsahu{
        text-align: right;
        font-size: 1.2;


    }

    .cenaKosiku{
        text-align: right;
        font-size: 1.5em;
        margin-left: 20px;

    }

    .pokracovat{
    
        height: 40px;
        width: 250px;
        border: solid 1px var(--grey);
        background-color: var(--yellow);
        border-radius: 10px;
        font-size: 1.3em;
        margin: 20px 126px 30px 0;
        float: right;
    }

    .spodek{
        position: absolute;
        width: 100%;
        height: 120px;
        left: 0;
        right: 0;
        bottom: 0;
    }



</style>