<script>
    import Koupit from './Koupit.svelte'
    import {nf, getImgUrl} from '../scripty/uzitecne.js'

    export let details;

</script>


<div class="polozka">
    <div class="nazev">{details.name}</div>
    <img alt="error" src={getImgUrl(details.thumbnail)}>
    <div class="cena">Cena: {nf(details.cost)} Kč</div>
    <a href={'/#/polozka/' + details._id}>
      <button class="link"></button>
    </a>
    <div class="koupit"><Koupit itemId={details._id}></Koupit></div>
</div>



<style>
    .polozka{
        position: relative;
        background-color: var(--darkgrey);
        border-radius: 10px;
        width: 270px;
        height: 300px;
        margin-bottom: 20px;
    }

    .link {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
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
        z-index: 1;
    }
</style>
