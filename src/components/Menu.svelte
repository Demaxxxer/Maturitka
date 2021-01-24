<script>
    let search = '';

    function goFind(e){
      console.log('Vyheldať: ' + search)
    }

</script>

<div class="lista1">
    <table cellspacing="0">
        <tr>
            <td class="bago">
				<div class="bagoshop">
					<a href="/#/">
						<button>

						</button>
					</a>
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
	.bago{
		width: 15%;
		max-width: 220px;
	}
	.bagoshop{
		margin-left: 8px;
		width: 20%;
	}
	.bagoshop a button{
		background: none;
		width: 210px;
		height: 37px;

	}
	.bagoshop a button::after{
		content: "BAGOSHOP";
		font-size: 3em;
		padding: 10px 0 0 5px;
		box-sizing: border-box;
		font-family: fontLOGO;
		color: var(--yellow);
	}
	.obal{
		width: 50%;
		max-width: 600px;

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
		width: calc(100% - 30px);
		height: 100%;
		float: left;
	}
	.vyhledavani input::placeholder{
		font-size: 1.2em;
	}
	.kosik{
		width: 10%;
		max-width: 130px;
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
	}

	@media only screen and (max-width: 800px){
		.obal{
			padding-right:10px;
		}
		.bago{
			padding: 0px 30px 0 30px;
		}
		.bagoshop a button{
			width: 100%;
			height: 100%;
			min-width: 55px;

			background-size: 50px;
			background-position: center;
			background-repeat: no-repeat;
			background-image: url('/images/Console.svg');
		}
		.bagoshop a button::after{
			content: " ";
		}

		.lista1{
			height: 60px;
		}
		.kosik{
			padding: 0 10px 0 0;
			margin: 0 auto;
		}
	}
</style>
