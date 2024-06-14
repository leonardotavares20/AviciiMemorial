<script>
  import { createEventDispatcher } from "svelte";
  export let href;
  export let ancorMenu = false;

  $: ancorMenu;

  const hoverAncorHandle = () => {
    
  }
</script>

<li>
  <a class:ancorMenu {href} target="_blank" rel="noopener noreferrer">
    <slot />
  </a>
</li>

<style lang="sass">
    .ancorMenu
        color: white
        letter-spacing: 1.5px
        text-transform: uppercase
        font-weight: 600
        fontSize: 14px
        transform: scale(.5, 1)
        transition: 0.2s ease

    .ancorMenu:hover
        color: gray
        transition: 0.2s ease
</style>
