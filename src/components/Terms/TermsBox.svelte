<script lang="ts">
  import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
  import { onMount } from "svelte";
  import gsap from "gsap";

  function scrollToFooter() {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: "#footer" },
    });
  }

  onMount(() => {
    gsap.registerPlugin(ScrollToPlugin);
  });
</script>

<button on:click={scrollToFooter} class="alert-case">Study Case</button>

<style lang="sass">
    .alert-case
       position: fixed
       top: 50%
       border: 0
       right: -50px
       z-index: 100
       color: black
       transform: rotate(-90deg)
       text-transform: uppercase
       letter-spacing: 2px
       font-weight: 600
       background: #e3e2e1
       padding: 15px
       cursor: pointer
       transition: 0.2s

    .alert-case:hover
       background: white
       transition: 0.2s
</style>
