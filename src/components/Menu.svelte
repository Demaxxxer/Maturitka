<script>
    let search = '';

    function goFind(e){
      console.log('Vyheldať: ' + search)
    }

</script>

<div class="lista1">
    <table cellspacing="0">
        <tr>
            <td class="bagoshop"></td>
            <td class="obal">
                <div class="vyhledavani">
                    <input type="text"
                        bind:value={search}
                        on:keyup={e => e.key == 'Enter' && goFind(e)}
                        placeholder="Hledat hry, konzole...">
                    <button class="hledat" on:click={e => goFind(e)}>Hledat</button>
                </div>
            </td>
            <td class="kosik"><button>Košík</button></td>
        </tr>
    </table>
</div>

<style>
.lista1{
			 position: fixed;
			 top: 0;
			 left: 0;
			 width: 100%;
			 height: 100px;
			 background-color: var(--darkgrey);
	 }

	 table{
			 max-width: 1000px;
			 width: 100%;
			 height: 100%;
			 margin: 0 auto;
	 }


	 /*.bagoshop{
			 box-sizing: border-box;
			 font-family: fontLOGO;
			 color: var(--yellow);

	 }*/

	 .bagoshop::after{
			 content: "BAGOSHOP";
			 font-size: 3.5em;
			 padding: 10px 20px 0 0;
			 box-sizing: border-box;
			 font-family: fontLOGO;
			 color: var(--yellow);
	 }

	 .obal{
			 width: 100%;
	 }

	.vyhledavani{
		box-sizing: border-box;
		width: 100%;
		padding: 15px 10px 0 0;
		margin: 0 auto;
		max-width: 300px;

	}

	.hledat{
		background: none;
		width: 50px;
		float: right;
		text-align: right;
		border-bottom: solid 1px white;
		color: white;
		background-image: url('/images/Lupa.svg');
		background-repeat: no-repeat;
		background-position: center left;
		background-size: 11px;
		box-sizing: border-box;
	}

	.vyhledavani input {
		box-sizing: border-box;
		border-bottom: solid 1px white;
		color: white;
		padding: 0 10px 0px 2px;
		width: calc(100% - 50px);
		float: left;
	}

	 .kosik{
			 box-sizing: border-box;
	}

	 .kosik button{
			 height: 100%;
			 color: white;
			 font-size: 1.5rem;
			 padding: 0 5px 0 25px;
			 background: none;
			 background-image: url('/images/Kosik.svg');
			 background-repeat: no-repeat;
			 background-position: center left;
			 background-size: 25px;
	 }

	 @media only screen and (max-width: 800px){
			 .bagoshop{
					 width: 20%;
					 height: 100%;
					 background-size: 50px;
					 background-position: center;
					 background-repeat: no-repeat;
					 background-image: url('/images/Console.svg');
					 padding: 0 16px;
			 }
			 .bagoshop::after{
					 content: " ";
			 }

			 .kosik{
					 font-size: 0.6em;
			 }
			 /*.kosik button{
					 background-size: 20px;
			 }*/
			 .lista1{
					 height: 60px;
			 }
	 }
</style>
