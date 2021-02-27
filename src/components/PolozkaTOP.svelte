<script>
    import Koupit from './Koupit.svelte'
    import {nf} from '../scripty/uzitecne.js'
    import {polozkyTOP} from '../stores/stavy.js'
    
</script>

<div class="polozky">
    {#each $polozkyTOP as polozka}
    <div class="polozka">
        <div class="nazev">{polozka.nazev}</div>
        <img  alt="error">
        <div class="cena">Cena: {nf(polozka.cena * polozka.kusy)} Kč</div>
        <div class="koupit"><Koupit></Koupit></div>
    </div>
    {/each}
</div>

<style>
    .polozky{
        height: 500px;
    }

    .polozka{
        position: relative;
        border-radius: 10px;
        width: 270px;
        height: 300px;
        padding-top: 20px;
    }

    .nazev{
        position: absolute;
        width: 100%;
        top: 20px;
        text-align: center;
        font-size: 0.9em;

    }
    img{
        position: absolute;
        height: 150px;
        width: 120px;
        top: 85px;
        left: 50%;
        transform: translateX(-50%);
        background: white;
    }
    .cena{
        position: absolute;
        bottom: 30px;
        left: 20px;
        font-size: 0.8em;
        font-family: roboto;
    }
    .koupit{
        font-size: 0.8em;
        position: absolute;
        bottom: 22px;
        right: 10px;
    }
</style>