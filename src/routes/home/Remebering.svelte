<script lang="ts">
  import ScrollTrigger from "gsap/dist/ScrollTrigger";
  import { onMount } from "svelte";
  import gsap from "gsap";
  import { ScrollRemembering } from "$lib/assets/animations/scroll/ScrollRemembering";

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    const scroll = new ScrollRemembering();

    scroll.getScroll();
  });
</script>

<section class="remembering-container">
  <div id="remembering-content" class="remembering-content">
    <img
      class="remembering-content__title"
      src="/titles/titleRemembering.svg"
      alt="Remembering Tim Bergling"
    />
    <p class="remembering-content__text">
      Tim created music that brought people together with timeless memories from
      all over the world.
    </p>
    <p class="remembering-content__text">
      This space was created for you to share your memories and let the world
      know what Avicii meant to you.
    </p>
    <p class="remembering-content__text">
      His music and your memories are forever.
    </p>
  </div>
</section>

<style lang="sass">
    .remembering-container
        color: white
        letter-spacing: 2px
        width: 100%
        display: flex
        justify-content: center
        height: 550px
        align-items: center

    .remembering-content
        width: 60%
        display: grid
        opacity: 0
        gap: 20px
        justify-items: center
        text-align: center
        max-width: 650px

    .remembering-content__title
        padding-bottom: 5px

    .remembering-content__text
        line-height: 27px
</style>
