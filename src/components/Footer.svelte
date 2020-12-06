<script>

</script>

<div class="footer">
    <div class="spodek">
        <div class="logo">BAGOSHOP</div>
        <div class="informace">
            <p>
                telefon: +420 730 274 897<br>
                e-mail: bagoshop@gmail.com
            </p>

        </div>
        <div class="copyright">
            © Copyright 2020 -2021 | Všechna práva vyhrazena | Designed by Jan Pastierčin
        </div>
    </div>
</div>

<style>
.footer{
	position: relative;
	bottom: 0;
	left: 0;
	box-sizing: border-box;
	width: 100%;
	height: 100px;
	background-color: var(--darkgrey);
	border-top: solid 2px var(--lightgrey);
}

.spodek{
	width: 100%;
	max-width: 400px;
	margin: 0 auto;
	top: 0;
	left: 0;
}

.logo{
	position: relative;
	padding: 30px 2px 0 0;
	float:left;
	width: 50%;
	height: 70%;
	font-size: 1.8em;
	box-sizing: border-box;
	font-family: fontLOGO;
	color: var(--yellow);
	background: none;
	background-repeat: no-repeat;
	background-size: 30px;
	background-image: url('/images/Console.svg');
	background-position: top 5px center;
	text-align: center;

}

.logo::after {
	position: absolute;
	top: 10px;
	right: 0;
	bottom: 10px;
	content: "";
	border-right: solid white 1px;
	width: 1px;
	height: 50px;
}

.informace{
	padding: 8px 0 0 20px;
	box-sizing: border-box;
	float:left;
	width: 50%;
	height: 70%;
	font-size: 0.8em;
	color: white;

}

.copyright{
	text-align: center;
	float: left;
	font-size: 0.6em;
	width: 100%;
	height: 30%;
	box-sizing: border-box;
	padding-top: 5px;
	color: white;

}
</style>
