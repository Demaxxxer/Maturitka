<script>
    const zalozky = [
        {name: 'Hry', ev: 'test'},
        {name: 'Konzole', ev: 'test'},
        {name: 'Příslušenství', ev: 'test'},
        {name: 'PC', ev: 'test'},
        {name: 'VR', ev: 'test'},
    ]
</script>

<div class="lista">
    <div class="podlista">
        <table cellspacing="0">
            <tr>
                <td class="kategorie"><button></button></td>
                {#each zalozky as zalozka}
                    <td class="odrazky">
                        <button>
                            {zalozka.name}
                        </button>
                    </td>
                    
                {/each}         
                <td class="registr">
                    <a href="/#/prihlaseni">
                        <button>Účet</button>
                    </a>
                </td>
            </tr>
        </table>
    </div>
</div>

<style>
    .lista{
        position: fixed;
        top: 80px;
        left: 0;
        width: 100%;
        height: 40px;
        background: var(--lightgrey);
    }

    .odrazky:nth-child(2){
        border-left: solid 2px var(--darkergrey);
    }
    .kategorie{
        display: none;
        width: 100%;
        height: 100%;

    }
    .kategorie button{
        width: 40px;
        height: 100%;
        background-size: 20px;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url('/images/Carecky.svg');
        border-right: solid 2px var(--darkergrey); 
    }
    .podlista{
        max-width: 1000px;
		width: 100%;
		height: 100%;
		margin: 0 auto;
    }
    table{
        width: 100%;
        Height: 100%;
    }
    .odrazky, .registr{
        font-family: robotothic;
        width: calc(100% / 6);
        text-align: center;
        border-right: solid 2px var(--darkergrey);
    }


    .odrazky button, .registr button{
        font-size: 1.1em;
        width: 100%;
        height: 100%;
    }
    .registr button{
        background-size: 20px;
        background-position: center right 20%;
        background-repeat: no-repeat;
        background-image: url('/images/User.png');
    }
    @media only screen and (max-width: 800px){

		.lista{
            position: fixed;
            top: 60px;
            height: 30px
        }
        .odrazky{
            display: none;
        }

        .kategorie{
            display: block;
            
        }
        
        .registr{

            font-size: 0.8em;
            border-right: 0; 
            border-left: solid 2px var(--darkergrey);
            min-width: 100px;
        }
        .registr button{
            background-position: center right 15px;
            background-size: 14px;
        }
    }
    
</style>
