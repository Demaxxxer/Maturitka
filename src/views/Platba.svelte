<script>

</script>


<div class="pozadi">
    <div class="ohraniceni">
        
        <p class="registrace">Nová registrace</p>

        <p class="rudaje">Registrační údaje</p>
        <p class="podminky">Údaje označené <sup>*</sup> jsou povinné</p>
        <form>
            <table>
                <tr>
                    <td><label for="jmeno">Jméno <sup>*</sup></label></td>
                    <td><input type="text" id="jmeno" class="input" required></td>
                </tr>
                <tr>
                    <td><label for="prijmeni">Přijmení <sup>*</sup></label></td>
                    <td><input type="text" id="prijmeni" class="input" required></td>
                </tr>
                <tr>
                    <td><label for="telefon">Telefoní číslo <sup>*</sup></label></td>
                    <td><input type="number" id="telefon" class="input" required></td>
                </tr>
                <tr>
                    <td><label for="email">Email <sup>*</sup></label></td>
                    <td><input type="email" id="email" class="input" required></td>
                </tr>
                <tr>
                    <td><label for="email">Email znovu <sup>*</sup></label></td>
                    <td><input type="email" id="email" class="input" required></td>
                </tr>
                <tr>
                    <td><label for="heslo">Heslo <sup>*</sup></label></td>
                    <td><input type="text" id="heslo" class="input" required></td>
                </tr>
                <tr>
                    <td><label for="heslo">Heslo znovu <sup>*</sup></label></td>
                    <td><input type="text" id="heslo" class="input" required></td>
                </tr>
            </table>

            <p><input type="checkbox" id="souhlas" name="souhlas" class="souhlas" required><span class="souhlas">Souhlasím s použitím mých osobních údajů. Vaše osobní údaje zpracováváme pro vedení Vašeho účtu a urychlení nákupu.</span></p>
        
            <button type="submit" id="registr" class="registr">Registrovat se</button>
        </form>  
    </div>
</div>

<style>

    input{
        background: none;
    }

    .input{

        border-bottom: solid 1px var(--lightgrey);
        color: var(--lightgrey);
        width: 200px;
        margin-left: 20px;
    }

    input, label, p{
        margin-left: 20px;
    }


    .ohraniceni{
        
        color: var(--lightgrey);
        background-color: var(--darkgrey);
        width: 100%;
        height: 100%;
        max-width: 940px;
        max-height: 620px;
        margin: 0 auto;
        border-radius: 10px;
        padding-bottom: 20px;
    }
    .podminky{
        font-size: 0.8em;
    }
    .registrace{
        padding-top: 10px;
        font-size: 1.7em;
        font-weight: bold;
    }
    sup{
        color: red;
    }
    .registr{
        height: 40px;
        width: 160px;
        border: solid 1px var(--grey);
        background-color: var(--yellow);
        border-radius: 10px;
        font-size: 1.3em;
        margin-left: 20px;
    }

    .rudaje{
        font-size: 1.5em;
    }
    tr{
        height: 30px;
    }
    .souhlas{
        margin-left: 10px;
    }


</style>
