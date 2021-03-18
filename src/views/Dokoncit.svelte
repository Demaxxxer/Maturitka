<script>
    import {push, pop, replace} from 'svelte-spa-router';
    import { nf,addZero} from '../scripty/uzitecne.js'
    import { orderInfo } from '../stores/stavy.js';
    import { onMount } from 'svelte';

    const time = new Date($orderInfo.createdAt);

    const info = $orderInfo;
    orderInfo.update(_ => false);

    onMount(_ => {
      if(!info){
        replace('/');
      }
    })


</script>

<main>
    {#if info}
      <div class="ohraniceni1">
          <div class="zpet"><a href='/#/'><button>Zpět</button></a></div>
          <div class="thx">Děkujeme za vaši objednávku v internetovém obchodě BAGOSHOP.</div>
          <div class="nadpis1">Detaily objednávky</div>
          <div class="left1">
              <div>Id objednávky:</div>
              <div>Datum objednávky:</div>
          </div>
          <div class="right1">
              <div>{info._id}</div>
              <div>{time.getDate()}.{time.getMonth() + 1}.{time.getFullYear()}, {addZero(time.getHours())}:{addZero(time.getMinutes())}</div>
          </div>
          <div class="nadpis2">Informace o uživateli</div>
          <div class="left2">
              <div>Jméno a příjmení:</div>
              <div>E-mail:</div>
              <div>Typ platby:</div>
          </div>
          <div class="right2">
              <div>{info.details.fname} {info.details.sname}</div>
              <div>{info.details.email}</div>
              <div>{info.details.payment}</div>
          </div>
      </div>

      <div class="ohraniceni2">
          <div class="nazev">Název</div>
          <div class="pocet">Počet</div>
          <div class="cena">Cena</div>
      </div>
      {#each info.content as item}
        <div class="ohraniceni3">
          <div class="nazev">{item.name}</div>
          <div class="pocet">{item.count} Ks</div>
          <div class="cena">{nf(item.cost)} Kč</div>
        </div>
      {/each}
      <div class="ohraniceni4">
          <div class="suma">Celková cena:</div>
          <div class="sumaHodnota">{nf(info.cost)} Kč</div>
          <div class="tajne">Zákazník zatím nemá právo na reklamaci, jde tady celkem o gembl no...</div>
      </div>
    {/if}
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
    .ohraniceni1, .ohraniceni2, .ohraniceni3, .ohraniceni4{
        position: relative;
        box-sizing: border-box;
        background-color: var(--darkgrey);
        border-radius: 10px;
        width: 940px;
        margin: 10px auto;
    }
    .ohraniceni1{
        height: 330px;
    }
    .ohraniceni2, .ohraniceni3{
        height: 50px;
    }
    .ohraniceni4{
        height: 80px;
    }
    .nazev, .pocet, .cena{
        position: absolute;
        line-height: 50px;
    }
    .nazev{
        left: 30px;
    }
    .pocet{
        left: 50%;
        transform: translateX(-50%);
    }
    .cena{
        width: 90px;
        height: 50px;
        right: 30px;
    }
    .zpet{
        box-sizing: border-box;
        width: 100%;
        height: 30px;
        padding: 10px 0 0 20px;
        float: left;
    }
    .zpet a{
        height: 20px;
        width: 15px;
    }
    .zpet a button{
        padding-left: 15px;

        color: var(--text);
        font-size: 1em;

        background-image: url('/images/zpet.svg');
        background-repeat: no-repeat;
        background-position: center left;
        background-size: 13px;
    }
    .thx, .nadpis1, .nadpis2{
        position: absolute;

    }
    .thx{
        height: 20px;
        width: 100%;
        font-size: 1.4em;
        text-align: center;
        top: 50px;
    }
    .nadpis1 {
        height: 20px;
        width: 100%;
        font-size: 1.1em;
        padding-top: 4px;
        text-align: center;
        top: 100px;
        margin-bottom: 150px;
    }
    .nadpis2{
        height: 20px;
        width: 100%;
        font-size: 1.2em;
        top: 200px;
        text-align: center;
    }
    .left1, .left2, .right1, .right2{
        position: absolute;
        text-align: left;

        line-height: 25px;
    }
    .left1, .left2{
        left: 35%;
    }
    .left1{
        top: 130px;
        width: 150px;
        height: 50px;
    }
    .left2{
        top: 230px;
        width: 150px;
        height: 75px;
    }
    .right1, .right2{
        position: absolute;
        width: 200px;
        left: 53%;
    }
    .right1{
        height: 40px;
        top: 130px;
    }
    .right2{
        height: 60px;
        top: 230px;
    }
    .suma, .sumaHodnota{
        position: absolute;
        top: 10px;
        width: 48%;
        height: 50px;
        font-size: 1.4em;
    }
    .suma{
        left: 0px;
        text-align: right;
    }
    .sumaHodnota{
        right: 0px;
        text-align: left;
    }
    .tajne{
        position: absolute;
        top: 50px;
        font-size: 0.7em;
        opacity: 0.5;
        width: 100%;
        text-align: center;
    }
    @media only screen and (max-width: 1200px){
        .ohraniceni1, .ohraniceni2, .ohraniceni3, .ohraniceni4{
            width: 760px;
            margin: 20px auto;
        }
        main{
            padding-bottom: 20px;
        }
        .left1, .left2{
            left: 32%;
        }

    }
    @media only screen and (max-width: 800px){
        .ohraniceni1, .ohraniceni2, .ohraniceni3, .ohraniceni4{
            width: 400px;
            margin: 20px auto;
        }
        .ohraniceni2, .ohraniceni3{
            height: 40px;

        }
        .thx{
            top: 40px;
            font-size: 1.3em;
        }
        .left1, .left2{
            left: 15%;
        }
        .pocet{
            left: 70%;
        }
        .cena{
            width: 70px;
            right: 10px;
        }
        .left1, .left2, .right1, .right2{
            font-size: 0.8em;
        }
        .nazev, .pocet, .cena{
            line-height: 40px;
            font-size: 0.9em;
        }
        .nazev{
            left: 15px;
        }
    }
    @media only screen and (max-width: 440px){
        main{
            padding-bottom: 0;
        }
        .ohraniceni1, .ohraniceni2, .ohraniceni3, .ohraniceni4{
            width: 340px;
            margin: 20px auto;
        }
        .ohraniceni2, .ohraniceni3{
            height: 40px;

        }
        .thx{
            top: 40px;
            font-size: 1.2em;
        }
        .left1, .left2{
            left: 15%;
        }
        .pocet{
            left: 70%;
        }
        .cena{
            width: 70px;
            right: 5px;
        }
        .left1, .left2, .right1, .right2{
            font-size: 0.8em;
        }
        .nazev, .pocet, .cena{
            line-height: 40px;
            font-size: 0.9em;
        }
        .nazev{
            left: 15px;
        }
        .tajne{
            font-size: 0.6em;
        }

    }
</style>
