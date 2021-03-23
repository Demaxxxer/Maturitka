<script>
    import {nf} from '../scripty/uzitecne.js'
    export let udaje;

    function countAll(obj){
      let count = 0;
      obj.content.forEach(i => {
        count += i.count;
      });
      return count;
    }

    function getFormatedDate(obj){
      const time = new Date(obj.createdAt)
      return `${time.getDate()}.${time.getMonth() + 1}.${time.getFullYear()}`;
    }

    let open = false;

    function openInfo(){
      open = !open;
    }

    $: date = getFormatedDate(udaje)
    $: trueCount = countAll(udaje)
    //udaje

</script>


<div class="main">
    <div class="objednavka" on:click={_ => openInfo()}>
        <div class="datum">{date}</div>
        <div class="pocet">{trueCount} Kusů</div>
        <div class="cena">{udaje.cost} Kč</div>
    </div>

    <div class="vice" active={open}>

        <div class="ohraniceni1">
        <div class="nadpis2">Informace o uživateli</div>
        <div class="left2">
            <div>Jméno a příjmení:</div>
            <div>E-mail:</div>
            <div>Typ platby:</div>
        </div>
        <div class="right2">
            <div>{udaje.details.fname} {udaje.details.sname}</div>
            <div>{udaje.details.email}</div>
            <div>{udaje.details.payment}</div>
        </div>
        </div>

        <div class="ohraniceni2">
            <div class="nazev">Název</div>
            <div class="pocet">Počet</div>
            <div class="cena">Cena</div>
        </div>

        {#each udaje.content as item}
        <div class="ohraniceni3">
            <div class="nazev">{item.name}</div>
            <div class="pocet">{item.count} Ks</div>
            <div class="cena">{nf(item.cost)} Kč</div>
        </div>
        {/each}



    </div>
</div>
<style>
    .main{
        padding-bottom: 20px;
    }
    .vice {
      display: none;
    }

    .vice[active="true"] {
      display: block;
    }

    .objednavka{
        color: var(--text);
        position: relative;
        max-width: 940px;
        height: 50px;
        background-color: var(--darkgrey);
        border-radius: 10px;
        margin: 0 auto;
        box-sizing: border-box;
        cursor: pointer;

    }
    .datum, .pocet, .cena{
        position: absolute;
        line-height: 50px;

    }
    .datum{
        left: 35px;
    }
    .pocet{
        left: 50%;
        transform: translateX(-50%);
    }
    .cena{
        right: 35px;
    }


    @media only screen and (max-width: 1200px){
        .objednavka{
            width: 700px;
            margin: 20px auto;
        }

    }
    @media only screen and (max-width: 800px){
        .objednavka{
            width: 400px;
        }

    }
    @media only screen and (max-width: 440px){
        .objednavka{
            width: 330px;
        }

    }






    .ohraniceni1, .ohraniceni2, .ohraniceni3 {
        position: relative;
        box-sizing: border-box;
        background-color: var(--darkgrey);
        border-radius: 10px;
        width: 800px;
        margin: 10px auto;
    }
    .ohraniceni1{
        height: 120px;
    }
    .ohraniceni2, .ohraniceni3{
        height: 50px;
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
    .nadpis2{
        position: absolute;

    }
    .nadpis2{
        height: 20px;
        width: 100%;
        font-size: 1.2em;
        top: 10px;
        text-align: center;
    }
    .left2, .right2{
        position: absolute;
        text-align: left;
        line-height: 25px;
    }
    .left2{
        left: 35%;
        top: 35px;
        width: 150px;
        height: 75px;
    }
    .right2{
        position: absolute;
        width: 200px;
        left: 53%;
        height: 60px;
        top: 35px;
    }
    @media only screen and (max-width: 1200px){
        .ohraniceni1, .ohraniceni2, .ohraniceni3 {
            width: 760px;
            margin: 20px auto;
        }
        .left2{
            left: 32%;
        }

    }
    @media only screen and (max-width: 800px){
        .ohraniceni1, .ohraniceni2, .ohraniceni3 {
            width: 400px;
            margin: 20px auto;
        }
        .ohraniceni2, .ohraniceni3{
            height: 40px;

        }
        .left2{
            left: 15%;
        }
        .pocet{
            left: 70%;
        }
        .cena{
            width: 70px;
            right: 10px;
        }
        .left2, .right2{
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
        .ohraniceni1, .ohraniceni2, .ohraniceni3 {
            width: 340px;
            margin: 20px auto;
        }
        .ohraniceni2, .ohraniceni3{
            height: 40px;

        }
        .left2{
            left: 15%;
        }
        .pocet{
            left: 70%;
        }
        .cena{
            width: 70px;
            right: 5px;
        }
        .left2, .right2{
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





</style>
