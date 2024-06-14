<script>
  import Menu from "../Menu/Menu.svelte";
  import Ancor from "../Ancor/Ancor.svelte";
  import AppleIcon from "/icons/apple.svg";
  import SpotifyIcon from "/icons/spotify.svg";
  import YoutubeIcon from "/icons/youtube.svg";
</script>

<header>
  <Menu menuSocials>
    <Ancor href={"/"}>
      <img class="icon" src={SpotifyIcon} alt="Spotify" />
    </Ancor>
    <Ancor href={"/"}>
      <img class="icon" src={YoutubeIcon} alt="Spotify" />
    </Ancor>
    <Ancor href={"/"}>
      <img class="icon" src={AppleIcon} alt="Spotify" />
    </Ancor>
  </Menu>
</header>

<style lang="sass">
    .icon
      width: 18px
</style>
