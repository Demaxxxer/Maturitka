<script>
    import axios from 'axios';
    import { onMount } from 'svelte';
    import {push, pop, replace} from 'svelte-spa-router'

    import { alertContent, cats } from '../stores/stavy.js'
    import { getImgUrl } from '../scripty/uzitecne.js';


    export let params = {}

    let name = '';
    let storage = '';
    let cost = '';
    let release = '';
    let cat;
    let thumbnail;
    let desc = '';
    let gallery = [];
    let previewGallery = [];
    let os = '';
    let cpu = '';
    let gpu = '';
    let ram = '';
    let dx = '';
    let size = '';

    //Maximální velikost obrázku v Megabajtech
    const thumbnailSize = 5
    const gallerySize = 5
    //Maximální počet obrázku v galerii
    const galleryMax = 10

    let previewState = false;
    let previewThumbnail = '';

    const fileTypes = [
      'image/png',
      'image/jpeg'
    ];

    onMount(_ => {
      if(params.id){
        axios({
          method: 'get',
          url: '/api/item/get',
          params: params
        }).then(res => {
          name = res.data.name;
          storage = res.data.storage;
          cost = res.data.cost;
          const time = new Date(res.data.release);
          //yyyy-mm-dd
          release = time.toISOString().split("T")[0];
          cat = res.data.cat;
          thumbnail = res.data.thumbnail;
          desc = res.data.desc;
          previewState = true;
          previewThumbnail = getImgUrl(res.data.thumbnail);

          for(const i in res.data.gallery){
            previewGallery.push(getImgUrl(res.data.gallery[i]))
            gallery.push(res.data.gallery[i]);
          }
          previewGallery = [...previewGallery];
          os = res.data.os;
          cpu = res.data.cpu;
          gpu = res.data.gpu;
          ram = res.data.ram;
          dx = res.data.dx;
          size = res.data.size;
        }).catch(err => {
          //Špatná id produktu
          alertContent.update(_ => err);
          replace('/')
        })
      }
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
        alertContent.update(_ => { return { custom: true,
            msg: 'Špatný typ souboru'
        }})

        return;
      }
      //Špatá velikost
      if( (file.size / 1024 / 1024) > thumbnailSize ){
        alertContent.update(_ => { return { custom: true,
            msg: 'Obrázek je moc veliký'
        }})
        return;
      }

      thumbnail = file
      showThumbnail()
    }

    function handleAddThumbnail(e){
      const file = e.target.files[0]
      //Špatný formát
      if( (file.size / 1024 / 1024) > thumbnailSize ){
        alertContent.update(_ => { return { custom: true,
            msg: 'Obrázek je moc veliký'
        }})
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
          alertContent.update(_ => { return { custom: true,
              msg: 'Soubor ' + files[i].name + ' není platný obrázek'
          }})
          return;
        }
        //Špatná velikost
        if( (files[i].size / 1024 / 1024) > gallerySize ){
          alertContent.update(_ => { return { custom: true,
              msg: 'Obrázek ' + files[i].name + ' je moc veliký'
          }})
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

    function handleNew(){
      const payload = new FormData();
      //Přidává galerii
      gallery.forEach( file => {
        payload.append('gallery', file);
      });
      //Přidává náhleďák
      if(thumbnail){
        payload.append('thumbnail', thumbnail);
      }
      //Pisemné vstupy formuláře
      const inputs = {
        name,storage,cost,release,cat,desc,os,cpu,gpu,ram,dx,size
      }
      for (const input in inputs) {
        payload.append(input, inputs[input]);
      }

      axios({
        method: 'post',
        url: '/api/item/create',
        //headers: {'content-type': 'multipart/form-data'},
        data: payload
      }).then(res => {
        alertContent.update(_ => res);
        replace('/seznam')
      }).catch(err => {
        alertContent.update(_ => err);
        //Špatné údaje třeba
      })
    }

    function handleSave(){

      const payload = new FormData();

      //Přidává galerii

      let oldFiles = [];
      gallery.forEach( file => {
        if(file instanceof File){
          payload.append('gallery', file);
        } else {
          oldFiles.push(file);
        }
      });

      payload.append('galleryOld', JSON.stringify(oldFiles));

      //Přidává náhleďák
      if(thumbnail){
        payload.append('thumbnail', thumbnail);
      }

      //Pisemné vstupy formuláře
      const inputs = {
        name,storage,cost,release,cat,desc,os,cpu,gpu,ram,dx,size
      }
      for (const input in inputs) {
        payload.append(input, inputs[input]);
      }

      axios({
        method: 'post',
        url: '/api/item/update',
        params: {
          id: params.id
        },
        data: payload
      }).then(res => {
        alertContent.update(_ => res);
        replace('/seznam')
      }).catch(err => {
        alertContent.update(_ => err);
        console.log(err.response)
        //Špatné údaje třeba
      })


    }


</script>
<main>
  <form on:submit|preventDefault={e => {
    if(params.id){
        handleSave()
        return;
      }
      handleNew()
    }
  }>
      <div class="wrapper1">
          <div class="nadpis">Nový produkt</div>

              <label for="nazev">Název</label>
              <input type="text" class="underline1" name="nazev" placeholder="Název hry" bind:value={name}><br>

              <label for="kusy">Kusy skladem</label>
              <input type="number" class="underline2" name="kusy" placeholder="20" min="0" max="9999" bind:value={storage}><span class="ks">ks</span><br>

              <label for="cena">Cena</label>
              <input type="number" class="underline3" name="cena" placeholder="3000" min="0" max="9999" bind:value={cost}><span class="kc">Kč</span><br>

              <label for="datum">Datum vydání</label>
              <input type="date" class="underline4" name="datum" placeholder="1.1.2020" bind:value={release}><br>

              <label class="kategorieText" for="kategorie">Kategorie</label>
              <select class="kategorieBox" name="kategorie" bind:value={cat}>
                {#each Object.keys($cats) as c}
                  <option value={c}>{$cats[c]}</option>
                {/each}
              </select>
            <div class="nadpiso">Náhled hry</div>
            <div class="napoveda">Kliknutím nebo přetažením nahrajete náhledový obrázek</div>
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
                  <textarea name="popisek" class="box2" placeholder="Podrobný popis..." bind:value={desc}></textarea><br>

                  <div class="nadpis">Galerie obrázků</div>
                  <div class="napoveda">Kliknutím nebo přetažením nahrajete obrázek do galerie</div>
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
            <input type="text" class="underline" bind:value={os} placeholder="Windows, Linux, ..."><br>

            <label for="cpu2">Procesor</label>
            <input type="text" class="underline" bind:value={cpu} placeholder="Intel, AMD, ..."><br>

            <label for="gpu2">Grafická karta</label>
            <input type="text" class="underline" bind:value={gpu} placeholder="Nvidia, AMD, ..."><br>

            <label for="ram2">Paměť RAM</label>
            <input type="number" class="underline5" bind:value={ram} placeholder="4" min="0" max="128"><span class="gb">GB</span><br>

            <label for="direct2">DirectX</label>
            <input type="text" class="underline" bind:value={dx} placeholder="DirectX 11"><br>

            <label for="disc">Uložiště</label>
            <input type="number" class="underline5" bind:value={size} placeholder="30" min="0" max="999"><span class="gb">GB</span>
            <!--Přidal jsem tady uložiště na disku-->
      </div>
    <button class="pridat" type="submit">{params.id ? 'Uložit položku' : 'Přidat položku'}</button>
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
    .nadpiso{
      margin-bottom: 5px;
    }
    .nadpis{
        font-size: 1.5em;
        margin-bottom: 10px;
    }
    .napoveda{
      font-size: 0.7em;
      color: #808080;
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
