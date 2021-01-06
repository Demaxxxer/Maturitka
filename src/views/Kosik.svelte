<script>
    function odstranit(id){
        let novePolozky = [...polozky];
        novePolozky=novePolozky.filter(polozka => {return polozka.id != id});
        polozky = novePolozky;
    
    }
    function soucet(items){
        let cena = 0;
        items.forEach(polozka => {
            cena += polozka.cena * polozka.kusy;

        });
        return cena;
    }
    $: sum = soucet(polozky);
    
    let polozky = [
        {
            id:"1",
            nazev:"polozka1 fadfgwfghg fdjhsghf dshfghgfhsg",
            cena:"111",
            kusy:"25",
            imgUrl:"/images/obrazek1.png",
            skladem:true,
        },
        {
            id:"2",
            nazev:"polozka2",
            cena:"5099",
            kusy:"2",
            imgUrl:"/images/obrazek2.png",
            skladem:true,
        },
        {
            id:"3",
            nazev:"polozka3",
            cena:"333",
            kusy:"3",
            imgUrl:"/images/obrazek3.png",
            skladem:false,
        },        
        {
            id:"4",
            nazev:"polozka4",
            cena:"20",
            kusy:"100",
            imgUrl:"/images/obrazek4.png",
            skladem:true,
        }

    ]

</script>
<main>
    <div class="pozadi">
        <div class="bar">

            <div class="postup" id="kosikbarva">Košík</div>
            <div class="postup" id="platbabarva">Platba</div>
            <div class="postup" id="souhrnbarva">Souhrn</div>

        </div>
    </div>
    <div class="polozky">
        {#each polozky as polozka}

        <div class="polozka"><!--relative-->
            <img  alt="error"><!--src="{polozka.imgUrl}"-->
            <div class="nazev">{polozka.nazev}</div>
            <button class="odstranit" on:click={_ => odstranit(polozka.id)}>╳</button>
            <div class="kusy">
                <label>Kusy</label>
                <input type="number" min="1" max="999" bind:value={polozka.kusy}>

            </div>
            <div class="cena">{polozka.cena * polozka.kusy} Kč</div>
        </div>

        {/each}
    </div>
    <div class="cenaKosiku" >Cena obsahu košíku: {sum}</div>

    <button class="pokracovat">Pokračovat v objednávce</button>

</main>
<style>
    main{
        color: var(--text);
    }
    .bar{
        background-color: var(--darkgrey);
        height: 75px;
        width: 940px;
        margin: 0 auto;
        margin-top: 15px;
        background-image: url('/images/tvar1.svg'), url('/images/sipecka.svg');
        background-position: left center, left 66% center;
        background-repeat: no-repeat, no-repeat;
    }
    .postup{
        float: left;
        width: 33.33%;
        text-align: center;
        margin-top: 25px;
        font-size: 1.5em;
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
        font-size: 1.5em;
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
        bottom: 25px;
        margin: 0 auto;
    }
    input{
        height: 25px;
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
    .cenaKosiku{
        position: relative;
        margin: 0 auto;
        right: 130px;
    }
    .pokracovat{
        height: 40px;
        width: 250px;
        border: solid 1px var(--grey);
        background-color: var(--yellow);
        border-radius: 10px;
        font-size: 1.3em;
        margin-left: 20px;
    }

    @media only screen and (max-width: 940px){
    
    .bar{
        width: 660px;
        background-size: 40%;
    }
    .postup{
        background-size: 40%;
    }

    .cenaKosiku{
        position: absolute;
    }

}

</style>