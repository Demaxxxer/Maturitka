<script>
    import { alertContent } from '../stores/stavy.js';
    $: $alertContent, showAlert();
    let alertIsVisible = false;
    let alertTimer = false;
    let alertError = true;
    let alertText = '';

    function chooseAlertText(url,code){
      console.log('Přidat alert text na URL: [' + url + '] (' + code + ')');
      //$alertContent.response.data - při inputech určuje který input ve fields
      return 'Tady by bylo dobré přidat ekšuly nějaký text';
    }

    function setAlertText(){
      const url = $alertContent.config.url;
      let statusCode;


      if($alertContent.response){
        //Errory
        alertError = true;
        statusCode = $alertContent.response.status
      } else if($alertContent.status){
        //V pohodě
        alertError = false;
        statusCode = $alertContent.status
      } else {
        //Chyba internetu
        alertText = 'Chyba připojení'
        return
      }

      alertText = chooseAlertText(url,statusCode)
    }

    function showAlert(){
      if($alertContent){
        if(alertTimer){
          clearTimeout(alertTimer);
        }

        if($alertContent.custom){
          alertText = $alertContent.msg;
        } else {
          setAlertText();
        }

        //let alertError = true;
        //let alertText = '';


        alertIsVisible = true;
        alertTimer = setTimeout( _=> alertIsVisible = false,5000);
      }
    }
    function close(){
        if(alertTimer){
          clearTimeout(alertTimer);
        }
        alertIsVisible = false;
    }

    /*

    /api/user/create (400)
    field
    empty - nezadáno
    short - Je moc krátké, minimálně 2 znaky
    long - Je moc dlouhé, mamximálně 12 znaků
    wrongChars - Obsahuje nepovolené znaky
    passConfirm - Hesla se neshodují

    201 - Uživatel úspěšně vytvořen nyní se můžete přihlásit
    403 - Uživatel je už přihlášen


    /api/user/create (404) - Uživatel nebyl nalezen
    401 - Email a heslo se neshodují
    200 - Uživatel úspěšně přihlášeň


    /api/user/logout (200) -  Uživatel odhlášen

    401 - Nebyl zadán přihlašovací žeton
    */
</script>

<div class="zprava" error={alertError} active={alertIsVisible}>

    <div class="text">{alertText}</div>

    <button class="krizek" on:click={_ => close()}><b>╳</b></button>
</div>


<style>
    .zprava[active="true"]{
        display: block;
    }
    .krizek{
        position: absolute;
        color: black;
        line-height: 60px;
        right: 20px;

    }
    .text{
        position: absolute;
        color: black;
        line-height: 60px;
        left: 20px;
    }

    .zprava{
        display: none;
        color: black;
        position: fixed;
        z-index: 31;
        width: 600px;
        height: 60px;
        background-color: #c6ffb3;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
        left: 50%;
        transform: translateX(-50%);
        top: 0px;
    }
    .zprava[error="true"]{
        background-color: #fe4d4d;
    }

    @media only screen and (max-width: 800px){
        .zprava{
            width: 100%;
            border-bottom-right-radius: 0px;
            border-bottom-left-radius: 0px;
        }

    }

</style>
