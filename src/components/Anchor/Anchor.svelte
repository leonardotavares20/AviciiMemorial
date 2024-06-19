<script lang="ts">
  export let href;
  export let ancorMenu = false;

  $: ancorMenu;
</script>

<li>
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
        transition: 0.2s ease

    .ancorMenu:hover
        color: gray
        transition: 0.2s ease
</style>
