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
        <div class="zpet"><button>Zpět</button></div>

        <div class="id">Id objednávky: {$orderInfo._id}</div>
        <div class="date">Datum: {time.getDate()}.{time.getMonth() + 1}.{time.getFullYear()}, {addZero(time.getHours())}:{addZero(time.getMinutes())}</div>
        <div class="info">Informace o uživateli: </div>
        <div class="jmeno">{$orderInfo.details.fname} {$orderInfo.details.sname}</div>
        <div class="email">{$orderInfo.details.email}</div>
        <div class="pay">{$orderInfo.details.payment}</div>
    </div>

    <div class="ohraniceni2">
        <div class="">

        </div>
    </div>

    <div class="ohraniceni3">
        {#each $orderInfo.content as item}
        <div>Název: {item.name} počet: {item.count} cena: {item.cost}</div>
        {/each}
    </div>
    <div>Celková cena: {$orderInfo.cost}</div>

    <div class="text"></div>

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
        
    }
    .ohraniceni2{
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
