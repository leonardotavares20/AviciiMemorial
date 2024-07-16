<script>
  import Header from "$lib/components/Header/Header.svelte";
  import { createSmoothScroll } from "$lib/assets/lenis/lenis";
  import { onMount } from "svelte";
  import "../styles/init.sass";

  onMount(() => {
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
