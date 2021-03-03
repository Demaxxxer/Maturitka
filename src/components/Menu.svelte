<script>
    import {push, pop, replace} from 'svelte-spa-router';
    import { cart } from '../stores/stavy.js';
    let search = '';
    function goFind(e){
      if(search.length > 0){
        push('/produkty?hledat='+ search);
      }
      cartSum()
    }

    function cartSum(){
      let all = 0;
      for (const i in $cart){
        all += $cart[i]
      }
      return all;
    }

    $: sum = cartSum($cart)


</script>

<div class="lista">
    <div class="menu">

		<div class="logoObal">
			<div class="logoObalek">
				<div class="logo">
					<a href="/#/">
						<button></button>
					</a>
				</div>
			</div>
		</div>
		<div class="hledaniObal">
			<div class="hledaniObalek">
				<div class="hledani">
					<input type="text"
						bind:value={search}
						on:keyup={e => e.key == 'Enter' && goFind(e)}
						placeholder="Hledat">
					<button class="hledat" on:click={e => goFind(e)}></button>
				</div>
			</div>
		</div>
		<div class="kosikObal">
			<div class="kosikObalek">
				<div class="kosik">
					<a href="/#/kosik"><button>Košík</button></a>
          <div class="cart-count">{sum}</div>
				</div>
			</div>
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
	.logoObal{
		position: absolute;
		height: 100%;
		width: 25%;
		top: 0;
		left: 0;

	}
	.hledaniObal{
		position: absolute;
		height: 100%;
		width: 50%;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
	}
	.kosikObal{
		position: absolute;
		height: 100%;
		width: 25%;
		top: 0;
		right: 0;
	}
	.logoObalek, .hledaniObalek, .kosikObalek{
		position: relative;
		height: 100%;
	}
	.logo, .hledani{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);
	}

	.logo a button{

		width: 210px;
		height: 37px;

	}
	.logo a button::after{
		content: "BAGOSHOP";
		font-size: 2.8em;
		box-sizing: border-box;
		font-family: fontLOGO;
		color: var(--yellow);
	}

	.hledani{
		position: absolute;
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
		top: 50%;
		left: 67%;
		transform: translateX(-50%) translateY(-50%);
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

  .cart-count {
    position: absolute;
    top: -10px;
    right: -20px;
    width: 30px;
    height: 30px;
    color: var(--yellow);
    pointer-events: none;
    text-align: center;
  }

	@media only screen and (max-width: 800px){
		.logo{
			height: 100%;
			width: 100%;
			background-size: 50px;
			background-position: center;
			background-repeat: no-repeat;
			background-image: url('/images/Console.svg');
			left: 50%;
			top: 50%;
			transform: translateX(-50%) translateY(-50%);
		}

		.logo a button::after{
			content: " ";
			background: none;
		}
		.lista{
			height: 60px;
		}
		.kosik{
			left: 55%;
		}
		.kosik a button{
			font-size: 1.3em;
			background-size: 22px;
			padding-right: 30px;

		}

	}
</style>
