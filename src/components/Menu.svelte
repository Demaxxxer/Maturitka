<script>
    let search = '';

    function goFind(e){
      console.log('Vyheldať: ' + search)
    }

</script>

<div class="lista1">
    <table cellspacing="0">
        <tr>
            <td>
				<div class="bagoshop">
					<button>

					</button>
				</div>
			</td>
            <td class="obal">
                <div class="vyhledavani">
                    <input type="text"
                        bind:value={search}
                        on:keyup={e => e.key == 'Enter' && goFind(e)}
                        placeholder="Hledat">
                    <button class="hledat" on:click={e => goFind(e)}></button>
                </div>
            </td>
			<td class="kosik"><a href="/#/kosik"><button>Košík</button></a></td>
			<!--<td class="mezera"><div></div></td>-->
        </tr>
    </table>
</div>

<style>
	.lista1{
		position: fixed;
		z-index: 10;
		top: 0;
		left: 0;
		width: 100%;
		height: 80px;
		background-color: var(--darkgrey);
	}
	table{
		max-width: 1200px;
		width: 100%;
		height: 100%;
		margin: 0 auto;
	}
	.bagoshop{
		margin-left: 10px;
		width: 20%;

	}
	.bagoshop button{
		background: none;
		width: 210px;
		height: 37px;

	}
	.bagoshop button::after{
		content: "BAGOSHOP";
		font-size: 3em;
		padding: 10px 0 0 5px;
		box-sizing: border-box;
		font-family: fontLOGO;
		color: var(--yellow);
	}
	.obal{
		width: 60%;
		max-width: 600px;
		padding: 0px 15px;
		box-sizing: border-box;
	}
	.vyhledavani{
		border-bottom: solid 1px white;
		box-sizing: border-box;
		width: 100%;
		height: 30px;
		max-width: 450px;
		margin: 0 auto;
	}
	.hledat{
		background: none;
		width: 20px;
		height: 100%;
		float: right;
		background-image: url('/images/Lupa.svg');
		background-repeat: no-repeat;
		background-position: center left;
		background-size: 15px;
		box-sizing: border-box;

	}
	.vyhledavani input {
		box-sizing: border-box;
		color: white;
		padding: 0 5px 0 2px;
		width: calc(100% - 30px);
		height: 100%;
		float: left;
	}
	.vyhledavani input::placeholder{
		font-size: 1.2em;
	}
	.kosik{
		width: 130px;

	}

	.kosik a button{
		height: 30px;
		background-image: url('/images/Kosik.svg');
		background-repeat: no-repeat;
		background-size: 30px;
		background-position: right center;
		font-size: 1.6em;
		color: var(--text);
		padding-right: 40px;
		margin: 0 auto;

	}


	/*.mezera{
		width: 2%;
		background: none;
	}*/


	@media only screen and (max-width: 800px){
		.bagoshop button{
			width: 100%;
			height: 100%;
			background-size: 50px;
			background-position: center;
			background-repeat: no-repeat;
			background-image: url('/images/Console.svg');
			padding: 0 16px;
		}
		.bagoshop button::after{
			content: " ";
		}

		.lista1{
			height: 60px;
		}
	}
</style>
