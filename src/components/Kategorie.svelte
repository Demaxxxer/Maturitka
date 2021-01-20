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
                <td class="dropdown">
                    <button class="dropdownbtn"></button>
                    <i class="fa fa-caret-down"></i>
                    <div class="dropdown-content">
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
    }

    .dropdown button{
        width: 100%;
        height: 100%;
        background-size: 20px;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url('/images/Carecky.svg');
    }
    .dropdown{
        width: 126px;
        height: 100%;
        border-left: solid 2px var(--lightgrey);
        border-right: solid 2px var(--lightgrey);
        background-color: white;
    }
    .dropdown button{
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

    .navbar {
    overflow: hidden;
    background-color: #333;
    }

    .navbar a {
    float: left;
    font-size: 16px;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    }

    .dropdown {
    float: left;
    overflow: hidden;
    }

    .dropdown .dropbtn {
    font-size: 16px;  
    border: none;
    outline: none;
    color: white;
    padding: 14px 16px;
    background-color: inherit;
    font-family: inherit;
    margin: 0;
    }

    .navbar a:hover, .dropdown:hover .dropbtn {
    background-color: red;
    }

    .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    }

    .dropdown-content a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
    }

    .dropdown-content a:hover {
    background-color: #ddd;
    }

    .dropdown:hover .dropdown-content {
    display: block;
    }

    @media only screen and (max-width: 800px){

		.lista{
            position: fixed;
            top: 60px;
            height: 30px
        }

    }
    
</style>
