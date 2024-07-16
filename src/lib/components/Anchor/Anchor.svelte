<script lang="ts">
  export let href: string;
  export let ancorMenu: boolean = false;

  $: ancorMenu;
</script>

<li>
  <a
    class:ancor-menu={ancorMenu}
    {href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <slot />
  </a>
</li>

<style lang="sass">
    .ancor-menu
        position: relative
        color: white
        letter-spacing: 1.5px
        text-transform: uppercase
        font-weight: 600
        transition: 0.2s ease

    .ancor-menu:hover
        color: gray
        transition: 0.2s ease
</style>
