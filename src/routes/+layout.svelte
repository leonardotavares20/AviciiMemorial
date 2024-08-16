<script>
  import "../app.css";
  import "../styles/init.sass";
  import { onMount } from "svelte";
  import Links from "@/components/Links/Links.svelte";
  import Header from "@/components/Header/Header.svelte";
  import Banner from "@/components/Banner/Banner.svelte";
  import { createSmoothScroll } from "$lib/assets/lenis/lenis";
  import Instagram from "@/components/Instagram/Instagram.svelte";
  import Remebering from "@/components/Remembering/Remebering.svelte";
  import ShareMemories from "@/components/ShareMemories/ShareMemories.svelte";

  onMount(() => {
    createSmoothScroll();
  });
</script>

<div class="app">
  <Header />
  <main>
    <Banner />
    <Remebering />
    <ShareMemories />
    <Links />
    <slot></slot>
  </main>
  <footer>
    <Instagram />
  </footer>
</div>

<style>
  .app {
    overflow: hidden;
  }
</style>
