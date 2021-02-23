<script>
    import axios from 'axios';
    import { createEventDispatcher } from 'svelte';

    import { uzivatel, alertContent } from '../stores/stavy.js';

    export let userInfo;

  	const dispatch = createEventDispatcher();

    function setAdmin(e,id){

        axios({
          method: 'patch',
          url: '/api/user/admin',
          data: {
            id: id,
            value: e.target.checked
          }
        }).then(res => {

          console.log(res.data);
        }).catch(err => {
          console.log(err.response.data);
          //Vypsat error
        })




    }

    function dispatchDelete(id){
        dispatch('userDelete', {id});
    }

</script>

<div class="ohraniceni">
    <form>
        <div class="jmeno">{userInfo.fname} {userInfo.sname}</div>
        <div class="email">{userInfo.email}</div>
        {#if $uzivatel.email != userInfo.email}
          <input type="checkbox" id="admin" class="admin" checked={userInfo.isAdmin}
              on:input={e => setAdmin(e,userInfo._id)}>
          <button class="odstranit" on:click={_ => dispatchDelete(userInfo._id)}>╳</button>
        {/if}
    </form>
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

    .admin, .jmeno, .email, .odstranit{
        position: absolute;
        line-height: 50px;
    }
    .jmeno{
        left: 35px;
    }
    .email{
        left: 35%;
        transform: translateX(-50%);
    }
    .admin{
        left: 65%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);

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
