<script>
    import { loginPopup } from '../stores/stavy.js';

function open(){
    loginPopup.update(_ => true);
}
</script>

<div class="lista">
    <div class="podlista">
        <table cellspacing="0">
            <tr>
                <td class="carky">
                    <button></button>
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
    }

    .carky button{
        width: 100%;
        height: 100%;
        background-size: 20px;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url('/images/Carecky.svg');
    }
    .carky{
        width: 126px;
        height: 100%;
        border-left: solid 2px var(--lightgrey);
        border-right: solid 2px var(--lightgrey);
        background-color: white;
    }
    .carky button{
        background-color: white;
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
