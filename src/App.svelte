<script>
import axios from 'axios';
import Router from 'svelte-spa-router';
import {push, pop, replace} from 'svelte-spa-router';
import { onMount } from 'svelte';
import { wrap } from 'svelte-spa-router/wrap';
import { getCookie,setCookie,deleteCookie } from './scripty/uzitecne.js';
/* Import pro router */
import Home from './views/Home.svelte';
import NotFound from './views/NotFound.svelte';
import Polozka from './views/Polozka.svelte';
import Dokoncit from './views/Dokoncit.svelte';
import Edit from './views/Edit.svelte';
import Seznam from './views/Seznam.svelte';
import SeznamU from './views/SeznamU.svelte';
import Vyhledani from './views/Vyhledani.svelte';
import Produkty from './views/Produkty.svelte';
import Profil from './views/Profil.svelte';
import Kupovani from './views/Kupovani.svelte';
/* Import pro statické komponenty */
import { uzivatel,cart } from './stores/stavy.js';
import Menu from './components/Menu.svelte';
import Footer from './components/Footer.svelte';
import Kategorie from './components/Kategorie.svelte';
import Login from './components/Login.svelte';
import Registrace from './components/Registrace.svelte';
import Alert from './components/Alert.svelte';

let loaded = false;


onMount(_ => {
  /* Vybírá košík z cookies a dává ho do store pro lechčí manipulaci */
  const savedCart = getCookie('cart');
  try {
    cart.update(_ => JSON.parse(savedCart));
  } catch {
    deleteCookie('cart');
  }

  /* Při načítání stránky kontroluje zěton uživatele */
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

function adminGuard(comp){
  return {
    component: comp,
    conditions: [
      (detail) => {
          return $uzivatel.perms
      }
    ]
  }
}

function userGuard(comp){
  return {
    component: comp,
    conditions: [
      (detail) => {
          return $uzivatel
      }
    ]
  }
}



const routes = {
  '/': Home,
  '/kosik': Kupovani,
  '/kosik/:op': Kupovani,
  '/polozka/:id': Polozka,
  '/dokoncit': Dokoncit,
  '/edit': wrap(adminGuard(Edit)),
  '/edit/:id': wrap(adminGuard(Edit)),
  '/seznam': wrap(adminGuard(Seznam)),
  '/seznamuzivatelu': wrap(adminGuard(SeznamU)),
  '/vyhledani': Vyhledani,
  '/produkty': Produkty,
  '/produkty/:cat': Produkty,
  '/profil': wrap(userGuard(Profil)),
  '*': NotFound,
}

</script>


<main>
    {#if loaded}
        <div class="warn-wrap">
          <div class="warn-cont">
            <div>Pozor!</div>
            <div>Toto není opravdový e-shop.</div>
          </div>
        </div>
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
    .warn-wrap {
        position: fixed;
        bottom: 0;
        left: -110px;
        width: 100px;
        height: 100px;
        z-index: 12;
    }

    .warn-cont {
        width: 250px;
        height: 30px;
        background: var(--darkgrey);
        color: var(--yellow);
        font-size: 0.8em;
        border: dashed 2px rgba(255,0,0,0.7);
        padding: 5px 60px;
        text-align: center;
        transform: rotate(45deg);
    }

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
