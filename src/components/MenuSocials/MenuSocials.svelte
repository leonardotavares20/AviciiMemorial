<script>
  import Menu from "../Menu/Menu.svelte";
  import Anchor from "../Anchor/Anchor.svelte";
</script>

<header>
  <Menu menuSocials>
    <Anchor href={"/"}>
      <img class="icon" src="/icons/spotify.svg" alt="Spotify" />
    </Anchor>
    <Anchor href={"/"}>
      <img class="icon" src="/icons/youtube.svg" alt="Youtube" />
    </Anchor>
    <Anchor href={"/"}>
      <img class="icon" src="/icons/apple.svg" alt="Apple Music" />
    </Anchor>
  </Menu>
</header>

<style lang="sass">
    .icon
      width: 18px
</style>
