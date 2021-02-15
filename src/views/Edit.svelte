<script>
    
</script>
<main>
    <form>
        <div class="wrapper1">
            <div class="nadpis">Nový produkt</div>
            
                <label for="nazev">Název</label>
                <input type="text" class="underline" name="nazev"><br>
                
            
                <label for="kusy">Kusy skladem</label>
                <input type="text" class="underline" name="kusy"><br>
            
            
                <label for="cena">Cena</label>
                <input type="text" class="underline" name="cena"><br>
            
            
                <label class="katergorie" for="kategorie">Kategorie</label>
                <select class="kategorie" name="kategorie" >
                        <option value="activ">Akční hry</option>
                        <option value="logic">Logické hry</option>
                        <option value="sim">Simulátory</option>
                        <option value="strat">Strategické hry</option>
                        <option value="rpg">RPG hry</option>
                        <option value="race">Zívodní hry</option>
                    </select>
                
            
                <div class="popis" for="popis">Popis produktu</div>
                <textarea name="popis" class="box1"></textarea>
            


            <div for="img">Náhled hry</div>
            <div>
                <div class="nahledak"></div>
            </div>

        </div>
        <div class="wrapper2">
            <lable for="popisek" class="podnadpis">Podrobný popis produktů</lable><br>
            <textarea name="popisek" class="box2"></textarea><br>

            <div class="nadpis">Galerie obrázků</div>
            <div>
                <div class="nahrani"></div>
            </div>
            
        </div>
        <div class="wrapper3">
            <div class="nadpis">Hardwarové a softwarové požadavky</div>

            <div class="podnadpis">Minimální PC požadavky</div>
            
                <label for="os1">Operační systém</label>
                <input type="text" class="underline" name="os1"><br>
            
                <label for="cpu1">Procesor</label>
                <input type="text" class="underline" name="cpu1"><br>
            
                <label for="gpu1">Grafická karta</label>
                <input type="text" class="underline" name="gpu1"><br>
            
                
                <label for="ram1">Paměť RAM</label>
                <input type="text" class="underline" name="ram1"><br>
            
           
                <label for="direct1">DirectX</label>
                <input type="text" class="underline" name="direct1"><br>
            

            <div class="podnadpis2">Doporučené PC požadavky</div>
            
                <label for="os2">Operační systém</label>
                <input type="text" class="underline" name="os2"><br>
            
                <label for="cpu2">Procesor</label>
                <input type="text" class="underline" name="cpu2"><br>
            
                <label for="gpu2">Grafická karta</label>
                <input type="text" class="underline" name="gpu2"><br>
            
                <label for="ram2">Paměť RAM</label>
                <input type="text" class="underline" name="ram2"><br>
            
                <label for="direct2">DirectX</label>
                <input type="text" class="underline" name="direct2"><br>
            </div>
        <button class="pridat" type="submit">Přidat položku</button>
    </form>
</main>
<style>
    main{
        padding: 5px 0 20px;
    }
    
    .wrapper1, .wrapper2, .wrapper3{
        background: var(--darkgrey);
        position: relative;
        margin: 0 auto;
        margin-bottom: 20px;
        border-radius: 10px;
        padding: 20px 25px;
        width: 940px;
    }

    .nahledak{
        background-color: white;
        width: 120px;
        height: 150px;
        margin-top: 10px;
        background-image: url('/images/plus.svg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: 25px;
    }
    .nahrani{
        background-color: white;
        width: 190px;
        height: 120px;
        margin-top: 10px;
        background-image: url('/images/plus.svg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: 25px;
    }
    .nadpis{
        font-size: 1.5em;
        margin-bottom: 20px;
    }

    .podnadpis, .podnadpis2{
        font-size: 1.3em;
        margin-bottom: 20px;
    }
    .podnadpis2{
        margin-top: 20px;
    }
    .underline{
        position: absolute;
        left: 40%;
        border-bottom: solid 1px var(--lightgrey);
        color: var(--text);
        width: 100%;
        max-width: 200px;
        margin-bottom: 10px;
    }
    label{
        margin-bottom: 10px;
    }
    .kategorie{
        position: absolute;
        left: 40%;
        margin-top: 10px;
    }
    .box1, .box2{
        resize: none;
        display: block;
        background: var(--text);
        max-width: 300px;
        width: 100%;
        height: 100px;
    }
    .box2{
        margin-top: 10px;
    }
    .box1{
        margin: 10px 0;
    }
    .popis{

        vertical-align: top;
    }
    .pridat {
        height: 40px;
        width: 150px;
        border: solid 1px var(--grey);
        background-color: var(--yellow);
        border-radius: 10px;
        font-size: 1.3em;
        margin: 0 auto;
    }
    @media only screen and (max-width: 1200px){
        .wrapper1, .wrapper2, .wrapper3{

            width: 500px;
            margin: 15px auto;
        }
        
    }
    @media only screen and (max-width: 500px){
        .wrapper1, .wrapper2, .wrapper3{
            width: 400px;
            margin: 15px auto;
        }
        
    }

</style>