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

<div class="objednavka">
    <div class="id">To tu nebude</div>
    <div class="datum">{date}</div>
    <div class="pocet">{trueCount} Kusů</div>
    <div class="cena">{udaje.cost} Kč</div>
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
        box-sizing: border-box;
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
    @media only screen and (max-width: 440px){
        .objednavka{
            width: 330px;
            margin: 10px auto;
            padding: 10px;
        }

    }

</style>
