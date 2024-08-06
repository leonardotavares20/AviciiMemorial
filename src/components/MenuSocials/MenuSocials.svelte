<script>
  import { menuSocials } from "@/lib/assets/menu-socials/menu-socials";
  
  import Menu from "../Menu/Menu.svelte";
  import Anchor from "../Anchor/Anchor.svelte";
</script>

<div class="menu-socials">
  <Menu menuSocials>
    {#each menuSocials as { alt, href, src }}
      <Anchor {href}>
        <img class="menu-socials__icon" {src} {alt} />
      </Anchor>
    {/each}
  </Menu>
</div>

<style lang="sass">
    .menu-socials
      grid-area: socials

    .menu-socials__icon
      width: 18px
      transition: 0.2s

    .menu-socials__icon:hover
      filter: invert(35%)
      transition: 0.2s
</style>
