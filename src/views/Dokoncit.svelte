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
    <div class="text">Objednávka byla dokončena, kliknutím na tlačítko se vrátíte zpět.</div>
    <div>Id objednávky: {$orderInfo._id}</div>
    <div>Datum: {time.getDate()}.{time.getMonth() + 1}.{time.getFullYear()}, {addZero(time.getHours())}:{addZero(time.getMinutes())}</div>
    <p>Informace o uživateli: </p>
    <div>{$orderInfo.details.fname} {$orderInfo.details.sname}</div>
    <div>{$orderInfo.details.email}</div>
    <div>{$orderInfo.details.payment}</div>


    {#each $orderInfo.content as item}
      Item: <div>Název: {item.name} počet: {item.count} cena: {item.cost}</div>
    {/each}

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
