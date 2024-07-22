<script lang="ts">
  export let background: string;
  export let alt: string;
  export let type: string;
  export let target: string;
</script>

<div class="instagram-card">
  <a href={target} target="_blank">
    <img class="instagram-card__background" src={background} {alt} />
    {#if type === "video"}
      <img
        class="instagram-card__icon"
        src="/play/play.svg"
        aria-hidden="true"
        alt=""
      />
    {/if}
    {#if type === "collection"}
      <img
        class="instagram-card__icon instagram-card__icon--collection"
        src="/collection/collection.svg"
        aria-hidden="true"
        alt=""
      />
    {/if}
  </a>
</div>

<style lang="sass">
    @import '@/styles/variables/_color'
  
    .instagram-card
      position: relative
      max-height: 350px
      min-height: 300px
      object-fit: cover

    .instagram-card__icon
      width: 40px
      position: absolute
      z-index: 10
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      filter: drop-shadow(0 0 0.2rem #0000005e)
      
    .instagram-card__icon--collection
      left: 92%
      top: 8%
      width: 25px

    .instagram-card__background
      width: 100%
      object-fit: cover
      height: 100%
</style>
