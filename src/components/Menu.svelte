<script>
    let search = '';

    function goFind(e){
      console.log('Vyheldať: ' + search)
    }

</script>

<div class="lista">
    <div class="menu">

		<div class="logo">
			<a href="/#/">
				<button></button>
			</a>
		</div>

		<div class="hledani">
			<input type="text"
				bind:value={search}
				on:keyup={e => e.key == 'Enter' && goFind(e)}
				placeholder="Hledat">
			<button class="hledat" on:click={e => goFind(e)}></button>
		</div>

		<div class="kosik">
			<a href="/#/kosik"><button>Košík</button></a>
		</div>

    </div>
</div>

<style>
	.lista{
		position: fixed;
		z-index: 10;
		top: 0;
		left: 0;
		width: 100%;
		height: 80px;
		background-color: var(--darkgrey);
	}
	.menu{
		position: relative;
		max-width: 1200px;
		width: 100%;
		height: 100%;
		margin: 0 auto;
	}
	.logo{
		position: absolute;
		width: 20%;
		left: 0;
	}

	.logo a button{
		background: none;
		width: 210px;
		height: 37px;

	}
	.logo a button::after{
		content: "BAGOSHOP";
		font-size: 3em;
		box-sizing: border-box;
		font-family: fontLOGO;
		color: var(--yellow);
		
	}
	.hledani{
		width: 50%;
		max-width: 600px;
		box-sizing: border-box;
	}
	.hledani{
		position: absolute;
		width: 60%;
		margin: 0 auto;
	}

	.hledani{
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
	.hledani input {
		box-sizing: border-box;
		color: white;
		width: calc(100% - 30px);
		height: 100%;
	}
	.hledani input::placeholder{
		font-size: 1.2em;
	}
	.kosik{
		position: absolute;
		width: 20%;
		right: 0;
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

		.lista{
			height: 60px;
		}
		.kosik{
			padding: 0 10px 0 0;
			margin: 0 auto;
		}
	}
</style>
