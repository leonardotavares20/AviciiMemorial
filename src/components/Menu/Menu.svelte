<script>
  export let menuLinks = false;
  export let menuSocials = false;
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
</style>
