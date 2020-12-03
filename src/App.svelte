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
    <Router {routes}/>
    <Footer />
</main>

<style>

</style>
