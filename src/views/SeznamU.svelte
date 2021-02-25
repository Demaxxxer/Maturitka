<script>
    import axios from 'axios';
    import { onMount } from 'svelte';
    import Uzivatel from '../components/Uzivatel.svelte';


    let users = [];
    let loaded = false;

    let search = {
      fname: '',
      sname: '',
      email: '',
      isAdmin: false,
    }

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

    function handleUserSearch(){
      axios({
        method: 'get',
        url: '/api/user/get',
        params: {
          fname: search.fname,
          sname: search.sname,
          email: search.email,
          isAdmin: search.isAdmin,
        }
      }).then(res => {
        users = res.data
      }).catch(err => {
        //Muže nastat chyba vyhledání v databázi
      })

    }

    function handleDelete(props){
        axios({
          method: 'delete',
          url: '/api/user/delete',
          data: {
            id: props.detail.id
          }
        }).then(res => {
          users = users.filter(user => user._id != props.detail.id);
        }).catch(err => {
          //Uživatel tu nemá co dělat
        })
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
    <form on:submit|preventDefault={handleUserSearch}>
        <div class="ohraniceni1">
            <div class="nadpis">Seznam uživatelů</div>

            <label class="jmeno" for="jmeno-input">Jméno</label>
            <input type="text" class="hodnota1" id="jmeno-input" bind:value={search.fname}><br>

            <label class="prijmeni" for="prijmeni-input">Přijmení</label>
            <input type="text" class="hodnota2" id="prijmeni-input" bind:value={search.sname}><br>

            <label class="email" for="email-input">Email</label>
            <input type="text" class="hodnota3" id="email-input" bind:value={search.email}><br>

            <label class="admin" for="admin-input">Admin</label>
            <input type="checkbox" class="hodnota4" id="admin-input" bind:checked={search.isAdmin}><br>

            <div>
                <button type="submit" class="hledat">Hledat</button>
            </div>
        </div>
        <div class="ohraniceni2">
            <div class="j">Jméno a Přijmení</div>
            <div class="e">Email</div>
            <div class="a">Administrativa</div>
            <div class="o">Odstranit</div>
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
        height: 100%;
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

  .hledat{
        margin: 0 auto;
        height: 40px;
        width: 150px;
        border: solid 1px var(--grey);
        background-color: var(--yellow);
        border-radius: 10px;
        font-size: 1.3em;
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
            margin: 20 auto;

        }
        .ohraniceni2{

        }

    }


</style>
