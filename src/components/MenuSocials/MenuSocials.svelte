<script>
  import Menu from "../Menu/Menu.svelte";
  import Anchor from "../Anchor/Anchor.svelte";
  import AppleIcon from "/icons/apple.svg";
  import SpotifyIcon from "/icons/spotify.svg";
  import YoutubeIcon from "/icons/youtube.svg";
</script>

<header>
  <Menu menuSocials>
    <Anchor href={"/"}>
      <img class="icon" src={SpotifyIcon} alt="Spotify" />
    </Anchor>
    <Anchor href={"/"}>
      <img class="icon" src={YoutubeIcon} alt="Spotify" />
    </Anchor>
    <Anchor href={"/"}>
      <img class="icon" src={AppleIcon} alt="Spotify" />
    </Anchor>
  </Menu>
</header>

<style lang="sass">
    .icon
      width: 18px
</style>
