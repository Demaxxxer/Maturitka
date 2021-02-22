<script>
    import { alertContent } from '../stores/stavy.js';
    $: $alertContent, showAlert();
    let alertIsVisible = false;
    let alertTimer = false;
    function showAlert(){
      if($alertContent[1] != ''){
        if(alertTimer){
          clearTimeout(alertTimer)
        }
        alertIsVisible = true;
        alertTimer = setTimeout( _=> alertIsVisible = false,5000)
      }
    }
    function close(){
        if(alertTimer){
          clearTimeout(alertTimer)
        }
        alertIsVisible = false
    }
</script>

<div class="zprava" error={$alertContent[0]} active={alertIsVisible}>

    <div class="text">{$alertContent[1]}</div>

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
