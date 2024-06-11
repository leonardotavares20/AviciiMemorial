<script>
  import SpotifyIcon from "/icons/spotify.svg";
  import YoutubeIcon from "/icons/youtube.svg";
  import AppleIcon from "/icons/apple.svg";
</script>

<header>
  <menu class="menu">
    <li>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <img class="menu__icon" src={SpotifyIcon} alt="Spotify" />
      </a>
    </li>
    <li>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <img class="menu__icon" src={YoutubeIcon} alt="Youtube" />
      </a>
    </li>
    <li>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <img class="menu__icon" src={AppleIcon} alt="Apple" />
      </a>
    </li>
  </menu>
</header>

<style lang="sass">
    .menu
      display: flex
      justify-content: flex-end
      height: 100%
      align-items: center
      width: 100%

    .menu__icon
      width: 16px
</style>
