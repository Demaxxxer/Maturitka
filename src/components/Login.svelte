<script>
    import { loginPopup } from '../stores/stavy.js';
    import { registracePopup } from '../stores/stavy.js';

    function close(){
        loginPopup.update(_ => false);
    }

    function open(){
        registracePopup.update(_ => true);
    }
</script>

<div class="oregistr" active={$loginPopup}> 

    <div class="backdrop" on:click={_ => close()}></div>
    <form class="formular">
        <div class="prihlaseni">Přihlášení</div>
        <button class="krizek" on:click={_ => close()}>╳</button>

        <table class="table">
            <tr>
                <td><label>Email</label></td>
                <td><input type="email" id="email" required></td>
            </tr>
            <tr>
                <td><label>Heslo</label></td>
                <td><input type="password" id="heslo" rewuired></td>
            </tr>
        </table>
        <div class="tlacitka">
            <button type="submit" id="login" class="login">Přihlásit se</button>
            <button id="registrace" class="registrace" on:click={_ =>{close(); open()}}>Registrovat se</button>
        </div>
    </form>  
</div>


<style>

    .oregistr{
        position: fixed;
        z-index: 20;
        top: 0;
        left: 0;
        display: none;
    }
    .oregistr[active="true"]{
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
        width: 320px;
        height: 180px;
        background-color: var(--darkgrey);
        border-radius: 10px;
        left: 50%;
        transform: translateX(-50%);
        top: 30%;
        padding: 0 20px;
    }
    .prihlaseni{
        margin: 10px 0 10px;
        text-align: center;
        font-size: 1.5em;

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

        margin-top: 10px;
    }

    input{
        appearance: none;
        border-bottom: solid 1px var(--lightgrey);
        color: var(--lightgrey);
        width: 200px;
        margin-left: 30px;
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

    .registrace{
        height: 35px;
        width: 140px;
        border: solid 1px var(--grey);
        background-color: var(--yellow);
        border-radius: 10px;
        font-size: 1.1em;
        margin-left: 20px;
    }



</style>
