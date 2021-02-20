<script>
  import PolozkaHS from '../components/PolozkaHS.svelte'
  import PolozkaTOP from '../components/PolozkaTOP.svelte'

</script>
<main>
  <div class="ohraniceni1">
    <dit class="text">Top produkty týdne</dit>
    <PolozkaTOP></PolozkaTOP>
  </div>
  <div>
    <div class="ohraniceni2">Nejprodávanější akční hry</div>
    <PolozkaHS></PolozkaHS>
    <div class="ohraniceni3">Nejprodávanější simulátory</div>
    <PolozkaHS></PolozkaHS>
    <div class="ohraniceni4">Nejprodávanější závodní hry</div>
    <PolozkaHS></PolozkaHS>
  </div>
    

</main>

<style>
  .ohraniceni1{
    background-color: var(--darkgrey);
    border-radius: 10px;
    height: 350px;
    width: 940px;
    margin: 0 auto;
    margin-top: 10px;    
    margin-bottom: 20px;
    padding: 10px 10px 5px;

  }
  .ohraniceni1, .text{
    font-size: 1.2em;
    text-align: center;
    padding-bottom: 10px;
  }


  .ohraniceni2, .ohraniceni3, .ohraniceni4{
    background-color: var(--darkgrey);
    border-radius: 10px;
    height: 50px;
    width: 940px;
    margin: 0 auto;
    font-size: 1.3em;
    margin-top: 10px;
    text-align: center;
    line-height: 50px;
  }

  @media only screen and (max-width: 1200px){
        .ohraniceni1, .ohraniceni2, .ohraniceni3, .ohraniceni4{
            width: 880px;
            margin: 20px auto;
        }
        main{
            padding-bottom: 20px;
        }
        
    }
    @media only screen and (max-width: 940px){
      .ohraniceni1, .ohraniceni2, .ohraniceni3, .ohraniceni4{
            width: 400px;
            margin: 20px auto;
        }
        
    }

    
</style>
