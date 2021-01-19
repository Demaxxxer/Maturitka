<script>
    import Koupit from '../components/Koupit.svelte'
    import {nf} from '../scripty/uzitecne.js'

    const produkt = {
        id:"2",
        nazev:"Grand Theft Auto V",
        popisek:"kjnadh lhgh sljd  jlkjhf   ADSHFASD F F ASD FA G LK sdfl g",
        cena:"1200",
        kusy:"2",
        imgUrl:"/images/gta5.jpeg",
        imgsUrl:"/images/obrazek1.jpeg",
        skladem:true,
        popis:`Aj asdk fůlkasdjfůlksadjfůlksajd ůkjsaů lfsaůd fůsk sld flaskdj flkajs dflkj asldkfj ladk fůlkasdjfůlksadjfůlksajd ůkjsaů lfsaůd fůsk sld flaskdj flkajs dflkj asldkfj dk fůlkasdjfůlksadjfůlksajd ůkjsaů lfsaůd fůsk sld flaskdj flkajs dflkj asldkfj dk fůlkasdjf ůlksa djfůlksajd ůkjsaů lfsaůd fůsk sld flaskdj flkajs dflkj asldkfj dk fůlkasdjfů lksadjfůl sajd ůkjsaů lfsaůd fůsk sld flaskdj flkajs dflkj asldkfj skdjf klasjf ksad fkj sdaf Aj asdk fůlkasdjfůlksadjfůlksajd ůkjsaů lfsaůd fůsk sld flaskdj flkajs dflkj asldkfj laskdjf klasjf ksad fkj sdaf.`

    }
</script>

<main>
    <div class="ohraniceni">
        <p><button class="zpet">Zpět</button></p>

        <div class="vrsek">

            <div class="obrazek">
                <img src={produkt.imgUrl} alt="error">
            </div>
            
            <div class="nazev">{produkt.nazev}</div>

            <div class="popisek">{produkt.popisek}</div>

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

        <div class="nadpis">
            Hardwarové a Softwarové požadavky
            <div class="min">
                <span class="podnadpis1">Minimální požadavky</span>
                <div class="info">
                    <span>Operační systém: </span><br>
                    <span>DirectX: </span><br>
                    <span>Procesor: </span><br>
                    <span>Grafická Karta: </span><br>
                    <span>Paměť RAM: </span><br>
                    <span>Uložiště: </span>
                </div>

            </div>
            <div class="rec">
                <span class="podnadpis2">Doporučené požadavky</span>
                <div class="info">
                    <span>Operační systém: </span><br>
                    <span>DirectX: </span><br>
                    <span>Procesor: </span><br>
                    <span>Grafická Karta: </span><br>
                    <span>Paměť RAM: </span><br>
                    <span>Uložiště: </span>
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
    .nazev, .popisek, .cena{
        box-sizing: border-box;
        padding: 0 20px 0 15px;
    }

    .ohraniceni {
        max-width: 940px;
        height: 100%;
        min-height: 450px;
        background-color: var(--darkgrey);
        border-radius: 10px;
        margin: 20px auto 10px auto;
        padding-top: 5px;
    }
    .ohraniceni2 {
        max-width: 940px;
        height: 100%;
        min-height: 450px;
        background-color: var(--darkgrey);
        border-radius: 10px;
        margin: 20px auto 10px auto;
        padding: 5px 0 200px 0 ;
    }
    .zpet{
        background-image: url('/images/zpet.svg');
        background-repeat: no-repeat;
        background-position: center left;
        background-size: 17px;
        padding-left: 20px;
        color: var(--text);
        font-size: 1em;
        margin: 0 0 10px 40px;
    }

    .nazev{
        width: 50%;
        float: right;
        font-size: 2em;
        max-height: 50px;
        text-align: left;
        color: var(--yellow);
    }

    .obrazek{
        box-sizing: border-box;
        height: 100%;
        width: 50%;
        float: left;
        padding: 0 40px;

    }

    .obrazek img{
        background-color: white;
        width: 256px;
        height: 320px;
        min-width: 256px;
        min-height: 320px;
    }

    .popisek{
        min-height: 90px;
        width: 50%;
        float: right;
        padding: 10px 40px 0 15px;
        box-sizing: border-box;
        font-size: 0.8em;
    }

    .cena{
        font-size: 1.6em;
        width: 25%;
        float: left;
        min-height: 40px;
        text-align: left;
        padding: 5px 0 0 15px;
    }

    .koupit{
        min-height: 40px;
        width: 20%;
        float: right;
        padding: 0 30px 0 0;
    }

    .nadpis{
        padding: 30px 50px;
        font-size: 1.7em;
    }

    .text{
        box-sizing: border-box;
        font-size: 0.8em;
        padding: 0 15px 30px;
        border-bottom: solid 1px var(--text);
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
    .min{
        box-sizing: border-box;
        width: 50%;
        float: left;
    }
    .rec{
        box-sizing: border-box;
        width: 50%;
        float: right;
    }

    .podnadpis1, .podnadpis2{
        box-sizing: border-box;
        font-size: 0.8em;

    }
    .info{
        box-sizing: border-box;
        font-size: 0.6em;
        text-align: center left;
        margin: 10px 0;
    }


    @media only screen and (max-width: 800px){
        .ohraniceni{
            margin: 15px 15px;

        }
        .ohraniceni2{
            margin: 0 15px;

        }
        .vrsek{
            position: relative;
            margin: 0 20px;
        }
        .nazev{
            position: absolute;
 
            float: left;
            top: 10px;
            left: 10px;
        }

        .obrazek{
            padding-top: 60px;
			float: none;
            margin: 0 auto;
            width: 400px;
        }

        .popisek{
            width: 100%;
            height: 100%;
            min-height: 20px;
			float: none;
            text-align: center left;
            padding: 10px 50px;

        }

        .cena{
            min-width: 150px;
			float: left;
            margin-left: 50px;
        }

        .koupit{
			float: right;
            margin-right: 50px;
        }
        .min{
            width: 100%;
        }
        .rec{
            width: 100%;
        }
        .nadpis{
            font-size: 1.3em;
        }
    
        .podnadpis1, .podnadpis2{
            font-size: 0.7em;

        }
        .info{
            font-size: 0.5em;

        }

    }

</style>