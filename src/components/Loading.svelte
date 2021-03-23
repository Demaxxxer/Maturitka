<script>
</script>
<div class="spinner" style=font-size:16px>
  <div class="head">
  </div>
</div>

<style>
  .spinner {
    width: 10em;
    height: 10em;
    border-top: 1em solid #ffd369;
    border-right: 1em solid transparent;
    animation: spinner 0.8s linear infinite;
    border-radius: 50%;
    margin: auto;
  }
  .head {
    width: 1em;
    height: 1em;
    border-radius: 50%;
    margin-left: 8.5em;
    margin-top: 0.5em;
    background-color: #ffd369;
  }
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
</style>
