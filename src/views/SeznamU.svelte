<script>
    import Uzivatel from '../components/Uzivatel.svelte';
    

    
</script>
<main>
    <form>
        <div class="ohraniceni1">
            <div class="nadpis">Seznam uživatelů</div>

            <label class="jmeno" for="jmenou">Jméno</label>
            <input type="text" class="hodnota2" name="jmenou"><br>

            <label class="prijmeni" for="prijmeniu">Přijmení</label>
            <input type="text" class="hodnota3" name="prijmeniu"><br>

            <label class="email" for="emailu">Email</label>
            <input type="email" class="hodnota4" name="emailu"><br>



        </div>
        <div class="ohraniceni2">
            <div class="j">Jméno a Přijmení</div>
            <div class="e">Email</div>
            <div class="o">Odtranit</div>

        </div>
    </form>

    <Uzivatel></Uzivatel>

    
</main>
<style>
    main{
        padding: 5px 0 15px;    
    }
    .ohraniceni1{
        position: relative;
        width: 940px;
        height: 140px;
        padding: 10px 0;
        margin: 0 auto;
        background-color: var(--darkgrey);
        border-radius: 10px;
        line-height: 30px;
        
    }
    .ohraniceni2{
        position: relative;
        width: 940px;
        height: 50px;
        margin: 0 auto;
        background-color: var(--darkgrey);
        border-radius: 10px;
        line-height: 50px;
        margin-top: 20px;
        
    }
    .nadpis{
        font-size: 1.4em;
        margin-bottom: 10px;
        padding-left: 20px;
    }
    .jmeno, .prijmeni, .idecko, .email{
        padding-left: 20px;
    }
    .hodnota1, .hodnota2, .hodnota3, .hodnota4{
        border-bottom: solid 1px var(--text);
        position: absolute;
        margin-top: 3px;
        left: 150px;
    }

    .id, .j, .e, .o{
        position: absolute;
        line-height: 50px;
    }
    .j{
        left: 35px;
    }
    .e{
        left: 50%;
        transform: translateX(-50%);
    }
    .o{
        right: 50px;
    }
    

    @media only screen and (max-width: 1200px){
        .ohraniceni1, .ohraniceni2{
            width: 760px;
            margin: 20px auto;
        }
        main{
            padding-bottom: 20px;
        }
        
    }
    @media only screen and (max-width: 800px){
        .ohraniceni1, .ohraniceni2{
            width: 400px;
            margin: 20px auto;
        }
        
    }


</style>