<script>
import Router from 'svelte-spa-router';
import routes from './routes';
import Menu from './components/Menu.svelte';
import Footer from './components/Footer.svelte';
import Kategorie from './components/Kategorie.svelte';

</script>


<main>
    <Menu />
    <Kategorie />
    <div class="wrapper">
        <div class="hero">
            <Router {routes}/>
        </div>
        <Footer />
    </div>

</main>

<style>
    
    .wrapper{
        position: absolute;
        top: var(--menuHeight);
        right: -5px;
        overflow-y: auto;
        width: 100vw;
        height: calc(100vh - var(--menuHeight));
    }

    .wrapper::-webkit-scrollbar{
        //position: absolute;
    }

    .hero{
        background: var(--grey);
        max-width: 1000px;
        margin: 0 auto;
        min-height: calc(100vh - var(--sumasumarum));
        box-sizing: border-box;
    }

</style>
