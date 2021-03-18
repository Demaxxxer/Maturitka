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
import Produkty from './views/Produkty.svelte';
import Profil from './views/Profil.svelte';
import Kupovani from './views/Kupovani.svelte';
/* Import pro statické komponenty */
import { scrollEvent,uzivatel,cart,cartUser } from './stores/stavy.js';
import Menu from './components/Menu.svelte';
import Footer from './components/Footer.svelte';
import Kategorie from './components/Kategorie.svelte';
import Login from './components/Login.svelte';
import Registrace from './components/Registrace.svelte';
import Alert from './components/Alert.svelte';

let loaded = false;

function scrollFunction(e) {
  let h = window.pageYOffset + window.innerHeight
  if(h >= document.body.scrollHeight){
    scrollEvent.update(_ => true)
  }
}


onMount(_ => {
  window.onscroll = scrollFunction;
  /* Vybírá košík z cookies a dává ho do store pro lechčí manipulaci */
  const savedCart = getCookie('cart');
  if(savedCart){
    try {
      cart.update(_ => JSON.parse(savedCart));
    } catch {
      deleteCookie('cart');
    }
  }
  /* Při načítání stránky kontroluje žeton uživatele */
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
    cartUser.update(obj => {
      obj.fname = res.data.fname;
      obj.sname = res.data.sname;
      obj.email = res.data.email;
      return obj;
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
  '/produkty': Produkty,
  '/produkty/:cat': Produkty,
  '/profil': wrap(userGuard(Profil)),
  '*': NotFound,
}

</script>


<main id="container">
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

    @keyframes pozadi-anim {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
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
        animation: pozadi-anim 0.2s linear;
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
