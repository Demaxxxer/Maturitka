<script>
    import { potvrzeniPopup } from '../stores/stavy.js';

    function close(){
        potvrzeniPopup.update(_ => false);
    }
</script>

<div class="ohraniceni" active={$potvrzeniPopup}>

    <div class="backdrop" on:click={_ => close()}></div>
    <form class="formular">

        <button class="krizek" on:click={_ => close()}>╳</button>

        <div class="registrace">Byli jste úspěšně zaregistováni.</div>           
        
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
        margin: 0 auto;

    }
    
</style>
