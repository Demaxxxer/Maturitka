<script>
import Router from 'svelte-spa-router';
import routes from './routes';
import Menu from './components/Menu.svelte';
import Footer from './components/Footer.svelte';
import Kategorie from './components/Kategorie.svelte';
import Login from './components/Login.svelte';
import Registrace from './components/Registrace.svelte';

</script>


<main>
    <Menu />
    <Kategorie />
    <div class="wrapper">
        <div class="pozadi">
            <Router {routes}/>
        </div>
    </div>
    <Footer />
    <Login />
    <Registrace />
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

    @media only screen and (max-width: 800px){
        .wrapper{
            margin-top: 90px;
            min-height: 100%;
        }
        .pozadi{
            
            box-sizing: border-box;
            padding-top: 15px;

            min-height: calc(100vh - 190px);


        }
    }


</style>