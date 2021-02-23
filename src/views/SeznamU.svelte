<script>
    import axios from 'axios';
    import { onMount } from 'svelte';
    import Uzivatel from '../components/Uzivatel.svelte';


    let users = [];
    let loaded = false;

    onMount(_ => {
      axios({
        method: 'get',
        url: '/api/user/get',
      }).then(res => {
        users = res.data;
        loaded = true;
      }).catch(err => {
        //Uživatel tu nemá co dělat
      })
    });

    function handleDelete(props){
        users = users.filter(user => user._id != props.detail.id);
    }

    /*
    function odstranit(id){
        let novyUzivatel = [...$uzivatel];
        noveUzivatel=noveUzivatel.filter(uzivatel => {return uzivatel.id != id});
        kosik.update(_ => uzivatel);
    }
    */

</script>
<main>
    <form>
        <div class="ohraniceni1">
            <div class="nadpis">Seznam uživatelů</div>

            <label class="jmeno" for="jmenou">Jméno</label>
            <input type="text" class="hodnota1" name="jmenou"><br>

            <label class="prijmeni" for="prijmeniu">Přijmení</label>
            <input type="text" class="hodnota2" name="prijmeniu"><br>

            <label class="email" for="emailu">Email</label>
            <input type="email" class="hodnota3" name="emailu"><br>

            <label class="admin" for="admin">Admin</label>
            <input type="checkbox" class="hodnota4" name="admin"><br>



        </div>
        <div class="ohraniceni2">
            <div class="j">Jméno a Přijmení</div>
            <div class="e">Email</div>
            <div class="a">Administrativa</div>
            <div class="o">Odtranit</div>



        </div>
    </form>
    {#if loaded}
        {#each users as user}
          <Uzivatel userInfo={user} on:userDelete={handleDelete}></Uzivatel>
        {/each}
    {/if}
</main>
<style>
    main{
        padding: 5px 0 15px;
    }
    .ohraniceni1{
        position: relative;
        width: 940px;
        height: 160px;
        padding: 10px 0;
        margin: 0 auto;
        background-color: var(--darkgrey);
        border-radius: 10px;
        line-height: 30px;

    }
    .ohraniceni2{
        position: relative;
        width: 940px;
        height: 50px;
        margin: 0 auto;
        background-color: var(--darkgrey);
        border-radius: 10px;
        line-height: 50px;
        margin-top: 20px;

    }
    .nadpis{
        font-size: 1.4em;
        margin-bottom: 10px;
        padding-left: 20px;
    }
    .jmeno, .prijmeni, .admin, .email{
        padding-left: 20px;
    }
    .hodnota1, .hodnota2, .hodnota3, .hodnota4{
        border-bottom: solid 1px var(--text);
        position: absolute;
        margin-top: 3px;
        left: 150px;
    }
    .hodnota4{
        margin-top: 5px;
    }

    .a, .j, .e, .o{
        position: absolute;
        line-height: 50px;
    }
    .j{
        left: 35px;
    }
    .e{
        left: 35%;
        transform: translateX(-50%);
    }
    .a{
        left: 65%;
        transform: translateX(-50%);
    }
    .o{
        right: 50px;
    }


    @media only screen and (max-width: 1200px){
        .ohraniceni1, .ohraniceni2{
            width: 760px;
            margin: 20px auto;
        }
        main{
            padding-bottom: 20px;
        }

    }
    @media only screen and (max-width: 800px){
        .ohraniceni1, .ohraniceni2{
            width: 400px;
            margin: 20px auto;
        }

    }


</style>
