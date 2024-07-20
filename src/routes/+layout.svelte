<script>
  import "../app.css";
  import Header from "$lib/components/Header/Header.svelte";
  import { createSmoothScroll } from "$lib/assets/lenis/lenis";
  import { onMount } from "svelte";
  import "../styles/init.sass";

  onMount(() => {
    createSmoothScroll();
  });
</script>

<div class="app">
  <Header></Header>
  <main>
    <slot></slot>
  </main>

  <footer></footer>
</div>
