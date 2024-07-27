<script lang="ts">
  import { mediaQuery } from "svelte-legos";
  export let menuLinks: boolean = false;
  export let menuSocials: boolean = false;
  export let mobileMenuIsOpen: boolean = false;

  const isTabletScreen = mediaQuery("(max-width: 1024px)");

  if (!$isTabletScreen) mobileMenuIsOpen = false;
</script>

<menu
  style={!$isTabletScreen ? "opacity: 1" : ""}
  class:menu-links={menuLinks}
  class:menu-socials={menuSocials}
  class:menu-mobile={mobileMenuIsOpen}><slot /></menu
>

<style lang="sass">
    @import '@/styles/variables/_media'
    @import '@/styles/variables/_spacing'

    .menu-links
      display: flex
      justify-content: center
      align-self: center
      align-items: center
      gap: $sp-lg-2x
      opacity: 1
      list-style-type: none

    .menu-socials
      display: flex
      justify-content: flex-end
      height: 100%
      align-items: center
      width: 100%
      transition: 0.2s
      gap: $sp-md-2x
      list-style-type: none

    @media screen and (max-width: $tb-lg)
      .menu-links
        gap: $sp-sm-4x

    @media screen and (max-width: $tb-md)
      .menu-links
        display: flex
        flex-direction: column
        bottom: 0
        align-items: center
        align-content: center
        gap: 30px
        z-index: -1
        left: 0    
        opacity: 0
        pointer-events: none
        width: 100vw
        height: 100vh
        background: black
        position: fixed

      .menu-mobile
        pointer-events: all
        opacity: 1

      .menu-socials
        justify-content: center
</style>
