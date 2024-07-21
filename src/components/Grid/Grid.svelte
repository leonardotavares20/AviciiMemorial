<script lang="ts">
  export let memories = false;
  export let instagram = false;
</script>

<ul id="grid" class:grid-memories={memories} class:grid-instagram={instagram}>
  <slot />
</ul>

<style lang="sass">
    @import '@/styles/variables/_spacing'

    .grid-memories
        display: grid
        grid-template-columns: repeat(3, 1fr)
        width: 75%
        gap: $sp-lg-4x
        opacity: 0
        margin: auto
</style>
