<script lang="ts">
  export let memories = false;
  export let instagram = false;
</script>

<ul
  id="grid"
  class="grid"
  class:grid-memories={memories}
  class:grid-instagram={instagram}
>
  <slot />
</ul>

<style lang="sass">
    @import '@/styles/variables/_spacing'
    @import '@/styles/variables/_media'

    .grid
      display: grid
      opacity: 0
      margin: auto

    .grid-memories,
    .grid-instagram
      max-width: 1420px

    .grid-memories
      grid-template-columns: repeat(auto-fill, minmax(clamp(90px, 20vw, 300px), 1fr))
      width: 75%
      gap: $sp-lg-4x

    .grid-instagram
      width: 80vw
      justify-content: center
      grid-template-columns: repeat(auto-fill, minmax(clamp(100px, 30vw, 300px), 1fr))
      gap: $sp-sm

    @media screen and (max-width: $mb-md)
      .grid-memories
        gap: $sp-lg-3x
</style>
