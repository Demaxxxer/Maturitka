<script>
    import Koupit from '../components/Koupit.svelte'
    import {nf} from '../scripty/uzitecne.js'

    const produkt = {
        id:"2",
        nazev:"Grand Theft Auto V",
        cena:"9999",
        kusy:"2",
        imgUrl:"/images/gta5.jpeg",
        imgsUrl:"/images/obrazek1.jpeg",
        skladem:"20",
        popis:`Aj asdk fů fůsk sld flaskdj flkajs dflkj asldkfj dk fůlkas lksajd ůkjsaů lfsaůd fůsk sld flaskdj flkajs dflkj asldkfj dk fůlka sdjf ůlks a djfůlksa jd ůkjs aů lfsaůd fůsk sld flas kdj f lkajs df lkj asldkf j dk fůlkas djfů lksadj fůl sajd ůkj saů lfsa ůd fůsk sld flaskdj flkajs dflkj asldkfj skdjf klasjf ksad fkj sdaf Aj asdk fůlka sdjf ůlks adj fů lksajd ůkjsaů lfsaůd fůsk sld flaskdj flkajs dflkj asldkfj laskdjf klasjf ksad fkj sdaf.`
    }
</script>

<main>
    <div class="ohraniceni">

        <div class="zpet"><button></button></div>

        <div class="nazev">{produkt.nazev}</div>

        <div class="vrch">

            <div class="obrazek">
                <img src={produkt.imgUrl} alt="error">
            </div>
        </div>
        <div class="spodek">
            <div class="skladem">{produkt.skladem} kusů</div>

            <div class="cena">{nf(produkt.cena)} Kč</div>

            <div class="koupit"><Koupit></Koupit></div>
        </div>
    </div>
    <div class="ohraniceni2">
        <div class="nadpis">Popis produktu</div>

        <div class="text">{produkt.popis}</div>

        <div class="nadpis">Galerie obrázků</div>

        <div class="obrazky">
            <img src={produkt.imgsUrl} alt="Žádné obrázky">
        </div>

        <div class="rec">
            <div class="nadpis">Doporučené požadavky</div>
            <div class="prostredek">
                <div class="info">
                    <div>Operační systém: </div><br>
                    <div>DirectX: </div><br>
                    <div>Procesor: </div><br>
                    <div>Grafická Karta: </div><br>
                    <div>Paměť RAM: </div><br>
                    <div>Uložiště: </div>
                </div>
                <div class="vypisek">
                    <div></div><br>
                    <div></div><br>
                    <div></div><br>
                    <div></div><br>
                    <div></div><br>
                    <div></div>
                </div>
            </div>
        </div>

    </div>
</main>

<style>
    main {
        height: 100%;
        width: 100%;
        min-height: calc(100vh - 425px);
        position: relative;
        padding-bottom: 15px;
    }
    .ohraniceni {
        position: relative;
        max-width: 940px;
        height: 100%;
        min-height: 550px;
        background-color: var(--darkgrey);
        border-radius: 10px;
        margin: 0 auto;
        margin-top: 10px;
    }
    .ohraniceni2 {
        position: relative;
        max-width: 940px;
        height: 100%;
        min-height: 450px;
        background-color: var(--darkgrey);
        border-radius: 10px;
        margin: 20px auto 10px auto;
        padding-top: 5px;
    }
    .zpet{
        box-sizing: border-box;
        width: 100%;
        height: 50px;
        padding: 20px 0 0 40px;
    }
    .zpet button{
        height: 20px;
        width: 15px;
        padding-left: 15px;

        color: var(--text);
        font-size: 1em;

        background-image: url('/images/zpet.svg');
        background-repeat: no-repeat;
        background-position: center left;
        background-size: 13px;
    }
    .vrch, .spodek{
        position: relative;
        box-sizing: border-box;
    }
    .vrch{
        width: 100%;
        height: 100%;
        min-height: 320px;
        float: left;
    }
    .spodek{
        width: 100%;
        min-height: 100px;
        float: right;
    }
    .cena, .skladem, .koupit{
        box-sizing: border-box;
        position: absolute;
    }
    .nazev{
        width: 100%;
        height: 45px;
        color: var(--yellow);
        text-align: center;
        font-size: 2em;
    }
    .obrazek img{
        position: absolute;
        background-color: white;
        max-width: 256px;
        max-height: 320px;
        top: 5%;
        left: 50%;
        transform: translateX(-50%);
    }
    .skladem{
        top: 30px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 0.9em;
    }
    .cena{
        left: 40.8%;
        transform: translateX(-50%);
        bottom: 3px;
        font-size: 1.3em;
    }
    .koupit{
        right: 30%;
        transform: translateX(-50%);
        bottom: 0px;
    }
    .nadpis{
        padding: 20px 40px;
        font-size: 1.7em;
    }
    .text{
        box-sizing: border-box;
        border-bottom: solid 1px var(--text);

        font-size: 0.8em;
        line-height: 18px;

        padding: 0 15px 30px;
        margin: 0 35px;
    }
    .obrazky{
        border-bottom: solid 1px var(--text);
        margin: 0 35px;
        padding: 0 0 30px;
    }
    .obrazky img{
        width: 100%;
        height: 100%;
        max-width: 800px;
        max-height: 449px;
        display: block;
        margin: 0 auto;
    }
    .rec{
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        min-height: 250px;
    }
    .prostredek{
        width: 400px;;
        margin: 0 auto;
    }
    .info, .vypisek{
        box-sizing: border-box;
    }
    .info{
        position: absolute;
        left: 50px;
        width: 160px;
        height: 150px;
        line-height: 12px;
        font-size: 1em;
        text-align: left;
    }
    .vypisek{
        position: absolute;
        left: 180px;
        width: 500px;
        height: 150px;
        line-height: 12px;
        font-size: 1em;
        text-align: left;
    }
    @media only screen and (max-width: 1200px){
        .ohraniceni, .ohraniceni2{
            width: 700px;
        }
        .cena{
            left: 37%;
        }
        .koupit{
            right: 23%;
        }
    }

    @media only screen and (max-width: 800px){
        .ohraniceni, .ohraniceni2{
            width: 400px;
        }
        .cena{
            left: 28%;
        }
        .koupit{
            right: 3%;
        }
        .nadpis{
            text-align: center;
        }
        .text{
        font-size: 0.7em;
        line-height: 15px;
        padding: 0 0 30px;
        margin: 0 35px;
        }
        .info{
            left: 35px;
            height: 100px;
            width: 150px;
            line-height: 8px;
            font-size: 0.6em;
        }
        .vypisek{
            height: 100px;
            width: 200px;
            line-height: 8px;
            font-size: 0.6em;
        }
        .rec{
            height: 100px;
            min-height: 200px;
        }
    }
</style>