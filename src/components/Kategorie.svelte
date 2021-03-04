<script>
import axios from 'axios';
import { deleteCookie } from '../scripty/uzitecne.js'
import {push, pop, replace, location} from 'svelte-spa-router';
import { loginPopup, alertContent, uzivatel, cats, cart, cartUser } from '../stores/stavy.js';

function open(){
    loginPopup.update(_ => true);
}
function logout(){
  axios({
    method: 'post',
    url: '/api/user/logout',
  }).then(res => {
    uzivatel.update(_ => false);
    alertContent.update(_ => res);
    cartUser.update(_ => {
      return {
        fname: '',
        sname: '',
        email: '',
        payment: 'karta'
      }
    })
    deleteCookie('sessionToken');
    replace('/')
  }).catch(err => {
    alertContent.update(_ => err);
  })
}
function goToCatPage(cat){
  const url = '/produkty/' + cat;
  push(url);
}


const odkazy = [
    '/#/edit',
    '/#/seznam',
    '/#/seznamuzivatelu',

]
const editace = [
    'Přidávání produktů',
    'Seznam produktů',
    'Seznam uživatelů',

]



</script>

<div class="lista">
    <div class="podlista">
        <table cellspacing="0">
            <tr>
                <td class="dropdown">

                    <button>Kategorie</button>

                    <div class="cats">

                        {#each Object.keys($cats) as cat, i}
                        <a href={'/#/produkty/' + cat}>
                            <div class="cat">
                                {$cats[cat]}
                            </div>
                        </a>
                        {/each}

                    </div>
                </td>
                <td class="mezera"></td>
                <td class="login">
                    {#if $uzivatel}
                    <button>{$uzivatel.jmeno} {$uzivatel.prijmeni}</button>
                    <div class="edits">
                        {#if $uzivatel.perms}
                        {#each editace as edit, i}
                        <a href={odkazy[i]}>
                            <div class="edit">
                                {edit}
                            </div>
                        </a>
                        {/each}
                        {/if}
                        <a href="/#/profil"><button>
                            <div class="edit">Profil</div>
                        </button></a>
                        <button on:click={_ => logout()}>
                            <div class="edit">Odhlásit se</div>
                        </button>

                    </div>
                    {:else}
                    <button on:click={_ => open()}>Přihlásit se</button>
                    {/if}
                </td>
            </tr>
        </table>
    </div>
</div>


<style>
    .lista{
        position: fixed;
        z-index: 10;
        top: 80px;
        left: 0;
        width: 100%;
        height: 40px;
        background-color: white;
        box-shadow: 0px 3px 5px rgba(10, 10, 10, 0.3);
    }

    .dropdown button{
        width: 100%;
        height: 100%;
        background-size: 20px;
        background-image: url('/images/Carecky.svg');
        background-position: center left 25%;
        background-repeat: no-repeat;
        text-align: center;
        font-size: 1.2em;
        padding-left: 30px;
    }
    .dropdown{
        position: relative;
        width: 220px;
        height: 100%;
        background-color: white;
    }
    .dropdown:hover .cats{
        display: block;
    }
    .dropdown button{
        background-color: white;
    }

    .cat{
        color: var(--grey);
        font-family: roboto;
        padding: 10px;
        text-align: center;

    }
    .cat:hover{
        background: rgb(230, 230, 230)
    }
    .cats{
        position: absolute;
        background: white;
        width: 225px;
        display: none;
        right: -3px;
        top: 40px;
    }
    .login button{
        background-color: white;
        font-family: roboto;
        height: 100%;
        width: 100%;
        font-size: 1.2em;
        margin: 0 auto;
    }
    .login{
        position: relative;
        right: 0;
        width: 200px;
        height: 100%;
        background: white;
    }

    .login:hover .edits{
        display: block;
    }
    .edit{
        color: var(--grey);
        font-family: roboto;
        text-align: center;
        font-size: 1rem;
        padding: 10px;
    }
    .edit:hover{
        background: rgb(230, 230, 230)
    }
    .edits{
        color: var(--darkgrey);
        position: absolute;
        background: white;
        width: 206px;
        display: none;
        left: -4px;
        top: 40px;

    }
    .podlista{
        max-width: 1200px;
		width: 100%;
		height: 100%;
        margin: 0 auto;
        background-color: white;
    }
    table{
        width: 100%;
        Height: 100%;
    }



    @media only screen and (max-width: 800px){

		.lista{
            position: fixed;
            top: 60px;
            height: 40px;
        }
        .dropdown{
            width: 110px;

        }
        .dropdown button{
            background-position: center left 10%;
            font-size: 1em;
        }
        .cat{
            font-size: 0.9rem;
        }
        .cats{
            width: 110px;
            top: 40px;
            right: 3px;

        }
        .login{
            width: 150px;
        }
        .login button{
            font-size: 1em;
        }
        .edit{
            font-size: 0.9rem;
        }
        .edits{
            width: 150px;
            top: 40px;
            left: 4px;
        }

    }

</style>
