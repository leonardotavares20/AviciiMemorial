<script lang="ts">
  export let menuLinks: boolean = false;
  export let menuSocials: boolean = false;
</script>

<menu class:menuLinks class:menuSocials><slot /></menu>

<style lang="sass">
    @import '@/styles/variables/_spacing'

    .menuLinks
        display: flex
        justify-content: center
        align-self: center
        align-items: center
        gap: $sp-lg-2x
        list-style-type: none

    .menuSocials
        display: flex
        justify-content: flex-end
        height: 100%
        align-items: center
        width: 100%
        gap: $sp-md-2x
        list-style-type: none
</style>
