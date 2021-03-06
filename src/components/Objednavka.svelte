<script>
    import {nf} from '../scripty/uzitecne.js'
    export let udaje;

    function countAll(obj){
      let count = 0;
      obj.content.forEach(i => {
        count += i.count;
      });
      return count;
    }

    function getFormatedDate(obj){
      const time = new Date(obj.createdAt)
      return `${time.getDate()}.${time.getMonth() + 1}.${time.getFullYear()}`;
    }

    $: date = getFormatedDate(udaje)
    $: trueCount = countAll(udaje)

</script>

<button class="faktura">
    <div class="objednavka">
        <div class="datum">{date}</div>
        <div class="pocet">{trueCount} Kusů</div>
        <div class="cena">{udaje.cost} Kč</div>
    </div>
</button>

<style>

    .objednavka{
        position: relative;
        max-width: 940px;
        height: 50px;
        background-color: var(--darkgrey);
        border-radius: 10px;
        margin: 10px auto 20px auto;
        box-sizing: border-box;
    }
    .datum, .pocet, .cena{
        position: absolute;
        line-height: 50px;
    }
    .datum{
        left: 35px;
    }
    .pocet{
        left: 50%;
        transform: translateX(-50%);
    }
    .cena{
        right: 35px;
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
        }

    }
    @media only screen and (max-width: 440px){
        .objednavka{
            width: 330px;
        }

    }

</style>
