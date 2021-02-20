<script>
    import {nf} from '../scripty/uzitecne.js'
    export let udaje;
    
</script>

<div class="objednavka">
    <div class="id">{udaje.id}</div>
    <div class="datum">{udaje.datum}</div>
    <div class="pocet">{udaje.kusy} Kusů</div>
    <div class="cena">{udaje.cena} Kč</div>
</div>

<style>

    .objednavka{
        position: relative;
        max-width: 940px;
        height: 50px;
        background-color: var(--darkgrey);
        border-radius: 10px;
        margin: 10px auto 20px auto;
        padding: 5px 35px 5px 35px;
    }

    .id, .datum, .pocet, .cena{
        position: absolute;
        line-height: 50px;      

    }
    .id{
        left: 35px;
    }
    .datum{
        left: 35%;
        transform: translateX(-50%);
    }
    .pocet{
        left: 65%;
        transform: translateX(-50%);
    }
    .cena{
        right: 50px;
    }
    

    @media only screen and (max-width: 1200px){
        .objednavka{
            width: 700px;
            margin: 20px auto;
        }
        
    }
    @media only screen and (max-width: 800px){
        .objednavka{
            width: 400px;
            margin: 20px auto;
        }
        
    }

</style>