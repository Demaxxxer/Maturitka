<script>
    import { potvrzeni } from '../stores/stavy.js';

    function close(){
        potvrzeni.update(_ => false);
    }
</script>

<div class="zprava" error="true">

    <div class="text">Uživatel s tímto jménem už je zaregistrovaný!</div> 

    <button class="krizek" on:click={_ => close()}><b>╳</b></button>
</div>  


<style>
    .krizek{
        position: absolute;
        color: black;
        line-height: 50px;
        right: 20px;
        
    }
    .text{
        position: absolute;
        color: black;
        line-height: 50px;
        left: 20px;
    }
    
    .zprava{
        color: black;
        position: fixed;
        z-index: 31;
        width: 600px;
        height: 50px;
        background-color: #c6ffb3;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
        left: 50%;
        transform: translateX(-50%);
        top: 120px;
    }
    .zprava[error="true"]{
        background-color: #fe4d4d;

    }
    
    @media only screen and (max-width: 800px){
        .zprava{
            top: 90px;
        }

    }
    
</style>
