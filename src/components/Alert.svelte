<script>
    import { alertContent } from '../stores/stavy.js';
    $: $alertContent, showAlert();
    let alertIsVisible = false;
    let alertTimer = false;
    let alertError = true;
    let alertText = '';

    const alertBasic = {
      500: 'Nastala chyba na straně serveru.',
      409: 'Objekt už existuje.',
      404: 'Objekt nenalezen.',
      403: 'Zakázáno.',
      401: 'Nejste přihlášen.',
      400: 'Zadán špatný formát.',
      201: 'Úspěšně vytvořeno.',
      200: 'Požadavek splněn.'
    }

    const userFieldsAndType = {
      firstname: {
        empty: 'Nebylo zadáno jméno.',
        short: 'Jméno je moc krátké.',
        long: 'Jméno je moc dlouhé.',
        wrongChars: 'Jméno obsahuje nepovolené znaky.'
      },
      surname: {
        empty: 'Nebylo zadáno příjmení.',
        short: 'Příjmení je moc krátké.',
        long: 'Příjmení je moc dlouhé.',
        wrongChars: 'Příjmení obsahuje nepovolené znaky.'
      },
      pass: {
        empty: 'Nebylo zadáno heslo.',
        short: 'Heslo je moc krátké.',
        long: 'Heslo je moc dlouhé.',
      },
      email: {
        empty: 'Nebylo zadán email.',
        short: 'Email je moc krátký',
        long: 'Email je moc dlouhé.',
        wrongChars: 'Email obsahuje nepovolené znaky'
      },
      passRepeat: {
        passConfirm: 'Hesla se neshodují.'
      }
    }

    const itemManageFieldsAndType = {
      name: {
        empty: 'Nebylo zadáno jméno.',
        short: 'Název produktu je moc krátky.',
        long: 'Název produktu je moc dlouhý.',
        wrongChars: 'Název produktu obsahuje nepovolené znaky.'
      },
      storage: {
        empty: 'Nebyly zadány kusy skladem.',
        notANumber: 'Kusy skladem neni platné číslo.'
      },
      cost: {
        empty: 'Nebyla zadána cena.',
        notANumber: 'Cena neni platné číslo.'
      },
      release: {
        empty: 'Nebyl zadán datum.',
        notADate: 'Nebylo správně vyplněno datum vydání.',
      },
      os: {
        empty: 'Nebyl zadán operační systém.',
        wrongChars: 'Operační systém obsahuje nepovolené znaky.'
      },
      cpu: {
        empty: 'Nebyl zadán procesor.',
        wrongChars: 'Procesor obsahuje nepovolené znaky.'
      },
      gpu: {
        empty: 'Nebyla zadána grafická karta.',
        wrongChars: 'Grafická karta obsahuje nepovolené znaky.'
      },
      dx: {
        empty: 'Nebyl zadán DirectX.',
        wrongChars: 'DirectX obsahuje nepovolené znaky.'
      },
      size: {
        empty: 'Nebyl zadáno uložiště.',
        notANumber: 'Uložiště není číslo.'
      },
    }
    const itemManagefields = {
      'galleryOrThumbnail': 'Nebyl vložen náhled hry nebo alespoň jeden obrázek do galerie.',
      'galleryOld': 'Rozdíl upravených obrázku nebyl poslán v dobrém formátu.',
    }

    const alertRouting = [
      {
        path: '/api/user/create',
        status: {
          409: 'Uživatel s tímto emailem už existuje.',
          201: 'Uživatel úspěšně zaregistrován.'
        },
        fieldsAndType: userFieldsAndType
      },
      {
        path: '/api/user/login',
        status: {
          404: 'Uživatel s tímto emailem nenalezen.',
          401: 'Email a heslo se neshodují.',
          200: 'Uživatel úspěšně přihlášen.'
        },
        fieldsAndType: userFieldsAndType
      },
      {
        path: '/api/user/logout',
        status: {
          200: 'Uživatel úspěšně odhlášen.'
        }
      },
      {
        path: '/api/item/create',
        status: {
          409: 'Položka s tímto jménem už existuje.',
          201: 'Položka úspěšně přidána.'
        },
        fieldsAndType: itemManageFieldsAndType,
        fields: itemManagefields,
      },
      {
        path: '/api/item/update',
        status: {
          409: 'Položka s tímto jménem už existuje.',
          404: 'Položka s tímto id neexistuje.',
          200: 'Položka úspěšně upravena.'
        },
        fieldsAndType: itemManageFieldsAndType,
        fields: itemManagefields,
      },
      {
        path: '/api/item/get',
        status: {
          404: 'Položka nenalezena.'
        }
      },
      {
        path: '/api/item/delete',
        status: {
          200: 'Položka úspěšně vymazána.'
        }
      },
      {
        path: '/api/order/create',
        status: {
          201: 'Objednávka úspěšně vytvořena.'
        },
        fields: {
          paymentMethod: 'Zadali jste špatnou formu platby.'
        },
      }
    ]

    function chooseAlertText(url,code,data){

      for (const i in alertRouting){
        const route = alertRouting[i];
        if(url.indexOf(route.path) != -1){

          if(code == 400 && data && data.field){
            if(data.type){

              if(route.fieldsAndType && route.fieldsAndType[data.field] && route.fieldsAndType[data.field][data.type]){
                return route.fieldsAndType[data.field][data.type];
              }

            }
            if(route.fields && route.fields[data.field]){
              return route.fields[data.field];
            }
          }

          if(route.status[code]){
            return route.status[code]
          }

        }
      }

      if(alertBasic[code]){
        console.log('Přidat alert text na URL: [' + url + '] (' + code + ')');
        console.log(data);
        return alertBasic[code];
      } else {
        return 'Neočekaváná chyba: ' + code + '.';
      }

    }

    function setAlertText(){
      const url = $alertContent.config.url;
      let statusCode;
      let alertData;

      if($alertContent.response){
        //Errory
        alertError = true;
        statusCode = $alertContent.response.status
        alertData = $alertContent.response.data
      } else if($alertContent.status){
        //V pohodě
        alertError = false;
        statusCode = $alertContent.status
      } else {
        //Chyba internetu
        alertText = 'Chyba připojení.'
        return
      }

      alertText = chooseAlertText(url,statusCode,alertData)
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
