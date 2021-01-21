<script>
    import { loginPopup } from '../stores/stavy.js';

function open(){
    loginPopup.update(_ => true);
}
const links = [
    '/#/test',
    '/#/test',
    '/#/test',
    '/#/test',
    '/#/test',
]
const categories = [
    'Akční hry',
    'Simulátory',
    'Závodní hry',
    'Strategie',
    'Logické hry',
]
</script>

<div class="lista">
    <div class="podlista">
        <table cellspacing="0">
            <tr>
                <td class="dropdown">

                    <button>Kategorie</button>
                
                    <div class="cats">
                        {#each categories as category, i}
                        <a href={links[i]}>
                            <div class="cat">
                                {category}
                            </div>
                        </a>
                        {/each}
                    </div>

                </td>
                <td class="mezera"></td>
                <td class="login">
                    <button on:click={_ => open()}>Přihlásit se</button>
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
        border-bottom: solid 1px var(--lightgrey);
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
        border-left: solid 2px var(--lightgrey);
        border-right: solid 2px var(--lightgrey);
        background-color: white;
    }
    .dropdown:hover .cats{
        display: block;
    }
    .dropdown button{
        background-color: white;
    }
    .cats{
        position: absolute;
        background: white;
        width: 225px;
        display: none;
        left: -2px;
        top: 40px;
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
    .login{
        width: 126px;
        height: 100%;
        border-left: solid 2px var(--lightgrey);
        border-right: solid 2px var(--lightgrey);
        background: white;
    }
    .login button{
        background-color: white;
        font-family: roboto;
        height: 100%;
        width: 100%;
        font-size: 1.2em;
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
    .login button{
        margin: 0 auto;
    }
    


    @media only screen and (max-width: 800px){

		.lista{
            position: fixed;
            top: 60px;
            height: 30px
        }

    }
    
</style>
