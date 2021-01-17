<script>
    import { registracePopup } from '../stores/stavy.js';

    function close(){
        registracePopup.update(_ => false);
    }
</script>

<div class="ohraniceni" active={$registracePopup}>

    <div class="backdrop" on:click={_ => close()}></div>
    <form class="formular">
        <p class="registrace">Nová registrace</p>
        <button class="krizek" on:click={_ => close()}>╳</button>

        <table>
            <tr>
                <td><label for="rjmeno">Jméno</label></td>
                <td><input type="text" id="rjmeno" class="input" required></td>
            </tr>
            <tr>
                <td><label for="rprijmeni">Přijmení</label></td>
                <td><input type="text" id="rprijmeni" class="input" required></td>
            </tr>
            <tr>
                <td><label for="telefon">Telefoní číslo</label></td>
                <td><input type="number" id="telefon" class="input" required></td>
            </tr>
            <tr>
                <td><label for="email">Email</label></td>
                <td><input type="email" id="email" class="input" required></td>
            </tr>
            <tr>
                <td><label for="email">Email znovu</label></td>
                <td><input type="email" id="email" class="input" required></td>
            </tr>
            <tr>
                <td><label for="heslo">Heslo</label></td>
                <td><input type="text" id="heslo" class="input" required></td>
            </tr>
            <tr>
                <td><label for="heslo">Heslo znovu</label></td>
                <td><input type="text" id="heslo" class="input" required></td>
            </tr>
        </table>                    

        <button type="submit" id="registr" class="registr">Registrovat se</button>
        
    </form>  
</div>



<style>
    label{
        font-family: roboto;
    }
    .input{
        border-bottom: solid 1px var(--lightgrey);
        color: var(--text);
        width: 200px;

    }

    input, label, p{
        margin: 0 0 5px 30px;
        
    }

    .ohraniceni{
        position: fixed;
        z-index: 20;
        top: 0;
        left: 0;
        display: none;
    }

    .ohraniceni[active="true"]{
        display: block;
    }

    .backdrop{
        position: fixed;
        background-color: rgba(0,0,0,0.7);
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    .krizek{
        position: absolute;
        color: white;
        top: 10px;
        right: 10px;
    }
    
    .formular{
        position: fixed;
        z-index: 21;
        width: 400px;
        height: 400px;
        background-color: var(--darkgrey);
        border-radius: 10px;
        left: 50%;
        transform: translateX(-50%);
        top: 30%;
    }

    .registrace{
        padding-top: 10px;
        font-size: 1.7em;
        margin-bottom: 20px;
        text-align: center;

    }

    .registr{
        height: 40px;
        width: 160px;
        border: solid 1px var(--grey);
        background-color: var(--yellow);
        border-radius: 10px;
        font-size: 1.3em;
        margin: 0 auto;
        margin-top: 15px
    }


    tr{
        height: 35px;
    }

    
</style>
