<script lang="ts">
  import { createEventDispatcher } from "svelte";
  export let href;
  export let ancorMenu = false;

  $: ancorMenu;

  const dispatch = createEventDispatcher();

  const mouseEnterAncorHandle = (event: Event) => {
    dispatch("mouseEnterAnchor");
  };

  const mouseLeaveAncorHandle = (event: Event) => {
    dispatch("mouseLeaveAnchor");
  };
</script>

<li on:mouseenter={mouseEnterAncorHandle} on:mouseleave={mouseLeaveAncorHandle}>
  <a class:ancorMenu {href} target="_blank" rel="noopener noreferrer">
    <slot />
  </a>
</li>

<style lang="sass">
    .ancorMenu
        position: relative
        color: white
        letter-spacing: 1.5px
        text-transform: uppercase
        font-weight: 600
        font-size: 14px
        transform: scale(.5, 1)
        transition: 0.2s ease

    .ancorMenu:hover
        color: gray
        transition: 0.2s ease
</style>
