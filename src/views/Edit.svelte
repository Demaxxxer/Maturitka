<script>
    import axios from 'axios';
    import { onMount } from 'svelte';

    import { alertContent } from '../stores/stavy.js'

    let name;
    let storage;
    let cost;
    let release;
    let cat;
    let thumbnail;
    let desc;
    let gallery = [];
    let previewGallery = [];
    let minProps = {
      os: '',
      cpu: '',
      gpu: '',
      ram: '',
      dx: ''
    };
    let recProps = {
      os: '',
      cpu: '',
      gpu: '',
      ram: '',
      dx: ''
    };


    //Maximální velikost obrázku v Megabajtech
    const thumbnailSize = 5
    const gallerySize = 5


    let previewState = false;
    let previewThumbnail = '';

    const fileTypes = [
      'image/png',
      'image/jpeg'
    ];

    onMount(_ => {
      //Přidává eventy dropzony na náhlédový obrázek
      const thumbnailLabel = document.getElementById('img-thumbnail-label');
      ['dragenter', 'dragover', 'dragleave'].forEach(eventName => {
        thumbnailLabel.addEventListener(eventName, _ => {
          event.preventDefault();
          event.stopPropagation();
        }, false)
      })
      thumbnailLabel.addEventListener('drop', handleDropThumbnail, false)

      //Přidává eventy dropzony na galerii obrázků
      const galleryLabel = document.getElementById('gallery-label');
      ['dragenter', 'dragover', 'dragleave'].forEach(eventName => {
        galleryLabel.addEventListener(eventName, _ => {
          event.preventDefault();
          event.stopPropagation();
        }, false)
      })
      galleryLabel.addEventListener('drop', handleDropGallery, false)


    });



    function showThumbnail(){
      previewThumbnail = URL.createObjectURL(thumbnail)
      previewState = true;
    }

    function handleDropThumbnail(){
      event.preventDefault();
      event.stopPropagation();

      const file = event.dataTransfer.files[0]
      //Nebyl nalezen obrázek
      if(!file) return;
      //Špatný formát
      if(fileTypes.indexOf(file.type) == -1){
        alertContent.update(_ => [true,'Špatný typ souboru'])
        return;
      }
      //Špatá velikost
      if( (file.size / 1024 / 1024) > thumbnailSize ){
        alertContent.update(_ => [true,'Obrázek je moc veliký'])
        return;
      }

      thumbnail = file
      showThumbnail()
    }

    function handleAddThumbnail(e){
      const file = e.target.files[0]
      //Špatný formát
      if( (file.size / 1024 / 1024) > thumbnailSize ){
        alertContent.update(_ => [true,'Obrázek je moc veliký'])
        return;
      }

      thumbnail = file
      showThumbnail()
    }


    function addToGallery(fileList){
      let files = Array.from(fileList);
      let preview = []
      for(let i=0;i<files.length;i++){
        //Špatný formát
        if(fileTypes.indexOf(files[i].type) == -1){
          alertContent.update(_ => [true,'Soubor ' + files[i].name + ' neni platný obrázek'])
          return;
        }
        //Špatná velikost
        if( (files[i].size / 1024 / 1024) > gallerySize ){
          alertContent.update(_ => [true,'Obrázek ' + files[i].name + ' je moc veliký'])
          return;
        }

        preview.push(URL.createObjectURL(files[i]));

      }

      previewGallery = previewGallery.concat(preview);
      gallery = gallery.concat(files);

    }

    function handleDropGallery(){
      event.preventDefault();
      event.stopPropagation();
      const files = event.dataTransfer.files
      //Nebyl nalezen obrázek
      if(!files[0]) return;
      addToGallery(files);
    }

    function handleAddGallery(e){
      const files = e.target.files
      addToGallery(files);
    }

    function galleryDelete(id){
      previewGallery.splice(id,1);
      gallery.splice(id,1);
      previewGallery = previewGallery;
    }

    function handleSave(){
      console.log(minProps);
    }

</script>
<main>
    <form on:submit|preventDefault={handleSave}>
        <div class="wrapper1">
            <div class="nadpis">Nový produkt</div>

                <label for="nazev">Název</label>
                <input type="text" class="underline1" name="nazev" placeholder="Název hry"><br>


                <label for="kusy">Kusy skladem</label>
                <input type="number" class="underline2" name="kusy" placeholder="20" min="0" max="9999"><span class="ks">ks</span><br>

                <label for="cena">Cena</label>
                <input type="number" class="underline3" name="cena" placeholder="3000" min="0" max="9999"><span class="kc">Kč</span><br>

                <label for="datum">Datum vydání</label>
                <input type="date" class="underline4" name="datum" placeholder="1.1.2020"><br>


                <label class="kategorieText" for="kategorie">Kategorie</label>
                <select class="kategorieBox" name="kategorie" >
                    <option value="activ">Akční hry</option>
                    <option value="logic">Logické hry</option>
                    <option value="sim">Simulátory</option>
                    <option value="strat">Strategické hry</option>
                    <option value="rpg">RPG hry</option>
                    <option value="race">Závodní hry</option>
                </select>


              <div for="img">Náhled hry</div>
              <div>

              <div class="nahledak">

                <label class="nahledak-label" for="img-thumbnail" id="img-thumbnail-label"></label>
                <input class="nahledak-input" id="img-thumbnail"
                  type="file"
                  accept="image/png, image/jpeg"
                  on:input={e => handleAddThumbnail(e)}>

                  <div class="thumbnail-preview" active={previewState}>
                    <img src={previewThumbnail} alt="Obrazek nelze načíst">
                  </div>


              </div>



            </div>

        </div>
        <div class="wrapper2">
            <lable for="popisek" class="podnadpis">Podrobný popis produktů</lable><br>
            <textarea name="popisek" class="box2" placeholder="Podrobný popis..."></textarea><br>

            <div class="nadpis">Galerie obrázků</div>
            <div>
                <label class="nahrani" for="gallery-input" id="gallery-label"></label>
                <input type="file" multiple class="gallery-input" id="gallery-input"
                  accept="image/png, image/jpeg"
                  on:input={e => handleAddGallery(e)}>
                {#each previewGallery as preview, i}
                  <div class="gallery-preview">
                    <img src={preview} alt="Obrázek se nepodařilo načíst">
                    <button type="button" class="delete-preview"
                      on:click={_=>galleryDelete(i)}>╳</button>
                  </div>
                {/each}
            </div>

        </div>
        <div class="wrapper3">
            <div class="nadpis">Hardwarové a softwarové požadavky</div>

            <div class="podnadpis2">Doporučené PC požadavky</div>

                <label for="os2">Operační systém</label>
                <input type="text" class="underline" bind:value={recProps.os} placeholder="Windows, Linux, ..."><br>

                <label for="cpu2">Procesor</label>
                <input type="text" class="underline" bind:value={recProps.cpu} placeholder="Intel, AMD, ..."><br>

                <label for="gpu2">Grafická karta</label>
                <input type="text" class="underline" bind:value={recProps.gpu} placeholder="Nvidia, AMD, ..."><br>

                <label for="ram2">Paměť RAM</label>
                <input type="number" class="underline5" bind:value={recProps.ram} placeholder="4" min="0" max="128"><span class="gb">GB</span><br>

                <label for="direct2">DirectX</label>
                <input type="text" class="underline" bind:value={recProps.dx} placeholder="DirectX 11"><br>
            </div>
        <button class="pridat" type="submit">Přidat položku</button>
    </form>
</main>
<style>
    main{
        padding: 5px 0 20px;
    }

    .wrapper1, .wrapper2, .wrapper3{
        background: var(--darkgrey);
        position: relative;
        margin: 0 auto;
        margin-bottom: 20px;
        border-radius: 10px;
        padding: 20px 25px;
        width: 940px;
    }

    .nahledak{
        position: relative;
        display: block;
        background-color: white;
        width: 120px;
        height: 150px;
        margin-top: 10px;
        background-image: url('/images/plus.svg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: 25px;
    }

    .nahledak:hover {
      cursor: pointer;
    }

    .thumbnail-preview {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      cursor: pointer;
      pointer-events: none;
      z-index: 1;

    }

    .thumbnail-preview img {
      max-width:100%;
      max-height:100%;
    }

    .thumbnail-preview[active="true"] {
      display: block;
    }

    .nahledak-input{
        display: none;
    }

    .nahledak-label {
      display: block;
      opacity: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
    }

    .nahrani{
        display: block;
        background-color: white;
        width: 190px;
        height: 120px;
        margin-top: 10px;
        background-image: url('/images/plus.svg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: 25px;
        cursor: pointer;
    }

    .gallery-input {
      display: none;
    }

    .gallery-preview {
      position: relative;
      display: inline-block;
      width: 190px;
      height: 120px;
      margin: 5px;
    }

    .gallery-preview img {
      max-width: 190px;
      max-height: 120px;
    }

    .delete-preview {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      font-size: 1em;
      font-weight: bold;
      padding: 7px;
      background-color: #fe4d4d;
    }

    .nadpis{
        font-size: 1.5em;
        margin-bottom: 20px;
    }

    .podnadpis, .podnadpis2{
        font-size: 1.3em;
        margin-bottom: 20px;
    }
    .podnadpis2{
        margin-top: 20px;
    }
    .underline, .underline1, .underline2, .underline3, .underline4, .underline5{
        position: absolute;
        left: 40%;
        border-bottom: solid 1px var(--lightgrey);
        color: var(--text);
        margin-bottom: 10px;
        width: 100%;
    }
    .underline, .underline1{
        max-width: 200px;
    }
    .underline2, .underline3{
        max-width: 65px;
    }
    .underline4{
        max-width: 120px;
    }
    .underline5{
        max-width: 60px;
    }
    .underline5::after{
        content: 'GB';
    }
    input[type="date"]::-webkit-calendar-picker-indicator {
        filter: invert(1);
    }
    label{
        padding-bottom: 15px;
        line-height: 25px;
    }
    .kategorieText{
        line-height: 50px;
    }
    .kategorieBox{
        position: absolute;
        left: 40%;
        margin-top: 10px;
    }
    .box2{
        resize: none;
        display: block;
        background: var(--text);
        max-width: 300px;
        width: 100%;
        height: 100px;
    }
    .box2{
        margin-top: 10px;
    }
    .gb, .ks, .kc{
        position: absolute;
        padding-top: 1px;
        font-size: 0.8em;
    }
    .gb{
        left: 42.5%;
    }
    .ks{
        left: 43.5%;
    }
    .kc{
        left: 43.5%;
    }
    .pridat {
        height: 40px;
        width: 150px;
        border: solid 1px var(--grey);
        background-color: var(--yellow);
        border-radius: 10px;
        font-size: 1.3em;
        margin: 0 auto;
    }
    @media only screen and (max-width: 1200px){
        .wrapper1, .wrapper2, .wrapper3{

            width: 500px;
            margin: 15px auto;
        }

    }
    @media only screen and (max-width: 550px){
        .wrapper1, .wrapper2, .wrapper3{
            width: 400px;
            margin: 15px auto;
        }

    }

</style>
