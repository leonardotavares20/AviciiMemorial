<script>
  import Menu from "../Menu/Menu.svelte";
  import Anchor from "../Anchor/Anchor.svelte";
</script>

<header>
  <Menu menuSocials>
    <Anchor href={"/"}>
      <img class="icon" src="/iconsSocials/spotify.svg" alt="Spotify" />
    </Anchor>
    <Anchor href={"/"}>
      <img class="icon" src="/iconsSocials/youtube.svg" alt="Youtube" />
    </Anchor>
    <Anchor href={"/"}>
      <img class="icon" src="/iconsSocials/apple.svg" alt="Apple Music" />
    </Anchor>
  </Menu>
</header>

<style lang="sass">
    .icon
      width: 18px
</style>
