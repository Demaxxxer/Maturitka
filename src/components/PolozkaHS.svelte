<script>
    import Koupit from '../components/Koupit.svelte'
    import {nf} from '../scripty/uzitecne.js'
    import {polozky} from '../stores/stavy.js'
    
</script>
<main>
    <div class="polozky">
        {#each $polozky as polozka}
        <div class="polozka">
            <div class="nazev">{polozka.nazev}</div>
            <img  alt="error">
            <div class="cena">Cena: {nf(polozka.cena * polozka.kusy)} Kč</div>
            <div class="koupit"><Koupit></Koupit></div>
        </div>
        {/each}
    </div>
</main>
<style>

    .polozky{
        max-width: 940px;
        width: calc(100% - 80px);
        margin: 20px auto 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .polozka{
        position: relative;
        background-color: var(--darkgrey);
        border-radius: 10px;
        width: 270px;
        height: 300px;
        margin-bottom: 20px;
    }

    .nazev{
        position: absolute;
        width: 100%;
        top: 25px;
        text-align: center;
        font-size: 1em;

    }
    img{
        position: absolute;
        height: 150px;
        width: 120px;
        top: 75px;
        left: 50%;
        transform: translateX(-50%);
        background: white;
    }

    .cena{
        position: absolute;
        bottom: 20px;
        left: 20px;
        font-size: 0.9em;
        font-family: roboto;
    }
    .koupit{
        position: absolute;
        bottom: 12px;
        right: 10px;
    }
</style>