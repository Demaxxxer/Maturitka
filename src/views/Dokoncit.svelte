<script>
    import {nf,addZero} from '../scripty/uzitecne.js'
    import { orderInfo } from '../stores/stavy.js';
    import { onMount } from 'svelte';

    const time = new Date($orderInfo.createdAt);


    onMount(_ => {
      console.log($orderInfo);
    })


</script>

<main>
    <div class="ohraniceni1">
        <div class="zpet"><a href='/#/home'><button>Zpět</button></a></div>
        <div class="thx">Děkujeme za vaši objednávku v obchodě BAGOSHOP.</div>
        <div class="nadpis">Detaily objednávky</div>
        <div class="id">Id objednávky: {$orderInfo._id}</div>
        <div class="date">Datum: {time.getDate()}.{time.getMonth() + 1}.{time.getFullYear()}, {addZero(time.getHours())}:{addZero(time.getMinutes())}</div>
        <div class="info">Informace o uživateli: </div>
        <div class="jmeno">{$orderInfo.details.fname} {$orderInfo.details.sname}</div>
        <div class="email">{$orderInfo.details.email}</div>
        <div class="pay">{$orderInfo.details.payment}</div>
    </div>

    <div class="ohraniceni2">
        <div class="nazev">Název:</div> 
        <div class="pocet">počet:</div>
        <div class="cena">cena:</div>
    </div>

    <div class="ohraniceni3">
        {#each $orderInfo.content as item}
        <div class="n">{item.name}</div>
        <div class="k">{item.count}</div>
        <div class="c">{item.cost}</div>
        {/each}
    </div>

    <div class="suma">Celková cena: {$orderInfo.cost}</div>

    <div class="tajne">Zákazník zatím nemá právo na reklamaci, jde tady celkem o gembl no...</div>



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
    .ohraniceni1{
        box-sizing: border-box;
        background-color: var(--darkgrey);
        border-radius: 10px;
        height: 400px;
        width: 940px;
        margin: 0 auto;
        margin-top: 10px;
        margin-bottom: 20px;
        padding: 10px 10px 20px;
    }
    .zpet{
        position: absolute;

    }
    .ohraniceni2{
        box-sizing: border-box;
        background-color: var(--darkgrey);
        border-radius: 10px;
        height: 50px;
        width: 940px;
        margin: 0 auto;
        margin-top: 10px;
        margin-bottom: 20px;
        padding: 10px 10px 20px;
    }
    .nadpis {
        font-size: 1.7em;
        padding-top: 4px;
        text-align: center;
        padding-top: 100px;
        margin-bottom: 150px;
    }

</style>
