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
        <Router {routes}/>
    </div>

    <Footer />
</main>

<style>
    .wrapper{
        margin-top: 120px;
        width: 100vw;
        height: 100%;
        min-height: calc(100vh - 220px);
    }


</style>