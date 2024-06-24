<script lang="ts">
  import { onMount } from "svelte";
  $: scrollViewPort = false;

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", (event) => {
      scrollViewPort = window.scrollY > 30;
    });
  }

  onMount(() => {
    if (typeof window !== "undefined" && window.scrollY > 30) {
      scrollViewPort = true;
    }
  });
</script>

<header class:header--scrollViewHeight={scrollViewPort} class="header">
  <nav class="navigation">
    <slot />
  </nav>
</header>
<div class="header-suport"></div>

<style lang="sass">
  .header
      width: 100%
      text-align: center
      z-index: 20
      display: flex
      justify-content: center
      position: fixed
      top: 0
      height: 150px
      transition: 0.5s

  .header-suport
      height: 5px

  .header--scrollViewHeight
      height: 60px
      background: black
      transition: 0.5s

  .navigation
      width: 93%
      display: grid
      grid-template-columns: 1fr 3fr 1.2fr
      align-items: center
</style>
