<script lang="ts">
  import { ScrollLinks } from "@/lib/assets/animations/scroll/ScrollLinks";

  import { onMount } from "svelte";

  onMount(() => {
    const scroll = new ScrollLinks();
    scroll.getScroll();
  });
</script>

<div id="links-container" class="links-container">
  <ul class="links-container__menu-links">
    <a class="links-container__link" href="#memories-section">
      <li>Comments</li>
    </a>
    <li aria-hidden="true">•</li>
    <a class="links-container__link" href="/">
      <li>Images</li>
    </a>
  </ul>
</div>

<style lang="sass">
    @import '@/styles/variables/_color'
    @import '@/styles/variables/_spacing'
    @import '@/styles/variables/_font'

    .links-container
        color: $white
        opacity: 0
        margin-top: $sp-lg-1x
        display: flex
        justify-content: center
        font-size: $ft-md
        text-transform: uppercase
        letter-spacing: 2px
        
    .links-container__menu-links
        display: flex
        gap: $sp-sm-1x

    .links-container__link
        color: $white
</style>
