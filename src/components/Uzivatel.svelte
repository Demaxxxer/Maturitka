<script>


    import {uzivatel} from '../stores/stavy.js'

    function odstranit(id){
        let novyUzivatel = [...$uzivatel];
        noveUzivatel=noveUzivatel.filter(uzivatel => {return uzivatel.id != id});
        kosik.update(_ => uzivatel);
    }
    
</script>

<div class="ohraniceni">
    <div class="jmeno">{$uzivatel.jmeno} {$uzivatel.prijmeni}</div>
    <div class="email">{$uzivatel.email}</div>
    <button class="odstranit" on:click={_ => odstranit(uzivatel.id)}>╳</button>
</div>

<style>

    .ohraniceni{
        position: relative;
        width: 940px;
        height: 50px;
        background-color: var(--darkgrey);
        border-radius: 10px;
        margin: 20px auto 20px auto;
    }

    .id, .jmeno, .email, .odstranit{
        position: absolute;
        line-height: 50px;
    }
    .jmeno{
        left: 35px;
    }
    .email{
        left: 50%;
        transform: translateX(-50%);
    }

    .odstranit{
        right: 75px;
        color: var(--text);
    }
    

    @media only screen and (max-width: 1200px){
        .ohraniceni{
            width: 760px;
            margin: 20px auto;
        }
        
    }
    @media only screen and (max-width: 800px){
        .ohraniceni{
            width: 400px;
            margin: 20px auto;
        }
        
    }

</style>