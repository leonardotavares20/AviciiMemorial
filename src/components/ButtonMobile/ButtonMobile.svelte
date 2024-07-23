<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatcher = createEventDispatcher();
  let isOpen: boolean = false;

  function handleClick() {
    isOpen = !isOpen;
    dispatcher("clickmobilebutton", isOpen);
  }
</script>

<button on:click={handleClick} class="menu-links__mobile-button">
  <span class="menu-links__lines">
    <span class:menu-links__line-one={isOpen} class="menu-links__line"></span>
    <span class:menu-links__line-two={isOpen} class="menu-links__line"></span>
    <span class:menu-links__line-three={isOpen} class="menu-links__line"></span>
  </span>
</button>

<style lang="sass">
    @import '@/styles/variables/_media'
    @import '@/styles/variables/_border'
    @import '@/styles/variables/_color'
  
    .menu-links__mobile-button 
        width: 0
        visibility: hidden

    @media screen and (max-width: $tb-md)
        .menu-links__mobile-button 
            width: 30px
            z-index: 20
            height: 30px
            display: flex
            align-items: center
            visibility: visible
            object-position: 4rem
            box-sizing: border-box
            justify-content: center
            border-radius: $bd-radius-pill
            border: $bd-width-md solid $white

        .menu-links__lines
            display: flex
            gap: 3px
            width: 70%
            height: 70%
            align-items: center
            flex-direction: column
            justify-content: center
            
        .menu-links__line
            width: 60%
            height: 1px
            display: block
            transition: 0.2s
            background: $white

        .menu-links__line-one
          width: 60%
          transform: rotate(45deg) translate(2.5px, 2px) 

        .menu-links__line-two
          opacity: 0
          visibility: hidden

        .menu-links__line-three
          width: 60%
          transform: rotate(-45deg) translate(3.5px, -3px)
</style>
