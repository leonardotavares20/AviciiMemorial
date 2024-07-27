<script>
  import Menu from "../Menu/Menu.svelte";
  import Anchor from "../Anchor/Anchor.svelte";
</script>

<div class="menu-socials">
  <Menu menuSocials>
    <Anchor href={"/"}>
      <img class="menu-socials__icon" src="/iconsSocials/spotify.svg" alt="Spotify" />
    </Anchor>
    <Anchor href={"/"}>
      <img class="menu-socials__icon" src="/iconsSocials/youtube.svg" alt="Youtube" />
    </Anchor>
    <Anchor href={"/"}>
      <img class="menu-socials__icon" src="/iconsSocials/apple.svg" alt="Apple Music" />
    </Anchor>
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
