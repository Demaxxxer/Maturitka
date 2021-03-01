<script>
    import axios from 'axios';
    import { loginPopup, uzivatel, registracePopup, alertContent } from '../stores/stavy.js';

    let lemail = '';
    let lpass = '';

    function close(){
        loginPopup.update(_ => false);
    }

    function open(){
        registracePopup.update(_ => true);
    }

    function doLogin(){
      axios({
        method: 'post',
        url: '/api/user/login',
        data: {
          email: lemail,
          pass: lpass
        }
      }).then(res => {
          uzivatel.update(_ => {
            return {
              jmeno: res.data.fname,
              prijmeni: res.data.sname,
              email: res.data.email,
              perms: res.data.isAdmin,
            }
          });
          loginPopup.update(_ => false);
          alertContent.update(_ => res);
      }).catch(err => {
        alertContent.update(_ => err);
      })
    }

</script>

<div class="oregistr" active={$loginPopup}>

    <div class="backdrop" on:click={_ => close()}></div>

    <form class="formular" on:submit|preventDefault={ _=> doLogin()}>

        <div class="prihlaseni">Přihlášení</div>
        <button class="krizek" on:click={_ => close()}>╳</button>

        <table class="table">
            <tr>
                <td><label for="email">Email</label></td>
                <td><input type="email" id="email" bind:value={lemail} required></td>
            </tr>
            <tr>
                <td><label for="heslo">Heslo</label></td>
                <td><input type="password" id="heslo" bind:value={lpass} required></td>
            </tr>
        </table>
        <div class="tlacitka">
            <button type="submit" id="login" class="login">Přihlásit se</button>
            <button type="button" id="registrace" class="registrace" on:click={_ =>{close(); open()}}>Registrovat se</button>
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
