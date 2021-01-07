<script>
    import { loginPopup } from '../stores/stavy.js';

    function close(){
        loginPopup.update(_ => false);
    }
</script>

<div class="ohraniceni" active={$loginPopup}> 

    <div class="backdrop" on:click={_ => close()}></div>
    <form class="formular">
        <p class="prihlaseni">Přihlášení</p>
        <button class="krizek" on:click={_ => close()}>╳</button>

        <table class="table">
            <tr>
                <td><label>Email</label></td>
                <td><input type="email" id="email" required></td>
            </tr>
            <tr>
                <td><label>Heslo</label></td>
                <td><input type="password" id="heslo" required></td>
            </tr>
        </table>
        <div class="tlacitka">
            <button type="submit" id="login" class="login">Přihlásit se</button>
            <button id="registr" class="registr">Registrovat se</button>
        </div>
    </form>  
</div>


<style>

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
    .formular{
        position: fixed;
        z-index: 21;
        width: 400px;
        height: 200px;
        background-color: var(--darkgrey);
        left: 50%;
        transform: translateX(-50%);
        top: 30%;
    }
    .prihlaseni{
        text-align: center;
        font-size: 1.3em;

    }
    .krizek{
        position: absolute;
        color: white;
        top: 10px;
        right: 10px;
    }
    .table{
        margin: 0 auto;
    }
    label{
        margin-left: 20px;
        margin-top: 10px;
    }

    input{
        appearance: none;
        border-bottom: solid 1px var(--lightgrey);
        color: var(--lightgrey);
        width: 200px;
        margin-left: 20px;
        margin-bottom: 7px;
    }
    .tlacitka{
        width: 100%;
        display: flex;
        margin-top: 20px;
        justify-content: space-evenly;
    }
    .login{
        height: 35px;
        width: 120px;
        border: solid 1px var(--grey);
        background-color: var(--yellow);
        border-radius: 10px;
        font-size: 1.1em;
        margin-left: 20px;
    }

    .registr{
        height: 35px;
        width: 140px;
        border: solid 1px var(--grey);
        background-color: var(--yellow);
        border-radius: 10px;
        font-size: 1.1em;
        margin-left: 20px;
    }



</style>
