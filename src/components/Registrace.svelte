<script>
    import { registracePopup } from '../stores/stavy.js';

    let rjmeno;
    let rprijmeni;
    let remail;
    let rpass;

    function close(){
        registracePopup.update(_ => false);
    }

    function doRegister(){
      console.log()
    }


</script>

<div class="ohraniceni" active={$registracePopup}>

    <div class="backdrop" on:click={_ => close()}></div>
    <form class="formular" on:submit|preventDefault={_ => doRegister()}>
        <p class="registrace">Nová registrace</p>
        <button class="krizek" on:click={_ => close()}>╳</button>

        <table>
            <tr>
                <td><label for="jmeno">Jméno</label></td>
                <td><input type="text" name="jmeno" class="input" bind:value={rjmeno} required></td>
            </tr>
            <tr>
                <td><label for="prijmeni">Přijmení</label></td>
                <td><input type="text" name="prijmeni" class="input" bind:value={rprijmeni} required></td>
            </tr>

            <tr>
                <td><label for="email">Email</label></td>
                <td><input type="email" name="email" class="input" bind:value={remail} required></td>
            </tr>
            <tr>
                <td><label for="heslo">Heslo</label></td>
                <td><input type="text" name="heslo" class="input" bind:value={rpass} required></td>
            </tr>
        </table>

        <button type="submit" id="registr" class="registr" on:click={_ =>close()}>Registrovat se</button>

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
        height: 300px;
        background-color: var(--darkgrey);
        border-radius: 10px;
        left: 50%;
        transform: translateX(-50%);
        top: 30%;
    }

    .registrace{
        padding-top: 10px;
        font-size: 1.5em;
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
        margin-top: 20px
    }


    tr{
        height: 35px;
    }


</style>
