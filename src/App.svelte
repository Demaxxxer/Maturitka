<script>
import axios from 'axios';
import Router from 'svelte-spa-router';
import {push, pop, replace} from 'svelte-spa-router'
import { onMount } from 'svelte';
import { wrap } from 'svelte-spa-router/wrap'
/* Import pro router */
import Home from './views/Home.svelte'
import NotFound from './views/NotFound.svelte'
import Kosik from './views/Kosik.svelte'
import Platba from './views/Platba.svelte'
import Souhrn from './views/Souhrn.svelte'
import Polozka from './views/Polozka.svelte'
import Dokoncit from './views/Dokoncit.svelte'
import Edit from './views/Edit.svelte'
import Seznam from './views/Seznam.svelte'
import SeznamU from './views/SeznamU.svelte'
import Vyhledani from './views/Vyhledani.svelte'
import Profil from './views/Profil.svelte'
/* Import pro statické komponenty */
import { uzivatel } from './stores/stavy.js';
import Menu from './components/Menu.svelte';
import Footer from './components/Footer.svelte';
import Kategorie from './components/Kategorie.svelte';
import Login from './components/Login.svelte';
import Registrace from './components/Registrace.svelte';
import Alert from './components/Alert.svelte';

let loaded = false;

/* Při načítání stránky kontroluje zěton uživatele */
onMount(_ => {
  axios({
    method: 'get',
    url: '/api/user/loged',
  }).then(res => {
    uzivatel.update(_ => {
      return {
        jmeno: res.data.fname,
        prijmeni: res.data.sname,
        email: res.data.email,
        perms: res.data.isAdmin,
      }
    });
    loaded = true;
  }).catch(err => {
    loaded = true;
    //Uživatel nemá platný žeton
  })
});

function handleAccess(){
  replace('/')
}

const routes = {
  '/': Home,
  '/kosik': Kosik,
  '/platba': Platba,
  '/souhrn': Souhrn,
  '/polozka': Polozka,
  '/dokoncit': Dokoncit,
  '/edit': wrap({
        component: Edit,
        conditions: [
          (detail) => {
              return $uzivatel.perms
          }
        ]
    }),
  '/seznam': Seznam,
  '/seznamuzivatelu': SeznamU,
  '/vyhledani': Vyhledani,
  '/profil': wrap({
        component: Profil,
        conditions: [
          (detail) => {
              return $uzivatel
          }
        ]
    }),
  '*': NotFound,
}

</script>


<main>
    {#if loaded}
        <Alert />
        <Menu />
        <Kategorie />
        <div class="wrapper">
            <div class="pozadi">
                <Router {routes} on:conditionsFailed={handleAccess} />
            </div>
        </div>
        <Footer />
        <Login />
        <Registrace />
    {/if}
</main>

<style>

    .wrapper{
        width: 100%;
        height: 100%;
        margin-top: 140px;

    }
    .pozadi{
        background-color: var(--grey);
        width: 100%;
        height: 100%;
        min-height: calc(100vh - 260px);
        max-width: 1200px;
        margin: 0 auto;
        box-sizing: border-box;
        padding-top: 15px;
        /*padding-bottom: 15px;*/
    }
    @media only screen and (max-width: 1200px){
        .wrapper{
            margin-top: 105px;
            min-height: 100%;
            padding-top: 15px;
        }
        .pozadi{

            box-sizing: border-box;
            min-height: calc(100vh - 190px);
        }
    }
    @media only screen and (max-width: 800px){
        .wrapper{
            margin-top: 75px;
        }

    }

</style>
