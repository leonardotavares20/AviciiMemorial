<script lang="ts">
  import Links from "./Links.svelte";
</script>

<section class="memories-section">
  <Links />
  <h2 class="memories-section__title">
    Take a few minutes and read the avicii stories and memories people have
    shared from all over the world.
  </h2>
</section>

<style lang="sass">
    .memories-section
        display: grid
        justify-content: center

    .memories-section__title
        font-size: 1.25rem
        letter-spacing: 5px
        font-weight: 500
        color: white
        margin-top: 100px
        text-transform: uppercase
        text-align: center
        line-height: 28px
        max-width: 530px
</style>
