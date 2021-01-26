<script>
    
</script>
<main>
    <form>
            <table class="wrapper1">
                <div class="nadpis">Nový produkt</div>
                <tr>
                    <td><label for="nazev">Název</label>
                    <td><input type="text" class="underline" name="nazev"></td>
                    </tr>
                <tr>
                    <td><label for="kusy">Kusy skladem</label></td>
                    <td><input type="text" class="underline" name="kusy"></td>
                </tr>
                <tr>
                    <td><label for="cena">Cena</label></td>
                    <td><input type="text" class="underline" name="cena"></td>
                </tr>
                <tr>
                    <td><label class="katergorie" for="kategorie">Kategorie</label></td>
                    <td><select class="kategorie" name="kategorie" >
                            <option value="activ">Akční hry</option>
                            <option value="logic">Logické hry</option>
                            <option value="sim">Simulátory</option>
                            <option value="strat">Strategické hry</option>
                            <option value="rpg">RPG hry</option>
                            <option value="race">Zívodní hry</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td><lable class="popis" for="popis">Popis produktu</lable></td>
                    <td><textarea name="popis" class="box1"></textarea></td>
                </tr>

                <tr>
                    <td><label for="img">Náhled hry</label></td>
                    <td><input type="file" class="img" name="img" accept="image/*"></td>
                </tr>
            </table>
        <table class="wrapper2">
            <lable for="popisek" class="podnadpis">Podrobný popis produktů</lable><br>
            <textarea name="popisek" class="box2"></textarea><br>

            <tr>
                <td><label for="files" class="podnadpis">Galerie obrázků</label><br></td>
                <td><input type="file" name="files[]" accept="image/*" multiple="multiple"><br></td>
            </tr>
        </table>
        <table class="wrapper3">
            <div class="nadpis">Hardwarové a softwarové požadavky</div>

            <div class="podnadpis">Minimální PC požadavky</div>
            <tr>
                <td><label for="os1">Operační systém</label></td>
                <td><input type="text" class="underline" name="os1"><br></td>
            </tr>
            <tr>
                <td><label for="cpu1">Procesor</label></td>
                <td><input type="text" class="underline" name="cpu1"><br></td>
            </tr>
            <tr>
                <td><label for="gpu1">Grafická karta</label></td>
                <td><input type="text" class="underline" name="gpu1"><br></td>
            </tr>
                <tr>
                <td><label for="ram1">Paměť RAM</label></td>
                <td><input type="text" class="underline" name="ram1"><br></td>
            </tr>
            <tr>
                <td><label for="direct1">DirectX</label></td>
                <td><input type="text" class="underline" name="direct1"><br></td>
            </tr>

            <div class="podnadpis2">Doporučené PC požadavky</div>
            <tr>
                <td><label for="os2">Operační systém</label></td>
                <td><input type="text" class="underline" name="os2"><br></td>
            </tr>
            <tr>
                <td><label for="cpu2">Procesor</label></td>
                <td><input type="text" class="underline" name="cpu2"><br></td>
            </tr>
            <tr>
                <td><label for="gpu2">Grafická karta</label></td>
                <td><input type="text" class="underline" name="gpu2"><br></td>
            </tr>
            <tr>
                <td><label for="ram2">Paměť RAM</label></td>
                <td><input type="text" class="underline" name="ram2"><br></td>
            </tr>
            <tr>
                <td><label for="direct2">DirectX</label></td>
                <td><input type="text" class="underline" name="direct2"><br></td>
            </tr>
            
            <a href=""><button></button></a>
        </table>
    </form>
</main>
<style>
    main{
        padding: 5px 0 20px;
    }
    .wrapper1{
        width: 940px;
        background: var(--darkgrey);

    }
    .wrapper2{
        width: 940px;
        background: var(--darkgrey);


    }
    .wrapper3{
        width: 940px;
        background: var(--darkgrey);

    }
    .wrapper1, .wrapper2, .wrapper3{
        margin: 0 auto;
        margin-bottom: 20px;
        border-radius: 10px;
        padding: 20px 50px;

    }
    td{
        width: 25%;
        float: left;
    }
    .img{
        
        
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
        border-bottom: solid 1px var(--lightgrey);
        color: var(--text);
        width: 100%;
        max-width: 200px;
        margin-bottom: 10px;
    }
    .kategorie{
        margin-bottom: 10px;
    }
    .box1, .box2{
        background: var(--text);
        max-width: 300px;
        max-height: 200px;
        min-width: 300px;
        min-height: 100px;
    }
    .box2{
        margin-top: 10px;
    }

    .popis{
        height: 100%;
        padding: 0;
        vertical-align: top;
    }
    @media only screen and (max-width: 800px){
        .wrapper1, .wrapper2, .wrapper3{
            margin: 20px 20px;
        }
        
    }

</style>