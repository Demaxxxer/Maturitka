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

                {#each zalozky as zalozka}
                    <td>
                        <button>
                            {zalozka.name}
                        </button>
                    </td>
                {/each}
                <td><button>Registrace</button></td>

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
    td:nth-child(1){
        border-left: solid 2px var(--darkergrey);
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
    td{
        font-family: robotothic;
        width: calc(100% / 6);
        text-align: center;
        border-right: solid 2px var(--darkergrey);
    }
    td button{
        font-size: 1.1em;
        width: 100%;
        height: 100%;
    }
    @media only screen and (max-width: 700px){

		.lista{
            position: fixed;
            top: 60px;
            height: 30px
        }
	}
</style>
