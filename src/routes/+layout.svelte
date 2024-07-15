<script>
  import Header from "$lib/components/Header/Header.svelte";
  import ScrollTrigger from "gsap/dist/ScrollTrigger";
  import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
  import { createSmoothScroll } from "$lib/assets/scroll/smoothScroll";
  import { onMount } from "svelte";
  import "../styles/init.sass";
  import gsap from "gsap";

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);
    
    createSmoothScroll();
  });
</script>

<div class="app">
  <Header />
  <main>
    <slot />
  </main>

  <footer></footer>
</div>

<style>
</style>
