<script lang="ts">
  export let memories = false;
  export let instagram = false;
</script>

<ul id="grid" class="grid" class:grid-memories={memories} class:grid-instagram={instagram}>
  <slot />
</ul>

<style lang="sass">
    @import '@/styles/variables/_spacing'

    .grid
      display: grid
      opacity: 0
      margin: auto

    .grid-memories
      grid-template-columns: repeat(3, 1fr)
      width: 75%
      gap: $sp-lg-4x

    .grid-instagram
      width: 70vw
      background: white
      grid-template-rows: repeat(5, 1fr)
      justify-content: center
      grid-template-columns: repeat(4, 1fr)
      gap: $sp-sm
       
</style>
