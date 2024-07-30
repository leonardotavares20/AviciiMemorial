<script lang="ts">
  import ScrollTrigger from "gsap/dist/ScrollTrigger";
  import { onMount } from "svelte";
  import gsap from "gsap";
  import { ScrollRemembering } from "@/lib/assets/animations/scroll/ScrollRemembering";

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
    @import '@/styles/variables/_color'
    @import '@/styles/variables/_spacing'
    @import '@/styles/variables/_media'

    .remembering-container
        color: $white
        letter-spacing: 2px
        width: 100%
        display: flex
        justify-content: center
        height: 550px
        align-items: center

    .remembering-content
        width: clamp(min(90%, 400px), 90%, max(35vw, 650px))
        font-size: clamp(0.8rem, 1rem, 2vw)
        display: grid
        opacity: 0
        gap: $sp-md-2x
        justify-items: center
        text-align: center

    .remembering-content__title
        padding-bottom: $sp-sm
        width: 90%

    .remembering-content__text
        line-height: 27px

    @media screen and (max-width: $tb-md)
      .remembering-container
        height: 450px

</style>
