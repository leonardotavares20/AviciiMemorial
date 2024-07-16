<script lang="ts">
  export let menuLinks: boolean = false;
  export let menuSocials: boolean = false;
</script>

<menu class:menuLinks class:menuSocials><slot /></menu>

<style lang="sass">
    .menuLinks
        display: flex
        justify-content: center
        align-self: center
        align-items: center
        gap: 3rem
        list-style-type: none

    .menuSocials
        display: flex
        justify-content: flex-end
        height: 100%
        align-items: center
        width: 100%
        gap: 1.2rem
        list-style-type: none
</style>
