<script>
    import {nf} from '../scripty/uzitecne.js'
    import {polozky} from '../stores/stavy.js'

    function odstranit(id){
        let novePolozky = [...$polozky];
        novePolozky=novePolozky.filter(polozka => {return polozka.id != id});
        kosik.update(_ => novePolozky);
    }
    
</script>
<main>
    <div class="polozky">
        {#each $polozky as polozka}
        <div class="polozka">
            <img  alt="error">
            <div class="nazev">{ polozka.nazev}</div>
            <button class="odstranit" on:click={_ => odstranit(polozka.id)}>╳</button>
            <a href="/#/edit"><button class="edit"></button></a>
            <form class="kusy">
                <label for="number">Kusy: {polozka.kusy}</label>

            </form>
            <div class="cena">Cena: {nf(polozka.cena * polozka.kusy)} Kč</div>
        </div>
        {/each}
    </div>
</main>
<style>

    .polozky{
        max-width: 940px;
        width: 100%;
        margin: 20px auto 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .polozka{
        position: relative;
        background: var(--darkgrey);
        border-radius: 10px;
        height: 200px;
        width: 450px;
        margin: 10px;
    }

    img{
        position: absolute;
        height: 150px;
        width: 120px;
        top: 25px;
        left: 25px;
        background: white;
    }

    .nazev{
        position: absolute;
        max-width: 200px;
        top: 25px;
        left: 170px;
        font-size: 1.2em;
    }

    .odstranit{
        position: absolute;     
        top: 20px;
        color: white;
        right: 15px;
        font-size: 1.1em;
    }
    .edit{
        position: absolute; 
        height: 18px;
        width: 18px;
        background-image: url('/images/settings.svg');
        background-repeat: none;
        background-size: 100%;
        right: 14px;
        top: 50px;

    }
    .kusy{
        position: absolute;
        left: 40%;
        bottom: 45px;

    }

    .cena{
        position: absolute;
        left: 40%;
        bottom: 25px;
        font-family: roboto;
    }
</style>